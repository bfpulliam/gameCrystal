$(document).ready(function () {

    //Generate random number to be guessed//
    var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    //Display random number to be guessed//
    $("#number-to-guess").text(targetNumber);
    var inputTotal = 0;
    var wins = 0;
    var losses = 0;
    //start the game with a new number//
    function reset(){
        targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $("#number-to-guess").text(targetNumber);
        inputTotal = 0;
    };

    //Assign a random number whenever the image is clicked//
    $(".gems").on({
        click: function () {
            crystalValue = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
            inputTotal += crystalValue;
            var getnum = inputTotal;
             $("#counter").text(getnum);
            updateCounter();
        }
        
    });
    //Show total of guess and status of wins and losses.//
    function updateCounter() {
        //conditions that show that you won and game creates a new number//
        if (inputTotal === targetNumber) {
            wins ++;
          alert("You win!");
          $("#win").text(wins);
          reset();
        }
        //You lose if you go over the random number and game creates a new number//
        else if (inputTotal > targetNumber) {
          losses ++;
          alert("Nope! That's not it!!")
          $("#loss").text(losses);
        reset();
        }
    }
    


});