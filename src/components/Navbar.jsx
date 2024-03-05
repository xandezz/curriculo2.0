import { useState } from 'react';
import './Navbar.css';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = ({ status, closeMobileMenu }) => {
    const [active, setActive] = useState('nav-list');
    const navToggle = () => {
        active === 'nav-list' ? setActive('nav-list active text-gradiente') : setActive('nav-list')
    }


    return (
        <header className={status}>
            <nav className='text-gradiente'>
                <p className='logo-alexandre' onClick={closeMobileMenu}><Link to='/curriculo2.0' className='logo-container'><img src="Logo.png" alt="logo" className='logo' />Alexandre Pereira</Link></p>
                <div className='navbar-icones'>
                    <a href="https://contate.me/alexandrepereira" target='_blank'>
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
                    <Link to='/curriculo2.0' onClick={closeMobileMenu}>Home</Link>
                    <Link to='/curriculo2.0/projects' onClick={closeMobileMenu}>Projetos</Link>
                    <Link to='/curriculo2.0/sobremim' onClick={closeMobileMenu}>Sobre mim</Link>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;