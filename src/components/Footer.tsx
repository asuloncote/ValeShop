import type { Page } from '../types'

type Props = {
  onNavigate: (page: Page) => void
}

const footerLinks: { label: string; page: Page }[] = [
  { label: 'Inicio', page: 'inicio' },
  { label: 'Coleccion', page: 'productos' },
  { label: 'Contacto', page: 'contacto' },
]

function Footer({ onNavigate }: Props) {
  return (
    <footer className="footer">
      <div>
        <p>Sweet Soul - Reposteria fina hecha a pedido</p>
        <p>
          Entregas en CDMX y area metropolitana -{' '}
          <a href="tel:+5215512345678">+52 1 55 1234 5678</a>
        </p>
      </div>
      <div className="footer-links">
        {footerLinks.map((item) => (
          <a
            key={item.page}
            href={`#${item.page}`}
            onClick={(event) => {
              event.preventDefault()
              onNavigate(item.page)
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
