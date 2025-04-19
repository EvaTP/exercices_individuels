console.log(' 🐼 COUCOUUUUU ');

let nombreADeviner;

function didIWin(givenNumber, nombreADeviner) {
  let congrat = document.getElementById('dialogue');
  if (givenNumber === nombreADeviner) {
    
    congrat.innerText = 'Bravo ! 🏆 \n tu as gagné ! 🎉';

    // alert('Bravo ! Vous avez deviné le nombre');
    effacerChampSaisie();
    const bravo = document.getElementById('nombreAFaireDeviner');
    bravo.value = 'Bravo !!! 🏆';
    return true;
	 
      } else if (givenNumber < nombreADeviner) {
        
        // congrat.innerText = 'Plus grand 🤪';
        alert('Plus grand');
        return false;
      } else {
        // congrat.innerText = 'Plus petit 🤪';
        alert('Plus petit');
        return false;
      }
}

// Récupérer la valeur saisie avec un écouteur d'événements sur le bouton "Envoyer"
const boutonEnvoyer1 = document.getElementById('envoyer1');
boutonEnvoyer1.addEventListener('click', function() {
  nombreADeviner = parseInt(document.getElementById('nombreAFaireDeviner').value);
  console.log("🍍 nombre à deviner : " + nombreADeviner);

  let div1 = document.getElementById('J1');
  div1.style.display = 'none';

  let div2 = document.getElementById('J2');
  div2.style.display = 'block';
  
  gamePlay();
});


// Joueur 2
function gamePlay() {
  const givenNumber = parseInt(prompt('J2: Devine le juste prix ! '));
  const res = didIWin(givenNumber, nombreADeviner);

  if (res == false) {  // si J2 n'a pas deviné on relance la fonction
    gamePlay();
  }
}


// effacer le champ une fois le nombre deviné
function effacerChampSaisie() {
	console.log("Fonction effacerChampSaisie() appelée");
	const inputNombre = document.getElementById('nombreAFaireDeviner');
	console.log("Élément input récupéré :", inputNombre);
	return inputNombre.value = '';
  }

