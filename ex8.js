//! Funcao
// Serve para agrupar instrucoes para realizar uma tarefa especifica
//exemplo:  function nomeDafUNCAO() {
// console.log("Ola mundo!")
//}
// nomeDaFuncao() => vai imprimir "Ola mundo!""


// arrow function => voce nao precisa utilizar o function para exercer a funcao

// //!
// const somar = (a,b) => {
//     return a + b;
// };
// console.log(somar(100,250));

// //!
// function boasVindas () {
//     console.log("Bem vindos!");
// }

// boasVindas();

// //! 
// function soma(c, d) {
//     return c + d;
// }
// console.log(soma(30,20));


//! Atividade Funcao

let readline = require("readline");
let rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let alunos = [];




function menu(){
    
    console.clear();
        console.log("------ Menu ------");
           console.log("------------------")
             console.log("1- Cadastar Alunos");
               console.log("2- Listar Alunos");
                 console.log("3- Pesquisar Aluno");
                  console.log("4- Encerrar");


     rl.question("Digite a opção que voce deseja: ", (input1) => {
          let opcao = ''
            opcao = parseInt(input1);


              switch(opcao) {

                case  1 :
                  cadastro();
                    break;
                
                       case 2:
                          console.table(alunos)
                            voltarMenu();
                              break;   


                              case 3:
                                 pesquisar();
                                  voltarMenu;
                                    break;

                                       case 4: 
                                          console.clear()
                                             console.log("Programa encerrado!");
                                                break;
                                                

                                                     default:
                                                         console.log("Numero invalido, tente novamente!");
                                                            voltarMenu();
                                                   

            }
         
              
        })
 

      
}
menu();


           function cadastro(){
              rl.question("Digite o nome do aluno: ", (input2) => {
                 

                     rl.question("Digite a idade do aluno: ", (input3) => {
                      

                            rl.question("Digite o curso do aluno: ", (input4) => {
                                

                                let cadastro = {
                                    nome: (input2),
                                    idade: (input3),
                                    curso: (input4)
                                }
                                   alunos.push(cadastro);
                                    console.log(`O(A) aluno ${input2} foi cadastrado com sucesso!`)

                                      voltarMenu();
                                   

                                     
                                          
                                         
                                    
                                           

                            })
                     })
              })
        }


        function voltarMenu() {
            rl.question("Digite enter para voltar ao menu: ", (input5) => {
                menu();
            })
        }

                function pesquisar() {
                    rl.question("Digite o nome do aluno que deseja pesquisar:  ", (input6) => {

                        rl.question("Digite a idade do aluno que deseja pesquisar: ", (input7) => {

                            rl.question("Digite o curso que o aluno pesquisado faz: ", (input8) => {



                                  if(alunos.nome === input6 && alunos.idade === input7 && alunos.curso === input8) {
                                    console.log("O aluno pesquisado esta cadastrado!");

                                  }

                                    else {
                                      console.log("O aluno pesquisado ainda nao esta cadastrado. ");
                                    }
                                    voltarMenu();

                            })
                        })

                         voltarMenu();
                    
                    
                    })
                }


    

    

