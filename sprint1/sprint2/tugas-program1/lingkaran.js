//luas Lingkaran

function luasLingkaran(jari){
    var pi = 22/7;
    alert(pi * jari * jari)
    var konfirmasi = confirm("Apakah ingin diulang kembali ?");
    if(konfirmasi == true){
        var piPrompt = prompt("masukkan pi");
        var jariPrompt = prompt("masukkan jari");

        var piPrompt = parseInt(piPrompt);
        var jariPrompt = parseInt(jariPrompt);

        luasLingkaran(piPromptInt, jariPromptInt);
    } else {
        alert("Finish")
    }
}

var piPrompt = prompt("masukkan pi");
var jariPrompt = prompt("masukkan jari");

var piPromptInt = parseInt(piPrompt);
var jariPrompt = parseInt(jariPrompt);

luasLingkaran(piPromptInt, jariPromptInt);