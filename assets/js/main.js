/*Primero voy a definir la función de ingresa el mensaje*/
const btnTweet = document.getElementById("tweet");
let txt = document.getElementById("comments").value;


btnTweet.addEventListener("click", () => {
  let txt = document.getElementById("comments").value;
  let txtResult = document.getElementById("commentsResult");
  txtResult.innerHTML = "" + txt;
  document.getElementById("comments").value = "";
});