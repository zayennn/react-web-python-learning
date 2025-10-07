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
    { // 16
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
    { // 17
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
    { // 18
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
    { // 19
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
    { // 20
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
    { // 21
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
    { // 22
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
    { // 23
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
    { // 24
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
    { // 25
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
    { // 26
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
    { // 27
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
    },
    { // 28
        id: 28,
        title: "Latihan Perulangan",
        description: "Saatnya latihan! Gabungkan pemahaman tentang for loop, while loop, dan break untuk menyelesaikan berbagai kasus nyata.",
        level: "Menengah",
        duration: "1 jam 30 menit",
        lessons: 4,
        progress: 0,
        image: "🔁",
        topics: [
            "Latihan dasar for & while",
            "Kombinasi perulangan bersarang",
            "Penggunaan break & continue",
            "Mini project: Hitung Data"
        ],
        color: "#2563EB",
        content: [
            {
                id: 1,
                title: "Latihan 1: Hitung Jumlah Angka",
                type: "exercise",
                content: `
# 🎯 Tujuan:
Melatih penggunaan **for loop** untuk menjumlahkan angka dari 1 sampai N.

# 💡 Deskripsi:
Kamu diminta membuat program yang menghitung total dari angka 1 sampai angka yang dimasukkan user.

Contoh:
\`\`\`
Masukkan angka: 5
Hasil: 15
\`\`\`

# 🧠 Hint:
Gunakan \`range()\` dan \`for\` loop.
            `,
                codeExample: `
total = 0
n = int(input("Masukkan angka: "))

for i in range(1, n + 1):
    total += i

print("Hasil:", total)
            `,
                expectedOutput: `
Masukkan angka: 5
Hasil: 15
            `
            },
            {
                id: 2,
                title: "Latihan 2: Cek Angka Ganjil Genap",
                type: "exercise",
                content: `
# 🎯 Tujuan:
Memahami cara menggunakan **while loop** dan kondisi untuk menentukan angka ganjil/genap.

# 💡 Deskripsi:
User akan diminta memasukkan angka.  
Program akan menampilkan semua angka dari 1 hingga angka tersebut, dan memberi tahu apakah angka itu ganjil atau genap.

# 🧠 Hint:
Gunakan \`while\` dan operator modulus (\`%\`).
            `,
                codeExample: `
n = int(input("Masukkan angka: "))
i = 1

while i <= n:
    if i % 2 == 0:
        print(i, "adalah angka genap")
    else:
        print(i, "adalah angka ganjil")
    i += 1
            `,
                expectedOutput: `
Masukkan angka: 5
1 adalah angka ganjil
2 adalah angka genap
3 adalah angka ganjil
4 adalah angka genap
5 adalah angka ganjil
            `
            },
            {
                id: 3,
                title: "Latihan 3: Break Saat Angka Ditemukan",
                type: "exercise",
                content: `
# 🎯 Tujuan:
Melatih penggunaan **break** untuk menghentikan perulangan berdasarkan kondisi tertentu.

# 💡 Deskripsi:
Program mencari angka tertentu dalam sebuah list.  
Kalau angka ditemukan, langsung berhenti dengan pesan.

# 🧠 Hint:
Gunakan \`for\` dan \`if\` + \`break\`.
            `,
                codeExample: `
data = [3, 5, 7, 9, 11, 13]
target = int(input("Cari angka: "))

for angka in data:
    if angka == target:
        print("Angka", target, "ditemukan!")
        break
else:
    print("Angka tidak ditemukan.")
            `,
                expectedOutput: `
Cari angka: 9
Angka 9 ditemukan!
            `
            },
            {
                id: 4,
                title: "Mini Project: Kalkulator Jumlah Bilangan Positif",
                type: "project",
                content: `
# 🎯 Tujuan:
Menggabungkan semua konsep perulangan, kondisi, dan break.

# 💡 Deskripsi:
Buat program yang terus meminta input angka dari user.
Jika user memasukkan angka negatif, hentikan input dan tampilkan total semua angka positif yang dimasukkan.

# 🧠 Hint:
Gunakan \`while True\`, \`break\`, dan logika sederhana.
            `,
                codeExample: `
total = 0

while True:
    angka = int(input("Masukkan angka (negatif untuk berhenti): "))

    if angka < 0:
        break

    total += angka

print("Total semua angka positif:", total)
            `,
                expectedOutput: `
Masukkan angka (negatif untuk berhenti): 10
Masukkan angka (negatif untuk berhenti): 5
Masukkan angka (negatif untuk berhenti): -1
Total semua angka positif: 15
            `
            }
        ]
    },
    { // 29
        id: 29,
        title: "List (Daftar Data)",
        description: "List adalah salah satu tipe data paling penting di Python. Dengan list, kita bisa nyimpen banyak nilai sekaligus dalam satu variabel!",
        level: "Pemula",
        duration: "1 jam",
        lessons: 5,
        progress: 0,
        image: "📋",
        topics: [
            "Apa itu List?",
            "Cara Membuat List",
            "Akses Data di List",
            "Mengubah & Menambah Data",
            "Latihan"
        ],
        color: "#60A5FA",
        content: [
            {
                id: 1,
                title: "Apa Itu List?",
                type: "theory",
                content: `
# Apa Itu List?

Bayangin lo punya rak buku — tiap slot bisa lo isi dengan satu buku.
Nah, **list** itu ibarat rak itu: lo bisa nyimpen banyak data di satu variabel.

List bisa nyimpen **angka**, **string**, **boolean**, bahkan **list lain** (alias nested list).

Contoh:
\`\`\`python
data = [1, 2, 3, 4, 5]
buah = ["apel", "pisang", "jeruk"]
campuran = [1, "Python", True, 3.14]
\`\`\`

List ditandai dengan tanda kurung siku **[ ]** dan tiap item dipisahkan pakai koma.
            `
            },
            {
                id: 2,
                title: "Akses Data di List",
                type: "theory",
                content: `
# Akses Data

Python pake sistem **index**, mulai dari 0.  
Artinya: item pertama = index ke-0, kedua = ke-1, dst.

\`\`\`python
buah = ["apel", "pisang", "jeruk"]

print(buah[0])  # "apel"
print(buah[1])  # "pisang"
print(buah[-1]) # "jeruk" (index negatif = dari belakang)
\`\`\`

Kalo lo pengen ambil sebagian, bisa juga pakai **slicing**:
\`\`\`python
print(buah[0:2])  # ['apel', 'pisang']
\`\`\`
            `
            },
            {
                id: 3,
                title: "Ubah & Tambah Data di List",
                type: "theory",
                content: `
# Ubah Isi List

Karena list itu **mutable** (bisa diubah), lo bisa ganti isinya dengan gampang.

\`\`\`python
angka = [10, 20, 30]
angka[1] = 99
print(angka)  # [10, 99, 30]
\`\`\`

# Nambah Data ke List

Ada beberapa cara buat nambah item ke list:

1. **append()** → nambah di akhir
   \`\`\`python
   buah = ["apel", "pisang"]
   buah.append("mangga")
   print(buah)
   # ['apel', 'pisang', 'mangga']
   \`\`\`

2. **insert()** → nambah di posisi tertentu
   \`\`\`python
   buah.insert(1, "jeruk")  # masuk di index ke-1
   print(buah)
   # ['apel', 'jeruk', 'pisang', 'mangga']
   \`\`\`

3. **extend()** → nambah banyak item sekaligus
   \`\`\`python
   buah.extend(["anggur", "melon"])
   print(buah)
   # ['apel', 'jeruk', 'pisang', 'mangga', 'anggur', 'melon']
   \`\`\`
            `
            },
            {
                id: 4,
                title: "Hapus Data dari List",
                type: "theory",
                content: `
# Hapus Data

Python nyediain beberapa cara juga buat hapus data dari list:

1. **remove()** → hapus berdasarkan nilai  
   \`\`\`python
   buah.remove("pisang")
   \`\`\`

2. **pop()** → hapus berdasarkan index (default: terakhir)  
   \`\`\`python
   buah.pop(0)  # hapus item pertama
   \`\`\`

3. **del** → hapus elemen atau seluruh list  
   \`\`\`python
   del buah[1]
   \`\`\`

4. **clear()** → kosongin list  
   \`\`\`python
   buah.clear()
   \`\`\`
            `
            },
            {
                id: 5,
                title: "Latihan: Bermain dengan List",
                type: "practice",
                content: `
# Latihan Wajib

1. Buat list berisi 5 nama teman lo.
2. Ganti elemen ke-3 dengan nama baru.
3. Tambahkan satu nama lagi di akhir.
4. Hapus elemen pertama.
5. Tampilkan list hasil akhirnya.

Contoh output akhir:
\`\`\`
['Adit', 'Budi', 'Dina', 'Eka', 'Farah']
\`\`\`

Coba bikin pake fungsi list yang udah lo pelajarin!
            `,
                codeExample: `
teman = ["Andi", "Budi", "Citra", "Dewi", "Eka"]

# Ganti elemen ke-3
teman[2] = "Dina"

# Tambah 1 nama
teman.append("Farah")

# Hapus elemen pertama
teman.pop(0)

print(teman)
            `,
                expectedOutput: `
['Budi', 'Dina', 'Dewi', 'Eka', 'Farah']
            `
            }
        ]
    },
    { // 30
        id: 30,
        title: "Manipulasi List",
        description: "Sekarang saatnya naik level! Lo bakal belajar berbagai cara buat ngolah list di Python — dari nyari data, ngitung, sampai ngacak urutan.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 6,
        progress: 0,
        image: "🧩",
        topics: [
            "Mengetahui Panjang List",
            "Mengecek Data dalam List",
            "Mengurutkan dan Membalik List",
            "Menyalin List",
            "Menggabungkan List",
            "Latihan"
        ],
        color: "#4ADE80",
        content: [
            {
                id: 1,
                title: "Mengetahui Panjang List",
                type: "theory",
                content: `
# Panjang List

Kadang lo perlu tau berapa banyak item di dalam list.  
Gunain fungsi **len()** buat itu:

\`\`\`python
buah = ["apel", "pisang", "jeruk", "mangga"]
print(len(buah))  # Output: 4
\`\`\`

Fungsi \`len()\` bakal ngembaliin jumlah elemen dalam list.
            `
            },
            {
                id: 2,
                title: "Mengecek Data dalam List",
                type: "theory",
                content: `
# Cek Apakah Item Ada di List

Gunain keyword **in** buat ngecek keberadaan data:

\`\`\`python
buah = ["apel", "pisang", "jeruk"]

if "apel" in buah:
    print("Ada apel!")
else:
    print("Gak ada apel.")
\`\`\`

Output:
\`\`\`
Ada apel!
\`\`\`

Lo juga bisa pake **not in** buat kebalikannya:
\`\`\`python
if "mangga" not in buah:
    print("Mangga belum ada di list.")
\`\`\`
            `
            },
            {
                id: 3,
                title: "Mengurutkan dan Membalik List",
                type: "theory",
                content: `
# Mengurutkan List

Gunain method **sort()** buat ngurutin list:

\`\`\`python
angka = [5, 2, 9, 1, 7]
angka.sort()
print(angka)  # [1, 2, 5, 7, 9]
\`\`\`

Untuk urutan **terbalik (descending)**, pake parameter \`reverse=True\`:
\`\`\`python
angka.sort(reverse=True)
print(angka)  # [9, 7, 5, 2, 1]
\`\`\`

Kalau lo cuma pengen balik urutan TANPA ngurutin, pake:
\`\`\`python
angka.reverse()
\`\`\`

# Hati-hati:
\`sort()\` ngubah list asli, sedangkan \`sorted()\` bikin list baru:
\`\`\`python
baru = sorted(angka)
\`\`\`
            `
            },
            {
                id: 4,
                title: "Menyalin List",
                type: "theory",
                content: `
# Copy List

Kalo lo cuma assign langsung (\`=\`), itu bukan bikin salinan, tapi bikin **referensi** ke list yang sama.  
Jadi kalau salah satu diubah, yang lain ikut berubah 😬

\`\`\`python
a = [1, 2, 3]
b = a  # ini cuma ngereferensi
b[0] = 99
print(a)  # [99, 2, 3]
\`\`\`

Cara yang **benar** buat nyalin list:
\`\`\`python
a = [1, 2, 3]
b = a.copy()      # Cara 1
c = list(a)       # Cara 2
d = a[:]          # Cara 3

b[0] = 99
print(a)  # [1, 2, 3]
print(b)  # [99, 2, 3]
\`\`\`
            `
            },
            {
                id: 5,
                title: "Menggabungkan List",
                type: "theory",
                content: `
# Gabungin Dua List

Lo bisa gabungin dua list jadi satu pakai tanda **+** atau **extend()**.

\`\`\`python
a = [1, 2, 3]
b = [4, 5, 6]

gabung = a + b
print(gabung)  # [1, 2, 3, 4, 5, 6]
\`\`\`

Atau:
\`\`\`python
a.extend(b)
print(a)  # [1, 2, 3, 4, 5, 6]
\`\`\`
            `
            },
            {
                id: 6,
                title: "Latihan: Operasi List Lengkap",
                type: "practice",
                content: `
# Latihan

1. Buat list berisi angka [3, 1, 4, 1, 5, 9].
2. Tambahkan angka 2 dan 6 ke list.
3. Urutkan list dari kecil ke besar.
4. Balik urutannya.
5. Salin list ke variabel baru tanpa memengaruhi list asli.
6. Gabungkan list asli dan list salinan.
7. Cek apakah angka 9 ada di list hasil gabungan.

Tampilkan semua hasilnya.
            `,
                codeExample: `
angka = [3, 1, 4, 1, 5, 9]

# Tambah elemen baru
angka.extend([2, 6])
print("Setelah tambah:", angka)

# Urutkan dan balik
angka.sort()
print("Urut naik:", angka)
angka.reverse()
print("Urut turun:", angka)

# Copy list
salinan = angka.copy()

# Gabungkan
gabung = angka + salinan
print("Gabungan:", gabung)

# Cek keberadaan angka
if 9 in gabung:
    print("Angka 9 ditemukan!")
else:
    print("Angka 9 gak ada.")
            `,
                expectedOutput: `
Setelah tambah: [3, 1, 4, 1, 5, 9, 2, 6]
Urut naik: [1, 1, 2, 3, 4, 5, 6, 9]
Urut turun: [9, 6, 5, 4, 3, 2, 1, 1]
Gabungan: [9, 6, 5, 4, 3, 2, 1, 1, 9, 6, 5, 4, 3, 2, 1, 1]
Angka 9 ditemukan!
            `
            }
        ]
    },
    { // 31
        id: 31,
        title: "Operasi List",
        description: "Python bisa ngelakuin berbagai operasi langsung ke list — dari ngitung jumlah, nyari nilai tertinggi, sampe nggabungin list jadi satu. Gampang tapi powerful banget!",
        level: "Pemula",
        duration: "1 jam",
        lessons: 6,
        progress: 0,
        image: "➕",
        topics: [
            "Operasi Penjumlahan & Pengulangan",
            "Mengetahui Nilai Tertinggi & Terendah",
            "Menjumlahkan Semua Elemen",
            "Mencari Nilai Tertentu",
            "Membandingkan List",
            "Latihan"
        ],
        color: "#FACC15",
        content: [
            {
                id: 1,
                title: "Operasi Penjumlahan & Pengulangan",
                type: "theory",
                content: `
# Operasi Dasar

Lo bisa *nambahin list* atau *ngulang list* kayak gini:

\`\`\`python
a = [1, 2, 3]
b = [4, 5, 6]

# Gabungin dua list
gabung = a + b
print(gabung)  # [1, 2, 3, 4, 5, 6]

# Ulang list
ulang = a * 3
print(ulang)  # [1, 2, 3, 1, 2, 3, 1, 2, 3]
\`\`\`

Operator \`+\` = gabung list  
Operator \`*\` = ngulang elemen list
            `
            },
            {
                id: 2,
                title: "Mengetahui Nilai Tertinggi & Terendah",
                type: "theory",
                content: `
# Nilai Maksimum & Minimum

Python punya fungsi bawaan buat nyari nilai terbesar dan terkecil:

\`\`\`python
angka = [10, 3, 7, 2, 9]

print(max(angka))  # 10
print(min(angka))  # 2
\`\`\`

Catatan: pastiin semua elemen list bisa dibandingin (misal semuanya angka).
            `
            },
            {
                id: 3,
                title: "Menjumlahkan Semua Elemen",
                type: "theory",
                content: `
# Menjumlahkan Isi List

Gunain fungsi **sum()** buat ngitung total dari semua angka di list:

\`\`\`python
angka = [1, 2, 3, 4, 5]
print(sum(angka))  # 15
\`\`\`

Kalau mau lebih fleksibel (misal nambah kondisi), bisa juga pake loop:

\`\`\`python
total = 0
for i in angka:
    total += i
print(total)
\`\`\`
            `
            },
            {
                id: 4,
                title: "Mencari Nilai Tertentu di List",
                type: "theory",
                content: `
# Cari Elemen di List

Ada dua cara populer:

1. **Cek apakah elemen ada**
   \`\`\`python
   angka = [1, 2, 3, 4, 5]
   if 3 in angka:
       print("Ada 3 di dalam list!")
   \`\`\`

2. **Cari posisi (index) elemen**
   \`\`\`python
   buah = ["apel", "jeruk", "pisang"]
   posisi = buah.index("jeruk")
   print(posisi)  # 1
   \`\`\`

Kalau elemen gak ada dan lo maksa \`index()\` — Python bakal error.  
Makanya amanin dulu pake \`if item in list\`.
            `
            },
            {
                id: 5,
                title: "Membandingkan Dua List",
                type: "theory",
                content: `
# Bandingin List

Lo bisa langsung bandingin dua list pakai operator pembanding (\`==\`, \`!=\`, \`<\`, \`>\`).

\`\`\`python
a = [1, 2, 3]
b = [1, 2, 3]
c = [3, 2, 1]

print(a == b)  # True
print(a == c)  # False
\`\`\`

Python nge-cek elemen satu per satu, termasuk urutannya.  
Kalau semua elemen dan urutan sama → hasilnya True.
            `
            },
            {
                id: 6,
                title: "Latihan: Operasi List",
                type: "practice",
                content: `
# Latihan Operasi List

1. Buat list berisi angka [10, 20, 30, 40, 50].
2. Tambahkan list lain [60, 70].
3. Hitung jumlah seluruh elemen.
4. Cari nilai tertinggi dan terendah.
5. Cek apakah angka 25 ada di dalam list.
6. Ulang list sebanyak 2 kali dan tampilkan hasil akhirnya.

Bonus 💡: Bandingkan hasil list asli dengan list hasil pengulangan.
            `,
                codeExample: `
angka = [10, 20, 30, 40, 50]
angka_lain = [60, 70]

# Gabungkan list
gabung = angka + angka_lain
print("Gabungan:", gabung)

# Jumlahkan isi list
print("Total:", sum(gabung))

# Nilai max dan min
print("Tertinggi:", max(gabung))
print("Terendah:", min(gabung))

# Cek keberadaan angka
if 25 in gabung:
    print("25 ada di list.")
else:
    print("25 tidak ditemukan.")

# Ulang list 2x
ulang = gabung * 2
print("List diulang:", ulang)

# Bandingkan
print("Apakah list asli == list hasil ulang?", gabung == ulang)
            `,
                expectedOutput: `
Gabungan: [10, 20, 30, 40, 50, 60, 70]
Total: 280
Tertinggi: 70
Terendah: 10
25 tidak ditemukan.
List diulang: [10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70]
Apakah list asli == list hasil ulang? False
            `
            }
        ]
    },
    { // 32
        id: 32,
        title: "Copy List (Menyalin List)",
        description: "Bikin salinan list kelihatannya gampang, tapi ternyata nggak sesimpel itu. Di Python, copy bisa berarti dua hal: salinan asli atau cuma ngacu ke data yang sama.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 5,
        progress: 0,
        image: "📋",
        topics: [
            "Masalah Saat Menyalin Langsung",
            "Menyalin List dengan copy()",
            "Menyalin List dengan Slicing",
            "Perbedaan Shallow Copy vs Deep Copy",
            "Latihan Copy List"
        ],
        color: "#14B8A6",
        content: [
            {
                id: 1,
                title: "Masalah Saat Menyalin Langsung",
                type: "theory",
                content: `
# Masalah Copy Langsung

Kalau lo coba “copy” list pakai tanda sama dengan (=),  
sebenernya **Python cuma bikin referensi baru**, bukan list baru.

\`\`\`python
a = [1, 2, 3]
b = a  # bukan copy, tapi referensi ke list yang sama

b.append(4)
print("a:", a)
print("b:", b)
\`\`\`

Outputnya:
\`\`\`
a: [1, 2, 3, 4]
b: [1, 2, 3, 4]
\`\`\`

➡️ Keduanya berubah bareng, karena mereka *nunjuk ke tempat yang sama di memori*.
            `
            },
            {
                id: 2,
                title: "Menyalin List dengan copy()",
                type: "theory",
                content: `
# Solusi 1: Gunakan copy()

Gunain method **.copy()** buat bikin salinan baru dari list.

\`\`\`python
a = [1, 2, 3]
b = a.copy()

b.append(4)
print("a:", a)
print("b:", b)
\`\`\`

Output:
\`\`\`
a: [1, 2, 3]
b: [1, 2, 3, 4]
\`\`\`

💡 Sekarang \`a\` dan \`b\` udah beda list di memori.
            `
            },
            {
                id: 3,
                title: "Menyalin List dengan Slicing",
                type: "theory",
                content: `
# Solusi 2: Gunakan Slicing [:]

Trik klasik Python buat nyalin list:  
Gunakan slicing dari awal sampai akhir.

\`\`\`python
a = [10, 20, 30]
b = a[:]  # salinan penuh

b.append(40)
print("a:", a)
print("b:", b)
\`\`\`

Output:
\`\`\`
a: [10, 20, 30]
b: [10, 20, 30, 40]
\`\`\`

Cara ini sama efektifnya kayak \`.copy()\`.
            `
            },
            {
                id: 4,
                title: "Perbedaan Shallow Copy vs Deep Copy",
                type: "theory",
                content: `
# Shallow Copy vs Deep Copy

Kalau list lo **cuma berisi angka/string**, semua aman.  
Tapi kalau isinya **list di dalam list (nested list)**,  
copy biasa (shallow) **masih nyambung ke list dalamnya**.

\`\`\`python
import copy

a = [[1, 2], [3, 4]]
b = a.copy()       # shallow copy
c = copy.deepcopy(a)  # deep copy

b[0][0] = 99
print("a:", a)
print("b:", b)
print("c:", c)
\`\`\`

Output:
\`\`\`
a: [[99, 2], [3, 4]]
b: [[99, 2], [3, 4]]
c: [[1, 2], [3, 4]]
\`\`\`

➡️ Jadi, kalau lo mau **copy total sampai ke isi dalamnya**,  
pakai **deepcopy()** dari modul \`copy\`.
            `
            },
            {
                id: 5,
                title: "Latihan Copy List",
                type: "practice",
                content: `
# Latihan: Copy List

1. Buat list berisi [1, 2, 3, 4, 5]
2. Salin pakai tanda "=" → ubah list kedua, cek apa list pertama ikut berubah?
3. Salin pakai .copy() → ubah list kedua, pastikan list pertama tetap.
4. Coba salin nested list pakai .copy() dan copy.deepcopy()
5. Tulis kesimpulan lo sendiri: apa bedanya shallow dan deep copy?

💡 Hint:
Gunakan print() buat bandingin hasil tiap langkah.
            `,
                codeExample: `
import copy

# List dasar
angka = [1, 2, 3, 4, 5]
bayangan = angka   # bukan copy asli
bayangan.append(6)
print("1. Pakai '=' :", angka)

# Copy pakai .copy()
angka2 = [10, 20, 30]
copy_beneran = angka2.copy()
copy_beneran.append(40)
print("2. Pakai copy() :", angka2, copy_beneran)

# Nested list test
nested = [[1, 2], [3, 4]]
shallow = nested.copy()
deep = copy.deepcopy(nested)

shallow[0][0] = 99
print("3. Shallow Copy:", nested)
print("4. Deep Copy:", deep)
            `,
                expectedOutput: `
1. Pakai '=' : [1, 2, 3, 4, 5, 6]
2. Pakai copy() : [10, 20, 30] [10, 20, 30, 40]
3. Shallow Copy: [[99, 2], [3, 4]]
4. Deep Copy: [[1, 2], [3, 4]]
            `
            }
        ]
    },
    { // 33
        id: 33,
        title: "Nested List (List Bersarang)",
        description: "List di dalam list — kayak kotak di dalam kotak. Konsep ini bikin lo bisa nyimpen data lebih kompleks, misalnya tabel, grid, atau data 2 dimensi.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 5,
        progress: 0,
        image: "🧱",
        topics: [
            "Konsep Nested List",
            "Akses Elemen di Dalam List Bersarang",
            "Loop di Nested List",
            "Modifikasi Data di Nested List",
            "Latihan Nested List"
        ],
        color: "#EAB308",
        content: [
            {
                id: 1,
                title: "Konsep Nested List",
                type: "theory",
                content: `
# Apa itu Nested List?

**Nested List** = List yang berisi list lain.  
Ibaratnya, lo punya *kotak besar* (list utama), dan di dalamnya ada beberapa *kotak kecil* (list di dalam).

Contoh:
\`\`\`python
data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
\`\`\`

Kalau lo print:
\`\`\`python
print(data)
\`\`\`

Output:
\`\`\`
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
\`\`\`

💡 Ini mirip **tabel 3x3** — baris dan kolom.
            `
            },
            {
                id: 2,
                title: "Akses Elemen di Dalam List Bersarang",
                type: "theory",
                content: `
# Cara Akses Data di Nested List

Gunakan **dua indeks**:
- Indeks pertama → pilih list utama (baris)
- Indeks kedua → pilih elemen di dalam list itu (kolom)

\`\`\`python
data = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

print(data[0])     # [10, 20, 30]
print(data[1][2])  # 60
print(data[2][0])  # 70
\`\`\`

💡 \`data[1][2]\` artinya: ambil baris ke-2, lalu kolom ke-3.
            `
            },
            {
                id: 3,
                title: "Loop di Nested List",
                type: "theory",
                content: `
# Looping di Dalam Nested List

Kita bisa pakai **loop bersarang (nested loop)** buat baca semua datanya.

\`\`\`python
data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for baris in data:
    for kolom in baris:
        print(kolom, end=" ")
    print()  # biar tiap baris turun
\`\`\`

Output:
\`\`\`
1 2 3
4 5 6
7 8 9
\`\`\`

➡️ Ini berguna banget buat *tabel, game grid, atau matriks data.*
            `
            },
            {
                id: 4,
                title: "Modifikasi Data di Nested List",
                type: "theory",
                content: `
# Modifikasi Elemen di Nested List

Kita bisa ubah data langsung dengan indeks ganda.

\`\`\`python
data = [
    [1, 2, 3],
    [4, 5, 6]
]

data[1][2] = 99
print(data)
\`\`\`

Output:
\`\`\`
[[1, 2, 3], [4, 5, 99]]
\`\`\`

💡 Bisa juga tambah data baru di baris tertentu:
\`\`\`python
data[0].append(10)
print(data)
# [[1, 2, 3, 10], [4, 5, 99]]
\`\`\`

Atau bahkan nambah list baru:
\`\`\`python
data.append([7, 8, 9])
\`\`\`
            `
            },
            {
                id: 5,
                title: "Latihan Nested List",
                type: "practice",
                content: `
# Latihan: Nested List

1. Buat list 2D berisi nilai siswa:
   \`nilai = [[80, 90, 85], [70, 88, 92], [60, 75, 70]]\`
2. Tampilkan semua nilai tiap siswa per baris.
3. Hitung rata-rata tiap siswa.
4. Ubah nilai pertama siswa ke-2 jadi 100.
5. Tambahkan satu siswa baru dengan nilai [90, 95, 85].

Bonus ⚡:
Coba tampilin data dalam bentuk:
\`\`\`
Siswa 1: 80, 90, 85
Siswa 2: 100, 88, 92
Siswa 3: 60, 75, 70
Siswa 4: 90, 95, 85
\`\`\`
            `,
                codeExample: `
nilai = [
    [80, 90, 85],
    [70, 88, 92],
    [60, 75, 70]
]

# 1. Tampilkan nilai tiap siswa
for i, siswa in enumerate(nilai):
    print(f"Siswa {i+1}: ", end="")
    for n in siswa:
        print(n, end=" ")
    print()

# 2. Hitung rata-rata
for i, siswa in enumerate(nilai):
    rata = sum(siswa) / len(siswa)
    print(f"Rata-rata Siswa {i+1}: {rata}")

# 3. Ubah nilai
nilai[1][0] = 100

# 4. Tambah siswa baru
nilai.append([90, 95, 85])

print("\\nData akhir:", nilai)
            `,
                expectedOutput: `
Siswa 1: 80 90 85
Siswa 2: 70 88 92
Siswa 3: 60 75 70
Rata-rata Siswa 1: 85.0
Rata-rata Siswa 2: 83.3333
Rata-rata Siswa 3: 68.3333

Data akhir: [[80, 90, 85], [100, 88, 92], [60, 75, 70], [90, 95, 85]]
            `
            }
        ]
    },
    { // 34
        id: 34,
        title: "Deep Copy Nested List",
        description: "Saat list lo punya list di dalamnya, copy biasa nggak cukup. Deep copy bikin salinan total supaya data asli tetap aman.",
        level: "Pemula-Menengah",
        duration: "1 jam",
        lessons: 4,
        progress: 0,
        image: "🗂️",
        topics: [
            "Masalah Shallow Copy di Nested List",
            "Gunakan copy.deepcopy()",
            "Modifikasi Deep Copy",
            "Latihan Deep Copy"
        ],
        color: "#F472B6",
        content: [
            {
                id: 1,
                title: "Masalah Shallow Copy di Nested List",
                type: "theory",
                content: `
# Shallow Copy Tidak Cukup

Kalau lo punya nested list dan pakai copy() atau slicing,  
list luar bakal terpisah, tapi list di dalam **masih nyambung ke list asli**.

\`\`\`python
nested = [[1, 2], [3, 4]]
shallow = nested.copy()

shallow[0][0] = 99
print("Original:", nested)
print("Shallow Copy:", shallow)
\`\`\`

Output:
\`\`\`
Original: [[99, 2], [3, 4]]
Shallow Copy: [[99, 2], [3, 4]]
\`\`\`

➡️ Perubahan di shallow copy bikin list asli ikut berubah.
            `
            },
            {
                id: 2,
                title: "Gunakan copy.deepcopy()",
                type: "theory",
                content: `
# Solusi: deepcopy()

Python punya modul \`copy\` dengan fungsi \`deepcopy()\`  
untuk bikin salinan total dari nested list.

\`\`\`python
import copy

nested = [[1, 2], [3, 4]]
deep = copy.deepcopy(nested)

deep[0][0] = 99
print("Original:", nested)
print("Deep Copy:", deep)
\`\`\`

Output:
\`\`\`
Original: [[1, 2], [3, 4]]
Deep Copy: [[99, 2], [3, 4]]
\`\`\`

✅ Sekarang list asli tetap aman meskipun salinan diubah.
            `
            },
            {
                id: 3,
                title: "Modifikasi Deep Copy",
                type: "theory",
                content: `
# Modifikasi Deep Copy

Kamu bisa bebas ngubah data di deep copy tanpa takut ngubah data asli:

\`\`\`python
import copy

data_asli = [[10, 20], [30, 40]]
salinan = copy.deepcopy(data_asli)

# ubah nilai di salinan
salinan[1][1] = 99

print("Data Asli:", data_asli)
print("Salinan:", salinan)
\`\`\`

Output:
\`\`\`
Data Asli: [[10, 20], [30, 40]]
Salinan: [[10, 20], [30, 99]]
\`\`\`
            `
            },
            {
                id: 4,
                title: "Latihan Deep Copy Nested List",
                type: "practice",
                content: `
# Latihan

1. Buat nested list berisi nilai matriks 2x3:
   \`matriks = [[1, 2, 3], [4, 5, 6]]\`
2. Buat shallow copy dan ubah elemen [0][0] → lihat pengaruhnya ke list asli.
3. Buat deep copy dan ubah elemen [1][2] → pastikan list asli tidak berubah.
4. Tambahkan baris baru di deep copy.
5. Tulis kesimpulan: kapan pakai shallow copy, kapan pakai deep copy.
            `,
                codeExample: `
import copy

matriks = [[1, 2, 3], [4, 5, 6]]

# Shallow copy
shallow = matriks.copy()
shallow[0][0] = 99
print("Shallow Copy:", shallow)
print("Original:", matriks)

# Deep copy
deep = copy.deepcopy(matriks)
deep[1][2] = 88
print("Deep Copy:", deep)
print("Original:", matriks)

# Tambah baris baru di deep copy
deep.append([7, 8, 9])
print("Deep Copy setelah tambah baris:", deep)
            `,
                expectedOutput: `
Shallow Copy: [[99, 2, 3], [4, 5, 6]]
Original: [[99, 2, 3], [4, 5, 6]]
Deep Copy: [[99, 2, 3], [4, 5, 88]]
Original: [[99, 2, 3], [4, 5, 6]]
Deep Copy setelah tambah baris: [[99, 2, 3], [4, 5, 88], [7, 8, 9]]
            `
            }
        ]
    },
    { // 35
        id: 35,
        title: "Looping List dan Enumerate",
        description: "Pelajari cara looping list di Python, termasuk cara pakai enumerate() buat dapetin index dan value sekaligus. Sangat berguna untuk manipulasi list dan tracking posisi elemen.",
        level: "Pemula-Menengah",
        duration: "1 jam",
        lessons: 5,
        progress: 0,
        image: "🔄",
        topics: [
            "Loop Dasar List",
            "Looping dengan For",
            "Looping dengan While",
            "Menggunakan enumerate()",
            "Latihan Looping List"
        ],
        color: "#22D3EE",
        content: [
            {
                id: 1,
                title: "Loop Dasar List",
                type: "theory",
                content: `
# Looping Dasar List

Kita bisa looping list pakai for loop:

\`\`\`python
buah = ["apel", "jeruk", "pisang"]

for b in buah:
    print(b)
\`\`\`

Output:
\`\`\`
apel
jeruk
pisang
\`\`\`

➡️ Looping ini cuma ambil **value** tiap elemen.
            `
            },
            {
                id: 2,
                title: "Looping dengan For & While",
                type: "theory",
                content: `
# Looping For dan While

Selain for, kita juga bisa pakai while loop:

\`\`\`python
angka = [10, 20, 30]
i = 0
while i < len(angka):
    print(angka[i])
    i += 1
\`\`\`

Output:
\`\`\`
10
20
30
\`\`\`

💡 Gunakan while kalau lo butuh kondisi loop yang lebih fleksibel.
            `
            },
            {
                id: 3,
                title: "Menggunakan enumerate()",
                type: "theory",
                content: `
# enumerate()

Kadang kita butuh **index dan value** sekaligus. Gunakan enumerate():

\`\`\`python
buah = ["apel", "jeruk", "pisang"]

for idx, b in enumerate(buah):
    print(f"{idx+1}. {b}")
\`\`\`

Output:
\`\`\`
1. apel
2. jeruk
3. pisang
\`\`\`

💡 \`enumerate()\` sangat membantu buat tracking posisi elemen dalam list.
            `
            },
            {
                id: 4,
                title: "Looping List Lanjutan",
                type: "theory",
                content: `
# Tips Looping

1. Bisa juga mulai index dari angka lain:
\`\`\`python
for idx, b in enumerate(buah, start=100):
    print(idx, b)
\`\`\`

Output:
\`\`\`
100 apel
101 jeruk
102 pisang
\`\`\`

2. Bisa dipakai di nested list juga:
\`\`\`python
matrix = [[1, 2], [3, 4]]
for i, row in enumerate(matrix):
    for j, val in enumerate(row):
        print(f"matrix[{i}][{j}] = {val}")
\`\`\`
            `
            },
            {
                id: 5,
                title: "Latihan Looping List & Enumerate",
                type: "practice",
                content: `
# Latihan

1. Buat list nama buah: ["apel", "jeruk", "pisang", "mangga"]
2. Loop list dan tampilkan tiap elemen.
3. Gunakan enumerate() buat tampilkan index + nama buah dimulai dari 1.
4. Buat list angka [5, 10, 15, 20] → looping pakai while, tampilkan setiap angka.
5. Loop nested list: [[1,2], [3,4]] dan print posisi + nilainya.
            `,
                codeExample: `
# Looping list pakai for
buah = ["apel", "jeruk", "pisang", "mangga"]
for b in buah:
    print(b)

# Looping list pakai enumerate
for idx, b in enumerate(buah, start=1):
    print(f"{idx}. {b}")

# Looping pakai while
angka = [5, 10, 15, 20]
i = 0
while i < len(angka):
    print(angka[i])
    i += 1

# Looping nested list
matrix = [[1,2], [3,4]]
for i, row in enumerate(matrix):
    for j, val in enumerate(row):
        print(f"matrix[{i}][{j}] = {val}")
            `,
                expectedOutput: `
apel
jeruk
pisang
mangga
1. apel
2. jeruk
3. pisang
4. mangga
5
10
15
20
matrix[0][0] = 1
matrix[0][1] = 2
matrix[1][0] = 3
matrix[1][1] = 4
            `
            }
        ]
    },
    { // 36
        id: 36,
        title: "Latihan List",
        description: "Latihan praktis untuk mengasah kemampuan manipulasi list. Cocok buat penguatan materi list sebelum lanjut ke List Comprehension.",
        level: "Menengah",
        duration: "1.5 jam",
        lessons: 1,
        progress: 0,
        image: "📝",
        topics: [
            "Latihan Akses & Modifikasi List",
            "Latihan Nested List",
            "Latihan Copy List",
            "Latihan Looping & Enumerate",
            "Latihan Kombinasi List"
        ],
        color: "#F97316",
        content: [
            {
                id: 1,
                title: "Latihan List Gabungan",
                type: "practice",
                content: `
# Latihan Praktik List

Coba selesaikan soal-soal berikut untuk menguatkan pemahamanmu:

1. Buat list berisi 5 buah nama temanmu.  
   - Tampilkan nama pertama dan terakhir.  
   - Ubah nama teman ke-2 menjadi nama baru.  

2. Buat nested list berisi 3x3 angka (1-9).  
   - Tampilkan semua elemen per baris.  
   - Ubah angka di tengah menjadi 99.  

3. Buat shallow copy dari nested list tadi → ubah elemen pertama → cek pengaruh ke list asli.  
   Buat deep copy → ubah elemen terakhir → pastikan list asli tetap.  

4. Loop list nama teman pakai enumerate → tampilkan nomor + nama.  

5. Tambahkan 1 teman baru di list → hapus teman ke-2 → cetak list akhir.  

6. Loop nested list → hitung jumlah semua angka.  

7. Bonus: Buat list baru berisi hasil perkalian angka nested list dengan 2.
            `,
                codeExample: `
import copy

# 1. List nama teman
teman = ["Ali", "Budi", "Citra", "Dina", "Eka"]
print("Nama pertama:", teman[0])
print("Nama terakhir:", teman[-1])
teman[1] = "Bahar"

# 2. Nested list 3x3
matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for row in matrix:
    print(row)

matrix[1][1] = 99  # ubah angka tengah

# 3. Shallow & deep copy
shallow = matrix.copy()
shallow[0][0] = 100
deep = copy.deepcopy(matrix)
deep[2][2] = 999

print("Shallow copy:", shallow)
print("Deep copy:", deep)
print("Original matrix:", matrix)

# 4. Loop enumerate nama teman
for idx, t in enumerate(teman, start=1):
    print(f"{idx}. {t}")

# 5. Tambah & hapus teman
teman.append("Fajar")
teman.pop(1)
print("List akhir teman:", teman)

# 6. Hitung jumlah angka di nested list
total = 0
for row in matrix:
    for num in row:
        total += num
print("Jumlah semua angka:", total)

# 7. List baru hasil perkalian nested list * 2
hasil = [[num*2 for num in row] for row in matrix]
print("Hasil perkalian:", hasil)
            `,
                expectedOutput: `
Nama pertama: Ali
Nama terakhir: Eka
[1, 2, 3]
[4, 99, 6]
[7, 8, 9]
Shallow copy: [[100, 2, 3], [4, 99, 6], [7, 8, 9]]
Deep copy: [[1, 2, 3], [4, 99, 6], [7, 8, 999]]
Original matrix: [[1, 2, 3], [4, 99, 6], [7, 8, 9]]
1. Ali
2. Bahar
3. Citra
4. Dina
5. Eka
List akhir teman: ['Ali', 'Citra', 'Dina', 'Eka', 'Fajar']
Jumlah semua angka: 140
Hasil perkalian: [[2, 4, 6], [8, 198, 12], [14, 16, 18]]
            `
            }
        ]
    },
    { // 37
        id: 37,
        title: "Tuples dan Set",
        description: "Pelajari tuple (immutable) dan set (unik & tidak berurutan) di Python. Keduanya sering dipakai buat data yang berbeda dari list.",
        level: "Menengah",
        duration: "1 jam",
        lessons: 4,
        progress: 0,
        image: "🔹",
        topics: [
            "Apa itu Tuple?",
            "Akses & Operasi Tuple",
            "Apa itu Set?",
            "Operasi Set",
            "Latihan Tuple & Set"
        ],
        color: "#8B5CF6",
        content: [
            {
                id: 1,
                title: "Apa itu Tuple?",
                type: "theory",
                content: `
# Tuple

Tuple mirip list, tapi **immutable** → setelah dibuat, elemen tidak bisa diubah, ditambah, atau dihapus.

\`\`\`python
data = (1, 2, 3, "Python")
print(data)
print(type(data))
\`\`\`

Output:
\`\`\`
(1, 2, 3, 'Python')
<class 'tuple'>
\`\`\`

💡 Cocok buat data yang **tetap** seperti koordinat, konfigurasi, atau constants.
            `
            },
            {
                id: 2,
                title: "Akses & Operasi Tuple",
                type: "theory",
                content: `
# Akses Tuple

- Menggunakan indeks:
\`\`\`python
data = (10, 20, 30)
print(data[0])  # 10
print(data[-1]) # 30
\`\`\`

- Bisa slicing:
\`\`\`python
print(data[0:2]) # (10, 20)
\`\`\`

- Karena immutable, operasi seperti append(), remove() → ❌ error.  
- Bisa di-loop pakai for:
\`\`\`python
for d in data:
    print(d)
\`\`\`
            `
            },
            {
                id: 3,
                title: "Apa itu Set?",
                type: "theory",
                content: `
# Set

Set = kumpulan elemen **unik** dan **tidak berurutan**.  
Mirip list tapi:
- Tidak ada duplikat
- Tidak bisa diakses pakai indeks

\`\`\`python
angka = {1, 2, 2, 3, 4}
print(angka)
\`\`\`

Output:
\`\`\`
{1, 2, 3, 4}
\`\`\`

💡 Cocok buat ngecek anggota (membership), hapus duplikat, atau operasi matematika.
            `
            },
            {
                id: 4,
                title: "Operasi Set",
                type: "theory",
                content: `
# Operasi Set

\`\`\`python
a = {1, 2, 3}
b = {3, 4, 5}

print(a.union(b))      # gabung: {1, 2, 3, 4, 5}
print(a.intersection(b)) # irisan: {3}
print(a.difference(b))   # beda a-b: {1,2}
print(a.symmetric_difference(b)) # elemen beda: {1,2,4,5}
\`\`\`

- Tambah elemen: \`a.add(10)\`  
- Hapus elemen: \`a.remove(2)\` atau \`a.discard(2)\`
- Loop pakai for tetap bisa
            `
            },
            {
                id: 5,
                title: "Latihan Tuple & Set",
                type: "practice",
                content: `
# Latihan

1. Buat tuple berisi 5 angka → print angka pertama & terakhir.  
2. Loop tuple → tampilkan tiap elemen.  
3. Buat set berisi beberapa angka duplikat → print setnya (hapus duplikat otomatis).  
4. Tambah angka baru ke set → hapus angka tertentu.  
5. Lakukan operasi union & intersection dengan set lain.
            `,
                codeExample: `
# Tuple
angka_tuple = (10, 20, 30, 40, 50)
print("Pertama:", angka_tuple[0])
print("Terakhir:", angka_tuple[-1])
for n in angka_tuple:
    print(n)

# Set
angka_set = {1, 2, 2, 3, 4}
print("Set unik:", angka_set)
angka_set.add(5)
angka_set.remove(2)
print("Set setelah modifikasi:", angka_set)

# Operasi set
a = {1, 2, 3}
b = {3, 4, 5}
print("Union:", a.union(b))
print("Intersection:", a.intersection(b))
            `,
                expectedOutput: `
Pertama: 10
Terakhir: 50
10
20
30
40
50
Set unik: {1, 2, 3, 4}
Set setelah modifikasi: {1, 3, 4, 5}
Union: {1, 2, 3, 4, 5}
Intersection: {3}
            `
            }
        ]
    },
    { // 38
        id: 38,
        title: "Dictionary",
        description: "Pelajari dictionary di Python, struktur data key-value. Sangat berguna untuk menyimpan data terstruktur dan akses cepat berdasarkan kunci.",
        level: "Menengah",
        duration: "1 jam",
        lessons: 5,
        progress: 0,
        image: "📖",
        topics: [
            "Apa itu Dictionary?",
            "Akses & Modifikasi Dictionary",
            "Looping Dictionary",
            "Metode Umum Dictionary",
            "Latihan Dictionary"
        ],
        color: "#22C55E",
        content: [
            {
                id: 1,
                title: "Apa itu Dictionary?",
                type: "theory",
                content: `
# Dictionary

Dictionary = struktur data **key-value**  
- Key = unik  
- Value = bisa apa saja (angka, string, list, dictionary lain)

\`\`\`python
data = {
    "nama": "Zayen",
    "umur": 20,
    "hobi": ["ngoding", "membaca"]
}
print(data)
\`\`\`

Output:
\`\`\`
{'nama': 'Zayen', 'umur': 20, 'hobi': ['ngoding', 'membaca']}
\`\`\`
            `
            },
            {
                id: 2,
                title: "Akses & Modifikasi Dictionary",
                type: "theory",
                content: `
# Akses & Modifikasi

- Akses value pakai key:
\`\`\`python
print(data["nama"])  # Zayen
\`\`\`

- Tambah/ubah key-value:
\`\`\`python
data["umur"] = 21  # ubah
data["kota"] = "Jakarta"  # tambah
\`\`\`

- Hapus key-value:
\`\`\`python
del data["hobi"]
\`\`\`
            `
            },
            {
                id: 3,
                title: "Looping Dictionary",
                type: "theory",
                content: `
# Looping Dictionary

Loop key:
\`\`\`python
for k in data:
    print(k)
\`\`\`

Loop value:
\`\`\`python
for v in data.values():
    print(v)
\`\`\`

Loop key & value:
\`\`\`python
for k, v in data.items():
    print(k, ":", v)
\`\`\`
            `
            },
            {
                id: 4,
                title: "Metode Umum Dictionary",
                type: "theory",
                content: `
# Metode Umum

- data.keys() → list semua key  
- data.values() → list semua value  
- data.items() → list tuple (key, value)  
- data.get("key") → ambil value tanpa error  
- data.pop("key") → hapus key dan ambil value  
- data.update({...}) → gabung dictionary
            `
            },
            {
                id: 5,
                title: "Latihan Dictionary",
                type: "practice",
                content: `
# Latihan

1. Buat dictionary berisi info 3 teman (nama, umur, hobi).  
2. Tambah key 'kota' untuk tiap teman.  
3. Loop dictionary → print key & value.  
4. Hapus key 'hobi' → cek dictionary akhir.  
5. Gunakan .get() untuk ambil value key yang ada & yang tidak ada.
            `,
                codeExample: `
teman = {
    "Ali": {"umur": 20, "hobi": ["bola", "game"]},
    "Budi": {"umur": 21, "hobi": ["musik", "ngoding"]},
    "Citra": {"umur": 19, "hobi": ["membaca", "lari"]}
}

# Tambah key kota
teman["Ali"]["kota"] = "Jakarta"
teman["Budi"]["kota"] = "Bandung"
teman["Citra"]["kota"] = "Surabaya"

# Loop dictionary
for nama, info in teman.items():
    print(nama)
    for key, value in info.items():
        print(f"  {key}: {value}")

# Hapus key hobi
for info in teman.values():
    info.pop("hobi", None)

# Cek dictionary akhir
print("Dictionary akhir:", teman)

# .get()
print("Ali hobi:", teman.get("Ali", {}).get("hobi"))
print("Budi umur:", teman.get("Budi", {}).get("umur"))
            `,
                expectedOutput: `
Ali
  umur: 20
  hobi: ['bola', 'game']
  kota: Jakarta
Budi
  umur: 21
  hobi: ['musik', 'ngoding']
  kota: Bandung
Citra
  umur: 19
  hobi: ['membaca', 'lari']
  kota: Surabaya
Dictionary akhir: {'Ali': {'umur': 20, 'kota': 'Jakarta'}, 'Budi': {'umur': 21, 'kota': 'Bandung'}, 'Citra': {'umur': 19, 'kota': 'Surabaya'}}
Ali hobi: None
Budi umur: 21
            `
            }
        ]
    },
    { // 39
        id: 39,
        title: "Operasi Dictionary",
        description: "Pelajari operasi lanjutan pada dictionary: akses, update, hapus, cek key, gabung dictionary, dan manipulasi nested dictionary.",
        level: "Menengah-Tinggi",
        duration: "1.5 jam",
        lessons: 5,
        progress: 0,
        image: "🗄️",
        topics: [
            "Akses & Update Key-Value",
            "Cek Key di Dictionary",
            "Hapus Key",
            "Gabung & Update Dictionary",
            "Operasi di Nested Dictionary",
            "Latihan Operasi Dictionary"
        ],
        color: "#FBBF24",
        content: [
            {
                id: 1,
                title: "Akses & Update Key-Value",
                type: "theory",
                content: `
# Akses & Update Key-Value

- Akses value:
\`\`\`python
data = {"nama": "Zayen", "umur": 20}
print(data["nama"])
\`\`\`

- Update value:
\`\`\`python
data["umur"] = 21
print(data)
\`\`\`

- Tambah key baru:
\`\`\`python
data["kota"] = "Jakarta"
print(data)
\`\`\`
            `
            },
            {
                id: 2,
                title: "Cek Key di Dictionary",
                type: "theory",
                content: `
# Cek Key

- Gunakan 'in' untuk cek key:
\`\`\`python
if "nama" in data:
    print("Key nama ada")
\`\`\`

- Gunakan get() untuk akses aman:
\`\`\`python
print(data.get("hobi", "Tidak ada hobi"))
\`\`\`
            `
            },
            {
                id: 3,
                title: "Hapus Key",
                type: "theory",
                content: `
# Hapus Key

- pakai del:
\`\`\`python
del data["kota"]
\`\`\`

- pakai pop() untuk ambil value sekaligus hapus:
\`\`\`python
umur = data.pop("umur")
print("Umur dihapus:", umur)
\`\`\`
            `
            },
            {
                id: 4,
                title: "Gabung & Update Dictionary",
                type: "theory",
                content: `
# Gabung Dictionary

- update() → gabung dictionary atau update key existing:
\`\`\`python
data1 = {"a":1, "b":2}
data2 = {"b":3, "c":4}

data1.update(data2)
print(data1)
\`\`\`

Output:
\`\`\`
{'a':1, 'b':3, 'c':4}
\`\`\`
            `
            },
            {
                id: 5,
                title: "Operasi di Nested Dictionary",
                type: "theory",
                content: `
# Nested Dictionary

- Akses nested dictionary:
\`\`\`python
teman = {
    "Ali": {"umur": 20, "kota": "Jakarta"},
    "Budi": {"umur": 21, "kota": "Bandung"}
}

print(teman["Ali"]["kota"])  # Jakarta
\`\`\`

- Update nested dictionary:
\`\`\`python
teman["Ali"]["umur"] = 22
\`\`\`
            `
            },
            {
                id: 6,
                title: "Latihan Operasi Dictionary",
                type: "practice",
                content: `
# Latihan

1. Buat dictionary 3 teman: nama, umur, kota.  
2. Update umur teman pertama.  
3. Tambah key baru 'hobi' ke tiap teman.  
4. Hapus key 'kota' teman kedua pakai pop().  
5. Gabung dictionary tambahan {"Dina": {"umur": 19, "kota":"Surabaya"}}  
6. Loop semua teman → print nama + info lengkap.
            `,
                codeExample: `
# Buat dictionary teman
teman = {
    "Ali": {"umur": 20, "kota": "Jakarta"},
    "Budi": {"umur": 21, "kota": "Bandung"},
    "Citra": {"umur": 19, "kota": "Surabaya"}
}

# Update umur teman pertama
teman["Ali"]["umur"] = 22

# Tambah key hobi
teman["Ali"]["hobi"] = ["bola", "ngoding"]
teman["Budi"]["hobi"] = ["musik"]
teman["Citra"]["hobi"] = ["membaca"]

# Hapus key kota teman kedua
hapus_kota = teman["Budi"].pop("kota", None)

# Gabung dictionary tambahan
teman_baru = {"Dina": {"umur": 19, "kota": "Surabaya"}}
teman.update(teman_baru)

# Loop semua teman
for nama, info in teman.items():
    print(nama)
    for key, value in info.items():
        print(f"  {key}: {value}")
            `,
                expectedOutput: `
Ali
  umur: 22
  kota: Jakarta
  hobi: ['bola', 'ngoding']
Budi
  umur: 21
  hobi: ['musik']
Citra
  umur: 19
  kota: Surabaya
  hobi: ['membaca']
Dina
  umur: 19
  kota: Surabaya
            `
            }
        ]
    },
    { // 40
        id: 40,
        title: "Looping Dictionary",
        description: "Pelajari cara looping dictionary di Python, termasuk akses key, value, dan kombinasi key-value, serta looping nested dictionary.",
        level: "Menengah",
        duration: "1 jam",
        lessons: 4,
        progress: 0,
        image: "🔄",
        topics: [
            "Looping Key",
            "Looping Value",
            "Looping Key & Value",
            "Looping Nested Dictionary",
            "Latihan Looping Dictionary"
        ],
        color: "#10B981",
        content: [
            {
                id: 1,
                title: "Looping Key",
                type: "theory",
                content: `
# Looping Key

Looping dictionary default → key:

\`\`\`python
teman = {"Ali": 20, "Budi": 21, "Citra": 19}

for key in teman:
    print(key)
\`\`\`

Output:
\`\`\`
Ali
Budi
Citra
\`\`\`
            `
            },
            {
                id: 2,
                title: "Looping Value",
                type: "theory",
                content: `
# Looping Value

Gunakan .values() untuk looping value:

\`\`\`python
for umur in teman.values():
    print(umur)
\`\`\`

Output:
\`\`\`
20
21
19
\`\`\`
            `
            },
            {
                id: 3,
                title: "Looping Key & Value",
                type: "theory",
                content: `
# Looping Key & Value

Gunakan .items() untuk looping key & value sekaligus:

\`\`\`python
for key, value in teman.items():
    print(f"{key} berumur {value} tahun")
\`\`\`

Output:
\`\`\`
Ali berumur 20 tahun
Budi berumur 21 tahun
Citra berumur 19 tahun
\`\`\`
            `
            },
            {
                id: 4,
                title: "Looping Nested Dictionary",
                type: "theory",
                content: `
# Looping Nested Dictionary

Jika value adalah dictionary lagi:

\`\`\`python
teman = {
    "Ali": {"umur": 20, "kota": "Jakarta"},
    "Budi": {"umur": 21, "kota": "Bandung"}
}

for nama, info in teman.items():
    print(nama)
    for key, value in info.items():
        print(f"  {key}: {value}")
\`\`\`

Output:
\`\`\`
Ali
  umur: 20
  kota: Jakarta
Budi
  umur: 21
  kota: Bandung
\`\`\`
            `
            },
            {
                id: 5,
                title: "Latihan Looping Dictionary",
                type: "practice",
                content: `
# Latihan

1. Buat dictionary 3 teman: nama, umur, kota.  
2. Loop dictionary → tampilkan semua key.  
3. Loop dictionary → tampilkan semua value.  
4. Loop dictionary → tampilkan key & value.  
5. Loop nested dictionary → print nama teman + info lengkap.
            `,
                codeExample: `
teman = {
    "Ali": {"umur": 20, "kota": "Jakarta"},
    "Budi": {"umur": 21, "kota": "Bandung"},
    "Citra": {"umur": 19, "kota": "Surabaya"}
}

# 2. Loop key
for key in teman:
    print(key)

# 3. Loop value
for value in teman.values():
    print(value)

# 4. Loop key & value
for key, value in teman.items():
    print(f"{key} berumur {value['umur']} dan tinggal di {value['kota']}")

# 5. Nested loop
for nama, info in teman.items():
    print(nama)
    for key, value in info.items():
        print(f"  {key}: {value}")
            `,
                expectedOutput: `
Ali
Budi
Citra
{'umur': 20, 'kota': 'Jakarta'}
{'umur': 21, 'kota': 'Bandung'}
{'umur': 19, 'kota': 'Surabaya'}
Ali berumur 20 dan tinggal di Jakarta
Budi berumur 21 dan tinggal di Bandung
Citra berumur 19 dan tinggal di Surabaya
Ali
  umur: 20
  kota: Jakarta
Budi
  umur: 21
  kota: Bandung
Citra
  umur: 19
  kota: Surabaya
            `
            }
        ]
    }
];

export default lessonCards;