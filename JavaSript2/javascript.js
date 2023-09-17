function halo(){
    alert("Halo JavaScript");
}
function waktu(){
    document.getElementById('waktu').innerHTML=Date();
}
function Zodiak(){
    let tanggal=document.getElementById('tanggal').value;
    let bulan=document.getElementById('bulan').value;
    let zodiak="tidak tau";
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
    document.getElementById('zodiak').innerHTML=zodiak;
}
function kali(){
    let a=document.getElementById('bil1').value;
    let b=document.getElementById('bil2').value;
    let hasil=a*b;
    document.getElementById('hasil').innerHTML=hasil;
}
let btn=document.getElementById('jam');
btn.onclick=function(){
    document.getElementById('waktu').innerHTML=Date();
}
let isi=document.getElementById('ketik');
let tampil=document.getElementById('waktu');
isi.onmouseover=function(){
    tampil.innerHTML=isi.value;
}
let hari=document.getElementById('hari');
hari.addEventListener("click",Zodiak);

function coba(){
    alert("coba coba");
}
