angular.module('2016-Portfolio',['HomePageModule', 'ngRoute','FullStackModule','FrontEndModule','MicroserviceModule'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl:'./partials/main.html',
			controller: 'HomePageController'
		})
		.when('/fullStack', {
			templateUrl:'./partials/fullstack.html',
			controller: 'FullStackController'
		})
		.when('/frontEnd', {
			templateUrl:'./partials/frontEnd.html',
			controller: 'FrontEndController'
		})
		.when('/microservice', {
			templateUrl:'./partials/microservice.html',
			controller: 'MicroserviceController'
		})			
		.otherwise({
		 	redirectTo: "/"
		});
});