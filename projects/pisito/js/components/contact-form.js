class ContactForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="contact">
        <div>
          <h2>Contactar</h2>
          <p>
            Marta particular: Llamar al
            <a href="tel:+34612345678">+34 612 34 56 78</a>
          </p>
        </div>

        <form>
          <div>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="John Doe" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div>
            <label for="telefono-principal">Tu teléfono</label>
            <input
              type="tel"
              id="telefono-principal"
              name="telefono-principal"
              placeholder="+34123456789"
              required
            />
          </div>
          <div>
            <label for="motivo">Motivo</label>
            <select name="motivo" id="motivo">
              <option value="default" disabled selected>Selecciona una opcion</option>
              <option value="visita">Quiero visitarlo</option>
              <option value="pregunta">Tengo una pregunta</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div>
            <label for="date">¿Cuándo?</label>
            <input type="date" name="date" id="date" />
          </div>

          <fieldset>
            <legend>¿Cómo prefieres que te contactemos?</legend>
            <input type="radio" name="radio" id="radio" />
            <label for="radio">Telefono</label>
            <input type="radio" name="radio" id="radio2" />
            <label for="radio2">Correo</label>
          </fieldset>

          <div>
            <label for="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" placeholder="Tu mensaje"></textarea>
          </div>

          <div>
            <input type="checkbox" name="checkbox" id="checkbox" required checked />
            <label for="checkbox">
              Acepto la <a href="./policy">política de privacidad</a>
            </label>
          </div>

          <input type="submit" value="Subir" />
        </form>
      </section>
    `;
  }
}

customElements.define("contact-form", ContactForm);
