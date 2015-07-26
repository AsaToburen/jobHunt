'use strict';

angular.module('jobHunt')
    .directive('navigation', ['indeedService', function(indeedService) {
        return {
            restrict: 'E',
            templateUrl: 'components/navigation/navigation.partial.html',
            link: function(scope, element, attrs) {
                
                var path = attrs.href;
               
                scope.location = location;
                scope.$watch('location.path()', function(newPath) {
                    if (path === newPath) {
                        element.addClass();
                    } else {
                        element.removeClass();
                    }
                });
            }
        };
    }]);
