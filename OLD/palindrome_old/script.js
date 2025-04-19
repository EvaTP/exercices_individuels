// Les palindromes sont des mots ou des suites de caractères qui se lisent dans les deux sens, comme les mots “radar” ou “kayak”. Le but de cet exercice est de détecter des dates palindromes, date que l’on peut donc lire dans les deux sens, sans prendre en compte le séparateur de date (/).

// Étape 1

// Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

// Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.

// isValidDate("03/04/2001") // true
// isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
// Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous assurer que le nombre de jours par mois est valide (ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)

// PROMPT
let input = prompt("Indique une date :");
const userInput = document.querySelector("input")
userInput.innerText = input;
// il faut hacher le string en caractères avec la méthode .split
const isValidate = (input)=>{
	console.log("😀 ", input)
	const splitInput = input.split("/")
	console.log("🐯 split input : ", splitInput)
}
isValidate(input);

// 
const checkCorrectDate = (c)=>{
	console.log("coucou")
	const inputSubstr = c[0].substr(0, 2)  // c est un tableau donc []
	console.log("😍 : ", inputSubstr);
	if(inputSubstr > 30){
		alert("entrez une date valide")
	}
	const monthInput = c[0].substr(2, 2)
	console.log("month input : ", monthInput)
	if(monthInput > 12){
		alert("Entrez un mois valide")
	}

	const yearInput = c[0].substr(4, 4)
	console.log("year input : ", yearInput)
	if(yearInput < 999 || yearInput > 9999){
		alert("Entrez une année valide")
	}

	// copier une variable puis fonction REVERSE
	// pour reverser on doit convertir notre tableau en string
	const copyC = c[0]
	copyC = copyC.split("")  // ici ("") veut dire splitter partout
	console.log(copyC)
	let reverseInput = copyC.reverse()
	console.log("reverseInput :", reverseInput)
	console.log("copyC :", copyC)
	console.log("c[0]", inputendroit)

	// vérifier si c'est un palindrome
	if(inputendroit === reverseInput){
		alert("c'est un palindrome !")
	}else{
		alert("raté !")
	}
}
checkCorrectDate();







