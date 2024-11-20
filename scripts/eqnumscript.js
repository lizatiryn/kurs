let text = "No equal numbers were found yet";

show();
function show() {
  document.getElementById("app").innerHTML = /*HTML*/ `
	<span><a class="main" href="index.html">Back to main</a></span>
	
	<button style="display: block; margin: 30px" onclick="findEqual()">Find numbers</button>

	<p style="margin-left: 30px">${text}</p>
	`;
}

function findEqual() {
  text = "";
  let num1 = 1;
  let num2 = 9;

  while (num1 != num2) {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
  }
  text = `Equal numbers were found: ${num1} and ${num2}`;
  show();
}
