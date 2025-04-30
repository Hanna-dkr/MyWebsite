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

    // ── NEW: show when hero is 60% out, hide when it’s back at 30% ──
    const sidebar = document.querySelector('.case-sidebar');
    const hero = document.querySelector('.nunu-hero');

    if (sidebar && hero) {
        // 1) Show sidebar when hero top crosses the 60% line
        const showObserver = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) {
                sidebar.classList.add('visible');
            }
        }, {
            root: null,
            threshold: 0,
            // move the top of the viewport down by 60%
            rootMargin: '-60% 0px 0px 0px'
        });
        showObserver.observe(hero);

        // 2) Hide sidebar when hero top crosses back above the 30% line
        const hideObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                sidebar.classList.remove('visible');
            }
        }, {
            root: null,
            threshold: 0,
            // move the top of the viewport down by 30%
            rootMargin: '-30% 0px 0px 0px'
        });
        hideObserver.observe(hero);
    }
});

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    })
})