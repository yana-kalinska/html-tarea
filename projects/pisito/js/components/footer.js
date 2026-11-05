class PisitoFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        copyright Pisito |
        <a href="./policy">Política de Privacidad</a> |
        <a href="../../index.html">Ver todos los proyectos</a>
      </footer>
    `;
  }
}

customElements.define("pisito-footer", PisitoFooter);
