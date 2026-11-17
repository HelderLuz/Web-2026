const form = document.querySelector('#formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const dados = Object.fromEntries(formData.entries());
  
  console.log(dados);
  const { name, email, message } = dados
  const resultado = document.querySelector("#resultado")
  resultado.textContent = `Nome: ${name} Email: ${email} \nMensagem ${message}`
  form.reset();
});
