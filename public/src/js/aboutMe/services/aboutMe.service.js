/*global randomColor, angular*/
angular.module('AboutMeModule')
        .factory('aboutMeFactory',[function() {
            
            var aboutMeInfo = {
                name : "Ulises Cabrera",
                profile_picture: "images/Profile-Picture.png",
                aboutMe: "I am a motivated front-end developer with knowledge in Javascript, Jquery, bootstrap and the MEAN stack. I enjoy building new stuff and pushing my skills to their limits. I am hardworking and a fast learner with good communication skills and a strong design background.",
                projects: { 
                    projectsName: ['Front-End', 'Full Stack', 'Microservices'],
                    projectsCount:[17 , 3, 5]
                },
                skills: [
                    {
                        name: 'HTML5'
                    },
                    {
                        name:'CSS'
                    },
                    {
                        name:'Javascript'
                    },
                    {
                        name: 'Angular.js'
                    },
                    {
                        name: 'React.js'
                    },
                    {
                        name:'Node.js'
                    },
                    {
                        name:'Express.js'
                    },
                    {
                        name:'MongoDB'
                    },
                    {
                        name:'Git'
                    },
                    {
                        name:'Bootstrap'
                    },
                    {
                        name: 'Photoshop'
                    },
                    {
                        name: 'HTML Emails'
                    },
                    {
                        name: 'LESS'
                    },
                    {
                        name:'InDesign'
                    },
                    {
                        name:'Knockout.js'
                    },
                    {
                        name: 'Jquery'
                    }
                ]
            };
            
            // getting random colors
            var skillsColors = randomColor({ count: aboutMeInfo.skills.length, luminosity: 'dark'});
            
            //pushing colors to skill objects
            skillsColors.forEach(function(color, idx){
                aboutMeInfo.skills[idx].styleCSS = {"border" : "1px solid "+ color, "color" : color};
            });

            return aboutMeInfo;
            
    
}]);
