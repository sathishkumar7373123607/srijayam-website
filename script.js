// ======================================
// Sri Jayam Digital Flex Printing V2
// script.js
// ======================================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });

    });

}

// Sticky Header

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card").forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});

// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // Ignore empty "#"
        if (href === "#") {
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Close mobile menu after click
            const nav = document.querySelector("nav");
            if (nav) {
                nav.classList.remove("active");
            }
        }

    });

});

// Floating Hero Image

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    let position = 0;

    setInterval(() => {

        position = position === 0 ? -10 : 0;

        heroImage.style.transform = `translateY(${position}px)`;

    }, 1500);

}