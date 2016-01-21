angular.module('PostModule')
        .constant("baseURL","https://public-api.wordpress.com/rest/v1.1/sites/ucabrera12.wordpress.com/")
        .factory('postFactory',['$resource','baseURL',function($resource, baseURL) {
    
            var posts = {};

            posts.getPosts = function() {
                return  $resource(baseURL+"posts/:id", null,  {'update':{method:'PUT' }});
            };
            
            return posts;
            
    
}]);
