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
- Huruf, angka, underscore (_)
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
- dan lain-lain

Intinya, operator assignment ini kaya shortcut biar kita ga nulis kode kepanjangan.
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
   x += 3
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

8. **\`**=\` (pangkat lalu simpan)**  
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

   (Biasanya dipakai di level menengah, contohnya di pemrosesan data biner).
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
4. Simulasi tabungan: Mulai dengan saldo = 1000, lalu tambah 200, kurangi 150, dan kalikan 2 (bonus). Tampilkan saldo akhir.
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
z *= 3
z **= 2
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
    },

    { // 21
        id: 21,
        title: "IF dan ELSE Statement",
        description: "Belajar dasar percabangan dengan IF dan ELSE untuk pengambilan keputusan dalam program.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "🔀",
        topics: [
            "Konsep Percabangan",
            "IF Statement",
            "ELSE Statement"
        ],
        color: "#E91E63",
        content: [
            {
                id: 1,
                title: "Konsep Percabangan",
                type: "theory",
                content: `
# Konsep Percabangan dalam Pemrograman

**Percabangan** adalah konsep dimana program dapat mengambil keputusan berdasarkan kondisi tertentu.

## Analogi Sehari-hari:
- **JIKA** hujan, **MAKA** bawa payung
- **JIKA** nilai >= 70, **MAKA** lulus
- **JIKA** saldo cukup, **MAKA** bisa tarik uang

## Struktur Dasar:
\`\`\`python
if kondisi:
    # eksekusi kode jika kondisi True
else:
    # eksekusi kode jika kondisi False
\`\`\`

## Operator Perbandingan:
- **==** → sama dengan
- **!=** → tidak sama dengan  
- **>** → lebih besar
- **<** → lebih kecil
- **>=** → lebih besar atau sama
- **<=** → lebih kecil atau sama
            `
            },
            {
                id: 2,
                title: "IF dan ELSE Statement",
                type: "theory",
                content: `
# IF Statement

Digunakan ketika hanya ada satu kondisi yang perlu dicek.

\`\`\`python
umur = 18

if umur >= 17:
    print("Anda sudah bisa membuat KTP")
\`\`\`

# ELSE Statement

Digunakan ketika ada alternatif jika kondisi tidak terpenuhi.

\`\`\`python
umur = 16

if umur >= 17:
    print("Anda sudah bisa membuat KTP")
else:
    print("Anda belum bisa membuat KTP")
\`\`\`

## Contoh Lain:

\`\`\`python
# Cek bilangan genap/ganjil
angka = 7

if angka % 2 == 0:
    print(f"{angka} adalah bilangan genap")
else:
    print(f"{angka} adalah bilangan ganjil")

# Cek nilai
nilai = 85

if nilai >= 70:
    print("Selamat! Anda lulus")
else:
    print("Maaf, Anda harus remedial")
\`\`\`

## Indentation (Indentasi)
Python menggunakan indentasi (spasi/tab) untuk menentukan blok kode:
\`\`\`python
if kondisi:
    ← 4 spasi untuk kode dalam blok if
    perintah1
    perintah2
else:
    ← 4 spasi untuk kode dalam blok else  
    perintah3
    perintah4
\`\`\`
            `,
                codeExample: `# Contoh IF dan ELSE
print("=== CEK UMUR ===")
umur = 20

if umur >= 17:
    print("Anda sudah dewasa")
    print("Bisa membuat KTP")
else:
    print("Anda masih di bawah umur")
    print("Belum bisa membuat KTP")

print("\\n=== CEK BILANGAN ===")
angka = 10

if angka > 0:
    print(f"{angka} adalah bilangan positif")
else:
    print(f"{angka} adalah bilangan negatif atau nol")

print("\\n=== CEK PASSWORD ===")
password_input = "rahasia123"
password_benar = "rahasia123"

if password_input == password_benar:
    print("Login berhasil!")
else:
    print("Password salah!")`,
                expectedOutput: `=== CEK UMUR ===
Anda sudah dewasa
Bisa membuat KTP

=== CEK BILANGAN ===
10 adalah bilangan positif

=== CEK PASSWORD ===
Login berhasil!`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan IF dan ELSE

Kerjakan soal berikut:
1. Cek apakah suatu bilangan positif atau negatif
2. Tentukan apakah seseorang bisa memilih dalam pemilu (minimal 17 tahun)
3. Cek apakah password yang dimasukkan benar
4. Tentukan diskon berdasarkan total belanja
5. Cek status kelulusan berdasarkan nilai
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Cek Bilangan",
                        description: "Cek apakah bilangan 15 positif atau negatif",
                        hint: "Gunakan if angka > 0",
                        solution: `angka = 15
if angka > 0:
    print("Positif")
else:
    print("Negatif atau nol")`
                    },
                    {
                        id: 2,
                        title: "Cek Umur Pemilu",
                        description: "Cek apakah orang berumur 20 tahun bisa memilih",
                        hint: "Minimal umur 17 tahun",
                        solution: `umur = 20
if umur >= 17:
    print("Bisa memilih")
else:
    print("Belum bisa memilih")`
                    },
                    {
                        id: 3,
                        title: "Validasi Password",
                        description: "Cek apakah password 'admin123' sama dengan 'admin123'",
                        hint: "Gunakan operator ==",
                        solution: `password = "admin123"
if password == "admin123":
    print("Password benar")
else:
    print("Password salah")`
                    },
                    {
                        id: 4,
                        title: "Diskon Belanja",
                        description: "Berikan diskon 10% jika total belanja >= 500000",
                        hint: "Hitung total setelah diskon",
                        solution: `total_belanja = 600000
if total_belanja >= 500000:
    diskon = total_belanja * 0.1
    total_bayar = total_belanja - diskon
    print(f"Total bayar setelah diskon: Rp {total_bayar:,}")
else:
    print(f"Total bayar: Rp {total_belanja:,}")`
                    },
                    {
                        id: 5,
                        title: "Status Kelulusan",
                        description: "Tentukan lulus/tidak lulus dengan nilai minimal 70",
                        hint: "Gunakan if nilai >= 70",
                        solution: `nilai = 85
if nilai >= 70:
    print("Lulus")
else:
    print("Tidak lulus")`
                    }
                ]
            }
        ]
    },

    { // 22
        id: 22,
        title: "ELIF Statement",
        description: "Belajar menggunakan ELIF untuk menangani multiple kondisi dalam percabangan.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "🔄",
        topics: [
            "Konsep ELIF",
            "Multiple Conditions",
            "Nested IF"
        ],
        color: "#9C27B0",
        content: [
            {
                id: 1,
                title: "Konsep ELIF",
                type: "theory",
                content: `
# ELIF Statement

**ELIF** (else if) digunakan ketika ada lebih dari dua kondisi yang perlu dicek.

## Struktur:
\`\`\`python
if kondisi1:
    # eksekusi jika kondisi1 True
elif kondisi2:
    # eksekusi jika kondisi2 True  
elif kondisi3:
    # eksekusi jika kondisi3 True
else:
    # eksekusi jika semua kondisi False
\`\`\`

## Contoh Sederhana:
\`\`\`python
nilai = 85

if nilai >= 90:
    print("Grade: A")
elif nilai >= 80:
    print("Grade: B") 
elif nilai >= 70:
    print("Grade: C")
elif nilai >= 60:
    print("Grade: D")
else:
    print("Grade: E")
\`\`\`

**Catatan:** Python akan mengecek kondisi secara berurutan dan berhenti pada kondisi pertama yang True.
            `
            },
            {
                id: 2,
                title: "Multiple Conditions",
                type: "theory",
                content: `
# Multiple Conditions dengan ELIF

## 1. Kategori Umur
\`\`\`python
umur = 25

if umur < 5:
    print("Balita")
elif umur < 12:
    print("Anak-anak")
elif umur < 18:
    print("Remaja")
elif umur < 40:
    print("Dewasa")
else:
    print("Lansia")
\`\`\`

## 2. Diskon Berdasarkan Member
\`\`\`python
tipe_member = "gold"
total_belanja = 800000

if tipe_member == "premium":
    diskon = 0.2
elif tipe_member == "gold":
    diskon = 0.15
elif tipe_member == "silver":
    diskon = 0.1
else:
    diskon = 0.05

total_bayar = total_belanja * (1 - diskon)
print(f"Total bayar: Rp {total_bayar:,.0f}")
\`\`\`

## 3. Kombinasi Kondisi dengan AND/OR
\`\`\`python
# Operator Logika
# AND → kedua kondisi harus True
# OR → salah satu kondisi True

nilai = 85
kehadiran = 80

if nilai >= 70 and kehadiran >= 75:
    print("Lulus")
elif nilai >= 70 and kehadiran < 75:
    print("Lulus dengan catatan")
else:
    print("Tidak lulus")

# Contoh OR
hari = "sabtu"
if hari == "sabtu" or hari == "minggu":
    print("Hari libur")
else:
    print("Hari kerja")
\`\`\`

## 4. Nested IF (IF Bersarang)
\`\`\`python
jenis_kelamin = "pria"
umur = 25

if jenis_kelamin == "pria":
    if umur >= 17:
        print("Wajib memiliki KTP")
    else:
        print("Belum wajib KTP")
else:
    if umur >= 17:
        print("Wajib memiliki KTP") 
    else:
        print("Belum wajib KTP")
\`\`\`
            `,
                codeExample: `# Contoh ELIF Statement
print("=== KATEGORI NILAI ===")
nilai = 78

if nilai >= 90:
    grade = "A"
    predikat = "Sangat Baik"
elif nilai >= 80:
    grade = "B"
    predikat = "Baik"
elif nilai >= 70:
    grade = "C" 
    predikat = "Cukup"
elif nilai >= 60:
    grade = "D"
    predikat = "Kurang"
else:
    grade = "E"
    predikat = "Sangat Kurang"

print(f"Nilai: {nilai}")
print(f"Grade: {grade}")
print(f"Predikat: {predikat}")

print("\\n=== STATUS CUACA ===")
suhu = 28
hujan = True

if suhu > 30 and not hujan:
    print("Cuaca: Panas")
elif suhu > 25 and not hujan:
    print("Cuaca: Cerah")
elif hujan:
    print("Cuaca: Hujan")
else:
    print("Cuaca: Normal")

print("\\n=== ZODIAC SIMPLE ===")
bulan = 3
hari = 15

if (bulan == 3 and hari >= 21) or (bulan == 4 and hari <= 19):
    zodiak = "Aries"
elif (bulan == 4 and hari >= 20) or (bulan == 5 and hari <= 20):
    zodiak = "Taurus"
else:
    zodiak = "Bukan Aries atau Taurus"

print(f"Zodiak: {zodiak}")`,
                expectedOutput: `=== KATEGORI NILAI ===
Nilai: 78
Grade: C
Predikat: Cukup

=== STATUS CUACA ===
Cuaca: Hujan

=== ZODIAC SIMPLE ===
Zodiak: Aries`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan ELIF Statement

Kerjakan soal berikut:
1. Tentukan grade berdasarkan nilai (A, B, C, D, E)
2. Kategorikan umur (Balita, Anak, Remaja, Dewasa, Lansia)
3. Hitung diskon berdasarkan tipe member dan total belanja
4. Tentukan hari kerja atau libur
5. Cek kelayakan kredit berdasarkan usia dan penghasilan
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Kategori Nilai",
                        description: "Tentukan grade: A(90-100), B(80-89), C(70-79), D(60-69), E(<60)",
                        hint: "Gunakan elif dengan range nilai",
                        solution: `nilai = 85
if nilai >= 90:
    grade = "A"
elif nilai >= 80:
    grade = "B"
elif nilai >= 70:
    grade = "C"
elif nilai >= 60:
    grade = "D"
else:
    grade = "E"
print(f"Grade: {grade}")`
                    },
                    {
                        id: 2,
                        title: "Kategori Umur",
                        description: "Kategorikan: Balita(<5), Anak(5-12), Remaja(13-17), Dewasa(18-40), Lansia(>40)",
                        hint: "Gunakan elif dengan batas umur",
                        solution: `umur = 25
if umur < 5:
    kategori = "Balita"
elif umur < 13:
    kategori = "Anak"
elif umur < 18:
    kategori = "Remaja"
elif umur < 41:
    kategori = "Dewasa"
else:
    kategori = "Lansia"
print(f"Kategori: {kategori}")`
                    },
                    {
                        id: 3,
                        title: "Diskon Member",
                        description: "Hitung diskon: Premium(20%), Gold(15%), Silver(10%), Regular(5%)",
                        hint: "Gunakan elif untuk tipe member",
                        solution: `tipe_member = "gold"
total_belanja = 1000000

if tipe_member == "premium":
    diskon = 0.2
elif tipe_member == "gold":
    diskon = 0.15
elif tipe_member == "silver":
    diskon = 0.1
else:
    diskon = 0.05

total_bayar = total_belanja * (1 - diskon)
print(f"Total bayar: Rp {total_bayar:,}")`
                    },
                    {
                        id: 4,
                        title: "Hari Kerja/Libur",
                        description: "Tentukan apakah 'senin' adalah hari kerja atau libur",
                        hint: "Hari kerja: senin-jumat, libur: sabtu-minggu",
                        solution: `hari = "senin"
if hari in ["senin", "selasa", "rabu", "kamis", "jumat"]:
    status = "Hari kerja"
else:
    status = "Hari libur"
print(status)`
                    },
                    {
                        id: 5,
                        title: "Kelayakan Kredit",
                        description: "Cek kelayakan: usia >=21 dan penghasilan >=5000000",
                        hint: "Gunakan operator AND",
                        solution: `usia = 25
penghasilan = 6000000

if usia >= 21 and penghasilan >= 5000000:
    status = "Layak"
else:
    status = "Tidak layak"
print(f"Status kredit: {status}")`
                    }
                ]
            }
        ]
    },

    { // 23
        id: 23,
        title: "Latihan Percabangan - Kalkulator Sederhana",
        description: "Praktik membuat kalkulator sederhana dengan menggunakan percabangan IF, ELIF, ELSE.",
        level: "Pemula",
        duration: "2 jam",
        lessons: 3,
        progress: 0,
        image: "🧮",
        topics: [
            "Kalkulator Dasar",
            "Validasi Input",
            "Error Handling"
        ],
        color: "#FF5722",
        content: [
            {
                id: 1,
                title: "Kalkulator Dasar",
                type: "theory",
                content: `
# Membuat Kalkulator Sederhana

Kita akan membuat kalkulator yang dapat melakukan operasi:
- Penambahan (+)
- Pengurangan (-) 
- Perkalian (*)
- Pembagian (/)

## Rencana Program:
1. Minta input dua bilangan dari user
2. Minta input operator (+, -, *, /)
3. Lakukan operasi berdasarkan operator
4. Tampilkan hasil

## Contoh Flow:
\`\`\`
Masukkan bilangan pertama: 10
Masukkan bilangan kedua: 5
Masukkan operator (+, -, *, /): +
Hasil: 10 + 5 = 15
\`\`\`
            `
            },
            {
                id: 2,
                title: "Implementasi Kalkulator",
                type: "theory",
                content: `
# Implementasi Kalkulator dengan Percabangan

## Versi Dasar:
\`\`\`python
# Input dari user
angka1 = float(input("Masukkan bilangan pertama: "))
angka2 = float(input("Masukkan bilangan kedua: "))
operator = input("Masukkan operator (+, -, *, /): ")

# Proses perhitungan
if operator == "+":
    hasil = angka1 + angka2
elif operator == "-":
    hasil = angka1 - angka2
elif operator == "*":
    hasil = angka1 * angka2
elif operator == "/":
    hasil = angka1 / angka2
else:
    hasil = "Operator tidak valid!"

# Output hasil
print(f"Hasil: {angka1} {operator} {angka2} = {hasil}")
\`\`\`

## Dengan Validasi Pembagian 0:
\`\`\`python
if operator == "/":
    if angka2 == 0:
        hasil = "Error: Tidak bisa dibagi 0!"
    else:
        hasil = angka1 / angka2
\`\`\`

## Kalkulator dengan Menu:
\`\`\`python
print("=== KALKULATOR SEDERHANA ===")
print("1. Penambahan (+)")
print("2. Pengurangan (-)")
print("3. Perkalian (*)")
print("4. Pembagian (/)")

pilihan = input("Pilih operasi (1-4): ")

if pilihan == "1":
    operator = "+"
elif pilihan == "2":
    operator = "-" 
elif pilihan == "3":
    operator = "*"
elif pilihan == "4":
    operator = "/"
else:
    print("Pilihan tidak valid!")
    exit()

# Lanjutkan dengan input bilangan dan perhitungan
\`\`\`
            `,
                codeExample: `# Kalkulator Lengkap dengan Validasi
print("=== KALKULATOR SEDERHANA ===")

try:
    # Input dengan validasi
    angka1 = float(input("Masukkan bilangan pertama: "))
    angka2 = float(input("Masukkan bilangan kedua: "))
    operator = input("Masukkan operator (+, -, *, /): ")

    # Proses perhitungan
    if operator == "+":
        hasil = angka1 + angka2
        print(f"Hasil: {angka1} {operator} {angka2} = {hasil}")
        
    elif operator == "-":
        hasil = angka1 - angka2
        print(f"Hasil: {angka1} {operator} {angka2} = {hasil}")
        
    elif operator == "*":
        hasil = angka1 * angka2
        print(f"Hasil: {angka1} {operator} {angka2} = {hasil}")
        
    elif operator == "/":
        if angka2 == 0:
            print("Error: Tidak bisa dibagi dengan 0!")
        else:
            hasil = angka1 / angka2
            print(f"Hasil: {angka1} {operator} {angka2} = {hasil}")
            
    else:
        print("Operator tidak dikenali! Gunakan +, -, *, atau /")

except ValueError:
    print("Error: Masukkan bilangan yang valid!")

print("\\n=== KALKULATOR DENGAN MENU ===")
print("1. Tambah")
print("2. Kurang") 
print("3. Kali")
print("4. Bagi")

pilihan = input("Pilih operasi (1-4): ")

if pilihan in ["1", "2", "3", "4"]:
    a = float(input("Bilangan pertama: "))
    b = float(input("Bilangan kedua: "))
    
    if pilihan == "1":
        print(f"{a} + {b} = {a + b}")
    elif pilihan == "2":
        print(f"{a} - {b} = {a - b}")
    elif pilihan == "3":
        print(f"{a} × {b} = {a * b}")
    elif pilihan == "4":
        if b == 0:
            print("Tidak bisa dibagi 0!")
        else:
            print(f"{a} ÷ {b} = {a / b}")
else:
    print("Pilihan tidak valid!")`,
                expectedOutput: `=== KALKULATOR SEDERHANA ===
Masukkan bilangan pertama: 10
Masukkan bilangan kedua: 5
Masukkan operator (+, -, *, /): +
Hasil: 10 + 5 = 15

=== KALKULATOR DENGAN MENU ===
1. Tambah
2. Kurang
3. Kali
4. Bagi
Pilih operasi (1-4): 3
Bilangan pertama: 6
Bilangan kedua: 7
6 × 7 = 42`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Kalkulator

Tingkatkan kalkulator dengan fitur berikut:
1. Kalkulator dengan operasi modulus (%) dan pangkat (**)
2. Kalkulator dengan memory (simpan hasil untuk operasi berikutnya)
3. Kalkulator scientific (akar kuadrat, logaritma)
4. Kalkulator dengan history operasi
5. Kalkulator konversi suhu
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Kalkulator Extended",
                        description: "Tambahkan operasi modulus (%) dan pangkat (**) pada kalkulator",
                        hint: "Tambahkan elif untuk operator % dan **",
                        solution: `a = float(input("Bilangan pertama: "))
b = float(input("Bilangan kedua: "))
op = input("Operator (+, -, *, /, %, **): ")

if op == "+": hasil = a + b
elif op == "-": hasil = a - b
elif op == "*": hasil = a * b
elif op == "/": 
    hasil = a / b if b != 0 else "Error: Div by 0"
elif op == "%": hasil = a % b
elif op == "**": hasil = a ** b
else: hasil = "Operator invalid"

print(f"Hasil: {a} {op} {b} = {hasil}")`
                    },
                    {
                        id: 2,
                        title: "Kalkulator Memory",
                        description: "Buat kalkulator yang bisa menggunakan hasil sebelumnya",
                        hint: "Gunakan variabel untuk menyimpan hasil",
                        solution: `memory = 0
while True:
    if memory == 0:
        a = float(input("Masukkan angka: "))
    else:
        a = memory
        print(f"Menggunakan memory: {memory}")
    
    op = input("Operator (+, -, *, /, C=clear): ")
    if op.upper() == "C":
        memory = 0
        continue
        
    b = float(input("Masukkan angka: "))
    
    if op == "+": memory = a + b
    elif op == "-": memory = a - b
    elif op == "*": memory = a * b
    elif op == "/": memory = a / b if b != 0 else a
    
    print(f"Hasil: {memory}")`
                    },
                    {
                        id: 3,
                        title: "Kalkulator Scientific",
                        description: "Tambahkan fungsi akar kuadrat dan pangkat 2",
                        hint: "Gunakan math.sqrt() atau ** 0.5",
                        solution: `import math

print("1. Akar kuadrat")
print("2. Pangkat 2")
pilihan = input("Pilih operasi: ")

if pilihan == "1":
    angka = float(input("Masukkan angka: "))
    hasil = math.sqrt(angka)
    print(f"Akar kuadrat {angka} = {hasil}")
elif pilihan == "2":
    angka = float(input("Masukkan angka: "))
    hasil = angka ** 2
    print(f"{angka} pangkat 2 = {hasil}")`
                    },
                    {
                        id: 4,
                        title: "Kalkulator History",
                        description: "Simpan riwayat operasi dalam list",
                        hint: "Gunakan list untuk menyimpan history",
                        solution: `history = []

while True:
    a = float(input("Angka pertama: "))
    b = float(input("Angka kedua: "))
    op = input("Operator: ")
    
    if op == "+": hasil = a + b
    elif op == "-": hasil = a - b
    elif op == "*": hasil = a * b
    elif op == "/": hasil = a / b
    
    operasi = f"{a} {op} {b} = {hasil}"
    history.append(operasi)
    print(f"Hasil: {operasi}")
    print(f"History: {history}")`
                    },
                    {
                        id: 5,
                        title: "Konversi Suhu",
                        description: "Buat kalkulator konversi Celcius ke Fahrenheit dan sebaliknya",
                        hint: "Rumus: F = C×9/5 + 32, C = (F-32)×5/9",
                        solution: `print("1. Celcius ke Fahrenheit")
print("2. Fahrenheit ke Celcius")
pilihan = input("Pilih konversi: ")

if pilihan == "1":
    c = float(input("Masukkan Celcius: "))
    f = c * 9/5 + 32
    print(f"{c}°C = {f}°F")
elif pilihan == "2":
    f = float(input("Masukkan Fahrenheit: "))
    c = (f - 32) * 5/9
    print(f"{f}°F = {c}°C")`
                    }
                ]
            }
        ]
    },

    { // 24
        id: 24,
        title: "For Loop (Perulangan)",
        description: "Belajar menggunakan for loop untuk melakukan perulangan dengan jumlah yang diketahui.",
        level: "Pemula",
        duration: "2 jam",
        lessons: 3,
        progress: 0,
        image: "🔄",
        topics: [
            "Konsep For Loop",
            "Loop dengan Range",
            "Loop dengan List"
        ],
        color: "#2196F3",
        content: [
            {
                id: 1,
                title: "Konsep For Loop",
                type: "theory",
                content: `
# Konsep Perulangan (Loop)

**Perulangan** digunakan untuk mengeksekusi blok kode yang sama berulang kali.

## Kenapa Butuh Loop?
Bayangkan kita ingin mencetak angka 1 sampai 5:
\`\`\`python
print(1)
print(2) 
print(3)
print(4)
print(5)
\`\`\`

Dengan loop, kita bisa melakukannya dengan 2 baris:
\`\`\`python
for i in range(1, 6):
    print(i)
\`\`\`

## For Loop di Python
For loop digunakan ketika kita tahu berapa kali perulangan akan dilakukan.

**Struktur Dasar:**
\`\`\`python
for variable in sequence:
    # blok kode yang diulang
\`\`\`
            `
            },
            {
                id: 2,
                title: "For Loop dengan Range dan List",
                type: "theory",
                content: `
# For Loop dengan Range()

Fungsi \`range()\` menghasilkan urutan angka yang bisa digunakan dalam loop.

## Contoh range():
\`\`\`python
# range(stop) → 0 sampai stop-1
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# range(start, stop) → start sampai stop-1  
for i in range(2, 6):
    print(i)  # 2, 3, 4, 5

# range(start, stop, step) → dengan loncatan
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# range mundur
for i in range(5, 0, -1):
    print(i)  # 5, 4, 3, 2, 1
\`\`\`

# For Loop dengan List

\`\`\`python
# Loop melalui list
buah = ["apel", "jeruk", "mangga", "pisang"]

for item in buah:
    print(f"Saya suka {item}")

# Output:
# Saya suka apel
# Saya suka jeruk  
# Saya suka mangga
# Saya suka pisang
\`\`\`

## Loop dengan Index dan Value (enumerate)
\`\`\`python
buah = ["apel", "jeruk", "mangga"]

for index, value in enumerate(buah):
    print(f"Index {index}: {value}")

# Output:
# Index 0: apel
# Index 1: jeruk  
# Index 2: mangga
\`\`\`

## Nested For Loop (Loop Bersarang)
\`\`\`python
# Membuat pola segitiga
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()  # pindah baris

# Output:
# *
# **
# ***
# ****
# *****
\`\`\`
            `,
                codeExample: `print("=== LOOP DENGAN RANGE ===")
# Cetak angka 1-5
print("Angka 1-5:")
for i in range(1, 6):
    print(i)

print("\\nAngka genap 0-10:")
for i in range(0, 11, 2):
    print(i)

print("\\n=== LOOP DENGAN LIST ===")
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
print("Daftar buah:")
for b in buah:
    print(f"- {b}")

print("\\nDengan index:")
for i, b in enumerate(buah):
    print(f"{i+1}. {b}")

print("\\n=== NESTED LOOP ===")
print("Tabel perkalian:")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}", end="\\t")
    print()  # new line

print("\\n=== LOOP DENGAN STRING ===")
kata = "Python"
for huruf in kata:
    print(huruf)`,
                expectedOutput: `=== LOOP DENGAN RANGE ===
Angka 1-5:
1
2
3
4
5

Angka genap 0-10:
0
2
4
6
8
10

=== LOOP DENGAN LIST ===
Daftar buah:
- Apel
- Jeruk
- Mangga
- Pisang

Dengan index:
1. Apel
2. Jeruk
3. Mangga
4. Pisang

=== NESTED LOOP ===
Tabel perkalian:
1 x 1 = 1	1 x 2 = 2	1 x 3 = 3	
2 x 1 = 2	2 x 2 = 4	2 x 3 = 6	
3 x 1 = 3	3 x 2 = 6	3 x 3 = 9	

=== LOOP DENGAN STRING ===
P
y
t
h
o
n`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan For Loop

Kerjakan soal berikut:
1. Cetak angka 1-10 menggunakan for loop
2. Hitung jumlah bilangan genap dari 1-100
3. Cetak semua item dalam list dengan format numbering
4. Buat pola segitiga dengan bintang
5. Hitung faktorial suatu bilangan
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Cetak 1-10",
                        description: "Gunakan for loop untuk mencetak angka 1 sampai 10",
                        hint: "Gunakan range(1, 11)",
                        solution: `for i in range(1, 11):
    print(i)`
                    },
                    {
                        id: 2,
                        title: "Jumlah Bilangan Genap",
                        description: "Hitung total bilangan genap dari 1 sampai 100",
                        hint: "Gunakan range(2, 101, 2) dan variabel total",
                        solution: `total = 0
for i in range(2, 101, 2):
    total += i
print(f"Total bilangan genap 1-100: {total}")`
                    },
                    {
                        id: 3,
                        title: "Format List",
                        description: "Cetak list buah dengan format '1. Apel', '2. Jeruk', dst",
                        hint: "Gunakan enumerate()",
                        solution: `buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
for i, b in enumerate(buah, 1):
    print(f"{i}. {b}")`
                    },
                    {
                        id: 4,
                        title: "Pola Segitiga",
                        description: "Buat pola segitiga siku-siku dengan bintang, tinggi 5 baris",
                        hint: "Gunakan nested loop",
                        solution: `for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()`
                    },
                    {
                        id: 5,
                        title: "Faktorial",
                        description: "Hitung faktorial dari 5 (5! = 5×4×3×2×1)",
                        hint: "Gunakan loop dan perkalian",
                        solution: `n = 5
faktorial = 1
for i in range(1, n+1):
    faktorial *= i
print(f"{n}! = {faktorial}")`
                    }
                ]
            }
        ]
    },

    { // 25
        id: 25,
        title: "While Loop (Perulangan)",
        description: "Belajar menggunakan while loop untuk perulangan yang berhenti berdasarkan kondisi.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "⏳",
        topics: [
            "Konsep While Loop",
            "While vs For Loop",
            "Infinite Loop"
        ],
        color: "#FF9800",
        content: [
            {
                id: 1,
                title: "Konsep While Loop",
                type: "theory",
                content: `
# While Loop

**While loop** digunakan ketika kita tidak tahu berapa kali perulangan akan dilakukan, tetapi tahu kapan harus berhenti.

## Struktur Dasar:
\`\`\`python
while kondisi:
    # blok kode yang diulang
    # update variabel kondisi
\`\`\`

## Contoh Sederhana:
\`\`\`python
# Cetak angka 1-5
counter = 1
while counter <= 5:
    print(counter)
    counter += 1  # penting: update counter
\`\`\`

## While vs For Loop:
- **For loop**: ketika tahu jumlah perulangan
- **While loop**: ketika tidak tahu jumlah perulangan, tapi tahu kondisi berhenti

\`\`\`python
# For loop (tahu jumlahnya)
for i in range(5):
    print(i)

# While loop (tidak tahu jumlahnya)
password = ""
while password != "rahasia":
    password = input("Masukkan password: ")
print("Login berhasil!")
\`\`\`
            `
            },
            {
                id: 2,
                title: "Implementasi While Loop",
                type: "theory",
                content: `
# Implementasi While Loop

## 1. Validasi Input
\`\`\`python
# Minta input sampai valid
angka = -1
while angka < 0 or angka > 100:
    angka = int(input("Masukkan angka (0-100): "))
    if angka < 0 or angka > 100:
        print("Angka tidak valid! Coba lagi.")

print(f"Angka yang dimasukkan: {angka}")
\`\`\`

## 2. Menu Program
\`\`\`python
# Program dengan menu
pilihan = ""
while pilihan != "4":
    print("\\n=== MENU ===")
    print("1. Tambah")
    print("2. Kurang") 
    print("3. Kali")
    print("4. Keluar")
    
    pilihan = input("Pilih menu (1-4): ")
    
    if pilihan == "1":
        print("Fitur tambah")
    elif pilihan == "2":
        print("Fitur kurang")
    elif pilihan == "3":
        print("Fitur kali")
    elif pilihan == "4":
        print("Terima kasih!")
    else:
        print("Pilihan tidak valid!")
\`\`\`

## 3. Infinite Loop (Hati-hati!)
\`\`\`python
# Contoh infinite loop (JANGAN di-run!)
# while True:
#     print("Ini akan berjalan selamanya!")

# Cara aman dengan break condition
counter = 0
while True:
    print(f"Counter: {counter}")
    counter += 1
    if counter >= 5:
        break  # keluar dari loop
\`\`\`

## 4. While dengan Else
\`\`\`python
# Else akan dieksekusi ketika kondisi while False
counter = 0
while counter < 3:
    print(f"Counter: {counter}")
    counter += 1
else:
    print("Loop selesai!")
\`\`\`
            `,
                codeExample: `print("=== VALIDASI INPUT ===")
# Minta input sampai dapat angka positif
angka = -1
while angka <= 0:
    try:
        angka = int(input("Masukkan angka positif: "))
        if angka <= 0:
            print("Harus positif! Coba lagi.")
    except ValueError:
        print("Input harus angka! Coba lagi.")

print(f"Angka valid: {angka}")

print("\\n=== PROGRAM MENU ===")
saldo = 1000
while True:
    print(f"\\nSaldo saat ini: Rp {saldo:,}")
    print("1. Tambah saldo")
    print("2. Tarik saldo") 
    print("3. Keluar")
    
    pilihan = input("Pilih menu (1-3): ")
    
    if pilihan == "1":
        tambah = int(input("Jumlah tambah: "))
        saldo += tambah
        print(f"Saldo bertambah Rp {tambah:,}")
        
    elif pilihan == "2":
        tarik = int(input("Jumlah tarik: "))
        if tarik <= saldo:
            saldo -= tarik
            print(f"Berhasil tarik Rp {tarik:,}")
        else:
            print("Saldo tidak cukup!")
            
    elif pilihan == "3":
        print("Terima kasih!")
        break
        
    else:
        print("Pilihan tidak valid!")

print("\\n=== COUNTDOWN ===")
countdown = 5
while countdown > 0:
    print(countdown)
    countdown -= 1
print("Go!")`,
                expectedOutput: `=== VALIDASI INPUT ===
Masukkan angka positif: -5
Harus positif! Coba lagi.
Masukkan angka positif: abc
Input harus angka! Coba lagi.
Masukkan angka positif: 10
Angka valid: 10

=== PROGRAM MENU ===

Saldo saat ini: Rp 1,000
1. Tambah saldo
2. Tarik saldo
3. Keluar
Pilih menu (1-3): 1
Jumlah tambah: 500
Saldo bertambah Rp 500

Saldo saat ini: Rp 1,500
1. Tambah saldo
2. Tarik saldo
3. Keluar
Pilih menu (1-3): 3
Terima kasih!

=== COUNTDOWN ===
5
4
3
2
1
Go!`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan While Loop

Kerjakan soal berikut:
1. Buat program tebak angka dengan while loop
2. Buat program yang meminta input sampai user mengetik 'stop'
3. Hitung rata-rata dari angka yang dimasukkan user
4. Buat countdown timer
5. Simulasi ATM sederhana dengan menu
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Tebak Angka",
                        description: "Buat game tebak angka 1-10, beri kesempatan 3x",
                        hint: "Gunakan counter dan kondisi tebakan",
                        solution: `import random
angka_rahasia = random.randint(1, 10)
kesempatan = 3

while kesempatan > 0:
    tebakan = int(input(f"Tebak angka (1-10), sisa {kesempatan}x: "))
    
    if tebakan == angka_rahasia:
        print("Selamat! Tebakan benar!")
        break
    else:
        print("Salah!")
        kesempatan -= 1
        
if kesempatan == 0:
    print(f"Game over! Angka: {angka_rahasia}")`
                    },
                    {
                        id: 2,
                        title: "Input sampai Stop",
                        description: "Minta input sampai user mengetik 'stop'",
                        hint: "Gunakan while dengan kondisi != 'stop'",
                        solution: `kata = ""
while kata.lower() != "stop":
    kata = input("Ketik sesuatu (stop untuk keluar): ")
    print(f"Anda mengetik: {kata}")`
                    },
                    {
                        id: 3,
                        title: "Rata-rata Input",
                        description: "Hitung rata-rata angka yang dimasukkan user",
                        hint: "Akumulasi total dan hitung jumlah input",
                        solution: `total = 0
count = 0

while True:
    angka = input("Masukkan angka (stop untuk keluar): ")
    if angka.lower() == "stop":
        break
    total += float(angka)
    count += 1

if count > 0:
    print(f"Rata-rata: {total/count:.2f}")`
                    },
                    {
                        id: 4,
                        title: "Countdown Timer",
                        description: "Buat countdown dari 10 sampai 0",
                        hint: "Gunakan while dengan decrement",
                        solution: `timer = 10
while timer >= 0:
    print(timer)
    timer -= 1
print("Waktu habis!")`
                    },
                    {
                        id: 5,
                        title: "ATM Sederhana",
                        description: "Buat simulasi ATM dengan menu setor, tarik, cek saldo",
                        hint: "Gunakan while True dengan break condition",
                        solution: `saldo = 0
while True:
    print(f"\\nSaldo: Rp {saldo:,}")
    print("1. Setor")
    print("2. Tarik")
    print("3. Keluar")
    
    pilihan = input("Pilih: ")
    
    if pilihan == "1":
        setor = int(input("Jumlah setor: "))
        saldo += setor
    elif pilihan == "2":
        tarik = int(input("Jumlah tarik: "))
        if tarik <= saldo:
            saldo -= tarik
        else:
            print("Saldo tidak cukup!")
    elif pilihan == "3":
        break
    else:
        print("Pilihan salah!")`
                    }
                ]
            }
        ]
    },

    { // 26
        id: 26,
        title: "Continue dan Pass",
        description: "Belajar menggunakan statement continue untuk melewati iterasi dan pass untuk placeholder.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "⏭️",
        topics: [
            "Continue Statement",
            "Pass Statement",
            "Perbedaan Continue vs Pass"
        ],
        color: "#4CAF50",
        content: [
            {
                id: 1,
                title: "Continue Statement",
                type: "theory",
                content: `
# Continue Statement

**Continue** digunakan untuk melewati iterasi saat ini dalam loop dan melanjutkan ke iterasi berikutnya.

## Cara Kerja:
Ketika \`continue\` dieksekusi, kode setelahnya dalam blok loop akan dilewati, dan loop langsung melanjutkan ke iterasi berikutnya.

## Contoh:
\`\`\`python
# Cetak angka ganjil dari 1-10
for i in range(1, 11):
    if i % 2 == 0:  # jika genap
        continue    # lewati iterasi ini
    print(i)

# Output: 1, 3, 5, 7, 9
\`\`\`

## Flow Continue:
1. Loop dimulai
2. Jika kondisi True → execute continue
3. Lewati sisa kode dalam blok
4. Lanjut ke iterasi berikutnya
            `
            },
            {
                id: 2,
                title: "Pass Statement",
                type: "theory",
                content: `
# Pass Statement

**Pass** adalah statement null (kosong) yang tidak melakukan apa-apa. Digunakan sebagai placeholder untuk kode yang akan ditulis nanti.

## Kapan digunakan?
- Saat membuat kerangka program
- Sebagai placeholder di fungsi, class, atau blok kondisional yang belum diimplementasi
- Untuk menghindari error syntax

## Contoh Pass:
\`\`\`python
# Placeholder untuk fungsi yang belum dibuat
def fungsi_belum_siap():
    pass  # nanti akan diisi

# Placeholder dalam if statement
umur = 20
if umur >= 18:
    pass  # nanti akan ditambah logic
else:
    print("Di bawah umur")

# Loop dengan pass
for i in range(5):
    pass  # nanti akan ditambah logic
\`\`\`

## Perbedaan Continue vs Pass:

\`\`\`python
# CONTINUE - melewati iterasi
for i in range(5):
    if i == 2:
        continue  # lewati angka 2
    print(i)  # Output: 0, 1, 3, 4

# PASS - tidak melakukan apa-apa  
for i in range(5):
    if i == 2:
        pass     # tidak ada efek
    print(i)     # Output: 0, 1, 2, 3, 4
\`\`\`

## Contoh Praktis Continue:
\`\`\`python
# Skip bilangan negatif
angka_list = [5, -2, 8, -1, 10, -3]

for angka in angka_list:
    if angka < 0:
        continue  # lewati bilangan negatif
    print(f"Bilangan positif: {angka}")

# Skip item tertentu dalam list
buah = ["apel", "jeruk", "busuk", "mangga", "pisang"]

for item in buah:
    if item == "busuk":
        continue  # lewati buah busuk
    print(f"Buah segar: {item}")
\`\`\`
            `,
                codeExample: `print("=== CONTINUE EXAMPLE ===")
# Cetak hanya bilangan positif
print("Bilangan positif dari list:")
numbers = [10, -5, 8, -3, 15, -1, 20]
for num in numbers:
    if num < 0:
        continue  # skip negative numbers
    print(f"Positif: {num}")

print("\\nSkip angka tertentu:")
for i in range(1, 11):
    if i == 3 or i == 7:
        continue  # skip angka 3 dan 7
    print(i)

print("\\n=== PASS EXAMPLE ===")
# Framework program dengan pass
print("Framework program:")

def login():
    pass  # to be implemented later

def register():
    pass  # to be implemented later

def main_menu():
    pass  # to be implemented later

# Contoh dengan if-elif dan pass
status = "active"

if status == "active":
    print("User aktif")
elif status == "inactive":
    pass  # will handle later
elif status == "banned":
    pass  # will handle later

print("\\n=== COMPARISON ===")
print("Dengan continue:")
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4

print("Dengan pass:")
for i in range(5):
    if i == 2:
        pass
    print(i)  # 0, 1, 2, 3, 4`,
                expectedOutput: `=== CONTINUE EXAMPLE ===
Bilangan positif dari list:
Positif: 10
Positif: 8
Positif: 15
Positif: 20

Skip angka tertentu:
1
2
4
5
6
8
9
10

=== PASS EXAMPLE ===
Framework program:
User aktif

=== COMPARISON ===
Dengan continue:
0
1
3
4
Dengan pass:
0
1
2
3
4`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Continue dan Pass

Kerjakan soal berikut:
1. Gunakan continue untuk melewati bilangan habis dibagi 3
2. Buat kerangka program dengan pass
3. Filter list dengan continue
4. Skip string kosong dalam list
5. Buat template class dengan pass
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Skip Kelipatan 3",
                        description: "Cetak angka 1-10 tapi lewati yang habis dibagi 3",
                        hint: "Gunakan i % 3 == 0 dengan continue",
                        solution: `for i in range(1, 11):
    if i % 3 == 0:
        continue
    print(i)`
                    },
                    {
                        id: 2,
                        title: "Kerangka Program",
                        description: "Buat kerangka program dengan fungsi-fungsi yang menggunakan pass",
                        hint: "Gunakan pass di dalam fungsi",
                        solution: `def setup():
    pass

def main_loop():
    pass

def cleanup():
    pass

# Panggil fungsi
setup()
main_loop()
cleanup()`
                    },
                    {
                        id: 3,
                        title: "Filter List",
                        description: "Dari list [1, 2, 3, 4, 5, 6], cetak hanya angka > 3 menggunakan continue",
                        hint: "Gunakan if angka <= 3: continue",
                        solution: `numbers = [1, 2, 3, 4, 5, 6]
for num in numbers:
    if num <= 3:
        continue
    print(num)`
                    },
                    {
                        id: 4,
                        title: "Skip String Kosong",
                        description: "Dari list ['a', '', 'c', '', 'e'], lewati string kosong",
                        hint: "Gunakan if item == '': continue",
                        solution: `items = ['a', '', 'c', '', 'e']
for item in items:
    if item == '':
        continue
    print(item)`
                    },
                    {
                        id: 5,
                        title: "Template Class",
                        description: "Buat class Person dengan method kosong menggunakan pass",
                        hint: "Gunakan pass di dalam class method",
                        solution: `class Person:
    def __init__(self):
        pass
        
    def speak(self):
        pass
        
    def walk(self):
        pass

# Buat object
person = Person()`
                    }
                ]
            }
        ]
    },

    { // 27
        id: 27,
        title: "Break Statement",
        description: "Belajar menggunakan break untuk menghentikan loop secara paksa sebelum kondisi berakhir.",
        level: "Pemula",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "⏹️",
        topics: [
            "Break Statement",
            "Break dalam For Loop",
            "Break dalam While Loop"
        ],
        color: "#F44336",
        content: [
            {
                id: 1,
                title: "Break Statement",
                type: "theory",
                content: `
# Break Statement

**Break** digunakan untuk menghentikan loop secara paksa, keluar dari loop sebelum kondisi berakhir.

## Cara Kerja:
Ketika \`break\` dieksekusi, loop akan langsung berhenti dan program melanjutkan ke kode setelah loop.

## Contoh Sederhana:
\`\`\`python
# Cari angka 5 dalam range 1-10
for i in range(1, 11):
    if i == 5:
        print("Angka 5 ditemukan!")
        break  # keluar dari loop
    print(i)

# Output: 1, 2, 3, 4, "Angka 5 ditemukan!"
\`\`\`

## Break dalam While Loop:
\`\`\`python
# Program input sampai dapat 'quit'
while True:
    perintah = input("Masukkan perintah (quit untuk keluar): ")
    if perintah == "quit":
        break  # keluar dari infinite loop
    print(f"Menjalankan: {perintah}")
\`\`\`
            `
            },
            {
                id: 2,
                title: "Implementasi Break",
                type: "theory",
                content: `
# Implementasi Break dalam Berbagai Scenario

## 1. Pencarian dalam List
\`\`\`python
# Cari item dalam list, berhenti ketika ditemukan
buah = ["apel", "jeruk", "mangga", "pisang"]
cari = "mangga"

for item in buah:
    print(f"Memeriksa: {item}")
    if item == cari:
        print(f"'{cari}' ditemukan!")
        break
else:
    print(f"'{cari}' tidak ditemukan")
\`\`\`

## 2. Validasi Input
\`\`\`python
# Minta input sampai valid, maksimal 3 kali
attempts = 0
while attempts < 3:
    password = input("Masukkan password: ")
    if password == "rahasia123":
        print("Login berhasil!")
        break
    else:
        attempts += 1
        print(f"Password salah! Percobaan {attempts}/3")
else:
    print("Akun terkunci!")
\`\`\`

## 3. Break dalam Nested Loop
\`\`\`python
# Break hanya keluar dari loop terdekat
for i in range(3):
    for j in range(3):
        if j == 1:
            break  # hanya keluar dari loop j
        print(f"i={i}, j={j}")
        
# Output:
# i=0, j=0
# i=1, j=0  
# i=2, j=0
\`\`\`

## 4. Break dengan Else
\`\`\`python
# Else dalam loop akan dieksekusi jika loop selesai normal (tanpa break)
for i in range(5):
    if i == 10:  # kondisi tidak akan pernah True
        break
    print(i)
else:
    print("Loop selesai normal tanpa break")
\`\`\`

## Contoh Praktis:
\`\`\`python
# Program pencarian bilangan prima
angka = 29
for i in range(2, angka):
    if angka % i == 0:
        print(f"{angka} bukan bilangan prima")
        break
else:
    print(f"{angka} adalah bilangan prima")
\`\`\`
            `,
                codeExample: `print("=== BREAK DALAM FOR LOOP ===")
# Cari angka pertama yang habis dibagi 7
print("Mencari angka habis dibagi 7 (1-20):")
for i in range(1, 21):
    if i % 7 == 0:
        print(f"Ditemukan: {i}")
        break
    print(f"Memeriksa {i}...")

print("\\n=== BREAK DALAM WHILE LOOP ===")
# Game tebak angka dengan batas percobaan
import random
angka_rahasia = random.randint(1, 5)
percobaan = 0

while True:
    tebakan = int(input("Tebak angka (1-5): "))
    percobaan += 1
    
    if tebakan == angka_rahasia:
        print(f"Benar! Angka: {angka_rahasia}")
        break
    elif percobaan >= 3:
        print(f"Gagal! Angka: {angka_rahasia}")
        break
    else:
        print("Salah, coba lagi!")

print("\\n=== BREAK DALAM NESTED LOOP ===")
# Cari pasangan angka yang jumlahnya 10
print("Mencari pasangan angka jumlah 10:")
for i in range(1, 6):
    for j in range(1, 6):
        if i + j == 10:
            print(f"Ditemukan: {i} + {j} = 10")
            break  # hanya break loop j
    else:
        continue
    break  # break loop i juga

print("\\n=== BREAK DENGAN ELSE ===")
# Cek apakah semua angka genap
numbers = [2, 4, 6, 8, 9, 10]
for num in numbers:
    if num % 2 != 0:
        print(f"{num} bukan genap! Menghentikan pencarian.")
        break
    print(f"{num} adalah genap")
else:
    print("Semua angka genap!")`,
                expectedOutput: `=== BREAK DALAM FOR LOOP ===
Mencari angka habis dibagi 7 (1-20):
Memeriksa 1...
Memeriksa 2...
Memeriksa 3...
Memeriksa 4...
Memeriksa 5...
Memeriksa 6...
Ditemukan: 7

=== BREAK DALAM WHILE LOOP ===
Tebak angka (1-5): 3
Salah, coba lagi!
Tebak angka (1-5): 2
Benar! Angka: 2

=== BREAK DALAM NESTED LOOP ===
Mencari pasangan angka jumlah 10:
Ditemukan: 5 + 5 = 10

=== BREAK DENGAN ELSE ===
2 adalah genap
4 adalah genap
6 adalah genap
8 adalah genap
9 bukan genap! Menghentikan pencarian.`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Break Statement

Kerjakan soal berikut:
1. Cari angka pertama > 50 dalam list
2. Buat program yang berhenti ketika input 'exit'
3. Cari bilangan prima dengan break
4. Batasi percobaan login maksimal 3x
5. Keluar dari nested loop dengan break
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Cari Angka > 50",
                        description: "Dari list [10, 25, 45, 60, 30, 80], cari angka pertama > 50",
                        hint: "Gunakan break ketika angka > 50",
                        solution: `numbers = [10, 25, 45, 60, 30, 80]
for num in numbers:
    if num > 50:
        print(f"Angka pertama > 50: {num}")
        break`
                    },
                    {
                        id: 2,
                        title: "Program dengan Exit",
                        description: "Buat program yang menerima input sampai user mengetik 'exit'",
                        hint: "Gunakan while True dengan break",
                        solution: `while True:
    command = input("Ketik sesuatu (exit untuk keluar): ")
    if command.lower() == "exit":
        break
    print(f"Anda mengetik: {command}")`
                    },
                    {
                        id: 3,
                        title: "Cek Bilangan Prima",
                        description: "Cek apakah 17 adalah bilangan prima menggunakan break",
                        hint: "Break ketika ditemukan pembagi",
                        solution: `angka = 17
for i in range(2, angka):
    if angka % i == 0:
        print(f"{angka} bukan prima")
        break
else:
    print(f"{angka} adalah prima")`
                    },
                    {
                        id: 4,
                        title: "Login Attempt",
                        description: "Batas percobaan login maksimal 3 kali",
                        hint: "Gunakan counter dengan break",
                        solution: `password_benar = "admin123"
attempts = 0

while attempts < 3:
    input_pass = input("Password: ")
    if input_pass == password_benar:
        print("Login sukses!")
        break
    attempts += 1
    print(f"Salah! Percobaan {attempts}/3")
else:
    print("Akun terkunci!")`
                    },
                    {
                        id: 5,
                        title: "Keluar Nested Loop",
                        description: "Keluar dari kedua loop ketika ditemukan pasangan i=2, j=2",
                        hint: "Gunakan break dan flag variable",
                        solution: `found = False
for i in range(3):
    for j in range(3):
        if i == 2 and j == 2:
            print("Ditemukan i=2, j=2")
            found = True
            break
    if found:
        break`
                    }
                ]
            }
        ]
    },

    { // 28
        id: 28,
        title: "Latihan Perulangan",
        description: "Praktik mengintegrasikan for loop, while loop, break, dan continue dalam studi kasus nyata.",
        level: "Pemula Menengah",
        duration: "2 jam",
        lessons: 3,
        progress: 0,
        image: "💪",
        topics: [
            "Integrasi Loop",
            "Studi Kasus Nyata",
            "Optimasi Kode"
        ],
        color: "#795548",
        content: [
            {
                id: 1,
                title: "Integrasi Berbagai Jenis Loop",
                type: "theory",
                content: `
# Integrasi For, While, Break, Continue

Dalam pemrograman nyata, kita sering mengkombinasikan berbagai jenis loop dan control statements.

## Pattern Umum:
1. **For loop** dengan **break** untuk pencarian
2. **While loop** dengan **continue** untuk validasi  
3. **Nested loop** dengan kontrol flow kompleks

## Contoh Integrasi:
\`\`\`python
# Kombinasi for, while, break, continue
data = [10, -5, 0, 23, -8, 15, 0, 7]

for angka in data:
    # Skip angka 0 dengan continue
    if angka == 0:
        print("Melewati angka 0")
        continue
        
    # Hanya proses angka positif
    if angka > 0:
        print(f"Memproses angka positif: {angka}")
        
        # While loop untuk menghitung faktorial sederhana
        faktorial = 1
        temp = angka
        while temp > 1:
            faktorial *= temp
            temp -= 1
            
        print(f"Faktorial {angka}: {faktorial}")
    
    # Break jika menemukan angka > 20
    if angka > 20:
        print("Angka > 20 ditemukan, menghentikan proses")
        break
\`\`\`
            `
            },
            {
                id: 2,
                title: "Studi Kasus Nyata",
                type: "theory",
                content: `
# Studi Kasus: Sistem Manajemen Sederhana

## 1. Sistem Inventory
\`\`\`python
# Program manajemen inventory
inventory = []
while True:
    print("\\n=== SISTEM INVENTORY ===")
    print("1. Tambah item")
    print("2. Lihat inventory") 
    print("3. Cari item")
    print("4. Hapus item")
    print("5. Keluar")
    
    pilihan = input("Pilih menu (1-5): ")
    
    if pilihan == "1":
        # Tambah item
        while True:
            item = input("Masukkan nama item (stop untuk kembali): ")
            if item.lower() == "stop":
                break
            inventory.append(item)
            print(f"'{item}' ditambahkan!")
            
    elif pilihan == "2":
        # Lihat inventory dengan for loop
        if not inventory:
            print("Inventory kosong!")
            continue
            
        print("\\nDaftar Inventory:")
        for i, item in enumerate(inventory, 1):
            print(f"{i}. {item}")
            
    elif pilihan == "3":
        # Cari item dengan break
        cari = input("Cari item: ")
        for item in inventory:
            if item.lower() == cari.lower():
                print(f"Item ditemukan: {item}")
                break
        else:
            print("Item tidak ditemukan!")
            
    elif pilihan == "4":
        # Hapus item
        if not inventory:
            print("Inventory kosong!")
            continue
            
        hapus = input("Nama item yang akan dihapus: ")
        if hapus in inventory:
            inventory.remove(hapus)
            print(f"'{hapus}' dihapus!")
        else:
            print("Item tidak ditemukan!")
            
    elif pilihan == "5":
        print("Terima kasih!")
        break
        
    else:
        print("Pilihan tidak valid!")
\`\`\`

## 2. Analisis Data Sederhana
\`\`\`python
# Analisis dataset angka
data = [45, 23, 67, 12, 89, 34, 76, 55, 91, 18]

print("=== ANALISIS DATA ===")
print(f"Data: {data}")

# Hitung statistik dengan for loop
total = 0
maks = data[0]
minim = data[0]
angka_genap = []

for angka in data:
    total += angka
    
    if angka > maks:
        maks = angka
        
    if angka < minim:
        minim = angka
        
    if angka % 2 == 0:
        angka_genap.append(angka)

print(f"Total: {total}")
print(f"Rata-rata: {total/len(data):.2f}")
print(f"Nilai maksimum: {maks}")
print(f"Nilai minimum: {minim}")
print(f"Angka genap: {angka_genap}")

# Cari angka tertentu
cari = 55
for i, angka in enumerate(data):
    if angka == cari:
        print(f"Angka {cari} ditemukan di index {i}")
        break
else:
    print(f"Angka {cari} tidak ditemukan")
\`\`\`
            `,
                codeExample: `print("=== SISTEM NILAI SISWA ===")

# Data siswa: list of tuples (nama, nilai)
siswa = [
    ("Andi", 85),
    ("Budi", 72), 
    ("Citra", 90),
    ("Dewi", 65),
    ("Eka", 78)
]

while True:
    print("\\n=== MENU SISTEM NILAI ===")
    print("1. Tampilkan semua siswa")
    print("2. Cari siswa")
    print("3. Siswa dengan nilai tertinggi")
    print("4. Statistik nilai")
    print("5. Keluar")
    
    pilihan = input("Pilih menu (1-5): ")
    
    if pilihan == "1":
        print("\\n=== DAFTAR SISWA ===")
        for i, (nama, nilai) in enumerate(siswa, 1):
            grade = "A" if nilai >= 85 else "B" if nilai >= 70 else "C" if nilai >= 60 else "D"
            print(f"{i}. {nama}: {nilai} ({grade})")
            
    elif pilihan == "2":
        cari_nama = input("Cari nama siswa: ")
        for nama, nilai in siswa:
            if nama.lower() == cari_nama.lower():
                print(f"Ditemukan: {nama} - Nilai: {nilai}")
                break
        else:
            print("Siswa tidak ditemukan!")
            
    elif pilihan == "3":
        # Cari nilai tertinggi
        nilai_tertinggi = 0
        siswa_tertinggi = ""
        
        for nama, nilai in siswa:
            if nilai > nilai_tertinggi:
                nilai_tertinggi = nilai
                siswa_tertinggi = nama
                
        print(f"Siswa dengan nilai tertinggi: {siswa_tertinggi} ({nilai_tertinggi})")
        
    elif pilihan == "4":
        # Hitung statistik
        total_nilai = 0
        jumlah_lulus = 0
        
        for nama, nilai in siswa:
            total_nilai += nilai
            if nilai >= 70:
                jumlah_lulus += 1
                
        rata_rata = total_nilai / len(siswa)
        persentase_lulus = (jumlah_lulus / len(siswa)) * 100
        
        print(f"Rata-rata nilai: {rata_rata:.2f}")
        print(f"Siswa lulus: {jumlah_lulus}/{len(siswa)} ({persentase_lulus:.1f}%)")
        
    elif pilihan == "5":
        print("Terima kasih!")
        break
        
    else:
        print("Pilihan tidak valid!")`,
                expectedOutput: `=== SISTEM NILAI SISWA ===

=== MENU SISTEM NILAI ===
1. Tampilkan semua siswa
2. Cari siswa
3. Siswa dengan nilai tertinggi
4. Statistik nilai
5. Keluar
Pilih menu (1-5): 1

=== DAFTAR SISWA ===
1. Andi: 85 (A)
2. Budi: 72 (B)
3. Citra: 90 (A)
4. Dewi: 65 (C)
5. Eka: 78 (B)

=== MENU SISTEM NILAI ===
1. Tampilkan semua siswa
2. Cari siswa
3. Siswa dengan nilai tertinggi
4. Statistik nilai
5. Keluar
Pilih menu (1-5): 3
Siswa dengan nilai tertinggi: Citra (90)

=== MENU SISTEM NISTEM NILAI ===
1. Tampilkan semua siswa
2. Cari siswa
3. Siswa dengan nilai tertinggi
4. Statistik nilai
5. Keluar
Pilih menu (1-5): 5
Terima kasih!`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Integrasi Perulangan

Kerjakan studi kasus berikut:
1. Buat program toko sederhana dengan keranjang belanja
2. Sistem voting dengan perhitungan suara
3. Game tebak kata dengan hints
4. Analisis text (hitung huruf, kata, dll)
5. Konverter bilangan (desimal ke biner)
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Toko Sederhana",
                        description: "Buat sistem kasir dengan fitur tambah item, hapus, hitung total",
                        hint: "Gunakan while untuk menu, list untuk keranjang",
                        solution: `keranjang = []
while True:
    print("\\n1. Tambah item")
    print("2. Hapus item") 
    print("3. Lihat keranjang")
    print("4. Checkout")
    pilih = input("Pilih: ")
    
    if pilih == "1":
        item = input("Nama item: ")
        harga = float(input("Harga: "))
        keranjang.append((item, harga))
    elif pilih == "2":
        if keranjang:
            for i, (item, harga) in enumerate(keranjang):
                print(f"{i+1}. {item} - Rp {harga:,}")
            hapus = int(input("Nomor yang dihapus: ")) - 1
            if 0 <= hapus < len(keranjang):
                keranjang.pop(hapus)
    elif pilih == "3":
        total = 0
        for item, harga in keranjang:
            print(f"- {item}: Rp {harga:,}")
            total += harga
        print(f"Total: Rp {total:,}")
    elif pilih == "4":
        total = sum(harga for _, harga in keranjang)
        print(f"Total bayar: Rp {total:,}")
        break`
                    },
                    {
                        id: 2,
                        title: "Sistem Voting",
                        description: "Hitung suara untuk beberapa kandidat",
                        hint: "Gunakan dictionary untuk menyimpan suara",
                        solution: `kandidat = {"Andi": 0, "Budi": 0, "Citra": 0}
while True:
    print("\\nKandidat:", list(kandidat.keys()))
    pilih = input("Pilih kandidat (stop untuk hasil): ")
    
    if pilih.lower() == "stop":
        break
        
    if pilih in kandidat:
        kandidat[pilih] += 1
        print(f"Suara untuk {pilih} tercatat!")
    else:
        print("Kandidat tidak ada!")

print("\\nHasil Voting:")
for nama, suara in kandidat.items():
    print(f"{nama}: {suara} suara")`
                    },
                    {
                        id: 3,
                        title: "Game Tebak Kata",
                        description: "Game tebak kata dengan maksimal 5 kesempatan",
                        hint: "Gunakan while dengan counter dan break",
                        solution: `kata_rahasia = "python"
tebakan = ["_"] * len(kata_rahasia)
kesempatan = 5

print("Tebak kata:", " ".join(tebakan))

while kesempatan > 0 and "_" in tebakan:
    huruf = input("Tebak huruf: ").lower()
    
    if huruf in kata_rahasia:
        for i, h in enumerate(kata_rahasia):
            if h == huruf:
                tebakan[i] = huruf
        print("Benar!", " ".join(tebakan))
    else:
        kesempatan -= 1
        print(f"Salah! Sisa {kesempatan} kesempatan")

if "_" not in tebakan:
    print("Selamat! Anda menang!")
else:
    print(f"Game over! Kata: {kata_rahasia}")`
                    },
                    {
                        id: 4,
                        title: "Analisis Text",
                        description: "Hitung jumlah huruf, kata, dan spasi dalam teks",
                        hint: "Gunakan for loop melalui string",
                        solution: `teks = input("Masukkan teks: ")
huruf = 0
kata = len(teks.split())
spasi = teks.count(" ")

for char in teks:
    if char.isalpha():
        huruf += 1

print(f"Jumlah huruf: {huruf}")
print(f"Jumlah kata: {kata}")
print(f"Jumlah spasi: {spasi}")`
                    },
                    {
                        id: 5,
                        title: "Konverter Biner",
                        description: "Konversi angka desimal ke biner menggunakan loop",
                        hint: "Gunakan while loop dengan pembagian 2",
                        solution: `angka = int(input("Masukkan angka desimal: "))
biner = ""

while angka > 0:
    sisa = angka % 2
    biner = str(sisa) + biner
    angka = angka // 2

print(f"Biner: {biner}")`
                    }
                ]
            }
        ]
    },

    { // 29
        id: 29,
        title: "List di Python",
        description: "Belajar dasar-dasar list, cara membuat, mengakses, dan operasi fundamental pada list.",
        level: "Pemula",
        duration: "2 jam",
        lessons: 3,
        progress: 0,
        image: "📋",
        topics: [
            "Pengenalan List",
            "Akses Element List",
            "Operasi Dasar List"
        ],
        color: "#3F51B5",
        content: [
            {
                id: 1,
                title: "Pengenalan List",
                type: "theory",
                content: `
# Pengenalan List

**List** adalah struktur data yang digunakan untuk menyimpan koleksi data dalam urutan tertentu.

## Karakteristik List:
- **Ordered** → elemen memiliki urutan tetap
- **Mutable** → bisa diubah setelah dibuat
- **Boleh duplikat** → boleh ada elemen yang sama
- **Bisa berisi tipe data berbeda**

## Cara Membuat List:
\`\`\`python
# List kosong
list_kosong = []
list_kosong2 = list()

# List dengan elemen
buah = ["apel", "jeruk", "mangga", "pisang"]
angka = [1, 2, 3, 4, 5]
campuran = [1, "hello", 3.14, True]

# List bersarang (nested list)
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
\`\`\`

## Mengapa Butuh List?
\`\`\`python
# Tanpa list (ribet)
nilai1 = 85
nilai2 = 90
nilai3 = 78
# ... dan seterusnya

# Dengan list (praktis)
nilai_siswa = [85, 90, 78, 92, 88]
\`\`\`
            `
            },
            {
                id: 2,
                title: "Akses dan Operasi List",
                type: "theory",
                content: `
# Akses Element List

## 1. Indexing (Akses per Element)
\`\`\`python
buah = ["apel", "jeruk", "mangga", "pisang"]

print(buah[0])   # apel (index pertama)
print(buah[1])   # jeruk
print(buah[-1])  # pisang (index terakhir)
print(buah[-2])  # mangga
\`\`\`

## 2. Slicing (Akses Range)
\`\`\`python
angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(angka[2:5])   # [2, 3, 4] (index 2-4)
print(angka[:3])    # [0, 1, 2] (awal sampai 2)
print(angka[5:])    # [5, 6, 7, 8, 9] (5 sampai akhir)
print(angka[::2])   # [0, 2, 4, 6, 8] (setiap 2 langkah)
print(angka[::-1])  # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (reverse)
\`\`\`

## 3. Operasi Dasar List
\`\`\`python
# Panjang list
buah = ["apel", "jeruk", "mangga"]
print(len(buah))  # 3

# Cek keanggotaan
print("apel" in buah)    # True
print("anggur" in buah)  # False

# Concatenation (gabung list)
list1 = [1, 2, 3]
list2 = [4, 5, 6]
gabungan = list1 + list2
print(gabungan)  # [1, 2, 3, 4, 5, 6]

# Repetition (ulang list)
ulang = [1, 2] * 3
print(ulang)  # [1, 2, 1, 2, 1, 2]

# Iteration (loop melalui list)
for item in buah:
    print(f"Saya suka {item}")
\`\`\`

## 4. List Comprehension (Advanced)
\`\`\`python
# Buat list kuadrat dari 0-9
kuadrat = [x**2 for x in range(10)]
print(kuadrat)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Filter bilangan genap
genap = [x for x in range(10) if x % 2 == 0]
print(genap)  # [0, 2, 4, 6, 8]
\`\`\`
            `,
                codeExample: `print("=== DASAR LIST ===")
# Membuat berbagai jenis list
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
angka = [1, 2, 3, 4, 5]
campuran = [10, "Hello", 3.14, True, [1, 2, 3]]

print("List buah:", buah)
print("List angka:", angka)
print("List campuran:", campuran)

print("\\n=== AKSES ELEMENT ===")
print("buah[0]:", buah[0])
print("buah[-1]:", buah[-1])
print("angka[1:4]:", angka[1:4])
print("angka[::2]:", angka[::2])

print("\\n=== OPERASI LIST ===")
print("Panjang list buah:", len(buah))
print("'Mangga' ada di list?", "Mangga" in buah)

# Gabung list
list_a = [1, 2, 3]
list_b = [4, 5, 6]
gabung = list_a + list_b
print("Gabungan list:", gabung)

# Ulang list
ulang = ["ha"] * 3
print("List diulang:", ulang)

print("\\n=== ITERASI LIST ===")
print("Daftar buah:")
for i, b in enumerate(buah):
    print(f"{i+1}. {b}")

print("\\n=== LIST COMPREHENSION ===")
kuadrat = [x**2 for x in range(1, 6)]
genap = [x for x in range(10) if x % 2 == 0]
print("Kuadrat 1-5:", kuadrat)
print("Bilangan genap 0-9:", genap)`,
                expectedOutput: `=== DASAR LIST ===
List buah: ['Apel', 'Jeruk', 'Mangga', 'Pisang']
List angka: [1, 2, 3, 4, 5]
List campuran: [10, 'Hello', 3.14, True, [1, 2, 3]]

=== AKSES ELEMENT ===
buah[0]: Apel
buah[-1]: Pisang
angka[1:4]: [2, 3, 4]
angka[::2]: [1, 3, 5]

=== OPERASI LIST ===
Panjang list buah: 4
'Mangga' ada di list? True
Gabungan list: [1, 2, 3, 4, 5, 6]
List diulang: ['ha', 'ha', 'ha']

=== ITERASI LIST ===
Daftar buah:
1. Apel
2. Jeruk
3. Mangga
4. Pisang

=== LIST COMPREHENSION ===
Kuadrat 1-5: [1, 4, 9, 16, 25]
Bilangan genap 0-9: [0, 2, 4, 6, 8]`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan List Dasar

Kerjakan soal berikut:
1. Buat list dengan 5 nama teman dan akses elementnya
2. Buat list angka 1-10 dan ambil element genap saja
3. Gabungkan dua list menjadi satu
4. Buat list kuadrat menggunakan list comprehension
5. Cek apakah suatu element ada dalam list
            `,
                exercises: [
                    {
                        id: 1,
                        title: "List Nama",
                        description: "Buat list dengan 5 nama dan cetak nama pertama dan terakhir",
                        hint: "Gunakan index [0] dan [-1]",
                        solution: `nama = ["Andi", "Budi", "Citra", "Dewi", "Eka"]
print("Nama pertama:", nama[0])
print("Nama terakhir:", nama[-1])`
                    },
                    {
                        id: 2,
                        title: "Angka Genap",
                        description: "Dari list [1,2,3,4,5,6,7,8,9,10], ambil hanya angka genap",
                        hint: "Gunakan slicing [1::2]",
                        solution: `angka = [1,2,3,4,5,6,7,8,9,10]
genap = angka[1::2]  # index 1,3,5,7,9
print(genap)  # [2,4,6,8,10]`
                    },
                    {
                        id: 3,
                        title: "Gabung List",
                        description: "Gabungkan [1,2,3] dan [4,5,6] menjadi [1,2,3,4,5,6]",
                        hint: "Gunakan operator +",
                        solution: `list1 = [1,2,3]
list2 = [4,5,6]
gabung = list1 + list2
print(gabung)`
                    },
                    {
                        id: 4,
                        title: "List Comprehension",
                        description: "Buat list berisi kuadrat dari angka 1-5 menggunakan list comprehension",
                        hint: "Gunakan [x**2 for x in range(1,6)]",
                        solution: `kuadrat = [x**2 for x in range(1,6)]
print(kuadrat)  # [1,4,9,16,25]`
                    },
                    {
                        id: 5,
                        title: "Cek Keanggotaan",
                        description: "Cek apakah angka 5 ada dalam list [1,3,5,7,9]",
                        hint: "Gunakan operator in",
                        solution: `angka = [1,3,5,7,9]
if 5 in angka:
    print("5 ada dalam list")
else:
    print("5 tidak ada dalam list")`
                    }
                ]
            }
        ]
    },

    { // 30
        id: 30,
        title: "Manipulasi List",
        description: "Belajar memanipulasi list dengan method seperti append, insert, remove, sort, dan lainnya.",
        level: "Pemula",
        duration: "2 jam",
        lessons: 3,
        progress: 0,
        image: "🔧",
        topics: [
            "Method List Dasar",
            "Modifikasi List",
            "Sorting dan Searching"
        ],
        color: "#FF9800",
        content: [
            {
                id: 1,
                title: "Method List Dasar",
                type: "theory",
                content: `
# Method-Method List

List memiliki banyak method built-in untuk memanipulasi data.

## 1. Menambah Element
\`\`\`python
buah = ["apel", "jeruk"]

# append() - tambah di akhir
buah.append("mangga")
print(buah)  # ["apel", "jeruk", "mangga"]

# insert() - tambah di index tertentu
buah.insert(1, "pisang")
print(buah)  # ["apel", "pisang", "jeruk", "mangga"]

# extend() - tambah multiple elements
buah.extend(["anggur", "kiwi"])
print(buah)  # ["apel", "pisang", "jeruk", "mangga", "anggur", "kiwi"]
\`\`\`

## 2. Menghapus Element
\`\`\`python
angka = [1, 2, 3, 4, 5, 3]

# remove() - hapus element tertentu (pertama ditemukan)
angka.remove(3)
print(angka)  # [1, 2, 4, 5, 3]

# pop() - hapus element di index (return value yang dihapus)
terhapus = angka.pop(1)
print(f"Terhapus: {terhapus}")  # Terhapus: 2
print(angka)  # [1, 4, 5, 3]

# pop() tanpa index - hapus element terakhir
terakhir = angka.pop()
print(f"Terakhir: {terakhir}")  # Terakhir: 3
print(angka)  # [1, 4, 5]

# clear() - hapus semua element
angka.clear()
print(angka)  # []
\`\`\`
            `
            },
            {
                id: 2,
                title: "Modifikasi dan Sorting",
                type: "theory",
                content: `
# Modifikasi dan Sorting List

## 1. Modifikasi Element
\`\`\`python
# Ubah element berdasarkan index
buah = ["apel", "jeruk", "mangga"]
buah[1] = "pisang"
print(buah)  # ["apel", "pisang", "mangga"]

# Ubah slice
angka = [1, 2, 3, 4, 5]
angka[1:4] = [20, 30, 40]
print(angka)  # [1, 20, 30, 40, 5]
\`\`\`

## 2. Sorting (Pengurutan)
\`\`\`python
# sort() - urutkan ascending (default)
angka = [3, 1, 4, 1, 5, 9, 2]
angka.sort()
print(angka)  # [1, 1, 2, 3, 4, 5, 9]

# sort descending
angka.sort(reverse=True)
print(angka)  # [9, 5, 4, 3, 2, 1, 1]

# sorted() - return sorted list (tidak ubah original)
angka = [3, 1, 4, 1, 5]
urut = sorted(angka)
print(angka)  # [3, 1, 4, 1, 5] (tidak berubah)
print(urut)   # [1, 1, 3, 4, 5] (sorted)

# Sort string
nama = ["zaki", "budi", "ani", "citra"]
nama.sort()
print(nama)  # ['ani', 'budi', 'citra', 'zaki']
\`\`\`

## 3. Searching dan Informasi
\`\`\`python
angka = [10, 20, 30, 20, 40]

# index() - cari index element tertentu
print(angka.index(20))    # 1 (pertama ditemukan)
print(angka.index(20, 2)) # 3 (cari mulai index 2)

# count() - hitung kemunculan element
print(angka.count(20))  # 2

# copy() - buat salinan list
salinan = angka.copy()
print(salinan)  # [10, 20, 30, 20, 40]

# reverse() - balik urutan list
angka.reverse()
print(angka)  # [40, 20, 30, 20, 10]
\`\`\`

## 4. List sebagai Stack dan Queue
\`\`\`python
# Stack (LIFO - Last In First Out)
stack = []
stack.append(1)  # push
stack.append(2)
stack.append(3)
print(stack.pop())  # 3 (pop)
print(stack)        # [1, 2]

# Queue (FIFO - First In First Out)
from collections import deque
queue = deque([1, 2, 3])
queue.append(4)     # enqueue
print(queue.popleft())  # 1 (dequeue)
print(queue)        # deque([2, 3, 4])
\`\`\`
            `,
                codeExample: `print("=== MANIPULASI LIST ===")

# Buat list awal
buah = ["Apel", "Jeruk"]
print("Awal:", buah)

# Tambah element
buah.append("Mangga")
print("Setelah append:", buah)

buah.insert(1, "Pisang")
print("Setelah insert:", buah)

buah.extend(["Anggur", "Kiwi"])
print("Setelah extend:", buah)

print("\\n=== HAPUS ELEMENT ===")
angka = [1, 2, 3, 4, 5, 3]
print("Awal:", angka)

angka.remove(3)
print("Setelah remove(3):", angka)

terhapus = angka.pop(1)
print(f"Pop index 1: {terhapus}")
print("Setelah pop:", angka)

print("\\n=== SORTING ===")
nilai = [85, 92, 78, 96, 88]
print("Sebelum sort:", nilai)

nilai.sort()
print("Setelah sort:", nilai)

nilai.sort(reverse=True)
print("Sort descending:", nilai)

# sorted() tanpa mengubah original
original = [3, 1, 4, 2]
sorted_list = sorted(original)
print(f"Original: {original}")
print(f"Sorted: {sorted_list}")

print("\\n=== SEARCHING ===")
data = [10, 20, 30, 20, 40]
print("List:", data)
print("Index pertama 20:", data.index(20))
print("Jumlah kemunculan 20:", data.count(20))

print("\\n=== COPY LIST ===")
list_asli = [1, 2, 3]
list_salinan = list_asli.copy()
list_asli[0] = 99
print("Asli:", list_asli)
print("Salinan:", list_salinan)`,
                expectedOutput: `=== MANIPULASI LIST ===
Awal: ['Apel', 'Jeruk']
Setelah append: ['Apel', 'Jeruk', 'Mangga']
Setelah insert: ['Apel', 'Pisang', 'Jeruk', 'Mangga']
Setelah extend: ['Apel', 'Pisang', 'Jeruk', 'Mangga', 'Anggur', 'Kiwi']

=== HAPUS ELEMENT ===
Awal: [1, 2, 3, 4, 5, 3]
Setelah remove(3): [1, 2, 4, 5, 3]
Pop index 1: 2
Setelah pop: [1, 4, 5, 3]

=== SORTING ===
Sebelum sort: [85, 92, 78, 96, 88]
Setelah sort: [78, 85, 88, 92, 96]
Sort descending: [96, 92, 88, 85, 78]
Original: [3, 1, 4, 2]
Sorted: [1, 2, 3, 4]

=== SEARCHING ===
List: [10, 20, 30, 20, 40]
Index pertama 20: 1
Jumlah kemunculan 20: 2

=== COPY LIST ===
Asli: [99, 2, 3]
Salinan: [1, 2, 3]`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Manipulasi List

Kerjakan soal berikut:
1. Buat list dan manipulasi dengan append, insert, remove
2. Urutkan list angka dan string
3. Cari element dalam list dan hitung kemunculannya
4. Implementasi stack sederhana
5. Buat program manajemen tugas (to-do list)
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Manipulasi Dasar",
                        description: "Buat list [1,2,3], tambah 4 di akhir, sisipkan 0 di awal, hapus 2",
                        hint: "Gunakan append, insert, remove",
                        solution: `angka = [1, 2, 3]
angka.append(4)
angka.insert(0, 0)
angka.remove(2)
print(angka)  # [0, 1, 3, 4]`
                    },
                    {
                        id: 2,
                        title: "Sorting List",
                        description: "Urutkan [5,2,8,1,9] ascending dan descending",
                        hint: "Gunakan sort() dengan parameter reverse",
                        solution: `angka = [5,2,8,1,9]
angka.sort()
print("Ascending:", angka)  # [1,2,5,8,9]
angka.sort(reverse=True)
print("Descending:", angka)  # [9,8,5,2,1]`
                    },
                    {
                        id: 3,
                        title: "Searching Element",
                        description: "Dalam list [1,3,5,3,7,3], cari index pertama 3 dan hitung jumlah 3",
                        hint: "Gunakan index() dan count()",
                        solution: `data = [1,3,5,3,7,3]
print("Index pertama 3:", data.index(3))
print("Jumlah angka 3:", data.count(3))`
                    },
                    {
                        id: 4,
                        title: "Stack Sederhana",
                        description: "Implementasi stack dengan push (append) dan pop",
                        hint: "Gunakan list dengan append dan pop",
                        solution: `stack = []
stack.append(1)
stack.append(2)
stack.append(3)
print("Stack:", stack)
print("Pop:", stack.pop())
print("Stack setelah pop:", stack)`
                    },
                    {
                        id: 5,
                        title: "To-Do List",
                        description: "Buat program to-do list sederhana dengan tambah, hapus, lihat",
                        hint: "Gunakan while loop dengan menu",
                        solution: `todos = []
while True:
    print("\\n1. Tambah tugas")
    print("2. Hapus tugas")
    print("3. Lihat tugas")
    print("4. Keluar")
    
    pilih = input("Pilih: ")
    
    if pilih == "1":
        tugas = input("Tugas: ")
        todos.append(tugas)
    elif pilih == "2":
        if todos:
            for i, t in enumerate(todos):
                print(f"{i+1}. {t}")
            hapus = int(input("Nomor yang dihapus: ")) - 1
            if 0 <= hapus < len(todos):
                todos.pop(hapus)
    elif pilih == "3":
        for i, t in enumerate(todos, 1):
            print(f"{i}. {t}")
    elif pilih == "4":
        break`
                    }
                ]
            }
        ]
    },

    { // 31
        id: 31,
        title: "Operasi List di Python",
        description: "Belajar berbagai operasi dasar pada list seperti menambah, menghapus, mengubah, dan mengakses elemen.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "📋",
        topics: [
            "Apa itu List?",
            "Operasi Dasar List",
            "Method-Method List"
        ],
        color: "#FF6B6B",
        content: [
            {
                id: 1,
                title: "Apa itu List?",
                type: "theory",
                content: `
# Pengenalan List

**List** adalah struktur data yang digunakan untuk menyimpan kumpulan data dalam satu variabel.

## Karakteristik List:
- **Ordered** → Elemen memiliki urutan tetap
- **Mutable** → Bisa diubah setelah dibuat
- **Boleh duplikat** → Boleh ada elemen yang sama
- **Bisa berisi tipe data berbeda**

## Cara Membuat List:
\`\`\`python
# List kosong
list_kosong = []
list_kosong2 = list()

# List dengan elemen
buah = ["apel", "jeruk", "mangga"]
angka = [1, 2, 3, 4, 5]
campuran = [1, "hello", 3.14, True]

# List dengan duplikat
nilai = [85, 90, 85, 78, 90]
\`\`\`

## Mengakses Elemen List:
\`\`\`python
buah = ["apel", "jeruk", "mangga", "pisang"]

print(buah[0])    # apel (elemen pertama)
print(buah[1])    # jeruk
print(buah[-1])   # pisang (elemen terakhir)
print(buah[1:3])  # ['jeruk', 'mangga'] (slicing)
\`\`\`
            `
            },
            {
                id: 2,
                title: "Operasi Dasar List",
                type: "theory",
                content: `
# Operasi Dasar pada List

## 1. Mengubah Elemen
\`\`\`python
buah = ["apel", "jeruk", "mangga"]
buah[1] = "anggur"  # Ubah elemen index 1
print(buah)  # ['apel', 'anggur', 'mangga']
\`\`\`

## 2. Menambah Elemen
\`\`\`python
buah = ["apel", "jeruk"]

# append() - tambah di akhir
buah.append("mangga")
print(buah)  # ['apel', 'jeruk', 'mangga']

# insert() - tambah di index tertentu
buah.insert(1, "anggur")
print(buah)  # ['apel', 'anggur', 'jeruk', 'mangga']

# extend() - tambah multiple elemen
buah.extend(["pisang", "kiwi"])
print(buah)  # ['apel', 'anggur', 'jeruk', 'mangga', 'pisang', 'kiwi']
\`\`\`

## 3. Menghapus Elemen
\`\`\`python
buah = ["apel", "anggur", "jeruk", "mangga"]

# remove() - hapus berdasarkan nilai
buah.remove("anggur")
print(buah)  # ['apel', 'jeruk', 'mangga']

# pop() - hapus berdasarkan index (default terakhir)
buah.pop(1)  # hapus index 1
print(buah)  # ['apel', 'mangga']

# del - hapus dengan statement
del buah[0]
print(buah)  # ['mangga']

# clear() - hapus semua elemen
buah.clear()
print(buah)  # []
\`\`\`

## 4. Operasi Lainnya
\`\`\`python
angka = [3, 1, 4, 1, 5, 9]

# len() - panjang list
print(len(angka))  # 6

# count() - hitung kemunculan nilai
print(angka.count(1))  # 2

# index() - cari index nilai
print(angka.index(4))  # 2

# sort() - urutkan
angka.sort()
print(angka)  # [1, 1, 3, 4, 5, 9]

# reverse() - balik urutan
angka.reverse()
print(angka)  # [9, 5, 4, 3, 1, 1]
\`\`\`
            `,
                codeExample: `# Contoh operasi list
print("=== MENAMBAH ELEMEN ===")
buah = ["apel", "jeruk"]
print("Awal:", buah)

buah.append("mangga")
print("Setelah append:", buah)

buah.insert(1, "anggur")
print("Setelah insert:", buah)

print("\\n=== MENGUBAH ELEMEN ===")
buah[0] = "APEL"
print("Setubah ubah index 0:", buah)

print("\\n=== MENGHAPUS ELEMEN ===")
buah.remove("anggur")
print("Setelah remove:", buah)

terhapus = buah.pop()
print("Elemen terhapus:", terhapus)
print("Setelah pop:", buah)

print("\\n=== OPERASI LAIN ===")
angka = [5, 2, 8, 1, 9]
print("Panjang list:", len(angka))
print("Index dari 8:", angka.index(8))

angka.sort()
print("Setelah sort:", angka)`,
                expectedOutput: `=== MENAMBAH ELEMEN ===
Awal: ['apel', 'jeruk']
Setelah append: ['apel', 'jeruk', 'mangga']
Setelah insert: ['apel', 'anggur', 'jeruk', 'mangga']

=== MENGUBAH ELEMEN ===
Setubah ubah index 0: ['APEL', 'anggur', 'jeruk', 'mangga']

=== MENGHAPUS ELEMEN ===
Setelah remove: ['APEL', 'jeruk', 'mangga']
Elemen terhapus: mangga
Setelah pop: ['APEL', 'jeruk']

=== OPERASI LAIN ===
Panjang list: 5
Index dari 8: 2
Setelah sort: [1, 2, 5, 8, 9]`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Operasi List

Kerjakan soal berikut:
1. Buat list buah dan tambahkan 3 buah baru
2. Hapus buah tertentu dari list
3. Urutkan list angka secara descending
4. Cari dan ubah elemen tertentu dalam list
5. Gabungkan dua list menjadi satu
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Tambah Buah",
                        description: "Buat list buah awal ['apel', 'jeruk'], lalu tambah 'mangga', 'pisang', 'anggur'",
                        hint: "Gunakan extend() atau multiple append()",
                        solution: `buah = ['apel', 'jeruk']
buah.extend(['mangga', 'pisang', 'anggur'])
print(buah)  # ['apel', 'jeruk', 'mangga', 'pisang', 'anggur']`
                    },
                    {
                        id: 2,
                        title: "Hapus Elemen",
                        description: "Dari list ['apel', 'jeruk', 'mangga', 'pisang'], hapus 'jeruk'",
                        hint: "Gunakan remove()",
                        solution: `buah = ['apel', 'jeruk', 'mangga', 'pisang']
buah.remove('jeruk')
print(buah)  # ['apel', 'mangga', 'pisang']`
                    },
                    {
                        id: 3,
                        title: "Sort Descending",
                        description: "Urutkan [5, 2, 8, 1, 9] dari terbesar ke terkecil",
                        hint: "Gunakan sort() lalu reverse(), atau sort(reverse=True)",
                        solution: `angka = [5, 2, 8, 1, 9]
angka.sort(reverse=True)
print(angka)  # [9, 8, 5, 2, 1]`
                    },
                    {
                        id: 4,
                        title: "Cari dan Ubah",
                        description: "Dalam list ['apel', 'jeruk', 'mangga'], cari 'jeruk' dan ubah menjadi 'anggur'",
                        hint: "Gunakan index() untuk mencari posisi, lalu assignment",
                        solution: `buah = ['apel', 'jeruk', 'mangga']
index_jeruk = buah.index('jeruk')
buah[index_jeruk] = 'anggur'
print(buah)  # ['apel', 'anggur', 'mangga']`
                    },
                    {
                        id: 5,
                        title: "Gabung List",
                        description: "Gabungkan list1 = [1, 2, 3] dan list2 = [4, 5, 6]",
                        hint: "Gunakan extend() atau operator +",
                        solution: `list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)
print(list1)  # [1, 2, 3, 4, 5, 6]`
                    }
                ]
            }
        ]
    },

    { // 32
        id: 32,
        title: "Copy List di Python",
        description: "Memahami perbedaan antara shallow copy dan deep copy pada list, serta kapan menggunakannya.",
        level: "Pemula Menengah",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "📑",
        topics: [
            "Shallow Copy",
            "Deep Copy",
            "Perbedaan dan Penggunaan"
        ],
        color: "#4ECDC4",
        content: [
            {
                id: 1,
                title: "Shallow Copy",
                type: "theory",
                content: `
# Shallow Copy pada List

**Shallow Copy** membuat list baru, tetapi elemen-elemennya masih merujuk ke objek yang sama.

## Cara Melakukan Shallow Copy:

\`\`\`python
# Original list
original = [1, 2, 3, 4]

# 1. Menggunakan slicing [:]
copy1 = original[:]

# 2. Menggunakan method copy()
copy2 = original.copy()

# 3. Menggunakan constructor list()
copy3 = list(original)

print("Original:", original)
print("Copy1:", copy1)
print("Copy2:", copy2)
print("Copy3:", copy3)
\`\`\`

## Perilaku Shallow Copy:
\`\`\`python
original = [1, 2, 3]
copy = original.copy()

# Mengubah copy TIDAK mempengaruhi original
copy[0] = 99

print("Original:", original)  # [1, 2, 3]
print("Copy:", copy)          # [99, 2, 3]
\`\`\`

## Masalah dengan Shallow Copy (pada nested list):
\`\`\`python
original = [[1, 2], [3, 4]]
copy = original.copy()

# Mengubah elemen dalam nested list
copy[0][0] = 99

print("Original:", original)  # [[99, 2], [3, 4]] → TERPENGARUH!
print("Copy:", copy)          # [[99, 2], [3, 4]]
\`\`\`

**Kesimpulan:** Shallow copy aman untuk list 1 dimensi, tetapi bermasalah untuk nested list.
            `
            },
            {
                id: 2,
                title: "Deep Copy",
                type: "theory",
                content: `
# Deep Copy pada List

**Deep Copy** membuat list baru beserta semua elemen di dalamnya (termasuk nested list) benar-benar terpisah.

## Menggunakan Module copy
\`\`\`python
import copy

original = [[1, 2], [3, 4]]
deep_copy = copy.deepcopy(original)

# Mengubah deep copy TIDAK mempengaruhi original
deep_copy[0][0] = 99

print("Original:", original)    # [[1, 2], [3, 4]] → TIDAK TERPENGARUH!
print("Deep Copy:", deep_copy)  # [[99, 2], [3, 4]]
\`\`\`

## Perbandingan Shallow vs Deep Copy:
\`\`\`python
import copy

# Original nested list
original = [[1, 2], [3, 4]]

# Shallow Copy
shallow = original.copy()

# Deep Copy  
deep = copy.deepcopy(original)

# Test dengan mengubah nested element
shallow[0][0] = "SHALLOW"
deep[0][0] = "DEEP"

print("Original:", original)   # [['SHALLOW', 2], [3, 4]]
print("Shallow:", shallow)     # [['SHALLOW', 2], [3, 4]]
print("Deep:", deep)           # [['DEEP', 2], [3, 4]]
\`\`\`

## Kapan Menggunakan Deep Copy?
- Ketika bekerja dengan **nested list**
- Ketika ingin **benar-benar memisahkan** data
- Ketika melakukan **manipulasi data kompleks**

## Kapan Cukup Shallow Copy?
- Untuk **list 1 dimensi** sederhana
- Ketika **performansi** lebih penting (deep copy lebih lambat)
- Ketika tidak ada nested mutable objects
            `,
                codeExample: `import copy

print("=== SHALLOW COPY ===")
original1 = [1, 2, 3, 4]
shallow = original1.copy()

shallow[0] = 99
print("Original:", original1)  # [1, 2, 3, 4]
print("Shallow:", shallow)     # [99, 2, 3, 4]

print("\\n=== MASALAH SHALLOW COPY ===")
original2 = [[1, 2], [3, 4]]
shallow2 = original2.copy()

shallow2[0][0] = 99
print("Original:", original2)  # [[99, 2], [3, 4]]
print("Shallow:", shallow2)    # [[99, 2], [3, 4]]

print("\\n=== DEEP COPY ===")
original3 = [[1, 2], [3, 4]]
deep = copy.deepcopy(original3)

deep[0][0] = 999
print("Original:", original3)  # [[1, 2], [3, 4]]
print("Deep:", deep)           # [[999, 2], [3, 4]]

print("\\n=== PERBANDINGAN ===")
list_a = [1, [2, 3], 4]
list_b = list_a.copy()          # Shallow
list_c = copy.deepcopy(list_a)  # Deep

list_b[1][0] = "SHALLOW"
list_c[1][0] = "DEEP"

print("A (original):", list_a)  # [1, ['SHALLOW', 3], 4]
print("B (shallow):", list_b)   # [1, ['SHALLOW', 3], 4]  
print("C (deep):", list_c)      # [1, ['DEEP', 3], 4]`,
                expectedOutput: `=== SHALLOW COPY ===
Original: [1, 2, 3, 4]
Shallow: [99, 2, 3, 4]

=== MASALAH SHALLOW COPY ===
Original: [[99, 2], [3, 4]]
Shallow: [[99, 2], [3, 4]]

=== DEEP COPY ===
Original: [[1, 2], [3, 4]]
Deep: [[999, 2], [3, 4]]

=== PERBANDINGAN ===
A (original): [1, ['SHALLOW', 3], 4]
B (shallow): [1, ['SHALLOW', 3], 4]
C (deep): [1, ['DEEP', 3], 4]`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Copy List

Kerjakan soal berikut:
1. Buat shallow copy dan ubah elemen non-nested
2. Demonstrasi masalah shallow copy dengan nested list
3. Gunakan deep copy untuk nested list
4. Bandingkan hasil shallow vs deep copy
5. Buat fungsi untuk duplikasi list dengan aman
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Shallow Copy Sederhana",
                        description: "Buat shallow copy dari [1, 2, 3, 4] dan ubah elemen pertama menjadi 99",
                        hint: "Gunakan copy() method",
                        solution: `original = [1, 2, 3, 4]
copy_list = original.copy()
copy_list[0] = 99
print("Original:", original)
print("Copy:", copy_list)`
                    },
                    {
                        id: 2,
                        title: "Masalah Shallow Copy",
                        description: "Demonstrasi masalah shallow copy dengan nested list [[1, 2], [3, 4]]",
                        hint: "Ubah elemen dalam nested list pada copy",
                        solution: `original = [[1, 2], [3, 4]]
shallow = original.copy()
shallow[0][0] = 99
print("Original terpengaruh:", original)  # [[99, 2], [3, 4]]`
                    },
                    {
                        id: 3,
                        title: "Deep Copy Solution",
                        description: "Selesaikan masalah nested list dengan deep copy",
                        hint: "Gunakan copy.deepcopy()",
                        solution: `import copy
original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)
deep[0][0] = 99
print("Original aman:", original)  # [[1, 2], [3, 4]]`
                    },
                    {
                        id: 4,
                        title: "Perbandingan Langsung",
                        description: "Bandingkan shallow vs deep copy pada list yang sama [1, [2, 3], 4]",
                        hint: "Buat kedua jenis copy dan ubah nested element",
                        solution: `import copy
original = [1, [2, 3], 4]
shallow = original.copy()
deep = copy.deepcopy(original)

shallow[1][0] = "SHALLOW"
deep[1][0] = "DEEP"

print("Original:", original)
print("Shallow:", shallow)
print("Deep:", deep)`
                    },
                    {
                        id: 5,
                        title: "Fungsi Duplikasi Aman",
                        description: "Buat fungsi yang return copy aman dari list (otomatis pilih shallow/deep)",
                        hint: "Cek jika ada nested list, gunakan deep copy",
                        solution: `import copy

def safe_copy(lst):
    # Cek jika ada nested list
    for item in lst:
        if isinstance(item, list):
            return copy.deepcopy(lst)
    return lst.copy()

# Test
list1 = [1, 2, 3]
list2 = [[1, 2], [3, 4]]

print("Simple:", safe_copy(list1))
print("Nested:", safe_copy(list2))`
                    }
                ]
            }
        ]
    },

    { // 33
        id: 33,
        title: "Nested List / List Bersarang",
        description: "Belajar bekerja dengan list di dalam list, akses elemen, dan manipulasi data multidimensi.",
        level: "Pemula Menengah",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "📊",
        topics: [
            "Konsep Nested List",
            "Akses Elemen Nested List",
            "Manipulasi Nested List"
        ],
        color: "#45B7D1",
        content: [
            {
                id: 1,
                title: "Konsep Nested List",
                type: "theory",
                content: `
# Pengenalan Nested List

**Nested List** adalah list yang berisi list lain di dalamnya. Ini berguna untuk merepresentasikan data multidimensi.

## Contoh Nested List:

\`\`\`python
# List 2D (seperti matriks)
matrix = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
]

# List siswa dengan nilai
siswa = [
    ["Alice", 85, 90, 78],
    ["Bob", 92, 88, 95],
    ["Charlie", 78, 85, 80]
]

# List bersarang tidak beraturan
irregular = [
    [1, 2],
    [3, 4, 5],
    [6]
]
\`\`\`

## Visualisasi Nested List:

\`\`\`python
matrix = [
    [1, 2, 3],     # matrix[0]
    [4, 5, 6],     # matrix[1] 
    [7, 8, 9]      # matrix[2]
]

# matrix[0] = [1, 2, 3]
# matrix[1] = [4, 5, 6]
# matrix[2] = [7, 8, 9]
\`\`\`

## Kegunaan Nested List:
- **Matriks** dalam matematika
- **Tabel data** 
- **Game boards** (papan catur, tic-tac-toe)
- **Grafik dan koordinat**
- **Struktur data tree**
            `
            },
            {
                id: 2,
                title: "Akses dan Manipulasi",
                type: "theory",
                content: `
# Akses dan Manipulasi Nested List

## 1. Mengakses Elemen Nested List
\`\`\`python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Akses elemen tunggal
print(matrix[0][0])   # 1 (baris 0, kolom 0)
print(matrix[1][2])   # 6 (baris 1, kolom 2)
print(matrix[2][1])   # 8 (baris 2, kolom 1)

# Akses entire row
print(matrix[0])      # [1, 2, 3]

# Akses entire column (dengan list comprehension)
kolom_0 = [row[0] for row in matrix]
print(kolom_0)        # [1, 4, 7]
\`\`\`

## 2. Mengubah Elemen Nested List
\`\`\`python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Ubah elemen tunggal
matrix[0][0] = 99
print(matrix)  # [[99, 2, 3], [4, 5, 6], [7, 8, 9]]

# Ubah entire row
matrix[1] = [10, 11, 12]
print(matrix)  # [[99, 2, 3], [10, 11, 12], [7, 8, 9]]
\`\`\`

## 3. Iterasi melalui Nested List
\`\`\`python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Iterasi baris demi baris
for baris in matrix:
    print(baris)
# Output:
# [1, 2, 3]
# [4, 5, 6]  
# [7, 8, 9]

# Iterasi setiap elemen
for i, baris in enumerate(matrix):
    for j, nilai in enumerate(baris):
        print(f"matrix[{i}][{j}] = {nilai}")
\`\`\`

## 4. Operasi pada Nested List
\`\`\`python
# Menambah row baru
matrix = [[1, 2], [3, 4]]
matrix.append([5, 6])
print(matrix)  # [[1, 2], [3, 4], [5, 6]]

# Menambah kolom baru
for row in matrix:
    row.append(0)  # tambah 0 di setiap row
print(matrix)  # [[1, 2, 0], [3, 4, 0], [5, 6, 0]]

# Menghapus row
matrix.pop(0)
print(matrix)  # [[3, 4, 0], [5, 6, 0]]
\`\`\`
            `,
                codeExample: `print("=== AKSES ELEMEN ===")
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print("Elemen [0][0]:", matrix[0][0])
print("Elemen [1][2]:", matrix[1][2])
print("Row 1:", matrix[1])

print("\\n=== ITERASI ===")
print("Iterasi per baris:")
for baris in matrix:
    print(baris)

print("\\nIterasi dengan index:")
for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        print(f"matrix[{i}][{j}] = {matrix[i][j]}")

print("\\n=== MANIPULASI ===")
# Ubah elemen
matrix[0][0] = 99
print("Setelah ubah [0][0]:", matrix)

# Tambah row
matrix.append([10, 11, 12])
print("Setelah tambah row:", matrix)

# Tambah kolom
for row in matrix:
    row.append(0)
print("Setelah tambah kolom:", matrix)`,
                expectedOutput: `=== AKSES ELEMEN ===
Elemen [0][0]: 1
Elemen [1][2]: 6
Row 1: [4, 5, 6]

=== ITERASI ===
Iterasi per baris:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Iterasi dengan index:
matrix[0][0] = 1
matrix[0][1] = 2
matrix[0][2] = 3
matrix[1][0] = 4
matrix[1][1] = 5
matrix[1][2] = 6
matrix[2][0] = 7
matrix[2][1] = 8
matrix[2][2] = 9

=== MANIPULASI ===
Setelah ubah [0][0]: [[99, 2, 3], [4, 5, 6], [7, 8, 9]]
Setelah tambah row: [[99, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
Setelah tambah kolom: [[99, 2, 3, 0], [4, 5, 6, 0], [7, 8, 9, 0], [10, 11, 12, 0]]`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Nested List

Kerjakan soal berikut:
1. Buat matriks 3x3 dan akses elemen diagonal
2. Buat list data siswa dengan nilai
3. Hitung rata-rata nilai setiap siswa
4. Transpose matriks (tukar baris dan kolom)
5. Buat papan tic-tac-toe kosong
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Akses Diagonal",
                        description: "Dari matriks 3x3, akses elemen diagonal [0,0], [1,1], [2,2]",
                        hint: "Gunakan loop dengan index yang sama",
                        solution: `matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

diagonal = []
for i in range(3):
    diagonal.append(matrix[i][i])
print("Diagonal:", diagonal)  # [1, 5, 9]`
                    },
                    {
                        id: 2,
                        title: "Data Siswa",
                        description: "Buat nested list berisi data: [nama, nilai_matematika, nilai_fisika, nilai_kimia]",
                        hint: "Gunakan list dalam list",
                        solution: `siswa = [
    ["Alice", 85, 90, 78],
    ["Bob", 92, 88, 95],
    ["Charlie", 78, 85, 80]
]
print("Data siswa:", siswa)`
                    },
                    {
                        id: 3,
                        title: "Rata-rata Nilai",
                        description: "Hitung rata-rata nilai setiap siswa dari data sebelumnya",
                        hint: "Loop melalui siswa, hitung rata-rata nilai (index 1-3)",
                        solution: `siswa = [
    ["Alice", 85, 90, 78],
    ["Bob", 92, 88, 95],
    ["Charlie", 78, 85, 80]
]

for data in siswa:
    nama = data[0]
    nilai = data[1:]
    rata_rata = sum(nilai) / len(nilai)
    print(f"{nama}: {rata_rata:.2f}")`
                    },
                    {
                        id: 4,
                        title: "Transpose Matriks",
                        description: "Buat fungsi untuk transpose matriks (tukar baris dan kolom)",
                        hint: "Gunakan nested loop dan list comprehension",
                        solution: `def transpose(matrix):
    return [[matrix[j][i] for j in range(len(matrix))] 
            for i in range(len(matrix[0]))]

matrix = [[1, 2, 3], [4, 5, 6]]
print("Original:", matrix)
print("Transpose:", transpose(matrix))`
                    },
                    {
                        id: 5,
                        title: "Papan Tic-Tac-Toe",
                        description: "Buat papan tic-tac-toe 3x3 kosong dengan nilai '-'",
                        hint: "Gunakan nested list dengan 3 baris dan 3 kolom",
                        solution: `papan = [['-' for _ in range(3)] for _ in range(3)]
print("Papan tic-tac-toe:")
for baris in papan:
    print(baris)`
                    }
                ]
            }
        ]
    },

    { // 34
        id: 34,
        title: "Deep Copy Nested List",
        description: "Memahami deep copy secara mendalam untuk nested list dan kapan harus menggunakannya.",
        level: "Menengah",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "🔍",
        topics: [
            "Kebutuhan Deep Copy",
            "Implementasi Deep Copy",
            "Studi Kasus"
        ],
        color: "#96CEB4",
        content: [
            {
                id: 1,
                title: "Kebutuhan Deep Copy",
                type: "theory",
                content: `
# Mengapa Deep Copy Diperlukan?

**Deep Copy** diperlukan ketika kita ingin membuat salinan lengkap dari nested list tanpa ada hubungan referensi.

## Masalah dengan Shallow Copy pada Nested List:

\`\`\`python
import copy

# Original nested list
original = [[1, 2], [3, 4], [5, 6]]

# Shallow Copy (masalah!)
shallow = original.copy()

# Ubah nested element pada copy
shallow[0][0] = 99

print("Original:", original)  # [[99, 2], [3, 4], [5, 6]] → TERPENGARUH!
print("Shallow:", shallow)    # [[99, 2], [3, 4], [5, 6]]
\`\`\`

## Solusi dengan Deep Copy:

\`\`\`python
import copy

# Original nested list  
original = [[1, 2], [3, 4], [5, 6]]

# Deep Copy (solusi!)
deep = copy.deepcopy(original)

# Ubah nested element pada copy
deep[0][0] = 99

print("Original:", original)  # [[1, 2], [3, 4], [5, 6]] → AMAN!
print("Deep:", deep)          # [[99, 2], [3, 4], [5, 6]]
\`\`\`

## Kapan Deep Copy Dibutuhkan?
1. **Manipulasi data tanpa mengubah original**
2. **Backup data kompleks**
3. **Parallel processing**
4. **Simulasi dan testing**
5. **Algoritma recursive**
            `
            },
            {
                id: 2,
                title: "Implementasi Deep Copy",
                type: "theory",
                content: `
# Implementasi Deep Copy

## 1. Menggunakan copy.deepcopy() (Recommended)
\`\`\`python
import copy

original = [[1, 2], [3, 4], [5, 6]]
deep_copy = copy.deepcopy(original)

# Test independence
deep_copy[0][0] = 999
print("Original tetap:", original)     # [[1, 2], [3, 4], [5, 6]]
print("Deep copy berubah:", deep_copy) # [[999, 2], [3, 4], [5, 6]]
\`\`\`

## 2. Manual Deep Copy (Educational Purpose)
\`\`\`python
def manual_deepcopy(nested_list):
    """Membuat deep copy manual untuk nested list"""
    if not isinstance(nested_list, list):
        return nested_list
    
    result = []
    for item in nested_list:
        if isinstance(item, list):
            result.append(manual_deepcopy(item))
        else:
            result.append(item)
    return result

# Test
original = [[1, 2], [3, 4], [5, 6]]
manual_copy = manual_deepcopy(original)

manual_copy[0][0] = 777
print("Original:", original)       # [[1, 2], [3, 4], [5, 6]]
print("Manual Copy:", manual_copy) # [[777, 2], [3, 4], [5, 6]]
\`\`\`

## 3. Deep Copy dengan List Comprehension
\`\`\`python
def deepcopy_comprehension(nested_list):
    """Deep copy menggunakan list comprehension"""
    return [deepcopy_comprehension(item) if isinstance(item, list) else item 
            for item in nested_list]

# Test
original = [[1, 2], [3, 4]]
comprehension_copy = deepcopy_comprehension(original)

comprehension_copy[0][0] = 888
print("Original:", original)               # [[1, 2], [3, 4]]
print("Comprehension Copy:", comprehension_copy) # [[888, 2], [3, 4]]
\`\`\`

## 4. Performance Considerations
\`\`\`python
import copy
import time

# Large nested list
large_list = [[i for i in range(1000)] for _ in range(1000)]

# Time shallow copy
start = time.time()
shallow = large_list.copy()
print(f"Shallow copy: {time.time() - start:.4f} seconds")

# Time deep copy  
start = time.time()
deep = copy.deepcopy(large_list)
print(f"Deep copy: {time.time() - start:.4f} seconds")
\`\`\`

**Catatan:** Deep copy lebih lambat tetapi lebih aman untuk nested structures.
            `,
                codeExample: `import copy

print("=== MASALAH SHALLOW COPY ===")
original = [[1, 2], [3, 4], [5, 6]]
shallow = original.copy()

print("Sebelum perubahan:")
print("Original:", original)
print("Shallow:", shallow)

shallow[0][0] = 99
print("\\nSetelah ubah shallow[0][0]:")
print("Original:", original)  # Terpengaruh!
print("Shallow:", shallow)

print("\\n=== SOLUSI DEEP COPY ===")
original2 = [[1, 2], [3, 4], [5, 6]]
deep = copy.deepcopy(original2)

print("Sebelum perubahan:")
print("Original:", original2)
print("Deep:", deep)

deep[0][0] = 999
print("\\nSetelah ubah deep[0][0]:")
print("Original:", original2)  # Tidak terpengaruh!
print("Deep:", deep)

print("\\n=== MANUAL DEEP COPY ===")
def manual_deepcopy(lst):
    if not isinstance(lst, list):
        return lst
    return [manual_deepcopy(item) for item in lst]

original3 = [[1, 2], [3, [4, 5]]]
manual = manual_deepcopy(original3)

manual[1][1][0] = 777
print("Original:", original3)  # [[1, 2], [3, [4, 5]]]
print("Manual:", manual)       # [[1, 2], [3, [777, 5]]]`,
                expectedOutput: `=== MASALAH SHALLOW COPY ===
Sebelum perubahan:
Original: [[1, 2], [3, 4], [5, 6]]
Shallow: [[1, 2], [3, 4], [5, 6]]

Setelah ubah shallow[0][0]:
Original: [[99, 2], [3, 4], [5, 6]]
Shallow: [[99, 2], [3, 4], [5, 6]]

=== SOLUSI DEEP COPY ===
Sebelum perubahan:
Original: [[1, 2], [3, 4], [5, 6]]
Deep: [[1, 2], [3, 4], [5, 6]]

Setelah ubah deep[0][0]:
Original: [[1, 2], [3, 4], [5, 6]]
Deep: [[999, 2], [3, 4], [5, 6]]

=== MANUAL DEEP COPY ===
Original: [[1, 2], [3, [4, 5]]]
Manual: [[1, 2], [3, [777, 5]]]`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Deep Copy

Kerjakan soal berikut:
1. Demonstrasikan masalah shallow copy dengan nested list 3 level
2. Gunakan deep copy untuk membuat backup data yang aman
3. Buat fungsi deep copy manual untuk list 2 level
4. Bandingkan performa shallow vs deep copy
5. Implementasi game state dengan deep copy untuk undo functionality
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Nested List 3 Level",
                        description: "Demonstrasi masalah shallow copy dengan list 3 level: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]",
                        hint: "Ubah elemen paling dalam pada copy",
                        solution: `import copy
original = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
shallow = original.copy()
shallow[0][0][0] = 99
print("Original terpengaruh:", original[0][0][0])  # 99`
                    },
                    {
                        id: 2,
                        title: "Backup Data Aman",
                        description: "Buat backup dari data siswa [[nama, [nilai1, nilai2]], ...] menggunakan deep copy",
                        hint: "Gunakan copy.deepcopy()",
                        solution: `import copy
data_siswa = [["Alice", [85, 90]], ["Bob", [92, 88]]]
backup = copy.deepcopy(data_siswa)
backup[0][1][0] = 100
print("Original aman:", data_siswa[0][1][0])  # 85`
                    },
                    {
                        id: 3,
                        title: "Deep Copy Manual 2 Level",
                        description: "Buat fungsi deep copy manual yang bekerja untuk list 2 level",
                        hint: "Gunakan nested loop atau list comprehension",
                        solution: `def deepcopy_2level(lst):
    return [[item for item in sublist] for sublist in lst]

original = [[1, 2], [3, 4]]
copy_list = deepcopy_2level(original)
copy_list[0][0] = 99
print("Original:", original[0][0])  # 1`
                    },
                    {
                        id: 4,
                        title: "Performa Copy",
                        description: "Bandingkan waktu yang dibutuhkan shallow vs deep copy untuk list besar",
                        hint: "Gunakan time.time()",
                        solution: `import copy
import time

large_list = [[i for i in range(100)] for _ in range(1000)]

start = time.time()
shallow = large_list.copy()
print(f"Shallow: {time.time()-start:.4f}s")

start = time.time()
deep = copy.deepcopy(large_list)
print(f"Deep: {time.time()-start:.4f}s")`
                    },
                    {
                        id: 5,
                        title: "Undo Functionality",
                        description: "Implementasi simple undo dengan menyimpan history menggunakan deep copy",
                        hint: "Gunakan stack untuk menyimpan state",
                        solution: `import copy

class Game:
    def __init__(self):
        self.state = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
        self.history = []
    
    def make_move(self, row, col, player):
        self.history.append(copy.deepcopy(self.state))
        self.state[row][col] = player
    
    def undo(self):
        if self.history:
            self.state = self.history.pop()

game = Game()
game.make_move(0, 0, 'X')
game.make_move(1, 1, 'O')
print("Current:", game.state)
game.undo()
print("After undo:", game.state)`
                    }
                ]
            }
        ]
    },

    { // 35
        id: 35,
        title: "Looping List dan Enumerate",
        description: "Belajar berbagai cara iterasi melalui list menggunakan for loop, while loop, dan enumerate.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "🔄",
        topics: [
            "For Loop dengan List",
            "Enumerate Function",
            "While Loop dengan List"
        ],
        color: "#FECA57",
        content: [
            {
                id: 1,
                title: "For Loop dengan List",
                type: "theory",
                content: `
# For Loop dengan List

For loop adalah cara paling umum untuk iterasi melalui list di Python.

## 1. Basic For Loop
\`\`\`python
buah = ["apel", "jeruk", "mangga", "pisang"]

# Iterasi melalui nilai
for item in buah:
    print(item)
# Output:
# apel
# jeruk  
# mangga
# pisang
\`\`\`

## 2. For Loop dengan Range dan Index
\`\`\`python
buah = ["apel", "jeruk", "mangga", "pisang"]

# Iterasi melalui index
for i in range(len(buah)):
    print(f"Index {i}: {buah[i]}")
# Output:
# Index 0: apel
# Index 1: jeruk
# Index 2: mangga  
# Index 3: pisang
\`\`\`

## 3. For Loop dengan Conditional
\`\`\`python
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Hanya angka genap
for num in angka:
    if num % 2 == 0:
        print(num)
# Output: 2, 4, 6, 8, 10

# Dengan break
for num in angka:
    if num > 5:
        break
    print(num)
# Output: 1, 2, 3, 4, 5
\`\`\`

## 4. Nested For Loop untuk Nested List
\`\`\`python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for item in row:
        print(item, end=" ")
    print()  # newline
# Output:
# 1 2 3
# 4 5 6  
# 7 8 9
\`\`\`
            `
            },
            {
                id: 2,
                title: "Enumerate Function",
                type: "theory",
                content: `
# Enumerate Function

**enumerate()** memberikan index dan value sekaligus selama iterasi.

## 1. Basic Enumerate
\`\`\`python
buah = ["apel", "jeruk", "mangga"]

for index, value in enumerate(buah):
    print(f"Index {index}: {value}")
# Output:
# Index 0: apel
# Index 1: jeruk
# Index 2: mangga
\`\`\`

## 2. Enumerate dengan Start Index
\`\`\`python
buah = ["apel", "jeruk", "mangga"]

for index, value in enumerate(buah, start=1):
    print(f"No. {index}: {value}")
# Output:
# No. 1: apel
# No. 2: jeruk  
# No. 3: mangga
\`\`\`

## 3. Enumerate dengan Conditional
\`\`\`python
nilai = [85, 92, 78, 60, 95, 88]

for i, score in enumerate(nilai):
    if score >= 90:
        print(f"Siswa {i} lulus dengan nilai {score}")
# Output:
# Siswa 1 lulus dengan nilai 92
# Siswa 4 lulus dengan nilai 95
\`\`\`

## 4. Enumerate untuk Nested List
\`\`\`python
siswa = [
    ["Alice", 85, 90],
    ["Bob", 92, 88],
    ["Charlie", 78, 85]
]

for i, data in enumerate(siswa):
    nama = data[0]
    rata_rata = sum(data[1:]) / len(data[1:])
    print(f"Siswa {i+1}: {nama} - Rata-rata: {rata_rata:.1f}")
\`\`\`

## 5. While Loop dengan List
\`\`\`python
buah = ["apel", "jeruk", "mangga", "pisang"]
i = 0

while i < len(buah):
    print(buah[i])
    i += 1

# Dengan conditional break
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
i = 0
while i < len(angka):
    if angka[i] > 5:
        break
    print(angka[i])
    i += 1
\`\`\`
            `,
                codeExample: `print("=== BASIC FOR LOOP ===")
buah = ["apel", "jeruk", "mangga", "pisang"]
print("Iterasi nilai:")
for item in buah:
    print(f"- {item}")

print("\\n=== FOR LOOP DENGAN INDEX ===")
print("Iterasi dengan index:")
for i in range(len(buah)):
    print(f"Index {i}: {buah[i]}")

print("\\n=== ENUMERATE ===")
print("Menggunakan enumerate:")
for index, value in enumerate(buah):
    print(f"Index {index}: {value}")

print("\\n=== ENUMERATE DENGAN START ===")
for no, item in enumerate(buah, start=1):
    print(f"Buah #{no}: {item}")

print("\\n=== WHILE LOOP ===")
print("Menggunakan while loop:")
i = 0
while i < len(buah):
    print(f"Buah {i}: {buah[i]}")
    i += 1

print("\\n=== NESTED LIST ITERATION ===")
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print("Nested list dengan enumerate:")
for i, row in enumerate(matrix):
    for j, value in enumerate(row):
        print(f"matrix[{i}][{j}] = {value}")`,
                expectedOutput: `=== BASIC FOR LOOP ===
Iterasi nilai:
- apel
- jeruk
- mangga
- pisang

=== FOR LOOP DENGAN INDEX ===
Iterasi dengan index:
Index 0: apel
Index 1: jeruk
Index 2: mangga
Index 3: pisang

=== ENUMERATE ===
Menggunakan enumerate:
Index 0: apel
Index 1: jeruk
Index 2: mangga
Index 3: pisang

=== ENUMERATE DENGAN START ===
Buah #1: apel
Buah #2: jeruk
Buah #3: mangga
Buah #4: pisang

=== WHILE LOOP ===
Menggunakan while loop:
Buah 0: apel
Buah 1: jeruk
Buah 2: mangga
Buah 3: pisang

=== NESTED LIST ITERATION ===
Nested list dengan enumerate:
matrix[0][0] = 1
matrix[0][1] = 2
matrix[0][2] = 3
matrix[1][0] = 4
matrix[1][1] = 5
matrix[1][2] = 6
matrix[2][0] = 7
matrix[2][1] = 8
matrix[2][2] = 9`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Looping List

Kerjakan soal berikut:
1. Iterasi list dan cetak hanya elemen dengan panjang > 5
2. Gunakan enumerate untuk memberi nomor urut
3. Cari index dari elemen tertentu dalam list
4. Hitung total dan rata-rata nilai dalam list
5. Buat program pencarian sederhana dalam list
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Filter Panjang String",
                        description: "Dari list ['apel', 'jeruk', 'kiwi', 'mangga', 'pisang'], cetak hanya yang panjang > 4",
                        hint: "Gunakan for loop dengan if dan len()",
                        solution: `buah = ['apel', 'jeruk', 'kiwi', 'mangga', 'pisang']
for item in buah:
    if len(item) > 4:
        print(item)  # jeruk, mangga, pisang`
                    },
                    {
                        id: 2,
                        title: "Numbered List",
                        description: "Gunakan enumerate untuk mencetak list dengan nomor urut 1, 2, 3...",
                        hint: "Gunakan start=1 dalam enumerate",
                        solution: `items = ['apel', 'jeruk', 'mangga']
for no, item in enumerate(items, start=1):
    print(f"{no}. {item}")`
                    },
                    {
                        id: 3,
                        title: "Cari Index Elemen",
                        description: "Cari index dari 'mangga' dalam list ['apel', 'jeruk', 'mangga', 'pisang']",
                        hint: "Gunakan enumerate dengan conditional",
                        solution: `buah = ['apel', 'jeruk', 'mangga', 'pisang']
for i, item in enumerate(buah):
    if item == 'mangga':
        print(f"Index mangga: {i}")
        break`
                    },
                    {
                        id: 4,
                        title: "Total dan Rata-rata",
                        description: "Hitung total dan rata-rata dari [85, 92, 78, 90, 88]",
                        hint: "Gunakan for loop untuk total, lalu bagi dengan len()",
                        solution: `nilai = [85, 92, 78, 90, 88]
total = 0
for score in nilai:
    total += score
rata_rata = total / len(nilai)
print(f"Total: {total}, Rata-rata: {rata_rata:.1f}")`
                    },
                    {
                        id: 5,
                        title: "Program Pencarian",
                        description: "Buat program yang mencari apakah elemen ada dalam list, dan tampilkan indexnya",
                        hint: "Gunakan for loop dengan enumerate dan flag",
                        solution: `def cari_elemen(lst, target):
    for i, item in enumerate(lst):
        if item == target:
            return i
    return -1

buah = ['apel', 'jeruk', 'mangga']
hasil = cari_elemen(buah, 'jeruk')
print(f"Index: {hasil}")  # 1`
                    }
                ]
            }
        ]
    },

    { // 36
        id: 36,
        title: "Latihan List",
        description: "Praktik comprehensive dengan berbagai operasi list melalui studi kasus dan problem solving.",
        level: "Pemula Menengah",
        duration: "2 jam",
        lessons: 3,
        progress: 0,
        image: "💪",
        topics: [
            "Manipulasi Data List",
            "Algoritma dengan List",
            "Studi Kasus Real World"
        ],
        color: "#FF9FF3",
        content: [
            {
                id: 1,
                title: "Manipulasi Data List",
                type: "theory",
                content: `
# Manipulasi Data dengan List

## 1. Filtering Data
\`\`\`python
# Filter angka genap
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
genap = [x for x in angka if x % 2 == 0]
print(genap)  # [2, 4, 6, 8, 10]

# Filter string dengan panjang tertentu
kata = ["apel", "jeruk", "kiwi", "mangga", "pisang"]
panjang_5 = [k for k in kata if len(k) == 5]
print(panjang_5)  # ['jeruk', 'mangga', 'pisang']
\`\`\`

## 2. Transformasi Data
\`\`\`python
# Kuadrat dari setiap angka
angka = [1, 2, 3, 4, 5]
kuadrat = [x**2 for x in angka]
print(kuadrat)  # [1, 4, 9, 16, 25]

# Kapitalisasi string
buah = ["apel", "jeruk", "mangga"]
kapital = [b.upper() for b in buah]
print(kapital)  # ['APEL', 'JERUK', 'MANGA']
\`\`\`

## 3. Aggregasi Data
\`\`\`python
# Total dan rata-rata
nilai = [85, 92, 78, 90, 88]
total = sum(nilai)
rata_rata = total / len(nilai)
print(f"Total: {total}, Rata-rata: {rata_rata:.1f}")

# Maksimum dan minimum
print(f"Nilai tertinggi: {max(nilai)}")
print(f"Nilai terendah: {min(nilai)}")
\`\`\`

## 4. Sorting Data
\`\`\`python
# Sorting sederhana
angka = [5, 2, 8, 1, 9]
angka.sort()
print(angka)  # [1, 2, 5, 8, 9]

# Sorting descending
angka.sort(reverse=True)
print(angka)  # [9, 8, 5, 2, 1]

# Sorting dengan key
siswa = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
siswa.sort(key=lambda x: x[1], reverse=True)
print(siswa)  # [('Bob', 92), ('Alice', 85), ('Charlie', 78)]
\`\`\`
            `
            },
            {
                id: 2,
                title: "Algoritma dengan List",
                type: "theory",
                content: `
# Algoritma Umum dengan List

## 1. Mencari Elemen
\`\`\`python
# Linear search
def linear_search(lst, target):
    for i, item in enumerate(lst):
        if item == target:
            return i
    return -1

angka = [5, 2, 8, 1, 9]
print(linear_search(angka, 8))  # 2
\`\`\`

## 2. Menghitung Frekuensi
\`\`\`python
def hitung_frekuensi(lst):
    frekuensi = {}
    for item in lst:
        frekuensi[item] = frekuensi.get(item, 0) + 1
    return frekuensi

data = ["apel", "jeruk", "apel", "mangga", "jeruk", "apel"]
print(hitung_frekuensi(data))
# {'apel': 3, 'jeruk': 2, 'mangga': 1}
\`\`\`

## 3. Menghapus Duplikat
\`\`\`python
def hapus_duplikat(lst):
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

angka = [1, 2, 2, 3, 4, 4, 5, 1]
print(hapus_duplikat(angka))  # [1, 2, 3, 4, 5]
\`\`\`

## 4. Rotasi List
\`\`\`python
def rotate_list(lst, k):
    k = k % len(lst)  # Handle k > len(lst)
    return lst[-k:] + lst[:-k]

angka = [1, 2, 3, 4, 5]
print(rotate_list(angka, 2))  # [4, 5, 1, 2, 3]
\`\`\`

## 5. Flatten Nested List
\`\`\`python
def flatten_list(nested_list):
    result = []
    for item in nested_list:
        if isinstance(item, list):
            result.extend(flatten_list(item))
        else:
            result.append(item)
    return result

nested = [1, [2, 3], [4, [5, 6]], 7]
print(flatten_list(nested))  # [1, 2, 3, 4, 5, 6, 7]
\`\`\`
            `,
                codeExample: `print("=== MANIPULASI DATA ===")
# Data contoh
siswa = [
    ["Alice", 85, 90, 78],
    ["Bob", 92, 88, 95],
    ["Charlie", 78, 85, 80],
    ["Diana", 88, 92, 90]
]

print("Data siswa:")
for data in siswa:
    print(data)

print("\\n=== FILTERING ===")
# Siswa dengan nilai rata-rata >= 85
siswa_berprestasi = []
for data in siswa:
    nama = data[0]
    nilai = data[1:]
    rata_rata = sum(nilai) / len(nilai)
    if rata_rata >= 85:
        siswa_berprestasi.append((nama, rata_rata))

print("Siswa berprestasi:")
for nama, rata in siswa_berprestasi:
    print(f"{nama}: {rata:.1f}")

print("\\n=== TRANSFORMASI ===")
# Tambah bonus 5 point untuk nilai < 80
for data in siswa:
    for i in range(1, len(data)):
        if data[i] < 80:
            data[i] += 5

print("Setelah bonus:")
for data in siswa:
    print(data)

print("\\n=== AGREGASI ===")
# Statistik seluruh nilai
semua_nilai = []
for data in siswa:
    semua_nilai.extend(data[1:])

print(f"Total nilai: {sum(semua_nilai)}")
print(f"Rata-rata: {sum(semua_nilai)/len(semua_nilai):.1f}")
print(f"Nilai tertinggi: {max(semua_nilai)}")
print(f"Nilai terendah: {min(semua_nilai)}")`,
                expectedOutput: `=== MANIPULASI DATA ===
Data siswa:
['Alice', 85, 90, 78]
['Bob', 92, 88, 95]
['Charlie', 78, 85, 80]
['Diana', 88, 92, 90]

=== FILTERING ===
Siswa berprestasi:
Alice: 84.3
Bob: 91.7
Diana: 90.0

=== TRANSFORMASI ===
Setelah bonus:
['Alice', 85, 90, 83]
['Bob', 92, 88, 95]
['Charlie', 83, 85, 85]
['Diana', 88, 92, 90]

=== AGREGASI ===
Total nilai: 1064
Rata-rata: 88.7
Nilai tertinggi: 95
Nilai terendah: 83`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Comprehensive List

Kerjakan soal berikut:
1. Buat program manajemen inventory sederhana
2. Implementasi sistem voting dengan list
3. Buat fungsi untuk analisis data numerik
4. Implementasi algoritma sorting sederhana
5. Buat game tic-tac-toe sederhana
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Manajemen Inventory",
                        description: "Buat sistem inventory dengan fungsi: tambah, hapus, cari, dan tampilkan barang",
                        hint: "Gunakan list of lists untuk [nama, stok, harga]",
                        solution: `inventory = []

def tambah_barang(nama, stok, harga):
    inventory.append([nama, stok, harga])

def tampilkan_inventory():
    for i, barang in enumerate(inventory, 1):
        print(f"{i}. {barang[0]} - Stok: {barang[1]} - Harga: {barang[2]}")

# Test
tambah_barang("Laptop", 5, 10000000)
tambah_barang("Mouse", 20, 250000)
tampilkan_inventory()`
                    },
                    {
                        id: 2,
                        title: "Sistem Voting",
                        description: "Hitung hasil voting dari list kandidat dan tampilkan pemenang",
                        hint: "Gunakan dictionary atau list untuk menghitung votes",
                        solution: `def hitung_voting(votes):
    hasil = {}
    for vote in votes:
        hasil[vote] = hasil.get(vote, 0) + 1
    
    pemenang = max(hasil, key=hasil.get)
    return pemenang, hasil[pemenang]

votes = ["A", "B", "A", "C", "B", "A", "A"]
pemenang, jumlah = hitung_voting(votes)
print(f"Pemenang: {pemenang} dengan {jumlah} vote")`
                    },
                    {
                        id: 3,
                        title: "Analisis Data Numerik",
                        description: "Buat fungsi yang menerima list angka dan return statistik: mean, median, modus",
                        hint: "Gunakan built-in functions dan sorting",
                        solution: `def analisis_data(angka):
    angka.sort()
    mean = sum(angka) / len(angka)
    
    # Median
    n = len(angka)
    if n % 2 == 0:
        median = (angka[n//2-1] + angka[n//2]) / 2
    else:
        median = angka[n//2]
    
    # Modus
    from collections import Counter
    counter = Counter(angka)
    modus = counter.most_common(1)[0][0]
    
    return mean, median, modus

data = [1, 2, 3, 4, 5, 5, 6]
print(analisis_data(data))`
                    },
                    {
                        id: 4,
                        title: "Bubble Sort",
                        description: "Implementasi bubble sort algorithm untuk mengurutkan list",
                        hint: "Gunakan nested loop dan swap elemen",
                        solution: `def bubble_sort(lst):
    n = len(lst)
    for i in range(n):
        for j in range(0, n-i-1):
            if lst[j] > lst[j+1]:
                lst[j], lst[j+1] = lst[j+1], lst[j]
    return lst

angka = [64, 34, 25, 12, 22, 11, 90]
print("Sorted:", bubble_sort(angka))`
                    },
                    {
                        id: 5,
                        title: "Tic-Tac-Toe",
                        description: "Buat game tic-tac-toe sederhana dengan board 3x3",
                        hint: "Gunakan nested list dan loop untuk display board",
                        solution: `def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def check_winner(board):
    # Check rows, columns, diagonals
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != " ":
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] != " ":
            return board[0][i]
    if board[0][0] == board[1][1] == board[2][2] != " ":
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != " ":
        return board[0][2]
    return None

# Initialize board
board = [[" " for _ in range(3)] for _ in range(3)]
print_board(board)`
                    }
                ]
            }
        ]
    },

    { // 37
        id: 37,
        title: "Tuples dan Set",
        description: "Belajar tentang tuples (immutable sequences) dan sets (unordered collections dengan unique elements).",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "🔒",
        topics: [
            "Tuples - Immutable Sequences",
            "Sets - Unique Collections",
            "Operasi Sets"
        ],
        color: "#54A0FF",
        content: [
            {
                id: 1,
                title: "Tuples - Immutable Sequences",
                type: "theory",
                content: `
# Pengenalan Tuples

**Tuple** adalah sequence yang immutable (tidak bisa diubah setelah dibuat).

## Karakteristik Tuple:
- **Immutable** → Tidak bisa diubah setelah dibuat
- **Ordered** → Elemen memiliki urutan tetap
- **Boleh duplikat** → Boleh ada elemen yang sama
- **Bisa berisi tipe data berbeda**

## Membuat Tuple:
\`\`\`python
# Tuple kosong
tuple_kosong = ()
tuple_kosong2 = tuple()

# Tuple dengan elemen
buah = ("apel", "jeruk", "mangga")
angka = (1, 2, 3, 4, 5)
campuran = (1, "hello", 3.14, True)

# Tuple dengan 1 elemen (perlu koma)
tuple_satu = ("satu",)  # Ini tuple
bukan_tuple = ("satu")   # Ini string biasa

# Tanpa kurung (tuple packing)
tuple_packing = 1, 2, 3
print(type(tuple_packing))  # <class 'tuple'>
\`\`\`

## Mengakses Elemen Tuple:
\`\`\`python
buah = ("apel", "jeruk", "mangga", "pisang")

print(buah[0])    # apel
print(buah[1])    # jeruk  
print(buah[-1])   # pisang
print(buah[1:3])  # ('jeruk', 'mangga')
\`\`\`

## Tuple Tidak Bisa Diubah:
\`\`\`python
buah = ("apel", "jeruk", "mangga")

# Ini akan ERROR!
# buah[0] = "anggur"  # TypeError

# Tapi bisa di-reassign seluruhnya
buah = ("anggur", "jeruk", "mangga")
print(buah)  # ('anggur', 'jeruk', 'mangga')
\`\`\`

## Keuntungan Menggunakan Tuple:
1. **Lebih cepat** dari list
2. **Data integrity** → tidak bisa diubah accidentally
3. **Bisa digunakan sebagai dictionary keys**
4. **Return multiple values dari function**
            `
            },
            {
                id: 2,
                title: "Sets - Unique Collections",
                type: "theory",
                content: `
# Pengenalan Sets

**Set** adalah collection yang unordered, unindexed, dan tidak boleh ada duplikat.

## Karakteristik Set:
- **Unordered** → Tidak ada urutan tertentu
- **Unindexed** → Tidak bisa diakses dengan index
- **No duplicates** → Elemen unik otomatis
- **Mutable** → Bisa diubah (tambah/hapus)

## Membuat Set:
\`\`\`python
# Set kosong
set_kosong = set()  # BUKAN {} → itu dictionary

# Set dengan elemen
buah = {"apel", "jeruk", "mangga"}
angka = {1, 2, 3, 4, 5}

# Dari list (menghapus duplikat)
list_angka = [1, 2, 2, 3, 4, 4, 5]
set_angka = set(list_angka)
print(set_angka)  # {1, 2, 3, 4, 5}
\`\`\`

## Operasi Set Dasar:
\`\`\`python
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union (gabungan)
print(set1 | set2)  # {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection (irisan)
print(set1 & set2)  # {4, 5}

# Difference (selisih)
print(set1 - set2)  # {1, 2, 3}
print(set2 - set1)  # {6, 7, 8}

# Symmetric Difference (yang tidak sama)
print(set1 ^ set2)  # {1, 2, 3, 6, 7, 8}
\`\`\`

## Method Set:
\`\`\`python
buah = {"apel", "jeruk", "mangga"}

# Menambah elemen
buah.add("pisang")
print(buah)  # {'apel', 'jeruk', 'mangga', 'pisang'}

# Menghapus elemen
buah.remove("jeruk")  # Error jika tidak ada
buah.discard("kiwi")  # Tidak error jika tidak ada

# Pop (hapus random element)
terhapus = buah.pop()
print(f"Terhapus: {terhapus}")

# Clear
buah.clear()
print(buah)  # set()
\`\`\`

## Set Operations untuk Data Analysis:
\`\`\`python
# Menemukan common elements
kategori1 = {"elektronik", "fashion", "olahraga"}
kategori2 = {"fashion", "makanan", "otomotif"}
common = kategori1 & kategori2
print(f"Kategori common: {common}")  # {'fashion'}

# Menemukan unique elements
hanya_kategori1 = kategori1 - kategori2
print(f"Hanya di kategori1: {hanya_kategori1}")  # {'elektronik', 'olahraga'}
\`\`\`
            `,
                codeExample: `print("=== TUPLE OPERATIONS ===")
# Tuple creation and access
koordinat = (10, 20)
print("Koordinat:", koordinat)
print("X:", koordinat[0])
print("Y:", koordinat[1])

# Tuple unpacking
x, y = koordinat
print(f"Unpacked: x={x}, y={y}")

# Multiple return values
def hitung_statistik(angka):
    return min(angka), max(angka), sum(angka)/len(angka)

data = [5, 2, 8, 1, 9]
min_val, max_val, avg_val = hitung_statistik(data)
print(f"Min: {min_val}, Max: {max_val}, Avg: {avg_val:.1f}")

print("\\n=== SET OPERATIONS ===")
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}

print("Set A:", set_a)
print("Set B:", set_b)
print("Union:", set_a | set_b)
print("Intersection:", set_a & set_b)
print("Difference A-B:", set_a - set_b)
print("Symmetric Difference:", set_a ^ set_b)

print("\\n=== SET METHODS ===")
colors = {"red", "green", "blue"}
print("Original:", colors)

colors.add("yellow")
print("After add:", colors)

colors.discard("green")
print("After discard:", colors)

# Remove duplicates from list
numbers = [1, 2, 2, 3, 4, 4, 4, 5]
unique_numbers = set(numbers)
print("Original list:", numbers)
print("Unique:", unique_numbers)`,
                expectedOutput: `=== TUPLE OPERATIONS ===
Koordinat: (10, 20)
X: 10
Y: 20
Unpacked: x=10, y=20
Min: 1, Max: 9, Avg: 5.0

=== SET OPERATIONS ===
Set A: {1, 2, 3, 4, 5}
Set B: {4, 5, 6, 7, 8}
Union: {1, 2, 3, 4, 5, 6, 7, 8}
Intersection: {4, 5}
Difference A-B: {1, 2, 3}
Symmetric Difference: {1, 2, 3, 6, 7, 8}

=== SET METHODS ===
Original: {'red', 'green', 'blue'}
After add: {'red', 'green', 'blue', 'yellow'}
After discard: {'red', 'blue', 'yellow'}
Original list: [1, 2, 2, 3, 4, 4, 4, 5]
Unique: {1, 2, 3, 4, 5}`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Tuples dan Sets

Kerjakan soal berikut:
1. Gunakan tuple untuk koordinat 2D dan 3D
2. Buat function yang return multiple values menggunakan tuple
3. Gunakan set untuk menghapus duplikat dari list
4. Temukan common elements antara dua list menggunakan set
5. Implementasi simple database dengan tuple
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Koordinat dengan Tuple",
                        description: "Buat tuple untuk titik 2D (x, y) dan 3D (x, y, z), lalu hitung jarak dari origin",
                        hint: "Gunakan tuple unpacking dan rumus Pythagoras",
                        solution: `import math

def jarak_2d(titik):
    x, y = titik
    return math.sqrt(x**2 + y**2)

def jarak_3d(titik):
    x, y, z = titik
    return math.sqrt(x**2 + y**2 + z**2)

titik_a = (3, 4)
titik_b = (1, 2, 2)

print(f"Jarak A: {jarak_2d(titik_a):.2f}")  # 5.00
print(f"Jarak B: {jarak_3d(titik_b):.2f}")  # 3.00`
                    },
                    {
                        id: 2,
                        title: "Multiple Return Values",
                        description: "Buat function yang menerima list angka dan return min, max, average dalam tuple",
                        hint: "Gunakan built-in functions min, max, sum",
                        solution: `def statistik(angka):
    if not angka:
        return None
    return min(angka), max(angka), sum(angka)/len(angka)

data = [10, 20, 30, 40, 50]
hasil = statistik(data)
print(f"Min: {hasil[0]}, Max: {hasil[1]}, Avg: {hasil[2]}")`
                    },
                    {
                        id: 3,
                        title: "Hapus Duplikat dengan Set",
                        description: "Hapus duplikat dari list [1, 2, 2, 3, 4, 4, 4, 5, 1] menggunakan set",
                        hint: "Convert ke set lalu kembali ke list",
                        solution: `numbers = [1, 2, 2, 3, 4, 4, 4, 5, 1]
unique_numbers = list(set(numbers))
print("Original:", numbers)
print("Unique:", unique_numbers)`
                    },
                    {
                        id: 4,
                        title: "Common Elements",
                        description: "Temukan elemen yang sama antara list1 = [1, 2, 3, 4] dan list2 = [3, 4, 5, 6]",
                        hint: "Gunakan set intersection",
                        solution: `list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
common = set(list1) & set(list2)
print("Common elements:", common)  # {3, 4}`
                    },
                    {
                        id: 5,
                        title: "Simple Database",
                        description: "Buat simple database dengan tuple: (id, nama, usia) dan cari berdasarkan id",
                        hint: "Gunakan list of tuples dan loop untuk searching",
                        solution: `database = [
    (1, "Alice", 25),
    (2, "Bob", 30),
    (3, "Charlie", 28)
]

def cari_by_id(id_target):
    for record in database:
        if record[0] == id_target:
            return record
    return None

print(cari_by_id(2))  # (2, 'Bob', 30)`
                    }
                ]
            }
        ]
    },

    { // 38
        id: 38,
        title: "Dictionary",
        description: "Belajar tentang dictionary - struktur data key-value pairs yang powerful di Python.",
        level: "Pemula",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "📚",
        topics: [
            "Pengenalan Dictionary",
            "Membuat dan Mengakses Dictionary",
            "Method-Method Dictionary"
        ],
        color: "#FF6B6B",
        content: [
            {
                id: 1,
                title: "Pengenalan Dictionary",
                type: "theory",
                content: `
# Pengenalan Dictionary

**Dictionary** adalah struktur data yang menyimpan data dalam pasangan **key-value**.

## Karakteristik Dictionary:
- **Unordered** (sebelum Python 3.7, sekarang ordered)
- **Mutable** → bisa diubah
- **Indexed by keys** → bukan oleh index numerik
- **No duplicate keys** → key harus unik
- **Keys must be immutable** → string, number, tuple

## Analogi Dictionary:
Bayangkan dictionary seperti kamus:
- **Key** = kata yang dicari
- **Value** = arti dari kata tersebut

\`\`\`python
# Contoh: Kamus bahasa
kamus = {
    "apple": "apel",
    "banana": "pisang", 
    "orange": "jeruk"
}
\`\`\`

## Mengapa Menggunakan Dictionary?
1. **Fast lookup** → akses data sangat cepat
2. **Flexible data structure** → bisa menyimpan berbagai tipe data
3. **Real-world modeling** → cocok untuk data seperti JSON, database records
4. **Powerful methods** → banyak method built-in yang useful
            `
            },
            {
                id: 2,
                title: "Membuat dan Mengakses Dictionary",
                type: "theory",
                content: `
# Membuat dan Mengakses Dictionary

## 1. Membuat Dictionary:
\`\`\`python
# Dictionary kosong
dict_kosong = {}
dict_kosong2 = dict()

# Dictionary dengan data
siswa = {
    "nama": "Alice",
    "usia": 20,
    "jurusan": "Informatika"
}

# Dictionary dengan berbagai tipe key
campuran = {
    "string_key": "value1",
    123: "value2",           # integer key
    (1, 2): "value3"         # tuple key
}

# Dictionary nested
mahasiswa = {
    "identitas": {
        "nama": "Bob",
        "nim": "12345"
    },
    "nilai": [85, 90, 78]
}
\`\`\`

## 2. Mengakses Values:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

# Mengakses dengan key
print(siswa["nama"])     # Alice
print(siswa["usia"])     # 20

# Mengakses dengan get() (lebih aman)
print(siswa.get("nama"))     # Alice
print(siswa.get("alamat"))   # None (tidak error)
print(siswa.get("alamat", "Tidak ada"))  # "Tidak ada" (default value)

# Mengakses keys dan values
print(siswa.keys())    # dict_keys(['nama', 'usia', 'jurusan'])
print(siswa.values())  # dict_values(['Alice', 20, 'Informatika'])
print(siswa.items())   # dict_items([('nama', 'Alice'), ('usia', 20), ...])
\`\`\`

## 3. Mengubah dan Menambah Data:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20}

# Mengubah value
siswa["usia"] = 21
print(siswa)  # {'nama': 'Alice', 'usia': 21}

# Menambah key-value baru
siswa["jurusan"] = "Informatika"
siswa["ipk"] = 3.75
print(siswa)  # {'nama': 'Alice', 'usia': 21, 'jurusan': 'Informatika', 'ipk': 3.75}

# Update multiple values
siswa.update({"usia": 22, "ipk": 3.8})
print(siswa)
\`\`\`

## 4. Menghapus Data:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

# pop() - hapus key tertentu
usia = siswa.pop("usia")
print(usia)    # 20
print(siswa)   # {'nama': 'Alice', 'jurusan': 'Informatika'}

# popitem() - hapas last item (Python 3.7+)
last = siswa.popitem()
print(last)    # ('jurusan', 'Informatika')
print(siswa)   # {'nama': 'Alice'}

# del statement
del siswa["nama"]
print(siswa)   # {}

# clear() - hapus semua
siswa = {"a": 1, "b": 2}
siswa.clear()
print(siswa)   # {}
\`\`\`
            `,
                codeExample: `print("=== MEMBUAT DICTIONARY ===")
# Membuat dictionary siswa
siswa = {
    "nama": "Budi Santoso",
    "nim": "123456789",
    "jurusan": "Teknik Informatika",
    "usia": 21,
    "nilai": [85, 90, 78, 92]
}

print("Data siswa:", siswa)

print("\\n=== MENGASES DATA ===")
print("Nama:", siswa["nama"])
print("NIM:", siswa.get("nim"))
print("Usia:", siswa.get("usia"))

# Akses nested data
print("Nilai pertama:", siswa["nilai"][0])

print("\\n=== METHODS ===")
print("Keys:", list(siswa.keys()))
print("Values:", list(siswa.values()))
print("Items:", list(siswa.items()))

print("\\n=== MENGUBAH DATA ===")
siswa["usia"] = 22
siswa["ipk"] = 3.75  # Menambah baru
print("Setelah diubah:", siswa)

print("\\n=== MENGHAPUS DATA ===")
nilai = siswa.pop("nilai")
print("Nilai yang dihapus:", nilai)
print("Setelah pop:", siswa)

print("\\n=== CHECK EXISTENCE ===")
print("Ada key 'nama'?", "nama" in siswa)
print("Ada key 'alamat'?", "alamat" in siswa)`,
                expectedOutput: `=== MEMBUAT DICTIONARY ===
Data siswa: {'nama': 'Budi Santoso', 'nim': '123456789', 'jurusan': 'Teknik Informatika', 'usia': 21, 'nilai': [85, 90, 78, 92]}

=== MENGASES DATA ===
Nama: Budi Santoso
NIM: 123456789
Usia: 21
Nilai pertama: 85

=== METHODS ===
Keys: ['nama', 'nim', 'jurusan', 'usia', 'nilai']
Values: ['Budi Santoso', '123456789', 'Teknik Informatika', 21, [85, 90, 78, 92]]
Items: [('nama', 'Budi Santoso'), ('nim', '123456789'), ('jurusan', 'Teknik Informatika'), ('usia', 21), ('nilai', [85, 90, 78, 92])]

=== MENGUBAH DATA ===
Setelah diubah: {'nama': 'Budi Santoso', 'nim': '123456789', 'jurusan': 'Teknik Informatika', 'usia': 22, 'ipk': 3.75}

=== MENGHAPUS DATA ===
Nilai yang dihapus: [85, 90, 78, 92]
Setelah pop: {'nama': 'Budi Santoso', 'nim': '123456789', 'jurusan': 'Teknik Informatika', 'usia': 22, 'ipk': 3.75}

=== CHECK EXISTENCE ===
Ada key 'nama'? True
Ada key 'alamat'? False`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Dictionary

Kerjakan soal berikut:
1. Buat dictionary untuk menyimpan data buku
2. Buat sistem manajemen kontak sederhana
3. Hitung frekuensi kemunculan kata dalam list
4. Buat konverter suhu menggunakan dictionary
5. Implementasi simple database dengan dictionary
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Data Buku",
                        description: "Buat dictionary untuk buku dengan key: judul, penulis, tahun, harga",
                        hint: "Gunakan string keys dan berbagai value types",
                        solution: `buku = {
    "judul": "Python Programming",
    "penulis": "John Doe",
    "tahun": 2024,
    "harga": 150000,
    "tersedia": True
}
print("Data buku:", buku)`
                    },
                    {
                        id: 2,
                        title: "Manajemen Kontak",
                        description: "Buat sistem untuk tambah, hapus, dan cari kontak berdasarkan nama",
                        hint: "Gunakan dictionary dengan nama sebagai key",
                        solution: `kontak = {}

def tambah_kontak(nama, telepon):
    kontak[nama] = telepon

def hapus_kontak(nama):
    if nama in kontak:
        del kontak[nama]
        return True
    return False

def cari_kontak(nama):
    return kontak.get(nama, "Tidak ditemukan")

# Test
tambah_kontak("Alice", "08123456789")
tambah_kontak("Bob", "08198765432")
print("Kontak Alice:", cari_kontak("Alice"))`
                    },
                    {
                        id: 3,
                        title: "Frekuensi Kata",
                        description: "Hitung frekuensi kemunculan setiap kata dalam list ['apel', 'jeruk', 'apel', 'mangga', 'jeruk', 'apel']",
                        hint: "Gunakan dictionary dengan get() method",
                        solution: `kata_list = ['apel', 'jeruk', 'apel', 'mangga', 'jeruk', 'apel']
frekuensi = {}

for kata in kata_list:
    frekuensi[kata] = frekuensi.get(kata, 0) + 1

print("Frekuensi:", frekuensi)`
                    },
                    {
                        id: 4,
                        title: "Konverter Suhu",
                        description: "Buat dictionary konversi suhu dari Celsius ke Fahrenheit dan Kelvin",
                        hint: "Gunakan lambda functions atau rumus dalam dictionary",
                        solution: `konverter = {
    "c_to_f": lambda c: c * 9/5 + 32,
    "c_to_k": lambda c: c + 273.15,
    "f_to_c": lambda f: (f - 32) * 5/9,
    "k_to_c": lambda k: k - 273.15
}

celsius = 25
print(f"{celsius}°C = {konverter['c_to_f'](celsius):.1f}°F")
print(f"{celsius}°C = {konverter['c_to_k'](celsius):.1f}K")`
                    },
                    {
                        id: 5,
                        title: "Simple Database",
                        description: "Buat database siswa dengan NIM sebagai key dan dictionary sebagai value",
                        hint: "Gunakan nested dictionaries",
                        solution: `database_siswa = {
    "12345": {
        "nama": "Alice",
        "jurusan": "Informatika",
        "ipk": 3.8
    },
    "12346": {
        "nama": "Bob", 
        "jurusan": "Sistem Informasi",
        "ipk": 3.6
    }
}

def tampilkan_siswa(nim):
    if nim in database_siswa:
        return database_siswa[nim]
    return "NIM tidak ditemukan"

print("Data 12345:", tampilkan_siswa("12345"))`
                    }
                ]
            }
        ]
    },

    { // 39
        id: 39,
        title: "Operasi Dictionary",
        description: "Belajar berbagai operasi dan method dictionary untuk manipulasi data yang efektif.",
        level: "Pemula Menengah",
        duration: "1.5 jam",
        lessons: 3,
        progress: 0,
        image: "🛠️",
        topics: [
            "Method-Method Dictionary",
            "Dictionary Comprehension",
            "Advanced Operations"
        ],
        color: "#1DD1A1",
        content: [
            {
                id: 1,
                title: "Method-Method Dictionary",
                type: "theory",
                content: `
# Method-Method Dictionary

## 1. Access Methods:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

# get() - akses dengan default value
print(siswa.get("nama"))           # Alice
print(siswa.get("alamat", "Tidak ada"))  # Tidak ada

# setdefault() - get atau set jika tidak ada
usia = siswa.setdefault("usia", 21)      # 20 (sudah ada)
alamat = siswa.setdefault("alamat", "Jakarta")  # Jakarta (dibuat)
print(siswa)  # {'nama': 'Alice', 'usia': 20, 'jurusan': 'Informatika', 'alamat': 'Jakarta'}
\`\`\`

## 2. Update Methods:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20}

# update() - update multiple items
siswa.update({"usia": 21, "jurusan": "Informatika"})
print(siswa)  # {'nama': 'Alice', 'usia': 21, 'jurusan': 'Informatika'}

# update dengan iterable
siswa.update([("ipk", 3.8), ("semester", 5)])
print(siswa)
\`\`\`

## 3. Copy dan Clear:
\`\`\`python
original = {"a": 1, "b": 2, "c": 3}

# copy() - shallow copy
copy_dict = original.copy()
copy_dict["a"] = 99
print("Original:", original)  # {'a': 1, 'b': 2, 'c': 3}
print("Copy:", copy_dict)     # {'a': 99, 'b': 2, 'c': 3}

# clear() - hapus semua
original.clear()
print("After clear:", original)  # {}
\`\`\`

## 4. Iteration Methods:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

# keys(), values(), items()
print("Keys:", list(siswa.keys()))
print("Values:", list(siswa.values()))
print("Items:", list(siswa.items()))

# Iterasi langsung
for key in siswa:
    print(f"{key}: {siswa[key]}")

# Iterasi dengan items()
for key, value in siswa.items():
    print(f"{key}: {value}")
\`\`\`
            `
            },
            {
                id: 2,
                title: "Dictionary Comprehension",
                type: "theory",
                content: `
# Dictionary Comprehension

Dictionary comprehension memungkinkan membuat dictionary dengan sintaks yang ringkas.

## 1. Basic Comprehension:
\`\`\`python
# Buat dictionary {number: square}
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Dari list ke dictionary
buah = ["apel", "jeruk", "mangga"]
panjang_buah = {b: len(b) for b in buah}
print(panjang_buah)  # {'apel': 4, 'jeruk': 5, 'mangga': 6}
\`\`\`

## 2. Comprehension dengan Conditional:
\`\`\`python
# Hanya angka genap
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Filter berdasarkan value
siswa = {"Alice": 85, "Bob": 92, "Charlie": 78, "Diana": 95}
lulus = {nama: nilai for nama, nilai in siswa.items() if nilai >= 80}
print(lulus)  # {'Alice': 85, 'Bob': 92, 'Diana': 95}
\`\`\`

## 3. Transformasi Key dan Value:
\`\`\`python
# Transform key menjadi uppercase
siswa = {"alice": 85, "bob": 92, "charlie": 78}
siswa_upper = {k.upper(): v for k, v in siswa.items()}
print(siswa_upper)  # {'ALICE': 85, 'BOB': 92, 'CHARLIE': 78}

# Transform value (tambah bonus)
siswa_bonus = {nama: nilai + 5 for nama, nilai in siswa.items()}
print(siswa_bonus)  # {'alice': 90, 'bob': 97, 'charlie': 83}
\`\`\`

## 4. Advanced Operations:

### Merging Dictionaries:
\`\`\`python
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}

# Python 3.5+
merged = {**dict1, **dict2}
print(merged)  # {'a': 1, 'b': 3, 'c': 4}

# Python 3.9+
merged2 = dict1 | dict2
print(merged2)  # {'a': 1, 'b': 3, 'c': 4}
\`\`\`

### Inverting Dictionary:
\`\`\`python
# Swap key dan value (jika values unique)
siswa = {"Alice": 85, "Bob": 92, "Charlie": 78}
nilai_siswa = {nilai: nama for nama, nilai in siswa.items()}
print(nilai_siswa)  # {85: 'Alice', 92: 'Bob', 78: 'Charlie'}
\`\`\`

### Grouping Data:
\`\`\`python
# Group by category
items = [("fruit", "apple"), ("fruit", "banana"), ("vegetable", "carrot"), ("fruit", "orange")]

grouped = {}
for category, item in items:
    if category not in grouped:
        grouped[category] = []
    grouped[category].append(item)

print(grouped)  # {'fruit': ['apple', 'banana', 'orange'], 'vegetable': ['carrot']}
\`\`\`
            `,
                codeExample: `print("=== DICTIONARY METHODS ===")
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

print("get():", siswa.get("nama"))
print("setdefault():", siswa.setdefault("ipk", 3.8))
print("After setdefault:", siswa)

print("\\n=== DICTIONARY COMPREHENSION ===")
# Buat dictionary dari range
numbers = {x: x**3 for x in range(1, 6)}
print("Cubes:", numbers)

# Filter comprehension
buah = ["apel", "jeruk", "kiwi", "mangga", "pisang"]
panjang_filter = {b: len(b) for b in buah if len(b) > 4}
print("Buah panjang > 4:", panjang_filter)

print("\\n=== MERGING DICTIONARIES ===")
default_settings = {"theme": "light", "language": "en"}
user_settings = {"language": "id", "font_size": 14}

# Merge dengan update priority ke right
merged_settings = {**default_settings, **user_settings}
print("Merged settings:", merged_settings)

print("\\n=== GROUPING DATA ===")
data = [
    ("programming", "Python"),
    ("programming", "JavaScript"), 
    ("science", "Physics"),
    ("programming", "Java"),
    ("science", "Chemistry")
]

# Group by category menggunakan setdefault
categories = {}
for category, item in data:
    categories.setdefault(category, []).append(item)

print("Grouped data:", categories)

print("\\n=== INVERTING DICTIONARY ===")
color_codes = {"red": "#FF0000", "green": "#00FF00", "blue": "#0000FF"}
codes_color = {code: color for color, code in color_codes.items()}
print("Inverted:", codes_color)`,
                expectedOutput: `=== DICTIONARY METHODS ===
get(): Alice
setdefault(): 3.8
After setdefault: {'nama': 'Alice', 'usia': 20, 'jurusan': 'Informatika', 'ipk': 3.8}

=== DICTIONARY COMPREHENSION ===
Cubes: {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
Buah panjang > 4: {'jeruk': 5, 'mangga': 6, 'pisang': 6}

=== MERGING DICTIONARIES ===
Merged settings: {'theme': 'light', 'language': 'id', 'font_size': 14}

=== GROUPING DATA ===
Grouped data: {'programming': ['Python', 'JavaScript', 'Java'], 'science': ['Physics', 'Chemistry']}

=== INVERTING DICTIONARY ===
Inverted: {'#FF0000': 'red', '#00FF00': 'green', '#0000FF': 'blue'}`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Operasi Dictionary

Kerjakan soal berikut:
1. Buat word frequency counter menggunakan dictionary
2. Implementasi cache sederhana dengan dictionary
3. Buat konfigurasi system dengan nested dictionary
4. Transformasi data menggunakan dictionary comprehension
5. Buat fungsi untuk merge multiple dictionaries
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Word Frequency Counter",
                        description: "Hitung frekuensi setiap kata dalam string yang diberikan",
                        hint: "Split string dan gunakan dictionary untuk counting",
                        solution: `def word_frequency(text):
    words = text.lower().split()
    frequency = {}
    for word in words:
        frequency[word] = frequency.get(word, 0) + 1
    return frequency

text = "hello world hello python world python python"
print(word_frequency(text))`
                    },
                    {
                        id: 2,
                        title: "Simple Cache",
                        description: "Buat cache system yang menyimpan hasil komputasi mahal",
                        hint: "Gunakan dictionary dengan function arguments sebagai key",
                        solution: `cache = {}

def expensive_function(x):
    if x in cache:
        print("Returning cached result")
        return cache[x]
    
    print("Computing...")
    result = x * x  # Simulasi komputasi mahal
    cache[x] = result
    return result

print(expensive_function(5))
print(expensive_function(5))  # Should return cached`
                    },
                    {
                        id: 3,
                        title: "System Configuration",
                        description: "Buat nested dictionary untuk system configuration",
                        hint: "Gunakan multiple level dictionaries",
                        solution: `config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "credentials": {
            "username": "admin",
            "password": "secret"
        }
    },
    "server": {
        "host": "0.0.0.0",
        "port": 8000
    }
}

print("DB username:", config["database"]["credentials"]["username"])`
                    },
                    {
                        id: 4,
                        title: "Data Transformation",
                        description: "Transform list of tuples menjadi dictionary menggunakan comprehension",
                        hint: "Gunakan dictionary comprehension dengan tuple unpacking",
                        solution: `data = [("a", 1), ("b", 2), ("c", 3), ("d", 4)]
result = {key: value * 2 for key, value in data}
print(result)  # {'a': 2, 'b': 4, 'c': 6, 'd': 8}`
                    },
                    {
                        id: 5,
                        title: "Merge Dictionaries",
                        description: "Buat fungsi yang merge multiple dictionaries, dengan priority right-to-left",
                        hint: "Gunakan ** unpacking atau update()",
                        solution: `def merge_dicts(*dicts):
    result = {}
    for d in dicts:
        result.update(d)
    return result

dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
dict3 = {"c": 5, "d": 6}

print(merge_dicts(dict1, dict2, dict3))  # {'a': 1, 'b': 3, 'c': 5, 'd': 6}`
                    }
                ]
            }
        ]
    },

    { // 40
        id: 40,
        title: "Looping Dictionary",
        description: "Belajar berbagai cara iterasi melalui dictionary menggunakan for loop, items(), keys(), dan values().",
        level: "Pemula",
        duration: "1 jam",
        lessons: 3,
        progress: 0,
        image: "🔄",
        topics: [
            "Basic Dictionary Iteration",
            "Iterasi dengan items()",
            "Advanced Looping Techniques"
        ],
        color: "#F368E0",
        content: [
            {
                id: 1,
                title: "Basic Dictionary Iteration",
                type: "theory",
                content: `
# Basic Dictionary Iteration

## 1. Iterasi melalui Keys (Default):
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

# Cara 1: Langsung iterasi (akan iterasi keys)
for key in siswa:
    print(f"Key: {key}")
# Output:
# Key: nama
# Key: usia  
# Key: jurusan

# Cara 2: Explicit dengan keys()
for key in siswa.keys():
    print(f"Key: {key} -> Value: {siswa[key]}")
\`\`\`

## 2. Iterasi melalui Values:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

for value in siswa.values():
    print(f"Value: {value}")
# Output:
# Value: Alice
# Value: 20
# Value: Informatika
\`\`\`

## 3. Mengakses Values selama Iterasi:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

for key in siswa:
    value = siswa[key]
    print(f"{key}: {value}")
# Output:
# nama: Alice
# usia: 20
# jurusan: Informatika
\`\`\`

## 4. Conditional Iteration:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika", "ipk": 3.8}

# Hanya keys dengan nilai string
for key in siswa:
    if isinstance(siswa[key], str):
        print(f"{key}: {siswa[key]}")
# Output:
# nama: Alice
# jurusan: Informatika

# Hanya keys tertentu
target_keys = ["nama", "jurusan"]
for key in target_keys:
    if key in siswa:
        print(f"{key}: {siswa[key]}")
\`\`\`
            `
            },
            {
                id: 2,
                title: "Iterasi dengan items()",
                type: "theory",
                content: `
# Iterasi dengan items() Method

**items()** method mengembalikan view object yang berisi key-value pairs sebagai tuples.

## 1. Basic items() Iteration:
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

for item in siswa.items():
    print(f"Item: {item} - Type: {type(item)}")
# Output:
# Item: ('nama', 'Alice') - Type: <class 'tuple'>
# Item: ('usia', 20) - Type: <class 'tuple'>
# Item: ('jurusan', 'Informatika') - Type: <class 'tuple'>
\`\`\`

## 2. Tuple Unpacking dengan items():
\`\`\`python
siswa = {"nama": "Alice", "usia": 20, "jurusan": "Informatika"}

for key, value in siswa.items():
    print(f"{key}: {value}")
# Output:
# nama: Alice
# usia: 20  
# jurusan: Informatika
\`\`\`

## 3. items() dengan Conditional:
\`\`\`python
siswa = {"Alice": 85, "Bob": 92, "Charlie": 78, "Diana": 95}

# Hanya siswa dengan nilai >= 90
for nama, nilai in siswa.items():
    if nilai >= 90:
        print(f"{nama} lulus dengan nilai {nilai}")
# Output:
# Bob lulus dengan nilai 92
# Diana lulus dengan nilai 95

# Filter berdasarkan key
for key, value in siswa.items():
    if key.startswith("A"):
        print(f"{key}: {value}")
# Output:
# Alice: 85
\`\`\`

## 4. items() dengan Enumerate:
\`\`\`python
siswa = {"Alice": 85, "Bob": 92, "Charlie": 78}

for i, (nama, nilai) in enumerate(siswa.items(), 1):
    print(f"{i}. {nama}: {nilai}")
# Output:
# 1. Alice: 85
# 2. Bob: 92  
# 3. Charlie: 78
\`\`\`

## 5. Advanced Looping Techniques:

### Looping dengan Sorting:
\`\`\`python
siswa = {"Charlie": 78, "Alice": 85, "Bob": 92}

# Sort by key
for nama, nilai in sorted(siswa.items()):
    print(f"{nama}: {nilai}")
# Output:
# Alice: 85
# Bob: 92
# Charlie: 78

# Sort by value (descending)
for nama, nilai in sorted(siswa.items(), key=lambda x: x[1], reverse=True):
    print(f"{nama}: {nilai}")
# Output:
# Bob: 92
# Alice: 85
# Charlie: 78
\`\`\`

### Looping Nested Dictionaries:
\`\`\`python
sekolah = {
    "kelas_A": {"Alice": 85, "Bob": 92},
    "kelas_B": {"Charlie": 78, "Diana": 95}
}

for kelas, siswa_dict in sekolah.items():
    print(f"\\n{kela s}:")
    for nama, nilai in siswa_dict.items():
        print(f"  {nama}: {nilai}")
# Output:
# kelas_A:
#   Alice: 85
#   Bob: 92
# kelas_B:
#   Charlie: 78
#   Diana: 95
\`\`\`
            `,
                codeExample: `print("=== BASIC ITERATION ===")
siswa = {
    "nama": "Budi Santoso",
    "nim": "123456789", 
    "jurusan": "Teknik Informatika",
    "ipk": 3.75,
    "semester": 5
}

print("Iterasi keys:")
for key in siswa:
    print(f"- {key}")

print("\\nIterasi values:")
for value in siswa.values():
    print(f"- {value}")

print("\\n=== ITEMS() ITERATION ===")
print("Dengan tuple unpacking:")
for key, value in siswa.items():
    print(f"{key}: {value}")

print("\\n=== CONDITIONAL ITERATION ===")
print("Hanya numeric values:")
for key, value in siswa.items():
    if isinstance(value, (int, float)):
        print(f"{key}: {value}")

print("\\n=== SORTED ITERATION ===")
nilai_siswa = {"Charlie": 78, "Alice": 85, "Bob": 92, "Diana": 88}

print("Sorted by name:")
for nama, nilai in sorted(nilai_siswa.items()):
    print(f"{nama}: {nilai}")

print("\\nSorted by value (descending):")
for nama, nilai in sorted(nilai_siswa.items(), key=lambda x: x[1], reverse=True):
    print(f"{nama}: {nilai}")

print("\\n=== NESTED DICTIONARY ITERATION ===")
universitas = {
    "Fakultas_Teknik": {
        "Informatika": {"jumlah_mahasiswa": 200, "akreditasi": "A"},
        "Sipil": {"jumlah_mahasiswa": 150, "akreditasi": "A"}
    },
    "Fakultas_Ekonomi": {
        "Manajemen": {"jumlah_mahasiswa": 180, "akreditasi": "B"},
        "Akuntansi": {"jumlah_mahasiswa": 160, "akreditasi": "A"}
    }
}

for fakultas, jurusan_dict in universitas.items():
    print(f"\\n{fakultas}:")
    for jurusan, info in jurusan_dict.items():
        print(f"  {jurusan}: {info['jumlah_mahasiswa']} mahasiswa, Akreditasi {info['akreditasi']}")`,
                expectedOutput: `=== BASIC ITERATION ===
Iterasi keys:
- nama
- nim
- jurusan
- ipk
- semester

Iterasi values:
- Budi Santoso
- 123456789
- Teknik Informatika
- 3.75
- 5

=== ITEMS() ITERATION ===
Dengan tuple unpacking:
nama: Budi Santoso
nim: 123456789
jurusan: Teknik Informatika
ipk: 3.75
semester: 5

=== CONDITIONAL ITERATION ===
Hanya numeric values:
ipk: 3.75
semester: 5

=== SORTED ITERATION ===
Sorted by name:
Alice: 85
Bob: 92
Charlie: 78
Diana: 88

Sorted by value (descending):
Bob: 92
Alice: 85
Diana: 88
Charlie: 78

=== NESTED DICTIONARY ITERATION ===
Fakultas_Teknik:
  Informatika: 200 mahasiswa, Akreditasi A
  Sipil: 150 mahasiswa, Akreditasi A

Fakultas_Ekonomi:
  Manajemen: 180 mahasiswa, Akreditasi B
  Akuntansi: 160 mahasiswa, Akreditasi A`
            },
            {
                id: 3,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Looping Dictionary

Kerjakan soal berikut:
1. Iterasi dictionary dan format output yang rapi
2. Hitung statistik dari dictionary values
3. Filter dictionary berdasarkan kondisi tertentu
4. Transform dictionary selama iterasi
5. Buat report dari nested dictionary
            `,
                exercises: [
                    {
                        id: 1,
                        title: "Format Output",
                        description: "Iterasi dictionary siswa dan tampilkan dalam format tabel rapi",
                        hint: "Gunakan string formatting dengan alignment",
                        solution: `siswa = {
    "nama": "Alice",
    "usia": 20,
    "jurusan": "Informatika",
    "ipk": 3.8,
    "semester": 5
}

print("DATA SISWA")
print("-" * 30)
for key, value in siswa.items():
    print(f"{key:10} : {value}")`
                    },
                    {
                        id: 2,
                        title: "Hitung Statistik",
                        description: "Dari dictionary nilai {'matematika': 85, 'fisika': 92, 'kimia': 78}, hitung rata-rata",
                        hint: "Gunakan values() method dan sum()",
                        solution: `nilai = {'matematika': 85, 'fisika': 92, 'kimia': 78}
total = sum(nilai.values())
rata_rata = total / len(nilai)
print(f"Rata-rata: {rata_rata:.1f}")`
                    },
                    {
                        id: 3,
                        title: "Filter Dictionary",
                        description: "Dari dictionary produk {'laptop': 1000, 'mouse': 25, 'keyboard': 50, 'monitor': 200}, filter yang harga > 100",
                        hint: "Gunakan dictionary comprehension dengan conditional",
                        solution: `produk = {'laptop': 1000, 'mouse': 25, 'keyboard': 50, 'monitor': 200}
mahal = {nama: harga for nama, harga in produk.items() if harga > 100}
print("Produk mahal:", mahal)`
                    },
                    {
                        id: 4,
                        title: "Transform Dictionary",
                        description: "Dari dictionary suhu {'Jakarta': 30, 'Bandung': 22, 'Surabaya': 35}, konversi ke Fahrenheit",
                        hint: "Gunakan dictionary comprehension dengan transformasi value",
                        solution: `suhu_c = {'Jakarta': 30, 'Bandung': 22, 'Surabaya': 35}
suhu_f = {kota: (c * 9/5 + 32) for kota, c in suhu_c.items()}
print("Suhu Fahrenheit:", suhu_f)`
                    },
                    {
                        id: 5,
                        title: "Nested Dictionary Report",
                        description: "Buat report dari nested dictionary data perusahaan",
                        hint: "Gunakan nested loops dengan items()",
                        solution: `perusahaan = {
    "IT": {
        "programmer": 10,
        "designer": 5,
        "manager": 2
    },
    "HR": {
        "recruiter": 3,
        "manager": 1
    },
    "Finance": {
        "accountant": 4,
        "analyst": 2
    }
}

print("LAPORAN KARYAWAN")
print("=" * 30)
total_karyawan = 0

for dept, positions in perusahaan.items():
    print(f"\\n{dept}:")
    dept_total = sum(positions.values())
    total_karyawan += dept_total
    for pos, count in positions.items():
        print(f"  {pos}: {count}")
    print(f"  Total {dept}: {dept_total}")

print(f"\\nTotal semua karyawan: {total_karyawan}")`
                    }
                ]
            }
        ]
    }
];

export default lessonCards;