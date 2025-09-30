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
        title: "Instalasi Python & VS Code",
        description: "Panduan install Python 3 dan Visual Studio Code di Windows & MacOS, termasuk setting awal biar siap ngoding.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 4,
        progress: 0,
        image: "💻",
        topics: [
            "Download & Install Python di Windows",
            "Download & Install Python di MacOS",
            "Install Visual Studio Code",
            "Setting Awal VS Code untuk Python"
        ],
        color: "#F59E0B",
        content: [
            {
                id: 1,
                title: "Install Python di Windows",
                type: "theory",
                content: `
# Python di Windows

1. Download installer di [python.org/downloads](https://www.python.org/downloads/).  
   Pilih versi **Python 3.x (bukan 2.x)**.  
2. Jalankan installer.  
   **PENTING**: Centang *"Add Python to PATH"* sebelum klik Install.  
3. Setelah selesai, cek instalasi via Command Prompt (CMD):

\`\`\`bash
python --version
\`\`\`

Kalau muncul versi Python, artinya sukses ✅
                `
            },
            {
                id: 2,
                title: "Install Python di MacOS",
                type: "theory",
                content: `
# Python di MacOS

1. Buka [python.org/downloads](https://www.python.org/downloads/).  
   Download versi terbaru Python 3 untuk MacOS.  
2. Klik file .pkg → ikuti wizard instalasi.  
3. Cek instalasi via Terminal:

\`\`\`bash
python3 --version
\`\`\`

⚡ Note: Di Mac, biasanya pakai \`python3\` (bukan \`python\`).
                `
            },
            {
                id: 3,
                title: "Install Visual Studio Code",
                type: "theory",
                content: `
# Visual Studio Code (VS Code)

1. Download di [code.visualstudio.com](https://code.visualstudio.com/).  
2. Install seperti biasa (Windows: Next → Next → Finish).  
3. Buka VS Code, pilih tema favorit (dark mode biar cool 😎).
                `
            },
            {
                id: 4,
                title: "Setting Awal VS Code untuk Python",
                type: "theory",
                content: `
# Setup VS Code

1. Buka VS Code → masuk ke **Extensions** (Ctrl+Shift+X / Cmd+Shift+X).  
2. Cari & install **Python Extension** (by Microsoft).  
3. Buat file baru: \`hello.py\`.  
4. Isi dengan kode:

\`\`\`python
print("Halo, Python dari VS Code!")
\`\`\`

5. Jalankan file dengan:
   - Klik kanan → Run Python File
   - atau buka terminal: \`python hello.py\` (Windows), \`python3 hello.py\` (Mac).
                `,
                codeExample: `print("Halo, Python dari VS Code!")`,
                expectedOutput: `Halo, Python dari VS Code!`
            }
        ]
    },
    {
        id: 3,
        title: "Cara Kerja Program & Bytecode",
        description: "Pelajari bagaimana Python menjalankan kode: dari source code, bytecode, hingga interpreter Python.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "⚙️",
        topics: [
            "Dari Source Code ke Bytecode",
            "Interpreter Python",
            "Eksperimen Bytecode"
        ],
        color: "#F29E93",
        content: [
            {
                id: 1,
                title: "Dari Source Code ke Bytecode",
                type: "theory",
                content: `
# Dari Source Code ke Bytecode

Saat kamu nulis file Python (misalnya \`hello.py\`), isinya masih **source code** alias teks biasa.

Proses eksekusi Python:
1. Source code → dikompilasi ke **bytecode** (instruksi level menengah).
2. Bytecode → dijalankan oleh **Python Virtual Machine (PVM)**.

> Bytecode ini disimpan dalam file berekstensi **.pyc** di folder \`__pycache__\`.
                `,
                codeExample: `# hello.py
print("Hello, Python!")`,
                expectedOutput: `Hello, Python!`
            },
            {
                id: 2,
                title: "Interpreter Python",
                type: "theory",
                content: `
# Interpreter Python

Berbeda dengan bahasa yang *compiled* (kayak C++), Python itu **interpreted language**.

Artinya:
- Kode Python → langsung diterjemahkan baris per baris oleh **interpreter**.
- Interpreter yang dipakai mayoritas orang = **CPython** (implementasi resmi Python dalam C).

Jadi, flow-nya:

\`source code (.py)\` → \`bytecode (.pyc)\` → \`PVM\` → **output**.
                `
            },
            {
                id: 3,
                title: "Eksperimen Bytecode",
                type: "theory",
                content: `
# Eksperimen Bytecode

Kita bisa ngintip bytecode dari kode Python pakai modul \`dis\` (disassembler).

Contoh:
                `,
                codeExample: `import dis

def halo():
    print("Halo Dunia")

dis.dis(halo)`,
                expectedOutput: `  3           0 LOAD_GLOBAL              0 (print)
              2 LOAD_CONST               1 ('Halo Dunia')
              4 CALL_FUNCTION            1
              6 POP_TOP
              8 LOAD_CONST               0 (None)
             10 RETURN_VALUE`
            }
        ]
    },
    {
        id: 4,
        title: "Mengenal Variabel",
        description: "Belajar tentang variabel di Python: apa itu variabel, cara membuatnya, aturan penamaan, tipe data dasar, dan latihan praktik.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 5,
        progress: 0,
        image: "📦",
        topics: [
            "Apa Itu Variabel?",
            "Membuat Variabel",
            "Aturan Penamaan",
            "Tipe Data Dasar",
            "Latihan Praktik"
        ],
        color: "#3C467B",
        content: [
            {
                id: 1,
                title: "Apa Itu Variabel?",
                type: "theory",
                content: `
# Apa Itu Variabel?

Variabel = **wadah untuk menyimpan data**.  
Bayangin variabel kayak kotak yang punya label, dan di dalamnya ada isinya.

Contoh:
- Kotak bernama \`umur\` berisi angka 20.
- Kotak bernama \`nama\` berisi teks "Zayen".
                `,
                codeExample: `umur = 20
nama = "Zayen"
print(umur, nama)`,
                expectedOutput: `20 Zayen`
            },
            {
                id: 2,
                title: "Membuat Variabel",
                type: "theory",
                content: `
# Cara Membuat Variabel

Di Python, bikin variabel **gampang banget**:
- Tinggal tulis nama variabel = nilai
- Gak perlu deklarasi tipe data (Python otomatis ngerti)

Contoh:
\`\`\`python
a = 10
b = 3.14
c = "Halo"
\`\`\`

Output:
\`\`\`
10 3.14 Halo
\`\`\`
                `,
                codeExample: `a = 10
b = 3.14
c = "Halo"
print(a, b, c)`,
                expectedOutput: `10 3.14 Halo`
            },
            {
                id: 3,
                title: "Aturan Penamaan",
                type: "theory",
                content: `
# Aturan Nama Variabel

✅ Boleh:
- Huruf, angka, underscore (\_)
- Huruf kecil/besar (case-sensitive)

❌ Tidak boleh:
- Diawali angka (contoh: \`1nama\`)
- Pakai spasi (contoh: \`nama saya\`)
- Pakai simbol aneh (contoh: \`nama@\`)

📌 Best practice:
- Gunakan huruf kecil: \`umur\`, \`nama_lengkap\`
- Nama jelas & mudah dipahami
                `,
                codeExample: `nama_lengkap = "Budi Setiawan"
Umur = 21  # ini beda sama 'umur'
print(nama_lengkap, Umur)`,
                expectedOutput: `Budi Setiawan 21`
            },
            {
                id: 4,
                title: "Tipe Data Dasar",
                type: "theory",
                content: `
# Tipe Data di Variabel

Python punya beberapa tipe dasar:
- \`int\` → bilangan bulat
- \`float\` → bilangan desimal
- \`str\` → teks
- \`bool\` → True / False
- \`None\` → kosong

Gunakan fungsi \`type()\` untuk cek tipe data.
                `,
                codeExample: `x = 10
y = 3.14
z = "Halo"
flag = True
kosong = None

print(type(x))
print(type(y))
print(type(z))
print(type(flag))
print(type(kosong))`,
                expectedOutput: `<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>`
            },
            {
                id: 5,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Variabel

Coba kerjain soal berikut:
1. Buat variabel nama, umur, kota → lalu tampilkan dalam satu kalimat.
2. Simpan dua angka lalu tampilkan hasil penjumlahan.
3. Cek tipe data dari variabel \`angka\`, \`teks\`, dan \`status\`.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Data Diri",
                        description: "Buat variabel nama, umur, dan kota. Cetak dengan f-string: 'Halo, saya [nama], umur [umur], dari [kota]'.",
                        hint: "Gunakan f-string.",
                        solution: `nama = "Zayen"
umur = 20
kota = "Jakarta"

print(f"Halo, saya {nama}, umur {umur}, dari {kota}")`
                    },
                    {
                        id: 2,
                        title: "Hitung Penjumlahan",
                        description: "Simpan dua angka (misal a=7, b=5), lalu tampilkan hasil tambahannya.",
                        hint: "Gunakan operator +.",
                        solution: `a = 7
b = 5
print("Hasil penjumlahan:", a + b)`
                    },
                    {
                        id: 3,
                        title: "Cek Tipe Data",
                        description: "Buat variabel angka=10, teks='Python', status=True. Cetak tipe data masing-masing.",
                        hint: "Gunakan type().",
                        solution: `angka = 10
teks = "Python"
status = True

print(type(angka))
print(type(teks))
print(type(status))`
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Tipe Data di Python",
        description: "Belajar berbagai tipe data penting di Python: angka, string, boolean, list, tuple, set, dict, dan NoneType.",
        level: "Pemula",
        duration: "2 jam",
        lessons: 7,
        progress: 0,
        image: "📦",
        topics: [
            "Angka (int & float)",
            "String (str)",
            "Boolean (bool)",
            "List",
            "Tuple",
            "Set",
            "Dictionary (dict)",
            "NoneType",
            "Latihan"
        ],
        color: "#FA812F",
        content: [
            {
                id: 1,
                title: "Angka (int & float)",
                type: "theory",
                content: `
# Angka (Number)

Python punya 2 tipe angka utama:
- **int** → bilangan bulat (1, -5, 1000)
- **float** → bilangan desimal (3.14, -0.5)

Bisa dipakai buat operasi matematika.
                `,
                codeExample: `a = 10       # int
b = 3.14     # float
print(a + b)
print(type(a), type(b))`,
                expectedOutput: `13.14
<class 'int'> <class 'float'>`
            },
            {
                id: 2,
                title: "String (str)",
                type: "theory",
                content: `
# String (Teks)

String = teks. Bisa pakai tanda kutip tunggal ('') atau ganda ("").

Operasi:
- Gabung: "Py" + "thon"
- Ulang: "ha" * 3
- Panjang: len("hello")
- Akses huruf: teks[0]
                `,
                codeExample: `s = "Python"
print(s[0])      # P
print(s[-1])     # n
print(len(s))    # 6
print(s.upper()) # PYTHON`,
                expectedOutput: `P
n
6
PYTHON`
            },
            {
                id: 3,
                title: "Boolean (bool)",
                type: "theory",
                content: `
# Boolean

Tipe data logika, hanya ada:
- True
- False

Biasanya hasil dari perbandingan.
                `,
                codeExample: `print(5 > 3)
print(10 == 2)
is_active = True
print(is_active)`,
                expectedOutput: `True
False
True`
            },
            {
                id: 4,
                title: "List",
                type: "theory",
                content: `
# List

List = kumpulan data berurutan. Bisa berisi campuran tipe.

Ciri: **pakai tanda kurung siku [ ]**
                `,
                codeExample: `angka = [1, 2, 3, 4]
campur = [1, "halo", True]

print(angka[0])     # akses elemen
angka.append(5)     # tambah elemen
print(angka)`,
                expectedOutput: `1
[1, 2, 3, 4, 5]`
            },
            {
                id: 5,
                title: "Tuple",
                type: "theory",
                content: `
# Tuple

Mirip list, tapi **tidak bisa diubah** (immutable).

Ciri: **pakai tanda kurung ( )**
                `,
                codeExample: `data = (10, 20, 30)
print(data[1])
# data[1] = 99  # ❌ error, tuple immutable`,
                expectedOutput: `20`
            },
            {
                id: 6,
                title: "Set",
                type: "theory",
                content: `
# Set

Kumpulan data unik, **tidak berurutan**.

Ciri: **pakai tanda kurung kurawal { }**
                `,
                codeExample: `s = {1, 2, 3, 3, 2}
print(s)     # duplikat hilang
s.add(4)
print(s)`,
                expectedOutput: `{1, 2, 3}
{1, 2, 3, 4}`
            },
            {
                id: 7,
                title: "Dictionary (dict)",
                type: "theory",
                content: `
# Dictionary

Struktur data **key → value**.  
Mirip objek/map di bahasa lain.

Ciri: **pakai { key: value }**
                `,
                codeExample: `mhs = {
    "nama": "Zayen",
    "umur": 20,
    "jurusan": "Informatika"
}
print(mhs["nama"])
print(mhs.get("umur"))`,
                expectedOutput: `Zayen
20`
            },
            {
                id: 8,
                title: "NoneType",
                type: "theory",
                content: `
# NoneType

Dipakai buat nilai kosong / belum ada.
                `,
                codeExample: `x = None
print(x)
print(type(x))`,
                expectedOutput: `None
<class 'NoneType'>`
            },
            {
                id: 9,
                title: "Latihan",
                type: "practice",
                content: `
# Latihan Tipe Data

Coba selesaikan soal berikut:
1. Buat list berisi 5 nama, lalu tampilkan nama ke-3.
2. Buat dict berisi data diri (nama, umur, hobi) dan tampilkan hobi.
3. Cek apakah angka input dari user genap/ganjil pakai boolean.
4. Buat set dari list [1,2,2,3,3,4,4] → pastikan tidak ada duplikat.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "List Nama",
                        description: "Buat list 5 nama, cetak nama ke-3.",
                        hint: "Ingat, index mulai dari 0.",
                        solution: `nama = ["Ali", "Budi", "Citra", "Dewi", "Eka"]
print(nama[2])`
                    },
                    {
                        id: 2,
                        title: "Dictionary Data Diri",
                        description: "Buat dict dengan nama, umur, dan hobi. Cetak hobi.",
                        hint: "Gunakan mhs['hobi'].",
                        solution: `mhs = {
    "nama": "Zayen",
    "umur": 20,
    "hobi": "Coding"
}
print(mhs["hobi"])`
                    },
                    {
                        id: 3,
                        title: "Cek Genap/Ganjil",
                        description: "Input angka, cek genap/ganjil.",
                        hint: "Gunakan % 2 == 0.",
                        solution: `n = int(input("Masukkan angka: "))
print(n % 2 == 0)`
                    },
                    {
                        id: 4,
                        title: "Set Unik",
                        description: "Ubah list [1,2,2,3,3,4,4] jadi set unik.",
                        hint: "Gunakan fungsi set().",
                        solution: `data = [1,2,2,3,3,4,4]
unik = set(data)
print(unik)`
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Casting Tipe Data di Python",
        description: "Belajar cara mengubah tipe data (casting) di Python: int, float, str, dan bool. Lengkap dengan contoh dan latihan.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 4,
        progress: 0,
        image: "🔄",
        topics: [
            "Apa Itu Casting?",
            "Casting ke Integer & Float",
            "Casting ke String & Boolean",
            "Latihan Praktik"
        ],
        color: "#6F00FF",
        content: [
            {
                id: 1,
                title: "Apa Itu Casting?",
                type: "theory",
                content: `
# Apa Itu Casting?

**Casting** = proses mengubah tipe data dari satu jenis ke jenis lain.

Kenapa perlu casting?
- Input dari \`input()\` selalu berupa **string**.
- Kadang kita perlu angka buat operasi matematika.
- Atau sebaliknya, ubah angka jadi teks biar bisa digabung di print.
                `
            },
            {
                id: 2,
                title: "Casting ke Integer & Float",
                type: "theory",
                content: `
# Integer & Float

- \`int()\` → ubah ke bilangan bulat.
- \`float()\` → ubah ke bilangan desimal.

Contoh:
                `,
                codeExample: `# string ke int
angka1 = int("10")
print(angka1, type(angka1))

# string ke float
angka2 = float("3.14")
print(angka2, type(angka2))

# float ke int (desimal dibuang)
angka3 = int(9.99)
print(angka3, type(angka3))`,
                expectedOutput: `10 <class 'int'>
3.14 <class 'float'>
9 <class 'int'>`
            },
            {
                id: 3,
                title: "Casting ke String & Boolean",
                type: "theory",
                content: `
# String & Boolean

- \`str()\` → ubah ke teks.
- \`bool()\` → ubah ke True/False.

Aturan bool:
- 0, "", None → False
- Selain itu → True
                `,
                codeExample: `# int ke string
umur = 20
print("Umurku " + str(umur))

# cek bool dari angka
print(bool(0))   # False
print(bool(5))   # True

# cek bool dari string
print(bool(""))   # False
print(bool("halo"))  # True`,
                expectedOutput: `Umurku 20
False
True
False
True`
            },
            {
                id: 4,
                title: "Latihan Casting",
                type: "practice",
                content: `
# Latihan Casting

Coba kerjain soal berikut:
1. Minta input umur (string), ubah jadi int, lalu hitung tahun depan.
2. Minta input angka desimal (float), ubah ke int, lalu tampilkan hasilnya.
3. Buat program yang minta input teks, cek apakah teks kosong atau tidak (pakai bool()).
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Umur Tahun Depan",
                        description: "Minta input umur (string), ubah ke int, lalu tampilkan umur tahun depan.",
                        hint: "Gunakan int() untuk konversi input.",
                        solution: `umur = int(input("Masukkan umurmu: "))
print(f"Tahun depan umurmu {umur+1}")`
                    },
                    {
                        id: 2,
                        title: "Ubah Float ke Int",
                        description: "Input angka desimal (float), ubah ke integer.",
                        hint: "Gunakan float() lalu int().",
                        solution: `angka = float(input("Masukkan angka desimal: "))
print("Hasil casting ke int:", int(angka))`
                    },
                    {
                        id: 3,
                        title: "Cek String Kosong",
                        description: "Program cek apakah string kosong atau tidak.",
                        hint: "Gunakan bool() pada input string.",
                        solution: `teks = input("Masukkan teks: ")
if bool(teks):
    print("Teks tidak kosong")
else:
    print("Teks kosong")`
                    }
                ]
            }
        ]
    }
];

export default lessonCards;