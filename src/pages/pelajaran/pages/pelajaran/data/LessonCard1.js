// ./data/LessonCard1.js

export const lessonCards1 = [
    {
        id: 1,
        title: "Dasar-Dasar Python: Hello World & Variabel",
        description: "Belajar Python dari nol: instalasi, program pertama, variabel, tipe data dasar, string, operator, input/output, dan latihan awal.",
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
            "Latihan Praktik"
        ],
        color: "#4F46E5",
        content: [
            {
                id: 1,
                title: "Instalasi & Hello World",
                type: "theory",
                content: `
# Memulai Python

Python gampang banget dipakai buat pemula. Mari mulai dari instalasi sampai program pertama.

## Instalasi
1. Download dari python.org (versi 3.x)
2. Centang "Add Python to PATH"
3. Cek instalasi: \`python --version\`

## Program Pertama
\`\`\`python
print("Hello, World!")
print("Selamat belajar Python 👋")
\`\`\`
                `,
                codeExample: `print("Hello, World!")
print("Selamat belajar Python 👋")`,
                expectedOutput: `Hello, World!
Selamat belajar Python 👋`
            },
            {
                id: 2,
                title: "Variabel dan Tipe Data",
                type: "theory",
                content: `
# Variabel & Tipe Dasar

Variabel = wadah buat nyimpen data. Python dinamis, jadi ga perlu deklarasi tipe.

## Tipe dasar
- int: bilangan bulat
- float: bilangan desimal
- str: teks
- bool: True/False
- None: kosong
                `,
                codeExample: `a = 10
b = 3.14
nama = "Zayen"
is_cool = True
nothing = None

print(type(a), type(b), type(nama), type(is_cool), type(nothing))`,
                expectedOutput: `<class 'int'> <class 'float'> <class 'str'> <class 'bool'> <class 'NoneType'>`
            },
            {
                id: 3,
                title: "String & f-Strings",
                type: "theory",
                content: `
# String & f-Strings

String = teks. Bisa digabung, diulang, atau diformat.

## Operasi
- Gabung: "halo" + " dunia"
- Ulang: "hi" * 3
- Panjang: len("halo")
- Upper/lower: .upper(), .lower()

## f-Strings
Cara modern format teks.
                `,
                codeExample: `nama = "Zayen"
umur = 20
print("Halo, " + nama + ". Umurku " + str(umur))
print(f"Halo, {nama}. Umurku {umur}")`,
                expectedOutput: `Halo, Zayen. Umurku 20
Halo, Zayen. Umurku 20`
            },
            {
                id: 4,
                title: "Operator Aritmatika",
                type: "theory",
                content: `
# Operator Dasar

- + tambah
- - kurang
- * kali
- / bagi (float)
- // bagi bulat
- % modulus (sisa bagi)
- ** pangkat
                `,
                codeExample: `x = 7
y = 3
print(x + y, x - y, x * y, x / y)
print(x // y, x % y, x ** y)`,
                expectedOutput: `10 4 21 2.3333333333333335
2 1 343`
            },
            {
                id: 5,
                title: "Input & Output",
                type: "theory",
                content: `
# Input & Output

\`print()\` buat output, \`input()\` buat baca input (selalu string).

Konversi pakai \`int()\` atau \`float()\`.
                `,
                codeExample: `nama = input("Nama kamu siapa? ")
umur = int(input("Umur kamu berapa? "))
print(f"Halo, {nama}. Tahun depan umurmu {umur+1}.")`,
                expectedOutput: `Nama kamu siapa? [User input]
Umur kamu berapa? [User input]
Halo, [nama]. Tahun depan umurmu [umur+1].`
            },
            {
                id: 6,
                title: "Latihan Praktik",
                type: "practice",
                content: `
# Latihan Dasar Python

Coba selesaikan soal berikut untuk melatih pemahamanmu:
1. Minta input nama, lalu sapa pengguna.
2. Buat kalkulator sederhana (2 angka).
3. Cek angka genap atau ganjil.
    `,
                exercises: [
                    {
                        id: 1,
                        title: "Hello User",
                        description: "Program minta nama, lalu tampilkan sapaan.",
                        hint: "Gunakan input() dan f-string.",
                        solution: `nama = input("Siapa nama kamu? ")
print(f"Halo, {nama}!")`
                    },
                    {
                        id: 2,
                        title: "Kalkulator Sederhana",
                        description: "Input 2 angka, tampilkan hasil +, -, *, /.",
                        hint: "Gunakan int() untuk konversi input.",
                        solution: `a = int(input("Masukkan angka pertama: "))
b = int(input("Masukkan angka kedua: "))

print("Penjumlahan:", a + b)
print("Pengurangan:", a - b)
print("Perkalian:", a * b)
print("Pembagian:", a / b)`
                    },
                    {
                        id: 3,
                        title: "Cek Genap/Ganjil",
                        description: "Program minta angka, cek genap atau ganjil.",
                        hint: "Gunakan operator % 2.",
                        solution: `n = int(input("Masukkan angka: "))
if n % 2 == 0:
    print("Genap")
else:
    print("Ganjil")`
                    }
                ]
            }
        ]
    }
];

export default lessonCards1;