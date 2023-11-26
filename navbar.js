//sticky navbar on scroll
window.addEventListener("scroll", function() {
    let dropdown = document.querySelector(".dropdown-settings");
    let header = this.document.querySelector("header");
    let logo = this.document.querySelector(".logo");
    header.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("stickyLogo", window.scrollY > 0);
    dropdown.classList.toggle("stickyDropdown", window.scrollY > 0);
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
