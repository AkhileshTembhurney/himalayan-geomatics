import { useEffect, useState } from "react";
import "./GallerySection.css";

const images = [
  "https://picsum.photos/400/300?1",
  "https://picsum.photos/400/300?2",
  "https://picsum.photos/400/300?3",
  "https://picsum.photos/400/300?4",
  "https://picsum.photos/400/300?5",
  "https://picsum.photos/400/300?6",
  "https://picsum.photos/400/300?7",
  "https://picsum.photos/400/300?8",
  "https://picsum.photos/400/300?9",
  "https://picsum.photos/400/300?10",
];

function GallerySection() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const i = setInterval(() => {

      setIndex((prev) =>
        prev + 1 >= images.length - 3 ? 0 : prev + 1
      );

    }, 2500);

    return () => clearInterval(i);

  }, []);

  return (

    <section className="gallery">

      <h2 className="gallery-title">
        Our Gallery
      </h2>

      <div className="gallery-window">

        <div
          className="gallery-track"
          style={{
            transform: `translateX(-${index * 25}%)`,
          }}
        >

          {images.map((img, i) => (

            <div className="gallery-card" key={i}>

              <img src={img} />

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default GallerySection;