import '../Styles/About.css'
import mileslong from '../Assets/mileslong.png'
const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="aboutGrid">
        <section>
          <h2>Shared space</h2>
          <p>
            The Common Room is an independent jazz collective built around live music,
            improvisation and shared space. A meeting point for musicians, listeners and the culture surrounding them.
          </p>
          <p>Live jazz / improvisation / jam sessions / performances / collaborations.</p>
        </section>
        <div className="imageSlot" style={{ backgroundImage: `url(${mileslong})` }}></div>
        
      </div>
    </div>
  )
}
export default About
