
// conversion
const textBox = document.getElementById("textBox");
const hitung = document.getElementById("hitung");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
let k;
let l;
let s;

function convert(){
  if(hitung.checked){
    s = Number(textBox.value);
    k = (s * 4); // Membulatkan keliling hingga 3 angka di belakang koma
    result1.textContent = "Kelilingnya adalah: " + k.toFixed(3);
    l = (s * s); // Membulatkan luas hingga 3 angka di belakang koma
    result2.textContent = "Luasnya adalah: " + l.toFixed(3);
  } else {
    result1.textContent = "Pilih satuan";
  }
}
