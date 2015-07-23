'use strict';

angular.module('jobHunt', ['ngRoute', 'ngResource']);

angular.module('jobHunt')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/home.view.html',
                controller: 'homeCtrl'
            })
            .when('/search', {
                templateUrl: 'components/search/search.view.html',
                controller: 'searchCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
