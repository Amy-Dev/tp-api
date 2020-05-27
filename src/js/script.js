const apiurl = 'https://api.chucknorris.io/jokes/random';
const $container= document.getElementById("Container")
const $button = document.querySelector(".hey")


function getjokes(){
    $container.textContent= 'Chargement...'
return fetch(`${apiurl}`)
.then(response =>response.json())
.then(jokes => showjokes(jokes))
}
getjokes()



 function showjokes(jokes) {
     $container.textContent= '';
     // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode(jokes.value); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM 
  var currentDiv = $container
  document.body.insertBefore(newDiv, currentDiv);

 }

 $button.addEventListener("click", function(){
     getjokes()
     showjokes()
 })





  /*{
    "categories": [],
    "created_at": "2020-01-05 13:42:30.480041",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "40mabPTdTiiyniVXdgbRGw",
    "updated_at": "2020-01-05 13:42:30.480041",
    "url": "https://api.chucknorris.io/jokes/40mabPTdTiiyniVXdgbRGw",
    "value": "hittler killed him self because he found out Chuck Norris is jewish"
}*/