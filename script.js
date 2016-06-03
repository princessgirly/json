myFunction(myArray) ;

$.getJSON(document).ready(myFunction(myArray) {


function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br> <img src="' + arr[i].imageUrl + '">';
    };
    document.getElementById("id01").innerHTML = out;
};
});
//$(document).ready(function() {
//  var myArray = $.getJSON( "main.json", function() {
