// Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.

// Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ.

let nbrTotalAllumettes = 50;
let nbrBriquets = 100
let reponseJoueur;


// let reponseJoueur = prompt("entrez un nombre d'allumettes à retirer (entre 1 et 6) :")
// console.log(reponseJoueur);
 
// ca marche
// function jeuAllumettes(nbrTotalAllumettes){
// 	reponseJoueur = prompt("entrez un nombre d'allumettes à retirer de la pile (entre 1 et 6) :","");
// 	console.log("😀 ", reponseJoueur);
// 	if(reponseJoueur > 0 && reponseJoueur <= 5){
// 		// return reponseJoueur.value;
// 	}else{
// 		prompt("entrez un nombre entre 1 et 5")
// 		console.log("😅😅", reponseJoueur);
// 	}
// }

function soustraireAllumettes(nbrRestantAllumettes, choixJoueur){
	return nbrRestantAllumettes - choixJoueur
}

// HTML
let divcompteurAllumettes = document.querySelector("#compteur");
divcompteurAllumettes.innerHTML = "Nombre d'allumettes de départ : " + nbrTotalAllumettes;
divcompteurAllumettes.style.fontSize = "30px";
divcompteurAllumettes.style.color = "red";

let divreponsejoueur = document.querySelector("#playerInput");
//divreponsejoueur.innerHTML = "Vous avez enlevé " + reponseJoueur + " allumette(s)";

let divRestantAllumettes = document.querySelector("#nbrRestant")
// divRestantAllumettes.innerHTML = "il restent : " + nbrRestantAllumettes + "allumettes."


// let messageErreur = "Nombre erroné. ";

// fonction globale
function jeuAllumettes(nbrTotalAllumettes, reponseJoueur){

		while (nbrTotalAllumettes > 0) {
			let reponseJoueur = prompt("Entrez un nombre d'allumettes à retirer de la pile (entre 1 et 6) : ");
			console.log("😀", reponseJoueur);
			if (reponseJoueur > 0 && reponseJoueur <= 6) {
				if(reponseJoueur == 1){
					alert("Vous avez enlevé : " + reponseJoueur + " allumette");
				}else{
					alert("Vous avez enlevé : " + reponseJoueur + " allumettes");
				}
			divreponsejoueur.innerHTML = "Vous avez enlevé " + reponseJoueur + " allumette(s)";
			// Soustraire le nombre saisi de la pile d'allumettes
			nbrTotalAllumettes = soustraireAllumettes(nbrTotalAllumettes, reponseJoueur);
			divRestantAllumettes.innerHTML = "il restent : " + nbrTotalAllumettes + " allumettes."
			divRestantAllumettes.style.color = "green";
			divRestantAllumettes.style.fontSize = "25px"
			console.log("nombre restant d'allumettes :", nbrTotalAllumettes)
	
			break;
			}else {
				alert("Nombre erroné. Entrez un nombre entre 1 et 6");
				console.log("🦊 vous avez enlevé : ", reponseJoueur);
			  }
		}
	}

	jeuAllumettes(nbrTotalAllumettes);
	
	
			
		// 	console.log("😀 ", reponseJoueur);
		// 	if(reponseJoueur > 0 && reponseJoueur <= 5){
		// 		// return reponseJoueur.value;
		// 	}else{
		// 		prompt("entrez un nombre entre 1 et 5")
		// 		console.log("😅😅", reponseJoueur);
		// 	}
		// }



// function jeuAllumettes(nbrTotalAllumettes){
// 	reponseJoueur = prompt("entrez un nombre d'allumettes à retirer de la pile (entre 1 et 6) :","");
// 	console.log("😀 ", reponseJoueur);
// 	do{
// 		prompt("entrez un nombre entre 1 et 5")
// 		console.log("😅😅", reponseJoueur);
// 	}
// 	while (reponseJoueur < 0 || reponseJoueur >= 5)
// 	}





// function testnombre(chiffre)
// { return chiffre >0 ? "positif" : chiffre<0 ?"negatif" : "null";}
//  console.log(testnombre(0))