import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function animateReveal(elements) {
  const triggers = [];

  elements.forEach(function (elem) {
    hide(elem);

    let tr = ScrollTrigger.create({
      trigger: elem,
      id: elem.id,
      end: "bottom top",
      markers: true,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      },
    });
    triggers.push(tr);
  });

  return triggers;
}

function animateFrom(elem, direction) {
  direction = direction || 1;

  let x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromBelow")) {
    y = -100;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";

  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
      delay: elem.classList.contains("gs_delay") ? 0.3 : 0,
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}
