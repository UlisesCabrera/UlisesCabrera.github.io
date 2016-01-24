/*global angular*/
angular.module('AboutMeModule')
        .factory('aboutMeFactory',['$resource',function($resource) {
    
            var aboutMeInfo = {
                name : "Ulises Cabrera",
                profile_picture: "images/Profile-Picture.png",
                aboutMe: "I am a front-end nanodegree graduate, task-driven and go-getter who loves the challenge of coding. Finishing my nanodegree at Udacity was just the beginning of my journey, currently I\'m learning to Build Modern Web Apps with the MEAN stack.",
                projects: { 
                    projectsName: ['Front-End', 'Full Stack', 'Microservices'],
                    projectsCount:[14 , 1, 5]
                },
                skills: {
                    skillsName: ['HTML5','CSS','Javascript', 'angular.js','node.js', 'express.js', 'mongoDB','Git','Bootstrap', 'Photoshop'],
                    skillsKnowledge:[8,8,7, 5, 5, 4, 6, 5,8, 7]
                }
            };

            
            return aboutMeInfo;
            
    
}]);
