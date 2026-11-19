const form = document.querySelector('form')

const lista = document.querySelector('#lista-tarefas');

lista.addEventListener('click', function(e) {
  // Verifica se o elemento clicado tem a classe 'btn-excluir'
  console.log('Target:', e.target)
  console.log('Closest:', e.target.closest('.btn-excluir'))
  console.log('Pai:', e.target.parentElement)
  if (e.target.closest('.btn-excluir')) {
    e.target.parentElement.remove();
  }
});


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = form.elements.nome.value
    const idade = form.elements.idade.value

    const linha = criarLinhaTabela(nome, idade)
    document.querySelector('tbody').append(linha)
})

function criarLinhaTabela(nome, idade) {
  const linha = document.createElement("tr");
  const tdNome = document.createElement("td");
  const tdIdade = document.createElement("td");
  tdNome.textContent = nome;
  tdIdade.textContent = idade;
  linha.append(tdNome, tdIdade);
  return linha;
}