angular.module('2016-Portfolio',['HomePageModule', 'ngRoute','FullStackModule','FrontEndModule','MicroserviceModule','PostModule'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl:'./partials/post.html',
			controller: 'PostController'
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