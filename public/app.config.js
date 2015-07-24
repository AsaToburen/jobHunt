'use strict';

angular.module('jobHunt', ['ngRoute', 'ngResource']);

angular.module('jobHunt')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/home.view.html',
                controller: 'homeCtrl'
            })
            .when('/jobdetail/:key', {
                templateUrl: 'components/detail/detail.view.html',
                controller: 'detailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
