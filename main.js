//hiding the preloader after 10 seconds
let content = document.getElementById("content");
content.style.display = "none";

function hideLoader() {
    let loader = document.getElementById("preloader");
    loader.style.display = "none";
    content.style.display = "block";
}

window.addEventListener("load", function() {
    this.window.setTimeout(hideLoader, 7000);
})

//sticky navbar on scroll
window.addEventListener("scroll", function() {
    let dropdown = document.querySelector(".dropdown-settings");
    let header = this.document.querySelector("header");
    let logo = this.document.querySelector(".logo");
    header.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("stickyLogo", window.scrollY > 0);
    dropdown.classList.toggle("stickyDropdown", window.scrollY > 0);

    let scrollIcon = document.getElementsByClassName("scroll-down")[0];
    scrollIcon.classList.add("fade-away");

});

//first page slideshow
let list = document.querySelector('.slideshow .list');
let slides = document.querySelectorAll('.slideshow .list .slide');
let dots = document.querySelectorAll('.slideshow .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthSlide = slides.length;

let refreshSlideshow = setInterval(() => {
    next.click();
}, 4000);

function reloadSlider() {
    let checkLeft = slides[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slideshow .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlideshow);
    refreshSlideshow = setInterval(() => {
        next.click();
    }, 4000);
}

next.onclick = function() {
    if(active + 1 > lengthSlide - 1) {
        active = 0;
    } else {
        active++;
    }
    reloadSlider();
}

prev.onclick = function() {
    if(active - 1 < 0) {
        active = lengthSlide - 1;
    } else {
        active--;
    }
    reloadSlider();
}

dots.forEach((li, key) => {
    li.addEventListener("click", function() {
        active = key;
        reloadSlider();
    })
})


// animation on scroll settings
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((element) => {
    observer.observe(element);
});


//dropdown settings for navbar (Courses tab)
let dropList = document.querySelector(".dropdown-settings");
let title = document.querySelector(".courses");
let dropdownArrow = document.querySelector("b");

dropList.addEventListener("mouseover", function() {
    title.classList.add("pink-title");
    dropdownArrow.innerHTML = "&#9650;";
})
dropList.addEventListener("mouseleave", function() {
    title.classList.remove("pink-title");
    dropdownArrow.innerHTML = "&#9660;";
})
title.addEventListener("mouseover", function() {
    dropdownArrow.innerHTML = "&#9650;";
})
title.addEventListener("mouseleave", function() {
    dropdownArrow.innerHTML = "&#9660;";
})

