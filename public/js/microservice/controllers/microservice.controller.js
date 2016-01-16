angular.module("MicroserviceModule")
    .controller("MicroserviceController",["$scope",'MicroserviceFactory', function($scope, MicroserviceFactory){
        // getting projects from the factory
        $scope.projects = MicroserviceFactory.projects;
}]);