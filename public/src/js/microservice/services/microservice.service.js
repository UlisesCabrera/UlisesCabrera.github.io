angular.module("MicroserviceModule")
    .factory('microserviceFactory',[function() {
        
        var projectsFactory = { 
            projects :[
                {
                    name: "Timestamp",
                    description: "A microservice where the user can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016). And if it does, it returns both the Unix timestamp and the natural language form of that date. If it does not contain a date or Unix timestamp, it returns null for those properties.",
                    image: {"background" : "linear-gradient(rgba(0, 0, 0, 0.45), rgba(255,110,64, 0.45)), url(' images/microservices/timestamp-ms.jpg') no-repeat"},
                    source: 'https://github.com/UlisesCabrera/timestamp-ms-uc',
                    live: 'https://timestamp-ms-uc.herokuapp.com/',
                    userStories:[],
                    school: 'freeCodeCamp',
                    date: 'January 2016'
                },
                {
                    name: "Request Header Parser",
                    description: "A microservice where the user can get the their IP address, language and operating system information",
                    image: {"background" : "linear-gradient(rgba(0, 0, 0, 0.45), rgba(255,110,64, 0.45)), url(' images/microservices/request-header-parser-ms.jpg') no-repeat"},
                    source: 'https://github.com/UlisesCabrera/request-header-parser-ms',
                    live: 'https://request-header-parser-uc-ms.herokuapp.com/',
                    userStories:[],
                    school: 'freeCodeCamp',
                    date: 'January 2016'
                },
                {
                    name: "URL Shortener Microservice",
                    description: "A microservice where the user can pass a URL as a parameter and it will receive a shortened URL in the JSON response, If it pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead. And when the user visits that shortened URL, it will redirect it to the original link.",
                    image: {"background" : "linear-gradient(rgba(0, 0, 0, 0.45), rgba(255,110,64, 0.45)), url(' images/microservices/url-shortener-ms.jpg') no-repeat"},
                    source: 'https://github.com/UlisesCabrera/URL-Shortener-Microservice',
                    live: 'https://url-sh.herokuapp.com/',
                    userStories:[],
                    school: 'freeCodeCamp',
                    date: 'January 2016'
                },
                {
                    name: "Image Search Abstraction Layer",
                    description: "A microservice where the user can get the image URLs, alt text and page urls for a set of images relating to a given search string, It can also paginate through the responses by adding a ?offset=2 parameter to the URL and can get a list of the most recently submitted search strings.",
                    image: {"background" : "linear-gradient(rgba(0, 0, 0, 0.45), rgba(255,110,64, 0.45)), url(' images/microservices/image-search-abstraction-layer-ms.jpg') no-repeat"},
                    source: 'https://github.com/UlisesCabrera/Image-Search-Abstraction-Layer',
                    live: 'https://img-search-layer.herokuapp.com/',
                    userStories:[],
                    school: 'freeCodeCamp',
                    date: 'January 2016'
                },
                {
                    name: "File Metadata",
                    description: "A microservice where the users can submit a FormData object that includes a file upload and when they submit something, it will receive the file size in bytes.",
                    image: {"background" : "linear-gradient(rgba(0, 0, 0, 0.45), rgba(255,110,64, 0.45)), url(' images/microservices/file-metadata-ms.jpg') no-repeat"},
                    source: 'https://github.com/UlisesCabrera/File-Metadata-Microservice',
                    live: 'https://file-metadata-ms.herokuapp.com/',
                    userStories:[],
                    school: 'freeCodeCamp',
                    date: 'January 2016'
                }                      
        ]};
        
        return projectsFactory;
        
}]);