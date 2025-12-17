import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import type { Page } from './types'

const parseHash = (hash: string): Page => {
  const value = hash.replace('#', '')
  if (value === 'productos' || value === 'sobre' || value === 'contacto') {
    return value
  }
  return 'inicio'
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window === 'undefined') return 'inicio'
    return parseHash(window.location.hash)
  })
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    const handleHashChange = () => {
      setCurrentPage(parseHash(window.location.hash))
    }
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    if (typeof window !== 'undefined') {
      if (!window.location.hash) {
        window.location.hash = 'inicio'
      }
      window.addEventListener('hashchange', handleHashChange)
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(loadingTimer)
    }
  }, [])

  const navigate = (next: Page) => {
    if (typeof window !== 'undefined') {
      window.location.hash = next
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setCurrentPage(next)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'productos':
        return <ProductsPage onNavigate={navigate} />
      case 'sobre':
        return <AboutPage onNavigate={navigate} />
      case 'contacto':
        return <ContactPage onNavigate={navigate} />
      default:
        return <HomePage onNavigate={navigate} />
    }
  }

  return (
    <div className="page">
      {isLoading && (
        <div className="loading-overlay">
          <div className="loader-shell">
            <div className="pastry-loader">
              <span className="loader-crumb" />
              <span className="loader-crumb" />
              <span className="loader-crumb" />
            </div>
            <p className="loader-text">Preparando algo dulce...</p>
          </div>
        </div>
      )}
      <div className="nav-shell">
        <NavBar current={currentPage} onNavigate={navigate} />
      </div>
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
      {showScrollTop && (
        <button
          className="scroll-top"
          aria-label="Volver arriba"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App
