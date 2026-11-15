import {Link} from 'react-router-dom';
import '../Styles/Home.css'
import jazzdistrict from '../Assets/jazzdistrict.png'
import essentials from '../Assets/essentials.png'
import miles from '../Assets/miles.png'
import miles2 from '../Assets/miles2.png'
import jazzclub from '../Assets/jazzclub.png'
import coltrane from '../Assets/coltrane.png'
import glass from '../Assets/glass.png'

const Home = () =>{
    return (
        <div className="home">
            <div className="hero">
                {/* IMAGE: replace the orange .star in Home.css with your starburst png if you want */}
                <div className="star"></div>
                <div className="heroMeta">
                    <p>The Common Room c/o Roster<br />Beirut, Lebanon</p>
                    <div className="heroRight">
                        <p>@thecommonroomlb</p>
                        <span className="pill">Jazz Club</span>
                    </div>
                </div>
                <h1 className="heroText">
                    <span className="line">Jazz Collective</span>
                    <span className="line">"The Common Room"</span>
                </h1>
                <p className="heroIntro">
                    Live jazz / improvisation / jam sessions / performances / collaborations.
                    The Common Room is an independent jazz collective built around live music,
                    improvisation and shared space. A meeting point for musicians, listeners and the culture surrounding them.
                </p>
            </div>

            <div className="ticker">
                <div className="track">
                    <span>Live jazz / Improvisation / Jam sessions / Performances / Collaborations / </span>
                    <span>Live jazz / Improvisation / Jam sessions / Performances / Collaborations / </span>
                </div>
            </div>

            <div className="next">
                {/* IMAGE: put the Jazz District poster here (4:5) */}
                <div className="imageSlot" style={{ backgroundImage: `url(${jazzdistrict})` }}></div>
                <div className="nextInfo">
                    <h3>Next session</h3>
                    <h2>Jazz District</h2>
                    <p className="big">November 17th, 2026</p>
                    <p>8pm - 10:30pm at Raseef, Hamra</p>
                    <p>15$ tickets on door + one drink</p>
                    <Link to='/Register' className="book">Book your seats now!</Link>
                </div>
            </div>

            <div className="gallery">
                <h2>From the room</h2>
                <div className="galleryGrid">
                    {/* IMAGE 1: crowd or bar shot (4:5) */}
                    <div className="imageSlot" style={{ backgroundImage: `url(${essentials})` }}></div>
                    {/* IMAGE 2: musician close-up (4:5) */}
                    <div className="imageSlot" style={{ backgroundImage: `url(${miles})` }}></div>
                    {/* IMAGE 3: stage wide shot (4:5) */}
                    <div className="imageSlot" style={{ backgroundImage: `url(${coltrane})` }}></div>
                    {/* IMAGE 4: detail shot (4:5) */}
                    <div className="imageSlot" style={{ backgroundImage: `url(${jazzclub})` }}></div>
                    {/* IMAGE 5: audience (4:5) */}
                    <div className="imageSlot" style={{ backgroundImage: `url(${miles2})` }}></div>
                    {/* IMAGE 6: poster or flyer (4:5) */}
                    <div className="imageSlot" style={{ backgroundImage: `url(${glass})` }}></div>
                </div>
            </div>

            <div className="cta">
                <h2>Play with us. Come and listen.</h2>
                <Link to='/Contactus'> Get in touch </Link>
            </div>
        </div>
    )
}
export default Home;
