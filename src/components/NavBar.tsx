import { useState } from 'react'
import type { Page } from '../types'

type Props = {
  current: Page
  onNavigate: (page: Page) => void
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Inicio', page: 'inicio' },
  { label: 'Coleccion', page: 'productos' },
  { label: 'Atelier', page: 'sobre' },
  { label: 'Contacto', page: 'contacto' },
]

function NavBar({ current, onNavigate }: Props) {
  const [open, setOpen] = useState(false)

  const handleNav = (page: Page) => {
    onNavigate(page)
    setOpen(false)
  }

  return (
    <nav className="nav">
      <div className="brand">
        <span className="brand-mark">SS</span>
        <div>
          <p className="brand-name">Sweet Soul</p>
          <p className="brand-sub">Reposteria fina</p>
        </div>
      </div>
      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.page}
            href={`#${item.page}`}
            className={current === item.page ? 'active' : ''}
            onClick={(event) => {
              event.preventDefault()
              handleNav(item.page)
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
      <a
        className="nav-cta"
        href="#contacto"
        onClick={(event) => {
          event.preventDefault()
          handleNav('contacto')
        }}
      >
        Agenda tu pedido
      </a>
      <button
        className="nav-toggle"
        aria-label="Abrir menu"
        aria-expanded={open}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <div className="nav-drawer">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={current === item.page ? 'active' : ''}
              onClick={() => handleNav(item.page)}
            >
              {item.label}
            </button>
          ))}
          <button className="drawer-cta" onClick={() => handleNav('contacto')}>
            Agenda tu pedido
          </button>
        </div>
      )}
    </nav>
  )
}

export default NavBar
