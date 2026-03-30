
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Routes, Route } from "react-router-dom"

import Home from "./Components/Home"
import Services from "./Components/Pages/Services"
import CaseStudies from "./Components/Pages/CaseStudies"
import Gallery from "./Components/Pages/Gallery"
import Contact from "./Components/Pages/Contact"


function App() {
  return (
    <div className="app-container">

      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
      
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App

