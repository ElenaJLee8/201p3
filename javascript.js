
function newRecipe() {
var randomNumber = Math.floor(Math.random()* (recipes.length));
document.getElementById('Display').innerHTML = recipes[randomNumber];

}


var images=['images/quiche.jpg','images/soup.jpg','images/salad copy.jpg', "images/filo.jpg", "images/salad copy.jpg", "images/meat.jpg", "images/platter.jpg", "images/veges.jpg",
"images/oatmeal.jpg", "images/bowl.jpg" ]
setInterval(function(){
  var url=images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = 'url('+url+')';
},7000);
