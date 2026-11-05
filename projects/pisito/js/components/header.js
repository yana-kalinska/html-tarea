class PisitoHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="menu">
        <a href="../../index.html">Pisito</a>
        <nav aria-label="Navegación principal">
          <ul class="menu_list">
            <li><a href="#alquilar">Alquilar</a></li>
            <li><a href="#comprar">Comprar</a></li>
            <li><a href="#publicar">Publicar anuncio</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("pisito-header", PisitoHeader);
