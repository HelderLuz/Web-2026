// Faça uma página HTML com um campo de texto, um botão e um parágrafo. Ao clicar no botão, o texto do campo de texto deve ser apresentado no parágrafo.

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const texto = form.querySelector('input').value

    const paragrafo = document.querySelector('#resultado')
    paragrafo.textContent = texto
})