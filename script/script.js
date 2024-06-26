
const cv = document.querySelector(".cv")
const text = document.querySelector(".arialblack")
const navkeyright = document.querySelector(".navkeyright")
const navkeyleft = document.querySelector(".navkeyleft")
const projets = document.querySelector(".projets");
const pinButton = document.querySelector("#pin-button")
const header = document.querySelector("header")
const hide = document.querySelector(".hide")
const imageChanging = document.querySelector("#Changing-image")
const imageChanging2 = document.getElementById("malette")
const mouse = document.querySelector(".mousefollow")
function AddText(){
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
}
function change(element,a,b,visualchanges,imgchange, imgchange2){
    if (element.style.position === b){
        element.style.position = a
        visualchanges.style.border = "solid black 1px"
        imgchange.src ="https://lucasteroide.github.io/LucasPortfolio.github.io/Images/Test-recadrage.jpg"
        imgchange2.src = "https://lucasteroide.github.io/LucasPortfolio.github.io/Images/malette-large.png"


    } else {
        element.style.position = b
        visualchanges.style.border = "none"
        imgchange2.src = "https://lucasteroide.github.io/LucasPortfolio.github.io/Images/malette.png"
        imgchange.src ="https://lucasteroide.github.io/LucasPortfolio.github.io/Images/develop_time-removebg-preview.png"
    }
}
navkeyright.addEventListener("click", (e) => {
    AddText()
})
navkeyleft.addEventListener("click", (e) => {
    AddText()
})

document.addEventListener("keydown",(e)=> {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft"){
        AddText()
    }

})
pinButton.addEventListener("click",(e) => {
    console.log(e)
    change(header,"fixed","relative",pinButton,imageChanging, imageChanging2)

})
window.addEventListener("mousemove", (e) => {
    console.log(e)
    mouse.style.left = e.pageX + "px"
    mouse.style.top = e.pageY + "px"
})
