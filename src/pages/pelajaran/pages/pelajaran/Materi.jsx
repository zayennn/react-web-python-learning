import { useState } from 'react';
import './Materi.css';

// import data lesson
import lessonCards from './LessonCard';

const Materi = () => {
    const [currentLesson, setCurrentLesson] = useState(0);
    const [currentContent, setCurrentContent] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [codeOutput, setCodeOutput] = useState('');
    const [userCode, setUserCode] = useState('');

    const lesson = lessonCards[0];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const nextContent = () => {
        if (currentContent < lesson.content.length - 1) {
            setCurrentContent(currentContent + 1);
        }
    };

    const prevContent = () => {
        if (currentContent > 0) {
            setCurrentContent(currentContent - 1);
        }
    };

    const runCode = () => {
        const current = lesson.content[currentContent];
        if (current.codeExample) {
            setCodeOutput(current.expectedOutput);
        }
    };

    const resetCode = () => {
        const current = lesson.content[currentContent];
        setUserCode(current.codeExample || '');
        setCodeOutput('');
    };

    const ContentRenderer = ({ content }) => {
        if (content.type === 'practice') {
            return (
                <div className="practice-content">
                    <h2>{content.title}</h2>
                    <div className="content-text">
                        {content.content.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>

                    <div className="exercises">
                        <h3>Latihan Soal:</h3>
                        {content.exercises.map((exercise, index) => (
                            <div key={exercise.id} className="exercise-card">
                                <h4>Soal {index + 1}: {exercise.title}</h4>
                                <p>{exercise.description}</p>
                                <div className="exercise-hint">
                                    <strong>Hint:</strong> {exercise.hint}
                                </div>
                                <details className="solution">
                                    <summary>Lihat Solusi</summary>
                                    <pre>{exercise.solution}</pre>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className="theory-content">
                <h2>{content.title}</h2>
                <div className="content-text">
                    {content.content.split('\n').map((line, index) => {
                        if (line.startsWith('# ')) {
                            return <h1 key={index}>{line.replace('# ', '')}</h1>;
                        } else if (line.startsWith('## ')) {
                            return <h2 key={index}>{line.replace('## ', '')}</h2>;
                        } else if (line.startsWith('### ')) {
                            return <h3 key={index}>{line.replace('### ', '')}</h3>;
                        } else if (line.startsWith('```')) {
                            return null;
                        } else if (line.trim() === '') {
                            return <br key={index} />;
                        } else {
                            return <p key={index}>{line}</p>;
                        }
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="app">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <span className="logo-icon">🐍</span>
                        <span>Python Learning</span>
                    </div>
                    <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <div className="nav-item active">
                            Belajar
                        </div>
                        <div className="nav-item">
                            Progress
                        </div>
                    </div>
                    <div className="nav-toggle" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>

            {/* Lesson Page */}
            <div className="lesson-page">
                <div className="lesson-container">
                    {/* Sidebar */}
                    <div className="lesson-sidebar">
                        <div className="lesson-info">
                            <div className="lesson-header">
                                <h1>{lesson.title}</h1>
                                <div className="lesson-meta">
                                    <span className="level-badge">{lesson.level}</span>
                                    <span className="duration">⏱️ {lesson.duration}</span>
                                </div>
                            </div>

                            <div className="progress-section">
                                <div className="progress-info">
                                    <span>Progress Materi</span>
                                    <span>{Math.round((currentContent / lesson.content.length) * 100)}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{
                                            width: `${(currentContent / lesson.content.length) * 100}%`,
                                            background: lesson.color
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="topics-list">
                                <h3>Daftar Materi:</h3>
                                {lesson.content.map((content, index) => (
                                    <div
                                        key={content.id}
                                        className={`topic-item ${index === currentContent ? 'active' : ''}`}
                                        onClick={() => setCurrentContent(index)}
                                    >
                                        <div className="topic-number">{index + 1}</div>
                                        <div className="topic-info">
                                            <div className="topic-title">{content.title}</div>
                                            <div className="topic-type">{content.type === 'theory' ? '📚 Teori' : '💪 Latihan'}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lesson-main">
                        <div className="content-area">
                            <ContentRenderer content={lesson.content[currentContent]} />

                            {/* Code Editor Section */}
                            {lesson.content[currentContent].codeExample && (
                                <div className="code-section">
                                    <div className="section-header">
                                        <h3>💻 Coba Kode</h3>
                                        <div className="code-actions">
                                            <button className="btn-secondary" onClick={resetCode}>
                                                Reset
                                            </button>
                                            <button className="btn-primary" onClick={runCode}>
                                                Jalankan Kode
                                            </button>
                                        </div>
                                    </div>

                                    <div className="code-editor">
                                        <textarea
                                            value={userCode || lesson.content[currentContent].codeExample}
                                            onChange={(e) => setUserCode(e.target.value)}
                                            placeholder="Tulis kode Python Anda di sini..."
                                            spellCheck="false"
                                        />
                                    </div>

                                    {codeOutput && (
                                        <div className="output-section">
                                            <h4>Output:</h4>
                                            <pre className="code-output">{codeOutput}</pre>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="content-navigation">
                            <button
                                className="nav-button prev"
                                onClick={prevContent}
                                disabled={currentContent === 0}
                            >
                                ← Sebelumnya
                            </button>

                            <div className="progress-indicator">
                                {currentContent + 1} / {lesson.content.length}
                            </div>

                            <button
                                className="nav-button next"
                                onClick={nextContent}
                                disabled={currentContent === lesson.content.length - 1}
                            >
                                Selanjutnya →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <span className="logo-icon">🐍</span>
                            <span>Python Learning</span>
                        </div>
                        <div className="footer-links">
                            <a href="#materi">Materi</a>
                            <a href="#progress">Progress</a>
                            <a href="#bantuan">Bantuan</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2023 Python Learning. Belajar Python dengan menyenangkan!</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Materi;