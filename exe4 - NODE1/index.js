const fs = require('fs')
const http = require('http')
let output = ''
const server = http.createServer( async (req, res) => {
  process.argv.forEach((val, index) => {
    if(index === 2) {
      fs.readdir(String(val), (err, files) => {
        if (err) {
          return console.log(err)
        }
        files.forEach((arq) => {
          output += `<span>${arq}</span><br>`
        })
      })
    }
  })
  res.writeHead(200, {'content-type': 'text/html'})
  fs.createReadStream('index.html').pipe(res)
  res.end(output)
  output = ''
})

server.listen(3000)