import "./ServicesSection.css";

function ServicesSection() {
  return (
    <section className="services">

     <div className="service-header">

  <h4 className="service-top">
    Fast Growing Services
  </h4>

  <h4 className="service-title">
    Grow Your Business Faster Using Our
    <br />
    Professional Service Solutions
  </h4>

  <div className="title-line"></div>

</div>

      <div className="service-grid">

        {/* card 1 */}
        <div className="service-item">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt=""
          />

          <div className="service-box">
            <h3>Satellite & GIS Services</h3>
            <p>
              High-resolution imagery, GIS mapping,
              drone survey, and spatial analysis.
            </p>
            <span>Read More »</span>
          </div>

        </div>


        {/* card 2 */}
        <div className="service-item">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt=""
          />

          <div className="service-box">
            <h3>Software & Web GIS</h3>
            <p>
              Web GIS, cloud apps, data systems,
              and custom software solutions.
            </p>
            <span>Read More »</span>
          </div>

        </div>


        {/* card 3 */}
        <div className="service-item">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt=""
          />

          <div className="service-box">
            <h3>Engineering & Survey</h3>
            <p>
              DGPS, ETS, drone survey, land survey,
              and engineering consultancy.
            </p>
            <span>Read More »</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;