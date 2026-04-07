function pad_left (texto, largura, preenchimento) { // criando aa funcao

    // evitando casos indefinidos para poupar memoria do programa
    if (typeof texto !== "string" || typeof largura !== "number" || typeof preenchimento !== "string" ||
        preenchimento === "") {
        return undefined;
    }

    if (largura <= texto.length) {
        return texto;
    }

    // criar uma variavel para descobrir quantos caracteres precisamos para complementar a largura
    var complemento = largura - texto.length
    // == variavel para ser a responsavel por preencher a resposta
    var vazia = ""

    // criando a seguranca para a nova string nao ultrapassar o tamanho desejado
    while(vazia.length < complemento) {
    
        // criar o laco para percorrer o preenchimnento
        for (var i=0; i<preenchimento.length; i++) {
            
            // preencher a "vazia" e verificar a posicao correta
            if (vazia.length < complemento) {
            vazia = vazia + preenchimento[i]
            }
        }
    }
    
    return vazia+texto;

}

// respostas
console.log(pad_left("tudo bem", 20, "+*"));
console.log(pad_left("tudo bem", 20, "+-/+*"));