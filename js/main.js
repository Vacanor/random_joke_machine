function myFunction (arr){
    for(value = 0;value<arr.value.length;value++){
      console.log(arr.value[value].joke);
    }
};

var xmlhttp = new XMLHttpRequest();
var url = "api.json";

xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var myArr = JSON.parse(xmlhttp.responseText);
    myFunction(myArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

