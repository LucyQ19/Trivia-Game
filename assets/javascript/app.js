$(document).ready(function() {
   
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
            question: "Which teacher could not deal with his/her students?",
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
            question: "What was the nickname of Jake's emotionally abusive dad?",
            choice: ["Big Jake", "The Sergeant", "Mad Dog", "Master J"],
            answer: 2,
            photo: "assets/images/DariaDadJake.gif"
        }
    
    ];

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0; 

    var timer = 15;
    var intervalId;
    var running = false;

    var userGuess = "";
    var questionCount = trivia.length;
    var pick; 
    var index;
    var newArray = [];
    var holder = [];


    $("#reset").hide();

    $("#start").on("click", function() {
        $("#start").hide();
        runTimer();
        displayQuestion();

        for(var i = 0; i < trivia.length; i++) {
            holder.push(trivia[i]);
        }
    });

    function runTimer() {
        if(!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    };

    function decrement() {
        $("#timeLeft").html("<h5>Time Remaining: " + timer + "</h5>");
        timer--;

        if (timer === 0) {
            unanswered++;
            stop();
            $("#answerBlock").html("<h5>Time is up!  The correct answer is: " + pick.choice[pick.answer] + ".</h5>");
            hidePicture();
        }
    };

    function stop() {
        running = false;
        clearInterval(intervalId);
    };


    function displayQuestion() {
        index = Math.floor(Math.random() * trivia.length);
        pick = trivia[index];

        $("#questionBlock").html("<h3>" + pick.question + "</h3>");
        for(var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);

            userChoice.attr("data-guessvalue", i);
            $("#answerBlock").append(userChoice);
        }
    };

    $('body').on('click', '.answerchoice', function() {

            userGuess = parseInt($(this).attr("data-guessvalue"));
        
            if (userGuess === pick.answer) {
                stop();
                correctAnswers++;
                userGuess = "";
                $("#answerBlock").html("<h5> Correct! You are too smart and too sensitive for a world like ours.</h5>");
                hidePicture();

            } else {
                stop ();
                wrongAnswers++;
                userGuess="";
                $("#answerBlock").html("<h5>Wrong! The correct answer is: " + pick.choice[pick.answer] + ".</h5>");
                hidePicture();
        }
 
    });


    function hidePicture() {
        $("#answerBlock").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        trivia.splice(index, 1);

        var hidPic = setTimeout (function() {
            $("#answerBlock").empty();
            timer = 15;


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