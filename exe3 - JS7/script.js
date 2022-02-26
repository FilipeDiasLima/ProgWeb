let cont = 1
function detectar(e) {
  if(cont < 8) {
    let x = e.clientX
    let y = e.clientY
    let ponto = document.createElement('div')
    ponto.setAttribute('id', 'ponto')
    ponto.style.top = y + 'px'
    ponto.style.left = x + 'px'
    
    document.getElementById('container').appendChild(ponto)
  }
  ++cont
}