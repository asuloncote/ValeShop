import type { Page } from '../types'

type Props = {
  onNavigate: (page: Page) => void
}

const signature = [
  {
    title: 'Tarta de moras y lavanda',
    description: 'Almendra suave, crema de vainilla y coulis floral con acabado espejo.',
    price: '$420',
    tag: 'Firma',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Macarons de miel',
    description: 'Ganache de chocolate blanco, miel de azahar y un toque de violeta.',
    price: '$280 / caja de 8',
    tag: 'Sin gluten',
    image:
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Opera de violetas',
    description: 'Bizcocho de almendra, cafe tenue y glaseado malva ultra liso.',
    price: '$360',
    tag: 'Edicion corta',
    image:
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Tarta de limon meyer',
    description: 'Curd citrico con lavanda ligera y merengue tostado.',
    price: '$390',
    tag: 'Temporada',
    image:
      'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=900&q=80',
  },
]

const boxes = [
  {
    title: 'Caja de macarons lavanda',
    description: 'Mix floral y citrico en tonos lila, lista para regalar.',
    price: '$540 / caja de 16',
    tag: 'Regalos',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80&sat=-20',
  },
  {
    title: 'Degustacion de la casa',
    description: 'Seis mini tartas para probar los perfiles florales.',
    price: '$680',
    tag: 'Degustacion',
    image:
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=900&q=80&sat=-10',
  },
]

const experiences = [
  {
    title: 'Mesa de postres',
    description: 'Montaje minimalista desde 30 pax, con flores frescas y senaletica.',
    price: 'Desde $6,500',
    tag: 'Eventos',
  },
  {
    title: 'Tea time floral',
    description: 'Servicio de te y reposteria para reuniones de 10 a 18 personas.',
    price: 'Desde $3,200',
    tag: 'Catering',
  },
]

function ProductsPage({ onNavigate }: Props) {
  return (
    <>
      <section className="section page-intro">
        <p className="eyebrow">Carta corta</p>
        <h2>Postres de autor en tonos lavanda</h2>
        <p className="section-lede">
          Piezas de reposteria hechas a pedido. Poca azucar, sabores florales y terminados pulidos.
        </p>
        <div className="hero-actions" style={{ marginTop: 18 }}>
          <button className="btn primary" onClick={() => onNavigate('contacto')}>
            Cotizar evento
          </button>
          <button className="btn ghost" onClick={() => onNavigate('sobre')}>
            Ver el atelier
          </button>
        </div>
      </section>

      <section className="section products">
        <div className="section-header">
          <p className="eyebrow">Coleccion</p>
          <div>
            <h2>Seleccion firma</h2>
            <p className="section-lede">
              Cuatro piezas esenciales que resumen el estilo Sweet Soul: limpio, floral y sutil.
            </p>
          </div>
        </div>
        <div className="product-grid">
          {signature.map((item) => (
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
                Reservar o personalizar
              </button>
            </article>
          ))}
        </div>
        <div className="note">
          <span className="pill soft">Sin conservadores</span>
          Produccion en lotes pequenos con mantequilla y flores comestibles de origen local.
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Boxes & tasting</p>
          <div>
            <h2>Para regalar o compartir</h2>
            <p className="section-lede">
              Presentaciones listas, tarjetas limpias y liston en tono lavanda.
            </p>
          </div>
        </div>
        <div className="product-grid">
          {boxes.map((item) => (
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
                Pedir ahora
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience">
        <div className="section-header">
          <p className="eyebrow">Experiencias</p>
          <div>
            <h2>Eventos a la medida</h2>
            <p className="section-lede">
              Logistica, montaje y maridajes para que todo se vea y sepa ligero.
            </p>
          </div>
        </div>
        <div className="product-grid">
          {experiences.map((item) => (
            <article className="product-card service-card" key={item.title}>
              <div className="product-head">
                <span className="pill">{item.tag}</span>
                <p className="product-price">{item.price}</p>
              </div>
              <h3>{item.title}</h3>
              <p className="product-desc">{item.description}</p>
              <button className="link-button" onClick={() => onNavigate('contacto')}>
                Agendar llamada
              </button>
            </article>
          ))}
        </div>
        <div className="note">
          <span className="pill soft">Logistica</span>
          Coordinamos entrega, montaje y maridajes con vinos o tes seleccionados.
        </div>
      </section>
    </>
  )
}

export default ProductsPage
