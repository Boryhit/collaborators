const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//let codigodoproduto = ['A1,B2,C3']
// Esse array não está sendo usado, e não é necessário!

let codigodoproduto = '';

console.log("Salgadinhos: ");
console.log("Código A1: Batata Chips.");
console.log("Código B2: Amendoin.");
console.log("Código C3: Bolacha de Chocolate.");

// Dessa forma ele apresenta as opções para a escolha.

rl.question("coloque o codigo do produto acima:",(input)=>{
   codigodoproduto = (input)
      
    switch(codigodoproduto){
      case "A1":
        console.log("voce escolheu batata chips");
        break;
        case"B2":
        console.log("voce escolheu amendoin");
        break;

        case "C3":
        console.log("voce escolheu biscoito");

        default:
            console.log("o codigo de barra nao existe!")

    }
    rl.close()
})