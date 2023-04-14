/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const path = require('path');

path_read = path.resolve(__dirname,'input.txt');
path_write = path.resolve(__dirname,'output.txt');
 
const readableStream = fs.createReadStream(path_read, {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(path_write);

 
readableStream.on('data', (chunk) => {
    try {
        writableStream.write(chunk);
        writableStream.write("\n");
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});


// writableStream.write(data);
// writableStream.end();
 
readableStream.on('end', () => {
    console.log('Done');
    writableStream.end();
});

writableStream.on('finish', () => {
    console.log('Write completed');
});

writableStream.on('error', (error) => {
    console.error('Error writing to output.txt', error);
});