export const lessonCards = [
    {
        id: 1,
        title: "Apa Itu Python?",
        description: "Kenalan dulu sama Python: sejarah singkat, kelebihan, kegunaan, dan kenapa banyak dipakai pemula maupun expert.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 4,
        progress: 0,
        image: "🐍",
        topics: [
            "Sejarah & Asal Usul",
            "Kenapa Python Populer?",
            "Bidang Penggunaan Python",
            "Program Pertama: Hello World"
        ],
        color: "#10B981",
        content: [
            {
                id: 1,
                title: "Sejarah & Asal Usul",
                type: "theory",
                content: `
# Sejarah Python

Python diciptakan oleh **Guido van Rossum** pada tahun 1991.  
Nama "Python" bukan dari ular, tapi terinspirasi dari acara komedi Inggris: *Monty Python's Flying Circus*.

Tujuannya: bikin bahasa pemrograman yang **mudah dibaca, sederhana, tapi powerful**.
                `
            },
            {
                id: 2,
                title: "Kenapa Python Populer?",
                type: "theory",
                content: `
# Kelebihan Python

- Sintaks sederhana, mirip bahasa manusia.
- Multi-purpose: bisa buat banyak hal.
- Banyak library & framework siap pakai.
- Komunitas besar, gampang cari bantuan.
- Dipakai perusahaan besar (Google, Netflix, Instagram, NASA).
                `
            },
            {
                id: 3,
                title: "Bidang Penggunaan Python",
                type: "theory",
                content: `
# Python Dipakai di Mana Aja?

1. **Web Development** → Django, Flask, FastAPI  
2. **Data Science & Machine Learning** → Pandas, NumPy, TensorFlow, PyTorch  
3. **Automation / Scripting** → Bot, otomasi tugas kantor, scraping  
4. **Game Development** → Pygame  
5. **AI & Big Data**  
6. **Cyber Security** → tools hacking & analisis keamanan  

Singkatnya: Python bisa dipakai hampir di semua bidang IT.
                `
            },
            {
                id: 4,
                title: "Program Pertama: Hello World",
                type: "theory",
                content: `
# Program Pertama

Python gampang banget.  
Cukup satu baris kode buat nyapa dunia:

\`\`\`python
print("Hello, World!")
\`\`\`

Outputnya:

\`\`\`
Hello, World!
\`\`\`
                `,
                codeExample: `print("Hello, World!")`,
                expectedOutput: `Hello, World!`
            }
        ]
    },
    {
        id: 2,
        title: "Installasi Python & VS Code di Windows",
        description: "Panduan step-by-step install Python dan Visual Studio Code di Windows, termasuk cara cek instalasi.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 4,
        progress: 0,
        image: "💻",
        topics: [
            "Download & Install Python",
            "Set PATH Python",
            "Install VS Code",
            "Cek Instalasi & Test Program"
        ],
        color: "#2563EB",
        content: [
            {
                id: 1,
                title: "Download & Install Python",
                type: "theory",
                content: `
# Download Python

1. Buka [python.org](https://www.python.org/downloads/)  
2. Download **Python 3.x (versi terbaru)** untuk Windows.  
3. Jalankan installer → **Centang 'Add Python to PATH'**.  
4. Klik **Install Now**.

⚠️ Jangan lupa centang "Add Python to PATH", penting biar bisa dipanggil dari Command Prompt.
                `
            },
            {
                id: 2,
                title: "Set PATH Python",
                type: "theory",
                content: `
# Cek PATH Python

Buka **Command Prompt** (Win + R → ketik \`cmd\` → Enter).  
Ketik perintah ini:

\`\`\`bash
python --version
\`\`\`

Kalau berhasil → muncul versi Python.  
Contoh: \`Python 3.12.0\`.

Kalau error → berarti PATH belum ke-set, perlu reinstall Python dengan centang "Add Python to PATH".
                `,
                codeExample: `python --version`,
                expectedOutput: `Python 3.12.0`
            },
            {
                id: 3,
                title: "Install VS Code",
                type: "theory",
                content: `
# Install Visual Studio Code

1. Download di [code.visualstudio.com](https://code.visualstudio.com/).  
2. Install → pilih "Add to PATH (recommended)".  
3. Setelah terinstall, buka VS Code.  
4. Install Extension **Python** dari Microsoft (ikon ular hijau).  
                `
            },
            {
                id: 4,
                title: "Cek Instalasi & Test Program",
                type: "theory",
                content: `
# Test Python di VS Code

1. Buka VS Code → File → New File → simpan sebagai \`hello.py\`.  
2. Tulis kode berikut:

\`\`\`python
print("Hello dari Python di VS Code 👋")
\`\`\`

3. Jalankan:  
   - Klik kanan → **Run Python File**  
   - atau tekan \`Ctrl + F5\`.

Outputnya:

\`\`\`
Hello dari Python di VS Code 👋
\`\`\`
                `,
                codeExample: `print("Hello dari Python di VS Code 👋")`,
                expectedOutput: `Hello dari Python di VS Code 👋`
            }
        ]
    }
];

export default lessonCards;