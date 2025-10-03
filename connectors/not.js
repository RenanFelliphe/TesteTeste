// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

let idade = 18;
let possuoCNH = true;
let nacionalidade = "brasileira";

if(!((idade >= 18) && (possuoCNH == true) && (nacionalidade == "inglês"))){
    console.log("| - Você pode dirigir!!!");
} else {
    console.log("| - Você não pode digirir!!!");
}