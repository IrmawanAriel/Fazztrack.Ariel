// 1. `pop()`: Mengambil dan menghapus item terakhir dalam daftar.
// 2. `shift()`: Mengambil dan menghapus item pertama dalam daftar.
// 3. `unshift()`: Menambahkan item ke awal daftar dan memberi tahu berapa banyak item sekarang.
// 4. `splice()`: Mengubah daftar dengan menghapus, mengganti, atau menambahkan item.
// 5. `slice()`: Membuat salinan bagian dari daftar.
// 6. `filter()`: Membuat daftar baru dengan item yang memenuhi syarat tertentu.
// 7. `reduce()`: Menggunakan semua item dalam daftar untuk menghasilkan satu hasil.
// 8. `concat()`: Menggabungkan dua atau lebih daftar menjadi satu.
// 9. `indexOf()`: Memberi tahu di mana item dapat ditemukan dalam daftar, atau -1 jika tidak ada.
// 10. `forEach()`: Melakukan sesuatu untuk setiap item dalam daftar.

// Contoh array
let arr = [1, 2, 3, 4, 5];

// 1. pop()
let lastElement = arr.pop();
console.log(lastElement); // Output: 5

// 2. shift()
let firstElement = arr.shift();
console.log(arr); // Output: 1

// 3. unshift()
let newLength = arr.unshift(1);
console.log(newLength); // Output: 4

// 4. splice()
let removed = arr.splice(2, 1, ' dua setengah' );// array.splice(index, Jumlah yang di hapus, item baru)
console.log(arr); // Output: [1, 2, 'dua setengah', 4]

// 5. slice()
console.log (arr + ' ini array sebelum') 
let sliceVar = arr.slice(1, 3);
console.log(sliceVar+ ' in slice var'); // Output: [2, 'dua setengah']

// 6. filter()
let filtered = arr.filter(num => num > 1);
console.log(filtered); // Output: ['dua setengah', 4]

// 7. reduce()
let sum = arr.reduce((total, value) => total + value);
console.log(`INI ADALAH REDUCE ${sum}`)

// 8. concat()
let arr2 = [5, 6, 7];
let arrCombined = arr.concat(arr2);
console.log(arrCombined); // Output: [1, 2, 'dua setengah', 4, 5, 6, 7]

// 9. indexOf()
let index = arr.indexOf('dua setengah');
console.log(index); // Output: 2

// 10. forEach()
arr.forEach((value, index) => {
  console.log(`Element ${value} berada di indeks ${index}`);
});