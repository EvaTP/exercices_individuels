 // ANIMATION SUR LES BUTTONS ON CLICK
const listNumbers = document.querySelectorAll(".btn-digit");
const resultDiv = document.querySelector("#result");
const buttonAC = document.querySelector('input[value="AC"]');



// CREER UNE ANIMATION QUAND UNE TOUCHE EST PRESSEE
    function animationOnButtons(button) {
        button.style.opacity = 0.6;

        setTimeout(function () {
            button.style.opacity = 1;
        }, 1000)
    }

function showValueOnScreen(valeur) {
    if (resultDiv.innerText === "0") {
        resultDiv.innerText = valeur;
    } else {
        resultDiv.innerText += valeur;
    }
}
 
listNumbers.forEach(button =>{
	button.addEventListener("click", function(){
		animationOnButtons(this);
		showValueOnScreen(this.value);
	});
});

buttonAC.addEventListener("click", () => {
    resultDiv.innerText = "0";
});



   