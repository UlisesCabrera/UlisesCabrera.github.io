angular.module("HomePageModule")
    .controller("HomePageController",["$scope", "$location", function($scope, $location){
        
        // determine current location
        $scope.current = function() {
            var location;
            switch ($location.path()) {
                case '/':
                    location = 'home';
                    break;
                case '/fullStack':
                    location = 'fullStack';
                    break;
                case '/frontEnd':
                    location = 'frontEnd';
                    break;
                case '/microservice':
                    location = 'microservice';
                    break;                    
                default:
                    location = 'home';
            }
        
            return location;
        };
        
        $scope.appName = "Ulises Cabrera";
}]);