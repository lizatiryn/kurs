let text = ""
let answer = ""

show();
function show() {
  document.getElementById("app").innerHTML = /*HTML*/ `
	<span><a class="main" href="index.html">Back to main</a></span>


	<input onchange='check(this.value)' style= 'display: block; margin: 30px; font-size: 25px'>
	
	<div style= 'display: block; margin: 30px; font-size: 25px'>${answer}</div>
	`;
}

function check(text){
	let acheck = 0
	let dotcheck = 0
	let spacecheck = 0

	for(i=0; i<text.length; i++){
		if(text[i] === "@"){
			acheck++
		}
		else if(text[i] === "."){
			dotcheck++
		}
		else if(text[i] === " "){
			spacecheck++
		}
	}
	if(acheck===1 && dotcheck===1 && spacecheck===0){
		answer = 'This is an email'
	}
	else answer = 'What is that'

	show()
}