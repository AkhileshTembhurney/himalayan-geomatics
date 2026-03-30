import "./TeamSection.css";

const team = [
  {
    name: "Dr. Lokesh Sinha",
    role: "Chairman",
    img: "https://i.pravatar.cc/400?1",
    fb: "#",
    tw: "#",
    ig: "#",
    li: "#",
  },
  {
    name: "Dr. Rajesh Paul",
    role: "CEO & Founder",
    img: "https://i.pravatar.cc/400?2",
    fb: "#",
    tw: "#",
    ig: "#",
    li: "#",
  },
  {
    name: "Divya Paul",
    role: "Director",
    img: "https://i.pravatar.cc/400?3",
    fb: "#",
    tw: "#",
    ig: "#",
    li: "#",
  },
  {
    name: "Ajit Roy",
    role: "Vice President",
    img: "https://i.pravatar.cc/400?4",
    fb: "#",
    tw: "#",
    ig: "#",
    li: "#",
  },
];

function TeamSection() {
  return (
    <section className="team">

      <p className="team-small">
        Company's Success
      </p>

      <h2 className="team-title">
        Meet The Team
      </h2>

      <div className="team-grid">

        {team.map((m, i) => (

          <div className="team-card" key={i}>

            <div className="img-box">

              <img src={m.img} />

              <div className="overlay">

                <div className="social">

                  <a href={m.fb}>f</a>
                  <a href={m.tw}>t</a>
                  <a href={m.ig}>i</a>
                  <a href={m.li}>in</a>

                </div>

              </div>

            </div>

            <div className="info">

              <h3>{m.name}</h3>
              <p>{m.role}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TeamSection;