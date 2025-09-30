import { useState } from "react";

const PelajaranNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-icon">🐍</span>
                    <span>Python Learning</span>
                </div>
                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <div className="nav-item active">
                        Materi
                    </div>
                    <div className="nav-item">
                        Progress
                    </div>
                    <div className="nav-item">
                        Tentang
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

export default PelajaranNavbar
