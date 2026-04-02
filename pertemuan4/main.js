class Pelanggan {
  constructor(nama, telp, mobil) {
    this.nama = nama;
    this.telp = telp;
    this.mobil = mobil;
  }
}

const daftarSewa = [];

function tambahPelanggan(nama, telp, mobil) {
  const baru = new Pelanggan(nama, telp, mobil);
  daftarSewa.push(baru);
  console.log(`✅ Berhasil input: ${nama}`);
}

function lihatDaftar() {
  if (daftarSewa.length === 0) {
    console.log("❌ Belum ada yang sewa, Har.");
  } else {
    console.log("\n=== DAFTAR RENTAL MOBIL AZHAR BAHAGIA SELALU DAN TERSENYUM ===");
    console.table(daftarSewa);
  }
}

tambahPelanggan("columbina", "081234567", "Toyota GR Yaris");
tambahPelanggan("nahida", "085789101", "Honda Jazz");
tambahPelanggan("furina", "021-12345", "Suzuki Ertiga");

lihatDaftar();
