//1
/*

import rl from "readline-sync";
let pergunta = rl.questionInt("Digite um número: ");
let cont = 1;
while(cont <= 10) {
    console.log(`${pergunta} * ${cont} = ${pergunta*cont}`);
    cont++;
}

//2

let numaluno = rl.questionInt("Informe o número de alunos: ");
let somanota = 0;
let contadoaluno = 1;
let somamedia = 0;
    while(contadoaluno <= numaluno) {
    console.log(`Aluno ${contadoaluno}`);

    
    let contadorbim = 1;
    while (contadorbim <= 4){
        let nota = rl.questionInt(`Informe a nota do ${contadorbim}° bimestre para o aluno ${contadoaluno}: `);
        somanota = somanota + nota;
        contadorbim++;
    }
    let divisao = somanota / 4;
     somamedia += divisao;

    console.log(`Média do aluno ${contadoaluno}: ${divisao.toFixed(2)}`);
    contadoaluno++;
}

 let mediageralturma = somamedia / numaluno;
 console.log(`Media geral da turma: ${mediageralturma.toFixed(2)} `);
*/
 //3
 import rl from "readline-sync";
 
 const numaleatorio = Math.floor(Math.random()*100)+1

 let tentativa;

 do{
    tentativa = rl.questionInt("Advinhe o número (entre 1 e 100): ");
    if (tentativa === numaleatorio){
        console.log("Parabéns! Você acertou 👍");
    } else if(tentativa< numaleatorio){
        console.log("Tente um número maior");
    }else{
        console.log("Tente um número menor");
    }
}while (tentativa !== numaleatorio);

//1


//2
for (let i = 1; i <=10; i++){
    let nome= rl.question(`Informe o nome da ${1}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `);

    let ir = 0;
    if (salario <= 2100){
        ir = 0;
    } else if (salario <= 2800){
        ir = salario * 0.075;
    } else if (salario <= 3750){
        ir = salario * 0.15;
    } else if (salario <= 4600){
        ir = salario * 0.225;
    } else {
        ir = salario * 0.275;
    console.log(`\n--- Importo de Renda devido---`);
    console.log(`Nome: ${nome} \n Imposto de Renda: R$ ${ir.toFixed(2)}\n`);
    }
}


//for in
const pessoa = {
    nome: "Carlos Eduardo dos Santos",
    datanasc: "22/02/2002",
    cpf: "18948174141",
    sexo: "M"
}

//console.log(pessoa);
//console.log("Nome: " + pessoa.nome);

for (const key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`);
}

const cores = ["Preto", "Branco", "Azul", "Verde"];
for (const elemento of cores) {
    
    valores += elemento + ", ";

}
console.log(elemento);  
