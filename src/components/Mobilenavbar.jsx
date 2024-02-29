import React, { useState, useEffect, useRef } from 'react';
import "./Mobilenavbar.css";
import Navbar from './Navbar';

const Mobilenavbar = ({ status }) => {
    const [active, setActive] = useState('desativado');
    const navToggle = () => {
        setActive((prev) => (prev === 'desativado' ? 'ativado' : 'desativado'));
    };

    const closeMobileMenu = () => {
        setActive('desativado');
    };

    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setActive('desativado');
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [active]);

    return (
        <header className={status}>
            <div className="mobile-menu-container" ref={mobileMenuRef}>
                <div className="mobile-menu" onClick={navToggle}></div>
                <div className={`mobile-menu-conteudo ${active}`}>
                    <Navbar closeMobileMenu={closeMobileMenu} />
                </div>
            </div>
        </header>
    );
};

export default Mobilenavbar;