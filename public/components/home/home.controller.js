'use strict';

angular.module('jobHunt')
    .controller('homeCtrl', ['$scope', 'indeedService', '$location', '$anchorScroll',
        function($scope, indeedService, $location, $anchorScroll) {

            $scope.userInput = {};

            $scope.search = true;

            $scope.keyArray = indeedService.savedJobs;

            var scrollToResults = function() {
                $location.hash('results');
                $anchorScroll();
            };

            $scope.searchJobs = function(userInput) {
                indeedService.searchJobs(userInput)
                    .then(function(data) {
                        $scope.saved = false;
                        $scope.search = false;
                        $scope.results = data.results;
                        console.log(data.results);
                        scrollToResults();
                    });
            };

            $scope.loadSavedJobs = function() {
                indeedService.getJobs(indeedService.savedJobs)
                    .then(function(data) {
                        $scope.saved = true;
                        $scope.search = false;
                        $scope.results = data.results;
                        console.log(data.results);
                    });
            };

            $scope.saveJob = function(jobKey) {
                if (indeedService.savedJobs.indexOf(jobKey) == -1) {
                    indeedService.savedJobs.push(jobKey);

                } else {
                    indeedService.savedJobs.splice(indeedService.savedJobs.indexOf(jobKey), 1);
                }
                console.log(indeedService.savedJobs);
                console.log(indeedService.savedJobs.indexOf(jobKey));
            };
        }
    ]);
