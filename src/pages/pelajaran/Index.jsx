import React, { useEffect, useRef, useState } from 'react';
import mixitup from 'mixitup';
import './index.css';

// components
import Footer from '../../components/footer/footer';
import LessonCard from '../../components/card/LessonCards';
import PelajaranNavbar from '../../components/navbar/PelajaranNavbar';

// data lesson cards
import lessonCards from './data/LessonCard';

const App = () => {
    const gridRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        if (gridRef.current) {
            mixitup(gridRef.current, {
                selectors: {
                    target: '.lesson-item'
                },
                animation: {
                    duration: 300
                }
            });
        }
    }, []);

    const totalPages = Math.ceil(lessonCards.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentLessons = lessonCards.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="app">
            <PelajaranNavbar />

            <div className="lessons-page">
                <div className="container">
                    <div className="lessons-header">
                        <h1>Materi Belajar Python</h1>
                        <p>Pilih materi yang ingin dipelajari dan mulai perjalanan coding Anda. Mulai dari dasar hingga tingkat lanjut.</p>

                        <div className="filter-tabs">
                            <button className="filter-tab active" data-filter="all">Semua</button>
                            <button className="filter-tab" data-filter=".pemula">Pemula</button>
                            <button className="filter-tab" data-filter=".menengah">Menengah</button>
                            <button className="filter-tab" data-filter=".lanjutan">Lanjutan</button>
                        </div>
                    </div>

                    <div className="stats-overview">
                        <div className="stat-card">
                            <div className="stat-icon">📚</div>
                            <div className="stat-info">
                                <h3>{lessonCards.length}</h3>
                                <p>Total Materi</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">⏱️</div>
                            <div className="stat-info">
                                <h3>14 jam</h3>
                                <p>Durasi Belajar</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🎯</div>
                            <div className="stat-info">
                                <h3>0%</h3>
                                <p>Progress Overall</p>
                            </div>
                        </div>
                    </div>

                    <div className="lessons-grid" ref={gridRef}>
                        {currentLessons.map(card => (
                            <div key={card.id} className={`lesson-item ${card.level.toLowerCase()}`}>
                                <LessonCard card={card} />
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="coming-soon">
                        <div className="coming-soon-icon">🚀</div>
                        <h3>Materi Lainnya Segera Hadir!</h3>
                        <p>Kami sedang menyiapkan lebih banyak materi pembelajaran untuk Anda.</p>
                        <div className="coming-topics">
                            <span>Object-Oriented Programming</span>
                            <span>File Handling</span>
                            <span>Error Handling</span>
                            <span>Web Development</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default App;