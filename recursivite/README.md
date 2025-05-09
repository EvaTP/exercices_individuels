Dans la fonction afficherDossierRecursif (et dans la version itérative précédente), on utilise un tableau pour représenter le contenu d'un dossier car un dossier peut contenir plusieurs éléments : d'autres dossiers ou des fichiers.

Dans notre structure JavaScript :

Le dossierPrincipal (nommé 'Ada') a une propriété contenu.
La valeur de cette propriété contenu est un tableau ([]).
Chaque élément de ce tableau représente soit un fichier (comme { nom: 'CV.pdf' }), soit un autre dossier (comme { nom: 'Projets collectifs Ada', contenu: [...] }).
L'utilisation d'un tableau nous permet de stocker une liste ordonnée de ces éléments à l'intérieur de chaque dossier. Ainsi, lorsque notre fonction parcourt le dossierPrincipal.contenu, elle peut traiter chaque fichier et chaque sous-dossier individuellement.

# Dans la fonction itérative :
le contexte initial nous assurait que dossierPrincipal.contenu était un tableau, donc la vérification explicite n'était pas strictement nécessaire pour ce premier niveau.

# Dans la fonction récursive
pour la rendre plus adaptable à une exploration en profondeur où la fonction pourrait être appelée sur des éléments qui ne sont pas des dossiers (et donc n'ont pas de tableau contenu), la vérification Array.isArray() est une bonne pratique pour éviter des erreurs potentielles.