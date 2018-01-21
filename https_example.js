var https = require("https");

console.log("i did it !!!");

var options = {
  host: "www.example.com",
  path: "/",
};


// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  console.log('Response: ', response);
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log('I have nmade the request');
