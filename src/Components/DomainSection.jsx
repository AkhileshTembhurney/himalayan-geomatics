import { useState } from "react";
import "./DomainSection.css";

function DomainSection() {

  const [active, setActive] = useState("smart");

  const data = {

    smart: {
      title: "Smart City",
      desc:
        "A smart city uses advanced technology and GIS for better urban management.",
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      list: [
        "WebGIS Portal",
        "Mobile Apps",
        "Command Control",
        "Emergency System",
        "Vehicle Tracking"
      ]
    },

    municipality: {
      title: "Municipality",
      desc:
        "Municipal GIS, tax system, land records and planning.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      list: [
        "Property GIS",
        "Tax System",
        "Planning",
        "Survey",
        "Mapping"
      ]
    },

    agriculture: {
      title: "Agriculture",
      desc:
        "Satellite monitoring, drone survey and crop analysis.",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      list: [
        "Crop Survey",
        "Drone Mapping",
        "Land Analysis",
        "GIS",
        "Satellite"
      ]
    },

    telecom: {
      title: "Telecom",
      desc:
        "Tower survey, fiber mapping and telecom GIS.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      list: [
        "Tower Survey",
        "Fiber Mapping",
        "Network GIS",
        "Planning",
        "Reports"
      ]
    },

    forestry: {
      title: "Forestry",
      desc:
        "Forest GIS and satellite monitoring.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      list: [
        "Forest Mapping",
        "Satellite",
        "Survey",
        "Land",
        "GIS"
      ]
    }

  };


  return (

    <section className="domain">

      <h2 className="domain-title">Domains</h2>

      <p className="domain-sub">
        Consulting and value added services in multiple sectors
      </p>


      {/* buttons */}

      <div className="domain-tabs">

        {Object.keys(data).map((key) => (

          <div
            key={key}
            className={
              active === key
                ? "tab active"
                : "tab"
            }
            onClick={() => setActive(key)}
          >
            {data[key].title}
          </div>

        ))}

      </div>


      {/* panel */}

      <div className="domain-card">

        <div className="card-text">

          <h3>{data[active].title}</h3>

          <p>{data[active].desc}</p>

          <ul>

            {data[active].list.map((x, i) => (
              <li key={i}>{x}</li>
            ))}

          </ul>

          <button className="read-btn">
            Read More
          </button>

        </div>


        <div className="card-img">

          <img src={data[active].img} />

        </div>

      </div>

    </section>

  );
}

export default DomainSection;