angular.module("FullStackModule")
    .factory('fullStackFactory',[function() {
        
        var projectsFactory = { 
            projects :[
                {
                    name: "Nightlife Coordination App",
                    description: "It's an app to help users find the local bars using their current location or by searching on the map, it lets them add themselves to a list of 'People going'  and they can also remove themselves from the list. Keeping track of how many people are going to each bar will help the users decide where they want to go tonight. The app was built with the MEAN stack with the combination of the Yelp API to get the all the info for the local bars and using Google maps to display the location of each bar.",
                    image: {"background-image" : "url(' images/fullStackProjects/night-life-coord-project.jpg')"},
                    source: 'https://github.com/UlisesCabrera/nightlife-coordinator',
                    live: 'https://d-night-life.herokuapp.com/',
                    post:'http://www.ulisescabrera.com/blog/2016/02/09/building-a-nightlife-coordination-app/',
                    userStories:['As an unauthenticated user, I can view all bars in my area.',
                    'As an authenticated user, I can add myself to a bar to indicate I am going there tonight.',
                    'As an authenticated user, I can remove myself from a bar if I no longer want to go there.',
                    'As an unauthenticated user, when I login I should not have to search again.'],
                    school: 'freeCodeCamp',
                    date: 'February 2016'
                },                
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