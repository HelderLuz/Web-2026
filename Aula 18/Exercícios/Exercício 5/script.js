const containerImagens = document.querySelector('.imagens');

containerImagens.addEventListener('click', (e) => {
  if(e.target.closest('img')) {
    const imagemDestaque = document.querySelector('#destaque')

    const imagem = e.target.closest('img')

    const url = imagemDestaque.src
    imagemDestaque.src = imagem.src
    imagem.src = url
  }
})