/**
 *
 * ==============>
 *  SOAL NO 1
 * ==============>
 *
 * Gabungkan atau merge dua array berikut ini ke dalam satu variabel bernama arrayGabung. 
 * Buat beberapa strategi yang berbeda untuk menggabungkannya. 
 * Urutkan dari yang lebih efesien! [bukan hanya waktu, tetapi semua segi apapun]
 * Mengapa bisa begitu ?
 *
 */

const arraySatu = [1, 2, 3, 4];
const arrayDua = [5, 6, 7, 8];
const arrayTiga = [9, 10, 11, 12];
const arrayEmpat = [13, 14, 15, 16];

/**
 *
 * SOLUTION
 *
 * Yang paling efesien adalah concat
 * 
 */

console.time('merging array');

// Solusi no 1.

// const arrayGabung = [...arraySatu, ...arrayDua, ...arrayTiga, ...arrayEmpat];

// Solusi no 2.

const arrayGabung = arraySatu.concat(arrayDua).concat(arrayTiga).concat(arrayEmpat);

// Solusi no 3.

// arrayDua.forEach(item => arraySatu.push(item));
// const arrayGabung = arraySatu;

console.timeEnd('merging array');





















/**
 *
 * =============>
 * SOAL NO 2
 * =============>
 * 
 * Berdasarkan materi dari video, gunakan Object Destructuring 
 * untuk mengambil semua properti di dalam object berikut ini 
 * dengan diberi alias huruf depannya.
 *
 */

const objectBebas = {
    aspal: 'hitam',
    roket: 'meluncur',
    joker: 'villain',
    unta: 'arab',
    ninja: 'hatori'
}

/**
 *
 * SOLUTION
 *
 */

const { aspal: a, roket: r, joker: j, unta: u, ninja: n } = objectBebas;






















/**
 *
 * =============>
 * SOAL NO 3
 * =============>
 *
 * Filter array berikut untuk isAllowed yang bernilai true. 
 * Lalu tampung ke variabel bejoJuaraNasional
 *
 */

const unfilteredArray = [
    {
        name: 'Bejo',
        isAllowed: true
    },
    {
        name: 'Jhonson',
        isAllowed: false
    },
    {
        name: 'Juara',
        isAllowed: true
    },
    {
        name: 'Panco',
        isAllowed: false
    },
    {
        name: 'Nasional',
        isAllowed: true
    }
]

/**
 * SOLUTION
 *
 */

unfilteredArray.filter(item => item.isAllowed);