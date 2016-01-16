angular.module("FrontEndModule")
    .controller("FrontEndController",["$scope",'FrontEndFactory', function($scope, FrontEndFactory){
        // getting projects from the factory
        $scope.projects = FrontEndFactory.projects;
}]);