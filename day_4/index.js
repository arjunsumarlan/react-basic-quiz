/**
 *
 * ==============>
 *  SOAL NO 1
 * ==============>
 *
 * Ubahlah object-object berikut menjadi class. Dan setelah itu, 
 * untuk class Benda, buat object yang instansiasinya dari class Benda, 
 * dengan properti object persis dengan halGhaibLain. 
 * Dan juga buat class baru yang inherit dengan class Benda, 
 * dengan menambahkan property ‘dasar’ dan juga method actionLain 
 * yang memunculkan console log ‘Ini action lain’.
 *
 */

const makhlukGhaib = {
    nama: 'Pocong',
    kekuatan: 'Terbang',
    attack() {
        console.log('Senyum');
    }
};

const benda = {
    nama: 'kompor',
    bahan: 'besi',
    actionName: 'Memanaskan',
    action() {
        console.log(this.actionName);
    }
};

const halGhaibLain = {
    nama: 'cinta',
    bahan: 'perjuangan bersama',
    actionName: 'Membara',
    action() {
        console.log(this.actionName);
    }
};

/**
 *
 * SOLUTION
 *
 */

class MakhlukGhaib {
    constructor(nama, kekuatan) {
        this.nama = nama;
        this.kekuatan = kekuatan;
    }

    attack() {
        console.log('Senyum');
    }
}

class Benda {
    constructor(nama, bahan, actionName) {
        this.nama = nama;
        this.bahan = bahan;
        this.actionName = actionName
    }

    action() {
        console.log(this.actionName);
    }
}

const halGhaibLain = new Benda('cinta', 'perjuangan bersama', 'Membara');

class BendaLain extends Benda {
    constructor(nama, bahan, actionName, dasar) {
        super(nama, bahan, actionName);
        this.dasar = dasar;
    }

    actionLain() {
        console.log('Ini action lain.')
    }
}
























/**
 *
 * =============>
 * SOAL NO 2
 * =============>
 *
 * Import Named export berikut ini dengan alias AliasNamed.
 *
 */

// Anda sedang berada di satu directory dengan nama file contoh.js
export class NamedExport {
    constructor(test) {
        this.test = test;
    }
}


/**
 *
 * SOLUTION
 *
 */

import { NamedExport as AliasNamed } from './contoh';






















/**
 *
 * =============>
 * SOAL NO 3
 * =============>
 *
 * Dapatkah kita mengimport suatu module dari luar project directory ?
 * Lalu apa pengaruhnya untuk saat production ?
 *
 */




/**
 * SOLUTION
 *
 * Bisa, namun saat production, kita tidak akan menemukan directory tersebut karena
 * sudah beda environtment
 * 
 */






















/**
 *
 * =============>
 * SOAL NO 4
 * =============>
 *
 * Pada code di bawah ini, lakukan export suatu function tersebut 
 * menjadi export default dengan tanpa mengubah sedikit pun code pada function tersebut 
 * (note: Anda dapat menambahkan/mengubah code diatas atau dibawah function, 
 * namun bukan pada function, meski hanya mengubah nama function).
 * Sebagai catatan, hal ini sering terjadi pada saat di dunia kerja nanti.
 *
 */

function helloCat() {
    alert('Hello Cat !!');
}

/**
 * SOLUTION
 *
 */

export { helloCat as default };

































/**
 *
 * =============>
 * SOAL NO 4
 * =============>
 *
 * Berikut ini terdapat sebuah module yang di-export dengan default. 
 * Lakukan import pada module ini dengan menjadikannya named pada proses import nya.
 * Catatan: Anda sedang berada di directory yang sama dengan file user.js
 *
 */

// folder berada di user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

/**
 * SOLUTION
 *
 */

import { default as User } from './user.js';