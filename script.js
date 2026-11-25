// --- 1. NAVIGASI HALAMAN ---
function showSection(sectionId) {
    // Sembunyikan semua section
    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.remove('active');
    });
    // Hilangkan status aktif di semua tombol nav
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');
    
    // Tandai tombol nav yang sesuai
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(sectionId)) {
            btn.classList.add('active');
        }
    });
}

// --- 2. LOGIKA PENYELESAIAN TUGAS (METODE SCAFFOLDING) ---
let daftarLangkah = [];
let indeksLangkah = 0;

const templateBimbingan = {
    matematika: [
        {
            judul: "Langkah 1: Identifikasi yang Diketahui & Ditanyakan",
            isi: "Tuliskan di kertasmu semua angka atau variabel yang ada di soal, lalu lingkari apa sebenarnya yang diminta oleh soal tersebut."
        },
        {
            judul: "Langkah 2: Tentukan Konsep atau Rumus",
            isi: "Hubungkan informasi yang diketahui dengan rumus dasar materi ini. Coba ingat kembali catatanmu: operasi apa yang menghubungkan variabel-variabel tersebut?"
        },
        {
            judul: "Langkah 3: Kerjakan Secara Bertahap & Cek Satuan",
            isi: "Masukkan angka ke dalam rumus yang kamu pilih. Pastikan semua satuan sudah sama (misalnya jam dengan km/jam). Coba hitung sendiri dulu sebelum mengecek hasilnya!"
        }
    ],
    ipa: [
        {
            judul: "Langkah 1: Pahami Fenomena atau Konsep Dasar",
            isi: "Identifikasi kejadian alam atau proses sains apa yang sedang dibahas dalam soal (misalnya: gaya, reaksi kimia, atau ekosistem)."
        },
        {
            judul: "Langkah 2: Cari Hubungan Sebab-Akibat",
            isi: "Tanyakan pada dirimu: 'Jika variabel A berubah, apa dampaknya terhadap B?' Gunakan hukum atau prinsip sains yang relevan."
        },
        {
            judul: "Langkah 3: Susun Penjelasan dengan Bahasamu Sendiri",
            isi: "Hindari menyalin definisi mentah-mentah. Jelaskan mengapa hal itu terjadi menggunakan logika sebab-akibat yang sudah kamu temukan."
        }
    ],
    bahasa: [
        {
            judul: "Langkah 1: Temukan Ide Pokok / Kata Kunci",
            isi: "Baca ulang perintah tugas atau teks dengan saksama. Garis bawahi kata kerja perintahnya (misalnya: analisis, bandingkan, atau simpulkan)."
        },
        {
            judul: "Langkah 2: Buat Kerangka Poin (Outline)",
            isi: "Tuliskan 3 poin utama yang ingin kamu sampaikan sebagai kerangka tulisan agar jawabanmu terstruktur dari pembuka hingga penutup."
        },
        {
            judul: "Langkah 3: Kembangkan dengan Kalimat Efektif",
            isi: "Kembangkan setiap poin menjadi paragraf utuh menggunakan kosakatamu sendiri, lalu baca ulang untuk memeriksa ejaan dan tanda baca."
        }
    ],
    umum: [
        {
            judul: "Langkah 1: Bedah Kata Kunci Pertanyaan",
            isi: "Perhatikan kata tanya yang digunakan (Apa, Mengapa, Bagaimana, Kapan). Setiap kata tanya membutuhkan kedalaman jawaban yang berbeda."
        },
        {
            judul: "Langkah 2: Hubungkan dengan Konteks",
            isi: "Coba ingat latar belakang peristiwa atau topik yang ditanyakan. Bagaimana peristiwa tersebut bisa terjadi dan apa dampaknya?"
        },
        {
            judul: "Langkah 3: Rangkum Kesimpulan Mandiri",
            isi: "Susun jawabanmu dengan pola: Pernyataan utama -> Alasan/Bukti pendukung -> Kesimpulan singkat."
        }
    ]
};

function mulaiBimbingan() {
    const soal = document.getElementById('input-soal').value.trim();
    const usaha = document.getElementById('usaha-siswa').value.trim();
    const mapel = document.getElementById('mapel').value;

    if (!soal) {
        alert("Tuliskan dulu soal atau tugas yang sedang kamu kerjakan!");
        return;
    }

    if (!usaha) {
        alert("Isi dulu kolom usaha awalmu! Coba tuliskan apa saja yang sudah kamu pahami dari soal tersebut.");
        return;
    }

    daftarLangkah = templateBimbingan[mapel];
    indeksLangkah = 0;

    const container = document.getElementById('langkah-container');
    container.innerHTML = `
        <div class="step-item" style="border-left: 4px solid #10b981;">
            <div class="step-title">Apresiasi Usaha Awalmu!</div>
            <p>Bagus sekali kamu sudah mencoba memikirkan: <em>"${usaha}"</em>. Sekarang, mari bedah soal <strong>"${soal}"</strong> langkah demi langkah:</p>
        </div>
    `;

    document.getElementById('area-bimbingan').classList.remove('hidden');
    document.getElementById('btn-next-hint').classList.remove('hidden');
    tampilkanLangkahBerikutnya();
}

function tampilkanLangkahBerikutnya() {
    if (indeksLangkah < daftarLangkah.length) {
        const langkah = daftarLangkah[indeksLangkah];
        const container = document.getElementById('langkah-container');
        
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step-item';
        stepDiv.innerHTML = `
            <div class="step-title">${langkah.judul}</div>
            <p>${langkah.isi}</p>
        `;
        container.appendChild(stepDiv);
        indeksLangkah++;

        if (indeksLangkah === daftarLangkah.length) {
            document.getElementById('btn-next-hint').classList.add('hidden');
        }
    }
}

// --- 3. LOGIKA KUIS PEMAHAMAN ---
const dataKuis = [
    {
        pertanyaan: "Mengapa langsung menyalin jawaban dari AI tanpa membacanya bisa merugikan siswa?",
        opsi: [
            "Karena kuota internet cepat habis",
            "Karena otak tidak terlatih memecahkan masalah saat ujian tanpa AI",
            "Karena AI selalu memberikan jawaban yang salah",
            "Karena guru tidak suka teknologi"
        ],
        jawaban: 1,
        penjelasan: "Tepat! AI hanyalah alat bantu. Jika terbiasa menyalin tanpa memahami prosesnya, kemampuan analisis dan pemecahan masalahmu tidak akan berkembang."
    },
    {
        pertanyaan: "Apa langkah pertama terbaik saat menghadapi soal cerita Matematika yang terasa sulit?",
        opsi: [
            "Langsung memfoto soal dan mencari jawaban akhirnya",
            "Menyerah dan melewati soal tersebut",
            "Menuliskan informasi yang diketahui dan apa yang ditanyakan",
            "Menebak angka secara acak"
        ],
        jawaban: 2,
        penjelasan: "Benar! Memetakan informasi yang diketahui dan ditanyakan membantu otak melihat pola dan rumus apa yang dibutuhkan."
    },
    {
        pertanyaan: "Bagaimana cara terbaik menggunakan AI untuk belajar?",
        opsi: [
            "Meminta AI mengerjakan seluruh tugas dari awal sampai akhir",
            "Meminta AI menjelaskan konsepnya atau memberi petunjuk langkah demi langkah",
            "Menyalin jawaban AI tanpa mengubah satu kata pun",
            "Menggunakan AI saat ujian berlangsung"
        ],
        jawaban: 1,
        penjelasan: "Sangat tepat! Menjadikan AI sebagai tutor untuk bertanya konsep akan membuatmu paham materi secara mendalam."
    },
    {
        pertanyaan: "Sebuah kereta menempuh jarak 120 km dalam waktu 2 jam. Konsep apa yang digunakan untuk mencari kecepatannya?",
        opsi: [
            "Jarak dikali Waktu",
            "Waktu dibagi Jarak",
            "Jarak dibagi Waktu",
            "Jarak ditambah Waktu"
        ],
        jawaban: 2,
        penjelasan: "Benar! Kecepatan adalah jarak yang ditempuh per satuan waktu (120 km / 2 jam = 60 km/jam)."
    },
    {
        pertanyaan: "Saat membuat ringkasan teks Bahasa Indonesia, apa yang harus dilakukan setelah menemukan ide pokok tiap paragraf?",
        opsi: [
            "Menyalin seluruh paragraf pertama saja",
            "Merangkai ide-ide pokok tersebut dengan kalimatmu sendiri secara padu",
            "Menghapus semua kata penghubung",
            "Mengubah judul bacaan"
        ],
        jawaban: 1,
        penjelasan: "Mantap! Merangkai ide pokok dengan bahasamu sendiri membuktikan bahwa kamu benar-benar memahami isi bacaan."
    }
];

let currentQuizIndex = 0;
let skorKuis = 0;

function muatKuis() {
    const q = dataKuis[currentQuizIndex];
    document.getElementById('quiz-progress').innerText = `Pertanyaan ${currentQuizIndex + 1} dari ${dataKuis.length}`;
    document.getElementById('quiz-question').innerText = q.pertanyaan;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    q.opsi.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => cekJawaban(index, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('btn-next-quiz').classList.add('hidden');
}

function cekJawaban(selectedIndex, btnElement) {
    const q = dataKuis[currentQuizIndex];
    const allButtons = document.querySelectorAll('.option-btn');
    
    // Nonaktifkan semua tombol setelah memilih
    allButtons.forEach(btn => btn.disabled = true);

    const feedbackBox = document.getElementById('quiz-feedback');
    feedbackBox.classList.remove('hidden');

    if (selectedIndex === q.jawaban) {
        btnElement.classList.add('correct');
        skorKuis++;
        feedbackBox.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> Benar!</strong> ${q.penjelasan}`;
    } else {
        btnElement.classList.add('wrong');
        allButtons[q.jawaban].classList.add('correct');
        feedbackBox.innerHTML = `<strong><i class="fa-solid fa-circle-xmark"></i> Kurang Tepat.</strong> ${q.penjelasan}`;
    }

    document.getElementById('btn-next-quiz').classList.remove('hidden');
}

function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < dataKuis.length) {
        muatKuis();
    } else {
        // Tampilkan hasil akhir kuis
        const quizCard = document.querySelector('.quiz-card');
        quizCard.innerHTML = `
            <div style="text-align: center; padding: 1rem;">
                <i class="fa-solid fa-trophy" style="font-size: 4rem; color: #f59e0b; margin-bottom: 1rem;"></i>
                <h2>Kuis Selesai!</h2>
                <p style="font-size: 1.2rem; margin: 1rem 0;">Skor Pemahamanmu: <strong>${skorKuis} dari ${dataKuis.length}</strong></p>
                <p style="color: #6b7280; margin-bottom: 1.5rem;">Terus latih cara berpikirmu agar semakin tajam!</p>
                <button class="btn-primary" onclick="ulangiKuis()"><i class="fa-solid fa-rotate-right"></i> Ulangi Kuis</button>
            </div>
        `;
    }
}

function ulangiKuis() {
    currentQuizIndex = 0;
    skorKuis = 0;
    const quizCard = document.querySelector('.quiz-card');
    quizCard.innerHTML = `
        <div id="quiz-progress" class="quiz-progress"></div>
        <h3 id="quiz-question"></h3>
        <div id="quiz-options" class="options-grid"></div>
        <div id="quiz-feedback" class="feedback-box hidden"></div>
        <button id="btn-next-quiz" class="btn-primary hidden" onclick="nextQuestion()">Pertanyaan Berikutnya <i class="fa-solid fa-arrow-right"></i></button>
    `;
    muatKuis();
}

// --- 4. LOGIKA MOTIVASI BELAJAR ---
const daftarMotivasi = [
    {
        teks: "AI bisa memberimu jawaban dalam 1 detik, tapi hanya proses berpikirmu sendiri yang bisa membuatmu cerdas seumur hidup.",
        penulis: "Catatan Pelajar Cerdas"
    },
    {
        teks: "Rasa pusing saat memikirkan tugas adalah tanda bahwa otot otakmu sedang bertumbuh. Jangan menyerah terlalu cepat!",
        penulis: "Filosofi Belajar"
    },
    {
        teks: "Pendidikan bukan tentang seberapa cepat kamu menyalin jawaban, melainkan seberapa dalam kamu memahami prosesnya.",
        penulis: "Inspirasi Siswa"
    },
    {
        teks: "Orang yang terbiasa mencari jalan pintas akan tersesat saat jalan pintas itu hilang. Bangun kemampuanmu sendiri!",
        penulis: "Pepatah Modern"
    },
    {
        teks: "Kesalahan saat mencoba mengerjakan tugas sendiri jauh lebih berharga daripada nilai 100 hasil menyontek.",
        penulis: "Ruang Tumbuh"
    }
];

let indeksMotivasi = 0;

function gantiMotivasi() {
    let indeksBaru;
    do {
        indeksBaru = Math.floor(Math.random() * daftarMotivasi.length);
    } while (indeksBaru === indeksMotivasi);

    indeksMotivasi = indeksBaru;
    document.getElementById('quote-text').innerText = `"${daftarMotivasi[indeksMotivasi].teks}"`;
    document.getElementById('quote-author').innerText = `- ${daftarMotivasi[indeksMotivasi].penulis}`;
}

// Jalankan kuis saat halaman pertama kali dibuka
document.addEventListener('DOMContentLoaded', muatKuis);
