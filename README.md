# ❤️ Untuk Adekk - Valentine Website 💕

Website interaktif bertema Valentine yang dibuat dengan penuh cinta untuk pasangan tercinta!

## 🎨 Fitur

### 1. **Greeting Section** 👋
- Tampilan sambutan yang cantik dengan animasi
- Menampilkan "Hi adekk, how are you?" dengan efek hati yang berdetak
- Desain yang romantis dan menyentuh hati

### 2. **Interactive Choice Section** 🎯
- Pertanyaan interaktif "Kangen aku tidak?"
- Tombol "Iya" yang dapat ditekan dengan response yang indah
- Tombol "Tidak" yang lucu - tidak bisa ditekan dan bergerak saat di-hover
- Pesan balik yang muncul setelah memilih "Iya"

### 3. **Timeline Gallery** 📸
- Timeline yang menampilkan perjalanan hubungan kalian
- Masing-masing milestone dengan foto dan caption
- Desain yang bergantian kiri-kanan untuk perjalanan yang lebih menarik
- Animasi smooth dan responsif

### 4. **Animasi & Interaksi** ✨
- Animasi entrance yang smooth untuk semua elemen
- Efek heartbeat pada hati
- Floating hearts ketika hati diklik
- Responsive design untuk mobile dan desktop
- Gradien background yang indah

## 🚀 Cara Menggunakan

### 1. **Persiapkan Foto Anda**
Tempat foto di folder yang sama dengan file HTML:
- `photo1.jpg` - Foto pertama kalian berdua (awal cerita)
- `photo2.jpg` - Foto petualangan pertama
- `photo3.jpg` - Foto momen spesial
- `photo4.jpg` - Foto saat ini

Atau ubah nama file dalam `index.html` sesuai dengan foto Anda.

### 2. **Kustomisasi Konten**
Buka file `index.html` dan ubah:
- Judul dan greeting
- Pertanyaan ("Kangen aku tidak?")
- Deskripsi timeline (tanggal, tempat, cerita)
- Caption foto
- Pesan di bagian footer

### 3. **Jalankan Website**
- Buka file `index.html` di browser
- Atau upload ke GitHub Pages untuk sharing link

## 📁 Struktur File

```
untuk-adekk/
├── index.html       # File HTML utama
├── style.css        # Styling dan animasi
├── script.js        # Interaktivitas JavaScript
├── photo1.jpg       # Foto kenangan pertama
├── photo2.jpg       # Foto petualangan
├── photo3.jpg       # Foto momen spesial
├── photo4.jpg       # Foto saat ini
└── README.md        # File ini
```

## 🎨 Warna & Tema

- **Primary Colors**: Ungu (Gradient: #667eea → #764ba2)
- **Accent Colors**: Merah hati (#d63031)
- **Background**: Gradient ungu ke pink
- **Cards**: Putih semi-transparan dengan shadow

## 💻 Teknologi

- **HTML5** - Struktur
- **CSS3** - Styling, animasi, dan responsive design
- **Vanilla JavaScript** - Interaktivitas tanpa library eksternal

## 📱 Responsive

Website ini sudah dioptimalkan untuk:
- ✅ Desktop (1920px - 1024px)
- ✅ Tablet (1024px - 768px)
- ✅ Mobile (< 768px)

## 🎯 Cara Menyesuaikan

### Mengubah Warna
Edit di `style.css`:
```css
/* Ubah warna utama */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Ubah warna accent */
color: #d63031; /* Merah hati */
```

### Menambah Timeline Item
Tambahkan di `index.html` dalam section `.timeline`:
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Judul Kenangan</h3>
        <p class="timeline-date">Tanggal/Periode</p>
        <div class="timeline-image">
            <img src="photoX.jpg" alt="Deskripsi">
            <p class="image-caption">Caption foto</p>
        </div>
    </div>
</div>
```

### Mengubah Pesan Response
Edit di `script.js`:
```javascript
const funMessages = [
    'Pesan 1',
    'Pesan 2',
    'Pesan 3',
];
```

## 🎁 Tips Tambahan

1. **Sound Effects** - Tambahkan musik background atau sound effect saat tombol "Iya" diklik
2. **Confetti** - Gunakan library seperti `confetti.js` untuk efek confetti
3. **Countdown** - Tambahkan countdown untuk tanggal spesial
4. **Comment Section** - Tambahkan komentar personal di setiap timeline
5. **Password Protection** - Lindungi website dengan password jika ingin private

## 📸 Saran Foto

Gunakan foto berkualitas tinggi yang menampilkan:
- Foto berdua dengan senyuman
- Moment candid yang natural
- Aktivitas yang meaningful untuk kalian
- Ekspresi yang genuine dan penuh perasaan

## 💌 Pesan Dari Pembuat

Semoga website ini membuat pasangan Anda merasa istimewa dan dicintai! 
Setiap interaksi, animasi, dan detail dibuat dengan penuh perhatian dan kasih sayang. 💕

---

**Made with ❤️ for someone special**

*Last Updated: February 14, 2026*