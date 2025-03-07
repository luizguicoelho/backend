let av1 = 6.0;
let av2 = 6.0;
let rec = 0.0;
let rec2 = 0.0;
let nt1;
let nt2;

nt1 = rec > av1 ? rec : av1;
nt2 = rec2 > av2 ? rec2 : av2;
let tme = (nt1 + nt2) /2
/*if (rec > av1){
    nt1 = rec
} else {
    nt1 = av1
}
if (rec2 > av2){
    nt2 = rec2
} else {
    nt2 = av2
}
let tme = nt1 + nt2;
*/
if(tme >= 6 ){
    console.log("Você passou! A sua Média é:"+ tme)
} else {
    console.log("você reprovou!" + tme)
}

