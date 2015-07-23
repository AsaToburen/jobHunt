'use strict';

angular.module('jobHunt')
    .controller('homeCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.userInput = {};

        $scope.searchJobs = function(userInput) {
            console.log(JSON.stringify(userInput));

            return $http.get('/api/search/' + JSON.stringify(userInput))
                .success(function(data) {
                    $scope.results = data.results;
                });
        };

    }]);
