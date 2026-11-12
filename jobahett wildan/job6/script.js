// Data Dummy Berita
const dataBerita = [
    {
        id: 1,
        judul: "Kecerdasan Buatan (AI) Mengubah Lanskap Industri Kreatif di 2026",
        kategori: "teknologi",
        penulis: "Ahmad Rizki",
        tanggal: "12 November 2026",
        gambar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        ringkasan: "Teknologi AI generatif kini menjadi standar utama bagi para desainer dan pembuat konten profesional di seluruh dunia.",
        isi: "Perkembangan teknologi Kecerdasan Buatan (AI) pada tahun 2026 telah mencatatkan lompatan besar. Berbagai industri kreatif, mulai dari periklanan hingga perfilman, kini mengintegrasikan perangkat AI untuk mempercepat alur kerja. Meskipun demikian, para ahli menekankan bahwa sentuhan emosi manusia dan orisinalitas tetap menjadi kunci utama yang tidak bisa digantikan oleh mesin."
    },
    {
        id: 2,
        judul: "Timnas Indonesia Sukses Menembus Babak Kualifikasi Piala Dunia",
        kategori: "olahraga",
        penulis: "Budi Santoso",
        tanggal: "11 November 2026",
        gambar: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
        ringkasan: "Perjuangan skuad Garuda membuahkan hasil manis setelah menundukkan tim tamu di stadion utama.",
        isi: "Dukungan suporter yang memadati stadion menjadi energi tambahan bagi Timnas Indonesia. Dengan strategi menyerang yang diterapkan sejak menit awal, Indonesia berhasil mengamankan tiga poin penting yang mengantarkan mereka selangkah lebih dekat ke panggung dunia."
    },
    {
        id: 3,
        judul: "Inflasi Terkendali, Sektor Perbankan Catatkan Pertumbuhan Positif",
        kategori: "ekonomi",
        penulis: "Siti Aminah",
        tanggal: "10 November 2026",
        gambar: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
        ringkasan: "Bank Indonesia melaporkan stabilitas ekonomi nasional tetap terjaga di tengah ketidakpastian global.",
        isi: "Kebijakan moneter yang disiplin berhasil menjaga tingkat inflasi berada di rentang target sasaran pemerintah. Sektor perbankan nasional merespons positif kondisi ini dengan meningkatnya penyaluran kredit produktif kepada Usaha Mikro, Kecil, dan Menengah (UMKM)."
    },
    {
        id: 4,
        judul: "Inovasi Mobil Listrik Jarak Jauh Resmi Diluncurkan di Jakarta",
        kategori: "teknologi",
        penulis: "Ahmad Rizki",
        tanggal: "9 November 2026",
        gambar: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
        ringkasan: "Kendaraan ramah lingkungan ini diklaim mampu menempuh jarak hingga 800 km dalam sekali pengisian daya.",
        isi: "Pasar otomotif tanah air kembali kedatangan inovasi kendaraan listrik terbaru yang menawarkan kapasitas baterai super efisien. Kehadiran infrastruktur Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) yang semakin masif turut mendongkrak minat masyarakat."
    },
    {
        id: 5,
        judul: "Atlet Bulu Tangkis Indonesia Rebut Gelar Juara Umum di Kejuaraan Asia",
        kategori: "olahraga",
        penulis: "Budi Santoso",
        tanggal: "8 November 2026",
        gambar: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
        ringkasan: "Ganda campuran dan tunggal putra sukses menyumbangkan medali emas setelah melalui pertarungan sengit.",
        isi: "Pertandingan final yang menegangkan mempertemukan wakil Indonesia melawan atlet tuan rumah. Berkat ketenangan dan ketahanan fisik yang prima di set penentuan, bendera merah putih kembali berkibar di podium tertinggi."
    }
];

// Fungsi untuk merender berita ke HTML
function tampilkanBerita(listBerita) {
    const heroSection = document.getElementById('heroSection');
    const newsGrid = document.getElementById('newsGrid');

    // Kosongkan kontainer terlebih dahulu
    heroSection.innerHTML = '';
    newsGrid.innerHTML = '';

    if (listBerita.length === 0) {
        newsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #64748b;">Berita tidak ditemukan.</p>';
        return;
    }

    // Ambil berita pertama untuk dijadikan Hero Berita Utama
    const beritaUtama = listBerita[0];
    heroSection.innerHTML = `
        <div class="hero-img">
            <img src="${beritaUtama.gambar}" alt="${beritaUtama.judul}">
        </div>
        <div class="hero-content">
            <span class="badge">${beritaUtama.kategori}</span>
            <h2>${beritaUtama.judul}</h2>
            <p>${beritaUtama.ringkasan}</p>
            <button class="btn" onclick="bukaModal(${beritaUtama.id})">Baca Selengkapnya</button>
        </div>
    `;

    // Sisa berita dimasukkan ke dalam Grid Berita Terbaru
    const sisaBerita = listBerita.slice(1);
    sisaBerita.forEach(berita => {
        const card = document.createElement('div');
        card.classList.add('news-card');
        card.innerHTML = `
            <img src="${berita.gambar}" alt="${berita.judul}">
            <div class="news-card-body">
                <span class="badge">${berita.kategori}</span>
                <h3>${berita.judul}</h3>
                <p>${berita.ringkasan}</p>
                <button class="btn" onclick="bukaModal(${berita.id})">Baca</button>
            </div>
        `;
        newsGrid.appendChild(card);
    });
}

// Fungsi Filter Berita berdasarkan Kategori
function filterBerita(kategori, event) {
    if (event) event.preventDefault();

    // Mengatur kelas active pada navigasi
    document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'));
    if (event) event.target.classList.add('active');

    if (kategori === 'semua') {
        tampilkanBerita(dataBerita);
    } else {
        const hasilFilter = dataBerita.filter(berita => berita.kategori === kategori);
        tampilkanBerita(hasilFilter);
    }
}

// Fungsi Pencarian Berita
function cariBerita() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const hasilPencarian = dataBerita.filter(berita => 
        berita.judul.toLowerCase().includes(keyword) || 
        berita.ringkasan.toLowerCase().includes(keyword)
    );
    tampilkanBerita(hasilPencarian);
}

// Fungsi Membuka Modal (Detail Berita)
function bukaModal(id) {
    const berita = dataBerita.find(b => b.id === id);
    if (berita) {
        document.getElementById('modalKategori').innerText = berita.kategori;
        document.getElementById('modalJudul').innerText = berita.judul;
        document.getElementById('modalPenulis').innerText = berita.penulis;
        document.getElementById('modalTanggal').innerText = berita.tanggal;
        document.getElementById('modalGambar').src = berita.gambar;
        document.getElementById('modalIsi').innerText = berita.isi;

        document.getElementById('newsModal').style.display = 'flex';
    }
}

// Fungsi Menutup Modal
function tutupModal() {
    document.getElementById('newsModal').style.display = 'none';
}

// Tutup modal jika pengguna klik di luar kotak modal
window.onclick = function(event) {
    const modal = document.getElementById('newsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Panggil fungsi tampilkan berita saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanBerita(dataBerita);
});