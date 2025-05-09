function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
	// word : le mot que l'utilisateur a entré. Base : le mot à deviner
	// initialisation des tableaux pour stocker les lettres devinées
	let wellPlaced = [];  // lettres correctes et à la bonne position
    let notInWord = [];  // lettres absentes du mot secret
    let missplaced = [];  // présentes dans le mot mais à une mauvaise position

	// on convertit les deux mots en minuscules avant de les comparer
	const lowerWord = word.toLowerCase();
	const lowerBase = base.toLowerCase();

	// on compare les mots. meme si mot deviné, on renvoie un objet pour que guess() puisse accèder aux propriétés
	if (lowerWord === lowerBase) {
		return { wellPlaced: lowerWord.split(''), missplaced: [], notInWord: [] }; // Renvoie un objet même en cas de victoire
  } else {                 // si le mot n'est pas correct on analyse les lettres
	let arrayBase = lowerBase.split('');  // on crée des tableaux avec les lettres du mot base et word
	let arrayWord = lowerWord.split('');
	let baseCounts = {};  // baseCounts et wordCounts sont des objets qui vont servir à compter les occurrences de chaque lettre dans les 2 mots
	let wordCounts = {};
	
	// Compter les occurrences des lettres dans base
	for (const char of arrayBase) {
		baseCounts[char] = (baseCounts[char] || 0) + 1;
	}
	// Cette boucle for...of parcourt chaque lettre (char) du tableau arrayBase.
	// Pour chaque lettre, on met à jour son compte dans l'objet baseCounts.
	// (baseCounts[char] || 0) + 1 signifie : si la lettre char existe déjà comme clé dans baseCounts, on prend sa valeur actuelle et on l'incrémente de 1.
	// Sinon (si c'est la première fois qu'on voit cette lettre), on utilise 0 comme valeur par défaut et on l'incrémente à 1.

	// Identifier les lettres bien placées
	for (let i = 0; i < arrayBase.length; i++) {
	if (arrayBase[i] === arrayWord[i]) {
		wellPlaced.push(arrayWord[i]);
		wordCounts[arrayWord[i]] = (wordCounts[arrayWord[i]] || 0) + 1;
		}
	}
	// Cette boucle for parcourt les lettres des deux mots en utilisant leur index (i).
	// Si la lettre à la même position dans arrayBase et arrayWord est identique, cela signifie que la lettre est bien placée.
	// On l'ajoute au tableau wellPlaced et on incrémente son compte dans wordCounts.

	// Identifier les lettres mal placées et celles qui ne sont pas dans le mot
	for (let i = 0; i < arrayWord.length; i++) {
	if (arrayBase.includes(arrayWord[i])) {
		if (arrayBase[i] !== arrayWord[i]) { // Si pas bien placé
			wordCounts[arrayWord[i]] = (wordCounts[arrayWord[i]] || 0) + 1;
			if (wordCounts[arrayWord[i]] <= baseCounts[arrayWord[i]]) {
				missplaced.push(arrayWord[i]);
			}
		}
	} else {
		notInWord.push(arrayWord[i]);
		}
	}
	// Cette boucle parcourt chaque lettre du mot entré (tableau arrayWord).
	// if (arrayBase.includes(arrayWord[i])): On vérifie si la lettre actuelle du mot entré (arrayWord[i]) existe dans le mot secret (arrayBase).
	// if (arrayBase[i] !== arrayWord[i]): Si la lettre est présente dans le mot secret mais n'est pas à la même position que dans le mot entré, elle est potentiellement mal placée.
	// wordCounts[arrayWord[i]] = (wordCounts[arrayWord[i]] || 0) + 1;: On incrémente le compteur de cette lettre dans wordCounts.
	// if (wordCounts[arrayWord[i]] <= baseCounts[arrayWord[i]]): On vérifie si le nombre d'occurrences de cette lettre dans le mot entré n'excède pas son nombre d'occurrences dans le mot secret. Si c'est le cas, cela signifie que cette occurrence de la lettre est effectivement mal placée, et on l'ajoute au tableau missplaced.
	// Cette vérification est importante pour ne pas marquer comme "mal placées" des lettres qui apparaissent plus de fois dans la proposition que dans le mot secret.
	// else { notInWord.push(arrayWord[i]); }: Si la lettre du mot entré n'est pas du tout présente dans le mot secret, on l'ajoute au tableau notInWord.

	// Suppression des doublons dans les tableaux missplaced et notInWord (OPTIONNEL)
	missplaced = [...new Set(missplaced)];
	notInWord = [...new Set(notInWord)];
	// On utilise l'objet Set pour créer une collection de valeurs uniques à partir des tableaux missplaced et notInWord, puis on utilise l'opérateur spread (...)
	// pour reconvertir le Set en un nouveau tableau sans doublons.
	// C'est utile pour ne pas afficher la même lettre plusieurs fois dans les indications "Mal placé" ou "Pas dans le mot".

	return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord };
	}
	// La fonction renvoie un objet contenant les trois tableaux : wellPlaced, missplaced, et notInWord.
	// Ces informations seront utilisées par la fonction guess() pour afficher les indices à l'utilisateur.
}


function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value  // on récupère le mot saisi
	let result = tryWord(word, base)  // on appelle la fonction tryWord, le résultat est stocké dans la variable result
  	document.getElementById("word").value = ''  // on efface le champ de saisie
 	document.getElementById("try").innerText = word  // on insère le mot saisi dans le champ try pour le visualiser
	document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
	document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(', ')
	document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')
	// result.wellPlaced est un tableau
	// la méthode "array" join(',') transforme le tableau wellPlaced [] en chaine.
	// L'argument passé (virgule) est le séparateur qui sera inséré entre chaque élément du tableau dans la chaine resultante
	// console.log("test fonction guess");
		if(word.toLowerCase() === base.toLowerCase()){
			document.getElementById("win").innerText = 'Vous avez gagné ! 🎉 🎈'
		}else{
			document.getElementById("win").innerText = '';  // S'assurer que le message de victoire disparaisse si ce n'est pas gagné
		}
}

// guess() est appelé au click du bouton pour gérer la soumission du mot proposé