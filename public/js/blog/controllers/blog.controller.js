angular.module("BlogModule")
    .controller("BlogController",["$scope", "$location","blogFactory", function($scope, $location, blogFactory){
        $scope.appName = "Ulises Cabrera";
        
        $scope.posts = blogFactory.getPosts().query(
                    function(response) {
                        
                        $scope.posts = response;
                        console.log($scope.posts);
                    },
                    function(response) {
                        $scope.message = "Error: "+response.status + " " + response.statusText;
                });
}]);