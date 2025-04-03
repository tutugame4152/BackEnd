let valor = 51.51515;
let text = "Meu primeiro projeto em Java script";
let booleano = true;

console.log(valor.toFixed(2));//Arredonda pra 2 casas decimais

console.log("Tipo:" + typeof valor);//Exibe a propriedade da variável

console.log(text.toUpperCase());//Converte o texto para maiúsculas

console.log("Tipo:" + typeof text);//Exibe a propriedade da variável

console.log(booleano.toString());//Converte para texto

console.log("Tipo:" + typeof booleano);//Exibe a propriedade da variável

let estados = ["São Paulo, Xique xique, Acre(isso existe?), Paudalho"];//Lista (array) 
let marcasCarros = [];//Lista indefinida
marcasCarros.push("Toyota");//Adiciona a lista
console.log(estados[2]);
console.log("Tamanho: " + estados.length);
console.log(marcasCarros[0]);
console.log("Total letras: " + marcasCarros[0].length);

let nula = null;

const aula = "JavaScript";//Cria uma variável imutável
aula = "JS";//Não da pra muda