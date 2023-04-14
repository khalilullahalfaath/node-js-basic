// TODO: tampilkan teks pada notes.txt pada console.
// Asynchronous
const fs = require('fs');
const path = require('path')
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

path1 = path.resolve(__dirname, 'notes.txt');
 
fs.readFile(path1, 'UTF-8', fileReadCallback);

// Synchronous 
// const path = require('path');
// const fs = require('fs');

// path1 = path.resolve(__dirname, 'notes.txt');
// console.log(path1)

// const data = fs.readFileSync(path1, 'UTF-8');

// console.log(data);