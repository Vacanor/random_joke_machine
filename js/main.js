/*
  We first get our chuck Norris jokes from the api file
  You can get the joke api on http://api.icndb.com/jokes/
*/

// We define a variableto store our jokes once we parse the json
var jokes = [];

// We create a function that will iterate over the keys in the provided json (wich will contain the response text from the request) and then we push every "insert-key-name-here" entry 
// from each object (the objects are all within the "value" key on teh array) into it's correspondant array
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

// We create the request function (wich will get the response text and call our storeinfo() function)
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var objects = JSON.parse(xmlhttp.responseText);
    storeinfo(objects);
    }
};

// We send the request
xmlhttp.open("GET", url, true);
xmlhttp.send();

// We modify our DOM with the aquired data
 $(document).ready(function() {
    $("#getQuote").on("click", function(){
      var rndQuote = (Math.floor(Math.random() * (jokes.length - 0 + 1) + 0));
      $(".quote").html(jokes[rndQuote]);
    });
  });