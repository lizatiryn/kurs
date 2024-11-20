let vogn = [];
let item = "";
let shoppinglist = "";

show();

function show() {
  document.getElementById("app").innerHTML = /*HTML*/ `
	<span><a class="main" href="index.html">Back to main</a></span>

	<input style = "display: block; margin: 30px; font-size: 25px" onchange='item=this.value'>
	<button style = "display: block; margin: 30px; font-size: 25px" onclick="addItem()">Add to cart</button> 
	<ul style='list-style: none;font-size: 30px'>${shoppinglist}</ul>
	`;
}

function showList() {
  shoppinglist = "";
  for (i = 0; i < vogn.length; i++) {
    shoppinglist += `<li> <input type = 'checkbox'>  ${vogn[i]}</li>`;
  }
}
function addItem() {
  vogn.push(item);
  showList();
  show();
  item = "";
}
