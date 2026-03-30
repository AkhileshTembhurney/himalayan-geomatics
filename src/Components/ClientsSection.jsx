import "./ClientsSection.css";

const logos = [
  "https://picsum.photos/200/80?1",
  "https://picsum.photos/200/80?2",
  "https://picsum.photos/200/80?3",
  "https://picsum.photos/200/80?4",
  "https://picsum.photos/200/80?5",
  "https://picsum.photos/200/80?6",
  "https://picsum.photos/200/80?7",
  "https://picsum.photos/200/80?8",
  "https://picsum.photos/200/80?9",
  "https://picsum.photos/200/80?10",
];

function ClientsSection() {
  return (
    <section className="clients">

      <p className="small">Our Clients</p>

      <h2>
        Valued Clients Who Believe In Our Work
      </h2>


      {/* row 1 */}

      <div className="logo-row left">

        <div className="logo-track">

          {logos.concat(logos).map((img, i) => (
            <div className="logo-card" key={i}>
              <img src={img} />
            </div>
          ))}

        </div>

      </div>


      {/* row 2 */}

      <div className="logo-row right">

        <div className="logo-track">

          {logos.concat(logos).map((img, i) => (
            <div className="logo-card" key={i}>
              <img src={img} />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ClientsSection;