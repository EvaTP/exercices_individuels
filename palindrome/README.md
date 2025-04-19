1. Enoncé
Les palindromes sont des mots ou des suites de caractères qui se lisent dans les deux sens, comme les mots “radar” ou “kayak”. Le but de cet exercice est de détecter des dates palindromes, date que l’on peut donc lire dans les deux sens, sans prendre en compte le séparateur de date (/).

Contraintes: L’exercice se fera en JS

# Étape 1
Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.

isValidDate("03/04/2001") // true
isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous assurer que le nombre de jours par mois est valide (ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)

# Étape 2
Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false.

Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.

isPalindrome("11/02/2011") // true
isPalindrome("03/04/2001") // false

# Étape 3
Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le x en paramètre.

getNextPalindromes(8)
22/02/2022
03/02/2030
13/02/2031
23/02/2032
04/02/2040
14/02/2041
24/02/2042
05/02/2050

# Étape 4
Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome. Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au format date (comme s’assurer que la date est valide) et qui appellera isPalindrome.


# fonction parseInt()  à 2 arguments
Analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
La fonction parseInt() convertit le premier argument en une chaîne, l'analyse et renvoie un entier ou NaN. Si la valeur renvoyée n'est pas NaN, ce sera l'entier représentant le nombre contenu dans la chaîne dans la base donnée. Une base 10 est utilisée pour la base décimale, 8 pour la base octale, 16 pour la base hexadécimale.

console.log(parseInt("123", 10));  // renvoie 123 calculé sur la base décimale


# La méthode substr()  
retourne la partie d'une chaîne de caractères comprise entre l'indice de départ et un certain nombre de caractères après celui-ci.


const str = "Mozilla";

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"

# Différence entre substring() et substr()
Il existe une légère différence entre les méthodes substring() et substr(). Les deux ne doivent pas être confondues.

Les arguments de la méthode substring() représentent les indices de début et de fin sur la chaîne. Pour substr(), les arguments représentent l'indice de début et le nombre de caractères à utiliser pour la chaîne résultante.

La méthode substring() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.
substring extrait des caractères de la chaîne courante à partir de indiceA jusqu'à indiceB (non compris).


# fonction reverse()
permet d'inverser l'ordre d'un tableau

const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// Expected output: "array1:" Array ["three", "two", "one"]


var monArray = ["un", "deux", "trois"];
monArray.reverse();
console.log(monArray); // ["trois", "deux", "un"]


Pour inverser une chaîne de caractères, vous devez la convertir en tableau, utiliser reverse(), puis la reconvertir en chaîne.
let tableau = [1, 2, 3, 4, 5];
tableau.reverse(); // tableau devient [5, 4, 3, 2, 1]

let chaine = "bonjour";
let chaineInversee = chaine.split('').reverse().join(''); // chaineInversee devient "ruojnob"


# Pourquoi il ne faut pas appeler les fonctions isPalindrome(), isValidDate(), etc ?

Si vous appelez les fonctions isPalindrome(), isValidDate(), etc., directement dans votre code, elles seront exécutées immédiatement lors du chargement de la page. À ce moment-là, les données nécessaires à ces fonctions (par exemple, la date saisie par l'utilisateur) ne sont pas encore disponibles.
Les fonctions isPalindrome() et isValidDate() sont conçues pour traiter des données dynamiques, c'est-à-dire des données qui peuvent changer au fil du temps.
Par exemple, la date saisie par l'utilisateur dans le champ de formulaire peut changer à tout moment.
Il est donc logique d'appeler ces fonctions uniquement lorsque les données sont disponibles et que l'utilisateur a effectué une action spécifique (par exemple, cliquer sur un bouton).
Les fonctions isPalindrome(), etc., doivent être appelées uniquement lorsque les données nécessaires sont disponibles et que l'utilisateur a effectué une action spécifique.
Les écouteurs d'événements nous permettent d'attacher des fonctions à ces actions.
Cela garantit que les fonctions sont exécutées au bon moment et avec les bonnes données.


