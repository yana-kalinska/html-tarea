const posterStyles = document.createElement("style");
posterStyles.textContent = `
  .poster-dialog {
    box-sizing: border-box;
    position: fixed;
    inset: 0;
    width: min(92vw, 620px);
    max-width: 620px;
    max-height: min(92vh, 92dvh, 900px);
    margin: auto;
    padding: 22px;
    overflow: auto;
    overscroll-behavior: contain;
    border: 1px solid var(--color-glass-border);
    border-radius: 24px;
    color: var(--color-ink);
    background: var(--color-glass-strong);
    box-shadow: 0 24px 80px var(--color-shadow-hover);
    backdrop-filter: blur(24px) saturate(160%);
    -webkit-backdrop-filter: blur(24px) saturate(160%);
  }

  .poster-dialog::backdrop {
    background: rgb(9 17 31 / 64%);
    backdrop-filter: blur(6px);
  }

  .poster-dialog-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
  }

  .poster-dialog-header h2 {
    margin: 0;
    font-size: clamp(1.05rem, 4vw, 1.4rem);
  }

  .poster-dialog-header p {
    margin: 6px 0 0;
    color: var(--color-muted);
    font-size: 0.9rem;
  }

  .poster-close {
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-card-border);
    border-radius: 50%;
    color: var(--color-ink);
    background: var(--color-glass-card);
    font: inherit;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
  }

  .poster-close:hover {
    background: var(--color-glass-card-hover);
  }

  .poster-canvas {
    display: grid;
    place-items: center;
    overflow: hidden;
    border: 1px solid var(--color-card-border);
    border-radius: 16px;
    background: var(--color-page-base);
  }

  .poster-canvas canvas {
    display: block;
    width: auto !important;
    max-width: 100%;
    height: min(72vh, 72dvh) !important;
  }

  .poster-dialog :focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    .poster-dialog {
      padding: 14px;
      border-radius: 18px;
    }
  }
`;
document.head.append(posterStyles);

const posterDialog = document.createElement("dialog");
posterDialog.className = "poster-dialog";
posterDialog.setAttribute("aria-labelledby", "poster-title");
posterDialog.innerHTML = `
  <div class="poster-dialog-header">
    <div>
      <h2 id="poster-title"></h2>
      <p id="poster-description"></p>
    </div>
    <button class="poster-close" type="button" aria-label="Cerrar póster">×</button>
  </div>
  <div class="poster-canvas" aria-label="Póster ilustrado del piso"></div>
`;
document.body.append(posterDialog);

const posterTitle = posterDialog.querySelector("#poster-title");
const posterDescription = posterDialog.querySelector("#poster-description");
const posterCanvas = posterDialog.querySelector(".poster-canvas");
const posterClose = posterDialog.querySelector(".poster-close");
let posterInstance;
let pageScrollState;

const posterPalettes = {
  eevee: { paper: "#f6e8c9", ink: "#49351f", accent: "#c78043", light: "#f4c95d" },
  charmander: { paper: "#ffe2d2", ink: "#542b25", accent: "#ed6a3d", light: "#ffc857" },
  squirtle: { paper: "#dff5f4", ink: "#193e53", accent: "#3d9db3", light: "#f3ca76" },
  pikachu: { paper: "#fff2bd", ink: "#43361b", accent: "#e5aa23", light: "#f8d967" },
};

const createPoster = (propertyName, pokemonName) => {
  if (typeof window.p5 !== "function") {
    const error = new Error("No se pudo cargar p5.js para generar el póster.");
    posterCanvas.textContent = "No se pudo cargar la ilustración. Comprueba tu conexión e inténtalo de nuevo.";
    console.error(error);
    return;
  }

  const palette =
    posterPalettes[pokemonName.toLowerCase()] ?? posterPalettes.eevee;

  posterInstance = new window.p5((p) => {
    p.setup = () => {
      p.createCanvas(600, 800);
      p.noLoop();
      p.textFont("sans-serif");

      p.background(palette.paper);
      p.noStroke();
      p.fill(palette.light);
      p.circle(475, 145, 210);
      p.fill(palette.accent);
      p.circle(95, 250, 120);
      p.fill(255, 255, 255, 110);
      p.circle(95, 250, 75);

      p.fill(palette.ink);
      p.textStyle(p.BOLD);
      p.textSize(19);
      p.text("PISITO  /  BARCELONA", 54, 58);
      p.textSize(58);
      p.text(pokemonName.toUpperCase(), 54, 142, 480, 130);
      p.textStyle(p.NORMAL);
      p.textSize(22);
      p.text(propertyName.toUpperCase(), 54, 218, 470, 60);

      p.fill(palette.accent);
      p.rect(54, 292, 492, 3, 2);

      p.fill(255, 255, 255, 150);
      p.rect(77, 376, 446, 294, 10);
      p.fill(palette.ink);
      p.triangle(77, 414, 300, 300, 523, 414);
      p.fill(palette.accent);
      p.rect(103, 407, 394, 236, 5);
      p.fill(palette.paper);
      p.rect(130, 450, 94, 92, 8);
      p.rect(253, 450, 94, 92, 8);
      p.rect(376, 450, 94, 92, 8);
      p.rect(244, 560, 112, 83, 5);
      p.fill(palette.ink);
      p.rect(130, 484, 94, 7);
      p.rect(253, 484, 94, 7);
      p.rect(376, 484, 94, 7);
      p.rect(287, 560, 7, 83);

      p.fill(palette.ink);
      p.textSize(18);
      p.text("UN HOGAR PARA", 54, 718);
      p.textStyle(p.BOLD);
      p.textSize(28);
      p.text(pokemonName.toUpperCase(), 54, 758);
      p.textStyle(p.NORMAL);
      p.textSize(15);
      p.text("PEQUEÑAS AVENTURAS, GRANDES HISTORIAS", 54, 785);
    };
  }, posterCanvas);
};

posterDialog.querySelector(".poster-close").addEventListener("click", () => {
  posterDialog.close();
});

posterDialog.addEventListener("click", (event) => {
  if (event.target === posterDialog) posterDialog.close();
});

posterDialog.addEventListener("close", () => {
  posterInstance?.remove();
  posterInstance = undefined;
  posterCanvas.replaceChildren();

  if (pageScrollState) {
    document.documentElement.style.overflow = pageScrollState.rootOverflow;
    document.body.style.position = pageScrollState.bodyPosition;
    document.body.style.top = pageScrollState.bodyTop;
    document.body.style.left = pageScrollState.bodyLeft;
    document.body.style.right = pageScrollState.bodyRight;
    document.body.style.width = pageScrollState.bodyWidth;
    window.scrollTo(0, pageScrollState.scrollY);
    pageScrollState = undefined;
  }
});

document.querySelectorAll("aside li a").forEach((card) => {
  card.setAttribute("aria-haspopup", "dialog");
  const posterHint = document.createElement("small");
  posterHint.className = "poster-card-hint";
  posterHint.textContent = "Haz clic para ver el póster";
  posterHint.setAttribute("aria-hidden", "true");
  card.append(posterHint);

  card.addEventListener("click", (event) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    const propertyName = card.querySelector("img")?.alt;
    const resident = card.querySelector(".pokemon-habitant span")?.textContent;
    if (!propertyName || !resident) {
      console.error("No se pudo abrir el póster: faltan los datos del piso.");
      return;
    }

    const pokemonName = resident.replace(/^Habitante:\s*/i, "").trim();
    posterTitle.textContent = `${propertyName} · ${pokemonName}`;
    posterDescription.textContent = "Un póster ilustrado de este piso y su habitante Pokémon.";
    posterCanvas.replaceChildren();
    posterInstance?.remove();
    posterInstance = undefined;

    pageScrollState = {
      rootOverflow: document.documentElement.style.overflow,
      bodyPosition: document.body.style.position,
      bodyTop: document.body.style.top,
      bodyLeft: document.body.style.left,
      bodyRight: document.body.style.right,
      bodyWidth: document.body.style.width,
      scrollY: window.scrollY,
    };
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${pageScrollState.scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    posterDialog.showModal();
    createPoster(propertyName, pokemonName);
    posterClose.focus();
  });
});
