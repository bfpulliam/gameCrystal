$(document).ready(function () {

    //Generate random number to be guessed//
    var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    //Display random number to be guessed//
    $("#number-to-guess").text(targetNumber);
    var inputTotal = 0


    $(".gems").on({
        click: function () {
            crystalValue = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
            inputTotal += crystalValue;
            var getnum = inputTotal;
             $("#counter").text(getnum);
        }
    });

});