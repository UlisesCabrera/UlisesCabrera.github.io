angular.module("FullStackModule")
    .factory('FullStackFactory',[function() {
        
        var projectsFactory = { 
            projects :[
                {
                    name: "Test 1",
                    description: "Hello from Test 1",
                    image: {"background-image" : "url(' images/angular-3.jpg')"}
                },
                {
                    name: "Test 3",
                    description: "Hello from Test 3"
                },                
                {
                    name: "Test 2",
                    description: "Hello from Test 2"
                },
                {
                    name: "Test 1",
                    description: "Hello from Test 1"
                },
                {
                    name: "Test 3",
                    description: "Hello from Test 3"
                },                
                {
                    name: "Test 2",
                    description: "Hello from Test 2"
                }                
        ]};
        
        return projectsFactory;
        
}]);