import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import '../Styles/Footer.css'

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className="socialMedia">
                <InstagramIcon/> <YouTubeIcon/>
            </div>
            <p> &copy; 2026 The Common Room. Powered by Roster. </p>
        </div>
    )
}
export default Footer;
