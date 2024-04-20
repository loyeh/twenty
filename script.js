const myNumber = document.getElementById("number");
const resultText = document.getElementById("resultText");
const result = document.getElementById("result");
const main = document.getElementById("main");

//generating a random number
const randomNum = Math.trunc(Math.random() * 100);
console.log(randomNum);

//checking the said number with the random one
function checkNumber() {
  console.log(myNumber.innerText);
  if (myNumber.innerText == randomNum) {
    main.innerHTML =
      `<h5>Congrats! You have guessed the number</h5><h5>it was ${randomNum} </h5><button onclick="window.location.reload()">Play Again</button>`;
  }
  if (myNumber.innerText > randomNum) {
    resultText.innerText = "go lower";
  }
  if (myNumber.innerText < randomNum) {
    resultText.innerText = "go higher";
  }

}
//using speech recognition API

window.speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new window.speechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", (e) => {
  const test = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript);
  if (e.results[0].isFinal) {
    myNumber.innerText = test;
    console.log("yes");
    checkNumber();
  }
  console.log(e.results);
});
recognition.addEventListener("end", () => {
  recognition.start();
});
recognition.start();
