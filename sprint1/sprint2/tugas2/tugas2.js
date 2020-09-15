
function kalkulator() {
    var ketik = prompt("Pilih + , * , / , -")

    if (ketik == "+"){
        var nilai1 = parseInt(prompt('masukkan nilai1'))
        var nilai2 = parseInt(prompt('masukkan nilai2'))

        var tambah = nilai1 + nilai2
        alert(tambah)

        var konfirmasi = confirm("apakah ingin di Ulang kembali?")
        if (konfirmasi == true) {
            kalkulator()
        }else {
            alert("bertema kasihlah kepada allah")
        }
    }
    function kalkulator() {
        var ketik = prompt("Pilih + , * , / , -")

        if(ketik == "*"){
            var nilai1 = parseInt(prompt('masukkan nilai1'))
            var nilai2 = parseInt(prompt('masukkan nilai2'))

            var kali  = nilai1 * nilai2
            alert (kali) 

                var konfirmasi = confirm("apakah ingin di Ulang kembali?")
                if (konfirmasi == true){
                    kalkulator()
                }else {
                    alert("terima kasih ya allah")
                }
            }
            function kalkulator() {
                var ketik = prompt("Pilih + , * , / , -")

                if(ketik == "/"){
                    var nilai1 = parseInt(prompt('masukkan nilai1'))
                    var nilai2 = parseInt(prompt('masukkan nilai2'))

                    var bagi = nilai1 / nilai2
                    alert(bagi)

                    var konfirmasi = confirm("apakah ingin di Ulang kembali?")
                    if (konfirmasi == true){
                        kalkulator()
                    }else {
                        alert("me")
                    }
                }   function kalkulator(){
                    var ketik = prompt("Pilih + , * , / , -")
    
                    if (ketik == "-"){
                        var nilai1 = parseInt(prompt('masukkan nilai1'))
                        var nilai2 = parseInt(prompt('masukkan nilai2'))
    
                        var kurang = nilai1 - nilai2
                        alert(kurang);
    
                        var konfirmasi = confirm("apakah ingin di Ulang kembali?")
                        if (konfirmasi == true){
                            kalkulator()
                        }else {
                            alert("terima kasih")
                        }
                    }
                }
            }
        }
    
}
kalkulator()