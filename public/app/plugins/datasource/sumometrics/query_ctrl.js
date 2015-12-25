define([
    'angular',
    'lodash',
  ],
  function (angular, _) {
    'use strict';

    var module = angular.module('grafana.controllers');

    module.controller('SumoMetricsQueryCtrl', function ($scope) {

      $scope.init = function () {
        console.log("SumoMetricsQueryCtrl.$scope.init - target: " + JSON.stringify($scope.target));

        var target = $scope.target;

        target.query = target.query || '';

        //$scope.$on('typeahead-updated', function() {
        //  $scope.$apply($scope.inputMetric);
        //  $scope.refreshMetricData();
        //});
      };

      $scope.refreshMetricData = function () {
        if (!_.isEqual($scope.oldTarget, $scope.target)) {
          $scope.oldTarget = angular.copy($scope.target);
          $scope.get_data();
        }
      };

      $scope.init();
    });

  });
