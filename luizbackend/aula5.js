let com = ["coxinha de frango com catupiri", "pastel", "coxinha 500g", "coxinha 1kg", "risoles",]
let vlr = ["2", "5", "15", "32", "3"]

function mostraCardapio() {
    console.log("Cardápio:");
    com.forEach((co, index) => {
        console.log(`${co} - R$ ${vlr[index]}`);
    });
}


function addCom(nvCom, nvPre) {
    com.push(nvCom); 
    vlr.push(nvPre); 
}

function mostraCardapioEspecial() {
    console.log("Cardápio Especial (Desconto de 15% para Clientes Fidelizados):");
    vlr.forEach((preco, index) => {
        let precoComDesconto = preco * 0.85; 
        console.log(`${com[index]} - R$ ${precoComDesconto.toFixed(2)}`);
    });
}

mostraCardapio();

addCom("torta", 15);
addCom("bolo", 34);

console.log("\nLanches após adição:");
mostraCardapio();

mostraCardapioEspecial();



/*
while(ct < esp.length){
    let ct2 = ct + 1
    console.log(ct2 + " - " + esp[ct] + " R$ " + vlr[ct])
    ct = ct + 1
}
/*

esp.push("queimada");
console.log(esp);

esp.pop();
console.log(esp);

esp.splice(0,1);
console.log(esp);
*/