'use strict';

angular.module('jobHunt')
    .controller('savedCtrl', ['$scope', 'indeedService', '$location',
        function($scope, indeedService, $location) {

            $scope.keyArray = indeedService.savedJobs;

            indeedService.getJobs(indeedService.savedJobs)
                .then(function(data) {
                    $scope.saved = true;
                    $scope.results = data.results;
                });
        }
    ]);
