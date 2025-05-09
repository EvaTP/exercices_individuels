function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
	if (word === base) {
		return true
  } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    

		for (let i = 0; i < arrayBase.length-1; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i]);
		}	else {
			missplaced.push(arrayWord[i])
		}
    }
//Cette boucle ne parcourt pas le dernier caractère du mot base. Elle s'arrête à l'avant-dernier index (arrayBase.length - 1).
//Correction : Il faut aller jusqu'à la longueur complète du mot : arrayBase.length

    for (const char of arrayWord) {
    	if (arrayBase.includes(char) === false) {
      	notInWord.push(char)
      }
    }
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}



function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  	document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
	document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
	document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(', ')
	document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')
	// ERREUR JOIN : on essaie d'appeler la méthode .join() sur une variable qui a la valeur undefined
	// result.wellPlaced est undefined au moment où cette ligne de code est exécutée. La même erreur pourrait potentiellement se produire pour result.missplaced et result.notInWord sur les lignes suivantes.
	// RAISON : la foncrion tryWord ne renvoie rien, seulement TRUE si les mots correspondent. result.wellPlaced, missPlaced etc
	// ne sont pas pris en compte dans tryWord
	// CORRECTION : s'assurer que tryWord renvoie toujours un objet avec les propriétés wellPlaced, missplaced et notInWord, même lorsque le mot est correct = modifier tryWord pour toujours renvoyer un objet.
		if(word === base){
			document.getElementById("win").innerText = 'Vous avez gagné'
		}
	// if (result.wellPlaced.length === base.length) {
	// 	document.getElementById("win").innerText = 'Vous avez gagné'
	// 	}
}