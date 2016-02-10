angular.module("HomePageModule")
    .controller("HomePageController",["$scope", "$location", function($scope, $location){
        
        // determine current location
        $scope.current = function() {
            var location;
            switch ($location.path()) {
                case '/':
                    location = 'fullStack';
                    break;
                case '/frontEnd':
                    location = 'frontEnd';
                    break;
                case '/post':
                    location = 'post';
                    break;
                case '/microservice':
                    location = 'microservice';
                    break;
                case '/aboutMe':
                    location = 'aboutMe';
                    break;                      
                default:
                    location = 'fullStack';
            }
        
            return location;
        };
}]);