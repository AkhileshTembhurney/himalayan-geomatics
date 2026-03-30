import ImageSlider from "./ImageSlider"
import ServiceCards from "./ServiceCards"
import AboutSection from "./AboutSection"
import ServicesSection from "./ServicesSection"
import DomainSection from "./DomainSection"
import StatsSection from "./StatsSection"
import FieldSection from "./FieldSection"
import TeamSection from "./TeamSection"
import GallerySection from "./GallerySection"
import ClientsSection from "./ClientsSection"

import "../Components/Home.css"

function Home() {
  return (
    <>

      {/* ✅ HERO WRAPPER (IMPORTANT) */}
      <div className="hero-wrapper">

        {/* Slider Background */}
        <div className="slider-container">
          <ImageSlider />
        </div>

        {/* Overlay Content */}
        <div className="hero-section">
          <h1>Welcome to Himalayan Geomatics Consultant's</h1>
          <p className="subtitle">Panchkula, Haryana</p>
          <p className="description">
            Delivering precision and excellence in Geomatic services.
          </p>
          <button className="cta-button">Explore Services</button>
        </div>

      </div>

      {/* बाकी content नीचे आएगा */}
      <ServiceCards />
      <AboutSection />
      <ServicesSection />
      <DomainSection />
      <StatsSection />
      <FieldSection />
      <TeamSection />
      <GallerySection />
      <ClientsSection />

    </>
  )
}

export default Home