for(let i=1;i<11;++i) {
  document.write(`<div><table border="1">`)
  document.write(`
    <thead>
      <tr>
        <th colspan="2">
          Produtos de ${i}
        </th>
      </tr>
    </thead>
  `)
  for(let j=1;j<11;++j) {
    let resultado = i*j
    document.write(`
      <tbody>
        <tr>
          <td>${i}x${j}</td>
          <td>${resultado}</td>
        </tr>
      </tbody>
    `)
  }
  document.write(`</table></div>`)
}