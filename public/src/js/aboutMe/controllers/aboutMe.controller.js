/*global randomColor, angular*/
angular.module("AboutMeModule")
    .controller("AboutMeController",["$scope","$location","aboutMeFactory", function($scope, $location, aboutMeFactory){
        $scope.aboutMeInfo = aboutMeFactory;
        // data for project chart
        $scope.projectsLabels = aboutMeFactory.projects.projectsName;
        $scope.projectsData = aboutMeFactory.projects.projectsCount;
        $scope.projectColors = randomColor({ count: 10, luminosity: 'light'});
}]);