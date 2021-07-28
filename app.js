var btnTranslate = document.querySelector("#btn-translate");
var hoomanTalk = document.querySelector("#hooman-talk")
var outputDiv = document.querySelector("#banana-talk")
btnTranslate.addEventListener("click", (e)=>{
    outputDiv.innerText = "Translated " + hoomanTalk.value 
    hoomanTalk.value=''
})