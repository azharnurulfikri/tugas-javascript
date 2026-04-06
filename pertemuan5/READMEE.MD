# 🛒 Mini Management Toko Online

Aplikasi manajemen produk sederhana berbasis Node.js yang menerapkan konsep-konsep **JavaScript ES6+** untuk efisiensi dan fleksibilitas kode.

## 🚀 Fitur Utama
- **Menampilkan Produk**: List produk awal dengan detail ID, Nama, dan Harga.
- **Menambah Produk**: Fitur penambahan data tanpa merusak data asli (Immutability).
- **Menghapus Produk**: Menghapus produk spesifik berdasarkan ID.

---

## 🛠️ Konsep JavaScript yang Digunakan

### 1. Destructuring Object & Array
Digunakan untuk "membongkar" properti objek secara langsung di dalam parameter fungsi atau perulangan, sehingga kode lebih ringkas.
- **Implementasi**: Digunakan pada fungsi `tampilkanProduk` dan metode `.filter()`.
  


### 2. Spread Operator (`...`)
Digunakan untuk menggabungkan array lama dengan data baru tanpa menggunakan `.push()`. Ini menjaga integritas data asli (Immutability).
- **Implementasi**: `produkList = [...produkList, produkBaru];`



### 3. Rest Parameter (`...`)
Digunakan untuk menangkap sisa elemen dalam array atau argumen fungsi.
- **Implementasi**: Digunakan saat melakukan destructuring pada array produk untuk mengambil item tertentu dan menyimpan sisanya.

### 4. Array Methods (`forEach`, `filter`, `find`)
Menggantikan perulangan `for` konvensional agar kode lebih deklaratif dan mudah dibaca.
- **Filter**: Digunakan untuk menyaring data saat proses penghapusan.
- **Find**: Digunakan untuk mencari data spesifik sebelum dihapus.

---

## 💻 Cara Menjalankan

1. Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/).
2. Buka terminal atau CMD.
3. Jalankan perintah berikut:
   ```bash
   node nama_file_kamu.js
