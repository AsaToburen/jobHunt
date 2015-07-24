'use strict';

angular.module('jobHunt')
    .factory('indeedService', ['$http', '$q',
        function($http, $q) {

            var indeedObj = {

                searchJobs: function(userInput) {
                    var deferred = $q.defer();
                    $http.get('/api/search/' + JSON.stringify(userInput))
                        .success(function(data) {
                            deferred.resolve(data);
                        }).error(function(e) {
                            console.log('Error: ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                },

                getJobs: function(keys) {
                    var deferred = $q.defer();
                    $http.get('/api/get/' + keys)
                        .success(function(data) {
                            deferred.resolve(data);
                        }).error(function(e) {
                            console.log('Error: ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                }
            };

            return indeedObj;
        }
    ]);
