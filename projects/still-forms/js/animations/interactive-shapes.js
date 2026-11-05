(() => {
  const sections = [...document.querySelectorAll(".story-section")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const shapeCount = 9;
  const maxPixelRatio = 1.5;
  const activeSections = new Set();
  const instances = [];

  const colorWithAlpha = (hex, alpha) => {
    const value = hex.replace("#", "");
    const channels = value.match(/.{2}/g)?.map((channel) => Number.parseInt(channel, 16));
    if (!channels || channels.length !== 3 || channels.some(Number.isNaN)) {
      console.error(`Invalid background-shape color: ${hex}`);
      return `rgba(255, 255, 255, ${alpha})`;
    }

    return `rgba(${channels.join(", ")}, ${alpha})`;
  };

  sections.forEach((section, sectionIndex) => {
    const canvas = section.querySelector(".shape-canvas");
    const context = canvas?.getContext("2d");
    if (!canvas || !context) {
      console.error(`Could not create the background shapes for ${section.id}.`);
      return;
    }

    const style = getComputedStyle(section);
    const colors = [
      style.getPropertyValue("--shape-primary").trim(),
      style.getPropertyValue("--shape-secondary").trim(),
    ];
    const shapes = Array.from({ length: shapeCount }, (_, index) => ({
      x: 0.1 + ((index * 0.173 + sectionIndex * 0.097) % 0.8),
      y: 0.12 + ((index * 0.271 + sectionIndex * 0.113) % 0.76),
      radius: 14 + ((index * 13 + sectionIndex * 7) % 29),
      rotation: index * 0.42,
      speed: 0.12 + (index % 4) * 0.045,
      phase: index * 1.73 + sectionIndex,
      type: index % 3,
      color: colors[index % colors.length],
      xOffset: 0,
      yOffset: 0,
    }));
    const pointer = { x: -1000, y: -1000, active: false };
    const instance = { canvas, context, section, shapes, pointer, width: 0, height: 0 };
    instances.push(instance);

    const resize = () => {
      const bounds = section.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio);
      instance.width = bounds.width;
      instance.height = bounds.height;
      canvas.width = Math.round(bounds.width * pixelRatio);
      canvas.height = Math.round(bounds.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      if (reducedMotion.matches) draw(instance, 0);
    };

    const updatePointer = (event) => {
      if (reducedMotion.matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
      }

      const bounds = section.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
      scheduleDraw(instance);
    };

    section.addEventListener("pointermove", updatePointer, { passive: true });
    section.addEventListener("pointerleave", () => {
      pointer.active = false;
      scheduleDraw(instance);
    });
    window.addEventListener("resize", resize, { passive: true });
    resize();
  });

  function drawShape(context, shape, x, y, elapsed) {
    const pulse = 0.9 + Math.sin(elapsed * shape.speed + shape.phase) * 0.1;
    const radius = shape.radius * pulse;
    context.save();
    context.translate(x, y);
    context.rotate(shape.rotation + elapsed * shape.speed * 0.15);
    context.fillStyle = colorWithAlpha(shape.color, shape.type === 0 ? 0.2 : 0.13);
    context.strokeStyle = colorWithAlpha(shape.color, 0.48);
    context.lineWidth = 1.2;

    if (shape.type === 0) {
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.fill();
      context.stroke();
      context.beginPath();
      context.arc(0, 0, radius * 0.58, 0, Math.PI * 2);
      context.stroke();
    } else if (shape.type === 1) {
      context.beginPath();
      context.moveTo(0, -radius);
      context.lineTo(radius, 0);
      context.lineTo(0, radius);
      context.lineTo(-radius, 0);
      context.closePath();
      context.fill();
      context.stroke();
    } else {
      context.beginPath();
      context.roundRect(-radius, -radius * 0.72, radius * 2, radius * 1.44, radius * 0.32);
      context.fill();
      context.stroke();
    }

    context.restore();
  }

  function draw(instance, elapsed) {
    const { context, width, height, shapes, pointer } = instance;
    context.clearRect(0, 0, width, height);

    shapes.forEach((shape) => {
      const baseX = shape.x * width + Math.sin(elapsed * shape.speed + shape.phase) * 18;
      const baseY = shape.y * height + Math.cos(elapsed * shape.speed + shape.phase) * 14;
      let targetX = 0;
      let targetY = 0;

      if (pointer.active) {
        const dx = baseX - pointer.x;
        const dy = baseY - pointer.y;
        const distance = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - distance / 190);
        if (distance > 0) {
          targetX = (dx / distance) * influence * 72;
          targetY = (dy / distance) * influence * 72;
        }
      }

      const easing = reducedMotion.matches ? 1 : 0.12;
      shape.xOffset += (targetX - shape.xOffset) * easing;
      shape.yOffset += (targetY - shape.yOffset) * easing;
      drawShape(context, shape, baseX + shape.xOffset, baseY + shape.yOffset, elapsed);
    });
  }

  function scheduleDraw(instance) {
    if (instance.frame || (!activeSections.has(instance) && !reducedMotion.matches)) return;
    instance.frame = window.requestAnimationFrame((time) => {
      instance.frame = 0;
      draw(instance, time / 1000);
      if (!reducedMotion.matches && activeSections.has(instance)) {
        instance.frame = window.requestAnimationFrame(renderContinuously(instance));
      }
    });
  }

  function renderContinuously(instance) {
    return (time) => {
      instance.frame = 0;
      draw(instance, time / 1000);
      if (!reducedMotion.matches && activeSections.has(instance)) {
        instance.frame = window.requestAnimationFrame(renderContinuously(instance));
      }
    };
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const instance = instances.find(({ section }) => section === entry.target);
          if (!instance) return;
          if (entry.isIntersecting) {
            activeSections.add(instance);
            scheduleDraw(instance);
          } else {
            activeSections.delete(instance);
            window.cancelAnimationFrame(instance.frame);
            instance.frame = 0;
          }
        });
      },
      { rootMargin: "100px 0px" },
    );
    sections.forEach((section) => observer.observe(section));
  } else {
    instances.forEach((instance) => {
      activeSections.add(instance);
      scheduleDraw(instance);
    });
  }

  reducedMotion.addEventListener("change", () => {
    instances.forEach((instance) => {
      window.cancelAnimationFrame(instance.frame);
      instance.frame = 0;
      scheduleDraw(instance);
    });
  });
})();
