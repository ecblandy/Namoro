const buttonNo = document.getElementById('no')

buttonNo.addEventListener('mouseover', () => {
    const larguraJanela = window.innerWidth
    const alturaJanela = window.innerHeight

    let maxX = larguraJanela - buttonNo.offsetWidth
    let maxY = alturaJanela - buttonNo.offsetHeight

    let aleatorioX = Math.floor(Math.random() * maxX)
    let aleatorioY = Math.floor(Math.random() * maxY)

    buttonNo.style.left = aleatorioX + 'px'
    buttonNo.style.top = aleatorioY + 'px'
})