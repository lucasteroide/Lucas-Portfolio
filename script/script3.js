const cursor = document.getElementById("mousefollow")
const clickableElements = document.querySelector(".clickable")
const addTextMail = document.querySelector(".addtextmail")
const addTextInsta = document.querySelector(".addtextinsta")
const addTextSnap = document.querySelector(".addtextsnap")
const imgInsta = document.querySelector("#resizeinsta")
const imgSnap = document.querySelector("#resizesnapchat")
const imgMail = document.querySelector("#resizemail")
document.body.addEventListener("mousemove", (e)=> {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
clickableElements.addEventListener("mouseover", (e)=> {
    cursor.style.scale="1.80";
    cursor.style.transform = "translate(-30%,-30%)";
    if (e.target.className === "mail") {
        addTextMail.className = "addtextmail"
        addTextMail.style.display ="flex"
        addTextMail.style.justifyContent="center"
        addTextMail.textContent = "Contactez-moi par mail";
        addTextMail.className = "addtextmail"
        addTextSnap.textContent = "";
        addTextInsta.textContent = "";
    }
    if(e.target.className === "snapchat") {
        addTextSnap.className = "addtextsnap"
        addTextSnap.style.display ="flex"
        addTextSnap.style.justifyContent="right"
        addTextSnap.textContent = "Ajoutez/Contactez-moi sur Snapchat";
        addTextMail.textContent = "";
        addTextInsta.textContent = "";

    }
    if(e.target.className === "instagram"){
        addTextInsta.className = "addtextinsta"
        addTextInsta.style.display ="flex"
        addTextInsta.style.justifyContent="left"
        addTextInsta.textContent = "Ajoutez/contactez-moi sur Instagram";

        addTextSnap.textContent = "";
        addTextMail.textContent = "";
    }
})
clickableElements.addEventListener("mouseout", (e)=> {
    cursor.style.scale="1";
    cursor.style.transform = "translate(-50%,-50%)";
    cursor.style.zIndex = "1000000"
    addTextMail.textContent = "";
    addTextInsta.textContent = "";
    addTextSnap.textContent = "";
})
window.onload = function() {
    let tempwidth = window.innerWidth/5
    if (tempwidth <110){
        tempwidth = 110
    }
    imgInsta.style.width = tempwidth.toString() + "px"
    imgInsta.style.height = "auto"
    imgSnap.style.width = tempwidth.toString() + "px"
    imgSnap.style.height = "auto"
    imgMail.style.width = tempwidth.toString() + "px"
    imgMail.style.height = "auto"
};
window.onresize = function (){
    let tempwidth = window.innerWidth/5
    if (tempwidth <110){
        tempwidth = 110
    }
    imgInsta.style.width = tempwidth.toString() + "px"
    imgInsta.style.height = "auto"
    imgSnap.style.width = tempwidth.toString() + "px"
    imgSnap.style.height = "auto"
    imgMail.style.width = tempwidth.toString() + "px"
    imgMail.style.height = "auto"
}
