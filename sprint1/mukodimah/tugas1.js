/*diketahui panjang = 10 cm. lebar 5cm dan tinggi 8 cm 
hitunglah permukaan blok dan volume blok sehingga menampilkan output pada web 
diketahui :
p =..cm
l =..cm
t =..cm
volume dari blok adalah.........cm3
luas permukaan blok adalah.........cm2
volume dalam blok liter........l
volume blok ketika di perbesar 3 kali ...cm3

2. diketahui segitiga memiliki alas=10 , tinggi = 12cm, hitunglah luas segitiga
dan memiliki keluran output dan input?

dik:
alas =...cm
tinggi =...cm
//alas=...cm
//tinggi=...cm

//ditanyakan?
//luas segitiga adalah...m2
*/
//dik
var p=10
var l=5
var t=8
var hasil = p*l*t 
//cari permukaan luas
var permukaan = p*l*p*t*l*t
document.write('diketahui <br> p=10 <br>l=5 <br>t=8 <br>')
document.write('Luas Permukaan Blok Adalah '+permukaan*2 +'cm2')
document.write("<br>")
// cari volume dari balok
var vol = p*l*t
document.write('volume dari balok adalah '+vol +'cm3')
document.write("<br>")
//volume block dalam liter
var vol2 = p*l*t
document.write('volume dari balok adalah '+vol +'cm3')
var lit = 1000
var hasil = vol2 / lit
document.write('volume block dalam liter adalah '+hasil +'l')
//volume block ketika di perbesar 3 kali...cm3
document.write('volume block ketika di perbesar 3 kali '+vol*6 +'cm3')
//soal 2
var alas = 10
var tinggi = 12
var akhir = 1/2 *alas*tinggi
document.write('<hr>diketahui <br>alas=10 <br>tinggi=12 <br>')
document.write('Luas segitiga adalah '+ akhir*0.5 +'cm2')

























