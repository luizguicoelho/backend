const l = require("./livros.json");

function mostraLivros(){
    console.log("Titulo - autor - editora - ano - sipnose - paginas - generos - preco")
    l.forEach((livro => {
        console.log(`${livro.titulo}- Autor: ${livro.autor} - editora: ${livro.editora} - Ano: ${livro.ano} - Páginas: ${livro.paginas} - Gêneros: ${livro.generos} - Preço: ${livro.preco} `)
    }))
}

function AddLivro(titulo, autor, editora, ano, paginas, generos, preco){
    l.push({
        titulo: titulo,
        autor: autor,
        editora:  editora ,
        ano: ano,
        paginas: paginas,
        generos: generos,
        preco: preco
    })
    console.log("Livro Adicionado com sucesso!")
}
/*
AddLivro(
    "O Grande Tigre",
    "Guilherme Rodrigues",
    "Coelho e Cia",
    2020,
    432,
    ["Roubo", "Falsidade", "Lavagem de dinheiro", "Aventura"],
    37802.90
);
*/
//JSON = JavaScript Object Notation
//gera um  arquivo JSON dos livros
function criarArquivo(){
    let lT = JSON.stringify(l);
    const fs = require('fs');
    fs.writeFileSync("livros.json", lT);
}


//criarArquivo();

mostraLivros();