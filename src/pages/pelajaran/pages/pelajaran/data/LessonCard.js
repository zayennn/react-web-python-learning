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
    },
    {
        id: 7,
        title: "Mengambil Input Data dari User",
        description: "Belajar cara menerima input dari pengguna dengan fungsi input(), mengolahnya, dan menampilkannya kembali.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "⌨️",
        topics: [
            "Fungsi input()",
            "Konversi Tipe Data",
            "Latihan Praktik"
        ],
        color: "#F39F9F",
        content: [
            {
                id: 1,
                title: "Fungsi input()",
                type: "theory",
                content: `
# Fungsi input()

Di Python, kita bisa ambil data dari user pakai fungsi \`input()\`.

Contoh sederhana:

\`\`\`python
nama = input("Siapa nama kamu? ")
print("Halo,", nama)
\`\`\`

Kalau user ngetik \`Zayen\`, outputnya jadi:

\`\`\`
Siapa nama kamu? Zayen
Halo, Zayen
\`\`\`

> Catatan: \`input()\` **selalu menghasilkan string (str)**, meskipun yang dimasukin angka.
                `,
                codeExample: `nama = input("Siapa nama kamu? ")
print("Halo,", nama)`,
                expectedOutput: `Siapa nama kamu? [User input]
Halo, [User input]`
            },
            {
                id: 2,
                title: "Konversi Tipe Data",
                type: "theory",
                content: `
# Konversi Input

Karena \`input()\` selalu string, kita perlu konversi kalau butuh angka:

- \`int()\` → ubah ke bilangan bulat
- \`float()\` → ubah ke bilangan desimal

Contoh:

\`\`\`python
umur = int(input("Umur kamu berapa? "))
tinggi = float(input("Tinggi badan (m): "))

print("Umur:", umur)
print("Tinggi:", tinggi)
\`\`\`

Output (kalau user masukin 20 dan 1.75):

\`\`\`
Umur kamu berapa? 20
Tinggi badan (m): 1.75
Umur: 20
Tinggi: 1.75
\`\`\`
                `,
                codeExample: `umur = int(input("Umur kamu berapa? "))
tinggi = float(input("Tinggi badan (m): "))

print("Umur:", umur)
print("Tinggi:", tinggi)`,
                expectedOutput: `Umur kamu berapa? [User input]
Tinggi badan (m): [User input]
Umur: [angka]
Tinggi: [angka desimal]`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Input

Coba kerjain soal berikut untuk melatih pemahamanmu tentang input() dan konversi tipe data:
1. Buat program yang minta nama user lalu menyapanya.
2. Buat program hitung umur di tahun depan.
3. Buat program kalkulator luas persegi panjang dari input panjang & lebar.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Halo User",
                        description: "Minta input nama, lalu tampilkan sapaan.",
                        hint: "Gunakan input() dan print().",
                        solution: `nama = input("Masukkan nama kamu: ")
print(f"Halo, {nama}!")`
                    },
                    {
                        id: 2,
                        title: "Umur Tahun Depan",
                        description: "Minta umur user, lalu hitung umur tahun depan.",
                        hint: "Gunakan int() untuk konversi.",
                        solution: `umur = int(input("Umur kamu berapa? "))
print(f"Tahun depan umurmu {umur + 1}")`
                    },
                    {
                        id: 3,
                        title: "Luas Persegi Panjang",
                        description: "Minta input panjang & lebar, hitung luasnya.",
                        hint: "Gunakan int() atau float() sesuai kebutuhan.",
                        solution: `panjang = float(input("Masukkan panjang: "))
lebar = float(input("Masukkan lebar: "))
luas = panjang * lebar
print(f"Luas persegi panjang = {luas}")`
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Operasi Aritmatika di Python",
        description: "Pelajari cara melakukan operasi matematika dasar di Python, mulai dari tambah, kurang, kali, bagi, sampai modulus dan pangkat.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 5,
        progress: 0,
        image: "➕",
        topics: [
            "Penjumlahan & Pengurangan",
            "Perkalian & Pembagian",
            "Modulus & Floor Division",
            "Pangkat",
            "Latihan Praktik"
        ],
        color: "#59AC77",
        content: [
            {
                id: 1,
                title: "Penjumlahan & Pengurangan",
                type: "theory",
                content: `
# + dan -

Operator paling basic di Python:
- \`+\` untuk menambah
- \`-\` untuk mengurangi
                `,
                codeExample: `a = 10
b = 3
print("a + b =", a + b)
print("a - b =", a - b)`,
                expectedOutput: `a + b = 13
a - b = 7`
            },
            {
                id: 2,
                title: "Perkalian & Pembagian",
                type: "theory",
                content: `
# * dan /

- \`*\` untuk perkalian  
- \`/\` untuk pembagian (hasilnya float)  
                `,
                codeExample: `x = 7
y = 2
print("x * y =", x * y)
print("x / y =", x / y)`,
                expectedOutput: `x * y = 14
x / y = 3.5`
            },
            {
                id: 3,
                title: "Modulus & Floor Division",
                type: "theory",
                content: `
# % dan //

- \`%\` modulus → sisa bagi  
- \`//\` floor division → hasil bagi dibulatkan ke bawah
                `,
                codeExample: `print("7 % 3 =", 7 % 3)
print("7 // 3 =", 7 // 3)`,
                expectedOutput: `7 % 3 = 1
7 // 3 = 2`
            },
            {
                id: 4,
                title: "Pangkat",
                type: "theory",
                content: `
# ** Pangkat

Gunakan \`**\` untuk pangkat.
                `,
                codeExample: `print("2 ** 3 =", 2 ** 3)
print("5 ** 2 =", 5 ** 2)`,
                expectedOutput: `2 ** 3 = 8
5 ** 2 = 25`
            },
            {
                id: 5,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Operasi Aritmatika

Coba kerjain soal berikut:
1. Buat program yang minta 2 angka, lalu tampilkan hasil tambah, kurang, kali, bagi.  
2. Minta input angka, tampilkan apakah dia habis dibagi 5 atau tidak.  
3. Hitung luas persegi panjang dari input panjang dan lebar.  
4. Hitung hasil pangkat dari angka dan eksponen yang dimasukkan user.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Kalkulator Mini",
                        description: "Input 2 angka, tampilkan hasil tambah, kurang, kali, bagi.",
                        hint: "Gunakan operator +, -, *, /",
                        solution: `a = int(input("Masukkan angka pertama: "))
b = int(input("Masukkan angka kedua: "))

print("Tambah:", a + b)
print("Kurang:", a - b)
print("Kali:", a * b)
print("Bagi:", a / b)`
                    },
                    {
                        id: 2,
                        title: "Cek Kelipatan 5",
                        description: "Input angka, cek apakah habis dibagi 5.",
                        hint: "Gunakan operator % (modulus).",
                        solution: `n = int(input("Masukkan angka: "))
if n % 5 == 0:
    print("Angka ini kelipatan 5")
else:
    print("Bukan kelipatan 5")`
                    },
                    {
                        id: 3,
                        title: "Luas Persegi Panjang",
                        description: "Hitung luas persegi panjang dari input panjang dan lebar.",
                        hint: "Luas = panjang * lebar",
                        solution: `p = int(input("Masukkan panjang: "))
l = int(input("Masukkan lebar: "))

luas = p * l
print("Luas persegi panjang:", luas)`
                    },
                    {
                        id: 4,
                        title: "Hitung Pangkat",
                        description: "Input angka dan eksponen, lalu hitung hasil pangkatnya.",
                        hint: "Gunakan operator **",
                        solution: `angka = int(input("Masukkan angka: "))
pangkat = int(input("Masukkan eksponen: "))

hasil = angka ** pangkat
print(f"Hasil: {angka} ** {pangkat} = {hasil}")`
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Latihan Perhitungan Sederhana",
        description: "Praktik dasar matematika di Python: penjumlahan, pengurangan, perkalian, pembagian, modulus, dan latihan mini-kalkulator.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 4,
        progress: 0,
        image: "🧮",
        topics: [
            "Penjumlahan & Pengurangan",
            "Perkalian & Pembagian",
            "Modulus & Pangkat",
            "Latihan Mini-Kalkulator"
        ],
        color: "#DC143C",
        content: [
            {
                id: 1,
                title: "Penjumlahan & Pengurangan",
                type: "theory",
                content: `
# Penjumlahan (+) & Pengurangan (-)

Dua operasi paling basic dalam matematika.

\`\`\`python
a = 10
b = 4
print("Penjumlahan:", a + b)
print("Pengurangan:", a - b)
\`\`\`
                `,
                codeExample: `a = 10
b = 4
print("Penjumlahan:", a + b)
print("Pengurangan:", a - b)`,
                expectedOutput: `Penjumlahan: 14
Pengurangan: 6`
            },
            {
                id: 2,
                title: "Perkalian & Pembagian",
                type: "theory",
                content: `
# Perkalian (*) & Pembagian (/)  

- * → perkalian biasa  
- / → pembagian hasil desimal  
- // → pembagian bulat (dibulatkan ke bawah)

\`\`\`python
x = 7
y = 2
print("Kali:", x * y)
print("Bagi:", x / y)
print("Bagi Bulat:", x // y)
\`\`\`
                `,
                codeExample: `x = 7
y = 2
print("Kali:", x * y)
print("Bagi:", x / y)
print("Bagi Bulat:", x // y)`,
                expectedOutput: `Kali: 14
Bagi: 3.5
Bagi Bulat: 3`
            },
            {
                id: 3,
                title: "Modulus & Pangkat",
                type: "theory",
                content: `
# Modulus (%) & Pangkat (**)

- % → sisa pembagian  
- ** → pangkat

\`\`\`python
print("Sisa bagi 10 % 3 =", 10 % 3)
print("2 pangkat 4 =", 2 ** 4)
\`\`\`
                `,
                codeExample: `print("Sisa bagi 10 % 3 =", 10 % 3)
print("2 pangkat 4 =", 2 ** 4)`,
                expectedOutput: `Sisa bagi 10 % 3 = 1
2 pangkat 4 = 16`
            },
            {
                id: 4,
                title: "Latihan Mini-Kalkulator",
                type: "practice",
                content: `
# Latihan Perhitungan

Sekarang waktunya latihan. Buat program sederhana untuk menghitung beberapa operasi matematika.

## Tantangan
1. Input 2 angka dari user, lalu tampilkan hasil tambah, kurang, kali, dan bagi.  
2. Buat program untuk mengecek apakah suatu angka habis dibagi 5 atau tidak.  
3. Buat program yang menghitung kuadrat dan kubik dari angka yang diinput user.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Kalkulator 2 Angka",
                        description: "Minta 2 angka dari user, lalu tampilkan hasil operasi dasar.",
                        hint: "Gunakan input() + int().",
                        solution: `a = int(input("Masukkan angka pertama: "))
b = int(input("Masukkan angka kedua: "))

print("Tambah:", a + b)
print("Kurang:", a - b)
print("Kali:", a * b)
print("Bagi:", a / b)`
                    },
                    {
                        id: 2,
                        title: "Cek Habis Dibagi 5",
                        description: "Input angka, cek apakah habis dibagi 5.",
                        hint: "Gunakan operator %.",
                        solution: `n = int(input("Masukkan angka: "))
if n % 5 == 0:
    print("Habis dibagi 5")
else:
    print("Tidak habis dibagi 5")`
                    },
                    {
                        id: 3,
                        title: "Kuadrat & Kubik",
                        description: "Hitung kuadrat (²) dan kubik (³) dari angka input.",
                        hint: "Gunakan operator **.",
                        solution: `n = int(input("Masukkan angka: "))
print("Kuadrat:", n ** 2)
print("Kubik:", n ** 3)`
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Operasi Komparasi",
        description: "Belajar operator perbandingan di Python: ==, !=, >, <, >=, <=. Pahami gimana cara membandingkan nilai.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "⚖️",
        topics: [
            "Apa Itu Operator Komparasi?",
            "Contoh Pemakaian",
            "Latihan Soal"
        ],
        color: "#3396D3",
        content: [
            {
                id: 1,
                title: "Apa Itu Operator Komparasi?",
                type: "theory",
                content: `
# Operator Komparasi

Operator komparasi = operator buat **membandingkan** dua nilai.  
Hasilnya selalu berupa **boolean** (\`True\` atau \`False\`).

## Daftar Operator
- \`==\` → sama dengan
- \`!=\` → tidak sama dengan
- \`>\` → lebih besar dari
- \`<\` → lebih kecil dari
- \`>=\` → lebih besar atau sama dengan
- \`<=\` → lebih kecil atau sama dengan
                `
            },
            {
                id: 2,
                title: "Contoh Pemakaian",
                type: "theory",
                content: `
# Contoh Operator Komparasi

Coba bandingkan angka atau string:

\`\`\`python
a = 10
b = 5

print(a == b)   # sama dengan
print(a != b)   # tidak sama dengan
print(a > b)    # lebih besar
print(a < b)    # lebih kecil
print(a >= 10)  # lebih besar/sama dengan
print(b <= 5)   # lebih kecil/sama dengan

# Komparasi string
print("Python" == "python")
print("A" < "B")
\`\`\`

Outputnya:

\`\`\`
False
True
True
False
True
True
False
True
\`\`\`
                `,
                codeExample: `a = 10
b = 5

print(a == b)   # False
print(a != b)   # True
print(a > b)    # True
print(a < b)    # False
print(a >= 10)  # True
print(b <= 5)   # True

print("Python" == "python") # False
print("A" < "B")            # True`,
                expectedOutput: `False
True
True
False
True
True
False
True`
            },
            {
                id: 3,
                title: "Latihan Operasi Komparasi",
                type: "practice",
                content: `
# Latihan Operasi Komparasi

Coba kerjain soal berikut:
1. Buat program yang minta input umur. Jika umur >= 18, tampilkan "Dewasa", selain itu "Belum Dewasa".
2. Minta dua angka, cek apakah angka pertama lebih besar dari angka kedua.
3. Cek apakah sebuah string input user sama dengan "Python" (case sensitive).
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Cek Dewasa atau Belum",
                        description: "Input umur, tampilkan status dewasa atau belum.",
                        hint: "Gunakan operator >=.",
                        solution: `umur = int(input("Masukkan umur: "))
if umur >= 18:
    print("Dewasa")
else:
    print("Belum Dewasa")`
                    },
                    {
                        id: 2,
                        title: "Bandingkan Dua Angka",
                        description: "Input dua angka, cek apakah angka pertama lebih besar dari kedua.",
                        hint: "Gunakan >.",
                        solution: `a = int(input("Angka pertama: "))
b = int(input("Angka kedua: "))

if a > b:
    print("Angka pertama lebih besar")
else:
    print("Angka pertama tidak lebih besar")`
                    },
                    {
                        id: 3,
                        title: "Cek String Python",
                        description: "Input string, cek apakah sama dengan 'Python'.",
                        hint: "Gunakan operator ==.",
                        solution: `kata = input("Masukkan kata: ")

if kata == "Python":
    print("Benar, itu Python!")
else:
    print("Bukan Python.")`
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "Operasi Logika & Boolean",
        description: "Pelajari tipe data boolean (True/False), operator logika (and, or, not), serta cara menggunakannya dalam kondisi.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 4,
        progress: 0,
        image: "🔀",
        topics: [
            "Apa itu Boolean?",
            "Operator Logika",
            "Perbandingan & Boolean",
            "Latihan Praktik"
        ],
        color: "#FFD93D",
        content: [
            {
                id: 1,
                title: "Apa itu Boolean?",
                type: "theory",
                content: `
# Boolean di Python

Boolean = tipe data yang hanya punya **dua nilai**:
- \`True\`
- \`False\`

Biasanya dipakai untuk **logika / kondisi**.
                `,
                codeExample: `is_sunny = True
is_raining = False
print(is_sunny, is_raining, type(is_sunny))`,
                expectedOutput: `True False <class 'bool'>`
            },
            {
                id: 2,
                title: "Operator Logika",
                type: "theory",
                content: `
# Operator Logika di Python

- \`and\` → True kalau **dua-duanya True**
- \`or\` → True kalau **minimal salah satu True**
- \`not\` → membalik nilai (True jadi False)

Tabel kebenaran (*truth table*):

| A     | B     | A and B | A or B |
|-------|-------|---------|--------|
| True  | True  | True    | True   |
| True  | False | False   | True   |
| False | True  | False   | True   |
| False | False | False   | False  |
                `,
                codeExample: `print(True and True)   # True
print(True and False)  # False
print(True or False)   # True
print(not True)        # False`,
                expectedOutput: `True
False
True
False`
            },
            {
                id: 3,
                title: "Perbandingan & Boolean",
                type: "theory",
                content: `
# Boolean dari Operator Perbandingan

Hasil perbandingan di Python juga berupa Boolean.

- \`==\` : sama dengan
- \`!=\` : tidak sama dengan
- \`>\`, \`<\` : lebih besar / kecil
- \`>=\`, \`<=\` : lebih besar/kecil sama dengan
                `,
                codeExample: `x = 10
y = 5
print(x > y)    # True
print(x == 10)  # True
print(y != 5)   # False`,
                expectedOutput: `True
True
False`
            },
            {
                id: 4,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Boolean & Logika

Coba selesaikan soal berikut:
1. Cek apakah angka positif DAN genap.
2. Cek apakah nama yang dimasukkan adalah "admin" atau "user".
3. Buat sistem login sederhana: username dan password benar → akses diterima.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Positif & Genap",
                        description: "Input angka, cek apakah positif DAN genap.",
                        hint: "Gunakan operator and & modulus %.",
                        solution: `n = int(input("Masukkan angka: "))
if n > 0 and n % 2 == 0:
    print("Angka positif dan genap")
else:
    print("Tidak memenuhi syarat")`
                    },
                    {
                        id: 2,
                        title: "Cek Nama User",
                        description: "Input nama, cek apakah 'admin' atau 'user'.",
                        hint: "Gunakan operator or.",
                        solution: `nama = input("Masukkan nama: ")
if nama == "admin" or nama == "user":
    print("Akses diterima")
else:
    print("Akses ditolak")`
                    },
                    {
                        id: 3,
                        title: "Sistem Login",
                        description: "Buat login dengan username='admin' dan password='1234'.",
                        hint: "Bandingkan string input dengan nilai yang ditentukan.",
                        solution: `username = input("Username: ")
password = input("Password: ")

if username == "admin" and password == "1234":
    print("Login berhasil!")
else:
    print("Login gagal!")`
                    }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "Latihan Komparasi dan Logika",
        description: "Latihan pemahaman operator perbandingan dan logika di Python. Dari membandingkan angka hingga menggabungkan kondisi dengan AND, OR, dan NOT.",
        level: "Menengah",
        duration: "2 jam",
        lessons: 5,
        progress: 0,
        image: "🧠",
        topics: [
            "Operator Perbandingan",
            "Operator Logika",
            "Kombinasi Kondisi",
            "Latihan Kasus",
            "Soal Praktik"
        ],
        color: "#154D71",
        content: [
            {
                id: 1,
                title: "Operator Perbandingan",
                type: "theory",
                content: `
# Operator Perbandingan

Dipakai untuk membandingkan dua nilai:

- \`==\` sama dengan
- \`!=\` tidak sama dengan
- \`>\` lebih besar
- \`<\` lebih kecil
- \`>=\` lebih besar sama dengan
- \`<=\` lebih kecil sama dengan

Hasilnya selalu \`True\` atau \`False\`.
                `,
                codeExample: `x = 10
y = 7
print(x == y)   # False
print(x != y)   # True
print(x > y)    # True
print(x <= y)   # False`,
                expectedOutput: `False
True
True
False`
            },
            {
                id: 2,
                title: "Operator Logika",
                type: "theory",
                content: `
# Operator Logika

Dipakai untuk menggabungkan kondisi:

- \`and\` → True jika semua kondisi True
- \`or\` → True jika salah satu kondisi True
- \`not\` → membalik nilai boolean
                `,
                codeExample: `x = 5
print(x > 0 and x < 10)   # True
print(x > 0 or x > 10)    # True
print(not (x > 0))        # False`,
                expectedOutput: `True
True
False`
            },
            {
                id: 3,
                title: "Kombinasi Kondisi",
                type: "theory",
                content: `
# Kombinasi Kondisi

Bisa digabung pakai tanda kurung buat logika yang lebih kompleks.
                `,
                codeExample: `umur = 20
punya_ktp = True

if umur >= 17 and punya_ktp:
    print("Boleh bikin SIM")
else:
    print("Belum boleh")`,
                expectedOutput: `Boleh bikin SIM`
            },
            {
                id: 4,
                title: "Latihan Kasus",
                type: "theory",
                content: `
# Contoh Kasus

Cek kelulusan ujian berdasarkan nilai:
- Minimal 75 = Lulus
- Kalau nilai < 75 = Gagal
                `,
                codeExample: `nilai = 80
if nilai >= 75:
    print("Lulus")
else:
    print("Gagal")`,
                expectedOutput: `Lulus`
            },
            {
                id: 5,
                title: "Soal Praktik",
                type: "practice",
                content: `
# Latihan Operator Komparasi & Logika

Kerjain soal-soal ini biar makin jago:
1. Cek apakah sebuah angka positif, negatif, atau nol.
2. Minta umur user, cek apakah dia remaja (13–17) atau bukan.
3. Program login sederhana (username & password).
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Cek Angka Positif/Negatif",
                        description: "Input angka, tampilkan 'Positif', 'Negatif', atau 'Nol'.",
                        hint: "Gunakan if-elif-else.",
                        solution: `n = int(input("Masukkan angka: "))
if n > 0:
    print("Positif")
elif n < 0:
    print("Negatif")
else:
    print("Nol")`
                    },
                    {
                        id: 2,
                        title: "Cek Usia Remaja",
                        description: "Input umur, cek apakah antara 13–17.",
                        hint: "Gunakan operator and.",
                        solution: `umur = int(input("Umur kamu: "))
if umur >= 13 and umur <= 17:
    print("Remaja")
else:
    print("Bukan remaja")`
                    },
                    {
                        id: 3,
                        title: "Program Login",
                        description: "Minta username dan password, cek apakah sesuai.",
                        hint: "Gunakan operator == pada string.",
                        solution: `user = input("Username: ")
pw = input("Password: ")

if user == "admin" and pw == "1234":
    print("Login berhasil")
else:
    print("Login gagal")`
                    }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "Operator Bitwise di Python",
        description: "Pelajari cara kerja operator bitwise (AND, OR, XOR, NOT, shift) untuk memanipulasi data biner di Python.",
        level: "Menengah",
        duration: "1.5 jam",
        lessons: 6,
        progress: 0,
        image: "🔢",
        topics: [
            "Apa Itu Bitwise?",
            "Operator AND (&)",
            "Operator OR (|)",
            "Operator XOR (^)",
            "Operator NOT (~)",
            "Shift Kiri & Kanan (<<, >>)",
            "Latihan"
        ],
        color: "#0046FF",
        content: [
            {
                id: 1,
                title: "Apa Itu Bitwise?",
                type: "theory",
                content: `
# Apa Itu Operator Bitwise?

- Operator bitwise bekerja pada **representasi biner** suatu angka.  
- Angka di komputer disimpan dalam bentuk biner (0 dan 1).  
- Bitwise memungkinkan manipulasi langsung tiap bit.

Contoh:
- Angka 6 → biner: 110
- Angka 3 → biner: 011
                `
            },
            {
                id: 2,
                title: "Operator AND (&)",
                type: "theory",
                content: `
# Operator AND (&)

Hasilnya 1 jika **kedua bit bernilai 1**, selain itu 0.

Contoh:
- 6 (110)
- 3 (011)
- 6 & 3 → 010 (hasil: 2)
                `,
                codeExample: `a = 6  # 110
b = 3  # 011
print(a & b)`,
                expectedOutput: `2`
            },
            {
                id: 3,
                title: "Operator OR (|)",
                type: "theory",
                content: `
# Operator OR (|)

Hasilnya 1 jika **salah satu bit bernilai 1**.

Contoh:
- 6 (110)
- 3 (011)
- 6 | 3 → 111 (hasil: 7)
                `,
                codeExample: `a = 6
b = 3
print(a | b)`,
                expectedOutput: `7`
            },
            {
                id: 4,
                title: "Operator XOR (^)",
                type: "theory",
                content: `
# Operator XOR (^)

Hasilnya 1 jika **kedua bit berbeda**.  
Kalau sama → hasil 0.

Contoh:
- 6 (110)
- 3 (011)
- 6 ^ 3 → 101 (hasil: 5)
                `,
                codeExample: `a = 6
b = 3
print(a ^ b)`,
                expectedOutput: `5`
            },
            {
                id: 5,
                title: "Operator NOT (~)",
                type: "theory",
                content: `
# Operator NOT (~)

Membalik semua bit (0 jadi 1, 1 jadi 0).  
Dalam Python → hasilnya = -(angka + 1).

Contoh:
- ~6 = -(6+1) = -7
                `,
                codeExample: `a = 6
print(~a)`,
                expectedOutput: `-7`
            },
            {
                id: 6,
                title: "Shift Kiri (<<) & Kanan (>>)",
                type: "theory",
                content: `
# Operator Shift

- **<< (kiri)**: geser bit ke kiri (sama dengan dikali 2).
- **>> (kanan)**: geser bit ke kanan (sama dengan dibagi 2, dibulatkan).

Contoh:
- 6 (110) << 1 → 1100 (12)
- 6 (110) >> 1 → 11 (3)
                `,
                codeExample: `a = 6
print(a << 1)  # geser kiri
print(a >> 1)  # geser kanan`,
                expectedOutput: `12
3`
            },
            {
                id: 7,
                title: "Latihan Operator Bitwise",
                type: "practice",
                content: `
# Latihan Operator Bitwise

Coba kerjain soal ini biar makin paham:
1. Buat program yang minta input dua angka, lalu tampilkan hasil AND, OR, XOR.
2. Geser angka 15 ke kiri 2 kali, lalu ke kanan 1 kali.
3. Buat fungsi untuk mengecek apakah sebuah angka **ganjil/genap** menggunakan operator bitwise.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Bitwise Kalkulator",
                        description: "Minta dua angka, tampilkan hasil AND, OR, XOR.",
                        hint: "Gunakan &, |, ^",
                        solution: `a = int(input("Masukkan angka pertama: "))
b = int(input("Masukkan angka kedua: "))

print("AND:", a & b)
print("OR:", a | b)
print("XOR:", a ^ b)`
                    },
                    {
                        id: 2,
                        title: "Geser Angka",
                        description: "Geser angka 15 ke kiri 2 kali, lalu ke kanan 1 kali.",
                        hint: "Gunakan << dan >>",
                        solution: `x = 15
print("Geser kiri 2:", x << 2)
print("Geser kanan 1:", x >> 1)`
                    },
                    {
                        id: 3,
                        title: "Cek Genap/Ganjil dengan Bitwise",
                        description: "Gunakan operator & untuk cek genap/ganjil.",
                        hint: "Angka genap → bit terakhir = 0",
                        solution: `def cek_genap_ganjil(n):
    if n & 1 == 0:
        print("Genap")
    else:
        print("Ganjil")

cek_genap_ganjil(7)
cek_genap_ganjil(10)`
                    }
                ]
            }
        ]
    },
    {
        id: 14,
        title: "Operator Assignment di Python",
        description: "Belajar gimana cara pakai operator assignment (=, +=, -=, dll) buat nyimpen dan update nilai variabel dengan cara singkat.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "✍️",
        topics: [
            "Apa itu Operator Assignment?",
            "Macam-Macam Operator Assignment",
            "Latihan Praktik"
        ],
        color: "#5A9690",
        content: [
            {
                id: 1,
                title: "Apa itu Operator Assignment?",
                type: "theory",
                content: `
# Operator Assignment

Operator **assignment** itu dipakai buat **menyimpan nilai ke dalam variabel**.  
Simbol utamanya adalah tanda sama dengan (=).

Contoh:
\`\`\`python
x = 10
\`\`\`
Artinya: *variabel x dikasih nilai 10.*

Selain "=" biasa, Python juga punya bentuk assignment lain yang lebih singkat.  
Misalnya: 
- \`+=\` buat nambah nilai ke variabel
- \`-=\` buat ngurangin nilai variabel
- dst.

Jadi, assignment operator ini kaya shortcut biar kita ga nulis kode panjang.
                `
            },
            {
                id: 2,
                title: "Macam-Macam Operator Assignment",
                type: "theory",
                content: `
# Macam-Macam Operator Assignment di Python

Berikut operator assignment yang sering dipakai:

1. **= (assignment biasa)**  
   Kasih nilai awal.  
   \`\`\`python
   x = 5
   \`\`\`

2. **+= (tambah lalu simpan)**  
   Sama dengan: \`x = x + ...\`  
   \`\`\`python
   x = 5
   x += 3   # sama dengan x = x + 3
   print(x) # 8
   \`\`\`

3. **-= (kurang lalu simpan)**  
   Sama dengan: \`x = x - ...\`  
   \`\`\`python
   x = 10
   x -= 4
   print(x) # 6
   \`\`\`

4. ***= (kali lalu simpan)**  
   Sama dengan: \`x = x * ...\`  
   \`\`\`python
   x = 7
   x *= 2
   print(x) # 14
   \`\`\`

5. **/= (bagi lalu simpan)**  
   Sama dengan: \`x = x / ...\`  
   \`\`\`python
   x = 20
   x /= 5
   print(x) # 4.0
   \`\`\`

6. **//= (bagi bulat lalu simpan)**  
   Sama dengan: \`x = x // ...\`  
   \`\`\`python
   x = 20
   x //= 3
   print(x) # 6
   \`\`\`

7. **%= (modulus lalu simpan)**  
   Sama dengan: \`x = x % ...\`  
   \`\`\`python
   x = 10
   x %= 3
   print(x) # 1
   \`\`\`

8. **\*\*= (pangkat lalu simpan)**  
   Sama dengan: \`x = x ** ...\`  
   \`\`\`python
   x = 2
   x **= 3
   print(x) # 8
   \`\`\`

9. **Operator assignment untuk bitwise (lanjutan):**  
   - \`&=\` AND  
   - \`|=\` OR  
   - \`^=\` XOR  
   - \`>>=\` geser kanan  
   - \`<<=\` geser kiri  

   (Biasanya dipakai di level menengah, contohnya di bidang pemrosesan data biner).
                `,
                codeExample: `x = 5
x += 2
print("Hasil += :", x)

x -= 1
print("Hasil -= :", x)

x *= 3
print("Hasil *= :", x)

x /= 2
print("Hasil /= :", x)

x **= 2
print("Hasil **= :", x)`,
                expectedOutput: `Hasil += : 7
Hasil -= : 6
Hasil *= : 18
Hasil /= : 9.0
Hasil **= : 81.0`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Operator Assignment

Coba kerjain soal berikut buat nguji pemahaman kamu:
1. Mulai dengan \`x = 10\`, lalu tambahkan 5 menggunakan operator assignment.
2. Buat variabel \`y = 50\`, lalu kurangi 20 menggunakan \`-=\`.
3. Buat variabel \`z = 4\`, kalikan dengan 3, lalu pangkatkan 2 (gunakan operator assignment).
4. Simulasi tabungan: Mulai dengan saldo = 1000, lalu tambah 200, kurangi 150, dan kalikan 2 (karena dapet bonus). Tampilkan saldo akhir.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Tambah 5",
                        description: "Gunakan x = 10 lalu tambahkan 5 pakai operator assignment.",
                        hint: "Pakai +=.",
                        solution: `x = 10
x += 5
print(x)  # 15`
                    },
                    {
                        id: 2,
                        title: "Kurangi 20",
                        description: "Buat y = 50, lalu kurangi 20.",
                        hint: "Pakai -=.",
                        solution: `y = 50
y -= 20
print(y)  # 30`
                    },
                    {
                        id: 3,
                        title: "Kali dan Pangkat",
                        description: "Buat z = 4, kali 3 lalu pangkat 2.",
                        hint: "Gunakan *= dan **=.",
                        solution: `z = 4
z *= 3   # z = 12
z **= 2  # z = 144
print(z)`
                    },
                    {
                        id: 4,
                        title: "Simulasi Tabungan",
                        description: "Mulai dengan saldo = 1000, lalu +200, -150, ×2.",
                        hint: "Urutkan pakai +=, -=, *=.",
                        solution: `saldo = 1000
saldo += 200
saldo -= 150
saldo *= 2
print(saldo)  # 2100`
                    }
                ]
            }
        ]
    },
    {
        id: 15,
        title: "Pengenalan String",
        description: "Belajar tipe data string di Python: cara membuat, mengakses, memodifikasi, dan operasi penting pada string.",
        level: "Pemula",
        duration: "2 jam",
        lessons: 5,
        progress: 0,
        image: "🔤",
        topics: [
            "Apa Itu String?",
            "Mengakses Karakter dalam String",
            "Slicing String",
            "Metode Penting pada String",
            "Latihan Praktik"
        ],
        color: "#6B3F69",
        content: [
            {
                id: 1,
                title: "Apa Itu String?",
                type: "theory",
                content: `
# Apa Itu String?

String = tipe data teks di Python.  
Dibuat dengan tanda kutip:
- Kutip tunggal → 'halo'
- Kutip ganda → "halo"
- Tiga kutip → '''halo''' atau """halo"""

String bisa berisi huruf, angka, spasi, bahkan simbol.

Contoh:
\`\`\`python
teks1 = "Hello"
teks2 = 'Python'
teks3 = """Belajar Python itu seru!"""
\`\`\`
                `,
                codeExample: `teks1 = "Hello"
teks2 = 'Python'
teks3 = """Belajar Python itu seru!"""

print(teks1)
print(teks2)
print(teks3)`,
                expectedOutput: `Hello
Python
Belajar Python itu seru!`
            },
            {
                id: 2,
                title: "Mengakses Karakter dalam String",
                type: "theory",
                content: `
# Mengakses Karakter

String = kumpulan karakter, jadi bisa diakses pakai **index**.  
Index di Python mulai dari 0.

\`\`\`python
kata = "Python"
print(kata[0])  # huruf pertama
print(kata[1])  # huruf kedua
print(kata[-1]) # huruf terakhir
\`\`\`

- Index positif: mulai dari depan (0,1,2,...)
- Index negatif: mulai dari belakang (-1,-2,...)
                `,
                codeExample: `kata = "Python"
print(kata[0])
print(kata[1])
print(kata[-1])`,
                expectedOutput: `P
y
n`
            },
            {
                id: 3,
                title: "Slicing String",
                type: "theory",
                content: `
# Slicing String

Slicing = mengambil sebagian string.  
Format: \`string[start:end]\`

- start → index mulai (default 0)
- end → index berhenti (tidak termasuk)

\`\`\`python
kata = "Python"
print(kata[0:3])   # ambil huruf index 0 sampai 2
print(kata[:4])    # sama dengan [0:4]
print(kata[2:])    # dari index 2 sampai akhir
print(kata[-3:])   # 3 huruf terakhir
\`\`\`
                `,
                codeExample: `kata = "Python"
print(kata[0:3])
print(kata[:4])
print(kata[2:])
print(kata[-3:])`,
                expectedOutput: `Pyt
Pyth
thon
hon`
            },
            {
                id: 4,
                title: "Metode Penting pada String",
                type: "theory",
                content: `
# Metode Penting

Python punya banyak metode string bawaan:

- \`.upper()\` → jadi huruf besar semua  
- \`.lower()\` → jadi huruf kecil semua  
- \`.capitalize()\` → huruf pertama jadi besar  
- \`.strip()\` → hapus spasi di depan & belakang  
- \`.replace(a,b)\` → ganti teks  
- \`.split()\` → pisah string jadi list  
- \`len(string)\` → hitung panjang string  

Contoh:
\`\`\`python
teks = "  Belajar Python  "
print(teks.upper())
print(teks.lower())
print(teks.strip())
print(teks.replace("Python", "Coding"))
print(teks.split())
print(len(teks))
\`\`\`
                `,
                codeExample: `teks = "  Belajar Python  "
print(teks.upper())
print(teks.lower())
print(teks.strip())
print(teks.replace("Python", "Coding"))
print(teks.split())
print(len(teks))`,
                expectedOutput: `  BELAJAR PYTHON  
  belajar python  
Belajar Python
  Belajar Coding  
['Belajar', 'Python']
17`
            },
            {
                id: 5,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan String

Coba kerjain soal ini biar makin jago:
1. Ambil huruf pertama & terakhir dari string yang dimasukkan user.
2. Ubah input user jadi huruf besar semua.
3. Cek apakah kata "python" ada di input user (case-insensitive).
4. Balikkan string (contoh: "halo" → "olah").
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Huruf Pertama & Terakhir",
                        description: "Minta user input string, tampilkan huruf pertama dan terakhir.",
                        hint: "Gunakan index [0] dan [-1].",
                        solution: `teks = input("Masukkan teks: ")
print("Huruf pertama:", teks[0])
print("Huruf terakhir:", teks[-1])`
                    },
                    {
                        id: 2,
                        title: "Uppercase",
                        description: "Minta user input string, tampilkan dalam huruf besar semua.",
                        hint: "Gunakan .upper().",
                        solution: `teks = input("Masukkan teks: ")
print(teks.upper())`
                    },
                    {
                        id: 3,
                        title: "Cek Python",
                        description: "Cek apakah kata 'python' ada dalam input user (case-insensitive).",
                        hint: "Gunakan .lower() lalu 'in'.",
                        solution: `teks = input("Masukkan teks: ")
if "python" in teks.lower():
    print("Mengandung kata 'python'")
else:
    print("Tidak mengandung 'python'")`
                    },
                    {
                        id: 4,
                        title: "Balik String",
                        description: "Minta user input string, tampilkan string dalam keadaan terbalik.",
                        hint: "Gunakan slicing [::-1].",
                        solution: `teks = input("Masukkan teks: ")
print(teks[::-1])`
                    }
                ]
            }
        ]
    },
    {
        id: 16,
        title: "Operasi dan Manipulasi String (Part 1)",
        description: "Belajar cara menggabungkan, mengulang, dan memeriksa string di Python. Dasar penting sebelum lanjut ke manipulasi string lanjutan.",
        level: "Menengah",
        duration: "1.5 jam",
        lessons: 4,
        progress: 0,
        image: "🧩",
        topics: [
            "Penggabungan String (Concatenation)",
            "Pengulangan String",
            "Mengecek Panjang String",
            "Latihan Praktik"
        ],
        color: "#0065F8",
        content: [
            {
                id: 1,
                title: "Penggabungan String (Concatenation)",
                type: "theory",
                content: `
# Penggabungan String (Concatenation)

Kata *concatenate* artinya *menggabungkan*.  
Di Python, kita bisa gabung dua atau lebih string pakai tanda **+**.

\`\`\`python
nama_depan = "Zayen"
nama_belakang = "Dev"
nama_lengkap = nama_depan + " " + nama_belakang
print(nama_lengkap)
\`\`\`

Output:
\`\`\`
Zayen Dev
\`\`\`

Kita juga bisa menggabungkan string langsung di dalam print:
\`\`\`python
print("Halo, " + "selamat datang!")
\`\`\`

⚠️ Catatan:
Kalo mau gabung string dengan angka, **harus diubah dulu ke string** pakai \`str()\`.

\`\`\`python
umur = 19
print("Umur saya " + str(umur))
\`\`\`
`
            },
            {
                id: 2,
                title: "Pengulangan String",
                type: "theory",
                content: `
# Pengulangan String

Kita bisa ngulang string pakai tanda **\*** (bintang).  
Cocok buat efek teks atau formatting sederhana.

\`\`\`python
print("Python! " * 3)
\`\`\`

Output:
\`\`\`
Python! Python! Python!
\`\`\`

Bisa juga dipakai untuk bikin border teks:
\`\`\`python
print("=" * 20)
print("Belajar Python".center(20))
print("=" * 20)
\`\`\`

Output:
\`\`\`
====================
   Belajar Python   
====================
\`\`\`
`
            },
            {
                id: 3,
                title: "Mengecek Panjang String",
                type: "theory",
                content: `
# Mengecek Panjang String

Kita bisa tahu berapa banyak karakter di dalam string pakai fungsi **len()**.

\`\`\python
teks = "Belajar Python"
print(len(teks))
\`\`\`

Output:
\`\`\`
14
\`\`\`

Termasuk spasi ya!  
Kalimat "Halo Dunia" berarti panjangnya 10 (karena ada 1 spasi).
`
            },
            {
                id: 4,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Operasi String (Part 1)

Coba latihan di bawah ini biar makin paham cara pakai operator string:

1. Buat variabel \`nama_depan\` dan \`nama_belakang\`, lalu gabungkan jadi \`nama_lengkap\`.
2. Cetak kata "Python " sebanyak 5 kali.
3. Buat teks \`judul = "Belajar Python Itu Seru"\`, lalu tampilkan panjang string-nya.
4. Cetak teks "Halo Zayen!" tapi gunakan variabel \`nama = "Zayen"\` (gabungkan string dan variabel).
5. Bikin border dari karakter "=" sepanjang 30 karakter dan tulis teks di tengahnya.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Gabung Nama",
                        description: "Gabungkan nama depan dan nama belakang jadi satu string.",
                        hint: "Gunakan tanda + dan tambahkan spasi.",
                        solution: `nama_depan = "Zayen"
nama_belakang = "Dev"
nama_lengkap = nama_depan + " " + nama_belakang
print(nama_lengkap)  # Zayen Dev`
                    },
                    {
                        id: 2,
                        title: "Ulang Kata",
                        description: "Cetak kata 'Python ' sebanyak 5 kali.",
                        hint: "Gunakan operator *.",
                        solution: `print("Python " * 5)`
                    },
                    {
                        id: 3,
                        title: "Hitung Panjang String",
                        description: "Buat teks dan tampilkan jumlah karakternya.",
                        hint: "Gunakan fungsi len().",
                        solution: `judul = "Belajar Python Itu Seru"
print(len(judul))  # 24`
                    },
                    {
                        id: 4,
                        title: "Gabung dengan Variabel",
                        description: "Cetak 'Halo Zayen!' tapi pakai variabel nama.",
                        hint: "Gabungkan string dan variabel pakai +.",
                        solution: `nama = "Zayen"
print("Halo " + nama + "!")`
                    },
                    {
                        id: 5,
                        title: "Border Teks",
                        description: "Bikin teks di tengah border '=' sepanjang 30 karakter.",
                        hint: "Gunakan print('=' * 30) dan .center().",
                        solution: `print("=" * 30)
print("Belajar Python".center(30))
print("=" * 30)`
                    }
                ]
            }
        ]
    },
    {
        id: 17,
        title: "Operasi dan Manipulasi String (Part 2)",
        description: "Belajar berbagai method string di Python untuk ubah huruf, ganti teks, pecah string jadi list, dan gabungin lagi dengan cara singkat dan efektif.",
        level: "Menengah",
        duration: "1 jam",
        lessons: 4,
        progress: 0,
        image: "🧩",
        topics: [
            "Mengubah Huruf (upper, lower, title, capitalize)",
            "Mencari & Mengganti Teks (find, replace)",
            "Memecah & Menggabung String (split, join)",
            "Formatting String (f-string, format)"
        ],
        color: "#FAB12F",
        content: [
            {
                id: 1,
                title: "Mengubah Huruf (Upper, Lower, Title, Capitalize)",
                type: "theory",
                content: `
# Mengubah Huruf di String

Kadang kita butuh ubah teks jadi huruf besar, kecil, atau format judul.  
Python udah nyediain method bawaan yang gampang banget dipakai.

\`\`\`python
teks = "belajar python itu seru!"

print(teks.upper())      # Semua huruf jadi besar
print(teks.lower())      # Semua huruf jadi kecil
print(teks.title())      # Huruf pertama tiap kata jadi besar
print(teks.capitalize()) # Hanya huruf pertama di awal kalimat
\`\`\`

Output:
\`\`\`
BELAJAR PYTHON ITU SERU!
belajar python itu seru!
Belajar Python Itu Seru!
Belajar python itu seru!
\`\`\`

✨ **Tips:**  
Biasanya ini kepakai waktu bikin input user biar konsisten (misal, semua username disimpan lowercase).
            `
            },
            {
                id: 2,
                title: "Mencari & Mengganti Teks (find, replace)",
                type: "theory",
                content: `
# Mencari & Mengganti Teks di String

Kalau lo pengen **nyari kata tertentu** atau **ganti teks lama jadi baru**,  
metode yang sering dipakai adalah \`.find()\` dan \`.replace()\`.

\`\`\`python
kalimat = "aku suka python, python itu keren banget!"

# Cari posisi kata
posisi = kalimat.find("python")
print("Posisi kata 'python':", posisi)

# Ganti teks
baru = kalimat.replace("python", "JavaScript")
print("Kalimat baru:", baru)
\`\`\`

Output:
\`\`\`
Posisi kata 'python': 9
Kalimat baru: aku suka JavaScript, JavaScript itu keren banget!
\`\`\`

🧠 Catatan:
- Kalau kata yang dicari gak ada, \`.find()\` bakal hasilin **-1**.
- \`.replace(old, new)** bisa ganti semua kemunculan kata lama jadi kata baru.
            `
            },
            {
                id: 3,
                title: "Memecah & Menggabung String (split, join)",
                type: "theory",
                content: `
# Split & Join di String

Metode ini dipakai buat **pecah teks jadi list** atau **gabungin list jadi teks** lagi.

\`\`\`python
kalimat = "Python itu mudah dan seru"

# Pecah jadi list kata
kata = kalimat.split()  
print(kata)

# Gabung lagi jadi string, dipisahkan dengan tanda "-"
hasil = "-".join(kata)
print(hasil)
\`\`\`

Output:
\`\`\`
['Python', 'itu', 'mudah', 'dan', 'seru']
Python-itu-mudah-dan-seru
\`\`\`

✨ Bisa juga tentuin pemisah khusus:
\`\`\`python
data = "apel,jeruk,mangga"
buah = data.split(",")
print(buah)
\`\`\`

Output:
\`\`\`
['apel', 'jeruk', 'mangga']
\`\`\`
            `
            },
            {
                id: 4,
                title: "Formatting String (f-string, format)",
                type: "theory",
                content: `
# Formatting String

Formatting itu cara buat **nyisipin variabel ke dalam teks** dengan rapi.  
Ada 2 cara populer: pakai \`f-string\` dan \`.format()\`.

## 1. F-String (cara modern dan paling mudah)
\`\`\`python
nama = "Zayen"
umur = 20

print(f"Halo {nama}, umur kamu {umur} tahun.")
\`\`\`

Output:
\`\`\`
Halo Zayen, umur kamu 20 tahun.
\`\`\`

## 2. Metode .format()
\`\`\`python
nama = "Rafi"
umur = 18

print("Halo {}, umur kamu {} tahun.".format(nama, umur))
\`\`\`

Output:
\`\`\`
Halo Rafi, umur kamu 18 tahun.
\`\`\`

⚡ F-string lebih cepat dan mudah dibaca, jadi direkomendasikan di Python 3.6+.
            `
            },
            {
                id: 5,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Operasi String (Part 2)

Cobain beberapa latihan biar makin paham gimana cara ngolah teks di Python:
1. Ubah teks "belajar python itu asik" jadi huruf besar semua.
2. Ganti semua kata "python" jadi "JavaScript".
3. Pecah kalimat "apel jeruk mangga" jadi list kata.
4. Gabung list \`["aku", "suka", "python"]\` jadi satu string, pisahkan dengan spasi.
5. Gunakan f-string buat bikin kalimat: "Halo [nama], kamu suka [bahasa] ya?"
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Ubah ke Huruf Besar",
                        hint: "Gunakan .upper()",
                        solution: `teks = "belajar python itu asik"
print(teks.upper())`
                    },
                    {
                        id: 2,
                        title: "Ganti Kata",
                        hint: "Gunakan .replace()",
                        solution: `kalimat = "python itu asik"
kalimat = kalimat.replace("python", "JavaScript")
print(kalimat)`
                    },
                    {
                        id: 3,
                        title: "Pecah Kalimat",
                        hint: "Gunakan .split()",
                        solution: `buah = "apel jeruk mangga".split()
print(buah)`
                    },
                    {
                        id: 4,
                        title: "Gabung List",
                        hint: "Gunakan .join()",
                        solution: `kata = ["aku", "suka", "python"]
hasil = " ".join(kata)
print(hasil)`
                    },
                    {
                        id: 5,
                        title: "Gunakan f-string",
                        hint: "Pakai f\"...{variabel}...\"",
                        solution: `nama = "Zayen"
bahasa = "Python"
print(f"Halo {nama}, kamu suka {bahasa} ya?")`
                    }
                ]
            }
        ]
    },
    {
        id: 18,
        title: "Format String di Python",
        description: "Belajar gimana cara menampilkan teks dengan variabel di dalamnya menggunakan teknik format string — biar output jadi lebih rapi dan dinamis.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 4,
        progress: 0,
        image: "🧩",
        topics: [
            "Apa itu Format String?",
            "Cara Lama vs Cara Baru",
            "f-string: Cara Modern Python",
            "Latihan Praktik"
        ],
        color: "#6C63FF",
        content: [
            {
                id: 1,
                title: "Apa itu Format String?",
                type: "theory",
                content: `
# Apa itu Format String?

Kadang kita pengen **nampilin teks yang di dalamnya ada variabel**.  
Contoh simpel:

\`\`\`python
nama = "Zayen"
umur = 19
print("Halo, nama saya", nama, "dan umur saya", umur, "tahun.")
\`\`\`

Itu bisa jalan, tapi... keliatan **berantakan dan ribet**, apalagi kalo banyak variabel.  
Nah, biar lebih rapi dan fleksibel, Python punya fitur yang namanya **format string**.
            `
            },
            {
                id: 2,
                title: "Cara Lama: Metode format()",
                type: "theory",
                content: `
# Format String Cara Lama

Dulu (versi Python 2 & awal Python 3), cara format string kayak gini:

\`\`\`python
nama = "Zayen"
umur = 19
teks = "Halo, nama saya {} dan umur saya {} tahun.".format(nama, umur)
print(teks)
\`\`\`

Output:
\`\`\`
Halo, nama saya Zayen dan umur saya 19 tahun.
\`\`\`

Kita juga bisa kasih urutan manual:
\`\`\`python
teks = "Nama: {0}, Umur: {1}".format("Zayen", 19)
print(teks)
\`\`\`

Atau bahkan pakai nama variabel:
\`\`\`python
teks = "Nama: {nama}, Umur: {umur}".format(nama="Zayen", umur=19)
print(teks)
\`\`\`

Tapi seiring waktu, muncul cara yang **lebih simple dan modern** 👇
            `
            },
            {
                id: 3,
                title: "Cara Modern: f-string (Python 3.6+)",
                type: "theory",
                content: `
# f-string (Format String Modern)

Mulai dari Python 3.6, muncul fitur baru: **f-string** (format string literal).  
Ini cara paling gampang dan paling sering dipakai sekarang.

Contoh:
\`\`\`python
nama = "Zayen"
umur = 19
print(f"Halo, nama saya {nama} dan umur saya {umur} tahun.")
\`\`\`

Output:
\`\`\`
Halo, nama saya Zayen dan umur saya 19 tahun.
\`\`\`

Keren kan?  
Kita cukup tulis **f"..."** di depan string, lalu masukin variabel langsung pakai kurung kurawal **{}**.

---

Kita juga bisa masukin ekspresi di dalamnya:
\`\`\`python
a = 5
b = 3
print(f"Hasil dari {a} + {b} = {a + b}")
\`\`\`

Output:
\`\`\`
Hasil dari 5 + 3 = 8
\`\`\`

---

Dan bisa atur **format angka** juga:
\`\`\`python
nilai = 90.6789
print(f"Nilai ujian: {nilai:.2f}")  # tampilkan 2 angka di belakang koma
\`\`\`

Output:
\`\`\`
Nilai ujian: 90.68
\`\`\`

f-string = clean, cepat, dan modern ✨
            `,
                codeExample: `nama = "Zayen"
umur = 19
tinggi = 172.5

print(f"Halo, nama saya {nama}. Umur saya {umur} tahun.")
print(f"Tinggi saya {tinggi} cm.")
print(f"Dalam 5 tahun, umur saya akan jadi {umur + 5} tahun.")`,
                expectedOutput: `Halo, nama saya Zayen. Umur saya 19 tahun.
Tinggi saya 172.5 cm.
Dalam 5 tahun, umur saya akan jadi 24 tahun.`
            },
            {
                id: 4,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Format String

Coba latihan berikut biar makin jago:

1. Buat variabel \`nama\`, \`umur\`, dan \`kota\`.  
   Tampilkan kalimat pakai **f-string**:  
   "Halo, saya [nama], umur [umur] tahun, dan saya tinggal di [kota]."

2. Buat dua variabel angka (\`a\` dan \`b\`), lalu tampilkan hasil penjumlahan dan perkaliannya dengan f-string.

3. Format nilai desimal agar hanya tampil **2 angka di belakang koma**.

4. Bonus: Buat program kecil yang minta input dari user (nama dan umur), lalu tampilkan kalimat dengan f-string.
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Perkenalan Diri",
                        description: "Buat teks perkenalan dengan f-string.",
                        hint: "Gunakan f\"...\" dan {} untuk variabel.",
                        solution: `nama = "Zayen"
umur = 19
kota = "Bandung"
print(f"Halo, saya {nama}, umur {umur} tahun, dan saya tinggal di {kota}.")`
                    },
                    {
                        id: 2,
                        title: "Operasi Angka",
                        description: "Tampilkan hasil a + b dan a * b pakai f-string.",
                        hint: "Ekspresi bisa langsung ditulis di dalam {}.",
                        solution: `a = 7
b = 3
print(f"Hasil dari {a} + {b} = {a + b}")
print(f"Hasil dari {a} × {b} = {a * b}")`
                    },
                    {
                        id: 3,
                        title: "Format Desimal",
                        description: "Batasi 2 angka di belakang koma pakai format .2f.",
                        hint: "Gunakan {variabel:.2f}.",
                        solution: `nilai = 89.5678
print(f"Nilai kamu: {nilai:.2f}")  # 89.57`
                    },
                    {
                        id: 4,
                        title: "Input Dinamis",
                        description: "Minta input dari user lalu tampilkan hasil pakai f-string.",
                        hint: "Gunakan input() dan f\"...\".",
                        solution: `nama = input("Masukkan nama: ")
umur = input("Masukkan umur: ")
print(f"Halo {nama}, umur kamu {umur} tahun!")`
                    }
                ]
            }
        ]
    },
    {
        id: 19,
        title: "String Width dan Alignment di Python",
        description: "Belajar cara ngatur lebar teks (width) dan posisi teks (alignment) di output Python biar rapi dan profesional.",
        level: "Menengah",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "📏",
        topics: [
            "Konsep Lebar (Width) String",
            "Alignment: Rata Kiri, Kanan, dan Tengah",
            "Latihan Formatting String"
        ],
        color: "#4B8F8C",
        content: [
            {
                id: 1,
                title: "Konsep Lebar (Width) String",
                type: "theory",
                content: `
# Lebar (Width) String

Kadang kita pengin output teks keliatan **rapi**, sejajar, atau punya **panjang tertentu**.  
Contohnya pas bikin tabel, laporan, atau tampilan CLI.

Python bisa ngatur **lebar teks (width)** pakai format string.

Contoh dasar:
\`\`\`python
nama = "Zayen"
print(f"Nama: {nama:10}")  # kasih lebar 10 karakter
\`\`\`

Output:
\`\`\`
Nama: Zayen     
\`\`\`

➡️ Artinya, Python bakal nambahin **spasi di belakang** biar total panjangnya jadi 10 karakter.

Kalo teksnya lebih pendek dari width, sisanya diisi spasi.  
Kalau teksnya lebih panjang, width-nya otomatis ngikutin teks (ga bakal kepotong).
            `
            },
            {
                id: 2,
                title: "Alignment: Rata Kiri, Kanan, dan Tengah",
                type: "theory",
                content: `
# Alignment (Perataan Teks)

Python bisa ngatur posisi teks di dalam lebar tertentu.

Gunakan format:
\`\`\`python
{variabel:<lebar}   # rata kiri
{variabel:>lebar}   # rata kanan
{variabel:^lebar}   # rata tengah
\`\`\`

Contoh:
\`\`\`python
data1 = "apel"
data2 = "jeruk"
data3 = "mangga"

print(f"|{data1:<10}|")  # rata kiri
print(f"|{data2:>10}|")  # rata kanan
print(f"|{data3:^10}|")  # rata tengah
\`\`\`

Output:
\`\`\`
|apel      |
|     jeruk|
|  mangga  |
\`\`\`

Keterangan:
- **<** → kiri  
- **>** → kanan  
- **^** → tengah  

Kamu juga bisa ganti spasi padding dengan karakter lain, misalnya tanda \`-\` atau \`*\`:
\`\`\`python
print(f"|{data1:-<10}|")  # isi sisa dengan '-'
print(f"|{data2:*>10}|")  # isi sisa dengan '*'
print(f"|{data3:.^10}|")  # isi sisa dengan '.'
\`\`\`

Output:
\`\`\`
|apel------|
|*****jeruk|
|..mangga..|
\`\`\`
            `,
                codeExample: `buah = "nanas"

print(f"|{buah:<10}|  # rata kiri")
print(f"|{buah:>10}|  # rata kanan")
print(f"|{buah:^10}|  # rata tengah")

print(f"|{buah:-<10}|  # padding '-' kiri")
print(f"|{buah:*>10}|  # padding '*' kanan")
print(f"|{buah:.^10}|  # padding '.' tengah")`,
                expectedOutput: `|nanas     |  # rata kiri
|     nanas|  # rata kanan
|  nanas   |  # rata tengah
|nanas-----|  # padding '-'
|*****nanas|  # padding '*'
|..nanas...|  # padding '.'`
            },
            {
                id: 3,
                title: "Latihan Formatting String",
                type: "practice",
                content: `
# Latihan String Width dan Alignment

Coba buat output seperti tabel sederhana di bawah ini:

\`\`\`
| Nama     | Umur | Kota      |
|-----------|------|-----------|
| Zayen     |  20  | Bandung   |
| Alicia    |  19  | Jakarta   |
| Rafi      |  21  | Surabaya  |
\`\`\`

Gunakan f-string dengan alignment biar hasilnya sejajar.  
Hint: Gunakan kombinasi \`<\`, \`>\`, dan \`^\` dengan width yang pas.
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Tabel Sederhana",
                        description: "Buat tabel dengan lebar kolom rata seperti contoh di atas.",
                        hint: "Gunakan f-string dengan format {var:<10}, {var:^6}, {var:<10}.",
                        solution: `print("|{:<10}|{:^6}|{:<10}|".format("Nama", "Umur", "Kota"))
print("|-----------|------|-----------|")
print("|{:<10}|{:^6}|{:<10}|".format("Zayen", "20", "Bandung"))
print("|{:<10}|{:^6}|{:<10}|".format("Alicia", "19", "Jakarta"))
print("|{:<10}|{:^6}|{:<10}|".format("Rafi", "21", "Surabaya"))`
                    },
                    {
                        id: 2,
                        title: "Custom Padding",
                        description: "Tampilkan teks yang rata tengah tapi isi padding-nya pakai tanda '='.",
                        hint: "Gunakan format seperti {var:=^10}.",
                        solution: `kata = "Python"
print(f"|{kata:=^10}|")  # =Python==`
                    }
                ]
            }
        ]
    },
    {
        id: 20,
        title: "Latihan Date and Time",
        description: "Latihan praktis buat memperdalam pemahaman tentang modul datetime: ambil waktu sekarang, hitung selisih tanggal, dan format tanggal sesuai kebutuhan.",
        level: "Menengah",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "⏰",
        topics: [
            "Membuat dan Menampilkan Waktu",
            "Menghitung Selisih Waktu (timedelta)",
            "Latihan Praktik: Kalkulator Umur & Event Reminder"
        ],
        color: "#6A5ACD",
        content: [
            {
                id: 1,
                title: "Membuat dan Menampilkan Waktu",
                type: "theory",
                content: `
# Modul datetime di Python

Python punya modul bawaan namanya **datetime**, yang bisa bantu kita ngatur tanggal dan waktu dengan mudah.

\`\`\`python
from datetime import datetime

# ambil waktu sekarang
waktu_sekarang = datetime.now()
print("Waktu sekarang:", waktu_sekarang)
\`\`\`

Output-nya kira-kira kayak gini:
\`\`\`
Waktu sekarang: 2025-10-05 22:15:30.123456
\`\`\`

### Format tanggal
Kita bisa ubah tampilannya pakai method \`strftime()\`.

\`\`\`python
print(waktu_sekarang.strftime("%d/%m/%Y"))
print(waktu_sekarang.strftime("%H:%M:%S"))
print(waktu_sekarang.strftime("%A, %d %B %Y"))
\`\`\`

Beberapa kode format penting:
- **%d** → Tanggal (01–31)
- **%m** → Bulan (01–12)
- **%Y** → Tahun lengkap
- **%H:%M:%S** → Jam, menit, detik
- **%A** → Nama hari
- **%B** → Nama bulan
            `
            },
            {
                id: 2,
                title: "Menghitung Selisih Waktu (timedelta)",
                type: "theory",
                content: `
# Menghitung Selisih Waktu

Kalau lo mau tau jarak antara dua tanggal, bisa pakai **timedelta**.

\`\`\`python
from datetime import datetime, timedelta

hari_ini = datetime.now()
minggu_depan = hari_ini + timedelta(days=7)

print("Hari ini:", hari_ini.strftime("%d-%m-%Y"))
print("Minggu depan:", minggu_depan.strftime("%d-%m-%Y"))
\`\`\`

Selain itu, lo juga bisa **ngurangin dua tanggal**:
\`\`\`python
tanggal1 = datetime(2025, 10, 5)
tanggal2 = datetime(2025, 12, 25)

selisih = tanggal2 - tanggal1
print("Selisih hari:", selisih.days)
\`\`\`

Output:
\`\`\`
Selisih hari: 81
\`\`\`

Jadi gampang banget buat hitung mundur, umur, atau reminder event.
            `,
                codeExample: `from datetime import datetime, timedelta

hari_ini = datetime.now()
deadline = hari_ini + timedelta(days=14)

print("Hari ini:", hari_ini.strftime("%d/%m/%Y"))
print("Deadline:", deadline.strftime("%d/%m/%Y"))

selisih = deadline - hari_ini
print("Sisa waktu (hari):", selisih.days)`,
                expectedOutput: `Hari ini: 05/10/2025
Deadline: 19/10/2025
Sisa waktu (hari): 14`
            },
            {
                id: 3,
                title: "Latihan Praktik: Kalkulator Umur & Event Reminder",
                type: "practice",
                content: `
# LATIHAN DATE & TIME

Sekarang waktunya lo praktek.  
Kerjain langkah-langkah berikut:

1. **Kalkulator Umur**  
   - Minta user masukin tanggal lahirnya (format: YYYY-MM-DD)  
   - Hitung berapa umur dia hari ini  
   - Tampilkan dalam tahun dan hari

2. **Event Reminder**  
   - Buat program yang bisa ngitung berapa hari lagi ke tanggal tertentu (misal ulang tahun, ujian, atau liburan).  
   - Tampilkan hasilnya dalam format yang rapi.

3. **Format Custom**  
   - Ubah tampilan waktu sekarang jadi seperti ini:  
     "Hari ini: Minggu, 5 Oktober 2025 - Jam: 22:30"

---

Contoh solusi (boleh dijadiin referensi):
\`\`\`python
from datetime import datetime, timedelta

# 1. Kalkulator umur
lahir = input("Masukkan tanggal lahir kamu (YYYY-MM-DD): ")
tanggal_lahir = datetime.strptime(lahir, "%Y-%m-%d")
hari_ini = datetime.now()

umur_hari = (hari_ini - tanggal_lahir).days
umur_tahun = umur_hari // 365

print(f"Umur kamu sekitar {umur_tahun} tahun ({umur_hari} hari).")

# 2. Event reminder
event = datetime(2025, 12, 31)
selisih = event - hari_ini
print(f"Menuju tahun baru tinggal {selisih.days} hari lagi!")

# 3. Format custom
print("Hari ini:", hari_ini.strftime("%A, %d %B %Y - Jam: %H:%M"))
\`\`\`
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Kalkulator Umur",
                        description: "Buat program yang bisa menghitung umur user berdasarkan tanggal lahir.",
                        hint: "Gunakan datetime.now() dan strptime().",
                        solution: `from datetime import datetime

lahir = input("Masukkan tanggal lahir kamu (YYYY-MM-DD): ")
tanggal_lahir = datetime.strptime(lahir, "%Y-%m-%d")
hari_ini = datetime.now()

umur_hari = (hari_ini - tanggal_lahir).days
umur_tahun = umur_hari // 365
print(f"Umur kamu sekitar {umur_tahun} tahun ({umur_hari} hari).")`
                    },
                    {
                        id: 2,
                        title: "Event Reminder",
                        description: "Hitung berapa hari lagi menuju tanggal tertentu (contohnya 25 Desember 2025).",
                        hint: "Kurangi dua datetime object.",
                        solution: `from datetime import datetime

hari_ini = datetime.now()
event = datetime(2025, 12, 25)

selisih = event - hari_ini
print(f"Menuju Natal tinggal {selisih.days} hari lagi!")`
                    },
                    {
                        id: 3,
                        title: "Format Custom",
                        description: "Tampilkan tanggal sekarang dalam format unik: 'Hari ini: Senin, 06 Oktober 2025 - Jam: 21:45'",
                        hint: "Gunakan strftime dengan %A, %d, %B, %Y, dan %H:%M.",
                        solution: `from datetime import datetime

waktu = datetime.now()
print(waktu.strftime("Hari ini: %A, %d %B %Y - Jam: %H:%M"))`
                    }
                ]
            }
        ]
    },
    {
        id: 21,
        title: "IF dan ELSE Statement di Python",
        description: "Belajar gimana Python bisa ngambil keputusan pakai if, else, dan elif biar program bisa mikir kayak manusia.",
        level: "Pemula",
        duration: "1 jam 30 menit",
        lessons: 4,
        progress: 0,
        image: "🧠",
        topics: [
            "Konsep Percabangan",
            "IF Statement",
            "ELSE dan ELIF Statement",
            "Latihan Kondisi"
        ],
        color: "#4F46E5",
        content: [
            {
                id: 1,
                title: "Konsep Percabangan",
                type: "theory",
                content: `
# Apa Itu Percabangan?

Percabangan atau *conditional statement* dipakai buat **ngambil keputusan di program**.

Bayangin lo bikin program kasir:
- Kalau total belanja lebih dari 100 ribu → dapet diskon.
- Kalau kurang → bayar full.

Nah, logika kayak gini dibuat pakai **IF dan ELSE** di Python.

Contoh simpel:
\`\`\`python
uang = 120000

if uang > 100000:
    print("Kamu dapet diskon!")
else:
    print("Belum dapet diskon :(")
\`\`\`

Output:
\`\`\`
Kamu dapet diskon!
\`\`\`

Python ngecek kondisi di dalam **if**, kalo hasilnya **True**, baris di bawahnya dijalankan.
Kalau **False**, lompat ke bagian **else**.
            `
            },
            {
                id: 2,
                title: "IF Statement",
                type: "theory",
                content: `
# IF Statement

Kita mulai dari bentuk paling dasar.

\`\`\`python
if kondisi:
    # kode yang dijalankan kalau kondisi True
\`\`\`

Contoh:
\`\`\`python
nilai = 85

if nilai >= 75:
    print("Lulus!")
\`\`\`

Output:
\`\`\`
Lulus!
\`\`\`

Penjelasan:
- Python bakal cek \`nilai >= 75\`
- Kalau benar (True), print "Lulus!"
- Kalau salah, ya ga ngapa-ngapain.

> Catatan: perhatikan **indentasi (spasi 4)** setelah if, itu penting banget di Python!
            `
            },
            {
                id: 3,
                title: "ELSE dan ELIF Statement",
                type: "theory",
                content: `
# ELSE & ELIF Statement

Kalau lo mau program jalanin aksi lain saat kondisi **False**, pake **else**.

\`\`\`python
umur = 16

if umur >= 18:
    print("Kamu sudah dewasa.")
else:
    print("Masih di bawah umur.")
\`\`\`

Output:
\`\`\`
Masih di bawah umur.
\`\`\`

Kalau mau nambah kondisi lain di tengah-tengah, pakai **elif** (else if).

\`\`\python
nilai = 70

if nilai >= 90:
    print("Nilai kamu A")
elif nilai >= 80:
    print("Nilai kamu B")
elif nilai >= 70:
    print("Nilai kamu C")
else:
    print("Nilai kamu D")
\`\`\`

Output:
\`\`\`
Nilai kamu C
\`\`\`

> Urutan if → elif → else dicek dari atas ke bawah. Begitu satu kondisi True, sisanya dilewatin.
            `,
                codeExample: `nilai = 70

if nilai >= 90:
    print("Nilai kamu A")
elif nilai >= 80:
    print("Nilai kamu B")
elif nilai >= 70:
    print("Nilai kamu C")
else:
    print("Nilai kamu D")`,
                expectedOutput: `Nilai kamu C`
            },
            {
                id: 4,
                title: "Latihan Kondisi",
                type: "practice",
                content: `
# Latihan IF dan ELSE

Coba kerjain soal di bawah ini biar makin ngerti:

1. Buat program yang ngecek apakah angka genap atau ganjil.
2. Cek apakah umur >= 18 (boleh buat KTP atau belum).
3. Buat program nilai ujian: A (>=90), B (>=80), C (>=70), D (>=60), E (di bawah 60).
4. Bonus: simulasi kasir — kalau total belanja >= 100 ribu, kasih diskon 10%.
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Genap atau Ganjil",
                        description: "Buat program yang bisa cek apakah angka genap atau ganjil.",
                        hint: "Gunakan operator modulus (%).",
                        solution: `angka = 7

if angka % 2 == 0:
    print("Genap")
else:
    print("Ganjil")`
                    },
                    {
                        id: 2,
                        title: "Cek Umur",
                        description: "Kalau umur >= 18, tulis 'Boleh buat KTP'. Kalau tidak, tulis 'Belum cukup umur'.",
                        hint: "Gunakan if dan else.",
                        solution: `umur = 17

if umur >= 18:
    print("Boleh buat KTP")
else:
    print("Belum cukup umur")`
                    },
                    {
                        id: 3,
                        title: "Nilai Ujian",
                        description: "Gunakan if-elif-else untuk menentukan nilai huruf dari angka.",
                        hint: "Urutkan dari kondisi tertinggi ke terendah.",
                        solution: `nilai = 82

if nilai >= 90:
    print("A")
elif nilai >= 80:
    print("B")
elif nilai >= 70:
    print("C")
elif nilai >= 60:
    print("D")
else:
    print("E")`
                    },
                    {
                        id: 4,
                        title: "Diskon Kasir",
                        description: "Kalau total belanja >= 100000, kasih diskon 10%. Tampilkan total bayar akhir.",
                        hint: "Gunakan if-else dan sedikit operasi aritmatika.",
                        solution: `total = 120000

if total >= 100000:
    total *= 0.9  # diskon 10%
    print("Kamu dapet diskon!")
else:
    print("Belum dapet diskon.")
    
print("Total bayar:", total)`
                    }
                ]
            }
        ]
    },
    {
        id: 22,
        title: "ELIF Statement di Python",
        description: "Pelajari cara menangani lebih dari dua kondisi dengan elif (else if) agar program bisa mengambil keputusan yang lebih kompleks.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "🪜",
        topics: [
            "Kapan Harus Pakai ELIF",
            "Cara Kerja ELIF",
            "Latihan ELIF Statement"
        ],
        color: "#3B82F6",
        content: [
            {
                id: 1,
                title: "Kapan Harus Pakai ELIF",
                type: "theory",
                content: `
# Kapan Harus Pakai ELIF?

Kadang kita perlu **lebih dari dua pilihan** dalam keputusan.

Kalau cuma pakai \`if\` dan \`else\`, pilihannya cuma dua: benar atau salah.  
Tapi gimana kalau ada **beberapa kondisi berbeda** yang bisa terjadi?

Contohnya: penilaian ujian.
- Kalau nilai >= 90 → A
- Kalau nilai >= 80 → B
- Kalau nilai >= 70 → C
- Selain itu → D

Nah, di sinilah **elif** (kepanjangan dari *else if*) dipakai.

Struktur dasarnya:
\`\`\`python
if kondisi1:
    # aksi kalau kondisi1 benar
elif kondisi2:
    # aksi kalau kondisi2 benar
else:
    # aksi kalau semua kondisi salah
\`\`\`
            `
            },
            {
                id: 2,
                title: "Cara Kerja ELIF",
                type: "theory",
                content: `
# Cara Kerja ELIF di Python

Python bakal **ngecek kondisi dari atas ke bawah**.
Begitu nemu kondisi yang hasilnya True, dia langsung jalanin bagian itu dan **skip** sisanya.

Contoh:
\`\`\`python
nilai = 85

if nilai >= 90:
    print("Nilai kamu A")
elif nilai >= 80:
    print("Nilai kamu B")
elif nilai >= 70:
    print("Nilai kamu C")
else:
    print("Nilai kamu D")
\`\`\`

Output:
\`\`\`
Nilai kamu B
\`\`\`

Penjelasan:
- \`nilai >= 90\` → False  
- \`nilai >= 80\` → True → jadi Python langsung print "Nilai kamu B"
- Bagian bawahnya gak dicek lagi.

> Catatan: lo bisa pakai **sebanyak mungkin elif**, tapi jangan lupa cuma satu *else* di paling bawah.
            `,
                codeExample: `hari = "Rabu"

if hari == "Senin":
    print("Semangat kerja, awal minggu nih!")
elif hari == "Rabu":
    print("Udah tengah minggu, gas terus!")
elif hari == "Jumat":
    print("Hampir weekend, sabar dikit lagi!")
else:
    print("Selamat beristirahat!")`,
                expectedOutput: `Udah tengah minggu, gas terus!`
            },
            {
                id: 3,
                title: "Latihan ELIF Statement",
                type: "practice",
                content: `
# Latihan ELIF Statement

Coba bikin beberapa program di bawah ini untuk menguji pemahaman kamu:

1. Program pengecekan suhu:
   - Suhu > 30 → "Panas banget!"
   - Suhu antara 20–30 → "Cukup hangat."
   - Suhu < 20 → "Dingin, butuh jaket!"
   
2. Program penilaian:
   - >= 90 → A
   - >= 80 → B
   - >= 70 → C
   - >= 60 → D
   - Lainnya → E

3. Program harga tiket bioskop:
   - Umur < 5 → Gratis
   - 5–12 → 30.000
   - 13–17 → 40.000
   - 18+ → 50.000
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Cek Suhu",
                        description: "Tentukan reaksi berdasarkan suhu yang dimasukkan.",
                        hint: "Gunakan urutan if → elif → else.",
                        solution: `suhu = 25

if suhu > 30:
    print("Panas banget!")
elif suhu >= 20:
    print("Cukup hangat.")
else:
    print("Dingin, butuh jaket!")`
                    },
                    {
                        id: 2,
                        title: "Nilai Huruf",
                        description: "Konversi nilai angka ke huruf dengan if, elif, else.",
                        hint: "Urutkan kondisi dari nilai tertinggi ke terendah.",
                        solution: `nilai = 73

if nilai >= 90:
    print("A")
elif nilai >= 80:
    print("B")
elif nilai >= 70:
    print("C")
elif nilai >= 60:
    print("D")
else:
    print("E")`
                    },
                    {
                        id: 3,
                        title: "Harga Tiket Bioskop",
                        description: "Tentukan harga tiket berdasarkan umur pengunjung.",
                        hint: "Gunakan elif untuk membatasi rentang umur.",
                        solution: `umur = 14

if umur < 5:
    print("Gratis")
elif umur <= 12:
    print("Harga tiket: 30000")
elif umur <= 17:
    print("Harga tiket: 40000")
else:
    print("Harga tiket: 50000")`
                    }
                ]
            }
        ]
    },
    {
        id: 23,
        title: "Latihan Percabangan – Kalkulator Sederhana",
        description: "Praktik nyata pakai percabangan IF-ELSE buat bikin kalkulator sederhana dengan operasi dasar: tambah, kurang, kali, dan bagi.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 2,
        progress: 0,
        image: "🧮",
        topics: [
            "Konsep Program Kalkulator",
            "Latihan Buat Sendiri"
        ],
        color: "#E879F9",
        content: [
            {
                id: 1,
                title: "Konsep Program Kalkulator",
                type: "theory",
                content: `
# Kalkulator Sederhana dengan Percabangan

Di bab ini, kita bakal bikin **program kalkulator** yang bisa ngerjain operasi:
- Penjumlahan (+)
- Pengurangan (-)
- Perkalian (*)
- Pembagian (/)

Tapi yang seru, semua itu diatur pakai **percabangan IF-ELSE**.  
Jadi, program bakal ngecek simbol operator dari input user, terus nentuin operasi yang harus dijalankan.

Contoh alur program:

1. User masukin angka pertama  
2. Masukin operator (misal '+', '-', '*', '/')  
3. Masukin angka kedua  
4. Program cek operator dan hitung hasilnya

Kita mulai dari versi paling dasar:
\`\`\`python
print("=== Kalkulator Sederhana ===")

angka1 = float(input("Masukkan angka pertama: "))
operator = input("Masukkan operator (+, -, *, /): ")
angka2 = float(input("Masukkan angka kedua: "))

if operator == '+':
    hasil = angka1 + angka2
    print("Hasil:", hasil)
elif operator == '-':
    hasil = angka1 - angka2
    print("Hasil:", hasil)
elif operator == '*':
    hasil = angka1 * angka2
    print("Hasil:", hasil)
elif operator == '/':
    hasil = angka1 / angka2
    print("Hasil:", hasil)
else:
    print("Operator tidak dikenali!")
\`\`\`

Output (contoh):
\`\`\`
=== Kalkulator Sederhana ===
Masukkan angka pertama: 5
Masukkan operator (+, -, *, /): *
Masukkan angka kedua: 4
Hasil: 20.0
\`\`\`

🧠 *Penjelasan singkat:*
- Kita pakai **percabangan if-elif-else** buat milih operasi.
- Kalau operatornya ga sesuai (\\\`+ - * /\\\`), program bakal munculin pesan error.
- \\\`float()\\\` dipakai biar bisa input angka desimal juga.

✨ Tips:
Lo bisa tambahin validasi, misalnya biar ga bisa bagi nol, nanti di bagian latihan kita tambahin!
            `
            },
            {
                id: 2,
                title: "Latihan Buat Sendiri",
                type: "practice",
                content: `
# Tantangan Wajib 💪

Sekarang saatnya lo ngebangun versi lo sendiri dari kalkulator ini.

## Soal Latihan

1. Buat program kalkulator yang:
   - Minta input angka pertama, operator, dan angka kedua.
   - Jalankan operasi sesuai operator yang dimasukkan.
   - Kalau operator salah, tampilkan "Operator tidak valid!"

2. Tambahkan **pengecekan khusus untuk pembagian**:
   - Kalau angka kedua = 0, tampilkan "Tidak bisa dibagi dengan nol!"

3. Tambahkan fitur bonus:
   - Setelah hasil ditampilkan, munculkan teks:
     \\\`print("Terima kasih sudah menggunakan kalkulator!")\\\`

---

🧩 **Contoh Hasil Akhir (Output):**
\`\`\`
=== Kalkulator Sederhana ===
Masukkan angka pertama: 10
Masukkan operator (+, -, *, /): /
Masukkan angka kedua: 0
Tidak bisa dibagi dengan nol!
\`\`\`

atau

\`\`\`
=== Kalkulator Sederhana ===
Masukkan angka pertama: 10
Masukkan operator (+, -, *, /): +
Masukkan angka kedua: 5
Hasil: 15.0
Terima kasih sudah menggunakan kalkulator!
\`\`\`

---

💡 **Solusi Contoh:**
\`\`\`python
print("=== Kalkulator Sederhana ===")

angka1 = float(input("Masukkan angka pertama: "))
operator = input("Masukkan operator (+, -, *, /): ")
angka2 = float(input("Masukkan angka kedua: "))

if operator == '+':
    hasil = angka1 + angka2
    print("Hasil:", hasil)
elif operator == '-':
    hasil = angka1 - angka2
    print("Hasil:", hasil)
elif operator == '*':
    hasil = angka1 * angka2
    print("Hasil:", hasil)
elif operator == '/':
    if angka2 == 0:
        print("Tidak bisa dibagi dengan nol!")
    else:
        hasil = angka1 / angka2
        print("Hasil:", hasil)
else:
    print("Operator tidak valid!")

print("Terima kasih sudah menggunakan kalkulator!")
\`\`\`

---

🎯 **Tujuan Latihan:**
- Melatih logika berpikir pakai \\\`if-elif-else\\\`
- Ngatur alur keputusan program
- Mulai bikin program interaktif yang beneran bisa dipakai user
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Bikin Kalkulator Dasar",
                        description: "Gunakan input dan percabangan untuk membuat kalkulator dengan +, -, *, /",
                        hint: "Gunakan if-elif-else dan float() untuk input angka.",
                        solution: `print("=== Kalkulator Sederhana ===")

angka1 = float(input("Masukkan angka pertama: "))
operator = input("Masukkan operator (+, -, *, /): ")
angka2 = float(input("Masukkan angka kedua: "))

if operator == '+':
    print("Hasil:", angka1 + angka2)
elif operator == '-':
    print("Hasil:", angka1 - angka2)
elif operator == '*':
    print("Hasil:", angka1 * angka2)
elif operator == '/':
    if angka2 == 0:
        print("Tidak bisa dibagi dengan nol!")
    else:
        print("Hasil:", angka1 / angka2)
else:
    print("Operator tidak valid!")

print("Terima kasih sudah menggunakan kalkulator!")`
                    }
                ]
            }
        ]
    },
    {
        id: 24,
        title: "For Loop (Perulangan) di Python",
        description: "Belajar gimana Python bisa ngulang kode berkali-kali dengan mudah pakai perulangan for. Cocok buat iterasi list, string, atau range angka.",
        level: "Pemula",
        duration: "1 jam 30 menit",
        lessons: 4,
        progress: 0,
        image: "🔁",
        topics: [
            "Konsep Perulangan",
            "For Loop Dasar",
            "Loop dengan Range dan Data Koleksi",
            "Latihan Perulangan"
        ],
        color: "#EAB308",
        content: [
            {
                id: 1,
                title: "Konsep Perulangan",
                type: "theory",
                content: `
# Apa Itu Perulangan?

Perulangan (loop) dipakai buat **menjalankan blok kode secara berulang**.  
Bayangin lo mau print angka 1 sampai 10 — kalo nulis manual satu-satu, capek dong.  
Nah, Python bisa lakuin itu otomatis pakai **loop**.

Python punya 2 jenis loop utama:
1. **for loop** → buat ngulang item dalam urutan (list, string, range, dll)
2. **while loop** → ngulang selama kondisi masih True

Di bab ini, kita fokus dulu ke **for loop**.
            `
            },
            {
                id: 2,
                title: "For Loop Dasar",
                type: "theory",
                content: `
# Struktur For Loop

Sintaks dasar:

\`\`\`python
for variabel in iterable:
    # kode yang diulang
\`\`\`

> *iterable* artinya data yang bisa diulang — kayak list, string, atau range angka.

Contoh 1:
\`\`\`python
for i in range(5):
    print("Halo", i)
\`\`\`

Output:
\`\`\`
Halo 0
Halo 1
Halo 2
Halo 3
Halo 4
\`\`\`

Python bakal ngulang dari 0 sampai 4 (ingat: range berhenti sebelum angka terakhir).

Contoh 2: loop di list
\`\`\`python
buah = ["apel", "mangga", "jeruk"]

for item in buah:
    print("Saya suka", item)
\`\`\`

Output:
\`\`\`
Saya suka apel
Saya suka mangga
Saya suka jeruk
\`\`\`
            `
            },
            {
                id: 3,
                title: "Loop dengan Range dan Data Koleksi",
                type: "theory",
                content: `
# Fungsi Range() dan Loop Koleksi

## 1️⃣ Range()
\`range(start, stop, step)\` → buat bikin urutan angka otomatis.

Contoh:
\`\`\`python
for i in range(1, 6):
    print(i)
\`\`\`

Output:
\`\`\`
1
2
3
4
5
\`\`\`

Kalau mau loncat-loncat (step):
\`\`\`python
for i in range(0, 10, 2):
    print(i)
\`\`\`
Output:
\`\`\`
0
2
4
6
8
\`\`\`

## 2️⃣ Loop di String
String juga bisa di-loop karena terdiri dari karakter.

\`\`\`python
for huruf in "Python":
    print(huruf)
\`\`\`

Output:
\`\`\`
P
y
t
h
o
n
\`\`\`

## 3️⃣ Loop di List / Array
\`\`\`python
angka = [10, 20, 30, 40]

for a in angka:
    print("Nilai:", a)
\`\`\`

Output:
\`\`\`
Nilai: 10
Nilai: 20
Nilai: 30
Nilai: 40
\`\`\`

## 4️⃣ Loop dengan Indeks (pakai enumerate)
\`\`\`python
buah = ["apel", "pisang", "ceri"]

for index, nama in enumerate(buah):
    print(index, "-", nama)
\`\`\`

Output:
\`\`\`
0 - apel
1 - pisang
2 - ceri
\`\`\`

> enumerate() berguna banget kalo lo mau tau *posisi data* dalam list.
            `,
                codeExample: `buah = ["apel", "pisang", "ceri"]

for index, nama in enumerate(buah):
    print(index, "-", nama)`,
                expectedOutput: `0 - apel
1 - pisang
2 - ceri`
            },
            {
                id: 4,
                title: "Latihan Perulangan",
                type: "practice",
                content: `
# Latihan For Loop

Coba latihan ini biar makin jago:
1. Tampilkan angka dari 1–5 pakai for loop.
2. Tampilkan setiap huruf dari kata "Python".
3. Tampilkan isi list \`hewan = ["kucing", "anjing", "kelinci"]\` dengan urutan dan nomor.
4. Hitung total dari list angka [2, 4, 6, 8, 10].
5. Bonus: buat pola bintang bertingkat segitiga.
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Angka 1–5",
                        description: "Gunakan range untuk menampilkan angka 1 sampai 5.",
                        hint: "Ingat, range berhenti sebelum angka terakhir.",
                        solution: `for i in range(1, 6):
    print(i)`
                    },
                    {
                        id: 2,
                        title: "Huruf Python",
                        description: "Tampilkan tiap huruf dari kata 'Python'.",
                        hint: "String bisa di-loop juga.",
                        solution: `for huruf in "Python":
    print(huruf)`
                    },
                    {
                        id: 3,
                        title: "List Hewan",
                        description: "Tampilkan daftar hewan dengan nomor urutnya.",
                        hint: "Gunakan enumerate().",
                        solution: `hewan = ["kucing", "anjing", "kelinci"]

for i, nama in enumerate(hewan, start=1):
    print(i, "-", nama)`
                    },
                    {
                        id: 4,
                        title: "Jumlah Total",
                        description: "Hitung total semua angka di list.",
                        hint: "Gunakan for dan variabel penjumlahan.",
                        solution: `angka = [2, 4, 6, 8, 10]
total = 0

for i in angka:
    total += i

print("Total:", total)`
                    },
                    {
                        id: 5,
                        title: "Pola Bintang Segitiga",
                        description: "Gunakan loop untuk membentuk segitiga bintang seperti ini:\n*\n**\n***\n****\n*****",
                        hint: "Gunakan string '*' * i di dalam loop range.",
                        solution: `for i in range(1, 6):
    print('*' * i)`
                    }
                ]
            }
        ]
    },
    {
        id: 25,
        title: "While Loop (Perulangan)",
        description: "Pelajari cara membuat perulangan di Python dengan while loop — biar program bisa jalan terus sampai kondisi tertentu terpenuhi.",
        level: "Menengah",
        duration: "2 jam",
        lessons: 5,
        progress: 0,
        image: "🔁",
        topics: [
            "Konsep While Loop",
            "Contoh While Loop Dasar",
            "Infinite Loop (Perulangan Tak Berhenti)",
            "Break & Continue",
            "Latihan Praktik While Loop"
        ],
        color: "#F59E0B",
        content: [
            {
                id: 1,
                title: "Konsep While Loop",
                type: "theory",
                content: `
# Apa Itu While Loop?

While loop digunakan buat **mengulang blok kode selama kondisi bernilai True**.  
Kalau kondisi jadi False, perulangan langsung berhenti.

Strukturnya kayak gini:

\`\`\`python
while kondisi:
    # kode yang diulang
\`\`\`

Selama \`kondisi\` itu True, Python bakal terus ngulangin isi loop-nya.
Begitu False, langsung stop.

---

### Analogi gampang:
Bayangin lo lagi main game, dan lo bakal terus main **selama nyawanya > 0**.
Begitu nyawa habis, loop selesai. 🎮💀
                `
            },
            {
                id: 2,
                title: "Contoh While Loop Dasar",
                type: "theory",
                content: `
# Contoh While Loop

Contoh simple buat ngulang angka dari 1 sampai 5.

\`\`\`python
i = 1
while i <= 5:
    print("Angka:", i)
    i += 1
\`\`\`

## Penjelasan:
1. \`i = 1\` → nilai awal
2. \`while i <= 5\` → kondisi, loop jalan selama i masih ≤ 5
3. Di dalam loop, \`i\` dicetak dan ditambah 1
4. Begitu i = 6, kondisi False → loop berhenti

Output:
\`\`\`
Angka: 1
Angka: 2
Angka: 3
Angka: 4
Angka: 5
\`\`\`
                `,
                codeExample: `i = 1
while i <= 5:
    print("Angka:", i)
    i += 1`,
                expectedOutput: `Angka: 1
Angka: 2
Angka: 3
Angka: 4
Angka: 5`
            },
            {
                id: 3,
                title: "Infinite Loop (Perulangan Tak Berhenti)",
                type: "theory",
                content: `
# Infinite Loop

Kalau kondisi **selalu True**, loop gak bakal pernah berhenti — alias *infinite loop*.

\`\`\`python
while True:
    print("Loop jalan terus...")
\`\`\`

Hati-hati, ini bakal jalan **tanpa henti** kecuali lo hentikan manual (misal dengan Ctrl + C di terminal).

---

### Gunanya apa?
Kadang infinite loop berguna buat program yang **harus jalan terus**, misalnya:
- Aplikasi server
- Program chatbot
- Game loop
                `,
                codeExample: `while True:
    print("Loop jalan terus...")`,
                expectedOutput: `Loop jalan terus...
Loop jalan terus...
Loop jalan terus...
... (dan seterusnya)`
            },
            {
                id: 4,
                title: "Break & Continue",
                type: "theory",
                content: `
# Mengontrol Jalannya Loop

Kadang kita perlu *ngatur sendiri* kapan loop berhenti atau lanjut ke iterasi berikutnya.

## 1️⃣ break → langsung keluar dari loop
\`\`\`python
i = 1
while i <= 10:
    print(i)
    if i == 5:
        break
    i += 1
\`\`\`
Output:
\`\`\`
1
2
3
4
5
\`\`\`

Begitu i = 5, Python ketemu \`break\`, dan loop langsung berhenti.

---

## 2️⃣ continue → lompat ke iterasi berikutnya
\`\`\`python
i = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    print(i)
\`\`\`

Output:
\`\`\`
1
2
4
5
\`\`\`

Pas i = 3, baris \`print(i)\` dilewatin karena ada \`continue\`.
                `,
                codeExample: `i = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    print(i)`,
                expectedOutput: `1
2
4
5`
            },
            {
                id: 5,
                title: "Latihan Praktik While Loop",
                type: "practice",
                content: `
# Latihan While Loop

Coba kerjain latihan ini biar makin ngerti konsep while loop dan logika kontrolnya:
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Hitung Mundur",
                        description: "Tampilkan hitung mundur dari 5 ke 1, lalu cetak 'Boom!' di akhir.",
                        hint: "Gunakan while dan kurangi nilai tiap iterasi.",
                        solution: `i = 5
while i > 0:
    print(i)
    i -= 1
print("Boom!")`
                    },
                    {
                        id: 2,
                        title: "Jumlahkan Angka",
                        description: "Minta input angka terus menerus, berhenti kalau user input 0. Tampilkan totalnya.",
                        hint: "Gunakan while True dan break.",
                        solution: `total = 0
while True:
    angka = int(input("Masukkan angka (0 untuk berhenti): "))
    if angka == 0:
        break
    total += angka
print("Total:", total)`
                    },
                    {
                        id: 3,
                        title: "Cek Password",
                        description: "Buat program yang terus minta user input password sampai benar.",
                        hint: "Gunakan while dan kondisi string.",
                        solution: `password = "python123"
input_user = ""

while input_user != password:
    input_user = input("Masukkan password: ")

print("Akses diterima ✅")`
                    }
                ]
            }
        ]
    },
    {
        id: 26,
        title: "Continue dan Pass",
        description: "Pelajari cara mengontrol jalannya loop menggunakan 'continue' untuk melewati satu iterasi, dan 'pass' untuk blok kosong tanpa error.",
        level: "Menengah",
        duration: "1 jam",
        lessons: 4,
        progress: 0,
        image: "⏭️",
        topics: [
            "Konsep Continue",
            "Contoh Penggunaan Continue",
            "Konsep Pass",
            "Latihan Praktik Continue & Pass"
        ],
        color: "#8B5CF6",
        content: [
            {
                id: 1,
                title: "Konsep Continue",
                type: "theory",
                content: `
# Apa Itu Continue?

\`continue\` digunakan buat **melewati satu iterasi loop** dan langsung lanjut ke iterasi berikutnya.  
Artinya, kode di bawah \`continue\` **tidak akan dijalankan** pada iterasi itu.

Struktur umum:

\`\`\`python
while kondisi:
    # kode sebelum continue
    if syarat:
        continue  # lompat ke iterasi berikutnya
    # kode setelah continue (tidak dijalankan kalau continue terpanggil)
\`\`\`

---

### Analogi gampang:
Lo lagi makan keripik satu-satu.  
Kalau ketemu yang gosong, lo **lewati** dan lanjut ke keripik berikutnya.  
Itu lah \`continue\`. 😆
                `
            },
            {
                id: 2,
                title: "Contoh Penggunaan Continue",
                type: "theory",
                content: `
# Contoh Continue di Loop

Contoh: cetak angka 1 sampai 10, tapi **skip angka 5**.

\`\`\`python
i = 0
while i < 10:
    i += 1
    if i == 5:
        continue  # lompat ke iterasi berikutnya
    print("Angka:", i)
\`\`\`

Output:
\`\`\`
Angka: 1
Angka: 2
Angka: 3
Angka: 4
Angka: 6
Angka: 7
Angka: 8
Angka: 9
Angka: 10
\`\`\`

Lihat? Angka 5 **dilewatin** karena saat i == 5, Python langsung lanjut ke iterasi berikutnya.
                `,
                codeExample: `i = 0
while i < 10:
    i += 1
    if i == 5:
        continue
    print("Angka:", i)`,
                expectedOutput: `Angka: 1
Angka: 2
Angka: 3
Angka: 4
Angka: 6
Angka: 7
Angka: 8
Angka: 9
Angka: 10`
            },
            {
                id: 3,
                title: "Konsep Pass",
                type: "theory",
                content: `
# Apa Itu Pass?

Kadang lo butuh nulis **blok kode kosong** tapi Python gak boleh error.  
Nah, di situ fungsi \`pass\`.

\`pass\` artinya **“lewati aja dulu, nanti isi belakangan”**.  
Python bakal ngeliat baris itu dan lanjut jalan tanpa protes.

---

### Contoh 1: Dalam Loop
\`\`\`python
for i in range(5):
    if i == 3:
        pass  # nanti bakal diisi logika lain
    print("Angka:", i)
\`\`\`

Output:
\`\`\`
Angka: 0
Angka: 1
Angka: 2
Angka: 3
Angka: 4
\`\`\`

### Contoh 2: Dalam Fungsi
\`\`\`python
def coming_soon():
    pass
\`\`\`

Tanpa \`pass\`, Python bakal error karena fungsi kosong dianggap tidak valid.
                `,
                codeExample: `for i in range(5):
    if i == 3:
        pass
    print("Angka:", i)`,
                expectedOutput: `Angka: 0
Angka: 1
Angka: 2
Angka: 3
Angka: 4`
            },
            {
                id: 4,
                title: "Latihan Praktik Continue & Pass",
                type: "practice",
                content: `
# Latihan Continue dan Pass

Yuk uji pemahamanmu. Coba selesaikan latihan-latihan ini:
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Skip Angka Ganjil",
                        description: "Tampilkan hanya angka genap dari 1 sampai 10.",
                        hint: "Gunakan continue untuk lewati angka ganjil.",
                        solution: `for i in range(1, 11):
    if i % 2 != 0:
        continue
    print(i)`
                    },
                    {
                        id: 2,
                        title: "Pass di Fungsi",
                        description: "Buat fungsi dengan nama 'belum_jalan' yang isinya belum diimplementasi, tapi tidak error.",
                        hint: "Gunakan pass di dalam fungsi.",
                        solution: `def belum_jalan():
    pass

print("Program tetap jalan tanpa error!")`
                    },
                    {
                        id: 3,
                        title: "Filter Huruf Vokal",
                        description: "Loop tiap huruf dalam string, tapi skip huruf vokal (a, i, u, e, o).",
                        hint: "Gunakan continue di dalam for loop.",
                        solution: `teks = "python"
for huruf in teks:
    if huruf in "aiueo":
        continue
    print(huruf)`
                    }
                ]
            }
        ]
    },
    {
        id: 27,
        title: "Break",
        description: "Pelajari bagaimana menggunakan perintah break untuk menghentikan loop secara paksa saat kondisi tertentu terpenuhi.",
        level: "Menengah",
        duration: "1.5 jam",
        lessons: 4,
        progress: 0,
        image: "🛑",
        topics: [
            "Konsep Break",
            "Contoh Penggunaan Break",
            "Break dalam While dan For Loop",
            "Latihan Praktik Break"
        ],
        color: "#EF4444",
        content: [
            {
                id: 1,
                title: "Konsep Break",
                type: "theory",
                content: `
# Apa Itu Break?

\`break\` adalah perintah spesial di Python buat **menghentikan perulangan lebih cepat** dari biasanya.

Normalnya, loop jalan terus sampai kondisi selesai.  
Tapi kadang kita pengen **berhenti di tengah jalan**, misalnya kalau udah nemu data yang dicari atau kondisi tertentu.

Nah, di situlah \`break\` jadi hero. 🦸‍♂️

---

### Contoh analogi gampang:
Bayangin lo lagi cari kunci di tumpukan barang.  
Begitu ketemu, lo langsung berhenti — gak lanjut bongkar barang lain.  
Nah, itulah konsep \`break\`.
                `
            },
            {
                id: 2,
                title: "Contoh Penggunaan Break",
                type: "theory",
                content: `
# Contoh Dasar

\`\`\`python
for angka in range(1, 10):
    if angka == 5:
        print("Ketemu 5! Stop!")
        break
    print("Angka:", angka)
\`\`\`

## Penjelasan:
1. Loop jalan dari 1 sampai 9.
2. Pas \`angka == 5\`, Python ketemu \`break\`.
3. Loop langsung berhenti — baris selanjutnya gak dijalanin.

Output:
\`\`\`
Angka: 1
Angka: 2
Angka: 3
Angka: 4
Ketemu 5! Stop!
\`\`\`

---

### Jadi, break itu kayak “exit door” buat loop.
Begitu ketemu, Python langsung keluar dari lingkaran loop itu.
                `,
                codeExample: `for angka in range(1, 10):
    if angka == 5:
        print("Ketemu 5! Stop!")
        break
    print("Angka:", angka)`,
                expectedOutput: `Angka: 1
Angka: 2
Angka: 3
Angka: 4
Ketemu 5! Stop!`
            },
            {
                id: 3,
                title: "Break dalam While dan For Loop",
                type: "theory",
                content: `
# Break Bisa Dipakai di Semua Jenis Loop

Gak cuma di \`for\`, tapi juga bisa di \`while\`.

---

### Contoh While:
\`\`\`python
i = 1
while i <= 10:
    print("Nilai:", i)
    if i == 6:
        print("Berhenti di 6")
        break
    i += 1
\`\`\`

Output:
\`\`\`
Nilai: 1
Nilai: 2
Nilai: 3
Nilai: 4
Nilai: 5
Nilai: 6
Berhenti di 6
\`\`\`

---

### Contoh For:
\`\`\python
buah = ["apel", "jeruk", "pisang", "mangga", "durian"]
for item in buah:
    print("Cek:", item)
    if item == "pisang":
        print("Ketemu pisang, stop loop!")
        break
\`\`\`

Output:
\`\`\`
Cek: apel
Cek: jeruk
Cek: pisang
Ketemu pisang, stop loop!
\`\`\`

---

> 🔍 **Kesimpulan singkat:**
> - \`break\` cuma berhentiin **loop tempat dia berada** (bukan semua loop kalau nested).
> - Kalau ada loop bersarang (loop di dalam loop), \`break\` cuma keluar dari loop yang paling dalam.
                `,
                codeExample: `buah = ["apel", "jeruk", "pisang", "mangga", "durian"]
for item in buah:
    print("Cek:", item)
    if item == "pisang":
        print("Ketemu pisang, stop loop!")
        break`,
                expectedOutput: `Cek: apel
Cek: jeruk
Cek: pisang
Ketemu pisang, stop loop!`
            },
            {
                id: 4,
                title: "Latihan Praktik Break",
                type: "practice",
                content: `
# Latihan Break

Coba beberapa latihan ini biar makin paham gimana break bekerja.
                `,
                exercises: [
                    {
                        id: 1,
                        title: "Cari Angka Tertentu",
                        description: "Loop dari 1 sampai 100, berhenti kalau nemu angka 42.",
                        hint: "Gunakan if dan break di dalam for loop.",
                        solution: `for i in range(1, 101):
    if i == 42:
        print("Ketemu 42! Berhenti di sini.")
        break
    print("Cek angka:", i)`
                    },
                    {
                        id: 2,
                        title: "Login dengan Limit Percobaan",
                        description: "Buat program yang ngasih 3x kesempatan input password. Kalau benar, tampilkan 'Login berhasil'. Kalau gagal 3x, tampilkan 'Akses ditolak'.",
                        hint: "Gunakan while loop dan break kalau password benar.",
                        solution: `password_benar = "python123"
percobaan = 0

while percobaan < 3:
    pw = input("Masukkan password: ")
    if pw == password_benar:
        print("Login berhasil ✅")
        break
    else:
        percobaan += 1
        print("Salah! Percobaan:", percobaan)

if percobaan == 3:
    print("Akses ditolak ❌")`
                    },
                    {
                        id: 3,
                        title: "Cari Nama di Daftar",
                        description: "Program minta user input nama, lalu cari di daftar nama. Berhenti begitu ketemu.",
                        hint: "Gunakan loop dan break begitu nama cocok.",
                        solution: `daftar = ["Zayen", "Andi", "Putri", "Budi", "Rina"]
nama_cari = input("Cari nama: ")

for nama in daftar:
    if nama == nama_cari:
        print(f"{nama_cari} ditemukan ✅")
        break
else:
    print(f"{nama_cari} tidak ada di daftar ❌")`
                    }
                ]
            }
        ]
    }
];

export default lessonCards;