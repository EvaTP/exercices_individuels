console.log('COUCOUUUUU 🐶');

const nombreADeviner = parseInt(prompt('🐱 Joueur 1: Donne un nombre a faire deviner'));

function didIWin(givenNumber, nombreADeviner) {
  if (givenNumber === nombreADeviner) {
    alert('Bravo ! Vous avez deviné le nombre');
    return true;
  } else if (givenNumber < nombreADeviner) {
    alert('Plus grand');
    return false;
  } else {
    alert('Plus petit');
    return false;
  }
}

function gamePlay() {
  const givenNumber = parseInt(prompt('🐸 Joueur 2: Devine le juste prix ! 😬'));
  const res = didIWin(givenNumber, nombreADeviner);

  if (res == false) {
    gamePlay();
  }
}

gamePlay();