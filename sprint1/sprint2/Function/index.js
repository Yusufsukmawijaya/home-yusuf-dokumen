// document.write("Check")

// //function adalah sub program yg dapat di jalankan berulang kali


// //syntax atau aturan dalam membuat function

// function namaFunction(){
//     //action
//     document.write("Hello")
// } 

// namaFunction()

// //

// var namaVariable = 'string'


// function namaFunction(parameter){
//     console.log(parameter);
// }

// namaFunction("string");


// function luasPersegi(sisi){
//     document.write(sisi * sisi)
// }

// luasPersegi(12);

// document.write("<br>")

// function luasPersegiPanjang(panjang, lebar){
//     document.write(panjang * lebar);
// }

// luasPersegiPanjang(12,5);

// function luasPersegiPanjang(panjang, lebar){
//     // document.write(typeof panjang);
//     // document.write(typeof lebar);
//     document.write(panjang * lebar);
// }

// var panjangPrompt = prompt('masukkan panjang?')
// var lebarPrompt = prompt('masukkan lebar ?')


// var panjangPrompt = parseInt(panjangPrompt);
// var lebarPrompt = parseInt(lebarPrompt);

// luasPersegiPanjang(panjangPromptInt, lebarPromptInt)

// function luasPersegiPanjang(panjang = 0, lebar = 0){
//     // document.write(typeof panjang);
//     // document.write(typeof lebar);
//     alert(panjang * lebar)
//     var konfirmasi = confirm("Apakah ingin diulang ?");
//     if(konfirmasi == true) {
//         var panjangPrompt = prompt("masukkan panjang");
//         var lebarPrompt = prompt("masukkan lebar");

//         var panjangPromptInt = parseInt(panjangPrompt);
//         var lebarPromptInt = parseInt(lebarPrompt);

//         alert(panjangPromptInt* lebarPromptInt)
//     } else {
//         alert("tidak usah dah")
//     }
// }

//         var panjangPrompt = prompt("masukkan panjang");
//         var lebarPrompt = prompt("masukkan lebar");

//         var panjangPromptInt = parseInt(panjangPrompt);
//         var lebarPromptInt = parseInt(lebarPrompt);

//         luasPersegiPanjang(panjangPromptInt, lebarPromptInt)

// function hitungLuas() {
//     var Pilihan = prompt("Pilih luas ? segitiga, lingkaran, persegiPanjang");
//     document.write(Pilihan);
//     if(Pilihan == "segitiga"){
//         var alas = prompt('masukkan nilai alas');
//         var tinggi = prompt('masukkan nilai tinggi');
//         var alasInt = parseInt(alas);
//         var tinggiInt = parseInt(tinggi);

//         var luas = (alasInt * tinggiInt) / 2;
//         alert(luas);

//             var konfirmasi = confirm("Apakah ingin diulang kembali ?");
//             if(konfirmasi == true){
//             hitungLuas();  
//         }else{
//             alert("Thank You Admin");
//         }
//     }
// }

// hitungLuas();

// function hitungLuas() {
//     var Pilihan = prompt("Pilih luas ? segitiga, lingkaran, persegiPanjang");
//     document.write(Pilihan);
//     if(Pilihan == "persegiPanjang"){
//         var panjang = prompt('masukkan nilai alas');
//         var tinggi = prompt('masukkan nilai tinggi');
//         var panjangInt = parseInt(panjang);
//         var tinggiInt = parseInt(tinggi);

//         var luas = (panjangInt * tinggiInt);
//         alert(luas);

//             var konfirmasi = confirm("Apakah ingin diulang kembali ?");
//             if(konfirmasi == true){
//             hitungLuas();  
//         }else{
//             alert("Bingung? [Coba Lagi] ");
//         }
//     }
// }

// hitungLuas();

// function luasLingkaran(jari){
//     var pi = 22/7;
//     alert(pi * jari * jari)
//     var konfirmasi = confirm("Apakah ingin di Ulang kembali ?");
//     if(konfirmasi == true){
//         var piPrompt = prompt("masukkan pi");
//         var jariPrompt = prompt("masukkan jari");
//         var piPrompt = parseInt(piPrompt);
//         var jariPrompt = parseInt(jariPrompt);

//         luasLingkaran(piPrompt, jariPrompt);
//     } else {
//         alert("Finish")
//     }
// }

// var piPrompt = prompt("masukkan pi");
// var jariPrompt = prompt("masukkan jari");
// var piPrompt = parseInt(piPrompt);
// var jariPrompt = parseInt(jariPrompt);

// luasLingkaran(piPrompt, jariPrompt);

// function kalkulator(){
//     var nilai1Prompt = prompt("masukkan nilai1");
//     var nilai2Prompt = prompt("masukkan nilai2");
//     var operasi = prompt("+ , *, - , /")

//     var nilai1Int = parseInt(nilai1Prompt);
//     var nilai2Int = parseInt(nilai2Prompt);

//     var tambah = nilai1Int + nilai2Int
//     var kali = nilai1Int * nilai2Int
//     var kurang = nilai1Int - nilai2Int
//     var bagi = nilai1Int / nilai2Int

//     if(operasi == "+"){
//         document.write(tambah)
//     }else if(operasi == "*"){
//         document.write(kali)
//     }else if(operasi == "-"){
//         document.write(kurang)
//     }else if(operasi == "/"){
//         document.write(bagi)
//     }
// }   