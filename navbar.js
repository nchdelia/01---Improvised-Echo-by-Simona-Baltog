//sticky navbar on scroll
window.addEventListener("scroll", function() {
    let dropdown = document.querySelector(".dropdown-settings");
    let header = this.document.querySelector("header");
    let logo = this.document.querySelector(".logo");
    header.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("stickyLogo", window.scrollY > 0);
    dropdown.classList.toggle("stickyDropdown", window.scrollY > 0);
});