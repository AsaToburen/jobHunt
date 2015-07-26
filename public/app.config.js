'use strict';

angular.module('jobHunt', ['ngRoute', 'ngResource']);

angular.module('jobHunt')
    .service('angularFilepicker', ['$window', function($window) {
        return $window.filepicker;
    }]);

angular.module('jobHunt')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/home.view.html',
                controller: 'homeCtrl'
            })
            .when('/results/', {
                templateUrl: 'components/results/results.view.html',
                controller: 'resultsCtrl'
            })
            .when('/jobdetail/:key', {
                templateUrl: 'components/detail/detail.view.html',
                controller: 'detailCtrl'
            })
            .when('/resume/', {
                templateUrl: 'components/resume/resume.view.html',
                controller: 'resumeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);