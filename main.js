//mouse image on scroll
window.addEventListener("scroll", function() {
    let scrollIcon = document.getElementsByClassName("scroll-down")[0];
    scrollIcon.classList.add("fade-away");
});

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

//courses buttons - redirect to courses pages
document.getElementById("course1Button").onclick = function () {
    location.href = "./musicdrama.html";
}

document.getElementById("course2Button").onclick = function () {
    location.href = "./singingclasses.html";
}

document.getElementById("course3Button").onclick = function () {
    location.href = "./pianoclasses.html";
}

document.getElementById("course4Button").onclick = function () {
    location.href = "./companiesclasses.html";
}