let Num = document.getElementById("number");

let n = Number(Num);

function tall(dir) {
  if (dir === "ned") {
    n--;
  } else {
    n++;
  }

  return (document.getElementById("number").innerHTML = `${n}`);
}

function changeBkgCol() {
  if (document.body.style.backgroundColor === "rgb(80, 103, 107)") {
    document.body.style.backgroundColor = "black";
    document.getElementById("nightMode").innerHTML = "Back to green";
  } else {
    document.body.style.backgroundColor = "rgb(80, 103, 107)";
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

function getChar(c) {
  const out = document.getElementById("tastaoutput");

  if (c === "clear") {
    out.innerHTML = "";
  } else if (c === "space") {
    out.innerHTML += " ";
  } else {
    out.innerHTML += c.innerHTML;
  }
}

function light() {
  let status = document.getElementById("lights");
  let bulb = document.getElementById("lysp");

  if (status.innerHTML === "Lights on") {
    bulb.style.backgroundColor = "yellow";
    status.innerHTML = "Lights off";
  } else {
    bulb.style.backgroundColor = "grey";
    status.innerHTML = "Lights on";
  }
}

let n1 = 0;
let n2 = 0;
let points = 0;

function game(c) {
  const reset = document.getElementById("reset");
  const submit = document.getElementById("submit");
  const play = document.getElementById("play");
  const num1 = document.getElementById("number1");
  const num2 = document.getElementById("number2");
  const sign = document.getElementById("sign");
  const p = document.getElementById("points");

  let game = true;

  if (c === "play") {
    points = 0;
    play.classList.add("hide");
    reset.classList.remove("hide");
    submit.classList.remove("hide");

    n1 = Math.floor(Math.random() * 10 + 1);
    num1.innerHTML = n1;
    n2 = Math.floor(Math.random() * 10 + 1);
    num2.innerHTML = n2;
    p.innerHTML = `Points: ${points}`;
  }

  if (c === "reset") {
    n1 = Math.floor(Math.random() * 10 + 1);
    num1.innerHTML = n1;
    n2 = Math.floor(Math.random() * 10 + 1);
    num2.innerHTML = n2;
    points = 0
    p.innerHTML = `Points: ${points}`;
  } else if (c === "submit") {
    console.log(n1, n2);

    if (
      (n1 > n2 && sign.value === ">") ||
      (n1 < n2 && sign.value === "<") ||
      (n1 === n2 && sign.value === "=")
    ) {
      if (points < 4) {
        points++;
        p.innerHTML = `Points: ${points}`;
        n1 = Math.floor(Math.random() * 10 + 1);
        num1.innerHTML = n1;
        n2 = Math.floor(Math.random() * 10 + 1);
        num2.innerHTML = n2;
      } else {
        
      p.innerHTML = "YOU WON!!!";
      play.classList.remove("hide");
      reset.classList.add("hide");
      submit.classList.add("hide");
      }
    } else {
      p.innerHTML = "YOU LOST!!!";
      play.classList.remove("hide");
      reset.classList.add("hide");
      submit.classList.add("hide");
    }
  }
}
