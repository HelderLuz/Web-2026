// Faça uma página HTML com um campo de texto, um botão e um parágrafo. Ao clicar no botão, o texto do campo de texto deve ser apresentado no parágrafo.

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const numeros = document.querySelectorAll('input')
    
    let soma = 0
    for (const numero of numeros) {
        console.log(numero.valueAsNumber)
        soma += numero.valueAsNumber
        
    }
    const paragrafo = document.querySelector('#resultado')
    paragrafo.textContent = `Resultado: ${soma}`
})