function pintar(id, color='green'){
    id.style.backgroundColor = color;
}; 


const ele = document.querySelector('#ele1');
 
const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');


if (ele != undefined) {
    ele.addEventListener("click", () => pintar(ele,'yellow'));
}
else {
    blue.addEventListener("click", () => pintar(blue, 'black'));
    red.addEventListener("click", () => pintar(red, 'black'));
    yellow.addEventListener("click", () => pintar(yellow, 'black'));
    green.addEventListener("click", () => pintar(green, 'black'));
}

