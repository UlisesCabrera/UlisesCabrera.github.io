angular.module('2016-Portfolio',['HomePageModule', 'ngRoute','FullStackModule','FrontEndModule','AboutMeModule','MicroserviceModule','PostModule'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl:'./partials/frontEnd.html',
			controller: 'FrontEndController'
		})
		.when('/fullStack', {
			templateUrl:'./partials/fullstack.html',
			controller: 'FullStackController'
		})
		.when('/post', {
			templateUrl:'./partials/post.html',
			controller: 'PostController'
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