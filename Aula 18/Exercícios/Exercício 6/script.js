const button = document.querySelector('header button')

button.addEventListener('click', () => {
  const body = document.querySelector('body')
  body.classList.toggle('dark')

  button.textContent = button.textContent.includes('🌙') ? '☀️' : '🌙'
})