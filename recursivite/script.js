const dossierPrincipal = {
	nom: 'Ada',
	contenu: [{
		nom: 'Projets collectifs Ada',
		contenu: [{
			nom: 'Pico8',
			contenu: [{
			  nom: 'mariokart.p8'
			}]
		  },
		  {
			nom: 'Dataviz',
			contenu: [{
				nom: 'index.html'
			  },
			  {
				nom: 'script.js'
			  }
			]
		  }
		]
	  },
	  {nom: 'CV.pdf'},
	  {
		nom: 'Projets persos',
		contenu: [{
		  nom: 'Portfolio',
		  contenu: [{
			  nom: 'index.html'
			},
			{
			  nom: 'script.js'
			}
		  ]
		}]
	  },
	],
  }

// console.log(dossierPrincipal);
// fichier json à parcourir

// étape 1 : afficher le nom du dossier principal

//   function afficherDossier(dossierPrincipal){
// 	console.log("🗂️", dossierPrincipal.nom);
//   }
//   afficherDossier(dossierPrincipal);


// étape 2 : afficher dossier itératif et dossier recursif
// fonction itérative : parcourir le premier niveau du tableau.
// Indice : dans l’objet, un objet de type “dossier” a une propriété “contenu” alors qu’un fichier n’en a pas …

function afficherDossierIteratif(dossierPrincipal){
	console.log("🗂️", dossierPrincipal.nom);

	for(let i = 0; i < dossierPrincipal.contenu.length; i++);
		const element = dossierPrincipal.contenu[i];
		console.log(element.nom);
		// console.log(dossierPrincipal.contenu[i].nom);
		// console.log("🗂️",dossierPrincipal.nom);
}
afficherDossierIteratif(dossierPrincipal);





// étape 3 : Complète la fonction pour afficher les dossiers de troisième niveau
// (ex: les dossiers “Pico 8” et “Dataviz” sont des dossiers de troisième niveau car ils se trouvent dans un dossier “Projets collectifs, lui-même dans le dossier “Ada”).
	// (pour explorer les contenus des sous-dossiers également,
	// il faudrait utiliser une fonction récursive ou des boucles imbriquées).

