if (typeof window.THREE !== "undefined") {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!reducedMotion.matches) {
    const cometCanvas = document.createElement("canvas");
    cometCanvas.className = "background-comet";
    cometCanvas.setAttribute("aria-hidden", "true");
    Object.assign(cometCanvas.style, {
      position: "fixed",
      inset: "0",
      zIndex: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 300ms ease",
    });
    document.body.prepend(cometCanvas);

    document
      .querySelectorAll("body > :not(.background-comet):not(dialog)")
      .forEach((element) => {
        element.style.position ||= "relative";
        element.style.zIndex ||= "1";
      });

    const cometTextureCanvas = document.createElement("canvas");
    cometTextureCanvas.width = 128;
    cometTextureCanvas.height = 128;
    const textureContext = cometTextureCanvas.getContext("2d");
    const glow = textureContext.createRadialGradient(64, 64, 0, 64, 64, 64);
    glow.addColorStop(0, "rgba(255, 255, 255, 0.9)");
    glow.addColorStop(0.12, "rgba(255, 255, 255, 0.48)");
    glow.addColorStop(0.4, "rgba(255, 255, 255, 0.12)");
    glow.addColorStop(1, "rgba(255, 255, 255, 0)");
    textureContext.fillStyle = glow;
    textureContext.fillRect(0, 0, 128, 128);

    const texture = new window.THREE.CanvasTexture(cometTextureCanvas);
    const scene = new window.THREE.Scene();
    const camera = new window.THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      0.1,
      100,
    );
    camera.position.z = 10;

    let renderer;
    try {
      renderer = new window.THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: cometCanvas,
        powerPreference: "low-power",
      });
    } catch (error) {
      console.error("No se pudo iniciar el fondo interactivo Three.js.", error);
    }

    if (renderer) {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      const cometColor = new window.THREE.Color();
      const sprites = [];
      const trail = Array.from({ length: 22 }, () => new window.THREE.Vector2());
      const pointerTarget = new window.THREE.Vector2();
      let pointerActive = false;
      let animationFrame;

      for (let index = 0; index < trail.length; index += 1) {
        const material = new window.THREE.SpriteMaterial({
          map: texture,
          color: cometColor,
          transparent: true,
          opacity: 0.42 * (1 - index / trail.length) ** 1.4,
          blending: window.THREE.AdditiveBlending,
          depthWrite: false,
        });
        const sprite = new window.THREE.Sprite(material);
        const size = index === 0 ? 190 : 155 * (1 - index / trail.length) ** 0.75;
        sprite.scale.set(size, size, 1);
        sprite.position.z = 0;
        scene.add(sprite);
        sprites.push(sprite);
      }

      const updateCometColor = () => {
        cometColor.set(document.body.dataset.theme === "dark" ? "#5eead4" : "#0891b2");
        sprites.forEach((sprite) => sprite.material.color.copy(cometColor));
        if (pointerActive && !reducedMotion.matches && !animationFrame) {
          animationFrame = window.requestAnimationFrame(renderComet);
        }
      };
      updateCometColor();

      const positionComet = (event) => {
        if (reducedMotion.matches) return;

        pointerTarget.set(event.clientX, event.clientY);
        if (!pointerActive) {
          trail.forEach((point) => point.copy(pointerTarget));
          pointerActive = true;
        }
        cometCanvas.style.opacity = "0.8";

        if (!animationFrame) animationFrame = window.requestAnimationFrame(renderComet);
      };

      function renderComet() {
        animationFrame = undefined;

        trail[0].lerp(pointerTarget, 0.24);
        for (let index = 1; index < trail.length; index += 1) {
          trail[index].lerp(trail[index - 1], 0.14);
        }

        sprites.forEach((sprite, index) => {
          sprite.position.set(
            trail[index].x - window.innerWidth / 2,
            window.innerHeight / 2 - trail[index].y,
            0,
          );
        });
        renderer.render(scene, camera);
        renderer.render(scene, camera);
        const settled =
          Math.abs(pointerTarget.x - trail[0].x) < 0.5 &&
          Math.abs(pointerTarget.y - trail[0].y) < 0.5 &&
          Math.abs(trail[0].x - trail[trail.length - 1].x) < 0.5 &&
          Math.abs(trail[0].y - trail[trail.length - 1].y) < 0.5;

        if (!settled) animationFrame = window.requestAnimationFrame(renderComet);
      }

      window.addEventListener("pointermove", positionComet, { passive: true });

      window.addEventListener("resize", () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.left = -width / 2;
        camera.right = width / 2;
        camera.top = height / 2;
        camera.bottom = -height / 2;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      });

      const themeObserver = new MutationObserver(updateCometColor);
      themeObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });

      document.addEventListener("visibilitychange", () => {
        if (document.hidden && animationFrame) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = undefined;
        } else if (!document.hidden && pointerActive && !reducedMotion.matches) {
          animationFrame = window.requestAnimationFrame(renderComet);
        }
      });

      reducedMotion.addEventListener("change", (event) => {
        if (event.matches) {
          if (animationFrame) window.cancelAnimationFrame(animationFrame);
          animationFrame = undefined;
          cometCanvas.style.opacity = "0";
        } else if (pointerActive && !document.hidden) {
          cometCanvas.style.opacity = "0.8";
          animationFrame = window.requestAnimationFrame(renderComet);
        }
      });
    }
  }
} else {
  console.error("No se pudo cargar Three.js para el fondo interactivo.");
}
