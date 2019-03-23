$(document).ready(function() {
   
    var trivia = [
        {
            question: "What does MTV stand for?",
            choice: ["Music Video Television", "Music Television", "Mult-Television Video", "Music Turned Video"],
            answer: 1,
            photo: "assets/images/MTVLogo.gif" 
        },

        {
            question: "In what year did MTV first air?",
            choice: ["1984", "1992", "1981", "1989"],
            answer: 2,
            photo: "assets/images/MTV1981.gif"
        },

        {
            question: "What was the first music video to air on MTV?",
            choice: ["REO Speedwagon - Take It on the Run", "Pat Benatar - Hit Me with Your Best Shot", "Rick Astley - Never Gonna Give You Up", "Buggles - Video Killed the Radio Star"],
            answer: 3,
            photo: "assets/images/Buggles.gif"
        },

        {
            question: "Which television show on MTV launched the modern reality TV genre in 1992?",
            choice: ["The Real World", "Road Rules", "Jersey Shore", "Laguna Beach: The Real Orange County"],
            answer: 0,
            photo: "assets/images/TheRealWorld.gif"
        },

        {
            question: "Who called the world 'bullsh*t' in her 1997 VMA speech?",
            choice: ["Madonna", "Courtney Love", "Fiona Apple", "Alanis Morissette"],
            answer: 2,
            photo: "assets/images/VMAFionaApple.gif"
        },

        {
            question: "What show played the top ten most requested videos of the day for ten years running?",
            choice: ["Rock Docs", "Top 10 Countdown", "Final Countdown", "Total Request Live"],
            answer: 3,
            photo: "assets/images/TRL.gif"
        },

        {
            question: "What was MTVs original slogan?",
            choice: ["Some people just don't get it!", "Music out of this world!", "You'll never look at music the same way again!", "I want my MTV"],
            answer: 2,
            photo: "assets/images/MTVOriginalSlogan.gif"
        }];

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    timer = 20;
    var intervalId;

    var userGuess = "";
    var running = false;
 
    var questionCount = trivia.length;
    var pick; 
    var index;
    var newArray = [];
    var holder = [];

    $("#reset").hide();

    $("#start").on("click", function() {
        $("#start").hide();
        displayQuestion();
        runTimer();
        for(var i = 0; i < trivia.length; i++) {
            holder.push(trivia[i]);
        }
    });

    function runTimer() {
        if(!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

    function decrement() {
        $("#timeLeft").html("<h3>Time Remaining: " + timer + "</h3>");
        timer --;

        if (timer === 0) {
            unanswered++;
            stop();
            $("#answerBlock").html("<p>Time is up!  The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidePicture();
        }
    }

    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function displayQuestion() {
        index = Math.floor(Math.random() * trivia.length);
        pick = trivia[index];
        console.log(trivia)

        $("#questionBlock").html("<h2>" + pick.question + "</h2>");
        for(var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);
            userChoice.attr("data-guessvalue", i);
            $("#answerBlock").append(userChoice);
        }
    }

    $(".answerchoice").on("click", function () {
        userGuess = parseInt($(this).attr("data-guessvalue"));
        
        if (userGuess === pick.answer) {
            stop();
            correctAnswers++;
            userGuess = "";
            $("#answerBlock").html("<p>Correct!</p>");
            hidePicture();
        } else {
            stop ();
            wrongAnswers++;
            userGuess="";
            $("#answerBlock").html("<p>Wrong! The correct answer is: " + pick.choicep[pick.answer] + "</p>");
            hidePicture();
        }
    });

    function hidePicture() {
        $("#answerBlock").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        trivia.splice(index, 1);

        var hidpic = setTimeout (function() {
            $("#answerBlock").empty();
            timer = 20;

            if ((wrongAnswers + correctAnswers + unanswered) === questionCount){
                $("#questionBlock").empty();
                $("#questionBlock").html("<h3> Game Over! Here's how you did: </h3>");
                $("#answerBlock").append("<h4> Correct: " + correctAnswers + "</h4>");
                $("#answerBlock").append("<h4> Incorrect: " + wrongAnswers + "</h4>");
                $("#answerBlock").append("<h4> Unanswered: " + unanswered + "</h4>");
                correctAnswers = 0;
                wrongAnswers = 0;
                unanswered = 0;
            } else {
                runTimer();
                displayQuestion();
            }
        }, 3000);
    }
$("#reset").on("click", function() {
    $("#reset").hide();
    $("#answerBlock").empty();
    $("#questionBlock").empty();
    for(var i = 0; i < holder.length; i++) {
        trivia.push(holder[i]);
    }
    runTimer();
    displayQuestion();
});

});