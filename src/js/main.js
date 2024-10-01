import { gsap } from "gsap";
import { gsap } from "gsap";

gsap.from("span", {
  opacity: 0,
  stagger: 0.4,
});

const circle = document.querySelector(".circle");

gsap.to(circle, {
  scale: 1.5,
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "power1.inOut",
});
