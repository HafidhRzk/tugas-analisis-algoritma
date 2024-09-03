const labelName =
    '+==============================+\n' +
    '|            Tugas 3           |\n' +
    '|==============================|\n' +
    '| Nama: Hafidh Rizky Putra     |\n' +
    '| NIM: 2411600410              |\n' +
    '|==============================|\n' +
    '| Program Untuk mencetak jenis |\n' +
    '| Segitiga dari tiga panjang   |\n' +
    '| sisi yang diinputkan         |\n' +
    '+==============================+'

console.log(labelName)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForNumbers() {
    rl.question('Input 3 angka: ', (input) => {
        const numbers = input.split(' ').map(Number);

        let trianglesType = 'SEMBARANG'

        if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {
            trianglesType = 'SAMA SISI';
        } else if (numbers[0] === numbers[1] || numbers[1] === numbers[2] || numbers[0] === numbers[2]) {
            trianglesType = 'SAMA KAKI';
        }

        console.log('Sisi 1: ' + numbers[0]);
        console.log('Sisi 2: ' + numbers[1]);
        console.log('Sisi 3: ' + numbers[2]);
        console.log(trianglesType);

        rl.question('Lanjut (y/n)? ', (input) => {
            if (input.toLowerCase() === 'y') {
                askForNumbers()
            } else {
                console.log('Terimakasih, sampai jumpa lagi!');
                rl.close()
            }
        })
    });
}

askForNumbers();