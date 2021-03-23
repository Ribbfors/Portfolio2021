const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.to(".slider", { x: "-100%", duration: 1.5, delay: 1.5 });
tl.to(".intro", { y: "100%", duration: 1 }, "-=1");
tl.fromTo(".header1", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".header3", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const closeMenu = document.querySelector(".close");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

closeMenu.addEventListener("click", function () {
  hamburger.classList.remove("is-active");
  mobile_menu.classList.remove("is-active");
});
