let aCounter = 0;

let text = "";
let reversedText = "";

show();
function show() {
  document.getElementById("app").innerHTML = /*HTML*/ `
<span><a class="main" href="index.html">Back to main</a></span>

<input style="display: block; margin: 30px; font-size: 25px" type="text" onchange="text = this.value">

<button style="margin-left: 30px" onclick="checkVocals()">Check</button>
<button style="margin-left: 30px" onclick="reverse()">Reverse</button>

<p style="margin-left: 30px; font-size: 25px">Amount of vocals: ${aCounter}</p>
<p style="margin-left: 30px; font-size: 25px">Reversed phrase: ${reversedText}</p>
`;
}

function checkVocals() {
  let length = text.length;
	aCounter = 0
  for (i = 0; i <= length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u" ||
      text[i] === "y" ||
      text[i] === "æ" ||
      text[i] === "ø" ||
      text[i] === "å"
    )
      aCounter++;
  }
  show();
}

function reverse(){
  let length = text.length;
  reversedText=""
  for(i=length - 1; i>=0; i--){
    reversedText += `${text[i]}`
  }

  show()
}
