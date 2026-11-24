document.querySelector('form').addEventListener('click', (e) => {
    e.preventDefault()

    const texto = document.querySelector('input')
    const div = document.querySelector('div')
    const paragrafo = document.createElement('p')

    paragrafo.textContent = texto.value
    div.append(paragrafo)
})