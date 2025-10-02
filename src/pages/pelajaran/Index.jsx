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
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredLessons, setFilteredLessons] = useState(lessonCards);
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

    // Filter lessons based on search query
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredLessons(lessonCards);
        } else {
            const query = searchQuery.toLowerCase();
            const filtered = lessonCards.filter(card => 
                card.title.toLowerCase().includes(query) ||
                card.description.toLowerCase().includes(query) ||
                card.topics.some(topic => topic.toLowerCase().includes(query)) ||
                card.level.toLowerCase().includes(query)
            );
            setFilteredLessons(filtered);
        }
        setCurrentPage(1); // Reset to first page when search changes
    }, [searchQuery]);

    const totalPages = Math.ceil(filteredLessons.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentLessons = filteredLessons.slice(startIndex, startIndex + itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getVisiblePages = () => {
        const visiblePages = [];
        const maxVisible = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);

        if (endPage - startPage + 1 < maxVisible) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(i);
        }

        return visiblePages;
    };

    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <div className="app">
            <PelajaranNavbar />

            <div className="lessons-page">
                <div className="container">
                    <div className="lessons-header">
                        <h1>Materi Belajar Python</h1>
                        <p>Pilih materi yang ingin dipelajari dan mulai perjalanan coding Anda. Mulai dari dasar hingga tingkat lanjut.</p>

                        {/* Search Input */}
                        <div className="search-container">
                            <div className="search-input-wrapper">
                                <div className="search-icon">🔍</div>
                                <input
                                    type="text"
                                    placeholder="Cari materi... (judul, deskripsi, topik, level)"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="search-input"
                                />
                                {searchQuery && (
                                    <button 
                                        className="clear-search-btn"
                                        onClick={clearSearch}
                                        aria-label="Clear search"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            {searchQuery && (
                                <div className="search-results-info">
                                    Ditemukan {filteredLessons.length} materi untuk "{searchQuery}"
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="stats-overview">
                        <div className="stat-card">
                            <div className="stat-icon">📚</div>
                            <div className="stat-info">
                                <h3>{filteredLessons.length}</h3>
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

                    {filteredLessons.length > 0 ? (
                        <>
                            <div className="lessons-grid" ref={gridRef}>
                                {currentLessons.map(card => {
                                    console.log(card);
                                    return (
                                        <div key={card.id} className={`lesson-item ${card.level?.toLowerCase() || ''}`}>
                                            <LessonCard card={card} />
                                        </div>
                                    );
                                })}
                            </div>

                            {totalPages > 1 && (
                                <div className="pagination-container">
                                    {/* Navigation Buttons */}
                                    <div className="pagination-nav">
                                        <button
                                            className="pagination-nav-btn prev"
                                            onClick={handlePrevious}
                                            disabled={currentPage === 1}
                                        >
                                            ← Sebelumnya
                                        </button>

                                        {/* Page Numbers */}
                                        <div className="pagination">
                                            {getVisiblePages().map(page => (
                                                <button
                                                    key={page}
                                                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                                                    onClick={() => setCurrentPage(page)}
                                                >
                                                    {page}
                                                </button>
                                            ))}

                                            {totalPages > 5 && currentPage < totalPages - 2 && (
                                                <>
                                                    <span className="pagination-ellipsis">...</span>
                                                    <button
                                                        className={`page-btn ${currentPage === totalPages ? 'active' : ''}`}
                                                        onClick={() => setCurrentPage(totalPages)}
                                                    >
                                                        {totalPages}
                                                    </button>
                                                </>
                                            )}
                                        </div>

                                        <button
                                            className="pagination-nav-btn next"
                                            onClick={handleNext}
                                            disabled={currentPage === totalPages}
                                        >
                                            Selanjutnya →
                                        </button>
                                    </div>

                                    {/* Page Info */}
                                    <div className="pagination-info">
                                        Menampilkan {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredLessons.length)} dari {filteredLessons.length} materi
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">🔍</div>
                            <h3>Tidak ada materi yang ditemukan</h3>
                            <p>Tidak ada materi yang cocok dengan pencarian "{searchQuery}"</p>
                            <button 
                                className="clear-search-btn-large"
                                onClick={clearSearch}
                            >
                                Tampilkan Semua Materi
                            </button>
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