angular.module("FrontEndModule")
    .factory('frontEndFactory',[function() {
        
        var projectsFactory = { 
            projects :[{
                    name: "The Game of life",
                    description: "The \"game\" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced \"players\", by creating patterns with particular properties. (wikipidea)",
                    image: {"background-image" : "url(' images/frontEndProjects/game-of-life-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/oxpQzN/',
                    live: 'http://codepen.io/ulisescabrera/full/oxpQzN/',
                    userStories: ["When I first arrive at the game, it will randomly generate a board and start playing.",
                                  "I can start and stop the board.",
                                  "I can set up the board.",
                                  "I can clear the board.",
                                  "When I press start, the game will play out.",
                                  "Each time the board changes, I can see how many generations have gone by."],
                    school: 'freeCodeCamp',
                    date: 'April 2016',
                    primaryFramework: 'React.js'
                },{
                    name: "Recipe Box",
                    description: "Simple App to store food recipes, built with React.js",
                    image: {"background-image" : "url(' images/frontEndProjects/recipe-box-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/zqxrXG/',
                    live: 'http://codepen.io/ulisescabrera/full/zqxrXG/',
                    userStories: ["I can see an index view where the names of all the recipes are visible.",
                                  "I can click into any of those recipes to view it.",
                                  "I can edit these recipes.",
                                  "I can delete these recipes.",
                                  "All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there."],
                    school: 'freeCodeCamp',
                    date: 'March 2016',
                    primaryFramework: 'React.js'
                },{
                    name: "Camper Leaderboard",
                    description: "Build Camper Leaderboard section.",
                    image: {"background-image" : "url(' images/frontEndProjects/camper-leaderboard-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/oxvdbL/',
                    live: 'http://codepen.io/ulisescabrera/full/oxvdbL/',
                    userStories: ["I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.",
                                 "I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.",
                                 "I can toggle between sorting the list by how many bronwie points they've earned in the past 30 days and by how many brownie points they've earned total."],
                    school: 'freeCodeCamp',
                    date: 'February 2016',
                    primaryFramework: 'React.js'
                },{
                    name: "Markdown Previewer",
                    description: "Live Markdown previewer, render HTML from Markdown on the fly.",
                    image: {"background-image" : "url(' images/frontEndProjects/markdown-previewer-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/vGBBKQ/',
                    live: 'http://codepen.io/ulisescabrera/full/vGBBKQ/',
                    userStories: ['I can type GitHub-flavored Markdown into a text area.',
                                  'I can see a preview of the output of my markdown that is updated as I type.'],
                    school: 'freeCodeCamp',
                    date: 'March 2016',
                    primaryFramework: 'React.js'
                },
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
                    date: 'November 2015',
                    primaryFramework: 'Angular.js'
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
                    date: 'November 2015',
                    primaryFramework: 'Angular.js'
                },                
                {
                    name: "Wikipidia Viewer",
                    description: "A wikipidea app that lets you display search results made to the wiki API and also allow you to see random articles.",
                    image: {"background-image" : "url(' images/frontEndProjects/wikipidea-viewer-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/OyoRbp',
                    live: 'http://codepen.io/ulisescabrera/full/OyoRbp/',
                    userStories:['I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.','I can click a button to see a random Wikipedia entry.'],
                    school: 'freeCodeCamp',
                    date: 'November 2015',
                    primaryFramework: 'Angular.js'
                },                
                {
                    name: "freeCodeCamp News",
                    description: "Redesign the freeCodeCamp news section.",
                    image: {"background-image" : "url(' images/frontEndProjects/free-news-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/ojMzex',
                    live: 'http://codepen.io/ulisescabrera/full/ojMzex/',
                    userStories: ['I can browse recent posts from Camper News.','I can click on a post to be taken to the story\'s original URL.','I can see how many upvotes each story has.'],
                    school: 'freeCodeCamp',
                    date: 'November 2015',
                    primaryFramework: 'Angular.js'
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
                    date: 'November 2015',
                    primaryFramework: 'Angular.js'
                },                     
                {
                    name: "Local Weather App",
                    description: "Local Weather app using angular.js and getting the data from the weather underground API.",
                    image: {"background-image" : "url(' images/frontEndProjects/weather-project.jpg')"},
                    source: 'http://codepen.io/ulisescabrera/pen/JYEgJW',
                    live: 'http://codepen.io/ulisescabrera/full/JYEgJW/',
                    userStories: ['I can see the weather in my current location.','I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.','I can push a button to toggle between Fahrenheit and Celsius.'],
                    school: 'freeCodeCamp',
                    date: 'November 2015',
                    primaryFramework: 'Angular.js'
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
                    date: 'October 2015',
                    primaryFramework: 'Angular.js'
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
                    date: 'October 2015',
                    primaryFramework: 'Knockout.js'
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
                    date: 'October 2015',
                    primaryFramework: 'Angular.js'
                },
                {
                    name: "Neighborhood Map",
                    description: "A Neighborhood Map that displays info about local restaurants powered by Google Maps, Yelp and Flickr.  Built with knockout.js",
                    image: {"background-image" : "url(' images/frontEndProjects/map-neighb-project.jpg')"},
                    source: 'https://github.com/UlisesCabrera/frontend-nanodegree-neighborhood-map',
                    live: 'http://ulisescabrera.github.io/frontend-nanodegree-neighborhood-map/dist/',
                    userStories:[],
                    school: 'Udacity',
                    date: 'August 2015',
                    primaryFramework: 'Knockout.js'
                }
        ]};
        
        return projectsFactory;
        
}]);