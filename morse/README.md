# OBJECTIFS
Manipuler des strings, transformer et manipuler des arrays, pratiquer les dictionnaires et les boucles.
# Enoncé
Cet exercice vise à créer un encodeur et décodeur de morse. Le morse est un alphabet codé qui remplace les caractères par des impulsions représentés par des points (.) ou des tirets (-) suivant si elles sont courtes ou longues. Contraintes: Langage JS

1. Étape 1
Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.

Tester la fonction en lui donnant une chaine de caractères “Hello, world”, et assurez-vous qu’elle renvoie bien ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

# SOLUTION ETAPE 1
# utiliser la méthode split()
https://flexiple.com/javascript/string-to-array-javascript
# récupérer le tableau en mots => METTRE UN SEPARATEUR (",")
let str1 = 'JavaScript,Python,C++,PHP';

const split_string = str1.split(",");
console.log(split_string)

CONSOLE Output = ["JavaScript", "Python", "C++", "PHP"]
(4) ['JavaScript', 'Python', 'C++', 'PHP']

# récupérer le tableau en lettres => ne PAS METTRE DE SEPARATEUR ("")
The delimiter (comma) is left empty while trying to convert a string to array in JavaScript.

let str1 = 'Freelance Developers';

const split_string = str1.split("");  (les guillemets sont collés)
console.log(split_string)

CONSOLE Output = ["F", "r", "e", "e", "l", "a", "n", "c", "e", " ", "D", "e", "v", "e", "l", "o", "e", "p", "r", "s"]


# BONUS
Next, let's take a look at an example using the limit parameter.

let str1 = "Hire the top 1% freelance developers";

const split_string = str1.split(" ",4);
console.log(split_string)

//Output = ["Hire", "the", "top", "1%"]
The values after the limit were not split. 

# --------------------------------------------------------------------


2. Étape 2
À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.

Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.

Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-

# SOLUTION ETAPE 2
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_objects

Un objet JavaScript possède plusieurs propriétés qui lui sont associées. Une propriété peut être vue comme une variable attachée à l'objet. Les propriétés d'un objet sont des variables tout ce qu'il y a de plus classiques, exception faite qu'elles sont attachées à des objets. Les propriétés d'un objet représentent ses caractéristiques et on peut y accéder avec une notation utilisant le point « . », de la façon suivante :
nomObjet.nomPropriete;

let maVoiture = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

Les objets sont parfois appelés « tableaux associatifs ». Cela peut se comprendre, car chaque propriété est associée avec une chaîne de caractères qui permet d'y accéder. Ainsi, par exemple, on peut accéder aux propriétés de l'objet maVoiture de la façon suivante :
maVoiture["fabricant"] = "Ford";
maVoiture["modèle"] = "Mustang";
maVoiture["année"] = 1969;

Les objets JavaScript sont des collections de paires clé-valeur.
On peut accéder à la valeur associée à une clé en utilisant la clé entre crochets (objet['clé']).

POUR RECUPERER LA VALEUR DE LA CLE D'UN OBJET on utilise la notation entre crochets ou la notation pointée.

# Pourquoi latinToMorse.A ne fonctionne pas

Dans votre code, latinToMorse est un objet où les clés sont des chaînes de caractères (strings). Bien que la clé soit la lettre "A", elle est stockée comme une chaîne de caractères.

La notation par points (latinToMorse.A) fonctionne uniquement lorsque A est un identifiant JavaScript valide, c'est-à-dire un nom de variable.
Dans ce cas, A est une chaîne de caractères, donc vous devez utiliser la notation par crochets (latinToMorse["A"]) ou (latinToMorse[maVariableQuiContientA]).


3. Étape 3
Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
Attention: la table de correspondance ne contient que des caractères majuscules.

# SOLUTION ETAPE 3

# Chainage de méthodes (method chaining)  text.toUpperCase().split("");
En JavaScript, vous pouvez « coller » (chaîner) plusieurs méthodes ensemble, à condition que chaque méthode renvoie une valeur qui peut être utilisée par la méthode suivante. 

Comment ça marche
Dans l'expression text.toUpperCase().split(""), voici ce qui se passe :

text.toUpperCase() :
Cette méthode est appelée sur la chaîne text.
Elle convertit la chaîne en majuscules et renvoie une nouvelle chaîne en majuscules.

.split("") :
Cette méthode est immédiatement appelée sur la nouvelle chaîne renvoyée par toUpperCase().
Elle divise la chaîne en un tableau de caractères, en utilisant une chaîne vide ("") comme séparateur.
Elle renvoie un tableau de caractères.
let caracteres = ... :

Le tableau de caractères renvoyé par split("") est ensuite assigné à la variable caracteres.

Pourquoi c'est utile
- Code concis : Le chaînage de méthodes permet d'écrire du code plus court et plus lisible.
- Moins de variables intermédiaires : Vous n'avez pas besoin de créer des variables temporaires pour stocker les résultats intermédiaires.
- Meilleure lisibilité : Dans certains cas, le chaînage de méthodes peut rendre le code plus facile à comprendre, car il montre clairement la séquence des opérations.

Exemples supplémentaires
Voici d'autres exemples de chaînage de méthodes :


// Supprimer les espaces et convertir en minuscules
let phrase = "  Hello World  ";
let resultat = phrase.trim().toLowerCase(); // resultat = "hello world"

// Remplacer et diviser
let data = "1,2,3,4,5";
let tableau = data.replace(",", ";").split(";"); // tableau = ["1", "2", "3", "4", "5"]

Conditions pour le chaînage
- Méthodes qui renvoient des valeurs : Le chaînage de méthodes ne fonctionne que si chaque méthode renvoie une valeur qui peut être utilisée par la méthode suivante.
- Types compatibles : Les types des valeurs renvoyées doivent être compatibles avec les méthodes suivantes.

# boucle FOR
Boucle for :
Nous parcourons chaque caractère du tableau caracteres.
- if (latinToMorse[caracteres[i]]) :
Nous vérifions si le caractère existe comme clé dans latinToMorse.
Si oui, nous ajoutons l'équivalent morse à la chaîne morse, suivi d'un espace.
- else :
Si le caractère n'est pas trouvé dans latinToMorse, il s'agit probablement d'un espace, d'un signe de ponctuation ou d'un autre caractère non alphabétique.
Dans ce cas, nous ajoutons simplement le caractère original à la chaîne morse, suivi d'un espace.
- morse.trim() :
Nous utilisons trim() pour supprimer l'espace final de la chaîne morse.
Retourner le résultat :
Nous retournons la chaine de caractères morse.



4. Étape 4
Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).

Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

5. Étape 5
Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.


# SOLUTION ETAPE 5

# textContent vs innerText
textContent renvoie tout le contenu textuel d'un élément, y compris le texte qui est caché par le CSS. Est plus rapide que innerText car il n'a pas besoin de calculer le style CSS
innerText renvoie uniquement le texte qui est visible à l'écran, en tenant compte du style CSS.



# méthode join()
join() est une méthode du prototype Array.prototype, ce qui signifie qu'elle est héritée par tous les tableaux. Elle n'est pas définie sur Object.prototype.

Comment obtenir un comportement similaire avec les objets

Si vous souhaitez concaténer les valeurs d'un objet en une chaîne, vous devez d'abord extraire les valeurs de l'objet dans un tableau, puis utiliser join() sur ce tableau. Voici comment :

Extraire les valeurs de l'objet :
Vous pouvez utiliser Object.values() pour obtenir un tableau contenant toutes les valeurs de l'objet.
Utiliser join() sur le tableau :

Une fois que vous avez un tableau de valeurs, vous pouvez utiliser join() pour les concaténer en une chaîne.
const monObjet = {
    clé1: "valeur1",
    clé2: "valeur2",
    clé3: "valeur3"
};

const valeurs = Object.values(monObjet); // ["valeur1", "valeur2", "valeur3"]
const chaine = valeurs.join(", "); // "valeur1, valeur2, valeur3"

console.log(chaine);

Chaque type de données en JavaScript a un prototype associé qui fournit des fonctionnalités spécifiques.
La chaîne de prototypes permet aux objets d'hériter des propriétés et des méthodes de leurs prototypes.

# PROTOTYPES
Function.prototype (méthodes : call(), apply(), bind()...)
Array.prototype (méthodes : join()....)
Object.prototype
String.prototype (méthodes : split(), slice(), toUpperCase(), toLowerCase(), trim()...)
Number.prototype (méthodes : toFixed(), toPrecision(), toString()...)
Boolean.prototype
Date.prototype

voir exercice W3C : 
https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1


. If you type the object's name followed by a period into the console, like myObject., then the console will pop up a list of all the properties available to this object.

Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

# conseils Vi
separation entre lettres : espace
separation entre mots : slash /

utiliser la méthode split() pour couper les mots et les lettres
utiliser une fonction qui permet de traduire

je split ma phrase en mots et les mots en lettres

function morseLetterToLatinLetter(morseLetter){
	return latinLetter;
}

je concatène les lettres dans un mot