import {Link} from 'react-router-dom';
import EventItem from '../Components/EventItem.jsx'
import '../Styles/Events.css'
import jazzdistrict from '../Assets/jazzdistrict.png'
import tcr from '../Assets/tcr.png'
import soon from '../Assets/soon.jpg'


const Events = () => {
  return (
    <div className="events">
      <h1>Events</h1>
      <EventItem img={jazzdistrict} date='November 17th, 2026' title='Jazz District' description='8pm - 10:30pm at Raseef, Hamra. 15$ tickets on door + one drink.' />
      <EventItem img={tcr} date='CR-001-2026' title='The Common Room Sessions' description='Live jazz, improvisation and jam sessions.' />
      <EventItem img={soon} date='Coming soon' title='' />
      <Link to='/Register' className='registerLink'> Register for an event </Link>
    </div>
  )
}
export default Events
