'use strict';

angular.module('jobHunt')
    .controller('detailCtrl', ['$scope', '$routeParams', 'indeedService',
        function($scope, $routeParams, indeedService) {

            indeedService.getJobs($routeParams.key)
                .then(function(data) {
                    $scope.jobDetail = data.results[0];
                    console.log(data);
                });
        }
    ]);
