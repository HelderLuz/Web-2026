const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)

    const dados = Object.fromEntries(formData.entries())
    console.log(dados)
    criarCard(dados)
})

function criarCard(dados) {
    const div = document.createElement('div')
    const button = document.createElement('button')
    const pNome = document.createElement('p')
    const pEmail = document.createElement('p')
    const pIdade = document.createElement('p')
    const pCidade = document.createElement('p')

    pNome.textContent = dados.nome
    pEmail.textContent = dados.email
    pIdade.textContent = dados.idade
    pCidade.textContent = dados.cidade
    button.textContent = 'X'

    div.append(button, pNome, pEmail, pIdade, pCidade)
    div.classList.add('card')

    document.querySelector('#list').append(div)
}