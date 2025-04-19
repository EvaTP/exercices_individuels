let input = prompt("Indique ta date de naissance : ")
const userInput = document.querySelector('input')
userInput.innerText = input

const checkCorrectDate = (c) => {
   console.log('coucou')
   const dayInput =  c[0].substr(0, 2)
    console.log(":grin::grin:",dayInput)
    if(dayInput > 30){
      alert('entrez une date valide')
    }
   
   const monthInput = c[0].substr(2, 2)
   console.log("monthInput", monthInput)
   if(monthInput > 12){
      alert('Entrez un mois valide')
   } 

   const yearInput = c[0].substr(4, 4)
   console.log("yearInput", yearInput)
   if(yearInput < 999 || yearInput > 9999){
      alert('Entrez une année valide')
   }

   let copyC = c[0]
   copyC = copyC.split("")
   inputendroit = copyC
   console.log(copyC)
   let reverseInput = copyC.reverse()
   console.log("reverseInput",reverseInput)
   console.log("copyC", copyC)
   console.log("c[0]", inputendroit)

   if(inputendroit == reverseInput){
      alert("c'est un palindrome")
   } else {
      alert("raté")
   }
 }

const isValidDate = (input) => {
   console.log(":yum::yum:",input)
   const splitInput = input.split("/")
   console.log(":sunglasses::sunglasses: splitInput",splitInput)
checkCorrectDate(splitInput)
}
isValidDate(input)