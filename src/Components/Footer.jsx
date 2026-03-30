import '../Components/Footer.css'

function Footer() {
  return (
    <footer className="app-footer">
      <p>
        © {new Date().getFullYear()}
        {" "}
        Himalayan Geomatics Consultant's.
        All rights reserved.
      </p>
    </footer>
  )
}

export default Footer