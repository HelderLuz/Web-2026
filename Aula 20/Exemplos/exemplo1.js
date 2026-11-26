function animal(tipo, nome, idade, peso, cor) {
  return { tipo: tipo, nome: nome, idade: idade, peso: peso, cor: cor }
}
const animais = []
animais.push(animal('Cachorro', 'Rex', 5, 20, 'Marrom'))
animais.push(animal('Gato', 'Luna', 3, 10, 'Preto'))
animais.push(animal('Coelho', 'Mingau', 2, 5, 'Branco'))
console.log(animais)

const animaisJSON = JSON.stringify(animais)
console.log(animaisJSON)

const animaisObj = JSON.parse(animaisJSON)
console.log(animaisObj)
