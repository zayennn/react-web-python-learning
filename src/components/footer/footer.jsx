import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="logo-icon">🐍</span>
                        <span>Python Learning</span>
                    </div>
                    <div className="footer-links">
                        <Link to={'/'}>
                            <a href="#home" style={{ margin: '0 10px' }}>Home</a>
                            <a href="#about" style={{ margin: '0 10px' }}>Tentang</a>
                            <a href="#features" style={{ margin: '0 10px' }}>Keunggulan</a>
                            <a href="#get-started" style={{ margin: '0 10px' }}>Mulai Belajar</a>
                        </Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Python Learning. Created by Elang Atha Zahran</p>
                </div>
            </div>
        </footer>
    )
}