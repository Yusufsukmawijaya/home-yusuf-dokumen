
function hitungLuas() {
    var Pilihan = prompt("Pilih luas ? segitiga, lingkaran, persegiPanjang");
    document.write(Pilihan);
    if(Pilihan == "segitiga"){
        var alas = prompt('masukkan nilai alas');
        var tinggi = prompt('masukkan nilai tinggi');
        var alasInt = parseInt(alas);
        var tinggiInt = parseInt(tinggi);

        var luas = (alasInt * tinggiInt) / 2;
        alert(luas);

            var konfirmasi = confirm("Apakah ingin diulang kembali ?");
            if(konfirmasi == true){
            hitungLuas();  
        }else{
            alert("Thank You Admin");
        }
    }
}

hitungLuas();

function hitungLuas() {
    var Pilihan = prompt("Pilih luas ? segitiga, lingkaran, persegiPanjang");
    document.write(Pilihan);
    if(Pilihan == "persegiPanjang"){
        var panjang = prompt('masukkan nilai alas');
        var tinggi = prompt('masukkan nilai tinggi');
        var panjangInt = parseInt(panjang);
        var tinggiInt = parseInt(tinggi);

        var luas = (panjangInt * tinggiInt);
        alert(luas);

            var konfirmasi = confirm("Apakah ingin diulang kembali ?");
            if(konfirmasi == true){
            hitungLuas();  
        }else{
            alert("Bingung? [Coba Lagi] ");
        }
    }
}

hitungLuas();

function luasLingkaran(jari){
    var pi = 22/7;
    alert(pi * jari * jari)
    var konfirmasi = confirm("Apakah ingin di Ulang kembali ?");
    if(konfirmasi == true){
        var piPrompt = prompt("masukkan pi");
        var jariPrompt = prompt("masukkan jari");
        var piPrompt = parseInt(piPrompt);
        var jariPrompt = parseInt(jariPrompt);

        luasLingkaran(piPrompt, jariPrompt);
    } else {
        alert("Finish")
    }
}

var piPrompt = prompt("masukkan pi");
var jariPrompt = prompt("masukkan jari");
var piPrompt = parseInt(piPrompt);
var jariPrompt = parseInt(jariPrompt);

luasLingkaran(piPrompt, jariPrompt);









