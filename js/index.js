const funTitle = document.querySelector(".logo-heading");
funTitle.addEventListener('mouseover', () => {
    funTitle.style.color = "red"
});

const busPic = document.querySelector(".intro img");
busPic.addEventListener('mouseenter', () => {
    busPic.style.transform = 'scale(1.3)'
    busPic.style.transition = 'all 0.3s'
})
busPic.addEventListener('mouseleave', () => {
    busPic.style.transform = 'scale(1)'
})
