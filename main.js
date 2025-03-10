console.log("DataQ")
function menuToggle() {
    console.log("Clicked")
    var navMenu = document.getElementById("js-menu");
    console.log(navMenu.className);
    navMenu.classList.toggle("hide")
}

document.addEventListener('DOMContentLoaded', function () {
    // Select all elements that should animate on scroll (the container)
    const animElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -20% 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('Entry with rootMargin:', entry);
            if (entry.isIntersecting) {
                // Add "in-view" to trigger all descendant animations
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animElements.forEach(el => observer.observe(el));
});