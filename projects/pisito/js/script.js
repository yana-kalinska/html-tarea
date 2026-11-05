
const pokemonCards = [
  ...document.querySelectorAll(".pokemon-habitant, .pokemon-resident"),
];
pokemonCards.forEach((card) => {
  const colorHint = document.createElement("small");
  colorHint.className = "pokemon-color-hint";
  colorHint.textContent = "Pulsa Espacio para cambiar el color";
  colorHint.setAttribute("aria-hidden", "true");
  card.append(colorHint);
});

const pokemonColorStatus = document.createElement("p");
pokemonColorStatus.className = "visually-hidden";
pokemonColorStatus.setAttribute("aria-live", "polite");
pokemonColorStatus.setAttribute("aria-atomic", "true");
document.body.append(pokemonColorStatus);

pokemonCards.forEach((card) => card.setAttribute("data-palette", "0"));

document.addEventListener("keydown", (event) => {
  if (
    event.code !== "Space" ||
    event.repeat ||
    event.target instanceof Element &&
      event.target.closest(
        "a, button, input, select, textarea, [contenteditable='true']",
      )
  ) {
    return;
  }

  event.preventDefault();
  pokemonCards.forEach((card) => {
    const currentPalette = Number(card.dataset.palette);
    let nextPalette = Math.floor(Math.random() * 6);
    if (nextPalette >= currentPalette) nextPalette += 1;
    card.dataset.palette = String(nextPalette);
  });
  pokemonColorStatus.textContent = "Colores de los habitantes Pokémon actualizados.";
});

const themeToggle = document.createElement("button");
themeToggle.id = "theme-toggle";
themeToggle.type = "button";
themeToggle.innerHTML = `
  <span class="theme-toggle-track" aria-hidden="true">
    <span class="theme-toggle-icon theme-toggle-sun">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path></svg>
    </span>
    <span class="theme-toggle-icon theme-toggle-moon">
      <svg viewBox="0 0 24 24"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"></path></svg>
    </span>
    <span class="theme-toggle-thumb"></span>
  </span>
`;
document.querySelector(".menu").append(themeToggle);

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const setTheme = (isDark) => {
  document.body.dataset.theme = isDark ? "dark" : "light";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.dataset.mode = isDark ? "dark" : "light";
  themeToggle.setAttribute(
    "aria-label",
    `Cambiar a modo ${isDark ? "claro" : "oscuro"}`,
  );
  themeToggle.title = `Cambiar a modo ${isDark ? "claro" : "oscuro"}`;
  themeToggle.setAttribute("aria-pressed", String(isDark));
};

setTheme(prefersDark.matches);
themeToggle.addEventListener("click", () => {
  setTheme(document.body.dataset.theme !== "dark");
});

const submitButton = document.querySelector('.contact form input[type="submit"]');
const supportsMagneticEffect = window.matchMedia(
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
);

if (submitButton && supportsMagneticEffect.matches) {
  let centerX = 0;
  let centerY = 0;

  submitButton.addEventListener("pointerenter", () => {
    const bounds = submitButton.getBoundingClientRect();
    centerX = bounds.left + bounds.width / 2;
    centerY = bounds.top + bounds.height / 2;
  });

  submitButton.addEventListener("pointermove", (event) => {
    submitButton.style.setProperty(
      "--magnetic-x",
      `${(event.clientX - centerX) * 0.2}px`,
    );
    submitButton.style.setProperty(
      "--magnetic-y",
      `${(event.clientY - centerY) * 0.2}px`,
    );
  });

  submitButton.addEventListener("pointerleave", () => {
    submitButton.style.setProperty("--magnetic-x", "0px");
    submitButton.style.setProperty("--magnetic-y", "0px");
  });
}
