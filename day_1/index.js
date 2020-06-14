/**
 * 
 * ==============>
 *  SOAL NO 1
 * ==============>
 * 
 * Pada code di bawah ini terdapat sebuah object “sebuahObject” yang memiliki 
 * elemen sebuah fungsi, tuliskan code Anda untuk membuat console mengeluarkan 
 * log “Hai Dunia Kucing!!” dengan mengakses fungsi tersebut ? Jelaksan.
 * 
 */

const sebuahObject = {
    fungsi: () => {
        console.log('Hai Dunia Kucing!!');
    }
};

// SOLUTION
sebuahObject.fungsi();






















/**
 * 
 * =============>
 * SOAL NO 2
 * =============>
 * 
 * Perhatikan code dibawah ini.
 * 
 */

let sebuahVariabel = 'apple'
let sebuahVariabel = 'orange' // SyntaxError: Identifier 'sebuahVariabel' has already been declared
console.log(sebuahVariabel)

/**
 * 
 * Pada line kedua code diatas akan memunculkan error bahwa variabel “sebuahVariabel” 
 * sudah dideklarasikan dengan let, tidak dapat dideklarasikan kembali.
 * 
 */

var sebuahVariabel = 'apple'
var sebuahVariabel = 'orange'


/**
 * SOLUTION
 * 
 * var memiliki konsep yang disebut hoisting.
 * Ketika kamu mendeklarasikan variabel menggunakan var, maka pertama kali dia 
 * akan menginisialisasikan variabel tersebut dengan value undefined di scope paling atas.
 * Kurang lebih, code diatas bisa digantikan dengan code dibawah ini untuk memahaminya
 * 
 */

var sebuahVariabel = undefined // akan ditempatkan di scope teratas. Dalam kasus ini yaitu global scope.
sebuahVariabel = 'apple'
sebuahVariabel = 'orange'





















/**
 * 
 * =============>
 * SOAL NO 3
 * =============>
 * 
 * Jelaskan, jika memang const membuat sebuah variable tidak bisa di-assign kembali valuenya, 
 * kenapa pada code di bawah ini, masih tetap berlaku ? (hint: deep equal)
 * 
 */

const sebuahVariabel = {}
sebuahVariabel.color = 'red'


/**
 * SOLUTION
 * 
 * larangan pengubahan value pada variabel yang dideklarasikan dengan const tidak terjadi secara
 * deep equal, artinya kita bisa mengubah properti dari sebuahVariabel ini (yakni color), tetapi
 * kita tidak bisa mengubah value dari sebuahVariabel itu sendiri
 * 
 */






















/**
 * 
 * =============>
 * SOAL NO 4
 * =============>
 * 
 * Pada code dibawah ini, kenapa console memberikan output undefined ?
 * 
 */

var haloHalo = 1
var haloHaloBandung = function () {
    console.log(haloHalo)
    var haloHalo = 2
}
haloHaloBandung()

/**
 * SOLUTION
 *
 * Karena hoisting, local variabel haloHalo di scope function haloHaloBandung terdeklarasikan sebelum console.log()
 * dipanggil. Artinya local variable haloHalo akan di-passing sebagai argument ke console.log() alih-alih
 * global variabel haloHalo diluar function haloHaloBandung. Dan karena value tidak di-hoisting saat pendeklarasian
 * variable, maka alhasil outputnya akan undefined, bukan 2.
 *
 */