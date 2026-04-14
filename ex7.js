//! Atividade sobre funcionarios

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let funcionarios = [];
function menu() {
  console.clear();
  console.log("========MENU=======");
  console.log("1- Cadastrar funcionario.");
  console.log("====================");
  console.log("2- Listar todos os funcionarios cadastrados.");
  console.log("====================");
  console.log("3 - Mostrar qual funcionario possui o maior salario.");
  console.log("====================");
  console.log("4 - Mostrar o funcionario que possui o menor salario.");
  console.log("====================");
  console.log("5- Encerrar programa.");
  console.log("====================");
  console.log("6- Excluir algum funcionario.");
  console.log("====================");

  let entrada = "";
  rl.question("Digite a opção que você deseja: ", (input) => {
    entrada = parseInt(input);
    switch (entrada) {
      case 1:
        cadastro();
        voltarMenu();
        break;
      case 2:
        console.table(funcionarios);
        voltarMenu();
        break;
      case 3:
        // const maiorSalario = Math.max(...funcionarios.map(p => p.salario))
        // console.log(maiorSalario);
        let maiorNota = 0;
        for (i = 0; i < funcionarios.length; i++) {
          funcionarios[i].salario;
          if (maiorNota <= funcionarios[i].salario) {
            maiorNota = funcionarios[i].salario;
          }
        }
        console.log(`O maior salario entre os funcionarios e de ${maiorNota}!`);
        voltarMenu();
        break;
      case 4:
        let menorSalario = 0;
        for (i = 0; i < funcionarios.length; i++) {
          funcionarios[i].salario;
          if (menorSalario <= funcionarios[i].salario) {
            menorSalario = funcionarios[i].salario;
          }
        }
        console.log(menorSalario);
        voltarMenu();
        break;

      

      case 5:
        console.log("Programa encerrado com sucesso!");
        rl.close();
    
        case 6:
            exlcluir();
            break;

      default:
        console.log("Numero invalido, tente novamente!");
        voltarMenu();
        break;
    }
  });
}
menu();

function cadastro() {
  rl.question("Digite seu nome: ", (input1) => {
    rl.question("Digite seu cargo: ", (input2) => {
      rl.question("Digite seu salario: ", (input3) => {
        let cadastro = {
          nome: input1,
          cargo: input2,
          salario: input3,
        };
        funcionarios.push(cadastro);
        console.log(`O funcionario(a) ${input1} foi adicionado!`);
        voltarMenu();
      });
    });
  });
}
function voltarMenu() {
  rl.question("Digite enter para voltar ao menu: ", (input4) => {
    menu();
  });
}
function exlcluir() {
    rl.question("Digite o nome do aluno que deseja excluir: ", (input5) => {
        funcionario.splice(input5, 1);
        console.log("Funcionario excluido com sucesso!");
        console.table(funcionarios);
        voltarMenu();

    })
}

