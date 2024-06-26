const importantText = document.querySelector(".Important-Text")
const cardBody =document.querySelector(".card-body")
const addtext = document.querySelector(".addtext")
const cursor = document.getElementById("cursor");
const clickable = document.querySelector(".clickable")
const parcours = document.querySelector(".parcours")

document.body.addEventListener("mousemove", (e)=> {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


importantText.addEventListener("mouseover", (e)=> {
    addtext.className = "Important-text animate__animated animate__backInDown"
    importantText.style.scale="2"
    parcours.style.display = "none"
    addtext.textContent = "Tu veux un site dynamique, créatif, innovant ? Mes services sont faits pour toi !"
})
importantText.addEventListener("mouseout", (e)=> {
    addtext.textContent = ""
    addtext.className =""
    importantText.style.scale="1"
    parcours.style.display = "inline-block"
    parcours.className = "parcours clickable btn btn-primary"
})
clickable.addEventListener("mouseover",(e)=>{
    cursor.style.scale="1.80"
    cursor.style.transform = "translate(-30%,-30%)"
})
clickable.addEventListener("mouseout",(e)=>{
    cursor.style.scale="1"
    cursor.style.transform = "translate(-50%,-50%)"
})
parcours.addEventListener("mouseover", (e)=> {
    addtext.className = "Important-text animate__animated animate__backInDown"
    addtext.textContent = "Tu veux voir mes précédents projets et mon expérience ?"
    parcours.style.scale="2"
    importantText.style.display = "none"
    importantText.className = "Important-Text clickable btn btn-primary"
})
parcours.addEventListener("mouseout", (e)=> {
    addtext.textContent = ""
    addtext.className = ""
    parcours.style.scale="1"
    importantText.style.display = "inline-block"
    importantText.className = "Important-Text clickable btn btn-primary"
})