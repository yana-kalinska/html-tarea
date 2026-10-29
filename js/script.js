const fontPreconnect = document.createElement("link");
fontPreconnect.rel = "preconnect";
fontPreconnect.href = "https://fonts.googleapis.com";
document.head.append(fontPreconnect);

const fontOriginPreconnect = document.createElement("link");
fontOriginPreconnect.rel = "preconnect";
fontOriginPreconnect.href = "https://fonts.gstatic.com";
fontOriginPreconnect.crossOrigin = "anonymous";
document.head.append(fontOriginPreconnect);

const montserratFont = document.createElement("link");
montserratFont.rel = "stylesheet";
montserratFont.href =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap";
document.head.append(montserratFont);

const interactiveStyles = document.createElement("style");
interactiveStyles.textContent = `
  :root {
    font-family: "Montserrat", sans-serif;
    color: var(--color-ink);
    background-color: var(--color-page-base);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    --color-page-base: #effdfb;
    --color-ink: #25304a;
    --color-muted: #46536e;
    --color-link: #12336b;
    --color-accent: #4056d6;
    --color-focus: #1649c8;
    --color-pokemon-glow: rgb(37 99 235 / 28%);
    --color-on-accent: #fff;
    --color-background-cyan: rgb(34 211 238 / 58%);
    --color-background-green: rgb(74 222 128 / 58%);
    --color-background-blue: rgb(96 165 250 / 55%);
    --color-background-teal: rgb(45 212 191 / 48%);
    --color-background-gradient: linear-gradient(135deg, #ecfeff, #f0fdf4 52%, #eff6ff);
    --color-glass-surface: rgb(255 255 255 / 38%);
    --color-glass-strong: rgb(255 255 255 / 76%);
    --color-glass-card: rgb(255 255 255 / 74%);
    --color-glass-card-hover: rgb(255 255 255 / 88%);
    --color-glass-border: rgb(255 255 255 / 64%);
    --color-card-border: rgb(71 85 105 / 20%);
    --color-shadow: rgb(31 48 78 / 14%);
    --color-shadow-hover: rgb(31 48 78 / 22%);
    --color-chip-text: #263452;
    --color-chip-bg: rgb(224 231 255 / 88%);
    --color-resident-text: #283f9b;
    --color-resident-label: #46536e;
    --color-resident-bg: linear-gradient(120deg, rgb(224 231 255 / 92%), rgb(240 249 255 / 94%));
    --color-button-gradient: linear-gradient(135deg, #2563eb, #6d3acb);
    --pokemon-swatch-0-bg: #dbeafe;
    --pokemon-swatch-0-text: #1e3a8a;
    --pokemon-swatch-1-bg: #dcfce7;
    --pokemon-swatch-1-text: #14532d;
    --pokemon-swatch-2-bg: #fef3c7;
    --pokemon-swatch-2-text: #713f12;
    --pokemon-swatch-3-bg: #fce7f3;
    --pokemon-swatch-3-text: #831843;
    --pokemon-swatch-4-bg: #ede9fe;
    --pokemon-swatch-4-text: #4c1d95;
    --pokemon-swatch-5-bg: #cffafe;
    --pokemon-swatch-5-text: #164e63;
    --pokemon-swatch-6-bg: #ffedd5;
    --pokemon-swatch-6-text: #7c2d12;
  }

  html[data-theme="dark"] {
    --color-page-base: #0c1724;
    --color-ink: #f1f5f9;
    --color-muted: #d1d9e8;
    --color-link: #fff;
    --color-accent: #a5b4fc;
    --color-focus: #93c5fd;
    --color-pokemon-glow: rgb(134 239 172 / 32%);
    --color-on-accent: #fff;
    --color-background-cyan: rgb(8 145 178 / 40%);
    --color-background-green: rgb(22 163 74 / 38%);
    --color-background-blue: rgb(37 99 235 / 42%);
    --color-background-teal: rgb(13 148 136 / 34%);
    --color-background-gradient: linear-gradient(135deg, #0c1724, #10241d 52%, #101b32);
    --color-glass-surface: rgb(10 20 35 / 46%);
    --color-glass-strong: rgb(15 23 42 / 84%);
    --color-glass-card: rgb(15 23 42 / 80%);
    --color-glass-card-hover: rgb(30 41 59 / 90%);
    --color-glass-border: rgb(226 232 240 / 22%);
    --color-card-border: rgb(226 232 240 / 24%);
    --color-shadow: rgb(0 0 0 / 32%);
    --color-shadow-hover: rgb(0 0 0 / 42%);
    --color-chip-text: #f1f5f9;
    --color-chip-bg: rgb(51 65 85 / 92%);
    --color-resident-text: #c7d2fe;
    --color-resident-label: #e2e8f0;
    --color-resident-bg: linear-gradient(120deg, rgb(49 46 129 / 82%), rgb(30 41 59 / 94%));
    --color-button-gradient: linear-gradient(135deg, #2563eb, #6d3acb);
    --pokemon-swatch-0-bg: #1e3a8a;
    --pokemon-swatch-0-text: #dbeafe;
    --pokemon-swatch-1-bg: #14532d;
    --pokemon-swatch-1-text: #dcfce7;
    --pokemon-swatch-2-bg: #713f12;
    --pokemon-swatch-2-text: #fef3c7;
    --pokemon-swatch-3-bg: #831843;
    --pokemon-swatch-3-text: #fce7f3;
    --pokemon-swatch-4-bg: #4c1d95;
    --pokemon-swatch-4-text: #ede9fe;
    --pokemon-swatch-5-bg: #164e63;
    --pokemon-swatch-5-text: #cffafe;
    --pokemon-swatch-6-bg: #7c2d12;
    --pokemon-swatch-6-text: #ffedd5;
  }

  html {
    min-height: 100%;
    background-color: var(--color-page-base);
    background-image:
      radial-gradient(ellipse at 18% 22%, var(--color-background-cyan), transparent 42%),
      radial-gradient(ellipse at 82% 18%, var(--color-background-green), transparent 40%),
      radial-gradient(ellipse at 75% 82%, var(--color-background-blue), transparent 44%),
      radial-gradient(ellipse at 18% 85%, var(--color-background-teal), transparent 42%),
      var(--color-background-gradient);
    background-size: 180% 180%;
    animation: colorful-background 24s ease-in-out infinite alternate;
  }

  @keyframes colorful-background {
    0% {
      background-position: 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%;
    }

    50% {
      background-position: 45% 35%, 60% 45%, 40% 60%, 70% 40%, 50% 50%;
    }

    100% {
      background-position: 100% 70%, 0% 100%, 0% 20%, 100% 0%, 100% 50%;
    }
  }

  html[data-theme="dark"] {
    background-color: var(--color-page-base);
  }

  .pokemon-habitant[data-palette="0"],
  .pokemon-resident[data-palette="0"] {
    --pokemon-card-bg: var(--pokemon-swatch-0-bg);
    --pokemon-card-text: var(--pokemon-swatch-0-text);
  }

  .pokemon-habitant[data-palette="1"],
  .pokemon-resident[data-palette="1"] {
    --pokemon-card-bg: var(--pokemon-swatch-1-bg);
    --pokemon-card-text: var(--pokemon-swatch-1-text);
  }

  .pokemon-habitant[data-palette="2"],
  .pokemon-resident[data-palette="2"] {
    --pokemon-card-bg: var(--pokemon-swatch-2-bg);
    --pokemon-card-text: var(--pokemon-swatch-2-text);
  }

  .pokemon-habitant[data-palette="3"],
  .pokemon-resident[data-palette="3"] {
    --pokemon-card-bg: var(--pokemon-swatch-3-bg);
    --pokemon-card-text: var(--pokemon-swatch-3-text);
  }

  .pokemon-habitant[data-palette="4"],
  .pokemon-resident[data-palette="4"] {
    --pokemon-card-bg: var(--pokemon-swatch-4-bg);
    --pokemon-card-text: var(--pokemon-swatch-4-text);
  }

  .pokemon-habitant[data-palette="5"],
  .pokemon-resident[data-palette="5"] {
    --pokemon-card-bg: var(--pokemon-swatch-5-bg);
    --pokemon-card-text: var(--pokemon-swatch-5-text);
  }

  .pokemon-habitant[data-palette="6"],
  .pokemon-resident[data-palette="6"] {
    --pokemon-card-bg: var(--pokemon-swatch-6-bg);
    --pokemon-card-text: var(--pokemon-swatch-6-text);
  }

  body,
  button,
  input,
  select,
  textarea {
    font-family: "Montserrat", sans-serif;
  }

  body {
    color: var(--color-ink);
    color-scheme: light;
    background: transparent;
    font-weight: 400;
  }

  body[data-theme="dark"] {
    color-scheme: dark;
    color: var(--color-ink);
    background: transparent;
  }

  body h1,
  body h2,
  body h3,
  body h4,
  body h5,
  body h6,
  body strong,
  body b,
  body header a,
  body main label,
  .price,
  .pokemon-habitant,
  #theme-toggle,
  .contact form input[type="submit"] {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.045em;
  }

  body main label {
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.035em;
  }

  .menu,
  .contact {
    border: 1px solid var(--color-glass-border);
    border-radius: 16px;
    background-color: var(--color-glass-surface);
    box-shadow: 0 12px 30px var(--color-shadow);
    backdrop-filter: blur(22px) saturate(165%);
    -webkit-backdrop-filter: blur(22px) saturate(165%);
  }

  body[data-theme="dark"] .menu,
  body[data-theme="dark"] .contact {
    border-color: var(--color-glass-border);
    background-color: var(--color-glass-surface);
    box-shadow: 0 12px 30px var(--color-shadow);
  }

  .menu {
    align-items: center;
    margin: 16px 20px 0;
  }

  .menu_list {
    align-items: center;
  }

  aside {
    max-width: 1024px;
    margin: 24px 20px;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
  }

  aside h2 {
    margin: 0 0 20px;
    color: var(--color-ink);
    font-size: 1.35rem;
  }

  body[data-theme="dark"] aside h2 {
    color: var(--color-ink);
  }

  aside ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: 20px;
  }

  aside li a {
    display: block;
    overflow: hidden;
    height: 100%;
    border: 1px solid var(--color-card-border);
    border-radius: 16px;
    color: var(--color-ink);
    background: var(--color-glass-card);
    backdrop-filter: blur(18px) saturate(165%);
    -webkit-backdrop-filter: blur(18px) saturate(165%);
    text-decoration: none;
    box-shadow: 0 5px 16px var(--color-shadow);
    transition:
      transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
      box-shadow 220ms ease,
      border-color 220ms ease,
      background-color 220ms ease;
    will-change: transform;
  }

  aside li a:hover,
  aside li a:focus-visible {
    transform: translateY(-7px) scale(1.015);
    border-color: var(--color-focus);
    background-color: var(--color-glass-card-hover);
    box-shadow: 0 18px 32px var(--color-shadow);
  }

  body[data-theme="dark"] aside li a {
    border-color: var(--color-card-border);
    color: var(--color-ink);
    background: var(--color-glass-card);
    backdrop-filter: blur(18px) saturate(150%);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
  }

  body[data-theme="dark"] aside li a:hover,
  body[data-theme="dark"] aside li a:focus-visible {
    border-color: var(--color-focus);
    background-color: var(--color-glass-card-hover);
    box-shadow: 0 18px 32px var(--color-shadow);
  }

  aside li img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 300ms ease;
  }

  aside li a:hover > img,
  aside li a:focus-visible > img {
    transform: scale(1.04);
  }

  .pokemon-habitant span,
  .property-data .pokemon-resident span {
    display: inline-block;
    transform-origin: center bottom;
    transition: color 180ms ease, transform 180ms ease, text-shadow 180ms ease;
  }

  aside li a:hover .pokemon-habitant span,
  aside li a:focus-visible .pokemon-habitant span,
  .property-data .pokemon-resident:hover span {
    text-shadow: 0 3px 14px var(--color-pokemon-glow);
    animation: pokemon-name-bounce 520ms ease-in-out;
  }

  @keyframes pokemon-name-bounce {
    0%, 100% { transform: translateY(0) scale(1); }
    35% { transform: translateY(-4px) scale(1.06); }
    65% { transform: translateY(1px) scale(0.98); }
  }

  .pokemon-habitant {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 8px 12px 0;
    padding: 8px;
    border-radius: 8px;
    color: var(--pokemon-card-text, var(--color-chip-text));
    background-color: var(--pokemon-card-bg, var(--color-chip-bg));
    font-size: 0.875rem;
  }

  .pokemon-color-hint {
    font-size: 0.68rem;
    font-weight: 400;
    letter-spacing: 0;
    opacity: 0.82;
    text-align: center;
    text-transform: none;
  }

  .poster-card-hint {
    display: block;
    margin: 8px 12px 0;
    color: var(--color-muted);
    font-size: 0.68rem;
    font-weight: 400;
    letter-spacing: 0;
    text-align: center;
    text-transform: none;
  }

  .pokemon-habitant .pokemon-color-hint {
    flex: 0 0 100%;
    margin-top: -6px;
    position: relative;
    z-index: 2;
  }

  .pokemon-habitant > span {
    position: relative;
    z-index: 2;
  }

  .property-data .pokemon-resident .pokemon-color-hint {
    color: inherit;
  }

  aside li .pokemon-habitant img {
    flex: 0 0 72px;
    width: 72px;
    height: 72px;
    margin: 0;
    object-fit: contain;
    transform: scale(2);
    transform-origin: center;
    z-index: 1;
  }

  .property-data .pokemon-resident {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 10px;
    margin: 16px 0;
    padding: 8px 14px 8px 8px;
    border: 1px solid var(--color-glass-border);
    border-radius: 16px;
    background: var(--pokemon-card-bg, var(--color-resident-bg));
    box-shadow: 0 8px 20px var(--color-shadow);
    color: var(--pokemon-card-text, var(--color-resident-text));
  }

  .property-data .pokemon-resident img {
    width: 88px;
    height: 88px;
    object-fit: contain;
    transform: scale(2);
    transform-origin: center;
    z-index: 1;
  }

  .property-data .pokemon-resident p {
    display: grid;
    gap: 2px;
    margin: 0;
  }

  .property-data .pokemon-resident strong {
    color: inherit;
    font-size: 0.75rem;
  }

  .property-data .pokemon-resident span {
    color: inherit;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.045em;
  }

  .price {
    color: var(--color-link);
  }

  aside li a br {
    display: none;
  }

  aside li a {
    padding-bottom: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.035em;
  }

  aside li a:hover,
  aside li a:focus-visible {
    text-decoration: none;
  }

  aside li a img {
    margin-bottom: 12px;
  }

  aside li a:not(img) {
    text-align: center;
  }

  body[data-theme="dark"] aside li a {
    color: var(--color-ink);
  }

  body[data-theme="dark"] .property-data .pokemon-resident {
    border-color: var(--color-glass-border);
    background: var(--pokemon-card-bg, var(--color-resident-bg));
  }

  body[data-theme="dark"] .property-data .pokemon-resident strong {
    color: inherit;
  }

  body[data-theme="dark"] .property-data .pokemon-resident span {
    color: inherit;
  }

  body[data-theme="dark"] .pokemon-habitant {
    color: var(--pokemon-card-text, var(--color-chip-text));
    background-color: var(--pokemon-card-bg, var(--color-chip-bg));
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 32px;
    padding: 20px 24px;
    color: var(--color-muted);
    background-color: transparent;
    text-align: center;
  }

  a {
    color: var(--color-link);
    text-decoration: none;
    text-underline-offset: 3px;
    transition: color 160ms ease;
  }

  a:hover,
  a:focus-visible {
    text-decoration: underline;
  }

  .menu a,
  .contact a,
  footer a {
    text-decoration: none;
  }

  .menu a:hover,
  .contact a:hover,
  footer a:hover,
  .menu a:focus-visible,
  .contact a:focus-visible,
  footer a:focus-visible {
    text-decoration: underline;
  }

  body[data-theme="dark"] .price {
    color: var(--color-link);
  }

  body[data-theme="dark"] a {
    color: var(--color-link);
  }

  body[data-theme="dark"] footer {
    color: var(--color-muted);
  }

  .property-data > ul,
  .property-data > ol {
    margin: 8px 0 16px;
    padding-left: 1.5rem;
  }

  .property-data > ul {
    list-style: disc;
  }

  .property-data > ol {
    list-style: decimal;
  }

  .property-data > ul li,
  .property-data > ol li {
    padding-left: 0.25rem;
  }

  body[data-theme="dark"] input,
  body[data-theme="dark"] select,
  body[data-theme="dark"] textarea {
    color: var(--color-ink);
    background-color: var(--color-glass-strong);
    border-color: var(--color-card-border);
  }

  body[data-theme="dark"] input::placeholder,
  body[data-theme="dark"] textarea::placeholder {
    color: var(--color-muted);
    opacity: 1;
  }

  body[data-theme="dark"] input[type="checkbox"],
  body[data-theme="dark"] input[type="radio"] {
    accent-color: var(--color-focus);
  }

  #theme-toggle {
    position: relative;
    display: inline-flex;
    width: 70px;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding: 3px;
    border: 1px solid var(--color-card-border);
    border-radius: 999px;
    color: var(--color-ink);
    background: var(--color-glass-strong);
    cursor: pointer;
    transition: box-shadow 160ms ease, border-color 160ms ease;
  }

  #theme-toggle:hover {
    border-color: var(--color-focus);
    box-shadow: 0 6px 16px var(--color-shadow-hover);
  }

  .theme-toggle-track {
    position: relative;
    display: block;
    width: 62px;
    height: 32px;
  }

  .theme-toggle-icon {
    position: absolute;
    z-index: 1;
    top: 8px;
    display: grid;
    width: 16px;
    height: 16px;
    place-items: center;
    color: var(--color-ink);
    transition: color 160ms ease;
  }

  .theme-toggle-icon svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.8;
  }

  .theme-toggle-sun {
    left: 7px;
  }

  .theme-toggle-moon {
    right: 7px;
  }

  .theme-toggle-thumb {
    position: absolute;
    z-index: 2;
    top: 2px;
    left: 2px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--color-button-gradient);
    box-shadow: 0 2px 6px var(--color-shadow-hover);
    transition: transform 200ms ease;
  }

  #theme-toggle[data-mode="dark"] .theme-toggle-thumb {
    transform: translateX(30px);
  }

  #theme-toggle:focus-visible,
  .contact form input[type="submit"]:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 3px;
  }

  .contact form input[type="submit"] {
    padding: 10px 20px;
    border: 0;
    border-radius: 8px;
    color: var(--color-on-accent);
    background: var(--color-button-gradient);
    box-shadow: 0 4px 12px rgb(37 99 235 / 30%);
    cursor: pointer;
    transform: translate(var(--magnetic-x, 0), var(--magnetic-y, 0));
    transition: transform 160ms ease-out, box-shadow 160ms ease-out;
    will-change: transform;
  }

  .contact form input[type="submit"]:hover {
    box-shadow: 0 8px 20px rgb(37 99 235 / 40%);
    filter: brightness(1.08);
  }

  .contact input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),
  .contact select,
  .contact textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--color-card-border);
    border-radius: 10px;
    color: var(--color-ink);
    background-color: var(--color-glass-strong);
  }

  .contact input::placeholder,
  .contact textarea::placeholder {
    color: var(--color-muted);
    opacity: 1;
  }

  .contact input:focus-visible,
  .contact select:focus-visible,
  .contact textarea:focus-visible,
  #theme-toggle:focus-visible,
  a:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 3px;
  }

  .contact input[type="checkbox"],
  .contact input[type="radio"] {
    accent-color: var(--color-accent);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }

  @media (max-width: 700px) {
    .menu {
      flex-wrap: wrap;
      gap: 12px;
      margin: 12px 12px 0;
      padding: 12px 16px;
    }

    .menu nav {
      order: 3;
      flex-basis: 100%;
    }

    .menu_list {
      flex-wrap: wrap;
      gap: 8px 16px;
    }

    #theme-toggle {
      margin-left: auto;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: auto;
      margin: 14px 12px;
      gap: 18px;
    }

    .property-data,
    .contact {
      flex: none;
      width: 100%;
      min-width: 0;
    }

    main h1 {
      font-size: clamp(1.65rem, 7vw, 2rem);
    }

    aside {
      width: auto;
      margin: 20px 12px;
    }

    .pokemon-color-tip {
      margin-top: -12px;
    }

    aside ul {
      grid-template-columns: minmax(0, 1fr);
      gap: 14px;
    }

    aside li img {
      height: clamp(170px, 52vw, 260px);
    }

    .contact {
      padding: 16px;
    }
  }

  @media (max-width: 380px) {
    .menu_list {
      gap: 8px 10px;
    }

    .menu_list a {
      font-size: 0.85rem;
    }

    aside li img {
      height: 170px;
    }

    .pokemon-habitant {
      margin-inline: 8px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }

    aside li a,
    aside li img,
    .contact form input[type="submit"],
    .pokemon-habitant span,
    .property-data .pokemon-resident span {
      transform: none !important;
      animation: none !important;
    }

    html {
      animation: none;
    }
  }
`;
document.head.append(interactiveStyles);

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
