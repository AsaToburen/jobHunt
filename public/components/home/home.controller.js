'use strict';

angular.module('jobHunt')
    .controller('homeCtrl', ['$scope', 'indeedService', '$location',
        function($scope, indeedService, $location) {

            $scope.userInput = {};

            $scope.searchJobs = function(userInput) {
                indeedService.searchInput = userInput;
                $location.path('/results');
            };

            $scope.loadSavedJobs = function() {
                indeedService.getJobs(indeedService.savedJobs)
                    .then(function(data) {
                        $scope.saved = true;
                        $scope.results = data.results;
                        console.log(data.results);
                    });
            };

        }
    ]);
