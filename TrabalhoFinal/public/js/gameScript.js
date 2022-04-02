(function () {

  const FPS = 50
  const TAMX = 600
  const TAMY = 800
  const PROB_ALTA = 3
  const PROB_MEDIA = 2
  const PROB_BAIXA = 1

  let montanha
  let skier
  let velAumentada = false
  let jogadorVivo = true
  let vidas = 3

  const arvores = []
  const arvoresGrandes = []
  const arbustos = []
  const rochas = []
  const tocos = []
  const cachorros = []
  const cogumelos = []

  function init() {
    montanha = new Montanha()
    skier = new Skier()
    setInterval(run, 1000/FPS)
    velocidadeCalcula(1000)
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'A' || e.key === 'a') skier.mudarDirecao(-1)
    else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') skier.mudarDirecao(+1);
    else if (e.key === 'f' || e.key === 'F') {
      if (velAumentada === false) {
        velAumentada = true
        setInterval(run, 1500/FPS)
        velocidadeCalcula(1500)
      }
    }
  })

  class Montanha {
    constructor() {
      this.element = document.getElementById('montanha');
      this.element.style.width = `${TAMX}px`;
      this.element.style.height = `${TAMY}px`;
    }
  }

  class Skier {
    constructor() {
      this.element = document.getElementById('skier');
      this.direcoes = ['para-esquerda', 'para-frente', 'para-direita'];
      this.direcao = 1;
      this.element.className = this.direcoes[this.direcao];
      this.element.style.top = '30px';
      this.element.style.left = parseInt(TAMX / 2) - 8 + 'px';
      let vidasValor = document.getElementById('vidaValor')
      vidasValor.innerHTML = String(vidas)
    }
    mudarDirecao(giro) {
      if (this.direcao + giro >= 0 && this.direcao + giro <= 3) {
        this.direcao += giro;
        this.element.className = this.direcoes[this.direcao];
      }
    }
    caiu() {
      this.element.className = 'caiu'
      setTimeout(() => {
        this.element.className = 'para-frente'
      }, 1000)
    }
    morreu() {
      this.element.className = 'morreu'
      jogadorVivo = false
      velocidadeCalcula(0)
    }
    andar() {
      if (this.direcao === 0) {
        if (parseInt(this.element.style.left) > 0) {
          this.element.style.left = parseInt(this.element.style.left) - 1 + 'px';
        }
      }
      else if (this.direcao === 2) {
        if (parseInt(this.element.style.left) < 583) {
          this.element.style.left = parseInt(this.element.style.left) + 1 + 'px';
        }
      }
    }
  }

  class Arvore {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arvore';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class ArvoreGrande {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arvoreGrande';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class ArbustoChamas {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arbustoChamas';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class Toco {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'tocoArvore';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class Rocha {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'rocha';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class Cachorro {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'cachorro';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class Cogumelo {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'cogumelo';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  function colisao(a, valor, dif) {
    if (parseInt(skier.element.style.top) === parseInt(a.element.style.top)) {
      let diferenca
      if (parseInt(skier.element.style.left) > parseInt(a.element.style.left)) {
        diferenca = parseInt(skier.element.style.left) - parseInt(a.element.style.left)
      } else {
        diferenca = parseInt(a.element.style.left) - parseInt(skier.element.style.left)
      }
      if (diferenca <= dif && diferenca >= 0) {
        if (vidas >= 1) {
          if (valor === -1) skier.caiu()
          vidas += valor
          if (vidas < 0) {
            let vidasValor = document.getElementById('vidaValor')
            vidasValor.innerHTML = 'SEM VIDAS'
          } else {
            let vidasValor = document.getElementById('vidaValor')
            vidasValor.innerHTML = String(vidas)
          }
        } else {
          skier.morreu()
        }
      }
    }
  }

  function distanciaCalcula(valor) {
    let distancia = document.getElementById('distanciaValor')
    let somaMetros = String((Number(distancia.innerHTML) + valor).toFixed(2))
    distancia.innerHTML = somaMetros
  }

  function velocidadeCalcula(valor) {
    let velocidade = document.getElementById('velocidadeValor')
    let somaVel = String(Number(valor / FPS))
    velocidade.innerHTML = somaVel
  }

  function run() {
    const randomAlta = Math.random() * 80;
    const randomMedia = Math.random() * 100;
    const randomBaixa = Math.random() * 1000;
    const randomMuitoBaixa = Math.random() * 1400;
    if (jogadorVivo) {
      distanciaCalcula(0.01)
      if (randomMedia <= PROB_MEDIA) {
        const arvore = new Arvore()
        const arvoreGrande = new ArvoreGrande()
        arvores.push(arvore)
        arvoresGrandes.push(arvoreGrande)
      }

      if (randomBaixa <= PROB_BAIXA) {
        const arbustoChamas = new ArbustoChamas()
        const cachorro = new Cachorro()
        const toco = new Toco()
        const rocha = new Rocha()
        arbustos.push(arbustoChamas)
        rochas.push(rocha)
        tocos.push(toco)
        cachorros.push(cachorro)
      }

      if (randomMuitoBaixa <= PROB_BAIXA) {
        const cogumelo = new Cogumelo()
        cogumelos.push(cogumelo)
      }

      arvores.forEach(a => {
        a.element.style.top = parseInt(a.element.style.top) - 1 + 'px'
        colisao(a, -1, 18)
      })
      arvoresGrandes.forEach(a => {
        a.element.style.top = parseInt(a.element.style.top) - 1 + 'px'
        colisao(a, -1, 18)
      })
      arbustos.forEach(a => {
        a.element.style.top = parseInt(a.element.style.top) - 1 + 'px'
        colisao(a, -1, 18)
      })
      rochas.forEach(a => {
        a.element.style.top = parseInt(a.element.style.top) - 1 + 'px'
        colisao(a, -1, 18)
      })
      tocos.forEach(a => {
        a.element.style.top = parseInt(a.element.style.top) - 1 + 'px'
        colisao(a, -1, 18)
      })
      cachorros.forEach(a => {
        a.element.style.top = parseInt(a.element.style.top) - 1 + 'px'
        colisao(a, -1, 18)
      })
      cogumelos.forEach(a => {
        a.element.style.top = parseInt(a.element.style.top) - 1 + 'px'
        colisao(a, +1, 11)
      })
      skier.andar()
    } else {
      skier.morreu()
    }
  }

  init();

})()