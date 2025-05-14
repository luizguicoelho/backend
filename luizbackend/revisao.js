/* Arquivo base para realização da Atividade de Revisão do 1º TRIMESTRE */

// 1) Criação de variável de texto e numérica
console.log("EXE 1")
console.log()

let nome = "luiz"
let numérica = 21

// 2) Criação de uma lista
console.log("EXE 2")

let jogos = ["Pocket Contest", "Clash Royale", "Pokemon"]

console.log()
// 3) Utilização de um laço while


console.log("####### Exercício 3 #######")
console.log(`Jogos favoritos de ${nome} são:`)

c = 0
while( c < 3){
    console.log(jogos[c])
    c++
}

console.log()
// 4) Criação de um objeto
console.log("EXE 4")

let objeto = [{
    nome,
    nomef: "Os Vingadores",
    ano: 2012,
    nota : 7.1
}]

console.log()
// 5) Utilização de if-else
console.log("EXE 5")

if(objeto.nota < 4.0){
    console.log("O filme possui uma nota considerada baixa.")
} else if(objeto.nota < 7.0) {
    console.log("O filme é considerado razoável.")
} else {
    console.log("O filme é muito bom!")
}

console.log()
// 6) Criação de uma função que analisa os dados da previsão do tempo
const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
]

console.log("Exercicío 6")
console.log("Clima para essa semana")

function verificachuva(previsaoTempo){
    let c = 0
    while(c < previsaoTempo.length){
        let dia = previsaoTempo[c]
        console.log(`Dia ${dia.dia}`)

        if(dia.chanceDeChuva > 50){
            console.log("levar guarda-chuva")
        } else {
            console.log("tempo agradável")
        }
        c++
    }
}

verificachuva(previsaoTempo)