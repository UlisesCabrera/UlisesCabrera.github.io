angular.module("HomePageModule")
    .controller("HomePageController",["$scope", "$location", function($scope, $location){
        
        // determine current location
        $scope.current = function() {
            var location;
            switch ($location.path()) {
                case '/':
                    location = 'frontEnd';
                    break;
                case '/fullStack':
                    location = 'fullStack';
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
                    location = 'frontEnd';
            }
        
            return location;
        };
}]);