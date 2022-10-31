const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];

const lvls = {
EASY : 10,
MEDIUM : 7,
HARD : 5,
}

// Default Level
let defaultLevelName = "EASY"; // Change Level From Here
let defaultLevelSeconds = 0;

// Catch Selectors
let startButton = document.getElementById("btn-start");
let lvlNameSpan = document.getElementById("lvl");
let secondsSpan = document.getElementById("seconds-span");
let theWord = document.getElementById("the-word-div");
let input = document.getElementById("input-text");
let timeLeftSpan = document.getElementById("time-span");
let scoreGot = document.getElementById("got-span");
let scoreTotal = document.getElementById("total-span");
let finishMessage = document.getElementById("finish-div");

lvlNameSpan.value = null;
startButton.setAttribute('disabled', true);
lvlNameSpan.addEventListener('change', function (event) {
  defaultLevelSeconds = lvls[event.target.value];
  startButton.removeAttribute('disabled');
  secondsSpan.innerHTML = defaultLevelSeconds;
   timeLeftSpan.innerHTML = defaultLevelSeconds;
   scoreTotal.innerHTML = words.length;
   
  })
  secondsSpan.innerHTML = defaultLevelSeconds;
   timeLeftSpan.innerHTML = defaultLevelSeconds;
   scoreTotal.innerHTML = words.length;

// Disable Paste Event
input.onpaste = function () {
  return false;
}

// Start Game
startButton.onclick = function () {
  this.remove();
  input.focus();
  // Generate Word Function
  genWords();
  lvlNameSpan.style.display="none"


}

function genWords() {
  // Get Random Word From Array
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // Get Word Index
  let wordIndex = words.indexOf(randomWord);
  // Remove WordFrom Array
  words.splice(wordIndex, 1);
  // Show The Random Word
  theWord.innerHTML = randomWord;

  

  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  secondsSpan.innerHTML=defaultLevelSeconds;

  let start = setInterval(() => {

    timeLeftSpan.innerHTML--;
    secondsSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      // Stop Timer
      clearInterval(start);
      // Compare Words
      if (theWord.innerHTML.toLowerCase().trim() === input.value.toLowerCase().trim()) {
        // Empty Input Field
        input.value = '';
        // Increase Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          // Call Generate Word Function
          genWords();
        } else {
          let span = document.createElement("span");
          span.className = 'good alert  alert-success';
          let spanText = document.createTextNode("Congratz");
          span.appendChild(spanText);
          finishMessage.appendChild(span);
      
        }
      } else {
        let span = document.createElement("span");
        span.className = 'bad alert  alert-danger';
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
let PlayAgin = document.getElementById("PlayAgin");
PlayAgin.onclick = function(){
  location. reload()
}
