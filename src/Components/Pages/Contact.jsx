import "./Contact.css"

function Contact() {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We are here to help you with GIS, Survey & Mapping solutions.</p>

          <div className="info-item">
            <strong>Email:</strong>
            <p>info@hgc.com</p>
          </div>

          <div className="info-item">
            <strong>Phone:</strong>
            <p>+91 XXXXXXXX</p>
          </div>

          <div className="info-item">
            <strong>Location:</strong>
            <p>Panchkula, Haryana</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      {/* ✅ GOOGLE MAP SECTION */}
      <div className="map-section">

        <h2>Our Location</h2>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=Panchkula,Haryana&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>

      </div>

    </div>
  )
}

export default Contact