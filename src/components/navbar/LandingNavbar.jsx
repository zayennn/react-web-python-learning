import React, { useState, useEffect } from 'react';
import './LandingNavbar.css'

export default function LandingNavbar() {

    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'features', 'get-started'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

     const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-icon">🐍</span>
                    <span>Python Learning</span>
                </div>
                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <div
                        className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </div>
                    <div
                        className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={() => scrollToSection('about')}
                    >
                        Tentang Python
                    </div>
                    <div
                        className={`nav-item ${activeSection === 'features' ? 'active' : ''}`}
                        onClick={() => scrollToSection('features')}
                    >
                        Keunggulan
                    </div>
                    <div
                        className={`nav-item ${activeSection === 'get-started' ? 'active' : ''}`}
                        onClick={() => scrollToSection('get-started')}
                    >
                        Mulai Belajar
                    </div>
                </div>
                <div className="nav-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}