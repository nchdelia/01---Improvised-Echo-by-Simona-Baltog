//zoom in picture when clicking on it
document.querySelectorAll(".column img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

//zoom out image when clicking on X
document.querySelector(".popup-image span").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
};

//zoom out image when pressing escape key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
    {
        document.querySelector(".popup-image").style.display = "none";
    }
});