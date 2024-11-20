let answer = "8";
let listOfAnswers = [
  "It is certain",
  "It is decidenly so",
  "Without a doubt",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again late",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];
let answeredID = [];
let temp = "";

show();

function show() {
  document.getElementById("app").innerHTML = /*HTML*/ `
	<span><a class="main" href="index.html">Back to main</a></span>

	<div id='outerCircle'> <p id='innerCircle'>${answer}</p></div>
	<button onclick='answerBtn()'>See your answer</button>
	`;
}

function showAnswer(i) {
  answer = listOfAnswers[i];
  answeredID.push(listOfAnswers[i]);
}

function answerBtn() {
  let i = Math.floor(Math.random() * listOfAnswers.length);


  if (answeredID.length != 0 && answeredID.length < listOfAnswers.length) {
    if (answeredID.includes(listOfAnswers[i])) {
      answerBtn();
    } else {
      showAnswer(i);
    }
  } else if (answeredID.length >= listOfAnswers.length) {
    temp = answeredID[answeredID.length - 1];
    answeredID = [];
    answerBtn();
  } else {
    if (listOfAnswers[i] != temp) {
      showAnswer(i);
      temp = "";
    } else {
      answerBtn();
    }
  }

  show();

  document.getElementById("innerCircle").style.fontSize = "50px";
}
