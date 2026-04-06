// 1. Data Produk Awal
let produkList = [
  { id: 1, nama: "laptop", harga: 120000 },
  { id: 2, nama: "smartphone", harga: 500000 },
  { id: 3, nama: "keyboard", harga: 300000 },
  { id: 4, nama: "charger", harga: 50000 },
  { id: 5, nama: "raket nyamuk", harga: 45000 },
];

// 2. Menampilkan Produk (Destructuring)
function tampilkanProduk() {
  console.log("\n=== DAFTAR PRODUK TOKO ===");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga}`);
  });
  console.log("--------------------------");
}

// 3. Menambahkan Produk (Spread Operator)
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru]; 
  console.log(`✅ Berhasil menambahkan: ${nama}`);
}

// 4. Menghapus Produk (Filter + Destructuring)
function hapusProduk(idTarget) {
  const produkDitemukan = produkList.find(({id}) => id === idTarget);
  
  if (!produkDitemukan) {
    console.log(`❌ Produk ID ${idTarget} tidak ditemukan!`);
    return;
  }

  produkList = produkList.filter(({ id }) => id !== idTarget);
  console.log(`🗑️ Produk "${produkDitemukan.nama}" (ID: ${idTarget}) dihapus.`);
}

// 5. Eksekusi
tampilkanProduk();
tambahProduk(6, "tablet", 200000);
tampilkanProduk();
hapusProduk(3); // Hapus Keyboard
tampilkanProduk();

// 6. Bonus Destructuring Array
const [p1, p2] = produkList;
console.log("Detail Produk Pertama Saat Ini:", p1);