'use strict';

angular.module('jobHunt')
    .directive('results', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/results/results.partial.html'
        };
    });
