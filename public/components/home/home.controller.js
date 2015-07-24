'use strict';

angular.module('jobHunt')
    .controller('homeCtrl', ['$scope', 'indeedService', '$location', '$anchorScroll',
        function($scope, indeedService, $location, $anchorScroll) {

            $scope.userInput = {};

            var scrollToResults = function() {
                $location.hash('results');
                $anchorScroll();
            };

            $scope.searchJobs = function(userInput) {
                indeedService.searchJobs(userInput)
                    .then(function(data) {
                        $scope.results = data.results;
                        scrollToResults();
                    });
            };
        }
    ]);
