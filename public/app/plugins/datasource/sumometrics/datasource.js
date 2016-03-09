define([
    'angular',
    './directives',
    './query_ctrl'
  ],
  function (angular) {
    'use strict';

    var module = angular.module('grafana.services');

    module.factory('SumoMetricsDatasource', function ($q, backendSrv) {

      function SumoMetricsDatasource(datasource) {
        this.url = datasource.url;
        this.name = datasource.name;
        this.basicAuth = datasource.basicAuth;
        this.username = datasource.username;
        this.password = datasource.password;
      }

      SumoMetricsDatasource.prototype.query = function (options) {
        try {
          //console.log("SumoMetricsDatasource.query - query");
          //console.log(options);

          // Create the query list.
          var queryList = [];
          for (var i = 0; i < options.targets.length; i++) {
            var target = options.targets[i];
            if (target.query && target.query !== "") {
              queryList.push({query: target.query, rowId: target.refId});
            }
          }

          // Nothing to query, then bail.
          if (queryList.length < 1) {
            console.log("SumoMetricsDatasource.query - nothing to query");
            return $q.when([]);
          }

          // Otherwise, actually execute the query...
          return this._sumo({
            method: 'POST',
            url: '/api/v1/metrics/results',
            data: {
              "query": queryList,
              "startTime": options.range.from.valueOf(),
              "endTime": options.range.to.valueOf()
            }
          }).then(function (results) {
            //console.log("SumoMetricsDatasource.query - got response");
            //console.log(options);
            //console.log(results);

            // Bail out early if we haven't gotten any results.
            if (!results.data || !results.data.response) {
              console.log("SumoMetricsDatasource.query - ERROR: no results");
              console.log(options);
              console.log(results);
              return $q.reject(new Error("No results")); // TODO: How to report errors?
            }

            // Get the responses.
            var responses = results.data.response;

            // Is there anything in the responses array?
            if (responses.length < 1) {
              console.log("SumoMetricsDatasource.query - ERROR: empty response array");
              console.log(options);
              console.log(results);
              return $q.when([]);
            }

            // Check if we got an error.
            if (responses[0].messageType) {
              console.log("SumoMetricsDatasource.query -  ERROR: " + responses[0].message);
              console.log(options);
              console.log(results);
              return $q.reject(new Error(responses[0].message));
            }

            // Otherwise, translate the results in the format Grafana expects.
            var seriesList = [];
            for (var i = 0; i < responses.length; i++) {
              var response = responses[i];
              //if (response.results) {
              //  console.log("SumoMetricsDatasource.query -  " +
              //    "WARN: results missing for response[" + i + "]"); // TODO: Now what?
              //}
              if (response.messageType) {
                console.log("SumoMetricsDatasource.query -  " +
                  "WARN: message: " + response.message + ", type: " + response.messageType +
                " for response[" + i + "]");
                continue; // TODO: How to display warning?
              }
              for (var j = 0; j < response.results.length; j++) {
                var result = response.results[j];

                // Synthesize the "target" - the "metric name" basically.
                var target = "";
                var dimensions = result.metric.dimensions;
                for (var k = 0; k < dimensions.length; k++) {
                  var dimension = dimensions[k];
                  target += dimension.key + "=" + dimension.value;
                  if (k !== dimensions.length - 1) {
                    target += ",";
                  }
                }

                // Create Grafana-suitable datapoints.
                var values = result.datapoints.value;
                var timestamps = result.datapoints.timestamp;
                var length = Math.min(values.length, timestamps.length);
                var datapoints = [];
                for (var l = 0; l < length; l++) {
                  var value = values[l];
                  var valueParsed = parseFloat(value);
                  var timestamp = timestamps[l];
                  var timestampParsed = parseFloat(timestamp);
                  datapoints.push([valueParsed, timestampParsed]);
                }
                //console.log("SumoMetricsDatasource.query - data points: " + JSON.stringify(datapoints));

                // Add the series.
                seriesList.push({target: target, datapoints: datapoints});
              }
            }
            return {data: seriesList};
          });
        }
        catch (err) {
          console.log("SumoMetricsDatasource.query - ERROR THROWN: " + JSON.stringify(err));
          return $q.reject(err);
        }
      };

      SumoMetricsDatasource.prototype.testDatasource = function () {
        return this._sumo({
            method: 'POST',
            url: '/api/v1/metrics/names/suggest/name',
            data: {
              query: "cNonAunSrM" // Magic random string, should return nothing.
            }
          })
          .then(function (results) {
            console.log("SumoMetricsDatasource.testDatasource - result: " + JSON.stringify(results));
            return {status: "success", message: "Data source is working", title: "Success"};
          });
      };

      SumoMetricsDatasource.prototype.getDimensionKeys = function (query, success) {
        return this._sumo({
            method: 'POST',
            url: '/api/v1/metrics/dimensions/suggest/key',
            data: {
              query: query,
              dimensions: []
            }
          })
          .then(function (results) {
            //console.log("SumoMetricsDatasource.getDimensionsKeys - result: " + JSON.stringify(results));
            success(results);
          });
      };

      SumoMetricsDatasource.prototype.getDimensionValues = function (query, dimensionKey, success) {
        return this._sumo({
            method: 'POST',
            url: '/api/v1/metrics/dimensions/suggest/value',
            data: {
              query: query,
              key: dimensionKey,
              dimensions: []
            }
          })
          .then(function (results) {
            //console.log("SumoMetricsDatasource.getDimensionsKeys - result: " + JSON.stringify(results));
            success(results);
          });
      };

      //SumoMetricsDatasource.prototype.getMetricNames = function () {
      //  return this._sumo({
      //      method: 'POST',
      //      url: '/api/v1/metrics/names/suggest/name',
      //      data: {
      //        query: "metric"
      //      }
      //    })
      //    .then(function (results) {
      //      console.log("SumoMetricsDatasource.getMetricNames - result: " + JSON.stringify(results));
      //      return {status: "success", message: "Data source is working", title: "Success"};
      //    });
      //};

      SumoMetricsDatasource.prototype._sumo = function (options) {
        if (this.basicAuth || this.withCredentials) {
          options.withCredentials = true;
        }
        if (this.basicAuth) {
          options.headers = options.headers || {};
          options.headers.Authorization = this.basicAuth;
        }

        options.url = this.url + options.url;
        options.inspect = {type: 'sumometrics'};

        return backendSrv.datasourceRequest(options);
      };

      return SumoMetricsDatasource;
    });
  });
