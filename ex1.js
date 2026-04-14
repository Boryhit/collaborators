const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let filmes = ''
rl.question("qual genero quer assistir ? açao,terror,comedia ou animaça:", (input) =>{
    filmes= (input)

    switch(filmes) {
        case "açao":
        console.log("sala 1");
        break;
        
        case "terror":
        console.log("sala 2");
        break;

        case "comedia":
        console.log("sala 3");
        break;

        case "animaçao":
        console.log("sala 4");
        break;

        default:
        console.log("genero nao esncontrado, por favor digite um genero valido")
       break;
    }
    rl.close()
})