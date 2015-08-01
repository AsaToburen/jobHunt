'use strict';

angular.module('jobHunt')
    .directive('navigation', ['indeedService',
        function(indeedService) {
            return {
                restrict: 'E',
                templateUrl: 'components/navigation/navigation.partial.html',
                link: function(scope, element, attrs) {
                    scope.searchInput = indeedService.searchInput;
                },
                controller: function($scope) {
                    $scope.loadSavedJobs = function() {
                        indeedService.getJobs(indeedService.savedJobs)
                            .then(function(data) {
                                $scope.saved = true;
                                $scope.results = data.results;
                            });
                    };
                }
            };
        }
    ]);
