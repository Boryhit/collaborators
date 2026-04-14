const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cadastro = [];

function cadastrando () {

    rl.question("Digite o nome do produto (ou 'listar' para finalizar): ", (input1) => {

        if (input1.toLowerCase() === "listar") {
            mostrarTotal();
            rl.close();
            return;
        }

        rl.question("Digite o preço do produto: ", (input2) => {
            rl.question("Digite a quantidade do produto: ", (input3) => {

                let produto = {
                    nome: input1,
                    preco: parseFloat(input2),
                    quantidade: parseFloat(input3)
                };

                cadastro.push(produto);

                console.log("Produto adicionado:", produto);

                cadastrando();
            });
        });
    });
}

function mostrarTotal() {
    let soma = 0;

    cadastro.forEach((item) => {
        soma += item.preco * item.quantidade;
    });

    console.log("Itens no carrinho:", cadastro);

    console.log("Total da compra:", soma);
}

cadastrando();