let com = ["coxinha de frango com catupiri", "pastel", "coxinha 500g", "coxinha 1kg", "risoles",]
let vlr = ["2", "5", "15", "32", "3"]
ct = 0;

function mosCom() {
    com.forEach((co) =>{
        console.log(co)
    })
    vlr.forEach((vl) =>{
        console.log(vl)
    })

}


function addPre(nvPre){
    com.push(nvPre);
}
function addCom(nvCom){
    com.push(nvCom);
}

mosCom();

addCom("torta");
addCom("bolo");
addPre("15");
addPre("34");
console.log("Lanches após adição");
mosCom();


let vlrAtua = vlr.map((vl) => (vl * 0.9));
console.log(vlrAtua)

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