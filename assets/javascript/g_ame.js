$(document).ready(function () {
//Generate random number to be guessed//
  var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
//Display random number to be guessed//
  $("#number-to-guess").text(targetNumber);
 
  var inputTotal = 0

  $(".gems").on("click" , function() {
    crystalValue = Math.floor(Math.random() * ((12-1)+1)+1);
    $(this).attr(crystalValue);
    inputTotal += crystalValue();
  });

  function updateCounter() {
    document.querySelector("#counter").innerHTML = "Total:" + inputTotal
    if (inputTotal === targetNumber) {
      alert("You win!");
      reset();
    }
    else if (inputTotal >= targetNumber) {
      alert("Nope");
    }
  }
  updateCounter();

  // Reset game
  function reset(){
    targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#number-to-guess").text(targetNumber);
    inputTotal= 0;
    $("#counter").text(inputTotal);
  } 
}