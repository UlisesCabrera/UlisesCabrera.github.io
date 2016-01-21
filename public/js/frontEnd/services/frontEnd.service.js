angular.module("FrontEndModule")
    .factory('frontEndFactory',[function() {
        
        var projectsFactory = { 
            projects :[
                {
                    name: "Simon Game",
                    description: "Replica of the simon game that was popular in the 80's.",
                    image: {"background-image" : "url(' images/frontEndProjects/simon-game-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/QjoMVb',
                    live: 'http://codepen.io/ulisescabrera/full/QjoMVb/',
                    userStories:['I am presented with a random series of button presses.',
                    'Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.',
                    'I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.',
                    'If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.',
                    'I can see how many steps are in the current series of button presses.',
                    ' If I want to restart, I can hit a button to do so, and the game will return to a single step.',
                    'I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.',
                    'I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.'],
                    school: 'freeCodeCamp',
                    date: 'November 2015'
                },
                {
                    name: "Tic Tac Toe Game",
                    description: "Unbeatable Tic Tac Toe Game made with angular.js and using the minimax algorithm.",
                    image: {"background-image" : "url(' images/frontEndProjects/tictactoe-game-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/Xmyxxr',
                    live: 'http://codepen.io/ulisescabrera/full/Xmyxxr/',
                    userStories:['I can play a game of Tic Tac Toe with the computer.','I can never actually win against the computer - at best I can tie.',
                    'My game will reset as soon as it\'s over so I can play again.','I can choose whether I want to play as X or O.'],
                    school: 'freeCodeCamp',
                    date: 'November 2015'
                },                
                {
                    name: "Wikipidia Viewer",
                    description: "A wikipidea app that lets you display search results made to the wiki API and also allow you to see random articles.",
                    image: {"background-image" : "url(' images/frontEndProjects/wikipidea-viewer-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/OyoRbp',
                    live: 'http://codepen.io/ulisescabrera/full/OyoRbp/',
                    userStories:['I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.','I can click a button to see a random Wikipedia entry.'],
                    school: 'freeCodeCamp',
                    date: 'November 2015'
                },                
                {
                    name: "freeCodeCamp News",
                    description: "Redesign the freeCodeCamp news section.",
                    image: {"background-image" : "url(' images/frontEndProjects/free-news-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/ojMzex',
                    live: 'http://codepen.io/ulisescabrera/full/ojMzex/',
                    userStories: ['I can browse recent posts from Camper News.','I can click on a post to be taken to the story\'s original URL.','I can see how many upvotes each story has.'],
                    school: 'freeCodeCamp',
                    date: 'November 2015'
                },
                {
                    name: "Twitchtv JSON API",
                    description: "Created Interface to display data from the Twitchtv API.",
                    image: {"background-image" : "url(' images/frontEndProjects/twitch-viewer-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/meLWaG',
                    live: 'http://codepen.io/ulisescabrera/full/meLWaG/',
                    userStories: ['I can see whether Free Code Camp is currently streaming on Twitch.tv.','I can click the status output and be sent directly to the Free Code Camp\'s Twitch.tv channel.',
                    'if a Twitch user is currently streaming, I can see additional details about what they are streaming.',
                    'I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.'],
                    school: 'freeCodeCamp',
                    date: 'November 2015'
                },                     
                {
                    name: "Local Weather App",
                    description: "Local Weather app using angular.js and getting the data from the weather underground API.",
                    image: {"background-image" : "url(' images/frontEndProjects/weather-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/JYEgJW',
                    live: 'http://codepen.io/ulisescabrera/full/JYEgJW/',
                    userStories: ['I can see the weather in my current location.','I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.','I can push a button to toggle between Fahrenheit and Celsius.'],
                    school: 'freeCodeCamp',
                    date: 'November 2015'
                },                
                {
                    name: "Pomodoro Clock App",
                    description: "Pomodoro clock app using angular.js, you can add to-dos, see how many pomodoros have you completed and set the length of each pomodoro.",
                    image: {"background-image" : "url(' images/frontEndProjects/pomodoro-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/vNWXpB',
                    live: 'http://codepen.io/ulisescabrera/full/vNWXpB/',
                    userStories: ['I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.',
                    'I can reset the clock for my next pomodoro.',
                    'I can customize the length of each pomodoro.'],
                    school: 'freeCodeCamp',
                    date: 'October 2015'
                },
                {
                    name: "Quote Generator App",
                    description: "Generates random quotes and let you tweet them, built using knockout.js.",
                    image: {"background-image" : "url(' images/frontEndProjects/quote-generator-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/epgLgp',
                    live: 'http://codepen.io/ulisescabrera/full/epgLgp/',
                    userStories:['I can click a button to show me a new random quote.',
                    'I can press a button to tweet out a quote.'],
                    school: 'freeCodeCamp',
                    date: 'October 2015'
                },
                {
                    name: "Simple Calculator",
                    description: "Simple Calculator built with angular.js.",
                    image: {"background-image" : "url(' images/frontEndProjects/calculator-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/qOoKmJ',
                    live: 'http://codepen.io/ulisescabrera/full/qOoKmJ/',
                    userStories:['I can add, subtract, multiply and divide two numbers.','I can clear the input field with a clear button.',
                    'I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.'],
                    school: 'freeCodeCamp',
                    date: 'October 2015'
                },
                {
                    name: "Neighborhood Map",
                    description: "A Neighborhood Map that displays info about local restaurants powered by Google Maps, Yelp and Flickr.  Built with knockout.js",
                    image: {"background-image" : "url(' images/frontEndProjects/map-neighb-project.jpg')"},
                    source: 'https://github.com/UlisesCabrera/frontend-nanodegree-neighborhood-map',
                    live: 'http://ulisescabrera.github.io/frontend-nanodegree-neighborhood-map/dist/',
                    userStories:[],
                    school: 'Udacity',
                    date: 'August 2015'
                }
        ]};
        
        return projectsFactory;
        
}]);