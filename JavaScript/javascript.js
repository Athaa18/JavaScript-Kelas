// let a=2;
// let b=3;
// let c=a+b;
// console.log(c);

let a=2;
let b=3;
let c=4;
let d=5;
let e= ((b+a)*c)/(a*b*b)+(a-d);
//  3+2*4/2*3*3+2-5
console.log(e);

let x=90;
let y=80;
let hasil=x<y;
if(hasil){
    console.log("lulus")
}
else{
    console.log("tidak lulus")
}

let bulan=6;
let tanggal=29;
let zodiak="Belum dibuat";
if(bulan==1){
    if(tanggal>0 && tanggal<20){
        zodiak="aquarius";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="taurus";
    }
}
if(bulan==2){
    if(tanggal>0 && tanggal<20){
        zodiak="leo";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="aries";
    }
}
if(bulan==3){
    if(tanggal>0 && tanggal<20){
        zodiak="carpricorn";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="piscec";
    }
}
if(bulan==4){
    if(tanggal>0 && tanggal<20){
        zodiak="virgo";
    }
    if(tanggal>19 && tanggal>31){
        zodiak="cancer";
    }
}
if(bulan==5){
    if(tanggal>0 && tanggal>20){
        zodiak="libra";
    }
    if(tanggal>19 && tanggal>31){
        zodiak="sagitarius";
    }
}
if(bulan==6){
    if(tanggal>0 && tanggal>20){
        zodiak="gemini";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="scorpio";
    }
}
    console.log(zodiak);