const { set } = require("lodash");

let Num = document.getElementById("number");

let n = Number(Num);

function tallOpp() {
  n++;
  return (document.getElementById("number").innerHTML = `${n}`);
}

function tallNed() {
  n--;
  return (document.getElementById("number").innerHTML = `${n}`);
}

function changeBkgCol() {
  if (document.body.style.backgroundColor === "darkolivegreen") {
    document.body.style.backgroundColor = "black";
    document.getElementById("nightMode").innerHTML = "Back to green";
  } else {
    document.body.style.backgroundColor = "darkolivegreen";
    document.getElementById("nightMode").innerHTML = "Night mode";
  }
}

function listener(color) {
  let redCirc = document.getElementById("red");
  let yellowCirc = document.getElementById("yellow");
  let greenCirc = document.getElementById("green");

  if (color === "red") {
    redCirc.classList.remove("trafikk");
    document.getElementById("red").classList.add("red");
    yellowCirc.classList.add("trafikk");
    greenCirc.classList.add("trafikk");
  } else if (color === "yellow") {
    redCirc.classList.remove("trafikk");
    redCirc.classList.add("red");
    yellowCirc.classList.remove("trafikk");
    yellowCirc.classList.add("yellow");
    greenCirc.classList.add("trafikk");
  } else {
    redCirc.classList.remove("red");
    redCirc.classList.add("trafikk");
    yellowCirc.classList.remove("yellow");
    yellowCirc.classList.add("trafikk");
    greenCirc.classList.remove("trafikk");
    greenCirc.classList.add("green");
  }
}

function autoLys() {
  let redCirc = document.getElementById("red");
  let yellowCirc = document.getElementById("yellow");
  let greenCirc = document.getElementById("green");

  setTimeout(() => {
    redCirc.style.backgroundColor = "aliceblue";
    yellowCirc.style.backgroundColor = "aliceblue";
    greenCirc.style.backgroundColor = "aliceblue";
  }, 100);

  setTimeout(() => {
    redCirc.style.backgroundColor = "red";
  }, 3000);

  setTimeout(() => {
    yellowCirc.style.backgroundColor = "yellow";
  }, 4000);

  setTimeout(() => {
    redCirc.style.backgroundColor = "aliceblue";
    yellowCirc.style.backgroundColor = "aliceblue";
    greenCirc.style.backgroundColor = "green";
  }, 5000);
}

function changeDiv(ver) {
  let changingDiv = document.getElementById("changing");

  if (ver === "ver1") {
    changingDiv.classList.remove("ver2");
    changingDiv.classList.add("ver1");
    changingDiv.innerHTML =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam maiores officiis qui ad, iure exercitationem. Tenetur, reiciendis maxime excepturi autem ipsa incidunt cumque adipisci inventore nisi doloribus. Doloribus, laborum.";
  } else {
    changingDiv.classList.remove("ver1");
    changingDiv.classList.add("ver2");
    changingDiv.innerHTML =
      "VER2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos, omnis sunt perspiciatis est assumenda facilis, molestias exercitationem dolor nam doloremque porro expedita et velit at ipsum quod facere excepturi.";
  }
}
