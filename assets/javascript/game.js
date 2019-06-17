
$(document).ready(function () {

    
    var crystal = {
        redCrystal:
        {
            color: "red",
            value: 0
        },
        blueCrystal:
        {
            color: "blue",
            value: 0
        },

        yellowCrystal:
        {
            color: "yellow",
            value: 0
        },
        greenCrystal:
        {
            color: "green",
            value: 0
        },
        
    };

    var target = 0;
    var current = 0;

    var wins = 0;
    var losses = 0;

    
    function start() {
        current = 0;
        
        target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("This is " + target);
   
        $("#target").html(target);

        crystal.redCrystal.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal.blueCrystal.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal.greenCrystal.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal.yellowCrystal.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


        $("#target").html(target);

    };

    function adding(crystal) {
        current = current + crystal.value;
        $("#current").html(current);
        check();
        console.log("Your Score is  " + current);
    }
    
    function check() {
        if (current > target) {
            alert("YOU LOST!");
            console.log("YOU LOST");
            losses++;
            $("#losses").html(losses);
            start();

        }
        else if (current == target) {
            alert("YOU WON!");
            console.log("YOU WIN!");
            wins++;
            $("#wins").html(wins);
            start();
        }
    }


    start()

    $("#red").on("click", function () {
        adding(crystal.redCrystal);
    });

    $("#blue").on("click", function () {
        adding(crystal.blueCrystal);
    });
    $("#yellow").on("click", function () {
        adding(crystal.greenCrystal);
    });
    $("#green").on("click", function () {
        adding(crystal.yellowCrystal);
    });


});
