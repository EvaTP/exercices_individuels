#  fonction prompt()
# problème : le champ à remplir et le bouton en HTML ne s'affichent pas sur la page
La fonction prompt() bloque l'exécution du reste du code JavaScript jusqu'à ce que l'utilisateur ait saisi une valeur et cliqué sur "OK" ou "Annuler". Par conséquent, le code HTML pour afficher le champ de saisie et le bouton n'est exécuté qu'après la fermeture des prompts.

Modifier le code JavaScript pour ne plus utiliser prompt() au début du script.
Au lieu de cela, utiliser une variable pour stocker le nombre à deviner, qui sera initialisée plus tard, après que l'utilisateur l'aura saisi dans le champ de saisie.

Ajouter un écouteur d'événements sur le bouton "Envoyer". Cet écouteur d'événements exécutera la fonction gamePlay() lorsque l'utilisateur cliquera sur le bouton.