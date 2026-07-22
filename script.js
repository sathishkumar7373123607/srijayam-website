const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 4000);
}

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector(".close");

if (lightbox && lightboxImg && close) {
    galleryImages.forEach(img => {
        img.onclick = function () {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        };
    });

    close.onclick = function () {
        lightbox.style.display = "none";
    };

    lightbox.onclick = function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    };
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        nav.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove("active");
        }
    });
}
