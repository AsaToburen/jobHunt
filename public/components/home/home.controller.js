'use strict';

angular.module('jobHunt')
    .controller('homeCtrl', ['$scope', 'indeedService', '$location',
        function($scope, indeedService, $location) {

            $scope.userInput = {};

            $scope.searchJobs = function(userInput) {
                indeedService.searchInput = userInput;
                $location.path('/results/' + JSON.stringify(userInput));
            };
        }
    ]);
