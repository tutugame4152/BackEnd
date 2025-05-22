import rl from "readline-sync";
let pergunta = rl.questionInt("Digite um número: ")
let cont = 1
while(cont <= 10) {
    console.log(`${pergunta} * ${cont} = ${pergunta*cont}`)
    cont++;
}