const trigger = document.getElementByID('menuTrigger');
const menu = document.getElementByID('dropdownMenu');
const links = document.querySelectorAll('dropdown-link')

trigger.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('is-expanded')
})

links.forEach(link => {
links.addEventListener('click', () =>{
    menu.classList.remove('is-expanded')
})
})

window.addEventListener('click', (event) => {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('is-expanded')
    }
}