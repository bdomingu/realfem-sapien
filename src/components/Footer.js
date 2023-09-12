import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faPinterest} from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';





function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-flex-container'>
              <h1>Realfemsapien</h1>
                <div className='footer-menu-container'>
                 <div className='footer-menu-flex'>
                 <li ><HashLink className='footer-items' smooth to='/#home'>Home</HashLink></li>
                 <li><HashLink className='footer-items' smooth to='/#about'>About</HashLink></li>
                 <li><HashLink className='footer-items' smooth to='/#channel'>Channel</HashLink></li>
                 <li><HashLink className='footer-items' smooth to='/#substack'>Substack</HashLink></li>
                 </div>
                 <div className='socials-container'>
                    <a href='https://www.instagram.com/realfemsapien/'><span><FontAwesomeIcon icon={faInstagram} size='lg'></FontAwesomeIcon></span></a>
                    <a href='https://www.tiktok.com/@realfemsapien?lang=en'><span><FontAwesomeIcon icon={faTiktok} size='lg'></FontAwesomeIcon></span></a>
                    <a href='https://www.facebook.com/RealFemAly'><span><FontAwesomeIcon icon={faFacebookF} size='lg'></FontAwesomeIcon></span></a>
                    <a href='https://www.youtube.com/@RealFemSapien'><span><FontAwesomeIcon icon={faYoutube} size='lg'></FontAwesomeIcon></span></a>
                    <a href=''><span><FontAwesomeIcon icon={faPinterest} size='lg'></FontAwesomeIcon></span></a>
                 </div>
                   
              </div>
            </div>
        </footer>
    )
}

export default Footer;