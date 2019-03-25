$(document).ready(function() {

    //Here are my trivia questions with choices, and answers with images.
   
    var trivia = [
        {
            question: "Which famed football star died?",
            choice: ["Marcus Ballman", "Gary Ledman", "Billy Hellman", "Tommy Sherman"],
            answer: 3,
            photo: "assets/images/TommySherman.png" 
        },

        {
            question: "'Sick, Sad World' had an image of what in its logo?",
            choice: ["A Sad Face", "A Skull", "An Eyeball", "A Bottle of Alcohol"],
            answer: 2,
            photo: "assets/images/SickSadWorld.gif"
        },

        {
            question: "What was Tom's last name?",
            choice: ["Yeager", "Thompson", "Sloane", "Zunker"],
            answer: 2,
            photo: "assets/images/TomSloane.gif"
        },

        {
            question: "'You're standing on my ___________.'",
            choice: ["Head", "Foot", "Back", "Neck"],
            answer: 3,
            photo: "assets/images/DariaTV.gif"
        },

        {
            question: "What column did Brittany run in the school newspaper?",
            choice: ["Lunch Review", "Cheerleading", "Fashion", "Advice"],
            answer: 3,
            photo: "assets/images/BrittanyAdvice.gif"
        },

        {
            question: "Daria won the 'Spend a Day with _______' contest.",
            choice: ["Val", "Jane", "Kim", "Sue"],
            answer: 0,
            photo: "assets/images/ValContest.png"
        },

        {
            question: "What was the name of Trent's band?",
            choice: ["Uranium", "Road Worriers", "Mystik Spiral", "Something-Something Explosion"],
            answer: 2,
            photo: "assets/images/TrentBand.gif"
        },

        {
            question: "What was the name of the pizza shop?",
            choice: ["Pizza Prince", "The Slice", "Grease Corner", "Pepperoni Hank's"],
            answer: 0,
            photo: "assets/images/PizzaPrince.gif"
        },

        {
            question: "What was Quinn's role in the Fashion club?",
            choice: ["President", "Vice President", "Secretary", "Treasurer"],
            answer: 1,
            photo: "assets/images/QuinnVP.gif"
        },

        {
            question: "Jodie was president of what club?",
            choice: ["Spanish", "French", "Latin", "Italian"],
            answer: 1,
            photo: "assets/images/JodiePresident.jpeg"
        },

        {
            question: "Mr. O'Neill taught an after school course on what?",
            choice: ["Happiness", "Confidence", "Self-Esteem", "Responsibility"],
            answer: 2,
            photo: "assets/images/ONeillSelfEsteem.gif"
        },

        {
            question: "Who was the football team captain?",
            choice: ["Kevin", "Mack", "Jamie", "Robert"],
            answer: 1,
            photo: "assets/images/CaptMackDaddy.gif"
        },

        {
            question: "What was Principal Li's first name?",
            choice: ["Alexa", "Anna", "Amy", "Angela"],
            answer: 3,
            photo: "assets/images/AngelaLi.jpg"
        },

        {
            question: "What was the name of Sandi's cat?",
            choice: ["Misty", "Chanel", "Revlon", "Fluffy"],
            answer: 3,
            photo: "assets/images/SandiCat.gif"
        },

        {
            question: "Which teacher could not deal with the incompetency of his/her students?",
            choice: ["Ms. Barch", "Mr. DeMartino", "Mr. O'Neill", "Ms. Bennett"],
            answer: 1,
            photo: "assets/images/DeMartino.gif"
        },

        {
            question: "What kind of law did Helen practice?",
            choice: ["Corporate", "Criminal", "Bankruptcy", "Environmental"],
            answer: 0,
            photo: "assets/images/HelenCorporateJob.jpeg"
        },

        {
            question: "How many siblings did Jane have?",
            choice: ["4", "3", "2", "1"],
            answer: 0,
            photo: "assets/images/JaneSiblings.gif"
        },

        {
            question: "Who wasn't one of the three J's?",
            choice: ["Jamie", "Johnny", "Joey", "Jeffy"],
            answer: 1,
            photo: "assets/images/JeffyJamieJoey.jpg"
        },

        {
            question: "What was the Lawndale High School mascot?",
            choice: ["Leopard", "Lion", "Knight", "Cougar"],
            answer: 1,
            photo: "assets/images/LawndaleLions.png"
        },

        {
            question: "What was the nickname of Jake's emotionally abusive father?",
            choice: ["Big Jake", "The Sergeant", "Mad Dog", "Master J"],
            answer: 2,
            photo: "assets/images/DariaDadJake.gif"
        }
    
    ];

    //Here are the variables for the scoresheet for the last page displayed.

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    //Here are the variables for the timer.  

    var timer = 20;
    var intervalId;
    var running = false;

    //Here are the variables for the game.

    var userGuess = "";
    var questionCount = trivia.length;
    var pick; 
    var index;
    var newArray = [];
    var holder = [];

    //This hides the Play Again button.

    $("#reset").hide();

    //When the player clicks the start button, it activates the game.  Questions will appear.

    $("#start").on("click", function() {
        $("#start").hide();
        runTimer();
        displayQuestion();

        //This gives the player a random question.

        for(var i = 0; i < trivia.length; i++) {
            holder.push(trivia[i]);
        }
    });

    //This starts the timer.

    function runTimer() {
        if(!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    };

    //This starts the timer countdown and displays the timer on the html.

    function decrement() {
        $("#timeLeft").html("<h5>Time Remaining: " + timer + "</h5>");
        timer--;

        if (timer === 0) {
            unanswered++;
            stop();
            $("#answerBlock").html("<p>Time is up!  The correct answer is: " + pick.choice[pick.answer] + ".</p>");
            hidePicture();
        }
    };

    //This stops resets the timer for the next question.

    function stop() {
        running = false;
        clearInterval(intervalId);
    };

    //This displays the question with choices on the html.

    function displayQuestion() {
        index = Math.floor(Math.random() * trivia.length);
        pick = trivia[index];

        //This loops through and display possible answers.

        $("#questionBlock").html("<h3>" + pick.question + "</h3>");
        for(var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);

            

            userChoice.attr("data-guessvalue", i);
            $("#answerBlock").append(userChoice);
        }
    };

    //This is the click function that allows the player to selects the her/her answers and its possible outcomes.
    //This doesn't work.

    $(".answerchoice").on("click", function () {
        userGuess = parseInt($(this).attr("data-guessvalue"));
        
        if (userGuess === pick.answer) {
            stop();
            correctAnswers++;
            userGuess = "";
            $("#answerBlock").html("<p> Correct! </p>");
            hidePicture();

        } else {
            stop ();
            wrongAnswers++;
            userGuess="";
            $("#answerBlock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidePicture();
        }
    });

    //This hides the pictures after 3 seconds so a new question can appear.

    function hidePicture() {
        $("#answerBlock").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        trivia.splice(index, 1);

        var hidpic = setTimeout (function() {
            $("#answerBlock").empty();
            timer = 20;

            //This runs the score sheet when all the questions have been answered.

            if ((wrongAnswers + correctAnswers + unanswered) === questionCount){
                $("#questionBlock").empty();
                $("#questionBlock").html("<h3> Game Over! Here is how you did: </h3>");
                $("#answerBlock").append("<h4> Correct: " + correctAnswers + "</h4>");
                $("#answerBlock").append("<h4> Incorrect: " + wrongAnswers + "</h4>");
                $("#answerBlock").append("<h4> Unanswered: " + unanswered + "</h4>");
                $("#reset").show();
                correctAnswers = 0;
                wrongAnswers = 0;
                unanswered = 0;

            } else {
                runTimer();
                displayQuestion();
            }
             
        }, 3000);
    }

    //This resets the game so the player can playe again.

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