function tryWord(word, base) {

	let wellPlaced = [];  
    let notInWord = [];  
    let missplaced = [];  

	// TODO: fix jeu sensible à la casse :
	const lowerWord = word.toLowerCase();
	const lowerBase = base.toLowerCase();

	if (lowerWord === lowerBase) {
		return { wellPlaced: lowerWord.split(''), missplaced: [], notInWord: [] };
  } else {
	let arrayBase = lowerBase.split('');
	let arrayWord = lowerWord.split('');
	let baseCounts = {};
	let wordCounts = {};
	
	for (const char of arrayBase) {
		baseCounts[char] = (baseCounts[char] || 0) + 1;
	}
	
	for (let i = 0; i < arrayBase.length; i++) {
	if (arrayBase[i] === arrayWord[i]) {
		wellPlaced.push(arrayWord[i]);
		wordCounts[arrayWord[i]] = (wordCounts[arrayWord[i]] || 0) + 1;
		}
	}
	for (let i = 0; i < arrayWord.length; i++) {
	if (arrayBase.includes(arrayWord[i])) {
		if (arrayBase[i] !== arrayWord[i]) {
			wordCounts[arrayWord[i]] = (wordCounts[arrayWord[i]] || 0) + 1;
			if (wordCounts[arrayWord[i]] <= baseCounts[arrayWord[i]]) {
				missplaced.push(arrayWord[i]);
			}
		}
	} else {
		notInWord.push(arrayWord[i]);
		}
	}
	missplaced = [...new Set(missplaced)];
	notInWord = [...new Set(notInWord)];

	return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord };
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
		if(word.toLowerCase() === base.toLowerCase()){
			document.getElementById("win").innerText = 'Vous avez gagné ! 🎉 🎈'
		}else{
			document.getElementById("win").innerText = '';
		}
}
