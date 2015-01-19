var profile = require('./profile.js');

var users = ['chalkers', 'roymcfarland', 'davemcfarland'];

users.forEach(function(username) {
  profile.getProfileData(username);
});

//profile.getProfileData('roymcfarland');
//profile.getProfileData('chalkers');
//profile.getProfileData('davemcfarland');