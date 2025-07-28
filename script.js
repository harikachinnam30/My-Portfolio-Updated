// Select elements
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');
let menubar = document.getElementById("menubar");
let hamburger = document.querySelector(".hamburger");

// Toggle Mobile Menu
hamburger.addEventListener("click", function () {
    menubar.classList.toggle("active");
});

// Close Menu when clicking a navbar link (Only in Mobile)
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
            menubar.classList.remove("active");
        }
    });
});

// Sticky Navbar & Active Link Highlighting on Scroll
window.addEventListener("scroll", function () {
    let top = window.scrollY;

    // Activate Links on Scroll
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            let activeLink = document.querySelector(`header nav a[href*='${id}']`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

    // Sticky Navbar Effect
    header.classList.toggle("sticky", top > 100);
});

// Scroll Reveal Animation
ScrollReveal({
    reset: false,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".homecontent, .heading", { origin: "top" });
ScrollReveal().reveal(".certificates-container, .projects-container", { origin: "bottom" });
ScrollReveal().reveal(".about-content, .contact-form", { origin: "left" });
ScrollReveal().reveal(".skills-container", { origin: "right" });

// Certificate Modal Functionality
function openModal(imageSrc) {
    let modal = document.getElementById("certificateModal");
    document.getElementById("modalImage").src = imageSrc;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

// Close Modal when clicking outside the image
window.addEventListener("click", function (event) {
    let modal = document.getElementById("certificateModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
