import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faPinterest} from '@fortawesome/free-brands-svg-icons'




function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-flex-container'>
              <h1>Realfemsapien</h1>
                <div className='footer-menu-container'>
                 <div className='footer-menu-flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Channel</li>
                    <li>Substack</li>
                 </div>
                 <div className='socials-container'>
                    <span><FontAwesomeIcon icon={faInstagram} size='lg'></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faTiktok} size='lg'></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faFacebookF} size='lg'></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faYoutube} size='lg'></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faPinterest} size='lg'></FontAwesomeIcon></span>
                 </div>
                   
              </div>
            </div>
        </footer>
    )
}

export default Footer;