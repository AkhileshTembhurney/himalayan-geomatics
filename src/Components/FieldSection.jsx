import { useEffect, useState } from "react";
import "./FieldSection.css";

const images = [
  "https://picsum.photos/900/500?1",
  "https://picsum.photos/900/500?2",
  "https://picsum.photos/900/500?3",
  "https://picsum.photos/900/500?4",
  "https://picsum.photos/900/500?5",
];

function FieldSection() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const i = setInterval(() => {

      setIndex((prev) => (prev + 1) % images.length);

    }, 3000);

    return () => clearInterval(i);

  }, []);

  return (

    <section className="field">

      <div className="field-left">

        <p className="small">
          Point Collection In The Field
        </p>

        <h2>
          Advanced Field Point Collection
          <br />
          Techniques for Mapping
        </h2>

        <p className="desc">
          Point collection in the field involves gathering precise
          location data using GPS, DGPS, total stations,
          and mobile apps.
        </p>

        <button className="btn">
          Get In Touch
        </button>

      </div>


      <div className="field-right">

        <img
          src={images[index]}
          alt=""
        />

      </div>

    </section>

  );
}

export default FieldSection;