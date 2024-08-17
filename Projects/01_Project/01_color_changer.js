const background = document.querySelector('.changer')
const buttons = document.querySelectorAll('.color')

buttons.forEach(button => {
  button.addEventListener('click',(event) => {
    background.style.background = event.target.id;
  })
})