import Root from "./Root";
console.log(Root, "hhhhh")
const cursorTag = document.querySelector("div.cursor")
const ball = cursorTag.querySelector("div")

let currentTx = 0;
let currentTy = 0;
let aimX = 0;
let aimY = 0;
let spread = 0.3;

const animate = function() {
    currentTx += aimX - currentTx * spread;
    currentTy += aimY - currentTy * spread;
    ball.style.left = currentTx + "px";
    ball.style.top = currentTy + "px"
    requestAnimationFrame(animate)
}
animate()

document.addEventListener("mousemove", function(event){
    aimX=event.pageX;
    aimY = event.pageY;
    ball.style.left = event.pageX + "px";
    ball.style.top = event.pageY + "px"
})

// export default animate
