// /*
//   We get our Chuck Norris jokes from the api file
//   You can get the joke api on http://api.icndb.com/jokes/
// */

// We initialize vars
  var joke = "";
  var jokes = [];

// We create a function that will send the call for the api every time we call it and, when the request is sent sucessfully will pass the data to a function that will use the data (storeinfo)
function getJoke(){
  var xmlhttp = new XMLHttpRequest();
  var url = "api.json";

  xmlhttp.onreadystatechange = function() {
    // If the request is succesful
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    // We get the objects from our response text
        var objects = JSON.parse(xmlhttp.responseText);
        // And we pass them to storeinfo()
        storeinfo(objects);
        //console.log(objects[3].joke);
      }
    };
    // We send the request
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

// This function will recieve the objects from the request and will sotre the jokes from each object in an array, then, it will select a random number between 0 and the length of the jokes array
// and finally it will put the random joke in the html. 
function storeinfo(json){
  for (object = 0; object < json.length; object++){
    //console.log(json[object].joke);
    jokes.push(json[object].joke);
    //console.log(jokes);
  }
  var rndNum = (Math.floor(Math.random() * (jokes.length - 0 + 1) + 0)); // This variable generates the random number each time the function is called
  joke = jokes[rndNum]; // We select our random joke
  console.log(joke);
   // We put it in the html
  
  $(".quote").html(joke);
  
}


$(document).ready(function(){
  
  // We get the init quote the quote container is not empty
  getJoke();

  // Every time we click we'll call the function to put the joke in the html.
  $("#getQuote").on("click", function(){
    $(".quote" ).animate({
    opacity: 0,
  }, 500 );
    getJoke();
  $(".quote" ).animate({
    opacity: 1,
  }, 500 );
  });
  
});
