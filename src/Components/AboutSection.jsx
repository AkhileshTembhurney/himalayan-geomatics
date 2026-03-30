import { useState } from "react";
import "./AboutSection.css";

function AboutSection() {

  const [open, setOpen] = useState(false);

  return (

    <section className="about-section">

      <div className="about-left">

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="team"
        />

      </div>


      <div className="about-right">

        <h4>About Himalayan Geomatics</h4>

        <h2>
          Get to Know Who We Are
          <br />
          as Professionals
        </h2>

        <p>
          Himalayan Geomatics provides geospatial survey,
          GIS mapping, drone survey, and consultancy services.
        </p>


        <div className="about-cards">

          <div className="about-box">
            <h3>Our Mission</h3>
            <p>
              Deliver accurate geospatial data and survey
              solutions.
            </p>
          </div>

          <div className="about-box">
            <h3>Our Vision</h3>
            <p>
              Provide modern GIS & survey solutions
              for government and private sector.
            </p>
          </div>

        </div>


        <button
          className="read-btn"
          onClick={() => setOpen(true)}
        >
          Read More
        </button>

      </div>


      {/* POPUP */}
      {open && (

        <div className="popup">

          <div className="popup-content">

            <h2>About Himalayan Geomatics</h2>

            <p>
              Himalayan Geomatics Consultant's Panchkula Haryana
              provides DGPS survey, ETS survey, GIS mapping,
              drone survey, land records, and consultancy.
            </p>

            <button
              onClick={() => setOpen(false)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </section>

  );

}

export default AboutSection;