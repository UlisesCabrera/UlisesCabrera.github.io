/*global angular*/

angular.module("FrontEndModule")
    .controller("FrontEndController",["$scope",'frontEndFactory', function($scope, frontEndFactory){
        // getting projects from the factory
        $scope.projects = frontEndFactory.projects;
        
        //used to filter projects by framework
        $scope.frameworkProjects = {
            framework : 'all'
        };
}]);