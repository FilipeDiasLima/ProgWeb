function calcula(e) {
  e.preventDefault()

  let bar1 = document.myForm.barras1.value
  let bar2 = document.myForm.barras2.value
  let bar3 = document.myForm.barras3.value
  let bar4 = document.myForm.barras4.value
  let bar5 = document.myForm.barras5.value
  let largura = document.myForm.largura.value
  
  document.getElementById('bar1').style.setProperty('height', bar1 + 'px')
  document.getElementById('bar1').style.setProperty('width', largura + 'px')
  document.getElementById('bar2').style.setProperty('height', bar2 + 'px')
  document.getElementById('bar2').style.setProperty('width', largura + 'px')
  document.getElementById('bar3').style.setProperty('height', bar3 + 'px')
  document.getElementById('bar3').style.setProperty('width', largura + 'px')
  document.getElementById('bar4').style.setProperty('height', bar4 + 'px')
  document.getElementById('bar4').style.setProperty('width', largura + 'px')
  document.getElementById('bar5').style.setProperty('height', bar5 + 'px')
  document.getElementById('bar5').style.setProperty('width', largura + 'px')
}