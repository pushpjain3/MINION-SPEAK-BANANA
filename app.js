var btnTranslate = document.querySelector("#btn-translate");
var hoomanTalk = document.querySelector("#hooman-talk");
var outputDiv = document.querySelector("#banana-talk");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click", () => {
	var url = serverURL + "?" + "text=" + hoomanTalk.value;

    //calling server for processing
	fetch(url)
		.then((response) => response.json())
		.then((json) => {
			outputDiv.innerText = json.contents.translated;
		})
		.catch((error) => {
			console.log("Error occured! " + error);
			alert("Something went wrong! Please try again later.");
		});
});
