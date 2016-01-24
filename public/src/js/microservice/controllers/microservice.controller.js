angular.module("MicroserviceModule")
    .controller("MicroserviceController",["$scope",'microserviceFactory', function($scope, microserviceFactory){
        // getting projects from the factory
        $scope.projects = microserviceFactory.projects;
}]);