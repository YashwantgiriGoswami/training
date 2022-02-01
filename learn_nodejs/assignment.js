var fs = require('fs');

// create a file demo.txt and writing the content.

fs.writeFile('demo.txt', 'Node.js is an open source server environment.', () => {
    console.log('file created and data written to it');
});


// append data to a file

fs.appendFile('demo.txt', 'how are yashwant', () => {
    console.log('data appended successfully');
});

// rename the demo.txt to final-demo.txt

fs.rename('demo.txt', 'final-demo.txt', () => {
    console.log('renamed successfully');
});

//delete the file final-demo.txt


fs.unlink('final-demo.txt', () => {
    console.log('deleted successfully');
});