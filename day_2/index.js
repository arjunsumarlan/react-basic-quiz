/**
 * 
 * ==============>
 *  SOAL NO 1
 * ==============>
 * 
 * Jelaskan istilah dari this di JavaScript!
 * 
 */

/**
 * 
 * SOLUTION
 * 
 * tonton video yang diberikan di artikel
 * 
 */























/**
 * 
 * =============>
 * SOAL NO 2
 * =============>
 * 
 * Ubahlah beberapa function dibawah ini ke bentuk arrow function
 * 
 */

function getNamaLengkap(namaDepan, namaBelakang) {
    return `${namaDepan} ${namaBelakang}`;
}

function getNamaDepan(namaLengkap) {
    return namaLengkap.split(' ')[0];
}

function consoleHai() {
    console.log('hai');
}


/**
 * 
 * SOLUTION
 * 
 */

const getNamaLengkap = (namaDepan, namaBelakang) => `${namaDepan} ${namaBelakang}`;

const getNamaDepan = (namaLengkap) => namaLengkap.split(' ')[0];

const consoleHai = () => console.log('hai');





















/**
 * 
 * =============>
 * SOAL NO 3
 * =============>
 * 
 * Di bawah ini, jika kita memanggil fungsi getName yang ada di object sebuahObject, 
 * maka kita berhasil mendapatkan outputnya. Namun, jika kita memanggil fungsi getName 
 * yang ada di object sebuahObjectLain, maka kita akan mendapatkan output undefined. 
 * Apa yang salah dari object sebuahObjectLain ? dan bagaimana cara memperbaikinya ? 
 * Jelaskan!
 * 
 */

const sebuahObject = {
    name: 'Bejo Jhonson',
    getName() {
        return this.name;
    }
}

const sebuahObjectLain = {
    name: 'Bejo Jhonson',
    getName: () => this.name
}


/**
 * SOLUTION
 * 
 * Di ECMAScript 2015 spec, mengatakan bahwa "Any reference to arguments, 
 * super, this, or new.target within an ArrowFunction must resolve to a binding 
 * in a lexically enclosing environment. Typically this will be the Function Environment 
 * of an immediately enclosing function."
 * 
 * Dimana, Arrow function tidak bisa mendapatkan reference "this" sehingga hasilnya akan undefined.
 * 
 */






















/**
 * 
 * =============>
 * SOAL NO 4
 * =============>
 * 
 * Dapatkah code dibawah ini berjalan dengan benar ? Jelaskan apa yang terjadi!
 * 
 */

const profil = {
    namaDepan: 'Bejo',
    namaBelakang: 'Jhonson',
    getName() {
        this.name = `${this.namaDepan} ${this.namaBelakang}`;
        return this.name;
    }
}

/**
 * SOLUTION
 *
 * Karena "this.name" itu artinya object profil akan ditambahkan properti atau
 * elemen baru yaitu name dengan value yang didefinisikan di fungsi getName
 * sehingga nilai dari "this.name" tidak undefined.
 *
 */