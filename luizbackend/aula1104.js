// ns = numero


/*
let ns = 7;

for(let c = 1; c <11; c++){
    n = ns * c
    console.log(`${ns} * ${c} = ${n}`)
}
*/

//_________________________________________________________________________________________________________________

/*
let i = [10, 35, 15, 20, 27, 17, 18, 54, 65, 12]
let p = 100/ i.length;
let pP = 0;
let pN = 0;
for(let c = 0; c < 10; c++){
    if(i[c] >= 18){
        pP = pP + p
        
    } else {
        pN = pN + p
    }
}

console.log(`Porcentagem de pessoas que podem dirigir: ${pP}%`)
console.log(`Porcentagem de pessoas não que podem dirigir: ${pN}`)
*/

//_________________________________________________________________________________________________________________

/*
let t_q = 3;

for(i= 0; i < t_q ; i++){
    l = " ";
    for(a = 0; a < t_q; a++ ){
        l+= "* ";
    }
    console.log(l)
}
*/

//_________________________________________________________________________________________________________________

let tm_t = 367868;
for(let i = 0; i < tm_t; i++){
    li = " ";
    ls = " ";
    for(let a = 0; a <= i; a++){
        li += "* ";
    }
    console.log(li)
}
