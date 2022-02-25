function areaCirc(raio) {
  const pi = 3.14
  return pi * (raio*raio)
}

function perimetroCirc(raio) {
  const pi = 3.14
  return 2 * pi * raio
}

function calcula(e) {
  e.preventDefault()

  let raio = document.myForm.raioInput.value
  let areaCircVar = areaCirc(raio)
  let perimetroCircVar = perimetroCirc(raio)

  let getInputArea = document.getElementById('areaInput')
  getInputArea.setAttribute('value', areaCircVar)

  let getInputPeri = document.getElementById('circInput')
  getInputPeri.setAttribute('value', perimetroCircVar)
}