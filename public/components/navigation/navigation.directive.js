'use strict';

angular.module('jobHunt')
    .directive('navigation', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/navigation/navigation.partial.html'
        };
    });
