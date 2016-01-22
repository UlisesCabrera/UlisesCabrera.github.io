angular.module("PostModule")
    .controller("PostController",["$scope", "$location","postFactory", function($scope, $location, postFactory){
        
        // getting posts
        $scope.posts = postFactory.getPosts().get(
                   function(response) {
                        $scope.posts = response.posts;
                    },
                    function(response) {
                        // error message on getting posts
                        $scope.message = "Error: "+response.status + " " + response.statusText;
                }
        );
        
}]);