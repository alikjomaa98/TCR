import {Link} from 'react-router-dom';
import '../Styles/Services.css'

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>

      <div className="serviceItem">
        <h3>01</h3>
        <h2>Live sessions</h2>
        <p>Ticketed nights with invited artists, two sets and a drink included.</p>
      </div>

      <div className="serviceItem">
        <h3>02</h3>
        <h2>Jam sessions</h2>
        <p>Open improvisation nights. Bring your instrument and join the house band.</p>
      </div>

      <div className="serviceItem">
        <h3>03</h3>
        <h2>Private events</h2>
        <p>Book the collective for launches and dinners.</p>
      </div>

      <div className="serviceItem">
        <h3>04</h3>
        <h2>Collaborations</h2>
        <p>Work with musicians and designers on new projects.</p>
      </div>

      <Link to='/Contactus' className="servicesLink"> Ask about a service. </Link>
    </div>
  )
}
export default Services