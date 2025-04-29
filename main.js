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

    // ── NEW: hero observer to show/hide the sidebar ──
    const sidebar = document.querySelector('.case-sidebar');
    const hero = document.querySelector('.nunu-hero');
    if (sidebar && hero) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // hero is (even partly) on-screen → hide sidebar
                    sidebar.classList.remove('visible');
                } else {
                    // hero is completely off-screen → show sidebar
                    sidebar.classList.add('visible');
                }
            });
        }, {
            root: null,
            threshold: 0,
            rootMargin: '-80px 0px 0px 0px'
            // shrink top edge by heroHeight+gap so the switch happens just as hero scrolls under header
        });
        heroObserver.observe(hero);
    }
});

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    })
})