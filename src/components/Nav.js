import { useState } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
    return (
      <nav className="navigation">
        <div className='logo'>
           <h2>Realfemsapien</h2>
           <h4>Mrs. Aly Drummond</h4>
        </div>
        <div className='menu-items-container'>
        <div className={`menu-items ${isMenuOpen ? 'show' : ''}`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Channel</li>
                <li>Substack</li>
            </ul>
        </div>
        </div>
        <div className='lets-talk-container'>
            <a className='lets-talk-button' href=''>Lets Talk</a>
        </div>
        <button className='hamburger-icon' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </nav>
    );
  }
export default Nav;