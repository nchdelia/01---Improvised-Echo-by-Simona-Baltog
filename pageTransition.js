//animation for page transition
window.onload = () => {
    const transition_el = document.querySelector(".transition");
    const anchors = document.querySelectorAll(".anchorTransition");

    setTimeout(() => {
        transition_el.classList.remove("is-active");
    }, 400);

    for(let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        
        anchor.addEventListener("click", e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add("is-active");
            setTimeout(() => {
                window.location.href = target;
            }, 400);
        });
    }
}




//prevent default when clicking on homepage
const homepage = document.querySelector(".homepage");
homepage.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(homepage);
});