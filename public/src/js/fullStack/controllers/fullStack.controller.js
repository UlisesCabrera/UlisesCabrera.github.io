angular.module("FullStackModule")
    .controller("FullStackController",["$scope",'fullStackFactory', function($scope, fullStackFactory){
        // getting projects from the factory
        $scope.projects = fullStackFactory.projects;
}]);