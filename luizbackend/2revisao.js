const filmes = [
    {
        titulo: "Um Sonho de Liberdade",
        diretor: "Frank Darabont",
        ano: 1994,
        notaIMDb: 9.3,
        classificacao: "R",
        streaming: ["Netflix", "Telecine", "Star+"]
    },
    {
        titulo: "O Poderoso Chefão",
        diretor: "Francis Ford Coppola",
        ano: 1972,
        notaIMDb: 9.2,
        classificacao: "R",
        streaming: ["Apple TV+", "Star+"]
    },
    {
        titulo: "O Poderoso Chefão II",
        diretor: "Francis Ford Coppola",
        ano: 1974,
        notaIMDb: 9.0,
        classificacao: "R",
        streaming: ["Star+"]
    },
    {
        titulo: "Batman: O Cavaleiro das Trevas",
        diretor: "Christopher Nolan",
        ano: 2008,
        notaIMDb: 9.0,
        classificacao: "PG‑13",
        streaming: ["Netflix", "HBO Max"]
    },
    {
        titulo: "12 Homens e uma Sentença",
        diretor: "Sidney Lumet",
        ano: 1957,
        notaIMDb: 9.0,
        classificacao: "Approved",
        streaming: ["Telecine Play", "Mubi"]
    },
    {
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
        diretor: "Peter Jackson",
        ano: 2003,
        notaIMDb: 9.0,
        classificacao: "PG‑13",
        streaming: ["Netflix", "HBO Max"]
    },
    {
        titulo: "A Lista de Schindler",
        diretor: "Steven Spielberg",
        ano: 1993,
        notaIMDb: 9.0,
        classificacao: "R",
        streaming: ["Netflix", "Star+"]
    },
    {
        titulo: "Pulp Fiction: Tempo de Violência",
        diretor: "Quentin Tarantino",
        ano: 1994,
        notaIMDb: 8.9,
        classificacao: "R",
        streaming: ["Netflix", "Telecine Play"]
    },
    {
        titulo: "Três Homens em Conflito",
        diretor: "Sergio Leone",
        ano: 1966,
        notaIMDb: 8.8,
        classificacao: "R",
        streaming: ["Telecine Play", "Mubi"]
    },
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        diretor: "Peter Jackson",
        ano: 2001,
        notaIMDb: 8.8,
        classificacao: "PG‑13",
        streaming: ["Netflix", "HBO Max"]
    }
];
// 1) Crie um filtro para mostrar apenas os filmes lançados após o ano 2000

// 2) Transforme a lista de objetos da questão 1 em JSON (texto).

// 3) O professor Patrick criou uma nova plataforma de streaming chamada "PatrickTV",
// onde todos esses filmes estão disponíveis para assistir. Adicione a plataforma
// "PatrickTV" em todos os elementos (altere o array original, usando "forEach()")

// 4) Use a função "find" para encontrar o filme que possui o termo "Lista" no título.

// 5) Use a função map para armazenar apenas o titulo de cada filme em uma lista

// 6) Ordene a lista criada na questão 5 em ordem alfabética.

const filmes2000 = filmes.filter(filme => filme.ano > 2000)
filmes2000.forEach(filme => {console.log(filme.titulo)})

const text = JSON.stringify(filmes2000)
console.log(text)

const obj = JSON.parse(text)
console.log(obj)

filmes.forEach(filme => {filme.streaming.push("PatrickTV")})
console.log(filmes)

const filmm = filmes.find(filme => filme.titulo.includes("Lista"))
console.log(filmm)

const map = filmes.map(filme => filme.titulo)
console.log(map)

const sort = map.sort()
console.log(sort)