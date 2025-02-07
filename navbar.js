//sticky navbar on scroll
window.addEventListener("scroll", function() {
    let dropdown = document.querySelector(".dropdown-settings");
    let header = document.querySelector("header");
    let logo = document.querySelector(".logo");
    let links = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");

    if(burger.classList.contains("toggle") == false) {
        header.classList.toggle("sticky", window.scrollY > 0);
        dropdown.classList.toggle("stickyDropdown", window.scrollY > 0);
        links.classList.toggle("stickyNavLinks", window.scrollY > 0);
    }

    if(window.scrollY > 0 && window.innerWidth > 768) {
        logo.src = "./src/img/logo/ImprovisedEcho_logo_positive_formatPNG.png";
    } else {
        logo.src = "./src/img/logo/ImprovisedEcho_logo_negative_formatPNG.png";
    }
});

//dropdown settings for navbar (Courses tab)
let dropList = document.querySelector(".dropdown-settings");
let title = document.querySelector(".courses");
let dropdownArrow = document.querySelector("b");
let coursesLink = document.querySelector(".link-courses");

dropList.addEventListener("mouseover", function() {
    title.classList.add("pink-title");
    dropdownArrow.innerHTML = "&#9650;";
});
dropList.addEventListener("mouseleave", function() {
    title.classList.remove("pink-title");
    dropdownArrow.innerHTML = "&#9660;";
});
title.addEventListener("mouseover", function() {
    dropdownArrow.innerHTML = "&#9650;";
});
title.addEventListener("mouseleave", function() {
    dropdownArrow.innerHTML = "&#9660;";
});

title.addEventListener("click", function() {
    if(window.innerWidth < 769) {
        dropList.classList.toggle("dropdown-active");
        coursesLink.classList.toggle("courses-active");

        title.style.display = "block";
        title.style.textAlign = "center";
        title.style.color = "#ff9774";
        dropdownArrow.innerHTML = "&#9650;";
    }

    if(dropList.classList.contains("dropdown-active") == false) {
        title.style.color = "#fff";
        dropdownArrow.innerHTML = "&#9660;";
        
    }
});

//navbar styling for phone - click on burger icon
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".link");
    
    
    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav-active");
        if(dropList.class = "dropdown-active") {
            dropList.classList.remove("dropdown-active");
        }

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });

        //burger animation
        burger.classList.toggle("toggle");
    });
}

navSlide();