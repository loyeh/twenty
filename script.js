const result = document.getElementById("result");
const main = document.getElementById("main");

//generating a random number
const randomNum = Math.trunc(Math.random() * 100);
console.log(randomNum);

// checking if our data is a number or not
function isNumeric(num) {
  return !isNaN(num);
}

//checking the said number with the random one
function checkNumber(number) {
  const resultText = document.getElementById("resultText");

  console.log(isNumeric(number));
  if (isNumeric(number)) {
    if (number > 0 && number <= 100) {
      if (number == randomNum) {
        main.innerHTML = `<h3>Congrats! You have guessed the number</h3><h3>it was ${randomNum} </h3><button onclick="window.location.reload()">Play Again</button>`;
      }
      if (number > randomNum) {
        resultText.innerText = "GO LOWER";
      }
      if (number < randomNum) {
        resultText.innerText = "GO HIGHER";
      }
    } else {
      resultText.innerText = "Please say a number between 1 and 100";
    }
  } else {
    resultText.innerText = "Please say a number";
  }
}
//using speech recognition API

window.speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new window.speechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", (e) => {
  const test = e.results[0][0].transcript;

  if (e.results[0].isFinal) {
    result.innerHTML = `<p>You said:</p>
    <div class="number" id="number"></div><p id="resultText"></p>
    `;
    const myNumber = document.getElementById("number");

    myNumber.innerText = test;
    console.log("yes");
    checkNumber(test);
  }
  console.log(e.results);
});
recognition.addEventListener("end", () => {
  recognition.start();
});
recognition.start();
