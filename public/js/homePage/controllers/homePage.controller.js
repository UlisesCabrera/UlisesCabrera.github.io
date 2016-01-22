angular.module("HomePageModule")
    .controller("HomePageController",["$scope", "$location", function($scope, $location){
        
        // determine current location
        $scope.current = function() {
            var location;
            switch ($location.path()) {
                case '/':
                    location = 'blog';
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
                case '/aboutMe':
                    location = 'aboutMe';
                    break;                      
                default:
                    location = 'blog';
            }
        
            return location;
        };
}]);