import { useState } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';


function Nav(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
    return (
      <section id='home'>
      <nav className="navigation">
        <div className='logo'>
           <HashLink className='logo-title' smooth to='/#home'><h2>Realfemsapien</h2></HashLink>
           <h4>Mrs. Aly Drummond</h4>
        </div>
        <div className='menu-items-container'>
        <div className={`menu-items ${isMenuOpen ? 'show' : ''}`}>
            <ul>
                <li ><HashLink className='nav-items' smooth to='/#home'>Home</HashLink></li>
                <li><HashLink className='nav-items' smooth to='/#about'>About</HashLink></li>
                <li><HashLink className='nav-items' smooth to='/#channel'>Channel</HashLink></li>
                <li><HashLink className='nav-items'smooth to='/#substack'>Substack</HashLink></li>
            </ul>
        </div>
        </div>
        <div className='lets-talk-container'>
            <button className='lets-talk-button' onClick={props.setCheckout}>Lets Talk</button>
            <button className='hamburger-icon' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
        </div>
       
      </nav>
      </section>
    );
  }
export default Nav;