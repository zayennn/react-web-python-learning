import { Link } from 'react-router-dom';

const LessonCard = ({ card, handleStartLesson }) => (
    <div className="lesson-card">
        <div
            className="card-header"
            style={{ background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}99 100%)` }}
        >
            <div className="card-image">
                {card.image}
            </div>
            <div className="card-badges">
                <div className="card-badge level-badge">
                    {card.level}
                </div>
                <div className="card-badge duration-badge">
                    ⏱️ {card.duration}
                </div>
            </div>
        </div>

        <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>

            <div className="card-topics">
                <h4>Topik yang dipelajari:</h4>
                <ul>
                    {card.topics.map((topic, index) => (
                        <li key={index}>
                            <span className="topic-bullet">•</span>
                            {topic}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="card-meta">
                <div className="meta-item">
                    <span className="meta-icon">📚</span>
                    <span>{card.lessons} Pelajaran</span>
                </div>
                <div className="meta-item">
                    <span className="meta-icon">👥</span>
                    <span>Interaktif</span>
                </div>
            </div>

            {/* <div className="progress-container">
                <div className="progress-info">
                    <span>Progress Belajar</span>
                    <span>{card.progress}%</span>
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${card.progress}%`,
                            background: card.color
                        }}
                    ></div>
                </div>
            </div> */}

            <Link to={`/pelajaran/materi/${card.id}`}>
                <button
                    className="start-button"
                    style={{ background: card.color }}
                >
                    {card.progress > 0 ? 'Lanjutkan Belajar' : 'Mulai Belajar'}
                </button>
            </Link>
        </div>
    </div>
);

export default LessonCard;