console.log(' 🐼 COUCOUUUUU ');

let nombreADeviner;
let dialogue = document.getElementById('dialogue');
let inputJ2 = document.getElementById('inputJ2');

// Joueur.se 1
// Récupérer la valeur "Nombre à faire deviner" saisie avec un écouteur d'événements
// sur le bouton "Envoyer"
const boutonEnvoyer1 = document.getElementById('envoyer1');
boutonEnvoyer1.addEventListener('click', function() {
  nombreADeviner = parseInt(document.getElementById('nombreAFaireDeviner').value);
  console.log("🍍 nombre à deviner : " + nombreADeviner);

  let div1 = document.getElementById('J1');
  div1.style.display = 'none';

  let div2 = document.getElementById('J2');
  div2.style.display = 'block';
});


// Joueur.se 2
function didIWin(givenNumber, nombreADeviner) {

  if (givenNumber === nombreADeviner) {
    
    dialogue.innerText = 'Bravo ! 🏆 \n tu as gagné ! 🎉';

    // on efface le champ de saisie une fois le nombre deviné :
    effacerChampSaisie();
    const bravo = document.getElementById('inputJ2');
    bravo.value = 'Bravo !!! 🏆';
    return true;
	 
    } else if (givenNumber < nombreADeviner) {
      
      dialogue.innerText = 'Plus grand 🤪';
      // alert('Plus grand');
      return false;
    } else {
      // congrat.innerText = 'Plus petit 🤪';
      //alert('Plus petit');
      dialogue.innerText = 'Plus petit 😝';
      return false;
    };
};


const boutonEnvoyer2 = document.getElementById('envoyer2');
boutonEnvoyer2.addEventListener('click', function() {
  const givenNumber = parseInt(inputJ2.value);
  const res = didIWin(givenNumber, nombreADeviner);
});


// effacer le champ une fois le nombre deviné
function effacerChampSaisie() {
	console.log("Fonction effacerChampSaisie() appelée");
	const inputNombre = document.getElementById('nombreAFaireDeviner');
	console.log("Élément input récupéré :", inputNombre);
	return inputNombre.value = '';
  }


// Bouton "reset"
let reset = document.getElementById('reset');
reset.addEventListener('click', function(){
	return inputJ2.value = '';
});

