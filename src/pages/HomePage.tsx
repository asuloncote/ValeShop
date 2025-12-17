import type { Page } from '../types'

type Props = {
  onNavigate: (page: Page) => void
}

const featured = [
  {
    title: 'Tarta de moras y lavanda',
    description: 'Base de almendra, crema ligera de vainilla y coulis floral.',
    price: '$420',
    tag: 'Firma',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Macarons de miel y violeta',
    description: 'Crujientes, con ganache de chocolate blanco y miel de azahar.',
    price: '$280 / caja de 8',
    tag: 'Sin gluten',
    image:
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mini tartas de limon meyer',
    description: 'Curd citrico, lavanda suave y merengue tostado.',
    price: '$360',
    tag: 'Temporada',
    image:
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=900&q=80',
  },
]

const availability = [
  { week: 'Esta semana', slots: '3 entregas libres', note: 'Jue, Vie y Sab - CDMX' },
  { week: 'Proxima semana', slots: '5 entregas libres', note: 'Agenda con 48 h' },
]

const testimonials = [
  {
    quote: 'Entregaron puntual y el empaque venia listo para regalar, sin logos ruidosos.',
    name: 'Claudia - evento corporativo',
    rating: 5,
  },
  {
    quote: 'La tarta de lavanda tuvo el dulzor justo y se veia impecable en la mesa.',
    name: 'Diego - brunch',
    rating: 5,
  },
  {
    quote: 'Pidieron pocos datos y resolvieron maridajes y horarios en la misma llamada.',
    name: 'Fernanda - boda civil',
    rating: 4,
  },
]

const gifts = [
  {
    title: 'Caja lavanda',
    detail: 'Macarons mixtos en caja lila con liston marfil y tarjeta simple.',
    timing: 'Entrega 48 h',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mini tartas listas',
    detail: 'Cuatro mini tartas en charola blanca con cubierta ventilada.',
    timing: 'Entrega 72 h',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80&sat=-15',
  },
]

function HomePage({ onNavigate }: Props) {
  return (
    <>
      <header className="hero">
        <div className="hero-body">
          <div className="hero-copy">
            <div className="eyebrow">Sweet Soul - Reposteria fina</div>
            <h1>Postres suaves, florales y hechos a pedido.</h1>
            <p className="lede">
              Tartas ligeras, glaseados limpios y macarons etereos. Horneado por encargo, con
              ingredientes de temporada y un estilo minimal.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => onNavigate('productos')}>
                Ver menu corto
              </button>
              <button className="btn ghost" onClick={() => onNavigate('contacto')}>
                Agenda tu pedido
              </button>
            </div>
            <div className="hero-stats">
              <div>
                <p className="stat-number">48 h</p>
                <p className="stat-label">Produccion bajo pedido</p>
              </div>
              <div>
                <p className="stat-number">CDMX</p>
                <p className="stat-label">Entrega programada</p>
              </div>
              <div>
                <p className="stat-number">Tonos lavanda</p>
                <p className="stat-label">Empaque limpio y listo para regalar</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-plate">
              <div className="orb orb-1" />
              <div className="orb orb-2" />
              <div className="plate">
                <div className="plate-top">
                  <p className="plate-title">Coulis floral</p>
                  <p className="plate-note">Lavanda | Vainilla | Limon</p>
                </div>
                <div className="plate-bottom">
                  <p className="plate-price">$420</p>
                  <p className="plate-tag">Entrega en CDMX y area metropolitana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section availability">
        <div className="availability-card">
          <div>
            <p className="eyebrow">Disponibilidad</p>
            <h2>Agenda simple y entregas con 48 h</h2>
            <p className="section-lede">
              Cuentanos fecha, zona y horario preferido. Confirmamos cupo y opciones por WhatsApp.
            </p>
          </div>
          <div className="availability-grid">
            {availability.map((slot) => (
              <div className="availability-item" key={slot.week}>
                <div className="pill soft">{slot.week}</div>
                <p className="availability-strong">{slot.slots}</p>
                <p className="availability-note">{slot.note}</p>
              </div>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 10 }}>
            <button className="btn primary" onClick={() => onNavigate('contacto')}>
              Pedir por WhatsApp
            </button>
            <button className="btn ghost" onClick={() => onNavigate('productos')}>
              Ver menu
            </button>
          </div>
        </div>
      </section>

      <section className="section products" id="productos">
        <div className="section-header">
          <p className="eyebrow">Seleccion breve</p>
          <div>
            <h2>Postres que hablan suave</h2>
            <p className="section-lede">
              Aromas florales, dulzor balanceado y presentaciones limpias para celebrar sin exceso de
              informacion.
            </p>
          </div>
        </div>
        <div className="product-grid">
          {featured.map((item) => (
            <article className="product-card" key={item.title}>
              <div className="product-media">
                <img className="product-img" src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="product-head">
                <span className="pill">{item.tag}</span>
                <p className="product-price">{item.price}</p>
              </div>
              <h3>{item.title}</h3>
              <p className="product-desc">{item.description}</p>
              <button className="link-button" onClick={() => onNavigate('contacto')}>
                Reservar
              </button>
            </article>
          ))}
        </div>
        <div className="note">
          <span className="pill soft">A medida</span>
          Podemos ajustar dulzor, flores y empaque segun tu evento.
        </div>
      </section>

      <section className="section gifts">
        <div className="section-header">
          <p className="eyebrow">Listo para entregar</p>
          <div>
            <h2>Empaques y regalos sin ruido</h2>
            <p className="section-lede">
              Piezas con liston, tarjeta neutra y proteccion para traslado. Agendamos horario y punto
              de entrega.
            </p>
          </div>
        </div>
        <div className="gift-grid">
          {gifts.map((gift) => (
            <article className="gift-card" key={gift.title}>
              <div className="gift-media">
                <img className="product-img" src={gift.image} alt={gift.title} loading="lazy" />
              </div>
              <div className="gift-head">
                <span className="pill soft">{gift.timing}</span>
                <h3>{gift.title}</h3>
                <p className="gift-desc">{gift.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="note">
          <span className="pill soft">Logistica</span>
          Entregas en CDMX y area metropolitana con horarios programados.
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-header">
          <p className="eyebrow">Confianza</p>
          <div>
            <h2>Lo que dicen quienes piden</h2>
            <p className="section-lede">Mensajes cortos sobre puntualidad, empaque y sabor.</p>
          </div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="testimonial-rating" aria-hidden="true">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <svg
                    key={index}
                    className="star-icon"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M12 2.8l2.2 6.2h6.2l-5 3.6 1.9 5.9L12 16.7l-5.3 3.8 1.9-5.9-5-3.6h6.2z" />
                  </svg>
                ))}
              </div>
              <p className="quote">{item.quote}</p>
              <p className="signature">{item.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="about-media">
          <div className="frame">
            <div className="frame-overlay" />
            <div className="frame-inner">
              <p className="quote">
                "La elegancia esta en los matices: lavanda fresca, limones brillantes y acabados
                simples."
              </p>
              <p className="signature">Equipo Sweet Soul - Reposteria fina</p>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Atelier</p>
          <h2>Reposteria fina sin ruido visual</h2>
          <p>
            Horneamos en lotes pequenos, priorizamos ingredientes florales y citricos, y preferimos
            lineas limpias. Todo sale listo para regalar o montar en mesa.
          </p>
          <ul className="list">
            <li>Pedidos con 48 h de anticipacion.</li>
            <li>Empaques en tonos lavanda y blanco.</li>
            <li>Opciones sin gluten bajo pedido.</li>
          </ul>
          <div className="hero-actions" style={{ marginTop: 18 }}>
            <button className="btn ghost" onClick={() => onNavigate('sobre')}>
              Conocer mas
            </button>
            <button className="btn primary" onClick={() => onNavigate('contacto')}>
              Hablar del evento
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
