
// ==================================
// QUESTIONS
// ==================================

const questions = [

    {
        question: "Who is this NBA player?",
        image: "Images/Curry_s_bio_997380.jpg",
        answers: [
            "Stephen Curry",
            "LeBron James",
            "Kevin Durant",
            "Kyrie Irving"
        ],
        correct: "Stephen Curry"
    },

    {
        question: "Who is this NBA player?",
        image: "Images/Screenshot 2026-10-16 125441.png",
        answers: [
            "Stephen Curry",
            "LeBron James",
            "Kevin Durant",
            "Luka Doncic"
        ],
        correct: "Luka Doncic"
    },

    {
        question: "Who is this NBA player?",
        image:"Images/LeBron_James_(51959977144)_(cropped2).jpg", 
        answers: [
            "Stephen Curry",
            "LeBron James",
            "Kevin Durant",
            "Luka Donic"
        ],
        correct: "LeBron James"
    },

    {
        question: "Who is this NBA player?",
        image: "Images/images (1).jpg",
        answers: [
            "Nikola Jokic",
            "Giannis Antetokounmpo",
            "Luka Doncic",
            "Joel Embiid"
        ],
        correct: "Nikola Jokic"
    },

    {
        question: "Who is this NBA player?",
        image: "Images/Giannis_Antetokounmpo_(51664127127)_(cropped).jpg",
        answers: [
            "Nikola Jokic",
            "Giannis Antetokounmpo",
            "Luka Doncic",
            "Joel Embiid"
        ],
        correct: "Giannis Antetokounmpo"
    },


    {
        question: "Who is this NBA player?",
        image: "Images/dylan.jpg",
        answers: [
             "Damian Lillard",
            "Stephen Curry",
            "Dylan Brooks",
            "Devin Booker"
        ],
        correct: "Dylan Brooks"
    },

    {
        question: "Who is this NBA player?",
        image: "Images/carter-bryant-GettyImages-RM-2277009557-CUS.jpg",
        answers: [
            "Carter Bryant Jr.",
            "Carter Bryant",
            "Bryant Carter",
            "Bryant Carter Jr."
        ],
        correct: "Carter Bryant"
    },

    {
        question: "Who is this NBA player?",
        image: "Images/wemby-at-msg.jpg",
        answers: [
            "Damian Lillard",
            "Stephen Curry",
            "Dylan Brooks",
            "Victor Wembanyama"
        ],
        correct: "Victor Wembanyama"
    },

    {
        question: "What is a layup?",
        answers: [
            "A shot taken from behind the three-point line",
            "A close-range shot made while moving toward the basket",
            "A move where a player passes the ball between their legs",
            "A shot taken from the free-throw line"
        ],
        correct: "A close-range shot made while moving toward the basket"
    },
   
    {
        question: "What does AND1 mean?",
        answers: [
            "Making a three-pointer and getting an extra point",
            "Scoring while being fouled and earning an additional free throw",
            "Stealing the ball and immediately scoring",
            "Making two baskets in a row"
        ],
        correct: "Scoring while being fouled and earning an additional free throw"
    },

    {
        question: "What is a floater?",
        answers: [
            "A shot where a player jumps backward to create space",
            "high-arcing shot used to shoot over taller defenders",
            "A shot where a player throws the ball off the backboard to themselves",
            "A shot taken while falling out of bounds"
        ],
        correct: "high-arcing shot used to shoot over taller defenders"
    },

    {
        question: "What is an alley-oop?",
        answers: [
            "Passing the ball between your legs to a teammate",
            "Catching a pass in midair and scoring before landing",
            "Shooting the ball from half-court",
            "Grabbing an offensive rebound and immediately scoring"
        ],
        correct: "Catching a pass in midair and scoring before landing"
    },
    {
        question: "What is jelly in basketball?",
        answers: [
            "A move where a player fakes a pass before shooting",
            "A flashy layup using creative hand movements or ball spins",
            "A shot where a player throws the ball high over a defender",
            "A move where a player dribbles behind their back"
        ],
        correct: "A flashy layup using creative hand movements or ball spins"
    },
    {
        question: "What is triple double in basketball?",
        answers: [
            "Making three three-pointers in a row",
            "Recording 10 or more in three different statistical categories",
            "Scoring 30 points in a single game",
            "Getting 10 points, 10 rebounds, and 10 fouls"
        ],
        correct: "Recording 10 or more in three different statistical categories"
    },
    {
        question: "Who would you want to see play basketball?",
        answers: [
            "Bryan",
            "Luka",
        ],
        correct: "Bryan",
        special: "bryanVsLuka"
    },




];


// ==================================
// GAME VARIABLES
// ==================================

let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];


// ==================================
// HTML ELEMENTS
// ==================================

const homeScreen = document.getElementById("homeScreen");
const triviaScreen = document.getElementById("triviaScreen");
const resultsScreen = document.getElementById("resultsScreen");

const playButton = document.getElementById("playButton");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");


// ==================================
// START GAME
// ==================================

playButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);

function startGame() {

    currentQuestion = 0;
    score = 0;

    // Shuffle questions
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

    homeScreen.style.display = "none";
    resultsScreen.style.display = "none";
    triviaScreen.style.display = "flex";

    showQuestion();
}


// ==================================
// DISPLAY QUESTION
// ==================================

function showQuestion() {

    const question = shuffledQuestions[currentQuestion];

    // Question Number
    document.getElementById("questionNumber").textContent =
        `QUESTION ${currentQuestion + 1} / ${shuffledQuestions.length}`;

    // Score
    document.getElementById("score").textContent =
        `SCORE: ${score}`;

    // Question Text
    document.getElementById("questionText").textContent =
        question.question;


    // ==================================
    // DISPLAY PLAYER IMAGE
    // ==================================

    const playerImageContainer =
        document.getElementById("playerImageContainer");

    const playerImage =
        document.getElementById("playerImage");

    if (question.image) {

        playerImage.src = question.image;

        playerImageContainer.style.display = "flex";

    } else {

        playerImageContainer.style.display = "none";

        playerImage.removeAttribute("src");

    }


    // ==================================
    // PROGRESS BAR
    // ==================================

    document.getElementById("progress").style.width =
        `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%`;


    // Reset feedback
    document.getElementById("feedback").textContent = "";

    nextButton.style.display = "none";


    // ==================================
    // ANSWER BUTTONS
    // ==================================

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    // Shuffle answers
    const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer-btn");


        // ==================================
        // BRYAN VS LUKA HOVER EFFECT ❤️
        // ==================================

       // ==================================
        // LUKA RUNS AWAY FROM JENN 😂
        // ==================================

        if (
            question.special === "bryanVsLuka" &&
            answer === "Luka"
        ) {

            button.classList.add("runaway-luka");

            button.addEventListener("mouseenter", () => {

                if (!button.disabled) {
                    moveLukaButton(button);
                }

            });

        }
        // ==================================
        // MAKE LUKA RUN AWAY 😂
        // ==================================

        function moveLukaButton(button) {

            const padding = 20;

            const buttonWidth = button.offsetWidth;
            const buttonHeight = button.offsetHeight;

            // Available screen space
            const maxX = window.innerWidth - buttonWidth - padding;
            const maxY = window.innerHeight - buttonHeight - padding;

            // Generate random positions
            const randomX = Math.random() * Math.max(0, maxX - padding) + padding;
            const randomY = Math.random() * Math.max(0, maxY - padding) + padding;

            // Move button around the screen
            button.style.position = "fixed";

            button.style.left = randomX + "px";
            button.style.top = randomY + "px";

            button.style.zIndex = "9999";

        }


        // ==================================
        // CHECK ANSWER
        // ==================================

        button.addEventListener("click", () => {

            checkAnswer(button, answer, question.correct);

        });


        answersContainer.appendChild(button);

    });

}

// ==================================
// CHECK ANSWER
// ==================================

// ==================================
// CHECK ANSWER
// ==================================

function checkAnswer(selectedButton, selectedAnswer, correctAnswer) {

    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        }
    });

    if (selectedAnswer === correctAnswer) {

        score += 100;

        document.getElementById("feedback").textContent =
            "🔥 CORRECT! +100 POINTS";

        // ==================================
        // SPECIAL LUKA EFFECT
        // ==================================

        if (
            (correctAnswer === "Luka Doncic" ||
             correctAnswer === "Luka Dončić") &&
            shuffledQuestions[currentQuestion].image
        ) {
            showLukaEffect();
        }
        // ==================================
        // STEPH CURRY EFFECT
        // ==================================

        if (
            correctAnswer === "Stephen Curry" &&
            shuffledQuestions[currentQuestion].image
        ) {
            showCurryEffect();
        }
        // ==================================
        // LEBRON LESUNSHINE EFFECT
        // ==================================

        if (
            correctAnswer === "LeBron James" &&
            shuffledQuestions[currentQuestion].image
        ) {
            showLebronEffect();
        }
        // ==================================
        // JOKIC HORSE EFFECT
        // ==================================

        if (
            (correctAnswer === "Nikola Jokic" ||
            correctAnswer === "Nikola Jokić") &&
            shuffledQuestions[currentQuestion].image
        ) {
            showJokicEffect();
        }
        // ==================================
        // GIANNIS EFFECT
        // ==================================

        if (
            correctAnswer === "Giannis Antetokounmpo" &&
            shuffledQuestions[currentQuestion].image
        ) {
            showGiannisEffect();
        }
        // Carter Bryant special effect
        if (
            correctAnswer === "Carter Bryant" &&
            shuffledQuestions[currentQuestion].image
        ) {
            showCarterEffect();
        }
        // WEMBY VIDEO EFFECT

        if (
            (correctAnswer === "Victor Wembanyama" ||
            correctAnswer === "Wemby") &&
            shuffledQuestions[currentQuestion].image
        ) {
            showWembyVideo();
        }

    } else {

        selectedButton.classList.add("wrong");

        document.getElementById("feedback").textContent =
            "❌ WRONG ANSWER!";
    }

    // Update score
    document.getElementById("score").textContent =
        `SCORE: ${score}`;

    // Show next question button
    nextButton.style.display = "inline-block";
}


// ==================================
// NEXT QUESTION
// ==================================

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }

});


// ==================================
// RESULTS
// ==================================

function showResults() {

    triviaScreen.style.display = "none";
    resultsScreen.style.display = "flex";

    // Calculate maximum score
    const maxScore = shuffledQuestions.length * 100;

    // Display final score
    document.getElementById("finalScore").textContent =
        `YOUR SCORE: ${score} / ${maxScore}`;

    // Always display the same message
    document.getElementById("resultMessage").textContent =
        "🏆 JENN KNOWS BALL 🏆";

}
// ==================================
// LUKA SPECIAL EFFECT
// ==================================

let specialEffectTimeout;

function showLukaEffect() {

    const specialEffect =
        document.getElementById("specialEffect");

    const specialMessage =
        document.getElementById("specialMessage");

    const effectImages =
        document.getElementById("effectImages");

    const heartsContainer =
        document.getElementById("heartsContainer");

    // Clear previous effects
    clearTimeout(specialEffectTimeout);

    effectImages.innerHTML = "";
    heartsContainer.innerHTML = "";

    // Show effect
    specialEffect.style.display = "block";

    specialMessage.textContent = "JENN LOVES PAPA LUKA ❤️";

    // Luka pictures
    const lukaPictures = [
        "Images/effects/3c21bd71581ffb20c23467528ae8649d.jpg",
        "Images/effects/29h53l.jpg",
        "Images/effects/images (3).jpg"
    ];

    const positions = [
        { top: "35%", left: "8%" },
        { top: "55%", left: "75%" },
        { top: "65%", left: "20%" }
    ];

    lukaPictures.forEach((picture, index) => {

        const img = document.createElement("img");

        img.src = picture;
        img.classList.add("effect-image");

        img.style.top = positions[index].top;
        img.style.left = positions[index].left;

        effectImages.appendChild(img);

    });

    // Create floating hearts
    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.textContent = ["❤️", "💕", "💖", "💗"][
            Math.floor(Math.random() * 4)
        ];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDelay = Math.random() * 1.5 + "s";

        heart.style.fontSize =
            (20 + Math.random() * 30) + "px";

        heartsContainer.appendChild(heart);

    }

    // Hide after 4 seconds
    specialEffectTimeout = setTimeout(() => {

        specialEffect.style.display = "none";

        effectImages.innerHTML = "";
        heartsContainer.innerHTML = "";

    }, 8000);

}
// ==================================
// STEPH CURRY SPECIAL EFFECT
// ==================================

let curryEffectTimeout;

function showCurryEffect() {

    const curryEffect =
        document.getElementById("curryEffect");

    const curryFlames =
        document.getElementById("curryFlames");

    const curryHats =
        document.getElementById("curryHats");

    // Clear previous effects
    clearTimeout(curryEffectTimeout);

    curryFlames.innerHTML = "";
    curryHats.innerHTML = "";

    // Show Curry effect
    curryEffect.style.display = "block";


    // ==================================
    // CREATE FLAMES
    // ==================================

    for (let i = 0; i < 35; i++) {

        const flame = document.createElement("div");

        flame.classList.add("curry-flame");

        flame.textContent = "🔥";

        flame.style.left = Math.random() * 100 + "%";

        flame.style.animationDelay =
            Math.random() * -3 + "s";

        flame.style.fontSize =
            (35 + Math.random() * 40) + "px";

        curryFlames.appendChild(flame);
    }


    // ==================================
    // CREATE CHEF HATS
    // ==================================

    for (let i = 0; i < 15; i++) {

        const hat = document.createElement("div");

        hat.classList.add("curry-hat");

        hat.textContent = "👨‍🍳";

        hat.style.left = Math.random() * 100 + "%";

        hat.style.animationDelay =
            Math.random() * -5 + "s";

        hat.style.fontSize =
            (35 + Math.random() * 30) + "px";

        curryHats.appendChild(hat);
    }


    // ==================================
    // HIDE AFTER 8 SECONDS
    // ==================================

    curryEffectTimeout = setTimeout(() => {

        curryEffect.style.display = "none";

        curryFlames.innerHTML = "";
        curryHats.innerHTML = "";

    }, 4000);

}
// ==================================
// LEBRON LESUNSHINE EFFECT
// ==================================

let lebronEffectTimeout;

function showLebronEffect() {

    const lebronEffect =
        document.getElementById("lebronEffect");

    const lebronImage =
        document.getElementById("lebronImage");

    // Clear previous timer
    clearTimeout(lebronEffectTimeout);

    // Restart image animation
    lebronImage.style.animation = "none";

    void lebronImage.offsetWidth;

    lebronImage.style.animation =
        "lebronZoom 8s ease-out forwards";

    // Display full-screen effect
    lebronEffect.style.display = "block";

    // Hide after 8 seconds
    lebronEffectTimeout = setTimeout(() => {

        lebronEffect.style.display = "none";

    }, 8000);

}
// ==================================
// JOKIC HORSE EFFECT
// ==================================

let jokicEffectTimeout;

function showJokicEffect() {

    const jokicEffect =
        document.getElementById("jokicEffect");

    const horsesContainer =
        document.getElementById("horsesContainer");

    // Clear previous effect
    clearTimeout(jokicEffectTimeout);

    horsesContainer.innerHTML = "";

    // Show horse effect
    jokicEffect.style.display = "block";

    // Create 12 horses
    for (let i = 0; i < 12; i++) {

        const horse = document.createElement("div");

        horse.classList.add("jokic-horse");

        horse.textContent = "🐎";

        // Random vertical position
        horse.style.top =
            Math.random() * 85 + "%";

        // Random horse size
        horse.style.fontSize =
            (40 + Math.random() * 50) + "px";

        // Random running speed
        horse.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        // Start horses at different times
        horse.style.animationDelay =
            (Math.random() * -6) + "s";

        horsesContainer.appendChild(horse);
    }

    // Hide effect after 8 seconds
    jokicEffectTimeout = setTimeout(() => {

        jokicEffect.style.display = "none";

        horsesContainer.innerHTML = "";

    }, 8000);

}
// ==================================
// GIANNIS GREEK FREAK EFFECT
// ==================================

let giannisEffectTimeout;

function showGiannisEffect() {

    const giannisEffect =
        document.getElementById("giannisEffect");

    const giannisFlash =
        document.getElementById("giannisFlash");

    const giannisImages =
        document.getElementById("giannisImages");

    const giannisLightning =
        document.getElementById("giannisLightning");

    const triviaContainer =
        document.querySelector(".trivia-container");


    // Clear previous animation
    clearTimeout(giannisEffectTimeout);

    giannisImages.innerHTML = "";
    giannisLightning.innerHTML = "";


    // Show Giannis effect
    giannisEffect.style.display = "block";


    // ==================================
    // GREEN FLASH
    // ==================================

    giannisFlash.style.animation = "none";

    void giannisFlash.offsetWidth;

    giannisFlash.style.animation =
        "giannisFlashAnimation 0.7s ease-out forwards";


    // ==================================
    // SCREEN SHAKE
    // ==================================

    triviaContainer.classList.remove("giannis-shake");

    void triviaContainer.offsetWidth;

    triviaContainer.classList.add("giannis-shake");


    // ==================================
    // GIANNIS PICTURES
    // ==================================

    const pictures = [
        "Images/effects/a5886605dedf0b3d769bc9001eb7e4ba.jpg",
        "Images/effects/f409833ad78731b8eea7012a695ac326.jpg"
    ];

    const positions = [
        { top: "35%", left: "5%" },
        { top: "35%", right: "5%" }
    ];

    pictures.forEach((picture, index) => {

        const img = document.createElement("img");

        img.src = picture;

        img.classList.add("giannis-image");

        img.style.top = positions[index].top;

        if (positions[index].left) {
            img.style.left = positions[index].left;
        }

        if (positions[index].right) {
            img.style.right = positions[index].right;
        }

        giannisImages.appendChild(img);

    });


    // ==================================
    // FALLING LIGHTNING
    // ==================================

    for (let i = 0; i < 25; i++) {

        const bolt = document.createElement("div");

        bolt.classList.add("giannis-bolt");

        bolt.textContent = "⚡";

        bolt.style.left =
            Math.random() * 100 + "%";

        bolt.style.fontSize =
            (35 + Math.random() * 45) + "px";

        bolt.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        bolt.style.animationDelay =
            (Math.random() * -5) + "s";

        giannisLightning.appendChild(bolt);

    }


    // ==================================
    // HIDE AFTER 8 SECONDS
    // ==================================

    giannisEffectTimeout = setTimeout(() => {

        giannisEffect.style.display = "none";

        giannisImages.innerHTML = "";
        giannisLightning.innerHTML = "";

        triviaContainer.classList.remove("giannis-shake");

    }, 8000);

}
// ==================================
// CARTER BRYANT SPECIAL EFFECT
// ==================================

let carterEffectTimeout;

function showCarterEffect() {

    const carterEffect =
        document.getElementById("carterEffect");

    const carterImages =
        document.getElementById("carterImages");

    const carterSparkles =
        document.getElementById("carterSparkles");

    // Clear previous animation
    clearTimeout(carterEffectTimeout);

    carterImages.innerHTML = "";
    carterSparkles.innerHTML = "";

    // Show effect
    carterEffect.style.display = "block";


    // ==================================
    // CARTER PICTURES
    // ==================================

    const pictures = [
        "Images/effects/carter.jpg",
        "Images/effects/carter1.jpg",
        "Images/effects/carter2.jpg"
    ];

    const positions = [
        { top: "30%", left: "5%" },
        { top: "35%", right: "5%" },
        { top: "60%", left: "40%" }
    ];

    pictures.forEach((picture, index) => {

        const img = document.createElement("img");

        img.src = picture;
        img.classList.add("carter-image");

        img.style.top = positions[index].top;

        if (positions[index].left) {
            img.style.left = positions[index].left;
        }

        if (positions[index].right) {
            img.style.right = positions[index].right;
        }

        carterImages.appendChild(img);
    });


    // ==================================
    // FLOATING SPARKLES
    // ==================================

    for (let i = 0; i < 30; i++) {

        const sparkle = document.createElement("div");

        sparkle.classList.add("carter-sparkle");

        sparkle.textContent =
            ["✨", "💗", "💕", "💖"][
                Math.floor(Math.random() * 4)
            ];

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.fontSize =
            (20 + Math.random() * 25) + "px";

        sparkle.style.animationDelay =
            (Math.random() * -4) + "s";

        carterSparkles.appendChild(sparkle);
    }


    // ==================================
    // HIDE AFTER 8 SECONDS
    // ==================================

    carterEffectTimeout = setTimeout(() => {

        carterEffect.style.display = "none";

        carterImages.innerHTML = "";
        carterSparkles.innerHTML = "";

    }, 8000);
}
// ==================================
// WEMBY VIDEO EFFECT
// ==================================

function showWembyVideo() {

    const videoEffect =
        document.getElementById("wembyVideoEffect");

    const video =
        document.getElementById("wembyVideo");

    // Show video
    videoEffect.style.display = "flex";

    // Restart video from beginning
    video.currentTime = 0;

    // Play video
    video.play().catch(error => {
        console.log("Video failed to play:", error);
        videoEffect.style.display = "none";
    });

    // Hide video when it finishes
    video.onended = function() {

        videoEffect.style.display = "none";

        video.pause();

        video.currentTime = 0;
    };

}
// TEMPORARY TEST SHORTCUT
document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "r") {
        showResults();
    }
});