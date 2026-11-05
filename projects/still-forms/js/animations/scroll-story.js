(() => {
  const sections = [...document.querySelectorAll(".story-section")];
  const arrows = [...document.querySelectorAll(".nav-arrow")];

  if (!sections.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeSection = 0;

  const updateArrows = (index) => {
    activeSection = index;
    arrows.forEach((arrow) => {
      const direction = Number(arrow.dataset.direction);
      arrow.disabled =
        (direction < 0 && activeSection === 0) ||
        (direction > 0 && activeSection === sections.length - 1);
    });
  };

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const nextSection = sections[activeSection + Number(arrow.dataset.direction)];
      nextSection?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });

  updateArrows(0);

  if (reducedMotion || !window.gsap || !window.ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  document.body.classList.add("gsap-ready");

  sections.forEach((section, index) => {
    const sectionStyle = getComputedStyle(section);
    const backgroundColor = sectionStyle.getPropertyValue("--section-bg").trim();
    const textColor = sectionStyle.getPropertyValue("--section-ink").trim();

    gsap.fromTo(
      section.querySelectorAll(".reveal"),
      { autoAlpha: 0, y: 34 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 68%",
          once: true,
        },
      },
    );

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom center",
      onEnter: () => {
        gsap.to(document.body, {
          backgroundColor,
          color: textColor,
          duration: 1.1,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      },
      onEnterBack: () => {
        gsap.to(document.body, {
          backgroundColor,
          color: textColor,
          duration: 1.1,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      },
      onToggle: ({ isActive }) => {
        if (isActive) {
          updateArrows(index);
        }
      },
    });
  });

  ScrollTrigger.refresh();
})();
