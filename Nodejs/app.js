const fs = require('fs')
const http = require('http')

// ----------------------------------------

// ASYNC TASK (Create File)

// fs.writeFile('text.txt' , 'Writefile',() =>{
//     console.log('Writefile created')
// })

// ----------------------------------------


// SYNC TASK (Create File)

// fs.writeFileSync('text01.txt','WriteFileSync' , () =>{
//     console.log('WritefileSync Created')
// })

// ----------------------------------------


// ASYNC TASK (Read File)

// const res = fs.readFile('text.txt' , 'utf-8')
// fs.readFile('text.txt' , 'utf-8' , (res) => {
//     console.log(res)
// })

// ----------------------------------------


// SYNC TASK (Read File)

// const res = fs.readFileSync('text.txt' , 'utf-8')
// fs.readFile('text.txt' , 'utf-8' , (res) => {
//     console.log(res)
// })

// ------------------------------------

// ----- Server Creation  -----

// const server = http.createServer((request, response) => {
//   const url = request.url;
//   response.end("Server is running now!");
// });

// ----- Listening Port 8000 -----

// server.listen(5000);
