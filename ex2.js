const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nota = ''
rl.question("me diga sua nota:",(input)=>{
  nota = (input)
      switch(true){
        case (nota >= 90 && nota <= 100):
        console.log("nota A!");
        break;

        case(nota >= 80 && nota <=89):
        console.log("nota B!");
        break;

        case(nota >=70 && nota <= 79):
        console.log("nota C!");
        break;

        case(nota >=60 && nota <= 69):
        console.log("nota F!")
        break;

        default:
            console.log("nota nao existe")

      }
      rl.close()
})

