'use strict';

angular.module('jobHunt')
    .factory('indeedService', ['$http', '$q', '$cacheFactory',
        function($http, $q, $cacheFactory) {

            var indeedObj = {

                searchResults: [],
                savedJobs: [],
                savedResume: '',
                searchInput: '',

                searchJobs: function(userInput) {

                    var deferred = $q.defer();

                    var dataCache = $cacheFactory.get('resultsCache');

                    if (!dataCache) {
                        dataCache = $cacheFactory('resultsCache');
                    }

                    var resultsFromCache = dataCache.get('results');
                    console.log(userInput);

                    if (resultsFromCache) {

                        console.log('returning results from cache');
                        console.log(resultsFromCache);
                        deferred.resolve(resultsFromCache);

                    } else {

                        console.log('getting new results data');
                        $http.get('/api/search/' + JSON.stringify(userInput))
                            .success(function(data) {
                                dataCache.put('results', data);
                                deferred.resolve(data);
                            }).error(function(e) {
                                console.log('Error: ', e);
                                deferred.reject(e);
                            });
                    }
                    return deferred.promise;
                },

                deleteCache: function() {
                    var dataCache = $cacheFactory.get('resultsCache');
                    dataCache.remove('results');
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
