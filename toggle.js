const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navabarLinks= document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() => {
    navabarLinks.classList.toggle('active')
})



