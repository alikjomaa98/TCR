import '../Styles/Contact.css'

const Contactus = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contactGrid">
        <div>
          <h2>Book the room</h2>
          <p>Musicians, collaborators, venues and brands: tell us what you have in mind.</p>
          <p>@thecommonroomlb<br />The Common Room c/o Roster<br />Beirut, Lebanon</p>
        </div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="5"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}
export default Contactus
