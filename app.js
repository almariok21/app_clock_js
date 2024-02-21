window.addEventListener('load', () => {
  const horaHTML = document.querySelector('#horas')
  const minutoHTML = document.querySelector('#minutos')
  const segundoHTML = document.querySelector('#segundos')

  const monstrarHora = () => {
    const fecha = new Date()
    const hora = fecha.getHours()
    const minuto = fecha.getMinutes()
    const segundo = fecha.getSeconds()

    // Rellena la cadena repetida
    horaHTML.textContent = String(hora).padStart(2, '0')
    minutoHTML.textContent = String(minuto).padStart(2, '0')
    segundoHTML.textContent = String(segundo).padStart(2, '0')

    setTimeout(monstrarHora, 1000)
  }
  monstrarHora()
})
