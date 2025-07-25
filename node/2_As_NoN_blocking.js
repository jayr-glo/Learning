// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR! 💥');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//       })
//     });
//   });
// });
// console.log('Will read file!');



const fs = require('fs');

fs.readFile("./txt/start.txt", 'utf-8', (error, data) => {

    fs.readFile(`./txt/${data}.txt`, "utf-8", (error, data2) => {
        // console.log(data2);
        fs.readFile('./txt/append.txt', "utf8", (error, data3) => {
            //console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written 😁');
            })
        })

    });

})
console.log('Will read file!')