define([
    'angular',
    './directives',
    './query_ctrl'
  ],
  function (angular) {
    'use strict';

    var module = angular.module('grafana.services');

    module.factory('SumoMetricsDatasource', function ($q, backendSrv, templateSrv) {

      function SumoMetricsDatasource(datasource) {
        this.url = datasource.url;
        this.name = datasource.name;
        this.basicAuth = datasource.basicAuth;
        this.username = datasource.username;
        this.password = datasource.password;
      }

      SumoMetricsDatasource.prototype.query = function (options) {
        try {
          console.log("SumoMetricsDatasource.query - " + JSON.stringify(options));

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
            console.log("SumoMetricsDatasource.query - nothing to query.");
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
            console.log("SumoMetricsDatasource.query - success.");

            // Bail out early if we haven't gotten any results.
            if (!results.data || !results.data.response) {
              console.log("SumoMetricsDatasource.query - no results.");
              return $q.when([]);
            }

            // Otherwise, translate the results in the format Grafana expects.
            var responses = results.data.response;
            var seriesList = [];
            for (var i = 0; i < responses.length; i++) {
              var response = responses[i];
              var rowId = response.rowId;
              console.log("SumoMetricsDatasource.query - rowId: " + rowId);
              var results = response.results;
              for (var j = 0; j < results.length; j++) {
                var result = results[j];
                console.log("SumoMetricsDatasource.query - metric: " + JSON.stringify(result.metric));

                // Synthesize the "target" - the "metric name" basically.
                var target = "";
                var dimensions = result.metric.dimensions;
                for (var k = 0; k < dimensions.length; k++) {
                  var dimension = dimensions[k];
                  target += dimension.key + "=" + dimension.value;
                  if (k != dimensions.length - 1) {
                    target += ",";
                  }
                }

                // Create Grafana-suitable datapoints.
                var values = result.datapoints.values;
                var datapoints = []
                for (var k = 0; k < values.length; k++) {
                  var value = values[k];
                  var timestamp = parseFloat(value[0]);
                  var value = value[1];
                  datapoints.push([value, timestamp]);
                }

                // Add the series.
                seriesList.push({target: target, datapoints: datapoints});
              }
            }
            var transformedResult = {data: seriesList};
            //console.log("SumoMetricsDatasource.query - transformedResult: " + JSON.stringify(transformedResult));
            return transformedResult;
          });
        }
        catch (err) {
          console.log("SumoMetricsDatasource.query - error: " + JSON.stringify(err));
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
