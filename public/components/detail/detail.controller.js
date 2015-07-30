'use strict';

angular.module('jobHunt')
    .controller('detailCtrl', ['$scope', '$routeParams', 'indeedService',
        function($scope, $routeParams, indeedService) {

            $scope.search = true;

            indeedService.getJobs($routeParams.key)
                .then(function(data) {
                    $scope.search = false;
                    $scope.jobDetail = data.results[0];
                    console.log(data);
                });
        }
    ]);
