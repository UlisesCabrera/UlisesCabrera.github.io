angular.module("FullStackModule")
    .controller("FullStackController",["$scope",'FullStackFactory', function($scope, FullStackFactory){
        // getting projects from the factory
        $scope.projects = FullStackFactory.projects;
}]);