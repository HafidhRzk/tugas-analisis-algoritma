let total = 0;
let angka;

let array = [];

for (let i = 0; i < 5; i++) {
    while (true) {
        let input = prompt(`Masukkan angka ke-${i + 1}:`);
        angka = parseFloat(input);

        if (!isNaN(angka)) {
            array.push(angka)
            total += angka;
            break;
        } else {
            alert('Input tidak valid. Masukkan angka yang benar.');
        }
    }
}

console.log(array.join(' + '));
console.log(`Total dari lima angka yang diinput adalah: ${total}`);
