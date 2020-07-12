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

const mapPic = document.querySelector(".content-section .img-content img");
mapPic.addEventListener('drag', () => {
    mapPic.src = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
})