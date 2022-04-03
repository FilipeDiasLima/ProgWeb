const fs = require('fs');
fs.readFile('semana.txt', 'utf8', (err, conteudo) => {
  console.log(conteudo);
});
console.log("continua...");
console.log("Event Loop: ")
console.log("Uma thread responde por todas as requisições dos usuários. Operações de I/O não bloqueantes provêem uma função de callback que é chamada quando a operação é completada.")