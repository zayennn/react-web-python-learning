// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import './App.css';

import { Link } from 'react-router-dom';


// components
import Footer from '../../components/footer/footer';
import LandingNavbar from '../../components/navbar/LandingNavbar';

const Landing = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <div className="app">
            {/* Navbar */}
            <LandingNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Belajar <span className="highlight">Python</span> dengan Mudah
                        </h1>
                        <p className="hero-subtitle">
                            Python adalah bahasa pemrograman yang powerful dan mudah dipelajari.
                            Mulai perjalanan coding Anda hari ini dengan panduan interaktif kami.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary" onClick={() => scrollToSection('get-started')}>
                                Mulai Sekarang
                            </button>
                            <button className="btn-secondary" onClick={() => scrollToSection('about')}>
                                Pelajari Lebih Lanjut
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="code-snippet">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="code-title">hello.py</div>
                            </div>
                            <div className="code-content">
                                <pre>{`# Program Python Pertama\nprint("Hello, World!")\n\n# Variabel sederhana\nnama = "Python Learner"\nusia = 20\n\n# Percabangan\nif usia >= 18:\n    print(f"Halo {nama}, Anda sudah dewasa!")\nelse:\n    print(f"Halo {nama}, Anda masih remaja!")`}</pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span></span>
                </div>
            </section>

            {/* About Python Section */}
            <section id="about" className="about">
                <div className="container">
                    <h2 className="section-title">Apa itu Python?</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Python adalah bahasa pemrograman tingkat tinggi yang dirancang oleh Guido van Rossum
                                dan pertama kali dirilis pada tahun 1991. Python menekankan keterbacaan kode dengan
                                penggunaan spasi putih yang signifikan.
                            </p>
                            <p>
                                Bahasa ini mendukung multiple paradigm pemrograman termasuk pemrograman terstruktur,
                                berorientasi objek, dan fungsional. Python sering digambarkan sebagai bahasa "baterai
                                included" karena perpustakaan standarnya yang komprehensif.
                            </p>
                            <div className="stats">
                                <div className="stat">
                                    <h3>#1</h3>
                                    <p>Bahasa Paling Populer</p>
                                </div>
                                <div className="stat">
                                    <h3>+30 Tahun</h3>
                                    <p>Sejarah Pengembangan</p>
                                </div>
                                <div className="stat">
                                    <h3>100rb+</h3>
                                    <p>Library Tersedia</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-visual">
                            <div className="python-logo">
                                <div className="logo-circle">
                                    <span>🐍</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <div className="container">
                    <h2 className="section-title">Mengapa Belajar Python?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3>Mudah Dipelajari</h3>
                            <p>
                                Sintaksis Python yang sederhana membuatnya ideal untuk pemula.
                                Kode Python mudah dibaca dan ditulis.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💼</div>
                            <h3>Serbaguna</h3>
                            <p>
                                Python dapat digunakan untuk web development, data science,
                                AI, machine learning, automation, dan banyak lagi.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🌍</div>
                            <h3>Komunitas Besar</h3>
                            <p>
                                Python memiliki komunitas global yang aktif, sehingga
                                banyak sumber daya dan dukungan tersedia.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📚</div>
                            <h3>Banyak Pustaka</h3>
                            <p>
                                Python memiliki ekosistem pustaka yang luas untuk
                                berbagai keperluan, dari scientific computing hingga web frameworks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Started Section */}
            <section id="get-started" className="get-started">
                <div className="container">
                    <h2 className="section-title">Siap Memulai Perjalanan Python Anda?</h2>
                    <div className="get-started-content">
                        <div className="steps">
                            <div className="step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Instal Python</h3>
                                    <p>Download dan instal Python dari situs resmi python.org</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Pilih Editor</h3>
                                    <p>Gunakan editor seperti VS Code, PyCharm, atau Jupyter Notebook</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Mulai Belajar</h3>
                                    <p>Ikuti panduan interaktif kami untuk memahami dasar-dasar Python</p>
                                </div>
                            </div>
                        </div>
                        <div className="cta-box">
                            <h3>Akses Materi Lengkap</h3>
                            <p>
                                Dapatkan akses ke semua pelajaran Python kami, dari dasar hingga
                                tingkat lanjut dengan contoh kode interaktif.
                            </p>
                            <Link to='/pelajaran'>
                                <button className="btn-primary">Mulai Belajar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Landing;