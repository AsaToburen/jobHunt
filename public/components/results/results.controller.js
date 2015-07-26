'use strict';

angular.module('jobHunt')
    .controller('resultsCtrl', ['$scope', 'indeedService', 'storageService', '$location', '$anchorScroll',
        function($scope, indeedService, storageService, $location, $anchorScroll) {

            $scope.search = true;

            indeedService.searchJobs(indeedService.searchInput)
                .then(function(data) {
                    $scope.saved = false;
                    $scope.search = false;
                    indeedService.searchResults = data.results;
                    $scope.results = indeedService.searchResults;
                    console.log(indeedService.searchResults);
                });

            //var evalItems = function() {
            //    if (storageService.getData('results')) {
            //        console.log(storageService.getData('results'));
            //        $scope.results = storageService.getData('results');
//
            //    } else {
            //        indeedService.searchJobs(indeedService.searchInput)
            //            .then(function(results) {
            //                $scope.results = results;
            //                console.log(JSON.stringify(results));
            //                storageService.setData('results', JSON.stringify(results));
            //            });
            //    }
            //};
            //evalItems();


            //belongs in navigation

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
            };
        }
    ]);
