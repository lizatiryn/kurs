let Num = document.getElementById("number");

let n = Number(Num);

function tallOpp() {

    n++;
    return document.getElementById("number").innerHTML = ""+n;
}

function tallNed() {
    
    n--;
    return document.getElementById("number").innerHTML = ""+n;

}

console.log(Num);