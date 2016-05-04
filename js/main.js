/*
  We first get our chuck Norris jokes from the api file
  You can get the joke api on http://api.icndb.com/jokes/
*/

// We define a variable to store our jokes once we parse the json
var jokes = [];

// We create a function that will iterate over the keys in the provided json (wich will contain the response text from the request) and then we push every "insert-key-name-here" entry 
// from each object (the objects are all within the "value" key in the json) into it's correspondant array
function storeinfo (resText){
  // For every object in "value"
    for(value = 0;value<resText.value.length;value++){
      // We push the joke of the object into the jokes array
      jokes.push(resText.value[value].joke);
    }
    //console.log(jokes);
};

// We create a new request object
var xmlhttp = new XMLHttpRequest();
// We define the api url
var url = "api.json";

// We check the request function state (wich will get the response text and call our storeinfo() if the request is succesful)
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var objects = JSON.parse(xmlhttp.responseText);
    storeinfo(objects);
    }
};

// We open and send the request
xmlhttp.open("GET", url, true);
xmlhttp.send();


function getQuote(){
 
       var rndQuote = (Math.floor(Math.random() * (jokes.length - 0 + 1) + 0));
       $(".quote").html(jokes[rndQuote]);
};
// We modify our DOM with the aquired data
$(document).ready(function() {
  // We simulate a click to the button
    getQuote();
    
});
$("#getQuote").on("click", function(){
       getQuote();
})