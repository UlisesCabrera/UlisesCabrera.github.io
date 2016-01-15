angular.module('2016-Portfolio',['HomePageModule', 'ngRoute','FullStackModule'])
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
		.otherwise({
		 	redirectTo: "/"
		});
});