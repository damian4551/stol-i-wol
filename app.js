//custom height
window.onload = () => {
  let vh = window.innerHeight * 0.1;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

//fill slider with images
slides = document.querySelectorAll(".slide-img");
let i = 1;

slides.forEach(slide => {
    slide.style.backgroundImage = 'url("gallery/g' + i + '.jpg")';
    i++;
});


//swiper init
var swiper1 = new Swiper('.swiper-1', {
    slidesPerView: 2.5,
    freeMode: true,
    loop: true,
    breakpoints: {
        320: {
          slidesPerView: 1.1,
        },
        480: {
          slidesPerView: 1.25,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2.5,
        },
        1680: {
            slidesPerView: 3.25,
        },
      }
});

var swiper2 = new Swiper('.swiper-2', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
});

//cursor
const mouseCursor = document.querySelector(".cursor");
const btns = document.querySelectorAll(".cursor-btn");
const gallery = document.querySelector(".swiper-1");
const cursorText = document.querySelector(".cursor-text");

const cursorMove = (e) => {
  mouseCursor.style.top = e.clientY + "px";
  mouseCursor.style.left = e.clientX + "px";
};

const cursorHover = () => {
  mouseCursor.classList.add("active");
};

const cursorUnhover = () => {
  mouseCursor.classList.remove("active");
};

const cursorDrag = () => {
  mouseCursor.classList.add("drag");
  cursorText.style.opacity = 1;
};

const cursorUndrag = () => {
  mouseCursor.classList.remove("drag");
  cursorText.style.opacity = 0;
};

btns.forEach(btn => {
  btn.addEventListener("mouseover", cursorHover);
  btn.addEventListener("mouseout", cursorUnhover);
})

gallery.addEventListener("mouseover", cursorDrag);
gallery.addEventListener("mouseout", cursorUndrag);

window.addEventListener("mousemove", cursorMove);

//animation
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-section",
    start: "100px 90%",
    toggleActions: "play none none reverse",
  },
})

tl.to(".text-move", {y: "0%", ease: Power3.easeOut, duration: 0.9, stagger: 0.3}, 0.85);

const hideLoadingBg = () => {
  gsap.to(".loading-bg", {
    y: "-150%",
    duration: 3,
    ease: Power3.easeOut,
  }, 1)
}


window.onload = () => {
  hideLoadingBg();
  setTimeout(function(){
    document.body.style.overflow = "scroll";
  }, 1000);
}