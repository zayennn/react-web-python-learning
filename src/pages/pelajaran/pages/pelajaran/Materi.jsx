import { useState } from 'react';
import './Materi.css';

// Data pelajaran
const lessonCards = [
    {
        id: 1,
        title: "Dasar-Dasar Python: Hello World & Variabel",
        description: "Belajar Python dari nol: cara instalasi, menjalankan program pertama, mengenal variabel, tipe data, operator dasar, string, dan input dari user.",
        level: "Pemula",
        duration: "2 jam",
        lessons: 6,
        progress: 0,
        image: "🐍",
        topics: [
            "Instalasi & Hello World",
            "Variabel dan Tipe Data",
            "String & f-Strings",
            "Operator Aritmatika",
            "Input & Output",
            "Latihan: Genap/Ganjil, Tabel Perkalian, Prima"
        ],
        color: "#4F46E5",
        content: [
            {
                id: 1,
                title: "Instalasi & Hello World",
                type: "theory",
                content: `
# Memulai Perjalanan Python

Python adalah bahasa pemrograman yang powerful dan mudah dipelajari. Mari kita mulai dengan instalasi dan program pertama.

## Langkah 1: Instalasi Python
1. Download Python dari python.org
2. Jalankan installer dan centang "Add Python to PATH"
3. Verifikasi instalasi dengan buka terminal/CMD ketik: \`python --version\`

## Program Pertama: Hello World

\`\`\`python
# Program pertama: Hello World
print("Hello, World!")
print("Selamat belajar Python!")
\`\`\`

**Penjelasan:**
- \`print()\` adalah fungsi untuk menampilkan teks
- Teks dalam tanda kutip adalah string
- Python menjalankan kode baris per baris
        `,
                codeExample: `# Contoh kode Hello World
print("Hello, World!")
print("Selamat datang di dunia Python!")

# Bisa juga menampilkan multiple values
print("Nama:", "Budi", "Umur:", 20)`,
                expectedOutput: `Hello, World!
Selamat datang di dunia Python!
Nama: Budi Umur: 20`
            },
            {
                id: 2,
                title: "Variabel dan Tipe Data",
                type: "theory",
                content: `
# Variabel dan Tipe Data

Variabel seperti wadah untuk menyimpan data. Python memiliki beberapa tipe data dasar:

## Tipe Data Dasar:
- **Integer**: Bilangan bulat (1, 2, 3)
- **Float**: Bilangan desimal (3.14, 2.5)
- **String**: Teks ("hello", 'world')
- **Boolean**: True/False

## Deklarasi Variabel:
\`\`\`python
nama = "Alice"      # String
umur = 25           # Integer
tinggi = 165.5      # Float
is_student = True   # Boolean
\`\`\`
        `,
                codeExample: `# Deklarasi variabel
nama = "Budi Santoso"
umur = 20
tinggi = 175.5
is_mahasiswa = True

# Menampilkan nilai variabel
print("Nama:", nama)
print("Umur:", umur, "tahun")
print("Tinggi:", tinggi, "cm")
print("Mahasiswa:", is_mahasiswa)

# Mengecek tipe data
print("Tipe data nama:", type(nama))
print("Tipe data umur:", type(umur))`,
                expectedOutput: `Nama: Budi Santoso
Umur: 20 tahun
Tinggi: 175.5 cm
Mahasiswa: True
Tipe data nama: <class 'str'>
Tipe data umur: <class 'int'>`
            },
            {
                id: 3,
                title: "String & f-Strings",
                type: "theory",
                content: `
# String dan f-Strings

String adalah tipe data untuk teks. Python memiliki fitur f-Strings untuk formatting yang mudah.

## Operasi String Dasar:
- Concatenation: \`"hello" + "world"\`
- Repetition: \`"hi" * 3\`
- Indexing: \`text[0]\`

## f-Strings (Formatted String Literals):
\`\`\`python
nama = "Alice"
umur = 25
print(f"Nama: {nama}, Umur: {umur}")
\`\`\`
        `,
                codeExample: `# Operasi string dasar
nama_depan = "Budi"
nama_belakang = "Santoso"
nama_lengkap = nama_depan + " " + nama_belakang
print("Nama lengkap:", nama_lengkap)

# f-Strings (cara modern)
umur = 20
tinggi = 175.5
print(f"{nama_lengkap} berumur {umur} tahun dan tinggi {tinggi} cm")

# Operasi string lainnya
salam = "Hello Python!"
print("Panjang string:", len(salam))
print("Huruf besar:", salam.upper())
print("Huruf kecil:", salam.lower())`,
                expectedOutput: `Nama lengkap: Budi Santoso
Budi Santoso berumur 20 tahun dan tinggi 175.5 cm
Panjang string: 13
Huruf besar: HELLO PYTHON!
Huruf kecil: hello python!`
            },
            {
                id: 4,
                title: "Operator Aritmatika",
                type: "theory",
                content: `
# Operator Aritmatika

Operator digunakan untuk melakukan operasi matematika.

## Operator Dasar:
- Penjumlahan: \`+\`
- Pengurangan: \`-\`
- Perkalian: \`*\`
- Pembagian: \`/\`
- Pangkat: \`**\`
- Modulus: \`%\`

## Contoh:
\`\`\`python
a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
\`\`\`
        `,
                codeExample: `# Operator aritmatika
a = 15
b = 4

print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")
print(f"{a} ** {b} = {a ** b}")  # pangkat
print(f"{a} % {b} = {a % b}")    # modulus/sisa bagi

# Operasi dengan assignment
c = 10
c += 5  # sama dengan c = c + 5
print("Nilai c setelah c += 5:", c)

# Prioritas operator
hasil = 10 + 5 * 2  # 10 + (5*2) = 20
print("10 + 5 * 2 =", hasil)`,
                expectedOutput: `15 + 4 = 19
15 - 4 = 11
15 * 4 = 60
15 / 4 = 3.75
15 ** 4 = 50625
15 % 4 = 3
Nilai c setelah c += 5: 15
10 + 5 * 2 = 20`
            },
            {
                id: 5,
                title: "Input & Output",
                type: "theory",
                content: `
# Input dan Output

Python menyediakan fungsi \`input()\` untuk menerima input dari user dan \`print()\` untuk output.

## Mengambil Input:
\`\`\`python
nama = input("Masukkan nama Anda: ")
umur = int(input("Masukkan umur Anda: "))
\`\`\`

**Catatan:** \`input()\` selalu mengembalikan string, jadi perlu konversi ke int/float jika diperlukan.
        `,
                codeExample: `# Input dari user
print("=== Program Biodata ===")
nama = input("Masukkan nama Anda: ")
umur = int(input("Masukkan umur Anda: "))
tinggi = float(input("Masukkan tinggi badan (cm): "))

# Menampilkan data yang diinput
print("\\n=== Data Diri ===")
print(f"Nama: {nama}")
print(f"Umur: {umur} tahun")
print(f"Tinggi: {tinggi} cm")

# Contoh lain: kalkulator sederhana
print("\\n=== Kalkulator Sederhana ===")
angka1 = float(input("Masukkan angka pertama: "))
angka2 = float(input("Masukkan angka kedua: "))
print(f"Hasil penjumlahan: {angka1 + angka2}")`,
                expectedOutput: `=== Program Biodata ===
Masukkan nama Anda: [User input]
Masukkan umur Anda: [User input]
Masukkan tinggi badan (cm): [User input]

=== Data Diri ===
Nama: [Nama user]
Umur: [Umur user] tahun
Tinggi: [Tinggi user] cm

=== Kalkulator Sederhana ===
Masukkan angka pertama: [User input]
Masukkan angka kedua: [User input]
Hasil penjumlahan: [Hasil penjumlahan]`
            },
            {
                id: 6,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Praktik

Sekarang saatnya praktik! Coba selesaikan latihan berikut untuk menguji pemahaman Anda.

## Soal 1: Cek Bilangan Genap/Ganjil
Buat program yang memeriksa apakah sebuah bilangan genap atau ganjil.

## Soal 2: Tabel Perkalian
Buat program yang menampilkan tabel perkalian dari 1-10 untuk sebuah bilangan.

## Soal 3: Cek Bilangan Prima
Buat program yang memeriksa apakah sebuah bilangan adalah bilangan prima.
        `,
                exercises: [
                    {
                        id: 1,
                        title: "Cek Bilangan Genap/Ganjil",
                        description: "Buat program yang menerima input bilangan dan menentukan apakah genap atau ganjil.",
                        hint: "Gunakan operator modulus %. Bilangan genap jika bilangan % 2 == 0",
                        solution: `# Cek bilangan genap/ganjil
angka = int(input("Masukkan sebuah bilangan: "))

if angka % 2 == 0:
    print(f"{angka} adalah bilangan GENAP")
else:
    print(f"{angka} adalah bilangan GANJIL")`
                    },
                    {
                        id: 2,
                        title: "Tabel Perkalian",
                        description: "Buat program yang menampilkan tabel perkalian 1-10 untuk sebuah bilangan.",
                        hint: "Gunakan loop for dengan range(1, 11)",
                        solution: `# Tabel perkalian
angka = int(input("Masukkan bilangan untuk tabel perkalian: "))

print(f"Tabel perkalian {angka}:")
for i in range(1, 11):
    hasil = angka * i
    print(f"{angka} x {i} = {hasil}")`
                    },
                    {
                        id: 3,
                        title: "Cek Bilangan Prima",
                        description: "Buat program yang mengecek apakah sebuah bilangan adalah bilangan prima.",
                        hint: "Bilangan prima hanya bisa dibagi 1 dan dirinya sendiri. Cek dari 2 sampai sqrt(n)",
                        solution: `# Cek bilangan prima
angka = int(input("Masukkan sebuah bilangan: "))

if angka > 1:
    is_prima = True
    for i in range(2, int(angka**0.5) + 1):
        if angka % i == 0:
            is_prima = False
            break
    
    if is_prima:
        print(f"{angka} adalah bilangan PRIMA")
    else:
        print(f"{angka} adalah BUKAN bilangan prima")
else:
    print(f"{angka} adalah BUKAN bilangan prima")`
                    }
                ]
            }
        ]
    }
];

const Pelajaran = () => {
    const [currentLesson, setCurrentLesson] = useState(0);
    const [currentContent, setCurrentContent] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [codeOutput, setCodeOutput] = useState('');
    const [userCode, setUserCode] = useState('');

    const lesson = lessonCards[0]; // Mengambil lesson pertama

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
        // Simulasi output (dalam implementasi nyata, ini akan menggunakan code execution engine)
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

export default Pelajaran;