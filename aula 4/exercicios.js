//1

let apartamento = {
    quartos: 2,
    tipo: "Apartamento",
    endereço: "Avenida principal - 456 - Centro",
    andar: 7
}

console.log(apartamento);
console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º da ${apartamento.endereço}.`);

//2

let produto_embalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00

}

console.log(`O produto ${produto_embalado.nome}, da categoria ${produto_embalado.categoria}, pesando ${produto_embalado.peso}kg, está à venda por ${produto_embalado.preco.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}.`)

//3

/*class Imovel{
    quartos;
    tipo;
    endereco
}*/

class Imovel{
    constructor(quartos,tipo,endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco 
    }
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, localizado no(a) ${this.endereco}.`;

    }
}

/*casa.quartos = 3;
casa.tipo = "Sobrado"
casa.endereco = "Casa do k7, n° 2217"
console.log(casa)*/

let casa = new Imovel(3, "Sobrado", "Casa do k7, n° 2217"); 

console.log(casa.exibirInformacoes())
//Da pra fazer em Jason, mas vc ficou com preguiça T-T (da pra usar \n)

//4
import entrada from "readline-sync";
let sexo = entrada.question("Informe seu sexo: ")
switch (sexo) {
    case "M":
        console.log("Omem");
        break;
    case "F":
        console.log("Muié");
        default:
            console.log("Ta errado 😡");
        break;
}
