angular.module("FullStackModule")
    .factory('FullStackFactory',[function() {
        
        var projectsFactory = { 
            projects :[
                {
                    name: "Test 1",
                    description: "Hello from Test 1"
                },
                {
                    name: "Test 2",
                    description: "Hello from Test 2"
                }
        ]};
        
        return projectsFactory;
        
}]);