// Smooth scrolling for menu links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all 0.8s ease";
    observer.observe(section);
});

// Current year in footer
const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML =
    `© ${new Date().getFullYear()} Sri Jayam Digital Flex Printing. All Rights Reserved.`;
}

// Welcome message
setTimeout(() => {
    console.log("Welcome to Sri Jayam Digital Flex Printing");
},1000);