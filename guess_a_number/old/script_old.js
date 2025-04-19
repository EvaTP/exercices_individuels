console.log("coucou 🐶");

// Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur.
// Stocker sa réponse dans une variable de type adéquat nommée givenNumber.
// prompt est déjà une fonction 
const givenNumber = prompt("Tapez un chiffre");
console.log(givenNumber);



// ETAPE 2
function didIWin(givenNumber) {
  if (givenNumber < 22) {
    alert("Plus grand ➕ 😄");
	  console.log("Première réponse : " + givenNumber)
    return false;
  } else if (givenNumber > 22) {
    alert("Plus petit ➖ 😄");
	  console.log("Première réponse : " + givenNumber)
    return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre  " + givenNumber + "! 👏");
    console.log("Réponse correcte : " + givenNumber)
    return true;
  }
};
didIWin(givenNumber);

// Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.

// fonction EVA
function gamePlay(){
  // ici
  didIWin(givenNumber)
  if (didIWin(givenNumber) == true) {
    alert("Vous avez gagné, on arrête le jeu 🏆");
    } else {
    prompt("Saisissez un autre chiffre 🤔");
      }
      if(didIWin(givenNumber) == true){
      alert("Vous avez gagné, on arrête le jeu 🏆");
      console.log("Deuxième réponse : " + givenNumber)
    }else{
      prompt("Saisissez un autre chiffre 🤔 🤔");
      console.log("Deuxième réponse : " + givenNumber)
    };
}
gamePlay();


// function gamePlay(){
//   const win = didIWin(givenNumber); // Stocker le résultat de didIWin dans une variable

//   if (win) { // Utiliser la variable pour vérifier la condition
//     alert("Vous avez gagné, on arrête le jeu 🏆🏆");
//     console.log("🥦 Deuxième réponse : " + givenNumber);
//   } else {
//     prompt("Saisissez un autre chiffre 🤔 🤔 🤔 🤔");
//     console.log("🥕 Deuxième réponse : " + givenNumber);
//   }
// }
// gamePlay();



// function gamePlay(){
// 	do{
// 		prompt("Saississez un autre chiffre");
// 	}while(didIWin(givenNumber) == false)
// }

// ETAPE 3
// let trueNumber = 22;

// function didIWin(givenNumber){;
// 	if(givenNumber == trueNumber){
// 		return true;

// 	}else(givenNumber != trueNumber){
// 		return false;};
// };
// didIWin(givenNumber);
