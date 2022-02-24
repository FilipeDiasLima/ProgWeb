function counter(x) {
  let i = x
  function incremento() {
    return i += 1
  }
  return incremento
}

let incrementar = counter(1);
console.log('Primeira chamada ' + incrementar());
console.log('Segunda chamada ' + incrementar());
console.log('Terceira chamada ' + incrementar());