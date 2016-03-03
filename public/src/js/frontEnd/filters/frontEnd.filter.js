/*global angular*/

angular.module("FrontEndModule").filter('filterByFramework', function() {
  
  return function(input, framework) {

    var output = [];
    // if all is selected return everything
    if (framework === 'all') {
        output = input;
        return output;
        
    } else {
        angular.forEach(input, function(project){
            // just return what is currently selected on the radio buttons
            if (project.primaryFramework === framework) {
                output.push(project);
            }
        
        });
        
        return output;
    }
  };
});