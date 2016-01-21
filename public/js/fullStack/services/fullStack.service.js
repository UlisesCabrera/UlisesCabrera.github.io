angular.module("FullStackModule")
    .factory('fullStackFactory',[function() {
        
        var projectsFactory = { 
            projects :[
                {
                    name: "Voting App",
                    description: "A dynamic app made with the MEAN (MongoDB, Express, Angular and Node) stack, using passport.js to handle the authentication process with local and social media accounts (Facebook, LinkedIn, Google+, Twitter and GitHub).  Mongoose was used to abstract the methods that interact with the MongoDB database and create schemas for the documents.  Each poll created can be shared to Facebook, Twitter and Google+ and the results are presented using Chart.js.",
                    image: {"background-image" : "url(' images/fullStackProjects/poll-app-project.jpg')"},
                    source: 'https://github.com/UlisesCabrera/voting-app',
                    live: 'https://poll-sation.herokuapp.com/',
                    userStories:['As an authenticated user, I can keep my polls and come back later to access them.',
                    'As an authenticated user, I can share my polls with my friends.',
                    'As an authenticated user, I can see the aggregate results of my polls.',
                    'As an authenticated user, I can delete polls that I decide I don\'t want anymore.',
                    'As an authenticated user, I can create a poll with any number of possible items.',
                    'As an unauthenticated or authenticated user, I can see and vote on everyone\'s polls.',
                    'As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)',
                    'As an authenticated user, if I don\'t like the options on a poll, I can create a new option.'],
                    school: 'freeCodeCamp',
                    date: 'December 2015'
                }        
        ]};
        
        return projectsFactory;
        
}]);