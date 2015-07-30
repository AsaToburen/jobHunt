"use strict";angular.module("jobHunt",["ngRoute","ngResource"]),angular.module("jobHunt").service("angularFilepicker",["$window",function(e){return e.filepicker}]),angular.module("jobHunt").config(["$routeProvider",function(e){e.when("/",{templateUrl:"components/home/home.view.html",controller:"homeCtrl"}).when("/results/:search",{templateUrl:"components/results/results.view.html",controller:"resultsCtrl"}).when("/saved/",{templateUrl:"components/results/results.view.html",controller:"savedCtrl"}).when("/jobdetail/:key",{templateUrl:"components/detail/detail.view.html",controller:"detailCtrl"}).when("/resume/",{templateUrl:"components/resume/resume.view.html",controller:"resumeCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("jobHunt").filter("dateformat",["$filter",function(e){return function(r){if(null==r)return"";var t=e("date")(new Date(r),"mediumDate");return t}}]),angular.module("jobHunt").factory("indeedService",["$http","$q",function(e,r){var t={searchResults:[],savedJobs:[],savedResume:"",searchInput:"",searchJobs:function(n){var o=r.defer();return e({method:"GET",url:"/api/search/"+JSON.stringify(n),cache:!0}).success(function(e){o.resolve(e),t.searchResults=e}).error(function(e){console.log("Error: ",e),o.reject(e)}),o.promise},getJobs:function(t){var n=r.defer();return e.get("/api/get/"+t).success(function(e){n.resolve(e)}).error(function(e){console.log("Error: ",e),n.reject(e)}),n.promise}};return t}]),angular.module("jobHunt").controller("homeCtrl",["$scope","indeedService","$location",function(e,r,t){e.userInput={},e.searchJobs=function(e){r.searchInput=e,t.path("/results/"+JSON.stringify(e))},e.loadSavedJobs=function(){r.getJobs(r.savedJobs).then(function(r){e.saved=!0,e.results=r.results})}}]),angular.module("jobHunt").controller("resumeCtrl",["$scope","$sce","indeedService","angularFilepicker",function(e,r,t,n){function o(){""==t.savedResume&&n.pick({mimetypes:["application/pdf","application/msword"]},s)}function s(r){console.log(r),e.files.push(r);var n=r.url,o=n.substring(55,35);t.savedResume="https://www.filepicker.io/api/preview/"+o,e.previewId=t.savedResume,e.$apply()}e.files=[],n.setKey("AR4zdwe5SD6L3K1nFTgCyz"),e.pickFile=o,e.previewId=t.savedResume,e.trustSrc=function(e){return r.trustAsResourceUrl(e)},o()}]),angular.module("jobHunt").controller("resultsCtrl",["$scope","indeedService","$location","$routeParams",function(e,r,t,n){e.search=!0,e.keyArray=r.savedJobs,r.searchJobs(JSON.parse(n.search)).then(function(t){e.saved=!1,e.search=!1,e.results=r.searchResults.results}),e.loadSavedJobs=function(){r.getJobs(r.savedJobs).then(function(r){e.saved=!0,e.search=!1,e.results=r.results})},e.saveJob=function(e){-1==r.savedJobs.indexOf(e)?r.savedJobs.push(e):r.savedJobs.splice(r.savedJobs.indexOf(e),1)}}]),angular.module("jobHunt").controller("savedCtrl",["$scope","indeedService","$location",function(e,r,t){e.keyArray=r.savedJobs,r.getJobs(r.savedJobs).then(function(r){e.saved=!0,e.results=r.results})}]),angular.module("jobHunt").controller("detailCtrl",["$scope","$routeParams","indeedService",function(e,r,t){e.search=!0,t.getJobs(r.key).then(function(r){e.search=!1,e.jobDetail=r.results[0],console.log(r)})}]),angular.module("jobHunt").directive("navigation",["indeedService",function(e){return{restrict:"E",templateUrl:"components/navigation/navigation.partial.html",link:function(r,t,n){r.searchInput=e.searchInput}}}]);