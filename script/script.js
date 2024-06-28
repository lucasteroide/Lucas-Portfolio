
const cv = document.querySelector(".cv")
const text = document.querySelector(".arialblack")
//const navkeyright = document.querySelector(".navkeyright")
//const navkeyleft = document.querySelector(".navkeyleft")
//const projets = document.querySelector(".projets");
const pinButton = document.querySelector("#pin-button")
const header = document.querySelector("header")
//const hide = document.querySelector(".hide")
const imageChanging = document.querySelector("#Changing-image")
const imageChanging2 = document.getElementById("malette")
const mouse = document.querySelector(".mousefollow")
const clickable = document.getElementsByClassName("clickable")
let width = document.querySelector(".projets").getBoundingClientRect().width

/*function AddText(){
    if (projets.style.display !== "none"){
        projets.style.display = "none";
        cv.style.display = "flex";
        text.textContent="Mes expériences"
        text.style.fontFamily = "Arial Black"
    } else {
        projets.style.display = "flex";
        cv.style.display ="none";
        text.textContent="Voir mes projets"
        text.style.fontFamily = "Arial Black"
    }
}*/
function Grossir(){
    mouse.style.scale="1.80"
    mouse.style.transform = "translate(-30%,-30%)"
}
function Reduire(){
    mouse.style.scale="1"
    mouse.style.transform = "translate(-50%,-50%)"
}
window.addEventListener("mousemove", (e) => {
    mouse.style.left = e.x + "px"
    mouse.style.top = e.y + "px"

})
/*clickable.addEventListener("mouseover",(e)=>{
    mouse.style.scale="1.80"
    mouse.style.transform = "translate(-30%,-30%)"
})
clickable.addEventListener("mouseout",(e)=>{
    mouse.style.scale="1"
    mouse.style.transform = "translate(-50%,-50%)"
})*/
/*navkeyright.addEventListener("click", (e) => {
    AddText()
})
navkeyleft.addEventListener("click", (e) => {
    AddText()
})

document.addEventListener("keydown",(e)=> {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft"){
        AddText()
    }

})*/
pinButton.addEventListener("click",(e) => {
    if (header.style.position === "relative"){
        header.style.position = "fixed"
        pinButton.style.border = "solid black 1px"
        document.querySelector(".body").style.marginTop = "70px"


    } else {
        header.style.position = "relative"
        pinButton.style.border = "none"
        document.querySelector(".body").style.marginTop = "0px"
    }

})

document.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains("clickable")) {
        mouse.style.scale="1.80"
        mouse.style.transform = "translate(-30%,-30%)"
        mouse.style.transitionDuration="0.25s"
    } else {
        mouse.style.scale="1"
        mouse.style.transitionDuration="0.25s"
        mouse.style.transform = "translate(-50%,-50%)"
        mouse.style.transitionDuration="0s"
    }
});



