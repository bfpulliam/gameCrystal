$(document).ready(function () {

    //Generate random number to be guessed//
    var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    //Display random number to be guessed//
    $("#number-to-guess").text(targetNumber);
    var inputTotal = 0;
    var wins = 0;
    var losses = 0;

    function reset(){
        targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $("#number-to-guess").text(targetNumber);
        inputTotal = 0;
    };


    $(".gems").on({
        click: function () {
            crystalValue = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
            inputTotal += crystalValue;
            var getnum = inputTotal;
             $("#counter").text(getnum);
            updateCounter();
        }
        
    });

    function updateCounter() {
        
        if (inputTotal === targetNumber) {
            wins ++;
          alert("You win!");
          $("#win").text(wins);
          reset();
        }
        else if (inputTotal > targetNumber) {
          losses ++;
          alert("Nope! That's not it!!")
          $("#loss").text(losses);
        reset();
        }
    }
    


});