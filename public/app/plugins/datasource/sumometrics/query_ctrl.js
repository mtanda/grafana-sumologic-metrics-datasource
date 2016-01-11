define([
    'angular',
    'lodash',
    './editor.js'
  ],
  function (angular, _, editor) {
    'use strict';

    var module = angular.module('grafana.controllers');

    module.controller('SumoMetricsQueryCtrl', function ($scope, backendSrv, templateSrv, $q, uiSegmentSrv) {

      $scope.codemirrorLoaded = function (codeMirrorInstance) {
        codeMirrorInstance.setOption("autofocus", true);
        codeMirrorInstance.setOption("mode", "sumometrics");
        codeMirrorInstance.setOption("extraKeys", {"Ctrl-Space": "autocomplete"});

        var mode = codeMirrorInstance.getMode();
        mode.codeMirror = codeMirrorInstance;
        mode.setDatasource($scope.datasource);
      };

      $scope.init = function () {
        console.log("SumoMetricsQueryCtrl.$scope.init - target: " + JSON.stringify($scope.target));

        if ($scope.target) {
          $scope.target.query = $scope.target.query || '';
          $scope.target.textEditor = $scope.target.textEditor || true;
        }
      };

      $scope.handleQueryError = function (err) {
        $scope.parserError = err.message || 'Failure';
        return [];
      };

      $scope.getMetricNames = function () {
        return $scope.datasource.getMetricNames()
          .then($scope.transformToSegments(true), $scope.handleQueryError);
      };

      $scope.refreshMetricData = function () {
        if (!_.isEqual($scope.oldTarget, $scope.target)) {
          $scope.oldTarget = angular.copy($scope.target);
          $scope.get_data();
        }
      };

      $scope.init();
    });
  })
;


//$scope.toggleEditorMode = function () {
//  console.log("SumoMetricsQueryCtrl.$scope.toggleEditorMode - target: " + JSON.stringify($scope.target));
//  $scope.target.textEditor = !$scope.target.textEditor;
//  parseTarget();
//};

//$scope.transformToSegments = function (addTemplateVars) {
//  console.log("SumoMetricsQueryCtrl.$scope.transformToSegments - addTemplateVars: " + JSON.stringify(addTemplateVars));
//  return function (results) {
//    console.log("SumoMetricsQueryCtrl.$scope.transformToSegments.fn - results: " + JSON.stringify(results));
//    var segments = _.map(results, function (segment) {
//      return uiSegmentSrv.newSegment({value: segment.text, expandable: segment.expandable});
//    });
//
//    if (addTemplateVars) {
//      _.each(templateSrv.variables, function (variable) {
//        segments.unshift(uiSegmentSrv.newSegment({
//          type: 'template',
//          value: '/$' + variable.name + '$/',
//          expandable: true
//        }));
//      });
//    }
//
//    return segments;
//  };
//};
