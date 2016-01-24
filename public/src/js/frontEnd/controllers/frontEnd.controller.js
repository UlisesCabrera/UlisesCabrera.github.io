angular.module("FrontEndModule")
    .controller("FrontEndController",["$scope",'frontEndFactory', function($scope, frontEndFactory){
        // getting projects from the factory
        $scope.projects = frontEndFactory.projects;
}]);