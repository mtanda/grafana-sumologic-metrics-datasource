define([
    'angular',
  ],
  function (angular) {
    'use strict';

    var module = angular.module('grafana.directives');

    module.directive('metricQueryEditorSumometrics', function () {
      return {
        controller: 'SumoMetricsQueryCtrl',
        templateUrl: 'app/plugins/datasource/sumometrics/partials/query.editor.html'
      };
    });
  });
