var http = require('http');

// Print out message
var printMessage = function(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " point(s) in JavaScript.";
  console.log(message);
};

// Print out error message
var printError = function(error) {
    console.error(error.message);
};


function getProfileData(username) {
  // Connect to API URL
  var request = http.get('http://teamtreehouse.com/' + username + '.json', function(response) {
    var body = '';
    // Read the data
    response.on('data', function(chunk) {
      body += chunk;
    });
    
    response.on('end', function(){
     if(response.statusCode === 200) {
        try {
        
        // Parse the data  
        console.log(typeof body);
        var profile = JSON.parse(body);
        
        // Print the data
        printMessage(username, profile.badges.length, profile.points.JavaScript);
        
        } catch(error) {
        
        // Parse error
        printError(error);
        
        }
      } else {
        // Status code error
        printError({message: 'There was an error getting the profile for ' + username + '. (' + http.STATUS_CODES[response.statusCode] + ')'});
      }
    });
  });
  
  // Connection error
  request.on('error', printError);
}

module.exports.getProfileData = getProfileData;