angular.module('2016-Portfolio',['HomePageModule', 'ngRoute','FullStackModule','FrontEndModule','AboutMeModule','MicroserviceModule'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
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
		.when('/aboutMe', {
			templateUrl:'./partials/aboutMe.html',
			controller: 'AboutMeController'
		})			
		.otherwise({
		 	redirectTo: "/"
		});
});