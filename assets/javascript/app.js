$(document).ready(function(){
   
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
            question: "Which show on MTV featured celebrities giving tours of their homes?",
            choice: ["Celebrity Homes 101", "Cribs", "Check Out My Place", "None of the Above"],
            answer: 1,
            photo: "assets/images/CribsLogo"
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
        }
    ]

    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;

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

    $( )

});