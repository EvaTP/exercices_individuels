 // Récupèrer la valeur du formulaire
  let dateStr;

  function verifierDate() {
	dateStr = document.querySelector("#dateInput").value;
	const estValide = isValidDate(dateStr);
	console.log(estValide ? "La date est valide" : "La date est invalide");
	isPalindrome(dateStr);
  }

// Créer une autre fonction maxDaysInMonth pour vous assurer que le nombre de jours par mois est valide (ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)

function maxDaysInMonth(month, year) {
	if (month === 2) {  
	  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
	} else if ([4, 6, 9, 11].includes(month)) {
	  return 30;
	} else {
	  return 31;
	}
  }

// Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
// Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.

// VALIDATION DE LA DATE au format dd/mm/aaaa
  function isValidDate(dateStr) {
	if(dateStr.length == 10){
		const dateParts = dateStr.split('/');  
	if (dateParts.length !== 3) return false;
  
	const day = parseInt(dateParts[0], 10);
	const month = parseInt(dateParts[1], 10);
	const year = parseInt(dateParts[2], 10);

  	// Cette condition vérifie si l'année est dans la plage valide (1000 à 9999) et si le mois est dans la plage valide (1 à 12)
	if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
	if (year < 999 || year > 9999 || month < 1 || month > 12) return false;
  
	const maxDays = maxDaysInMonth(month, year);
	if (day < 1 || day > maxDays) return false;
	return true;
	}
  }

  // Créer une fonction isPalindrome
  function isPalindrome(dateStr) {
	const cleanDate = dateStr.replace(/\//g, '');
	const reversedDate = cleanDate.split('').reverse().join('');
	const estPalindrome = cleanDate === reversedDate;
    console.log(estPalindrome ? "C'est un palindrome" : "Ce n'est pas un palindrome");
  }

// Ajout d'un écouteur d'événement au bouton
document.querySelector("#verifierBtn").addEventListener("click", verifierDate);


