angular.module("PostModule")
    .controller("PostController",["$scope", "$location","postFactory", function($scope, $location, postFactory){
        $scope.appName = "Ulises Cabrera";
        
        // getting posts
        $scope.posts = postFactory.getPosts().get(
                   function(response) {
                        $scope.posts = response.posts;
                        
                        //only for debugging
                        console.log($scope.posts);
                        
                    },
                    function(response) {
                        // error message on getting posts
                        $scope.message = "Error: "+response.status + " " + response.statusText;
                }
        );
        
}]);