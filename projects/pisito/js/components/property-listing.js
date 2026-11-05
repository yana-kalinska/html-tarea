class PropertyListing extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="property-data">
        <h1>Piso con el balcón en Gracia</h1>
        <p class="price"><strong>1250 €</strong> al mes</p>

        <figure style="margin: 0; padding: 0">
          <img
            src="https://nexoinmobiliario.pe/blog/wp-content/uploads/2024/05/departamento-flat.jpg"
            alt="Piso luminoso en Gracia"
          />
          <figcaption>Piso luminoso</figcaption>
        </figure>

        <h2>Descripción</h2>
        <p>
          Este es un piso en Gracia, con un balcón que ofrece vistas a la calle.
          Es ideal para una familia o pareja que busca un espacio moderno y luminoso.
        </p>

        <section class="pokemon-resident" aria-label="Habitante Pokémon: Pikachu">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
            width="64"
            height="64"
          />
          <p><strong>Habitante Pokémon</strong><span>Pikachu</span></p>
        </section>

        <h2>Características</h2>
        <ul>
          <li>75 m²</li>
          <li>2 habitaciones</li>
          <li>1 baño</li>
          <li>Tercera planta con ascensor</li>
          <li>Balcón a la calle</li>
        </ul>

        <h2>Cómo visitarlo</h2>
        <ol>
          <li>Rellena el formulario de contacto</li>
          <li>Te llamamos para elegir el día</li>
          <li>Trae tu DNI el día de la visita</li>
        </ol>
      </section>
    `;
  }
}

customElements.define("property-listing", PropertyListing);
