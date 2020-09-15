//luas persegi panjang

function luasSegitiga(panjang = 0, tinggi = 0){
    alert(panjang * tinggi);
    var konfirmasi = confirm("Pusing ya.. [ coba lagi] ?");
    if(konfirmasi == true) {
        var panjangPrompt = prompt("masukkan panjang");
        var tinggiPrompt = prompt("masukkan tinggi");

        var panjangPromptInt = parseInt(panjangPrompt);
        var tinggiPromptInt = parseInt(tinggiPrompt);

        luasSegitiga(panjangPromptInt, tinggiPromptInt);
    } else {
        alert("Thank You Admin")
    }
}

        var panjangPrompt = prompt("masukkan panjang");
        var tinggiPrompt = prompt("masukkan tinggi");

        var panjangPromptInt = parseInt(panjangPrompt);
        var tinggiPromptInt = parseInt(tinggiPrompt);

        luasSegitiga(panjangPromptInt, tinggiPromptInt)

