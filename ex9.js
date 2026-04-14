//! Atividade!

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let alunos = [];

function menu() {
  console.clear();
  console.log("\n==== MENU ====");
  console.log("===============");
  console.log("1 - Cadastrar Aluno.");
  console.log("2 - Listar Todos.");
  console.log("3 - Pesquisar aluno por nome.");
  console.log("4 - Excluir Um Aluno.");
  console.log("5 - Maior Nota.");
  console.log("6 - Média das Notas.");
  console.log("0 - SAIR.");
  console.log("===============");

  rl.question("Digite a opcao que voce deseja: ", (input1) => {
    let opcao = "";
    opcao = parseInt(input1);

    switch (opcao) {
      case 1:
        cadastro();
        break;

      case 2:
        console.table(alunos);
        voltarMenu();
        break;

      case 3:
        pesquisar();
        voltarMenu();
        break;

      case 4:
        console.table(alunos);
        exlcuirAluno();
        break;

      case 0:
        console.clear();
        console.log("Programa encerrado!");
        break;

      case 5:
        //  const maiorNota = Math.max(...alunos.map(p => p.nota));
        //     console.log(maiorNota);
        let maiorNota = 0;

        for (let i = 0; i < alunos.length; i++) {
          alunos[i].nota;

          if (maiorNota <= alunos[i].nota) {
            maiorNota = alunos[i].nota;
          }
        }
        console.log(maiorNota);

        voltarMenu();
        break;

      case 6:
        media();
        voltarMenu();
        break;

      default:
        console.log("Numero invalido, tente novamente!");
        voltarMenu();
    }
  });
}
menu();

//! Cadastrar alunos
function cadastro() {
  rl.question("Digite o nome do aluno: ", (input2) => {
    rl.question("Digite a idade do aluno: ", (input3) => {
      rl.question("Digite o curso do aluno: ", (input4) => {
        rl.question("Digite sua nota: ", (input0) => {
          let cadastro = {
            nome: input2,
            idade: input3,
            curso: input4,
            nota: parseFloat(input0),
          };
          alunos.push(cadastro);
          console.log(`O(A) aluno ${input2} foi cadastrado com sucesso!`);

          voltarMenu();
        });
      });
    });
  });
}

function voltarMenu() {
  rl.question("Digite enter para voltar ao menu: ", (input5) => {
    menu();
  });
}
//! Pesquisar aluno
function pesquisar() {
  rl.question("Digite o nome do aluno que deseja pesquisar:  ", (input6) => {
    //   const alunoEncontrado = alunos.find(p => p.nome === (input6));
    //      console.log(alunoEncontrado);
    //         if(alunoEncontrado) {
    //             console.log("Aluno cadastrado!");
    //         }
    //         else {
    //             console.log("Aluno nao cadastrado!");
    //         }

    let alunosProcurados = [];

    for (let i = 0; i < alunos.length; i++) {
      alunos[i].nome;
      if (input6 == alunos[i].nome) {
        alunosProcurados.push(input6);
        console.log("O aluno esta cadastrado!");
      }
    }
    if (alunosProcurados.length > 0) {
      console.log(alunosProcurados);
    } else {
      console.log("O aluno ainda nao foi cadastrado!");
    }

    voltarMenu();
  });
}

//! Excluir alunos
function exlcuirAluno() {
  rl.question("Digite o index do aluno que deseja excluir: ", (input7) => {
    alunos.splice(input7, 1);
    console.log("Aluno exlcuido com sucesso!");
    console.table(alunos);
    voltarMenu();
  });
}

voltarMenu();

//! Media das notas

function media() {
  let notaMedia = 0;
  let totalNotas = 0;
  for (let i = 0; i < alunos.length; i++) {
    alunos[i].nota;
    totalNotas = totalNotas + alunos[i].nota;
  }
  notaMedia = totalNotas / alunos.length;
  console.log(notaMedia);   
}
