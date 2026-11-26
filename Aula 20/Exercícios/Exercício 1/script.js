// 2.Crie uma página com 2 campos de texto. Um campo de texto é para inserir a chave e o outro para inserir o valor. Adicione dois botões:
// - Um botão para adicionar o par chave-valor ao localStorage.
// - O segundo botão deve remover o par chave-valor do localStorage com base na chave inserida no campo de texto.

const form = document.querySelector('form')
const botaoRemover = document.querySelector('#remover')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const chave = form.elements.chave.value
    const valor = form.elements.valor.value

    localStorage.setItem(chave, valor)
})

botaoRemover.addEventListener('click', (e) => {
    e.preventDefault()

    const chave = form.elements.chave.value
    localStorage.removeItem(chave)
})