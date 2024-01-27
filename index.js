// navbar link
gsap.set(".nav-link", {
  y: -200,
});
gsap.to(".nav-link", {
  y: 0,
  duration: 0.7,
  stagger: 0.1,
  ease: "power1.out",
});
// icon social
gsap.set("i", {
  fontSize: 22,
  y: -200,
  x: -50,
});
gsap.to(".fa-brands", {
  y: 0,
  stagger: 0.1,
  ease: "power1.out",
  duration: 1.6,
});

