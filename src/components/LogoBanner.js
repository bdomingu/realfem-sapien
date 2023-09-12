import './LogoBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';

function LogoBanner() {
    return (
        <div className='logo-banner-container'>
            <div className='banner-content-container'>
              <h2>As seen in:</h2>
              <div className='banner-socials-container'>
              <a href='https://www.instagram.com/realfemsapien/'><span><FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon></span></a>
              <a href='https://www.tiktok.com/@realfemsapien?lang=en'><span><FontAwesomeIcon icon={faTiktok} ></FontAwesomeIcon></span></a>
              <a href='https://www.facebook.com/RealFemAly'><span><FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon></span></a>
              <a href='https://www.youtube.com/@RealFemSapien'><span><FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon></span></a>
              </div>
            </div>
        </div>
    )
}

export default LogoBanner;