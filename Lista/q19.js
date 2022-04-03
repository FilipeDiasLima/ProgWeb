const fs = require('fs');

function readFile() {
  return new Promise(function (resolve, reject) {
    fs.readFile('./1.txt', function(error, data) {
      resolve(parseInt(data));
    });
  })
}

async function executar() {
  await readFile().then((data) => {
    console.log(data);
  });
}

console.log('primeiro');
executar()
console.log('segundo');