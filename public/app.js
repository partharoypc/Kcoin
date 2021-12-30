window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#mobile-bar')
    const dropdown = document.querySelector('#mobile-menu')

    menuBtn.addEventListener('click', () => {
        Animation.apply
        dropdown.classList.toggle('hidden')
        dropdown.classList.toggle('block')
    })

})