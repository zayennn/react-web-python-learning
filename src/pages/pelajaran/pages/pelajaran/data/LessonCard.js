export const lessonCards = [
    { // 1
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
    { // 2
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
    { // 3
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
    { // 4
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
    { // 5
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
    { // 6
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
    { // 7
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
    { // 8
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
    { // 9
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
    { // 10
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
    { // 11
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
    { // 12
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
    { // 13
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
    { // 14
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
    { // 15
        id: 15,
        title: "Pengenalan String di Python",
        description: "Belajar dasar-dasar string, cara membuat, dan operasi sederhana dengan string di Python.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "📝",
        topics: [
            "Apa itu String?",
            "Cara Membuat String",
            "Latihan Praktik"
        ],
        color: "#4CAF50",
        content: [
            {
                id: 1,
                title: "Apa itu String?",
                type: "theory",
                content: `
# Pengenalan String

**String** adalah tipe data yang digunakan untuk menyimpan teks atau kumpulan karakter. 

Contoh string:
- "Hello World"
- 'Python'
- "123" (ini string, bukan angka!)
- "A"

**Karakteristik String:**
- Diapit oleh tanda kutip (bisa tunggal ' ' atau ganda " ")
- Bersifat **immutable** (tidak bisa diubah setelah dibuat)
- Bisa berisi huruf, angka, simbol, dan spasi

\`\`\`python
nama = "Budi"
alamat = 'Jakarta'
pesan = "Selamat belajar Python!"
\`\`\`
            `
            },
            {
                id: 2,
                title: "Cara Membuat String",
                type: "theory",
                content: `
# Cara Membuat String di Python

## 1. Menggunakan Tanda Kutip Tunggal
\`\`\`python
teks1 = 'Hello World'
teks2 = '123'
\`\`\`

## 2. Menggunakan Tanda Kutip Ganda
\`\`\`python
teks1 = "Hello World"
teks2 = "Python itu menyenangkan"
\`\`\`

## 3. String Multibaris (Triple Quotes)
\`\`\`python
teks_panjang = """Ini adalah string
yang terdiri dari
beberapa baris"""

puisi = '''Mawar itu merah
Melati itu putih
Python itu seru'''
\`\`\`

## 4. Escape Character
\`\`\`python
# \\n untuk baris baru
teks = "Baris pertama\\nBaris kedua"

# \\t untuk tab
teks = "Nama:\\tBudi"

# \\" untuk kutip ganda dalam string
teks = "Dia berkata, \\"Halo!\\""

# \\\\ untuk backslash
teks = "Path: C:\\\\folder\\\\file.txt"
\`\`\`
            `,
                codeExample: `# Contoh berbagai cara membuat string
nama = "Alice"
kota = 'Bandung'
multiline = """String ini
terdiri dari
beberapa baris"""

print("Nama:", nama)
print("Kota:", kota)
print("Multiline:", multiline)

# Escape character
print("Dia berkata: \\"Halo!\\"")
print("Baris 1\\nBaris 2")`,
                expectedOutput: `Nama: Alice
Kota: Bandung
Multiline: String ini
terdiri dari
beberapa baris
Dia berkata: "Halo!"
Baris 1
Baris 2`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Pengenalan String

Coba kerjakan soal berikut:
1. Buat variabel string untuk menyimpan nama lengkap kamu
2. Buat string yang berisi alamat dengan menggunakan escape character \\n untuk baris baru
3. Buat string multibaris untuk membuat puisi pendek
4. Buat string yang mengandung kutip ganda di dalamnya
            `,
                exercises: [
                    {
                        id: 1,
                        title: "String Nama",
                        description: "Buat variabel untuk menyimpan nama lengkap kamu",
                        hint: "Gunakan tanda kutip tunggal atau ganda",
                        solution: `nama = "John Doe"
print(nama)`
                    },
                    {
                        id: 2,
                        title: "String Alamat",
                        description: "Buat string alamat dengan baris baru",
                        hint: "Gunakan \\n untuk baris baru",
                        solution: `alamat = "Jalan Merdeka No. 123\\nJakarta Pusat"
print(alamat)`
                    },
                    {
                        id: 3,
                        title: "String Puisi",
                        description: "Buat puisi pendek dengan string multibaris",
                        hint: "Gunakan triple quotes",
                        solution: `puisi = """Python itu seru
Belajar setiap hari
Hasil memuaskan"""
print(puisi)`
                    },
                    {
                        id: 4,
                        title: "String dengan Kutip",
                        description: "Buat string yang mengandung kutip ganda di dalamnya",
                        hint: "Gunakan escape character \\\"",
                        solution: `kutipan = "Dia berkata: \\"Selamat pagi!\\""
print(kutipan)`
                    }
                ]
            }
        ]
    },

    { // 16
        id: 16,
        title: "Operasi dan Manipulasi String (Part 1)",
        description: "Belajar operasi dasar string seperti concatenation, repetition, indexing, dan slicing.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "🔤",
        topics: [
            "Concatenation dan Repetition",
            "Indexing String",
            "Slicing String"
        ],
        color: "#2196F3",
        content: [
            {
                id: 1,
                title: "Concatenation dan Repetition",
                type: "theory",
                content: `
# Operasi Dasar String

## 1. Concatenation (Penggabungan)
Menggabungkan dua atau lebih string menggunakan operator **+**

\`\`\`python
nama_depan = "John"
nama_belakang = "Doe"
nama_lengkap = nama_depan + " " + nama_belakang
print(nama_lengkap)  # John Doe
\`\`\`

## 2. Repetition (Pengulangan)
Mengulang string sebanyak n kali menggunakan operator *****

\`\`\`python
kata = "Ha"
tertawa = kata * 3
print(tertawa)  # HaHaHa

pembatas = "-" * 20
print(pembatas)  # --------------------
\`\`\`

## 3. String Length (Panjang String)
Menggunakan fungsi **len()** untuk mengetahui panjang string

\`\`\`python
teks = "Python"
print(len(teks))  # 6
\`\`\`
            `
            },
            {
                id: 2,
                title: "Indexing dan Slicing",
                type: "theory",
                content: `
# Indexing dan Slicing String

## 1. Indexing (Akses Karakter)
Setiap karakter dalam string memiliki index (dimulai dari 0)

\`\`\`python
kata = "Python"

print(kata[0])   # P
print(kata[1])   # y
print(kata[5])   # n
print(kata[-1])  # n (index dari belakang)
print(kata[-2])  # o
\`\`\`

## 2. Slicing (Memotong String)
Mengambil sebagian dari string menggunakan [start:end:step]

\`\`\`python
kata = "Python Programming"

print(kata[0:6])    # Python
print(kata[7:])     # Programming
print(kata[:6])     # Python
print(kata[::2])    # Pto rgamn (setiap 2 karakter)
print(kata[::-1])   # gnimmargorP nohtyP (reverse)
\`\`\`

**Format Slicing:**
- [start:end] → dari index start sampai end-1
- [start:] → dari start sampai akhir
- [:end] → dari awal sampai end-1
- [::step] → dari awal sampai akhir dengan loncatan step
            `,
                codeExample: `# Contoh indexing dan slicing
bahasa = "Python Programming"

print("Indexing:")
print("Karakter pertama:", bahasa[0])
print("Karakter terakhir:", bahasa[-1])

print("\\nSlicing:")
print("6 karakter pertama:", bahasa[:6])
print("Dari index 7:", bahasa[7:])
print("Setiap 2 karakter:", bahasa[::2])
print("Reverse:", bahasa[::-1])

# Concatenation dan repetition
salam = "Halo " + "Dunia!"
ulang = "Wow! " * 3
print("\\nConcatenation:", salam)
print("Repetition:", ulang)`,
                expectedOutput: `Indexing:
Karakter pertama: P
Karakter terakhir: g

Slicing:
6 karakter pertama: Python
Dari index 7: Programming
Setiap 2 karakter: Pto rgamn
Reverse: gnimmargorP nohtyP

Concatenation: Halo Dunia!
Repetition: Wow! Wow! Wow!`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Operasi String Part 1

Kerjakan soal berikut:
1. Gabungkan nama depan dan belakang menjadi nama lengkap
2. Buat border dengan mengulang karakter "=" sebanyak 30 kali
3. Ambil 3 karakter pertama dari sebuah string
4. Reverse sebuah string menggunakan slicing
5. Ambil setiap karakter ganjil dari sebuah string
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Gabung Nama",
                        description: "Gabungkan nama depan dan belakang dengan spasi",
                        hint: "Gunakan operator +",
                        solution: `depan = "John"
belakang = "Doe"
lengkap = depan + " " + belakang
print(lengkap)  # John Doe`
                    },
                    {
                        id: 2,
                        title: "Buat Border",
                        description: "Buat garis pembatas dengan karakter = sebanyak 30 kali",
                        hint: "Gunakan operator *",
                        solution: `border = "=" * 30
print(border)  # ==============================`
                    },
                    {
                        id: 3,
                        title: "Ambil Awal",
                        description: "Ambil 3 karakter pertama dari string 'Python'",
                        hint: "Gunakan slicing [0:3]",
                        solution: `kata = "Python"
awal = kata[:3]
print(awal)  # Pyt`
                    },
                    {
                        id: 4,
                        title: "Reverse String",
                        description: "Reverse string 'Hello' menggunakan slicing",
                        hint: "Gunakan [::-1]",
                        solution: `kata = "Hello"
reverse = kata[::-1]
print(reverse)  # olleH`
                    },
                    {
                        id: 5,
                        title: "Karakter Ganjil",
                        description: "Ambil setiap karakter ganjil dari 'Programming'",
                        hint: "Gunakan [::2]",
                        solution: `kata = "Programming"
ganjil = kata[::2]
print(ganjil)  # Pormig`
                    }
                ]
            }
        ]
    },

    { // 17
        id: 17,
        title: "Operasi dan Manipulasi String (Part 2)",
        description: "Belajar method-method string yang umum digunakan seperti upper(), lower(), strip(), replace(), dll.",
        level: "Pemula",
        duration: "2 jam",
        lessons: 3,
        progress: 0,
        image: "🛠️",
        topics: [
            "Method String Umum",
            "Pencarian dan Validasi",
            "Transformasi String"
        ],
        color: "#FF9800",
        content: [
            {
                id: 1,
                title: "Method String Umum",
                type: "theory",
                content: `
# Method-Method String yang Sering Digunakan

## 1. Mengubah Case (Huruf Besar/Kecil)
\`\`\`python
teks = "Hello Python"

print(teks.upper())      # HELLO PYTHON
print(teks.lower())      # hello python
print(teks.title())      # Hello Python
print(teks.capitalize()) # Hello python
\`\`\`

## 2. Membersihkan String
\`\`\`python
teks = "   hello world   "

print(teks.strip())      # "hello world" (hapus spasi kiri-kanan)
print(teks.lstrip())     # "hello world   " (hapus spasi kiri)
print(teks.rstrip())     # "   hello world" (hapus spasi kanan)
\`\`\`

## 3. Replace (Mengganti)
\`\`\`python
teks = "Saya suka Java"
teks_baru = teks.replace("Java", "Python")
print(teks_baru)  # Saya suka Python
\`\`\`
            `
            },
            {
                id: 2,
                title: "Pencarian dan Validasi",
                type: "theory",
                content: `
# Pencarian dan Validasi String

## 1. Pencarian
\`\`\`python
teks = "Python Programming is fun"

print(teks.find("Pro"))     # 7 (index ditemukan)
print(teks.find("Java"))    # -1 (tidak ditemukan)
print(teks.index("Pro"))    # 7
print(teks.count("m"))      # 3 (jumlah kemunculan)

# Pengecekan awal/akhir
print(teks.startswith("Py"))    # True
print(teks.endswith("fun"))     # True
\`\`\`

## 2. Validasi
\`\`\`python
teks1 = "Hello123"
teks2 = "12345"
teks3 = "HELLO"

print(teks1.isalnum())  # True (huruf dan angka)
print(teks2.isdigit())  # True (angka saja)
print(teks3.isupper())  # True (huruf besar semua)
print(teks1.islower())  # False (tidak semua kecil)

teks4 = "   "
teks5 = "Hello"
print(teks4.isspace())  # True (hanya spasi)
print(teks5.isalpha())  # True (huruf saja)
\`\`\`

## 3. Split dan Join
\`\`\`python
# Split - memecah string menjadi list
kalimat = "Python adalah bahasa pemrograman"
kata_kata = kalimat.split()
print(kata_kata)  # ['Python', 'adalah', 'bahasa', 'pemrograman']

email = "user@example.com"
parts = email.split("@")
print(parts)  # ['user', 'example.com']

# Join - menggabungkan list menjadi string
kata_list = ['Python', 'is', 'awesome']
kalimat = " ".join(kata_list)
print(kalimat)  # Python is awesome

path = "/".join(['folder', 'subfolder', 'file.txt'])
print(path)  # folder/subfolder/file.txt
\`\`\`
            `,
                codeExample: `# Contoh penggunaan method string
teks = "   Hello Python World!   "

print("Original:", f"'{teks}'")
print("Strip:", f"'{teks.strip()}'")
print("Upper:", teks.upper())
print("Lower:", teks.lower())

# Pencarian
print("\\nPencarian:")
print("Find 'Python':", teks.find("Python"))
print("Count 'l':", teks.count("l"))
print("Startswith 'Hello':", teks.startswith("Hello"))

# Split dan Join
kalimat = "Python adalah bahasa pemrograman"
print("\\nSplit:", kalimat.split())
print("Join:", "-".join(["A", "B", "C"]))`,
                expectedOutput: `Original: '   Hello Python World!   '
Strip: 'Hello Python World!'
Upper:    HELLO PYTHON WORLD!   
Lower:    hello python world!   

Pencarian:
Find 'Python': 8
Count 'l': 3
Startswith 'Hello': False

Split: ['Python', 'adalah', 'bahasa', 'pemrograman']
Join: A-B-C`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Operasi String Part 2

Kerjakan soal berikut:
1. Normalisasi input user (hapus spasi, ubah ke huruf kecil)
2. Ganti semua spasi dengan underscore dalam sebuah string
3. Cek apakah string mengandung angka
4. Pecah URL menjadi protocol, domain, dan path
5. Gabungkan list kata menjadi kalimat yang rapi
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Normalisasi Input",
                        description: "Bersihkan spasi dan ubah ke huruf kecil dari input '  HeLLo WoRLD  '",
                        hint: "Gunakan strip() dan lower()",
                        solution: `input_user = "  HeLLo WoRLD  "
normalized = input_user.strip().lower()
print(normalized)  # hello world`
                    },
                    {
                        id: 2,
                        title: "Ganti Spasi",
                        description: "Ganti semua spasi dengan underscore dalam 'file name with spaces'",
                        hint: "Gunakan replace()",
                        solution: `filename = "file name with spaces"
new_filename = filename.replace(" ", "_")
print(new_filename)  # file_name_with_spaces`
                    },
                    {
                        id: 3,
                        title: "Cek Angka",
                        description: "Cek apakah string '12345' hanya berisi angka",
                        hint: "Gunakan isdigit()",
                        solution: `teks = "12345"
if teks.isdigit():
    print("Hanya angka")
else:
    print("Tidak hanya angka")`
                    },
                    {
                        id: 4,
                        title: "Parse URL",
                        description: "Pecah URL 'https://example.com/path/to/page' menjadi bagian-bagian",
                        hint: "Gunakan split() dengan pemisah '/'",
                        solution: `url = "https://example.com/path/to/page"
parts = url.split("/")
print("Protocol:", parts[0])
print("Domain:", parts[2])
print("Path:", "/".join(parts[3:]))`
                    },
                    {
                        id: 5,
                        title: "Gabung Kalimat",
                        description: "Gabungkan list ['Saya', 'sedang', 'belajar', 'Python'] menjadi kalimat",
                        hint: "Gunakan join() dengan spasi",
                        solution: `kata_list = ['Saya', 'sedang', 'belajar', 'Python']
kalimat = " ".join(kata_list)
print(kalimat)  # Saya sedang belajar Python`
                    }
                ]
            }
        ]
    },

    { // 18
        id: 18,
        title: "Format String di Python",
        description: "Belajar berbagai cara formatting string: %-formatting, str.format(), dan f-string.",
        level: "Pemula Menengah",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "🎨",
        topics: [
            "%-formatting (Lama)",
            "str.format() Method",
            "f-String (Modern)"
        ],
        color: "#9C27B0",
        content: [
            {
                id: 1,
                title: "%-formatting (Cara Lama)",
                type: "theory",
                content: `
# %-formatting (String Formatting Lama)

Ini adalah cara tradisional yang diwarisi dari bahasa C.

## Format Dasar:
\`\`\`python
nama = "Alice"
umur = 25
print("Nama: %s, Umur: %d" % (nama, umur))
# Output: Nama: Alice, Umur: 25
\`\`\`

## Placeholder yang Sering Digunakan:
- **%s** → String
- **%d** → Integer  
- **%f** → Float
- **%.2f** → Float dengan 2 digit desimal

\`\`\`python
# Contoh berbagai tipe data
nama = "Budi"
nilai = 85.5
kehadiran = 20

print("Nama: %s" % nama)
print("Nilai: %.1f" % nilai)      # 85.5
print("Kehadiran: %d dari 25" % kehadiran)
\`\`\`
            `
            },
            {
                id: 2,
                title: "str.format() dan f-String",
                type: "theory",
                content: `
# str.format() Method

Cara yang lebih modern dan readable:

\`\`\`python
nama = "Charlie"
umur = 30

# Posisional
print("Nama: {}, Umur: {}".format(nama, umur))

# Named placeholder
print("Nama: {nama}, Umur: {umur}".format(nama=nama, umur=umur))

# Dengan index
print("{0} berumur {1}. {0} suka Python.".format(nama, umur))
\`\`\`

# f-String (Python 3.6+)

Cara terbaru dan paling recommended:

\`\`\`python
nama = "Diana"
umur = 28
gaji = 7500.50

# Basic f-string
print(f"Nama: {nama}, Umur: {umur}")

# Ekspresi dalam f-string
print(f"Tahun lahir: {2024 - umur}")

# Formatting angka
print(f"Gaji: Rp {gaji:,.2f}")        # Rp 7,500.50
print(f"Persentase: {0.75:.1%}")      # 75.0%

# Operasi dalam f-string
a = 5
b = 3
print(f"{a} + {b} = {a + b}")         # 5 + 3 = 8
\`\`\`

## Perbandingan Ketiga Metode:

\`\`\`python
nama, umur, tinggi = "Eva", 25, 165.5

# %-formatting
print("%-formatting: Nama: %s, Umur: %d, Tinggi: %.1f" % (nama, umur, tinggi))

# str.format()
print("str.format: Nama: {}, Umur: {}, Tinggi: {:.1f}".format(nama, umur, tinggi))

# f-string
print(f"f-string: Nama: {nama}, Umur: {umur}, Tinggi: {tinggi:.1f}")
\`\`\`
            `,
                codeExample: `# Contoh perbandingan ketiga metode formatting
produk = "Laptop"
harga = 12500000
stok = 15

print("=== %-formatting ===")
print("Produk: %s, Harga: Rp %d, Stok: %d" % (produk, harga, stok))

print("\\n=== str.format() ===")
print("Produk: {}, Harga: Rp {:,}, Stok: {}".format(produk, harga, stok))

print("\\n=== f-string ===")
print(f"Produk: {produk}, Harga: Rp {harga:,}, Stok: {stok}")

# Contoh f-string dengan ekspresi
diskon = 0.1
print(f"\\nHarga setelah diskon {diskon:.0%}: Rp {harga * (1-diskon):,}")

# Formatting lanjutan
pi = 3.14159265
print(f"\\nNilai pi: {pi:.3f}")  # 3.142
print(f"Persentase: {0.756:.1%}")  # 75.6%`,
                expectedOutput: `=== %-formatting ===
Produk: Laptop, Harga: Rp 12500000, Stok: 15

=== str.format() ===
Produk: Laptop, Harga: Rp 12,500,000, Stok: 15

=== f-string ===
Produk: Laptop, Harga: Rp 12,500,000, Stok: 15

Harga setelah diskon 10%: Rp 11,250,000

Nilai pi: 3.142
Persentase: 75.6%`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Format String

Kerjakan soal berikut menggunakan f-string:
1. Format harga produk dengan pemisah ribuan
2. Tampilkan persentase dengan 1 digit desimal
3. Buat laporan sederhana dengan multiple variable
4. Hitung dan tampilkan hasil operasi matematika
5. Format angka desimal dengan presisi tertentu
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Format Harga",
                        description: "Format harga 15000000 menjadi 'Rp 15,000,000'",
                        hint: "Gunakan f-string dengan {harga:,}",
                        solution: `harga = 15000000
print(f"Rp {harga:,}")  # Rp 15,000,000`
                    },
                    {
                        id: 2,
                        title: "Format Persentase",
                        description: "Tampilkan 0.875 sebagai '87.5%'",
                        hint: "Gunakan {nilai:.1%}",
                        solution: `nilai = 0.875
print(f"{nilai:.1%}")  # 87.5%`
                    },
                    {
                        id: 3,
                        title: "Laporan Sederhana",
                        description: "Buat laporan: 'Produk: Buku, Terjual: 45 dari 50 (90.0%)'",
                        hint: "Gunakan multiple variable dalam f-string",
                        solution: `produk = "Buku"
terjual = 45
total = 50
print(f"Produk: {produk}, Terjual: {terjual} dari {total} ({terjual/total:.1%})")`
                    },
                    {
                        id: 4,
                        title: "Operasi Matematika",
                        description: "Tampilkan '15 × 3 = 45' menggunakan f-string dengan operasi",
                        hint: "Langsung lakukan operasi dalam {}",
                        solution: `a = 15
b = 3
print(f"{a} × {b} = {a * b}")  # 15 × 3 = 45`
                    },
                    {
                        id: 5,
                        title: "Presisi Desimal",
                        description: "Tampilkan 3.14159265 dengan 4 digit desimal",
                        hint: "Gunakan {pi:.4f}",
                        solution: `pi = 3.14159265
print(f"{pi:.4f}")  # 3.1416`
                    }
                ]
            }
        ]
    },

    { // 19
        id: 19,
        title: "String Width and Alignment",
        description: "Belajar mengatur lebar, alignment, dan padding string untuk tampilan yang rapi.",
        level: "Menengah",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "📐",
        topics: [
            "Text Alignment",
            "Width dan Padding",
            "Formatting Lanjutan"
        ],
        color: "#795548",
        content: [
            {
                id: 1,
                title: "Text Alignment",
                type: "theory",
                content: `
# Text Alignment dalam String

Mengatur perataan teks (kiri, kanan, tengah) dalam lebar tertentu.

## 1. Left Alignment (<)
\`\`\`python
teks = "Python"
print(f"|{teks:<10}|")  # |Python    |
\`\`\`

## 2. Right Alignment (>)
\`\`\`python
teks = "Python"
print(f"|{teks:>10}|")  # |    Python|
\`\`\`

## 3. Center Alignment (^)
\`\`\`python
teks = "Python"
print(f"|{teks:^10}|")  # |  Python  |
\`\`\`

## 4. Dengan Fill Character
\`\`\`python
teks = "Python"
print(f"|{teks:*<10}|")  # |Python****|
print(f"|{teks:->10}|")  # |----Python|
print(f"|{teks:=^10}|")  # |==Python==|
\`\`\`
            `
            },
            {
                id: 2,
                title: "Width dan Padding",
                type: "theory",
                content: `
# Width, Padding, dan Formatting Lanjutan

## 1. Mengatur Lebar Minimum
\`\`\`python
nama = "Ali"
umur = 20

print(f"Nama: {nama:10} Umur: {umur:5}")
# Nama: Ali        Umur:    20
\`\`\`

## 2. Kombinasi Alignment dan Type
\`\`\`python
# Untuk angka dengan alignment
harga = 5000
print(f"|{harga:<10,}|")  # |5,000     |
print(f"|{harga:>10,}|")  # |     5,000|
print(f"|{harga:^10,}|")  # |  5,000   |

# Untuk string
produk = "Laptop"
print(f"|{produk:<15}|")  # |Laptop          |
print(f"|{produk:>15}|")  # |          Laptop|
print(f"|{produk:^15}|")  # |     Laptop     |
\`\`\`

## 3. Formatting Tabel Sederhana
\`\`\`python
# Header
print(f"{'PRODUK':<15} {'HARGA':>10} {'STOK':>6}")
print("-" * 35)

# Data
print(f"{'Laptop':<15} {15000000:>10,} {5:>6}")
print(f"{'Mouse':<15} {250000:>10,} {20:>6}")
print(f"{'Keyboard':<15} {500000:>10,} {15:>6}")
\`\`\`

## 4. Truncating String (Pemotongan)
\`\`\`python
teks_panjang = "Ini adalah teks yang sangat panjang sekali"

# Potong menjadi 20 karakter
print(f"{teks_panjang:.20}...")  # Ini adalah teks yang...

# Dengan alignment dan truncation
print(f"|{teks_panjang:25.25}|")  # |Ini adalah teks yang san|
\`\`\`
            `,
                codeExample: `# Contoh width dan alignment
print("=== ALIGNMENT DASAR ===")
teks = "Python"
print(f"Kiri     : |{teks:<10}|")
print(f"Kanan    : |{teks:>10}|")
print(f"Tengah   : |{teks:^10}|")

print("\\n=== DENGAN FILL CHARACTER ===")
print(f"Kiri     : |{teks:*<10}|")
print(f"Kanan    : |{teks:->10}|")
print(f"Tengah   : |{teks:=^10}|")

print("\\n=== FORMATTING TABEL ===")
print(f"{'NAMA':<12} {'USIA':>6} {'Gaji':>10}")
print("-" * 32)
print(f"{'Andi':<12} {25:>6} {5000000:>10,}")
print(f"{'Budi':<12} {30:>6} {7500000:>10,}")
print(f"{'Citra':<12} {28:>6} {6000000:>10,}")

print("\\n=== TRUNCATION ===")
panjang = "Ini adalah string yang sangat panjang sekali"
print(f"Potong: {panjang:.15}...")`,
                expectedOutput: `=== ALIGNMENT DASAR ===
Kiri     : |Python    |
Kanan    : |    Python|
Tengah   : |  Python  |

=== DENGAN FILL CHARACTER ===
Kiri     : |Python****|
Kanan    : |----Python|
Tengah   : |==Python==|

=== FORMATTING TABEL ===
NAMA             USIA       Gaji
--------------------------------
Andi               25   5,000,000
Budi               30   7,500,000
Citra              28   6,000,000

=== TRUNCATION ===
Potong: Ini adalah str...`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan String Width dan Alignment

Kerjakan soal berikut:
1. Buat tabel produk dengan alignment yang rapi
2. Format daftar nama dengan padding tertentu
3. Buat header yang centered dengan border
4. Tampilkan angka dengan alignment dan pemisah ribuan
5. Buat laporan dengan multiple column
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Tabel Produk",
                        description: "Buat tabel dengan kolom: Nama (lebar 15, kiri), Harga (lebar 12, kanan), Stok (lebar 6, kanan)",
                        hint: "Gunakan f-string dengan < dan >",
                        solution: `print(f"{'NAMA':<15} {'HARGA':>12} {'STOK':>6}")
print("-" * 35)
print(f"{'Laptop':<15} {15000000:>12,} {5:>6}")
print(f"{'Mouse':<15} {250000:>12,} {20:>6}")`
                    },
                    {
                        id: 2,
                        title: "Format Nama",
                        description: "Tampilkan daftar nama dengan lebar 10 karakter, rata kiri, dan fill character '.'",
                        hint: "Gunakan {nama:.<10}",
                        solution: `nama1, nama2, nama3 = "Ali", "Budi", "Citra"
print(f"{nama1:.<10}")
print(f"{nama2:.<10}")
print(f"{nama3:.<10}")`
                    },
                    {
                        id: 3,
                        title: "Header Centered",
                        description: "Buat header 'LAPORAN PENJUALAN' yang centered dalam lebar 40 karakter dengan border =",
                        hint: "Gunakan {teks:=^40}",
                        solution: `header = "LAPORAN PENJUALAN"
print(f"{header:=^40}")`
                    },
                    {
                        id: 4,
                        title: "Format Angka",
                        description: "Tampilkan angka 1234567 dengan lebar 15, rata kanan, dan pemisah ribuan",
                        hint: "Gunakan {angka:>15,}",
                        solution: `angka = 1234567
print(f"|{angka:>15,}|")  # |        1,234,567|`
                    },
                    {
                        id: 5,
                        title: "Laporan Multi Kolom",
                        description: "Buat laporan dengan 3 kolom: Kode (lebar 8), Deskripsi (lebar 25), Nilai (lebar 10)",
                        hint: "Kombinasikan alignment untuk masing-masing kolom",
                        solution: `print(f"{'KODE':<8} {'DESKRIPSI':<25} {'NILAI':>10}")
print("-" * 45)
print(f"{'A001':<8} {'Produk A Premium':<25} {150000:>10,}")
print(f"{'B002':<8} {'Produk B Standard':<25} {75000:>10,}")`
                    }
                ]
            }
        ]
    },

    { // 20
        id: 20,
        title: "Latihan Date and Time",
        description: "Praktik penggunaan module datetime untuk manipulasi tanggal dan waktu.",
        level: "Pemula Menengah",
        duration: "2 jam",
        lessons: 3,
        progress: 0,
        image: "📅",
        topics: [
            "Module datetime Dasar",
            "Formatting Tanggal & Waktu",
            "Operasi DateTime"
        ],
        color: "#607D8B",
        content: [
            {
                id: 1,
                title: "Module datetime Dasar",
                type: "theory",
                content: `
# Pengenalan Module datetime

Module datetime menyediakan class untuk memanipulasi tanggal dan waktu.

## Import Module
\`\`\`python
from datetime import datetime, date, time, timedelta
\`\`\`

## 1. datetime.now() - Waktu Sekarang
\`\`\`python
sekarang = datetime.now()
print(sekarang)  # 2024-03-20 15:30:45.123456
\`\`\`

## 2. date.today() - Tanggal Hari Ini
\`\`\`python
hari_ini = date.today()
print(hari_ini)  # 2024-03-20
\`\`\`

## 3. Membuat Object DateTime Manual
\`\`\`python
# datetime(year, month, day, hour, minute, second)
waktu_kustom = datetime(2024, 12, 25, 18, 30, 0)
print(waktu_kustom)  # 2024-12-25 18:30:00

# date(year, month, day)
tanggal_kustom = date(2024, 6, 15)
print(tanggal_kustom)  # 2024-06-15

# time(hour, minute, second)
waktu_saja = time(14, 30, 45)
print(waktu_saja)  # 14:30:45
\`\`\`
            `
            },
            {
                id: 2,
                title: "Formatting dan Operasi",
                type: "theory",
                content: `
# Formatting DateTime

## 1. strftime() - Format DateTime ke String
\`\`\`python
sekarang = datetime.now()

print(sekarang.strftime("%Y-%m-%d"))           # 2024-03-20
print(sekarang.strftime("%d/%m/%Y"))           # 20/03/2024
print(sekarang.strftime("%A, %d %B %Y"))       # Wednesday, 20 March 2024
print(sekarang.strftime("%H:%M:%S"))           # 15:30:45
print(sekarang.strftime("%I:%M %p"))           # 03:30 PM
\`\`\`

## 2. strptime() - Parse String ke DateTime
\`\`\`python
# Convert string to datetime
string_tanggal = "2024-12-25 18:30:00"
format_string = "%Y-%m-%d %H:%M:%S"
waktu = datetime.strptime(string_tanggal, format_string)
print(waktu)  # 2024-12-25 18:30:00
\`\`\`

## 3. Operasi DateTime dengan timedelta
\`\`\`python
sekarang = datetime.now()

# Tambah 7 hari
minggu_depan = sekarang + timedelta(days=7)
print("Minggu depan:", minggu_depan)

# Kurang 2 jam
dua_jam_lalu = sekarang - timedelta(hours=2)
print("2 jam lalu:", dua_jam_lalu)

# Kombinasi
waktu_baru = sekarang + timedelta(days=1, hours=3, minutes=30)
print("Besok + 3.5 jam:", waktu_baru)

# Selisih antara dua datetime
waktu1 = datetime(2024, 1, 1)
waktu2 = datetime(2024, 1, 15)
selisih = waktu2 - waktu1
print("Selisih hari:", selisih.days)  # 14
\`\`\`

## Format Kode strftime yang Umum:
- **%Y** → Tahun 4 digit (2024)
- **%m** → Bulan 2 digit (01-12)
- **%d** → Hari 2 digit (01-31)
- **%H** → Jam 24-hour (00-23)
- **%I** → Jam 12-hour (01-12)
- **%M** → Menit (00-59)
- **%S** → Detik (00-59)
- **%A** → Nama hari lengkap (Monday)
- **%B** → Nama bulan lengkap (January)
- **%p** → AM/PM
            `,
                codeExample: `from datetime import datetime, timedelta

print("=== WAKTU SEKARANG ===")
sekarang = datetime.now()
print("Waktu lengkap:", sekarang)
print("Format custom:", sekarang.strftime("%A, %d %B %Y %H:%M"))

print("\\n=== OPERASI DATETIME ===")
besok = sekarang + timedelta(days=1)
print("Besok:", besok.strftime("%d/%m/%Y"))

# Hitung umur
lahir = datetime(1990, 5, 15)
umur = sekarang - lahir
print("Umur dalam hari:", umur.days)
print("Umur dalam tahun:", umur.days // 365)

print("\\n=== PARSING STRING ===")
string_waktu = "25/12/2024 18:30"
parsed = datetime.strptime(string_waktu, "%d/%m/%Y %H:%M")
print("Parsed:", parsed)

print("\\n=== FORMAT BERBAGAI BAHASA ===")
print("ISO Format:", sekarang.isoformat())
print("RFC Format:", sekarang.strftime("%a, %d %b %Y %H:%M:%S"))`,
                expectedOutput: `=== WAKTU SEKARANG ===
Waktu lengkap: 2024-03-20 15:30:45.123456
Format custom: Wednesday, 20 March 2024 15:30

=== OPERASI DATETIME ===
Besok: 21/03/2024
Umur dalam hari: 12345
Umur dalam tahun: 33

=== PARSING STRING ===
Parsed: 2024-12-25 18:30:00

=== FORMAT BERBAGAI BAHASA ===
ISO Format: 2024-03-20T15:30:45.123456
RFC Format: Wed, 20 Mar 2024 15:30:45`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Date and Time

Kerjakan soal berikut:
1. Tampilkan tanggal dan waktu sekarang dalam format Indonesia
2. Hitung berapa hari menuju ulang tahun kamu berikutnya
3. Buat countdown menuju event tertentu
4. Format tanggal untuk berbagai keperluan
5. Hitung selisih antara dua tanggal
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Format Indonesia",
                        description: "Tampilkan waktu sekarang dalam format 'Rabu, 20 Maret 2024 - 15:30 WIB'",
                        hint: "Gunakan strftime dengan format custom",
                        solution: `from datetime import datetime
sekarang = datetime.now()
format_indonesia = sekarang.strftime("%A, %d %B %Y - %H:%M WIB")
print(format_indonesia)`
                    },
                    {
                        id: 2,
                        title: "Menuju Ulang Tahun",
                        description: "Hitung berapa hari menuju ulang tahun berikutnya (asumsikan ulang tahun 15 Mei)",
                        hint: "Bandingkan tanggal sekarang dengan ulang tahun tahun ini/tahun depan",
                        solution: `from datetime import datetime, date
sekarang = date.today()
tahun_ini = sekarang.year
ulang_tahun = date(tahun_ini, 5, 15)

if ulang_tahun < sekarang:
    ulang_tahun = date(tahun_ini + 1, 5, 15)

selisih = ulang_tahun - sekarang
print(f"Menuju ulang tahun: {selisih.days} hari")`
                    },
                    {
                        id: 3,
                        title: "Countdown Event",
                        description: "Buat countdown menuju tahun baru 2025",
                        hint: "Gunakan timedelta untuk hitung selisih",
                        solution: `from datetime import datetime
tahun_baru = datetime(2025, 1, 1)
sekarang = datetime.now()
selisih = tahun_baru - sekarang

print(f"Countdown tahun baru: {selisih.days} hari, {selisih.seconds//3600} jam")`
                    },
                    {
                        id: 4,
                        title: "Multiple Format",
                        description: "Tampilkan tanggal yang sama dalam 3 format berbeda: ISO, US, dan Indonesia",
                        hint: "Gunakan strftime dengan format berbeda",
                        solution: `from datetime import datetime
tanggal = datetime(2024, 12, 25, 18, 30)

print("ISO:", tanggal.strftime("%Y-%m-%d"))
print("US:", tanggal.strftime("%m/%d/%Y"))
print("ID:", tanggal.strftime("%d-%m-%Y"))`
                    },
                    {
                        id: 5,
                        title: "Selisih Tanggal",
                        description: "Hitung selisih dalam hari antara dua tanggal: 1 Januari 2024 dan 20 Maret 2024",
                        hint: "Kurangi dua objek datetime",
                        solution: `from datetime import datetime
tgl1 = datetime(2024, 1, 1)
tgl2 = datetime(2024, 3, 20)
selisih = tgl2 - tgl1
print(f"Selisih: {selisih.days} hari")`
                    }
                ]
            }
        ]
    }
];

export default lessonCards;