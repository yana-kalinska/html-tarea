const relatedProperties = [
  {
    url: "./piso-en-sant-antoni",
    image:
      "https://www.hola.com/horizon/square/f67bc68fadf5-piso-modernista-barcelona-vania-interior-design-provenca-255-apartments-ignas.jpg?im=Resize=(960),type=downsize",
    name: "Piso en Sant Antoni",
    pokemon: "Eevee",
    pokemonId: 133,
  },
  {
    url: "./piso-en-sant-marti",
    image:
      "https://www.hola.com/horizon/landscape/ce10f358b1aa-proyecto-ingrid-matheu-01.jpg?im=Resize=(960),type=downsize",
    name: "Piso en Sant Marti",
    pokemon: "Charmander",
    pokemonId: 4,
  },
  {
    url: "./piso-en-gracia",
    image: "https://www.realia.es/storage/Blog/comprar-casa-o-piso-1698920869WDvc5.jpg",
    name: "Piso en Gracia",
    pokemon: "Squirtle",
    pokemonId: 7,
  },
];

class RelatedProperties extends HTMLElement {
  connectedCallback() {
    const cards = relatedProperties
      .map(
        ({ url, image, name, pokemon, pokemonId }) => `
          <li>
            <a href="${url}">
              <img src="${image}" alt="${name}" loading="lazy" />
              <br /> ${name}
              <span class="pokemon-habitant">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png"
                  alt=""
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <span>Habitante: ${pokemon}</span>
              </span>
            </a>
          </li>
        `,
      )
      .join("");

    this.innerHTML = `
      <aside>
        <h2>Pisos parecidos</h2>
        <ul>${cards}</ul>
      </aside>
    `;
  }
}

customElements.define("related-properties", RelatedProperties);
