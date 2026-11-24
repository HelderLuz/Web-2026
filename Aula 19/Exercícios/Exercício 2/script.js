// 2. Faça uma página com 2 campos para número e um botão. Ao clicar no botão, os números devem ser somados e apresentados em uma nova estrutura na página. A cada clique um novo elemento deve ser adicionado, criando um histórico dos cálculos feitos.

const botaoAdd = document.querySelector('#adicionar')

botaoAdd.addEventListener('click', (e) => {
    e.preventDefault()

    const num1 = document.querySelector('#num1').valueAsNumber
    const num2 = document.querySelector('#num2').valueAsNumber

    let soma = num1 + num2

    const resultado = document.querySelector('#resultado')
    resultado.textContent = `Resultado: ${soma}`

    const paragrafo = document.createElement('p')
    paragrafo.textContent = `${num1} + ${num2} = ${soma}`
    const div = document.querySelector('#historico')
    div.prepend(paragrafo)
})