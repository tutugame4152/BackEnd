//1
import rl from "readline-sync";
let palavra = rl.question("Digite o texto para conversão: ");
console.log(Maiuscula(palavra))
//Declaração de função
function Maiuscula(texto){
    return texto.toUpperCase();
}
/*
//Expreção de Função
const cxAlta = function (texto){
    return texto.toUpperCase();
}
//console.log(cxAlta(palavra))

//função de seta
const tdmaior = (texto) => texto.toUpperCase();
console.log(tdmaior(palavra));
*/
