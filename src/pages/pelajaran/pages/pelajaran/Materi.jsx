import { useState, useEffect } from 'react';
import './Materi.css';
import { useParams, useNavigate, Link } from 'react-router-dom';

// import data lesson
import lessonCards from './data/LessonCard';

const Materi = () => {
    const [currentLesson, setCurrentLesson] = useState(0);
    const [currentContent, setCurrentContent] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [codeOutput, setCodeOutput] = useState('');
    const [userCode, setUserCode] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    const lessonId = parseInt(id, 10);
    const lesson = lessonCards.find((lesson) => lesson.id === lessonId) || lessonCards[0];
    const currentLessonIndex = lessonCards.findIndex(l => l.id === lessonId);

    // Filter lessons based on search query
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            setShowSearchResults(false);
        } else {
            const query = searchQuery.toLowerCase();
            const filtered = lessonCards.filter(card => 
                card.title.toLowerCase().includes(query) ||
                card.description.toLowerCase().includes(query) ||
                card.level.toLowerCase().includes(query) ||
                card.topics.some(topic => topic.toLowerCase().includes(query))
            );
            setSearchResults(filtered.slice(0, 5)); // Limit to 5 results
            setShowSearchResults(true);
        }
    }, [searchQuery]);

    // Reset to first content when lesson changes
    useEffect(() => {
        setCurrentContent(0);
        const firstContent = lesson.content[0];
        setUserCode(firstContent.codeExample || '');
        setCodeOutput('');
        
        // Show alert when lesson changes
        if (lessonId) {
            showNavigationAlert(`Anda sekarang berada di Materi ${lessonId}: ${lesson.title}`);
        }
    }, [lessonId, lesson]);

    const showNavigationAlert = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
        
        // Auto hide alert after 3 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const nextContent = () => {
        if (currentContent < lesson.content.length - 1) {
            setCurrentContent((prev) => {
                const newIndex = prev + 1;
                const newContent = lesson.content[newIndex];
                setUserCode(newContent.codeExample || '');
                setCodeOutput('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return newIndex;
            });
        } else {
            // Move to next lesson if available
            const nextLesson = lessonCards[currentLessonIndex + 1];
            if (nextLesson) {
                navigate(`/pelajaran/materi/${nextLesson.id}`);
                // Alert will be shown in the useEffect
            } else {
                showNavigationAlert("Ini adalah materi terakhir!");
            }
        }
    };

    const prevContent = () => {
        if (currentContent > 0) {
            setCurrentContent((prev) => {
                const newIndex = prev - 1;
                const newContent = lesson.content[newIndex];
                setUserCode(newContent.codeExample || '');
                setCodeOutput('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return newIndex;
            });
        } else {
            // Move to previous lesson if available
            const prevLesson = lessonCards[currentLessonIndex - 1];
            if (prevLesson) {
                navigate(`/pelajaran/materi/${prevLesson.id}`);
                // Alert will be shown in the useEffect
            } else {
                showNavigationAlert("Ini adalah materi pertama!");
            }
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

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchResults.length > 0) {
            navigate(`/pelajaran/materi/${searchResults[0].id}`);
            setSearchQuery('');
            setShowSearchResults(false);
        }
    };

    const handleSearchResultClick = (lessonId) => {
        navigate(`/pelajaran/materi/${lessonId}`);
        setSearchQuery('');
        setShowSearchResults(false);
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
            {/* Navigation Alert */}
            {showAlert && (
                <div className="navigation-alert">
                    <div className="alert-content">
                        <span className="alert-icon">📚</span>
                        <span className="alert-message">{alertMessage}</span>
                        <button 
                            className="alert-close"
                            onClick={() => setShowAlert(false)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <span className="logo-icon">🐍</span>
                        <span>Python Learning</span>
                    </div>
                    
                    {/* Search Bar in Navbar */}
                    <div className="nav-search-container">
                        <form onSubmit={handleSearchSubmit} className="nav-search-form">
                            <div className="nav-search-wrapper">
                                <div className="nav-search-icon">🔍</div>
                                <input
                                    type="text"
                                    placeholder="Cari materi..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="nav-search-input"
                                />
                                {searchQuery && (
                                    <button 
                                        type="button"
                                        className="nav-clear-search-btn"
                                        onClick={() => setSearchQuery('')}
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </form>
                        
                        {/* Search Results Dropdown */}
                        {showSearchResults && searchResults.length > 0 && (
                            <div className="nav-search-results">
                                {searchResults.map(lesson => (
                                    <div 
                                        key={lesson.id}
                                        className="nav-search-result-item"
                                        onClick={() => handleSearchResultClick(lesson.id)}
                                    >
                                        <div className="search-result-image">
                                            {lesson.image}
                                        </div>
                                        <div className="search-result-content">
                                            <div className="search-result-title">{lesson.title}</div>
                                            <div className="search-result-level">{lesson.level}</div>
                                            <div className="search-result-description">
                                                {lesson.description.length > 80 
                                                    ? `${lesson.description.substring(0, 80)}...`
                                                    : lesson.description
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <div className="nav-item active">
                            Belajar
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
                                        onClick={() => {
                                            setCurrentContent(index);
                                            const newContent = lesson.content[index];
                                            setUserCode(newContent.codeExample || '');
                                            setCodeOutput('');
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
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
                                disabled={currentContent === 0 && currentLessonIndex === 0}
                            >
                                {currentContent === 0 && currentLessonIndex > 0 ? '← Materi Sebelumnya' : '← Sebelumnya'}
                            </button>

                            <div className="progress-indicator">
                                Materi {lessonId} - {currentContent + 1} / {lesson.content.length}
                            </div>

                            <button
                                className="nav-button next"
                                onClick={nextContent}
                                disabled={currentContent === lesson.content.length - 1 && currentLessonIndex === lessonCards.length - 1}
                            >
                                {currentContent === lesson.content.length - 1 && currentLessonIndex < lessonCards.length - 1 ? 'Materi Selanjutnya →' : 'Selanjutnya →'}
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
                            <Link to="/pelajaran">Materi</Link>
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