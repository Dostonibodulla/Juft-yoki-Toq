let x;
let y;
let z;
document.querySelector(".aralashtirish").onclick = function(){
    x = Math.floor(Math.random() * 6) +1;
    y = Math.floor(Math.random() * 6) +1;
    z = Math.floor(Math.random() * 6) +1;

    document.querySelector(".label1").innerHTML = x;
    document.querySelector(".label2").innerHTML = y;
    document.querySelector(".label3").innerHTML = z;
}
