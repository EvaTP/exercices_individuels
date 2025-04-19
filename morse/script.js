// DICTIONNAIRES
// ANNEXE 1 : LATIN TO MORSE
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
  }

// HTML
let paragrapheTexte = document.querySelector("#demo");
// paragrapheTexte.innerHTML = myArray; 

// ETAPE 1
// Ecrire une fonction getLatinCharacterList.
// Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.

// Tester la fonction en lui donnant une chaine de caractères
// “Hello, world”, et assurez-vous qu’elle renvoie bien
// ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

let myArray;
let texte = "Hello, world";


function getLatinCharacterList(texte){
	myArray = texte.split("");
	console.log(myArray);
}
getLatinCharacterList(texte);

// ETAPE 2
// À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.
// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
// Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-


//let caractere;  pas besoin de déclarer la variable, le fait de la mettre en paramètre de la fonction la déclare

function translateLatinCharacter(caractere){
	return latinToMorse[caractere.toUpperCase()]; // Convertir en majuscules pour gérer les minuscules
	console.log(latinToMorse[caractere]);
}

translateLatinCharacter("A"); // Affiche ".-"
// l'appel de la fonction déclenche réellement l'exécution du code à l'intérieur de la fonction

// la méthode : console.log(latinToMorse.A)  ne fonctionne pas car A est une chaine de caracteres


// Elements HTML pour étape 5
const inputLtoM = document.querySelector("#inputLatinToMorse");
const submitButtonLtoM = document.querySelector("#buttonSubmitLatin");
const resultLtoM = document.querySelector("#outputLatinToMorse");

const inputMtoL = document.querySelector("#inputMorsetoLatin");
const submitButtonMtoL = document.querySelector("#buttonSubmitMorse");
const resultMtoL = document.querySelector("#outputMorseToLatin");




// ETAPE 3
// Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
// Attention: la table de correspondance ne contient que des caractères majuscules.

function encode(text){
	let caracteres = text.toUpperCase().split(""); // Convertir en majuscules et diviser
    let morse = "";  // déclaration de variable qui initialise une chaîne de caractères vide nommée morse. Dans le contexte de la fonction "encode", cette variable sert d'accumulateur pour construire la chaîne de caractères Morse résultante. Morse a une portée de bloc (accessible seulement dans la fonction)

	// Une boucle est nécessaire car je dois parcourir tout le dictionnaire et accèder à chaque caractère pour trouver leur équivalent en morse et encoder des mots
	for (let i = 0; i < caracteres.length; i++) {
        if (latinToMorse[caracteres[i]]) {  // on vérifie si un caractère a une traduction Morse
            morse += latinToMorse[caracteres[i]] + " "; // Ajouter l'équivalent morse et un espace
        } else {
            morse += caracteres[i] + " "; // Conserver les caractères non trouvés (espaces, ponctuation, etc.)
        }
    }
	return morse.trim(); // Supprimer l'espace final
}
console.log(encode("Bonjour les geeks"));



// ETAPE 4
// Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

// prend un code Morse en entrée et renvoie le caractère latin correspondant 
function translateMorseCharacter(caractereMorse){
	console.log(morseToLatin[caractereMorse]);
	return morseToLatin[caractereMorse];
}
console.log(translateMorseCharacter(".-")); // Affiche "A"


// prend une chaîne Morse en entrée et renvoie un tableau de codes Morse individuels, en tenant compte des espaces et des barres obliques
function getMorseCharacterList(morseText){
    return morseText.split(" ");
}
console.log(getMorseCharacterList(".- -... -.-.")); // Affiche [".-", "-...", "-.-."]


// prend une chaîne Morse en entrée et renvoie la chaîne de caractères latins correspondante
function decode(morseText){
	let morseWords = morseText.split("/"); // Sépare les mots avec un slash comme séparateur
    let decodedWords = [];
	
	for (let i = 0; i < morseWords.length; i++) {
        let morseChars = getMorseCharacterList(morseWords[i]); // Obtient les caractères Morse
        let decodedChars = "";

        for (let j = 0; j < morseChars.length; j++) {
            decodedChars += translateMorseCharacter(morseChars[j]) || morseChars[j]; // Traduit ou conserve (Si translateMorseCharacter ne trouve pas de correspondance, conserve le code Morse original)
        }
        decodedWords.push(decodedChars);
    }
    return decodedWords.join(" "); // Reconstitue la phrase
}

console.log(decode(".- -... -.-.")); // Affiche "ABC"
console.log(decode(".- -... -.-./-- --- .-. ... .")); // Affiche "ABC MORSE"
console.log(decode("./...- /.-"))  // affiche "Eva"


// Étape 5

// Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.

// Gestion des événements des boutons
submitButtonLtoM.addEventListener("click", function() {
    const inputText = inputLtoM.value;
    const encodedText = encode(inputText);
    resultLtoM.textContent = encodedText;
});

submitButtonMtoL.addEventListener("click", function() {
    const inputMorse = inputMtoL.value;
    const decodedText = decode(inputMorse);
    resultMtoL.textContent = decodedText;
});

