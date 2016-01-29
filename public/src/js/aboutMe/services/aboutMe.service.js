/*global angular*/
angular.module('AboutMeModule')
        .factory('aboutMeFactory',[function() {
    
            var aboutMeInfo = {
                name : "Ulises Cabrera",
                profile_picture: "images/Profile-Picture.png",
                aboutMe: "I am a motivated front-end developer with knowledge in Javascript, Jquery, bootstrap and the MEAN stack. I enjoy building new stuff and pushing my skills to their limits. I am hardworking and a fast learner with good communication skills and a strong design background.",
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
