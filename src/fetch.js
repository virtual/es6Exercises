//Let's get away from those dumb timeouts and work with some 
//real apis!!!


//Exercise 1:
//this code's broke! make it work


//note: fetch is only native to browser-run javascript. To use it in node,
//we'll have to npm install it and grab it like so
const fetch = require('node-fetch');
var printWidth = function (e) {
  if (e.data.image_width > 300) {
    console.log("image greater than 300");
  } else if(e.data.image_width === 300) {
    console.log("image is 300!");
  } else {
    console.log("image less than 300");
  }
};

fetch("https://api.giphy.com/v1/gifs/random?api_key=kTbvJKFeUYfzVYxpPTOI1ZjwsQq6afPZ&tag=meteor&rating=PG-13").then((res) => {
  return res.json();
}).then((data) => {
  printWidth(data);
}); 

//Exercise 2:
//write a function that grabs the data's image_width, and if it's less
//than 300, console.log('image less than 300') and if its not, console.log
//"image greater than 300"