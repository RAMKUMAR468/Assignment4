(function () {

var names = ["Ram", "kumar", "janaan", "sasi", "karthi", "venkat", "siraj", "Karthik", "john", "santhosh"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();