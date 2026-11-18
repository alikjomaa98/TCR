import { useState } from 'react'
import '../Styles/Register.css'

const Register = () => {
  const [eventName, setEventName] = useState('Jazz District')
  const [tickets, setTickets] = useState(1)
  const [message, setMessage] = useState('')


  let price = 15
  let date = 'November 17th, 2026'
  if (eventName === 'The Common Room Sessions') {
    price = 10
    date = 'Date to be announced'
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <div className="registerGrid">
        <div className="registerForm">
          <select onChange={(e) => setEventName(e.target.value)}>
            <option>Jazz District</option>
            <option>The Common Room Sessions</option>
          </select>
          <input value={tickets} onChange={(e) => setTickets(e.target.value)} />
          <button onClick={() => setMessage('Seats booked for ' + eventName + '!')}>Book your seats</button>
          
        </div>

        <div className="summary">
          <h3>Your event</h3>
          <h2>{eventName}</h2>
          <p>{date}</p>
          <p>{price}$ per ticket + one drink</p>
          <p className="total">Total: {tickets * price}$</p>
        </div>
      </div>
    </div>
  )
}
export default Register