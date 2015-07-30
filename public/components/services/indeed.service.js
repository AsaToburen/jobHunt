'use strict';

angular.module('jobHunt')
    .factory('indeedService', ['$http', '$q',
        function($http, $q) {

            var indeedObj = {

                searchResults: [],
                savedJobs: [],
                savedResume: '',
                searchInput: '',

                searchJobs: function(userInput) {

                    var deferred = $q.defer();

                    $http({
                            method: 'GET',
                            url: '/api/search/' + JSON.stringify(userInput),
                            cache: true
                        })
                        .success(function(data) {
                            deferred.resolve(data);
                            indeedObj.searchResults = data;
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
