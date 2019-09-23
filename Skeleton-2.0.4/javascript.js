//var recipes =
//[
//  '<a href="https://www.allrecipes.com/recipe/220376/southern-macaroni-and-cheese-pie/?internalSource=rotd&referringContentType=Homepage&clickId=cardslot%201" target="_blank">Mystery?</a>', '<a href= "https://www.allrecipes.com/recipe/242209/almond-flour-brownies/?internalSource=previously%20viewed&referringContentType=Homepage&clickId=cardslot%202" target="_blank">Go!</a>',
  // 'Ham', '2 Carrots', '1 Broccoli', '1 Cauliflower', '2 Bok Choy'
//]


function newRecipe() {
var randomNumber = Math.floor(Math.random()* (recipes.length));
document.getElementById('quoteDisplay').innerHTML = recipes[randomNumber];

}

//function copyText1() {
  /* Get the text field */
  //var copyText2 = document.getElementById("quoteDisplay");

  /* Select the text field */
  //copyText.select();
  //copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  //document.execCommand("copy");

  /* Alert the copied text */
  //alert("Copied the text: " + copyText.value);
