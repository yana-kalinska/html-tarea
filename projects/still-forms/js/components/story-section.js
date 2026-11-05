(() => {
  const main = document.querySelector("#story-sections");
  const template = document.querySelector("#story-section-template");
  const sections = window.storySectionData;

  if (
    !main ||
    !(template instanceof HTMLTemplateElement) ||
    !Array.isArray(sections)
  ) {
    console.error("Could not render the visual story: section data or template is missing.");
    return;
  }

  const fragment = document.createDocumentFragment();

  sections.forEach((content, index) => {
    const section = template.content.firstElementChild.cloneNode(true);
    const sectionNumber = String(index + 1).padStart(2, "0");
    const titleId = `title-${index + 1}`;
    const heading = document.createElement(index === 0 ? "h1" : "h2");
    const emphasis = document.createElement("em");

    section.classList.add(content.theme);
    section.id = `section-${index + 1}`;
    section.setAttribute("aria-labelledby", titleId);

    heading.className = "reveal";
    heading.id = titleId;
    emphasis.textContent = content.title[1];
    heading.append(
      document.createTextNode(content.title[0]),
      document.createElement("br"),
      emphasis,
    );
    section.querySelector(".section-copy h2").replaceWith(heading);
    section.querySelector(".eyebrow").textContent = content.eyebrow;
    section.querySelector(".description").textContent = content.description;

    const image = section.querySelector(".image-frame img");
    image.src = content.image;
    image.alt = content.imageAlt;
    if (index === 0) {
      image.setAttribute("fetchpriority", "high");
    } else {
      image.loading = "lazy";
    }

    section.querySelector("figcaption").textContent = content.caption;
    section.querySelector(".section-index").textContent = sectionNumber;
    fragment.append(section);
  });

  main.replaceChildren(fragment);
})();
