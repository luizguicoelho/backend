const l = require("./livros.json");

function mostraLivros(){
    console.log("Titulo - autor - editora - ano - sipnose - paginas - generos - preco")
    l.forEach((livro => {
        console.log(`${livro.titulo}- Autor: ${livro.autor} - editora: ${livro.editora} - Ano: ${livro.ano} - Páginas ${livro.paginas} - Gêneros ${livro.generos} - Preço ${livro.preco} `)
    }))
}

//JSON = JavaScript Object Notation
//gera um  arquivo JSON dos livros
function criarArquivo(){
    let lT = JSON.stringify(l);
    const fs = require('fs');
    fs.writeFileSync("livros.json", lT);
}

criarArquivo();

mostraLivros();