import React, { useState } from 'react';
import './index.css';

// components
import Footer from '../../components/footer/footer';
import LessonCard from '../../components/card/LessonCards';
import PelajaranNavbar from '../../components/navbar/PelajaranNavbar';


// data lesson cards
import lessonCards from './data/LessonCard';

const App = () => {

    const handleStartLesson = (lessonId) => {
        alert(`Memulai pelajaran dengan ID: ${lessonId}`);
    };

    return (
        <div className="app">
            <PelajaranNavbar />

            {/* Lessons Page */}
            <div className="lessons-page">
                <div className="container">
                    <div className="lessons-header">
                        <h1>Materi Belajar Python</h1>
                        <p>Pilih materi yang ingin dipelajari dan mulai perjalanan coding Anda. Mulai dari dasar hingga tingkat lanjut.</p>

                        <div className="filter-tabs">
                            <button className="filter-tab active">Semua</button>
                            <button className="filter-tab">Pemula</button>
                            <button className="filter-tab">Menengah</button>
                            <button className="filter-tab">Lanjutan</button>
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

                    <div className="lessons-grid">
                        {lessonCards.map(card => (
                            <LessonCard key={card.id} card={card} />
                        ))}
                    </div>

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