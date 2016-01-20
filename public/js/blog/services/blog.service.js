angular.module('BlogModule')
        .constant("baseURL","https://ulises-cabrera-blog-elgris12.c9users.io/wp-json/wp/v2/")
        .factory('blogFactory',['$resource','baseURL',function($resource, baseURL) {
    
            var blog = {};

            blog.getPosts = function() {
                return  $resource(baseURL+"posts/:id",null,  {'update':{method:'PUT' }});
            };
            
            return blog;
            
    
}]);
