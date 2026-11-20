document.querySelector("#texto").addEventListener("input", () => {
  const texto = document.querySelector("#texto").value;
  const numCaracteres = texto.length;
  document.querySelector("#num-caracteres").textContent = numCaracteres;
})