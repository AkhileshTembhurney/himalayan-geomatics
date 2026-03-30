import { useState } from "react"
import logo from '../assets/logo.png'
import '../Components/Header.css'

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="app-header">

      <div className="header-left">
        <img src={logo} alt="Logo" className="app-logo" />
        <span className="company-name">
          Himalayan Geomatics Consultant's
        </span>

        {/* ✅ Hamburger Button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* ✅ Navigation */}
      <nav className={`header-right ${menuOpen ? "active" : ""}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="service" onClick={() => setMenuOpen(false)}>Service</a>
        <a href="case-studies" onClick={() => setMenuOpen(false)}>Case Studies</a>
        <a href="gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

    </header>
  )
}

export default Header