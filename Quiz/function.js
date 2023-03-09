/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Tulis kode di bawah ini
function minimal(a, b) {
    if ((a <= b)) {
      return a;
    } else {
      return b;
    }
}

const findIndex = (myArray, myNumber) => {
    let i = 0
    let arrayLength = myArray.length
    for (const arrayItem of myArray) {
      if (arrayItem === myNumber) {
        return i;
      } else if ((arrayItem !== myNumber) && ((i + 1) === arrayLength)) {
        i = -1;
      } else {
        i++;
      }
    }
    return i
  }

console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log(findIndex([1, 2, 3, 4, 5], 6));
console.log(findIndex([1, 2, 3, 4, 5], 5));