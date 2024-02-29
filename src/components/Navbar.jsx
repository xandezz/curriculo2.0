import { useState } from 'react';
import './Navbar.css';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = ({status, closeMobileMenu}) => {
    const [active, setActive] = useState('nav-list');
    const navToggle = () => {
        active === 'nav-list' ? setActive('nav-list active text-gradiente') : setActive('nav-list')
    }


    return (
        <header className={status}>
            <nav className='text-gradiente'>
                <p className='logo' onClick={closeMobileMenu}><Link to='/'>Alexandre Pereira</Link></p>
                <div className='navbar-icones'>
                    <a href="https://www.linkedin.com/in/alexandre-pereira-queiroz-de-souza/" target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} className='icone fa-lg' 
                    onClick={closeMobileMenu}
                    />
                    </a>
                    <a href="https://www.linkedin.com/in/alexandre-pereira-queiroz-de-souza/" target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className='icone fa-lg' 
                    onClick={closeMobileMenu}
                    />
                    </a>
                    <a href="https://github.com/xandezz" target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'github']} className='icone fa-lg' 
                    onClick={closeMobileMenu}
                    />
                    </a>
                </div>
                <div className={active} >
                    <Link to='/' onClick={closeMobileMenu}>Home</Link>
                    <Link to='/projects' onClick={closeMobileMenu}>Projetos</Link>
                    <Link to='/sobremim' onClick={closeMobileMenu}>Sobremim</Link>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;