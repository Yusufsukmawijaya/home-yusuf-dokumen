//alert

// alert('jangan di buka');

//promt masukkan perintah
//promt ('masukkan nama anda')

//confirm
//confirm('pilih ya atau tidak')
//contoh
// var jawaban = confirm('pilih devil atau angel');

// document.write(jawaban);

//var peringatan = alert('NOT FOUND')
//document.write(peringatan)

// var name = prompt('AKU SIAPA');
// document.write(name)

// var panjang = prompt('panjang');
// var lebar = prompt('lebar');
// var pint = parseInt(panjang)
// var lint = parseInt(lebar)
// var hasil = pint * lint

// document.write("hasil persegi adalah=" +hasil);

//program hewan berkaki

// var angka = prompt("angka 2 benar");
// if(angka == '2'){
//     document.write('angka 2 benar');
// }else{
//     document.write('Bukan angka 2')
// }

// var jumlahkaki = prompt('jumlahkaki hewan ?')

// if(jumlahkaki == '2'){
//     document.write('ayam,bebek,angsa,burung.dll')
// }else if(jumlahkaki == '4'){
//     document.write('gajah,harimau,anjing,kuda.dll')
// }else{  
//     document.write(alert('NOT FOND IN THIS PAGE'))
// }

// var nilai = prompt('masukan nilai 1');
// var nilai = prompt('masukan nilai 2');
// var operasi = prompt('masukan tanda + , - , * , / ,');

// var nilai1 = prompt('ketik nilai');
// var nilai2 = prompt('ketik nilai');
// var operasi = prompt('+,-,*,/');
// var rubah1 = parseInt(nilai1);
// var rubah2 = parseInt(nilai2);
// var kali = rubah1*rubah2
// var tambah = rubah1+rubah2
// var kurang = rubah1-rubah2
// var bagi = rubah1/rubah2

// if(operasi == '+'){
//     document.write('nilai yang di tambah =' +tambah)
// }else if(operasi =='*')
// {
//     document.write('nilai yang di kali adalah =' +kali)
// }else if(operasi =='-')
// {
//     document.write('nilai yang di kurang adalah =' +kurang)
// }else if(operasi =='/')
// {
//     document.write('nilai yang di bagi adalah =' +bagi)
// }else {
//     document.write('Masukan angka yang benar')
// }

//Membuat Fitur Login
// var username = 'yusuf'
// var password = 123

// var inputform = prompt('masukan username');
// var inputpass = prompt('masukan password');

// if(inputform==username && inputpass==password)
// {
//     document.write('Login berhasil')
// }else if(inputform!=username){
//     document.write('username salah')
// }else if(inputform!=password){
//     document.write('ERROR404-NOT FOUND')
// }

//mencetak perulangan
for(var y = 1; y < 6; y++) {
    for(x = 1; x = 6; x++) {
        if ( y == 1) {
            document.write('0')
        }
    }
} 