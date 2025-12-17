import type { Page } from '../types'

type Props = {
  onNavigate: (page: Page) => void
}

const principles = [
  {
    title: 'Ingredientes florales',
    body: 'Lavanda comestible, violetas, citricos frescos y mantequilla local.',
    tag: 'Origen',
  },
  {
    title: 'Tecnica limpia',
    body: 'Glaseados espejo, bases de almendra y terminados minimalistas.',
    tag: 'Oficio',
  },
  {
    title: 'Piezas a medida',
    body: 'Paleta lavanda, empaques listos para regalo y etiquetado sencillo.',
    tag: 'Detalle',
  },
]

const process = [
  {
    title: 'Brief floral',
    detail: 'Elegimos notas florales y citricas segun el perfil que buscas.',
  },
  {
    title: 'Degustacion privada',
    detail: 'Mini tartas para ajustar dulzor, textura y empaque.',
  },
  {
    title: 'Produccion corta',
    detail: '48 h antes de tu fecha para asegurar brillo y frescura.',
  },
  {
    title: 'Entrega o montaje',
    detail: 'Listo para servir o con montaje en sitio, sin saturar la mesa.',
  },
]

function AboutPage({ onNavigate }: Props) {
  return (
    <>
      <section className="section about">
        <div className="about-media">
          <div className="frame">
            <div className="frame-overlay" />
            <div className="frame-inner">
              <p className="quote">
                "Trabajamos con calma y pocos elementos: flores, citricos y acabados pulidos."
              </p>
              <p className="signature">Sweet Soul - Equipo de reposteria</p>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Atelier</p>
          <h2>Reposteria fina con menos ruido y mas calma</h2>
          <p>
            Somos un taller boutique que hornea poco y bien. Preferimos sabores claros, colores
            suaves y empaques que no distraen. Cada pieza se entrega lista para disfrutar.
          </p>
          <ul className="list">
            <li>Pedidos con 48 h de anticipacion.</li>
            <li>Atencion directa para eventos y regalos.</li>
            <li>Opciones sin gluten o sin lacteos bajo pedido.</li>
          </ul>
          <div className="hero-actions" style={{ marginTop: 18 }}>
            <button className="btn primary" onClick={() => onNavigate('contacto')}>
              Agenda una llamada
            </button>
            <button className="btn ghost" onClick={() => onNavigate('productos')}>
              Ver carta
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Manifiesto</p>
          <div>
            <h2>La firma Sweet Soul</h2>
            <p className="section-lede">
              Tres pilares: perfil floral, tecnica limpia y personalizacion ligera.
            </p>
          </div>
        </div>
        <div className="value-grid">
          {principles.map((item) => (
            <article className="value-card" key={item.title}>
              <span className="pill">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Metodo</p>
          <div>
            <h2>Proceso simple</h2>
            <p className="section-lede">
              Te guiamos rapido: definimos sabor, probamos mini piezas y entregamos a tiempo.
            </p>
          </div>
        </div>
        <div className="process-grid">
          {process.map((step) => (
            <article className="process-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
        <div className="note">
          <span className="pill soft">Sello lavanda</span>
          Paleta neutra, tipografias limpias y empaques listos para regalar.
        </div>
      </section>
    </>
  )
}

export default AboutPage
