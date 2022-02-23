function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getClick (clicked_id) {
  let getImagePlayer = document.getElementById('imageChoicePlayer')
  let getImagePc = document.getElementById('imageChoicePc')
  let getPara = document.getElementById('paragraph')

  if (getImagePlayer) {
    getImagePlayer.remove()
  }
  if (getImagePc) {
    getImagePc.remove()
  }
  if (getPara) {
    getPara.remove()
  }
  
  let image = document.createElement('img')
  image.setAttribute('id', 'imageChoicePlayer')
  
  if (Number(clicked_id) === 0) {
    image.src = 'assets/pedra.png'
  } else if (Number(clicked_id) === 1) {
    image.src = 'assets/papel.png'
  } else if (Number(clicked_id) === 2) {
    image.src = 'assets/tesoura.png'
  }

  image.setAttribute('width', '300px')
  document.getElementById('playerSide').appendChild(image)

  let pcChoice
  for(let i=0;i<10;++i) {
    pcChoice = getRandomInt(0, 3)
  }
  console.log(pcChoice)

  let imagePC = document.createElement('img')
  imagePC.setAttribute('id', 'imageChoicePc')
  
  if (pcChoice === 0) {
    imagePC.src = 'assets/pedra.png'
  } else if (pcChoice === 1) {
    imagePC.src = 'assets/papel.png'
  } else if (pcChoice === 2) {
    imagePC.src = 'assets/tesoura.png'
  }

  imagePC.setAttribute('width', '300px')
  document.getElementById('pcSide').appendChild(imagePC)

  if (Number(clicked_id) === pcChoice) {
    let p = document.createElement('p')
    let text = document.createTextNode('Empate')
    p.setAttribute('id', 'paragraph')
    p.appendChild(text)
    document.getElementById('result').appendChild(p)
  }
  if (Number(clicked_id) === 0 && pcChoice === 1) {
    let p = document.createElement('p')
    let text = document.createTextNode(' Vitória do Computador')
    p.setAttribute('id', 'paragraph')
    p.appendChild(text)
    document.getElementById('result').appendChild(p)
  }
  if (Number(clicked_id) === 0 && pcChoice === 2) {
    let p = document.createElement('p')
    let text = document.createTextNode(' Vitória do Jogador')
    p.setAttribute('id', 'paragraph')
    p.appendChild(text)
    document.getElementById('result').appendChild(p)
  }
  if (Number(clicked_id) === 1 && pcChoice === 0) {
    let p = document.createElement('p')
    let text = document.createTextNode(' Vitória do Jogador')
    p.setAttribute('id', 'paragraph')
    p.appendChild(text)
    document.getElementById('result').appendChild(p)
  }
  if (Number(clicked_id) === 1 && pcChoice === 2) {
    let p = document.createElement('p')
    let text = document.createTextNode(' Vitória do Computador')
    p.setAttribute('id', 'paragraph')
    p.appendChild(text)
    document.getElementById('result').appendChild(p)
  }
  if (Number(clicked_id) === 2 && pcChoice === 0) {
    let p = document.createElement('p')
    let text = document.createTextNode(' Vitória do Computador')
    p.setAttribute('id', 'paragraph')
    p.appendChild(text)
    document.getElementById('result').appendChild(p)
  }
  if (Number(clicked_id) === 2 && pcChoice === 1) {
    let p = document.createElement('p')
    let text = document.createTextNode(' Vitória do Jogador')
    p.setAttribute('id', 'paragraph')
    p.appendChild(text)
    document.getElementById('result').appendChild(p)
  }
}