import { useState } from 'react';
import './Navbar.css';

import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState('nav-list');
    const navToggle = () => {
        active === 'nav-list' ? setActive('nav-list active text-gradiente') : setActive('nav-list')
    }


    return (
        <header>
            <nav className='text-gradiente'>
                <p className='logo'><Link to='/'>Alexandre Pereira</Link></p>
                <span onClick={navToggle} className='mobile-menu'></span>
                <div className={active} >
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projetos</Link>
                    <Link to='/contact'>Contato</Link>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;