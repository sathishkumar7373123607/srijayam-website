const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

slides[current].classList.remove("active");

current = (current + 1) % slides.length;

slides[current].classList.add("active");

},4000);
const galleryImages=document.querySelectorAll(".gallery-item img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const close=document.querySelector(".close");

galleryImages.forEach(img=>{
    img.onclick=function(){
        lightbox.style.display="block";
        lightboxImg.src=this.src;
    }
});

close.onclick=function(){
    lightbox.style.display="none";
}

lightbox.onclick=function(e){
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
}
