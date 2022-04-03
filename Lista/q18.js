console.log("Promises: ")
console.log("São objetos usados para executar funções assíncronas")
console.log("Uma promisse guarda um valor que pode estar disponível agora, no futuro ou nunca")


const fs = require('fs');

function readFile () {
  return new Promise(function (resolve, reject) {
    fs.readFile('./1.txt', function(error, data) {
      resolve(parseInt(data));
    });
  })
}

readFile().then((data) => {
  console.log(data);
});