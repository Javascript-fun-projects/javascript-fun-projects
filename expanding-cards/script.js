const panels = document.querySelectorAll('.panel');
const testimonial = document.querySelectorAll('.testimonial');

panels.forEach((panel) => { 
    panel.addEventListener('click', () => {
        removeActiveClass()
        //hidden
        panel.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}