const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function gerarSenha() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
    
    const input = await perguntar("Digite o tamanho da senha: ");
    const comprimentoSenha = parseInt(input);

    let senha = '';

    for (let i = 0; i < comprimentoSenha; i++) {
        let index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[index];
    }

    console.log("Senha:", senha);
    rl.close();
}


gerarSenha();
//!Nao encontrei nenhum erro no seu codigo, parabens!