let userName = prompt("Quel est ton prénom ?");
/*
1. Crée une variable message dans lequel on va stocker le message : Bonjour !
2. Affiche le message dans ta console. Tu devrais avoir le message “Bonjour !” qui apparaît.
3. Crée une seconde variable firstname dans lequel on va stocker un prénom. Exemple : Beyonce
4. Utilise la variable firstname dans message pour obtenir l’affichage du message : Bonjour Beyonce !
Attention, ici il s’agit bien de modifier la variable message et non le console.log()
*/

//let message = "Bonjour ";
//console.log(message);

//let firstName = "Beyoncé";
//console.log(message + firstName + " !");

// ou bien :
// let message = "Bonjour" + firstName + " !";
// méthode plus moderne :
// mettre une fonction dans une variable (encapsulée dans une variable)
const sayHello = (firstName) =>{
	let firstName = "Beyoncé"
	let message = "Bonjour " + firstName + "!";
	console.log(message);
}
sayHello(toto);
/*
1. Encapsule ton code précédent dans une fonction nommée sayHello()
2. Appelle la fonction sayHello() dans ton code pour t’assurer que tout continue de fonctionner.
Tu devrais toujours avoir le message Bonjour Beyonce ! qui s’affiche dans la console.
3. Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
4. Exécute ton code. Tu devrais obtenir dans ta console Bonjour undefined ! 🤔
5. Corrige l’appel de fonction pour retrouver de nouveau le message Bonjour Beyonce !
*/

// function sayHello(message, firstName){
// 	console.log(message + firstName + " !")
// }

// sayHello(message, firstName);

/*
1. Ajoute un second paramètre hour à la fonction sayHello()
2. Ajoute une condition dans ta fonction pour que lorsque hour est supérieur ou égal à 18H, on dise Bonsoir plutôt que Bonjour dans le message.
*/

let hour = 17;
function sayHello(message, firstName, hour){
	if (hour < 18){
		console.log("🌞 " + message + firstName + " !");
	}else{
		console.log(" 🌜 Bonsoir " + firstName + " !");
	};
};

sayHello(message, firstName, hour);


document.querySelector('h1').innerText = message + userName;

