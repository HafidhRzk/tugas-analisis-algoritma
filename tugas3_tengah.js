const labelName =
    '+==============================+\n' +
    '|            Tugas 3           |\n' +
    '|==============================|\n' +
    '| Nama: Hafidh Rizky Putra     |\n' +
    '| NIM: 2411600410              |\n' +
    '|==============================|\n' +
    '| Program Untuk mencetak nilai |\n' +
    '| tengah dari tiga angka yang  |\n' +
    '| diinputkan                   |\n' +
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
        const hasDuplicates = new Set(numbers).size !== numbers.length;

        if (hasDuplicates) {
            console.log('Input tidak valid. Angka yang diinputkan tidak boleh sama.');
            askForNumbers();
            return;
        }

        let midNumb = 0

        for (let i = 0; i < numbers.length; i++) {
            if (i === 0) {
                const checkVal = numbers[i] < numbers[i + 1] && numbers[i] > numbers[i + 2] || numbers[i] > numbers[i + 1] && numbers[i] < numbers[i + 2]
                if (checkVal) {
                    midNumb = numbers[i]
                }
            } else if (i === 1) {
                const checkVal = numbers[i] < numbers[i + 1] && numbers[i] > numbers[i - 1] || numbers[i] > numbers[i + 1] && numbers[i] < numbers[i - 1]
                if (checkVal) {
                    midNumb = numbers[i]
                }
            } else if (i === 2) {
                const checkVal = numbers[i] < numbers[i - 2] && numbers[i] > numbers[i - 1] || numbers[i] > numbers[i - 2] && numbers[i] < numbers[i - 1]
                if (checkVal) {
                    midNumb = numbers[i]
                }
            }
        }

        console.log('Nilai tengah:', midNumb)

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