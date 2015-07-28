'use strict';

angular.module('jobHunt')
    .controller('resultsCtrl', ['$scope', 'indeedService', '$location', '$routeParams',
        function($scope, indeedService, $location, $routeParams) {

            $scope.search = true;

            $scope.keyArray = indeedService.savedJobs;

            indeedService.searchJobs(JSON.parse($routeParams.search))
                .then(function(data) {
                    $scope.saved = false;
                    $scope.search = false;
                    indeedService.searchResults = data.results;
                    $scope.results = indeedService.searchResults;
                });

            //belongs in navigation

            $scope.loadSavedJobs = function() {
                indeedService.getJobs(indeedService.savedJobs)
                    .then(function(data) {
                        $scope.saved = true;
                        $scope.search = false;
                        $scope.results = data.results;
                       
                    });
            };

            $scope.saveJob = function(jobKey) {
                console.log(indeedService.savedJobs.indexOf(jobKey));
                if (indeedService.savedJobs.indexOf(jobKey) == -1) {
                    indeedService.savedJobs.push(jobKey);
                } else {
                    indeedService.savedJobs.splice(indeedService.savedJobs.indexOf(jobKey), 1);
                }
            };

        }
    ]);
