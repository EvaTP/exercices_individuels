// ANIMATION SUR LES BUTTONS ON CLICK
const listNumbers = document.querySelectorAll(".btn-digit");
const listOperators = document.querySelectorAll(".btn-operator");
const allButtons = document.querySelectorAll(".btn-digit, .btn-operator");
const buttonEqual = document.querySelector('input[value="="]');
const resultDiv = document.querySelector("#result");
const buttonAC = document.querySelector('input[value="AC"]');

let firstNumber = "";
let currentOperator = "";
let secondNumber = "";
let result = 0;

// DIFFERENTS CALCULS DISPONIBLES
const calcul = {
  "*": function (a, b) {
    return (a * b).toFixed(2);
  },
  "-": function (a, b) {
    return (a - b).toFixed(2);
  },
  "+": function (a, b) {
    return (a + b).toFixed(2);
  },
  "/": function (a, b) {
    return (a / b).toFixed(2);
  },
};

// AFFICHAGE INPUTS
function showValueOnScreen(valeur) {
  // Si un opérateur est déjà choisi, on ajoute dans secondNumber
  if (currentOperator === "") {
    firstNumber += valeur;
    resultDiv.innerText = firstNumber;
  } else {
    secondNumber += valeur;
    // Afficher l'opération complète
    resultDiv.innerText =
      firstNumber + " " + currentOperator + " " + secondNumber;
  }
}

// BOUTONS CHIFFRES ET OPERATEURS
allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    animationOnButtons(this);
    if (this.value === "=") {
      // Ne pas traiter = comme un opérateur, laisser son propre gestionnaire s'en occuper
      return;
    }

    if (this.classList.contains("btn-operator")) {
      // Vérifier que firstNumber n'est pas vide
      if (firstNumber !== "") {
        currentOperator = this.value;
        resultDiv.innerText = firstNumber + " " + currentOperator;
      }
    } else {
      showValueOnScreen(this.value);
    }
  });
});

// ÉGAL (=) → Calcule le résultat
buttonEqual.addEventListener("click", () => {
  animationOnButtons(buttonEqual);
  if (firstNumber !== "" && secondNumber !== "" && currentOperator !== "") {
    result = calcul[currentOperator](
      parseFloat(firstNumber.replace(",", ".")),
      parseFloat(secondNumber.replace(",", "."))
    );
    resultDiv.innerText = result;
    // Reset des variables pour pouvoir enchaîner
    firstNumber = result.toString();
    secondNumber = "";
    currentOperator = "";
  }
});

// CALCUL
function makeCalculation() {
  if (firstNumber != "" && currentOperator != "" && secondNumber != "") {
    result = calcul[currentOperator](
      parseFloat(firstNumber.replace(",", ".")),
      parseFloat(secondNumber.replace(",", "."))
    );
    resultDiv.innerHTML = result;
    firstNumber = result.toString();
    secondNumber = "";
  }
}

// Fonctions utilitaires
// CREER UNE ANIMATION QUAND UNE TOUCHE EST PRESSEE
function animationOnButtons(button) {
  button.style.opacity = 0.6;

  setTimeout(function () {
    button.style.opacity = 1;
  }, 100);
}

// BOUTON AC - Reset complet
buttonAC.addEventListener("click", () => {
  animationOnButtons(buttonAC);
  resultDiv.innerText = "0";
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  result = 0;
});
