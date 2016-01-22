angular.module("AboutMeModule")
    .controller("AboutMeController",["$scope", "$location","aboutMeFactory", function($scope, $location, aboutMeFactory){
        $scope.appName = "Ulises Cabrera";
        
}]);