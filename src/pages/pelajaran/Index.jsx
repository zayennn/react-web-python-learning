import React, { useState, useEffect } from 'react';
import './index.css';

// import data
import lessonCard from './data/LessonCard';

const Pelajaran = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage === 'landing') {
        const sections = ['home', 'about', 'features', 'get-started'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

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

  const navigateToLessons = () => {
    setCurrentPage('lessons');
    setIsMenuOpen(false);
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
    setIsMenuOpen(false);
  };

  // Komponen untuk halaman lessons
  const LessonsPage = () => (
    <div className="lessons-page">
      <div className="container">
        <div className="lessons-header">
          <button className="back-button" onClick={navigateToLanding}>
            ← Kembali ke Beranda
          </button>
          <h1>Materi Belajar Python</h1>
          <p>Pilih materi yang ingin dipelajari dan mulai perjalanan coding Anda</p>
        </div>

        <div className="lessons-grid">
          <LessonCard card={lessonCard} />
        </div>

        <div className="coming-soon">
          <h3>Materi Lainnya Segera Hadir!</h3>
          <p>Kami sedang menyiapkan lebih banyak materi pembelajaran untuk Anda.</p>
        </div>
      </div>
    </div>
  );

  // Komponen untuk card pelajaran
  const LessonCard = ({ card }) => (
    <div className="lesson-card">
      <div className="card-header">
        <div className="card-image">
          {card.image}
        </div>
        <div className="card-badge level-badge">
          {card.level}
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
        
        <div className="card-topics">
          <h4>Topik yang dipelajari:</h4>
          <ul>
            {card.topics.map((topic, index) => (
              <li key={index}>• {topic}</li>
            ))}
          </ul>
        </div>

        <div className="card-meta">
          <div className="meta-item">
            <span className="meta-icon">⏱️</span>
            <span>{card.duration}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">📚</span>
            <span>{card.lessons} Pelajaran</span>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-info">
            <span>Progress: {card.progress}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${card.progress}%` }}
            ></div>
          </div>
        </div>

        <button className="start-button">
          {card.progress > 0 ? 'Lanjutkan Belajar' : 'Mulai Belajar'}
        </button>
      </div>
    </div>
  );

  // Komponen untuk landing page (yang sudah ada)
  const LandingPage = () => (
    <>
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
              <button className="btn-primary" onClick={navigateToLessons}>
                Lihat Materi
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
              <button className="btn-primary" onClick={navigateToLessons}>
                Lihat Materi
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={navigateToLanding} style={{cursor: 'pointer'}}>
            <span className="logo-icon">🐍</span>
            <span>Python Learning</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {currentPage === 'landing' ? (
              <>
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
              </>
            ) : null}
            <div 
              className="nav-item"
              onClick={currentPage === 'landing' ? navigateToLessons : navigateToLanding}
            >
              {currentPage === 'landing' ? 'Materi' : 'Beranda'}
            </div>
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Render Halaman Sesuai State */}
      {currentPage === 'landing' ? <LandingPage /> : <LessonsPage />}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">🐍</span>
              <span>Python Learning</span>
            </div>
            <div className="footer-links">
              <a onClick={navigateToLanding} style={{cursor: 'pointer'}}>Home</a>
              <a onClick={navigateToLessons} style={{cursor: 'pointer'}}>Materi</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Python Learning. Dibuat dengan ❤️ untuk para developer.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pelajaran;