const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
let activeCircles;

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    
    if(currentActive >= 4){
        currentActive = 4;
    }
    updateProgressBar();
})

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive <= 1){
        currentActive = 1;
    }
    updateProgressBar()
})

function updateProgressBar() {
    circles.forEach((circle, idx) => {
        if(currentActive >= idx + 1){
             circle.classList.add('active')
        } else if (currentActive <= idx + 1){
            circle.classList.remove('active')
        }
    });

    activeCircles = document.querySelectorAll('.active')   
    console.log(activeCircles.length, circles.length)
    
    let total = (((activeCircles.length - 1 ) / (circles.length -1)) * 100) + '%';
    progress.style.width = total;
}


