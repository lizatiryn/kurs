let n=""

show()

function show(){
document.getElementById('app').innerHTML = /*HTML*/ `
<span><a class="main" href="index.html">Back to main</a></span>

<ul style="list-style: none; font-size: 20px"> ${n}</ul>
<button onclick = "togang()">Klick to start</button>
`
}

function togang(){
	n=""

	for(i=1; i<=10; i++){
		n+=`<li>${i*2}</li>`
	}
	show()
}