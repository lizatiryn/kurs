show();
function show() {
  document.getElementById("app").innerHTML = /*HTML*/ `
	<span><a class="main" href="index.html">Back to main</a></span>

	<div id='reacontainer'>${updateView()}</div>
`;
}

function updateView() {
  let html = ``;
  for (i = 0; i < 25; i++) {
    html += /*HTML*/ `<div class='circle' id='circle${i + 1}'></div>`;
  }
  return html;
}
