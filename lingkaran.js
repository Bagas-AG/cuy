// conversion

const textBox = document.getElementById("textBox");
const hitung = document.getElementById("hitung");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const phi =3.14;
let k;
let l;
let r;



function convert(){
  if(hitung.checked){
    r = Number(textBox.value);
    k = 2 * phi * r ;
    result1.textContent = "keliling nya adalah : "+ k.toFixed() + "m";
    l = phi * r * r ;
    result2.textContent = "luas nya adalah : "+ l.toFixed() + "m^2";
  }else{
    result1.textContent ="select the unit";
  }
}