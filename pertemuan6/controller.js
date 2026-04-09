import { users } from "./data.js";

const tampilkanData = () => {
  console.log("\n--- Daftar Pengguna ---");
  users.map((user, index) => {
    console.log(
      `${index + 1}. Nama: ${user.nama} | Umur: ${user.umur} | Email: ${user.email}`,
    );
  });
};

const tambahData = (nama, umur, alamat, email) => {
  const dataBaru = { nama, umur, alamat, email };
  users.push(dataBaru);
  console.log(`\n[BERHASIL] Data ${nama} telah ditambahkan.`);
};

const hapusData = (index) => {
  // index - 1 karena tampilan di console mulai dari 1, sedangkan array mulai dari 0
  const deletedUser = users.splice(index, 1);
  console.log(`\n[BERHASIL] Data ${deletedUser[0].nama} telah dihapus.`);
};

// --- EKSEKUSI PERINTAH ---

// 1. Tampilkan 10 data awal
tampilkanData();

// 2. Tambah minimal 2 data baru (Sesuai instruksi tugas)
tambahData("Andi", 22, "Jakarta", "andi@mail.com");
tambahData("Siti", 21, "Bandung", "siti@mail.com");

// 3. Tampilkan lagi untuk melihat data yang sudah bertambah
tampilkanData();

// 4. Hapus satu data (data pertama/index 0)
hapusData(0);

// 5. Tampilkan hasil akhir
tampilkanData();
