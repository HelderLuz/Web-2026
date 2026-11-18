// Faça uma página com 5 parágrafos e um botão. Ao clicar no botão, ele deve atribuir os valores do 1 ao 5 respectivamente em cada parágrafo.

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const paragrafos = document.querySelectorAll('p')
    
    // for (let i = 0; i < paragrafos.length; i++) {
    //     paragrafos[i].textContent = i + 1
    // }
    let i = 1;
    for (const paragrafo of paragrafos) {
        paragrafo.textContent = i++;
    }
})