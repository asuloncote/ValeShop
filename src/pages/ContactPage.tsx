import type { FormEvent } from 'react'
import type { Page } from '../types'

type Props = {
  onNavigate: (page: Page) => void
}

const contacts = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5215512345678',
    value: '+52 1 55 1234 5678',
    note: 'Atencion directa',
  },
  {
    label: 'Correo',
    href: 'mailto:hola@sweetsoul.studio',
    value: 'hola@sweetsoul.studio',
    note: 'Pedidos y cotizaciones',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    value: '@sweetsoul.studio',
    note: 'Nuevas piezas y tonos',
  },
]

function ContactPage({ onNavigate }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onNavigate('contacto')
    alert('Gracias por tu interes. Respondemos en menos de 24 horas.')
  }

  return (
    <>
      <section className="section contact">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Agenda tu pedido</h2>
          <p className="section-lede">
            Escribenos con la fecha de tu evento, numero de invitados y preferencia de sabores. Nos
            gusta responder rapido y sin vueltas.
          </p>
          <div className="contact-grid">
            {contacts.map((item) => (
              <div className="contact-card" key={item.label}>
                <p className="label">{item.label}</p>
                <a href={item.href} className="contact-link">
                  {item.value}
                </a>
                <p className="contact-note">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-cta">
          <p className="badge">Cupos semanales</p>
          <h3>Horarios de entrega</h3>
          <p>Jueves a domingo - 10:00 a 18:00</p>
          <button className="btn primary full" onClick={() => onNavigate('productos')}>
            Ver menu sugerido
          </button>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Escribenos</p>
          <div>
            <h2>Cuentanos tu evento</h2>
            <p className="section-lede">
              Fecha, invitados y si prefieres opciones sin gluten o sin lacteos.
            </p>
          </div>
        </div>
        <div className="contact-form-card">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-label="Formulario de contacto Sweet Soul"
          >
            <div className="form-grid">
              <label className="form-field">
                <span>Nombre y apellido</span>
                <input
                  className="input"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  minLength={3}
                />
              </label>
              <label className="form-field">
                <span>Correo electronico</span>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="nombre@correo.com"
                  required
                />
              </label>
              <label className="form-field">
                <span>Fecha del evento</span>
                <input className="input" type="date" name="date" aria-label="Fecha del evento" />
              </label>
              <label className="form-field">
                <span>Invitados</span>
                <input
                  className="input"
                  name="guests"
                  placeholder="Ej. 40"
                  pattern="\\d*"
                  inputMode="numeric"
                />
              </label>
            </div>
            <label className="form-field">
              <span>Mensaje</span>
              <textarea
                className="textarea"
                name="message"
                rows={4}
                placeholder="Cuentanos lo que buscas: sabores, empaque, montaje..."
              />
            </label>
            <div className="hero-actions" style={{ marginTop: 6 }}>
              <button className="btn primary" type="submit">
                Enviar solicitud
              </button>
              <button className="btn ghost" type="button" onClick={() => onNavigate('productos')}>
                Ver carta
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactPage
