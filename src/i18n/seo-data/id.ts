import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";

export const RATIO_DATA: Record<string, RatioData> = {
  "16-9": {
    "label": "16:9",
    "w": 16,
    "h": 9,
    "title": "Rasio Aspek 16:9 — Dimensi, Piksel & Kalkulator Gratis",
    "description": "Semua tentang rasio aspek 16:9: dimensi umum (720p, 1080p, 4K, 8K), kasus penggunaan, dan kalkulator gratis. Standar untuk video, TV, dan monitor.",
    "explanation": "16:9 (enam belas banding sembilan) adalah rasio aspek layar lebar yang diadopsi secara universal untuk video HD, streaming, dan layar modern. Untuk setiap 16 unit lebar, tingginya adalah 9 unit — menghasilkan persegi panjang yang lebar dan sinematik. Rasio ini menggantikan standar 4:3 yang lebih lama pada awal tahun 2000-an dan sekarang menjadi default untuk hampir semua konten video, monitor, dan siaran televisi di seluruh dunia.",
    "useCases": [
      "Video dan thumbnail YouTube",
      "Netflix, Disney+ dan platform streaming",
      "Televisi HD dan 4K",
      "Monitor PC dan layar laptop",
      "Presentasi PowerPoint dan Google Slides",
      "Latar belakang Zoom dan konferensi video",
      "Sinematik video game"
    ],
    "dimensions": [
      {
        "name": "nHD",
        "width": 640,
        "height": 360,
        "use": "Web resolusi rendah, cadangan mobile"
      },
      {
        "name": "HD (720p)",
        "width": 1280,
        "height": 720,
        "use": "Video web, perangkat lama, minimum YouTube"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1920,
        "height": 1080,
        "use": "Streaming standar, YouTube, siaran TV"
      },
      {
        "name": "QHD (1440p)",
        "width": 2560,
        "height": 1440,
        "use": "Monitor resolusi tinggi, gaming"
      },
      {
        "name": "4K UHD",
        "width": 3840,
        "height": 2160,
        "use": "Streaming premium, video profesional, TV 4K"
      },
      {
        "name": "8K UHD",
        "width": 7680,
        "height": 4320,
        "use": "Layar masa depan, arsip, master siaran"
      }
    ],
    "faq": [
      {
        "q": "Berapa piksel untuk 16:9?",
        "a": "Dimensi piksel 16:9 yang paling umum adalah 1280×720 (720p HD), 1920×1080 (1080p FHD), 2560×1440 (1440p QHD), dan 3840×2160 (4K UHD). Lebar apa pun yang dapat dibagi untuk menghasilkan rasio 16:9 bisa digunakan — misalnya 640×360 atau 800×450."
      },
      {
        "q": "Mengapa 16:9 menjadi standar untuk video?",
        "a": "16:9 dipilih sebagai standar internasional HDTV pada tahun 1980-an–90-an karena merupakan kompromi matematis antara rasio TV 4:3 yang lebih tua dan rasio sinema 2.39:1 yang lebih lebar. Rasio ini meminimalkan letterboxing saat menampilkan konten dari kedua sumber tersebut."
      },
      {
        "q": "Apakah 1920×1080 sama dengan 16:9?",
        "a": "Ya. 1920 ÷ 16 = 120, dan 1080 ÷ 9 = 120, jadi kedua dimensi memiliki faktor yang sama. 1920×1080 (Full HD / 1080p) adalah resolusi 16:9 yang paling banyak digunakan."
      },
      {
        "q": "Berapa rasio 16:9 untuk resolusi 4K?",
        "a": "4K UHD (Ultra High Definition) pada 16:9 adalah 3840×2160 piksel — tepat empat kali luas area 1920×1080. Cinema 4K (DCI 4K) adalah 4096×2160, yang memiliki rasio sedikit berbeda (1.9:1)."
      }
    ],
    "relatedRatios": [
      "4-3",
      "21-9",
      "9-16"
    ],
    "relatedPlatforms": [
      "youtube",
      "twitter",
      "linkedin",
      "facebook"
    ],
    "cssValue": "16 / 9"
  },
  "9-16": {
    "label": "9:16",
    "w": 9,
    "h": 16,
    "title": "Rasio Aspek 9:16 — TikTok, Reels & Dimensi Video Vertikal",
    "description": "Panduan lengkap rasio aspek 9:16: dimensi piksel, kasus penggunaan untuk TikTok, Instagram Reels, YouTube Shorts, dan kalkulator gratis.",
    "explanation": "9:16 adalah versi vertikal (potret) dari layar lebar 16:9. Rasio ini mengisi sempurna layar smartphone yang dipegang tegak — menjadikannya format dominan untuk video pendek di media sosial. TikTok, Instagram Reels, YouTube Shorts, dan Snapchat semuanya menggunakan 9:16 sebagai kanvas utama mereka.",
    "useCases": [
      "Video TikTok",
      "Instagram Reels dan Stories",
      "YouTube Shorts",
      "Video Snapchat",
      "Facebook Reels dan Stories",
      "Pin video Pinterest",
      "Iklan yang dioptimalkan untuk mobile"
    ],
    "dimensions": [
      {
        "name": "SD Mobile",
        "width": 540,
        "height": 960,
        "use": "Mobile resolusi rendah, perangkat lama"
      },
      {
        "name": "HD Mobile",
        "width": 720,
        "height": 1280,
        "use": "Kualitas mobile standar"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1080,
        "height": 1920,
        "use": "TikTok, Instagram Reels, YouTube Shorts — direkomendasikan"
      },
      {
        "name": "QHD Mobile",
        "width": 1440,
        "height": 2560,
        "use": "Rekaman smartphone kelas atas"
      }
    ],
    "faq": [
      {
        "q": "Resolusi apa yang harus saya gunakan untuk TikTok?",
        "a": "TikTok merekomendasikan 1080×1920 piksel (rasio 9:16) untuk kualitas terbaik. Ini adalah video vertikal Full HD. Menggunakan resolusi yang lebih rendah dapat menyebabkan artefak kompresi setelah diunggah."
      },
      {
        "q": "Apakah 9:16 sama dengan mode potret?",
        "a": "Ya. 9:16 adalah rasio video potret (vertikal) standar, setara dengan memutar bingkai layar lebar 16:9 ke samping. Rasio ini sesuai dengan orientasi alami smartphone yang dipegang dengan satu tangan."
      },
      {
        "q": "Bisakah saya memposting video 9:16 di YouTube?",
        "a": "Ya — YouTube Shorts dirancang khusus untuk video vertikal 9:16. Unggahan YouTube reguler juga menerima 9:16, tetapi akan ditampilkan dengan bilah hitam (pillarboxing) di desktop saat disematkan dalam pemutar 16:9."
      }
    ],
    "relatedRatios": [
      "16-9",
      "4-5",
      "1-1"
    ],
    "relatedPlatforms": [
      "instagram",
      "tiktok",
      "youtube"
    ],
    "cssValue": "9 / 16"
  },
  "4-3": {
    "label": "4:3",
    "w": 4,
    "h": 3,
    "title": "Rasio Aspek 4:3 — Dimensi Layar Klasik & Kalkulator",
    "description": "Rasio aspek 4:3 dijelaskan: ukuran piksel umum, di mana masih digunakan saat ini (tablet, presentasi, film), dan kalkulator gratis.",
    "explanation": "4:3 (empat banding tiga) adalah standar untuk televisi dan monitor komputer dari tahun 1930-an hingga awal 2000-an. Rasio ini menghasilkan persegi panjang yang hampir persegi yang sesuai dengan proporsi bingkai film 35mm. Meskipun sebagian besar telah digantikan oleh 16:9 untuk video, rasio ini tetap relevan untuk layar iPad, presentasi PowerPoint, dan format fotografi tertentu.",
    "useCases": [
      "Layar iPad dan tablet",
      "Televisi lama dan CCTV",
      "Presentasi PowerPoint / Keynote (format lama)",
      "Kamera digital dan fotografi",
      "Brosur cetak dan dokumen rasio A4",
      "Efek video dan film bergaya retro"
    ],
    "dimensions": [
      {
        "name": "QVGA",
        "width": 320,
        "height": 240,
        "use": "Perangkat lama, layar tertanam"
      },
      {
        "name": "VGA",
        "width": 640,
        "height": 480,
        "use": "Web klasik, standar webcam"
      },
      {
        "name": "SVGA",
        "width": 800,
        "height": 600,
        "use": "Monitor lama, proyektor"
      },
      {
        "name": "XGA",
        "width": 1024,
        "height": 768,
        "use": "iPad (generasi 1–4), proyektor standar"
      },
      {
        "name": "SXGA",
        "width": 1280,
        "height": 960,
        "use": "Kamera digital, fotografi"
      },
      {
        "name": "UXGA",
        "width": 1600,
        "height": 1200,
        "use": "Monitor profesional, gambar kualitas cetak"
      }
    ],
    "faq": [
      {
        "q": "Berapa piksel untuk rasio 4:3?",
        "a": "Dimensi piksel 4:3 yang umum termasuk 640×480 (VGA), 800×600 (SVGA), 1024×768 (XGA), dan 1280×960. Resolusi apa pun di mana lebar ÷ tinggi = 1,333... mengikuti rasio 4:3."
      },
      {
        "q": "Apakah masih ada yang menggunakan 4:3?",
        "a": "Ya. iPad menggunakan layar 4:3 (2048×1536 pada model Retina). Banyak template PowerPoint, kamera DSLR, dan kamera pengawas lama juga menggunakan 4:3. Rasio ini kurang umum untuk video tetapi masih relevan untuk gambar statis dan presentasi."
      },
      {
        "q": "Apa perbedaan antara 4:3 dan 16:9?",
        "a": "4:3 lebih persegi (rasio 1,33:1) sedangkan 16:9 lebih lebar dan lebih persegi panjang (rasio 1,78:1). 16:9 adalah standar modern untuk TV dan video; 4:3 adalah standar lama yang mendahuluinya. Saat melihat konten 4:3 pada layar 16:9, bilah hitam (pillarboxing) muncul di kedua sisi."
      }
    ],
    "relatedRatios": [
      "16-9",
      "3-2",
      "5-4"
    ],
    "relatedPlatforms": [
      "youtube",
      "facebook"
    ],
    "cssValue": "4 / 3"
  },
  "1-1": {
    "label": "1:1",
    "w": 1,
    "h": 1,
    "title": "Rasio Aspek 1:1 — Dimensi Persegi untuk Instagram & Lainnya",
    "description": "Rasio aspek persegi 1:1: ukuran piksel, penggunaan terbaik di Instagram dan media sosial, serta kalkulator rasio aspek gratis.",
    "explanation": "1:1 adalah persegi sempurna — lebar dan tinggi identik. Instagram mempopulerkan format persegi untuk fotografi media sosial, dan tetap menjadi elemen pokok untuk foto profil, sampul album, dan postingan feed di semua platform utama.",
    "useCases": [
      "Postingan feed Instagram (format asli)",
      "Foto profil di semua platform",
      "Sampul album dan sampul musik",
      "Ikon aplikasi dan favicon",
      "Fotografi produk untuk e-commerce",
      "Gambar postingan Facebook dan LinkedIn"
    ],
    "dimensions": [
      {
        "name": "Small",
        "width": 400,
        "height": 400,
        "use": "Thumbnail profil, ikon aplikasi"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1080,
        "use": "Postingan feed Instagram (direkomendasikan)"
      },
      {
        "name": "High Res",
        "width": 2048,
        "height": 2048,
        "use": "Cetak, fotografi profesional"
      },
      {
        "name": "4K Square",
        "width": 4096,
        "height": 4096,
        "use": "Cetak resolusi ultra tinggi, arsip"
      }
    ],
    "faq": [
      {
        "q": "Berapa resolusi 1:1 terbaik untuk Instagram?",
        "a": "Instagram merekomendasikan 1080×1080 piksel untuk postingan feed persegi. Minimumnya adalah 320×320, tetapi 1080×1080 adalah standar untuk tampilan tajam di semua perangkat."
      },
      {
        "q": "Apakah rasio 1:1 sama dengan persegi?",
        "a": "Ya, tepat sekali. Rasio aspek 1:1 berarti lebar sama dengan tinggi, menghasilkan persegi sempurna terlepas dari jumlah piksel sebenarnya."
      },
      {
        "q": "Mengapa Instagram menggunakan 1:1?",
        "a": "Instagram awalnya dirancang untuk fotografi mobile dan memilih format persegi 1:1 untuk menstandardisasi grid feed. Meskipun kemudian menambahkan format potret (4:5) dan lanskap (1.91:1), persegi 1:1 tetap menjadi format klasik Instagram."
      }
    ],
    "relatedRatios": [
      "4-5",
      "4-3",
      "3-2"
    ],
    "relatedPlatforms": [
      "instagram",
      "facebook",
      "linkedin"
    ],
    "cssValue": "1 / 1"
  },
  "4-5": {
    "label": "4:5",
    "w": 4,
    "h": 5,
    "title": "Rasio Aspek 4:5 — Dimensi Potret Instagram & Kalkulator",
    "description": "Rasio aspek 4:5 untuk postingan potret Instagram: ukuran piksel terbaik, mengapa mendapat lebih banyak ruang feed, dan kalkulator gratis.",
    "explanation": "4:5 adalah rasio potret (lebih tinggi dari lebar) yang mengisi ruang vertikal maksimum yang diizinkan oleh feed Instagram — memberikan gambar Anda lebih banyak ruang layar dibandingkan postingan persegi atau lanskap. Dengan rasio 0,8:1, rasio ini sedikit lebih lebar dari layar ponsel 9:16, menjadikannya ideal untuk potret, foto produk, dan fotografi editorial.",
    "useCases": [
      "Postingan feed Instagram (potret — tinggi maksimum)",
      "Fotografi media sosial",
      "Fotografi potret untuk cetak",
      "Pin Pinterest (format sekunder)",
      "Postingan gambar potret Facebook"
    ],
    "dimensions": [
      {
        "name": "Minimum",
        "width": 600,
        "height": 750,
        "use": "Minimum untuk kualitas Instagram yang layak"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1350,
        "use": "Postingan potret Instagram (direkomendasikan)"
      },
      {
        "name": "High Res",
        "width": 2160,
        "height": 2700,
        "use": "Gambar potret kualitas cetak"
      }
    ],
    "faq": [
      {
        "q": "Mengapa menggunakan 4:5 daripada 9:16 untuk postingan Instagram?",
        "a": "Instagram memotong gambar 9:16 untuk feed menjadi 4:5 (rasio potret maksimum yang diizinkan untuk postingan feed). Jika Anda menggunakan 4:5, Anda mendapatkan gambar feed tertinggi yang diizinkan tanpa kehilangan konten karena pemotongan. 9:16 hanya untuk Stories dan Reels."
      },
      {
        "q": "Berapa dimensi piksel untuk 4:5 di Instagram?",
        "a": "Ukuran yang direkomendasikan adalah 1080×1350 piksel. Ini adalah ukuran potret maksimum yang diizinkan Instagram untuk postingan feed dan ditampilkan dengan tajam di semua perangkat."
      },
      {
        "q": "Apakah 4:5 mendapat lebih banyak jangkauan di Instagram?",
        "a": "Postingan 4:5 mengisi lebih banyak ruang vertikal di feed dibandingkan postingan persegi 1:1 atau lanskap 1.91:1, yang dapat membantu menarik lebih banyak perhatian saat pengguna menggulir. Banyak kreator melaporkan tingkat interaksi lebih tinggi dengan postingan potret, meskipun ini bergantung pada konten."
      }
    ],
    "relatedRatios": [
      "1-1",
      "9-16",
      "3-2"
    ],
    "relatedPlatforms": [
      "instagram",
      "pinterest",
      "facebook"
    ],
    "cssValue": "4 / 5"
  },
  "3-2": {
    "label": "3:2",
    "w": 3,
    "h": 2,
    "title": "Rasio Aspek 3:2 — Fotografi, DSLR & Dimensi Cetak",
    "description": "Rasio aspek 3:2 untuk kamera DSLR dan cetak: dimensi umum, asal film 35mm, dan kalkulator rasio aspek gratis.",
    "explanation": "Rasio 3:2 berasal dari bingkai film 35mm, yang berukuran 36mm × 24mm — rasio 3:2. Rasio ini tetap menjadi rasio native untuk sebagian besar kamera DSLR dan mirrorless, dan sesuai langsung dengan ukuran cetak umum seperti 4×6 inci, 6×9 inci, dan 12×18 inci.",
    "useCases": [
      "Sensor kamera DSLR dan mirrorless",
      "Fotografi film 35mm",
      "Cetakan 4×6 dan 6×9 inci",
      "Tata letak buku foto",
      "Fotografi potret profesional"
    ],
    "dimensions": [
      {
        "name": "6MP",
        "width": 3008,
        "height": 2000,
        "use": "DSLR tingkat pemula"
      },
      {
        "name": "12MP",
        "width": 4272,
        "height": 2848,
        "use": "DSLR kelas menengah (mis. Canon 60D)"
      },
      {
        "name": "24MP",
        "width": 6000,
        "height": 4000,
        "use": "DSLR profesional (mis. Nikon D3200)"
      },
      {
        "name": "36MP",
        "width": 7360,
        "height": 4912,
        "use": "DSLR resolusi tinggi (mis. Nikon D800)"
      }
    ],
    "faq": [
      {
        "q": "Ukuran cetak apa yang sesuai dengan rasio 3:2?",
        "a": "Ukuran cetak standar 3:2 meliputi 4×6 inci, 6×9 inci, 8×12 inci, 12×18 inci, dan 20×30 inci. Ukuran cetak ini akan menampilkan gambar lengkap Anda tanpa pemotongan."
      },
      {
        "q": "Berapa piksel untuk rasio 3:2?",
        "a": "Resolusi apa pun di mana lebar ÷ tinggi = 1,5 adalah rasio 3:2. Contoh umum: 3000×2000, 4500×3000, 6000×4000. Sebagian besar kamera DSLR mengambil gambar secara native pada rasio 3:2."
      }
    ],
    "relatedRatios": [
      "4-3",
      "16-9",
      "5-4"
    ],
    "relatedPlatforms": [
      "instagram",
      "facebook"
    ],
    "cssValue": "3 / 2"
  },
  "21-9": {
    "label": "21:9",
    "w": 21,
    "h": 9,
    "title": "Rasio Aspek 21:9 — Dimensi & Kalkulator Monitor Ultrawide",
    "description": "Rasio aspek ultrawide 21:9: resolusi umum (2560×1080, 3440×1440, 5120×2160), penggunaan gaming dan sinema, serta kalkulator gratis.",
    "explanation": "21:9 (kadang disebut ultrawide) memberikan bidang pandang yang jauh lebih lebar dibandingkan monitor standar 16:9. Rasio ini populer untuk gaming (menghilangkan kebutuhan banyak monitor), produksi video sinematik, dan alur kerja produktivitas. Banyak film sinematik yang diambil dalam 2.35:1 atau 2.39:1 tampak mendekati 21:9 saat ditampilkan di layar ultrawide.",
    "useCases": [
      "Monitor gaming ultrawide",
      "Stasiun kerja pengeditan video dan color grading",
      "Produktivitas multi-aplikasi",
      "Menonton film sinematik (letterboxing minimal)",
      "Simulator penerbangan dan game balap"
    ],
    "dimensions": [
      {
        "name": "FHD Ultrawide",
        "width": 2560,
        "height": 1080,
        "use": "Gaming ultrawide pemula, monitor ekonomis"
      },
      {
        "name": "QHD Ultrawide",
        "width": 3440,
        "height": 1440,
        "use": "Ultrawide premium standar"
      },
      {
        "name": "5K Ultrawide",
        "width": 5120,
        "height": 2160,
        "use": "Stasiun kerja profesional, LG 34WK95U"
      }
    ],
    "faq": [
      {
        "q": "Apakah 21:9 benar-benar 21 banding 9?",
        "a": "Tidak persis — nama '21:9' adalah label pemasaran. Sebagian besar monitor ultrawide memiliki rasio yang lebih mendekati 64:27 (2,370:1) atau 43:18 (2,388:1). Rasio sebenarnya tergantung pada resolusi spesifik (mis. 3440×1440 = 43:18)."
      },
      {
        "q": "Apakah semua game mendukung 21:9?",
        "a": "Banyak game modern secara native mendukung ultrawide 21:9. Beberapa judul lama atau game multiplayer tertentu membatasi bidang pandang ke 16:9 untuk mencegah keuntungan kompetitif. Periksa pengaturan game atau situs komunitas untuk status dukungan ultrawide."
      }
    ],
    "relatedRatios": [
      "16-9",
      "2-1"
    ],
    "relatedPlatforms": [],
    "cssValue": "21 / 9"
  },
  "2-1": {
    "label": "2:1",
    "w": 2,
    "h": 1,
    "title": "Rasio Aspek 2:1 — Dimensi Panoramik & Banner",
    "description": "Rasio aspek 2:1: penggunaan untuk fotografi panoramik, banner web, dan header Twitter/X, dengan kalkulator gratis.",
    "explanation": "2:1 adalah rasio panoramik lebar di mana lebarnya tepat dua kali tinggi. Rasio ini digunakan untuk fotografi panoramik pemandangan, banner hero halaman web, dan header media sosial tertentu. Rasio ini berada di antara layar lebar 16:9 dan rasio sinematik sejati.",
    "useCases": [
      "Fotografi lanskap panoramik",
      "Banner hero dan header situs web",
      "Pemotongan foto 360°",
      "Header buletin email",
      "Digital signage"
    ],
    "dimensions": [
      {
        "name": "Web Banner",
        "width": 1200,
        "height": 600,
        "use": "Banner web standar, gambar OG"
      },
      {
        "name": "HD Banner",
        "width": 2000,
        "height": 1000,
        "use": "Gambar hero web resolusi tinggi"
      },
      {
        "name": "Panoramic",
        "width": 4000,
        "height": 2000,
        "use": "Fotografi panoramik"
      }
    ],
    "faq": [
      {
        "q": "Apa perbedaan antara 2:1 dan 16:9?",
        "a": "Rasio 2:1 (2,0:1) lebih lebar dari 16:9 (1,78:1). Gambar 2:1 lebih panoramik — misalnya, 2000×1000 piksel dibanding 1920×1080 pada 16:9. 2:1 memiliki lebih banyak ruang horizontal relatif terhadap tingginya."
      }
    ],
    "relatedRatios": [
      "16-9",
      "21-9"
    ],
    "relatedPlatforms": [
      "twitter"
    ],
    "cssValue": "2 / 1"
  },
  "5-4": {
    "label": "5:4",
    "w": 5,
    "h": 4,
    "title": "Rasio Aspek 5:4 — Dimensi Cetak & Monitor",
    "description": "Rasio aspek 5:4: cetakan 8×10, kamera format medium, dan monitor lama 1280×1024. Kalkulator gratis disertakan.",
    "explanation": "5:4 sedikit lebih tinggi dari rasio standar 4:3. Rasio ini sesuai dengan ukuran cetak 8×10 inci yang digunakan di studio fotografi potret dan berkorespondensi dengan resolusi 1280×1024 yang umum pada monitor CRT lama dan LCD generasi awal.",
    "useCases": [
      "Cetakan potret 8×10 inci",
      "Cetakan foto 10×8 inci",
      "Konten untuk monitor lama 1280×1024",
      "Fotografi format medium",
      "Fotografi potret studio"
    ],
    "dimensions": [
      {
        "name": "SXGA",
        "width": 1280,
        "height": 1024,
        "use": "Monitor dan proyektor lama"
      },
      {
        "name": "Print 8×10",
        "width": 2400,
        "height": 3000,
        "use": "Cetakan 8×10 inci pada 300 DPI"
      },
      {
        "name": "Print 16×20",
        "width": 4800,
        "height": 6000,
        "use": "Cetakan 16×20 inci pada 300 DPI"
      }
    ],
    "faq": [
      {
        "q": "Piksel apa yang sesuai dengan rasio 5:4?",
        "a": "Ukuran piksel 5:4 yang umum termasuk 1280×1024, 2560×2048, dan pasangan dimensi apa pun di mana lebar ÷ tinggi = 1,25. Cetakan 8×10 yang dipindai pada 300 DPI menghasilkan 2400×3000 piksel (dalam orientasi potret, 3:2,4 = 5:4)."
      }
    ],
    "relatedRatios": [
      "4-3",
      "1-1",
      "3-2"
    ],
    "relatedPlatforms": [],
    "cssValue": "5 / 4"
  }
};

export const PLATFORM_DATA: Record<string, PlatformData> = {
  "instagram": {
    "name": "Instagram",
    "title": "Ukuran Gambar & Rasio Aspek Instagram 2026 — Panduan Lengkap",
    "description": "Semua dimensi gambar dan video Instagram untuk 2026: postingan feed, Stories, Reels, foto profil, dan lainnya. Ukuran piksel dan rasio aspek yang tepat.",
    "intro": "Instagram mendukung berbagai rasio aspek tergantung di mana konten Anda muncul. Mendapatkan dimensi yang tepat memastikan gambar Anda ditampilkan dengan tajam tanpa pemotongan yang tidak diinginkan. Berikut semua ukuran resmi yang direkomendasikan untuk 2026.",
    "formats": [
      {
        "type": "Postingan Feed — Persegi",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Format klasik; aman untuk semua perangkat"
      },
      {
        "type": "Postingan Feed — Potret (tinggi maksimum)",
        "width": 1080,
        "height": 1350,
        "ratio": "4:5",
        "notes": "Mengisi ruang feed terbanyak; direkomendasikan untuk visibilitas maksimum"
      },
      {
        "type": "Postingan Feed — Lanskap",
        "width": 1080,
        "height": 566,
        "ratio": "1.91:1",
        "notes": "Gambar lebar; lebih sedikit ruang feed dibanding potret"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vertikal layar penuh; maksimal 15 detik untuk foto"
      },
      {
        "type": "Reel",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Video minimal 3 detik; maksimal 90 detik"
      },
      {
        "type": "Foto Profil",
        "width": 320,
        "height": 320,
        "ratio": "1:1",
        "notes": "Ditampilkan sebagai lingkaran; jaga konten utama di tengah"
      },
      {
        "type": "Postingan Carousel",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Setiap kartu harus memiliki dimensi yang sama"
      }
    ],
    "tips": [
      "Gunakan 4:5 (1080×1350) untuk postingan feed guna memaksimalkan ruang vertikal saat menggulir",
      "Jaga konten penting dalam 80% bagian tengah Stories untuk menghindari tumpang tindih UI",
      "Ekspor dengan lebar penuh 1080px — Instagram akan mengompresi apa pun yang lebih besar",
      "Gunakan PNG untuk grafis dan ilustrasi; JPEG dengan kualitas 80–90% untuk foto",
      "Hindari teks kecil di dekat tepi — mungkin terpotong di perangkat lama"
    ],
    "faq": [
      {
        "q": "Berapa ukuran terbaik untuk postingan Instagram di 2026?",
        "a": "Untuk visibilitas feed maksimum, gunakan 1080×1350 piksel (rasio 4:5 — potret). Ini adalah format tertinggi yang diizinkan Instagram untuk postingan feed dan mengisi ruang layar terbanyak saat pengguna menggulir."
      },
      {
        "q": "Bisakah saya memposting video 16:9 di Instagram?",
        "a": "Ya, tetapi Instagram akan memotong video 16:9 untuk menyesuaikan feed (ke 1:1 atau 4:5). Untuk Reels dan Stories, video 16:9 akan menampilkan bilah hitam (letterboxing) di atas dan bawah. Selalu rekam vertikal (9:16) untuk Reels dan Stories."
      },
      {
        "q": "Berapa ukuran teks Instagram Story yang tepat?",
        "a": "Jaga semua teks dan visual kunci dalam zona aman: kira-kira 1080×1420 piksel yang berada di tengah kanvas 1080×1920. 250px atas dan 250px bawah biasanya tertutup oleh elemen UI seperti nama pengguna dan bilah balasan."
      }
    ],
    "relatedRatios": [
      "1-1",
      "4-5",
      "9-16"
    ]
  },
  "youtube": {
    "name": "YouTube",
    "title": "Dimensi Video & Rasio Aspek YouTube 2026 — Panduan Lengkap",
    "description": "Semua dimensi gambar dan video YouTube untuk 2026: video, Shorts, thumbnail, banner channel, dan foto profil. Ukuran piksel dan rasio yang tepat.",
    "intro": "YouTube terutama merupakan platform 16:9, tetapi Shorts menggunakan video vertikal 9:16. Mendapatkan dimensi yang tepat meningkatkan rasio klik thumbnail Anda dan memastikan konten Anda terlihat tajam di semua perangkat.",
    "formats": [
      {
        "type": "Video (HD Standar)",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Direkomendasikan untuk sebagian besar unggahan (1080p)"
      },
      {
        "type": "Video (4K)",
        "width": 3840,
        "height": 2160,
        "ratio": "16:9",
        "notes": "Kualitas maksimum; memerlukan rekaman 4K"
      },
      {
        "type": "Shorts",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Video vertikal; maksimal 60 detik"
      },
      {
        "type": "Thumbnail",
        "width": 1280,
        "height": 720,
        "ratio": "16:9",
        "notes": "Thumbnail kustom; ukuran file maksimal 2MB"
      },
      {
        "type": "Banner Channel (Desktop)",
        "width": 2560,
        "height": 1440,
        "ratio": "16:9",
        "notes": "Banner penuh; hanya bagian tengah 1546×423px yang terlihat di semua perangkat"
      },
      {
        "type": "Foto Profil",
        "width": 800,
        "height": 800,
        "ratio": "1:1",
        "notes": "Ditampilkan sebagai lingkaran; minimum 98×98px"
      }
    ],
    "tips": [
      "Desain thumbnail 1280×720 dengan teks tebal dan warna kontras tinggi untuk CTR yang lebih baik",
      "Jaga zona aman banner channel pada 1546×423 piksel untuk memastikan terlihat di semua perangkat",
      "Unggah video dengan resolusi tertinggi yang bisa Anda lakukan — YouTube mentranskode ke bawah, bukan ke atas",
      "Untuk Shorts, gunakan 1080×1920 (9:16) dan pastikan tidak ada konten penting di 10% atas atau bawah",
      "File thumbnail harus di bawah 2MB — gunakan JPEG untuk foto, PNG untuk grafis"
    ],
    "faq": [
      {
        "q": "Resolusi apa yang terbaik untuk video YouTube?",
        "a": "1920×1080 (1080p Full HD) adalah resolusi standar dan direkomendasikan untuk unggahan YouTube. Resolusi ini menyediakan video tajam di sebagian besar layar tanpa memerlukan peralatan rekaman 4K."
      },
      {
        "q": "Berapa ukuran thumbnail YouTube yang tepat?",
        "a": "YouTube merekomendasikan 1280×720 piksel (rasio 16:9) untuk thumbnail kustom. Ukuran file maksimal adalah 2MB. Gunakan JPEG untuk foto atau PNG untuk grafis yang didesain."
      },
      {
        "q": "Berapa resolusi YouTube Shorts?",
        "a": "YouTube Shorts menggunakan rasio vertikal 9:16, dengan resolusi yang direkomendasikan 1080×1920 piksel. Durasi maksimal untuk Shorts adalah 60 detik."
      }
    ],
    "relatedRatios": [
      "16-9",
      "9-16",
      "1-1"
    ]
  },
  "tiktok": {
    "name": "TikTok",
    "title": "Dimensi & Rasio Aspek Video TikTok 2026 — Panduan Lengkap",
    "description": "Ukuran dan rasio aspek video TikTok untuk 2026: resolusi terbaik untuk video TikTok, foto profil, dan gambar sampul.",
    "intro": "TikTok adalah platform video vertikal yang mengutamakan mobile. Semua konten harus dirancang untuk orientasi potret 9:16. Berikut spesifikasi untuk memastikan konten Anda terlihat terbaik.",
    "formats": [
      {
        "type": "Video (Direkomendasikan)",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Full HD vertikal — selalu gunakan ini"
      },
      {
        "type": "Video (Minimum)",
        "width": 720,
        "height": 1280,
        "ratio": "9:16",
        "notes": "Minimum untuk kualitas yang layak"
      },
      {
        "type": "Foto Profil",
        "width": 200,
        "height": 200,
        "ratio": "1:1",
        "notes": "Ditampilkan sebagai lingkaran"
      },
      {
        "type": "Gambar Sampul",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Diambil otomatis dari video; dapat disesuaikan"
      }
    ],
    "tips": [
      "Selalu rekam dan unggah pada 1080×1920 (9:16) untuk kualitas tampilan terbaik",
      "Jaga konten utama di tengah bingkai — 20% bawah tertutup oleh teks dan UI",
      "TikTok mendukung format .mp4 dan .mov; codec H.264 direkomendasikan",
      "Gunakan alat overlay teks TikTok secukupnya — teks akan menumpuk di atas konten Anda",
      "Pencahayaan terang dan visual kontras tinggi bekerja lebih baik pada algoritma"
    ],
    "faq": [
      {
        "q": "Berapa resolusi video terbaik untuk TikTok?",
        "a": "TikTok merekomendasikan 1080×1920 piksel (rasio 9:16, Full HD vertikal). Menggunakan resolusi ini memastikan video Anda ditampilkan tanpa bilah hitam atau letterboxing di perangkat mana pun."
      },
      {
        "q": "Bisakah saya mengunggah video horizontal (16:9) ke TikTok?",
        "a": "Ya, TikTok menerima video horizontal, tetapi akan ditampilkan dengan bilah hitam di atas dan bawah (letterboxed). Untuk pengalaman penonton terbaik dan performa algoritma, selalu gunakan video vertikal (9:16)."
      },
      {
        "q": "Berapa durasi video maksimal di TikTok?",
        "a": "Per 2026, TikTok mengizinkan video hingga 10 menit untuk akun standar. Video yang lebih pendek (15–60 detik) biasanya berkinerja lebih baik dalam algoritma rekomendasi."
      }
    ],
    "relatedRatios": [
      "9-16",
      "1-1"
    ]
  },
  "twitter": {
    "name": "X / Twitter",
    "title": "Ukuran Gambar & Rasio Aspek X (Twitter) 2026 — Panduan Lengkap",
    "description": "Semua dimensi gambar X (Twitter) untuk 2026: gambar postingan, banner header, foto profil, dan ukuran video. Spesifikasi piksel yang tepat.",
    "intro": "X (sebelumnya Twitter) mendukung berbagai format dan ukuran gambar. Gambar dalam postingan dipotong otomatis di tampilan timeline tetapi ditampilkan penuh saat diketuk. Berikut semua dimensi yang direkomendasikan.",
    "formats": [
      {
        "type": "Gambar Postingan (Lanskap)",
        "width": 1600,
        "height": 900,
        "ratio": "16:9",
        "notes": "Direkomendasikan untuk sebagian besar gambar postingan"
      },
      {
        "type": "Gambar Postingan (Persegi)",
        "width": 1200,
        "height": 1200,
        "ratio": "1:1",
        "notes": "Aman untuk semua konteks tampilan"
      },
      {
        "type": "Gambar Postingan (Potret)",
        "width": 900,
        "height": 1350,
        "ratio": "2:3",
        "notes": "Rasio potret maksimum yang didukung"
      },
      {
        "type": "Foto Profil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Ditampilkan sebagai lingkaran; minimum direkomendasikan 400×400"
      },
      {
        "type": "Header / Banner",
        "width": 1500,
        "height": 500,
        "ratio": "3:1",
        "notes": "Bagian atas halaman profil; hindari tepi — dipotong di mobile"
      },
      {
        "type": "Video",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Durasi maks 2:20; batas ukuran file 512MB"
      }
    ],
    "tips": [
      "Gunakan 1600×900 untuk gambar postingan lanskap — ditampilkan tanpa pemotongan di timeline",
      "Jaga 60% bagian tengah banner header aman untuk semua perangkat",
      "Foto profil ditampilkan sebagai lingkaran — gunakan subjek yang terpusat tanpa konten penting di dekat tepi",
      "X mengompresi gambar — ekspor dengan kualitas JPEG 100% untuk meminimalkan kompresi yang terlihat",
      "Untuk Twitter card (pratinjau tautan), gunakan rasio 2:1 (mis. 1200×628) untuk format kartu besar"
    ],
    "faq": [
      {
        "q": "Berapa ukuran gambar terbaik untuk postingan X (Twitter)?",
        "a": "1600×900 piksel (16:9) adalah ukuran yang direkomendasikan untuk gambar postingan X. Gambar ditampilkan tanpa pemotongan di timeline. Persegi (1200×1200) juga aman dan terlihat bagus di semua konteks."
      },
      {
        "q": "Berapa ukuran banner header X (Twitter)?",
        "a": "Ukuran header X yang direkomendasikan adalah 1500×500 piksel (rasio 3:1). Perhatikan bahwa banner dipotong berbeda di desktop dan mobile — jaga konten penting dalam area tengah."
      }
    ],
    "relatedRatios": [
      "16-9",
      "1-1",
      "2-1"
    ]
  },
  "linkedin": {
    "name": "LinkedIn",
    "title": "Ukuran & Rasio Gambar LinkedIn 2026 — Panduan Lengkap",
    "description": "Dimensi gambar LinkedIn untuk 2026: gambar postingan, banner perusahaan, foto profil, dan gambar sampul. Ukuran piksel yang tepat untuk konten profesional.",
    "intro": "LinkedIn adalah jaringan profesional di mana kualitas gambar penting untuk kredibilitas. Berikut ukuran gambar yang direkomendasikan untuk memastikan profil dan postingan Anda terlihat rapi.",
    "formats": [
      {
        "type": "Gambar Postingan (Lanskap)",
        "width": 1200,
        "height": 628,
        "ratio": "1.91:1",
        "notes": "Gambar postingan LinkedIn standar"
      },
      {
        "type": "Gambar Postingan (Persegi)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Postingan persegi berkinerja baik di LinkedIn"
      },
      {
        "type": "Foto Profil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Minimum 200×200; gunakan foto wajah profesional"
      },
      {
        "type": "Banner Personal",
        "width": 1584,
        "height": 396,
        "ratio": "4:1",
        "notes": "Ditampilkan di belakang foto profil"
      },
      {
        "type": "Logo Perusahaan",
        "width": 300,
        "height": 300,
        "ratio": "1:1",
        "notes": "Logo persegi untuk halaman perusahaan"
      },
      {
        "type": "Banner Perusahaan",
        "width": 1128,
        "height": 191,
        "ratio": "5.9:1",
        "notes": "Banner sangat lebar; jaga teks di tengah"
      }
    ],
    "tips": [
      "Gunakan 1200×628 untuk gambar pratinjau tautan (format kartu LinkedIn)",
      "Foto profil harus menampilkan wajah Anda dengan jelas — LinkedIn adalah konteks profesional",
      "Banner personal dapat menampilkan karya, keahlian, atau merek Anda — gunakan 1584×396",
      "Postingan perusahaan dengan gambar mendapat engagement yang jauh lebih tinggi dibanding postingan teks saja",
      "Ekspor foto profil sebagai JPEG atau PNG; ukuran file maksimal 8MB"
    ],
    "faq": [
      {
        "q": "Berapa ukuran gambar terbaik untuk postingan LinkedIn?",
        "a": "1200×628 piksel (rasio 1.91:1) adalah ukuran gambar postingan yang direkomendasikan LinkedIn. Gambar persegi (1080×1080) juga berfungsi dengan baik dan mungkin ditampilkan lebih baik di feed mobile."
      },
      {
        "q": "Berapa ukuran banner profil LinkedIn?",
        "a": "Banner personal LinkedIn (foto latar belakang) harus berukuran 1584×396 piksel (rasio 4:1). Ini adalah ukuran yang ditampilkan di belakang foto profil Anda di desktop dan mobile."
      }
    ],
    "relatedRatios": [
      "1-1",
      "16-9"
    ]
  },
  "facebook": {
    "name": "Facebook",
    "title": "Ukuran Gambar & Rasio Aspek Facebook 2026 — Panduan Lengkap",
    "description": "Dimensi gambar Facebook untuk 2026: gambar postingan, foto sampul, Stories, foto profil, dan lainnya. Spesifikasi piksel yang tepat.",
    "intro": "Facebook mendukung banyak format gambar dan spesifikasinya bervariasi menurut penempatan. Berikut dimensi yang direkomendasikan untuk 2026 untuk memastikan konten Anda terlihat terbaik.",
    "formats": [
      {
        "type": "Gambar Postingan",
        "width": 1200,
        "height": 630,
        "ratio": "1.91:1",
        "notes": "Gambar feed standar; juga digunakan untuk pratinjau tautan"
      },
      {
        "type": "Gambar Postingan (Persegi)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Aman untuk feed desktop dan mobile"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vertikal layar penuh; durasi 24 jam"
      },
      {
        "type": "Foto Profil",
        "width": 180,
        "height": 180,
        "ratio": "1:1",
        "notes": "Ditampilkan pada 170×170 di desktop; potongan lingkaran"
      },
      {
        "type": "Foto Sampul",
        "width": 820,
        "height": 312,
        "ratio": "2.63:1",
        "notes": "Ditampilkan pada 820×312 di desktop, 640×360 di mobile"
      },
      {
        "type": "Sampul Acara",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Gambar header halaman acara"
      }
    ],
    "tips": [
      "Desain foto sampul dengan konten utama di tengah — pemotongan berbeda di mobile vs desktop",
      "Untuk postingan tautan, gunakan gambar 1200×630 untuk memicu kartu pratinjau besar Facebook",
      "Unggah foto dengan resolusi tertinggi yang mungkin — Facebook akan mengompresinya",
      "Foto profil ditampilkan sebagai lingkaran — jaga wajah atau logo tetap di tengah",
      "Zona aman Stories: jaga konten dalam jarak 250px dari tepi atas dan bawah"
    ],
    "faq": [
      {
        "q": "Berapa ukuran gambar postingan Facebook terbaik?",
        "a": "1200×630 piksel (rasio 1.91:1) adalah ukuran postingan Facebook yang direkomendasikan. Ini juga berfungsi untuk gambar pratinjau tautan. Persegi (1080×1080) adalah alternatif aman yang terlihat konsisten di semua penempatan."
      },
      {
        "q": "Berapa ukuran foto sampul Facebook?",
        "a": "Ukuran foto sampul Facebook yang direkomendasikan adalah 820×312 piksel untuk desktop. Di mobile, ditampilkan sebagai 640×360. Untuk menghindari pemotongan, jaga konten penting di area tengah 640×312."
      }
    ],
    "relatedRatios": [
      "1-1",
      "16-9",
      "9-16"
    ]
  },
  "pinterest": {
    "name": "Pinterest",
    "title": "Ukuran Pin & Rasio Aspek Pinterest 2026 — Panduan Lengkap",
    "description": "Dimensi gambar Pinterest untuk 2026: pin standar, Idea Pin, pin persegi, dan foto profil. Dapatkan rasio aspek yang tepat untuk jangkauan maksimum.",
    "intro": "Pinterest adalah platform penemuan visual di mana gambar yang lebih tinggi (rasio 2:3) berkinerja terbaik — gambar tersebut mengisi lebih banyak ruang di feed. Berikut dimensi yang direkomendasikan untuk semua jenis konten Pinterest.",
    "formats": [
      {
        "type": "Pin Standar (Potret)",
        "width": 1000,
        "height": 1500,
        "ratio": "2:3",
        "notes": "Direkomendasikan — jangkauan dan engagement terbaik"
      },
      {
        "type": "Pin Persegi",
        "width": 1000,
        "height": 1000,
        "ratio": "1:1",
        "notes": "Berfungsi baik; ruang vertikal lebih sedikit dari potret"
      },
      {
        "type": "Pin Tinggi",
        "width": 1000,
        "height": 2100,
        "ratio": "1:2.1",
        "notes": "Tinggi maksimum; gunakan dengan hati-hati — mungkin terpotong"
      },
      {
        "type": "Idea Pin",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Format cerita multi-halaman; vertikal layar penuh"
      },
      {
        "type": "Foto Profil",
        "width": 165,
        "height": 165,
        "ratio": "1:1",
        "notes": "Potongan lingkaran; jaga subjek di tengah"
      }
    ],
    "tips": [
      "Gunakan 1000×1500 (2:3) untuk pin standar — ini adalah titik optimal untuk visibilitas di feed",
      "Hindari membuat pin lebih tinggi dari rasio 1:2.1 — Pinterest mungkin memotong gambar yang terlalu tinggi",
      "Tambahkan overlay teks di bagian tengah atas pin — hindari 100px bawah tempat domain sumber ditampilkan",
      "Simpan pin dalam JPEG untuk foto (maks 20MB) atau PNG untuk grafis dengan transparansi",
      "Idea Pin (9:16) berfungsi berbeda dari pin standar — lebih mirip Stories"
    ],
    "faq": [
      {
        "q": "Berapa ukuran pin Pinterest terbaik?",
        "a": "Ukuran pin Pinterest yang direkomendasikan adalah 1000×1500 piksel (rasio 2:3). Format potret ini mengisi lebih banyak ruang vertikal di feed, meningkatkan visibilitas dan rasio klik."
      },
      {
        "q": "Bisakah saya menggunakan gambar persegi di Pinterest?",
        "a": "Ya, pin persegi 1:1 (mis. 1000×1000) didukung. Namun, pin potret (2:3) biasanya berkinerja lebih baik karena menempati lebih banyak ruang layar di feed bergaya masonry."
      },
      {
        "q": "Apa itu Pinterest Idea Pin?",
        "a": "Idea Pin (sebelumnya Story Pin) adalah konten vertikal multi-halaman dan layar penuh (9:16, 1080×1920). Konten ini tidak menautkan ke situs web eksternal dan dirancang untuk konten native di dalam Pinterest."
      }
    ],
    "relatedRatios": [
      "3-2",
      "1-1",
      "9-16"
    ]
  }
};

export const ARTICLE_DATA: Record<string, ArticleData> = {
  "what-is-aspect-ratio": {
    "title": "Apa Itu Rasio Aspek? Panduan untuk Pemula",
    "description": "Penjelasan yang jelas dan ramah pemula tentang rasio aspek: apa artinya, bagaimana penulisannya, mengapa penting untuk layar dan gambar, serta cara menggunakannya.",
    "intro": "Rasio aspek adalah salah satu istilah yang terdengar teknis tetapi sebenarnya cukup sederhana setelah Anda memahaminya. Baik Anda sedang mengubah ukuran foto untuk Instagram, menyiapkan video YouTube, atau membeli monitor baru, rasio aspek menentukan bentuk gambar atau layar Anda. Panduan ini menjelaskan semua yang perlu Anda ketahui.",
    "sections": [
      {
        "heading": "Apa Arti Rasio Aspek?",
        "body": "Rasio aspek adalah hubungan proporsional antara lebar dan tinggi suatu gambar, layar, atau bingkai video. Ditulis sebagai dua angka yang dipisahkan oleh titik dua — misalnya, 16:9 atau 4:3. Angka pertama adalah lebar dan angka kedua adalah tinggi. Rasio 16:9 berarti untuk setiap 16 unit lebar, tingginya adalah 9 unit. Ukuran sebenarnya tidak penting — gambar 160×90 piksel dan gambar 3840×2160 piksel keduanya 16:9 karena memiliki proporsi yang sama."
      },
      {
        "heading": "Mengapa Rasio Aspek Penting?",
        "body": "Rasio aspek penting setiap kali Anda menampilkan, mencetak, atau membagikan konten visual. Jika rasio gambar Anda tidak sesuai dengan rasio layar atau wadah, salah satu dari dua hal ini terjadi:",
        "list": [
          "Letterboxing / Pillarboxing — Bilah hitam muncul untuk mengisi ruang kosong",
          "Pemotongan — Gambar dipotong agar pas, dan sebagian konten hilang",
          "Peregangan — Gambar didistorsi untuk mengisi bingkai (paling tidak diinginkan)"
        ]
      },
      {
        "heading": "Rasio Aspek Umum dan Di Mana Digunakan",
        "body": "Industri dan platform yang berbeda telah menstandardisasi rasio aspek yang berbeda. Berikut yang paling penting untuk diketahui:",
        "table": {
          "headers": [
            "Rasio",
            "Desimal",
            "Penggunaan Umum"
          ],
          "rows": [
            [
              "16:9",
              "1.78:1",
              "YouTube, Netflix, TV, monitor, presentasi"
            ],
            [
              "9:16",
              "0.56:1",
              "TikTok, Instagram Reels, YouTube Shorts, Stories"
            ],
            [
              "1:1",
              "1.00:1",
              "Postingan feed Instagram, foto profil, sampul album"
            ],
            [
              "4:5",
              "0.80:1",
              "Postingan potret Instagram (tinggi feed maksimum)"
            ],
            [
              "4:3",
              "1.33:1",
              "iPad, TV lama, PowerPoint, kamera DSLR"
            ],
            [
              "3:2",
              "1.50:1",
              "Kamera DSLR, cetakan 4×6, film 35mm"
            ],
            [
              "2.39:1",
              "2.39:1",
              "Film bioskop cinemascope"
            ]
          ]
        }
      },
      {
        "heading": "Cara Menghitung Rasio Aspek",
        "body": "Untuk menemukan rasio aspek gambar apa pun, bagi lebar dan tinggi dengan Faktor Persekutuan Terbesar (FPB) mereka. Misalnya, gambar 1920×1080 piksel: kedua angka habis dibagi 120, menghasilkan 16:9. Kalkulator gratis kami melakukan ini secara otomatis — cukup masukkan lebar dan tinggi Anda."
      },
      {
        "heading": "Rasio Aspek vs. Resolusi",
        "body": "Rasio aspek dan resolusi saling terkait tetapi bukan hal yang sama. Resolusi mengacu pada jumlah total piksel (mis. 1920×1080). Rasio aspek mengacu pada bentuk (mis. 16:9). Dua gambar dapat memiliki rasio aspek yang sama tetapi resolusi yang sangat berbeda — misalnya, 640×360 dan 3840×2160 keduanya 16:9 tetapi berbeda jauh dalam jumlah piksel dan kualitas."
      }
    ],
    "conclusion": "Memahami rasio aspek membantu Anda menghasilkan gambar dan video yang terlihat persis seperti yang diinginkan di setiap layar dan platform. Gunakan kalkulator rasio aspek gratis kami untuk mengonversi dimensi secara instan, mengidentifikasi rasio, dan mengubah ukuran gambar sambil mempertahankan proporsi yang benar."
  },
  "how-to-calculate-aspect-ratio": {
    "title": "Cara Menghitung Rasio Aspek: Panduan Lengkap",
    "description": "Pelajari cara menghitung rasio aspek langkah demi langkah: menggunakan metode FPB, rumusnya, dan kalkulator online gratis kami. Termasuk contoh yang sudah dikerjakan.",
    "intro": "Mengetahui cara menghitung rasio aspek adalah keterampilan dasar bagi siapa pun yang bekerja dengan gambar, video, atau desain. Panduan ini mencakup matematika di baliknya, metode manual tercepat, dan cara menggunakan kalkulator gratis kami untuk hasil instan.",
    "sections": [
      {
        "heading": "Rumus Rasio Aspek",
        "body": "Rasio aspek dari persegi panjang apa pun adalah: Lebar ÷ Tinggi. Untuk menyatakannya sebagai rasio W:H yang bersih (mis. 16:9 daripada 1,778:1), Anda perlu menemukan Faktor Persekutuan Terbesar (FPB) dari lebar dan tinggi, lalu membagi keduanya dengan FPB tersebut."
      },
      {
        "heading": "Langkah demi Langkah: Cara Menemukan Rasio Aspek",
        "body": "Berikut cara menghitung rasio aspek gambar apa pun secara manual:",
        "list": [
          "Langkah 1: Tulis lebar dan tinggi dalam piksel (mis. 1920 dan 1080)",
          "Langkah 2: Temukan Faktor Persekutuan Terbesar (FPB) dari kedua angka. Untuk 1920 dan 1080, FPB-nya adalah 120.",
          "Langkah 3: Bagi kedua angka dengan FPB. 1920 ÷ 120 = 16; 1080 ÷ 120 = 9.",
          "Langkah 4: Tulis hasilnya sebagai W:H — dalam hal ini, 16:9."
        ]
      },
      {
        "heading": "Contoh yang Sudah Dikerjakan",
        "body": "Berikut beberapa dimensi umum beserta rasio aspeknya:",
        "table": {
          "headers": [
            "Lebar",
            "Tinggi",
            "FPB",
            "Rasio Aspek"
          ],
          "rows": [
            [
              "1920",
              "1080",
              "120",
              "16:9"
            ],
            [
              "1080",
              "1350",
              "270",
              "4:5"
            ],
            [
              "1280",
              "720",
              "80",
              "16:9"
            ],
            [
              "3840",
              "2160",
              "240",
              "16:9"
            ],
            [
              "1080",
              "1920",
              "120",
              "9:16"
            ],
            [
              "1200",
              "630",
              "30",
              "40:21 ≈ 1.91:1"
            ]
          ]
        }
      },
      {
        "heading": "Cara Menghitung Dimensi yang Hilang",
        "body": "Jika Anda mengetahui dimensi asli dan ingin menemukan ukuran baru dengan rasio yang sama, gunakan rumus ini: Tinggi Baru = (Tinggi Asli ÷ Lebar Asli) × Lebar Baru. Misalnya, untuk menemukan tinggi gambar 16:9 dengan lebar 1280px: (1080 ÷ 1920) × 1280 = 720px. Kalkulator kami melakukan ini secara otomatis di kedua arah."
      },
      {
        "heading": "Metode Tercepat: Gunakan Kalkulator",
        "body": "Menghitung rasio aspek secara manual mudah untuk angka bulat, tetapi cepat menjadi membosankan untuk dimensi tidak teratur seperti 1847×923. Kalkulator Rasio Aspek gratis kami menangani lebar dan tinggi apa pun secara instan — masukkan nilai Anda dan dapatkan rasio yang disederhanakan, desimal, kecocokan standar terdekat, dan nilai CSS dalam satu klik."
      }
    ],
    "conclusion": "Menghitung rasio aspek mudah setelah Anda memahami metode FPB. Untuk penggunaan sehari-hari, kalkulator gratis kami akan menghemat waktu Anda dan memberikan informasi tambahan seperti analisis kualitas, ukuran cetak, dan ekspor CSS. Coba sekarang di aspect-ratio-calculator.com."
  },
  "aspect-ratio-social-media-guide-2026": {
    "title": "Ukuran Gambar & Rasio Aspek Media Sosial: Panduan Lengkap 2026",
    "description": "Setiap ukuran gambar dan rasio aspek media sosial untuk 2026: Instagram, YouTube, TikTok, X, LinkedIn, Facebook, dan Pinterest. Simpan panduan ini di bookmark Anda.",
    "intro": "Setiap platform media sosial memiliki dimensi gambar yang direkomendasikan sendiri, dan dimensi ini berubah secara berkala. Menggunakan ukuran yang salah berarti gambar Anda akan terpotong, buram, atau ditampilkan dengan buruk. Panduan ini mencakup setiap platform utama untuk 2026.",
    "sections": [
      {
        "heading": "Mengapa Ukuran Gambar Penting di Media Sosial",
        "body": "Setiap platform memiliki tata letak feed, area tampilan, dan algoritma kompresi yang berbeda. Gambar yang dioptimalkan untuk satu platform mungkin terlihat buram, terpotong, atau teregang di platform lain. Mengunggah dengan dimensi yang tepat memastikan:",
        "list": [
          "Tidak ada pemotongan konten utama yang tidak terduga",
          "Ketajaman maksimum — tidak ada upscaling oleh platform",
          "Waktu muat lebih cepat — ukuran yang tepat mengurangi ukuran file",
          "Performa lebih baik dalam algoritma rekomendasi"
        ]
      },
      {
        "heading": "Ukuran Gambar Instagram 2026",
        "body": "Instagram mendukung tiga rasio feed ditambah Stories dan Reels. Untuk postingan feed, potret 4:5 (1080×1350) memberi Anda ruang vertikal terbanyak — ideal untuk memaksimalkan visibilitas saat menggulir.",
        "table": {
          "headers": [
            "Format",
            "Dimensi",
            "Rasio"
          ],
          "rows": [
            [
              "Postingan Feed (Persegi)",
              "1080 × 1080",
              "1:1"
            ],
            [
              "Postingan Feed (Potret)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Postingan Feed (Lanskap)",
              "1080 × 566",
              "1.91:1"
            ],
            [
              "Story / Reel",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Foto Profil",
              "320 × 320",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Dimensi YouTube 2026",
        "body": "YouTube adalah platform 16:9. Desain thumbnail pada 1280×720 dengan teks tebal dan mudah dibaca — thumbnail Anda sering menjadi faktor penentu apakah seseorang mengklik.",
        "table": {
          "headers": [
            "Format",
            "Dimensi",
            "Rasio"
          ],
          "rows": [
            [
              "Video (1080p)",
              "1920 × 1080",
              "16:9"
            ],
            [
              "Shorts",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Thumbnail",
              "1280 × 720",
              "16:9"
            ],
            [
              "Banner Channel",
              "2560 × 1440",
              "16:9"
            ]
          ]
        }
      },
      {
        "heading": "Ukuran Video TikTok 2026",
        "body": "TikTok sepenuhnya vertikal — selalu gunakan 9:16 pada 1080×1920 untuk kualitas terbaik. Jaga konten utama di tengah bingkai dan jauhkan dari 20% bawah di mana teks dan elemen UI muncul.",
        "table": {
          "headers": [
            "Format",
            "Dimensi",
            "Rasio"
          ],
          "rows": [
            [
              "Video (Direkomendasikan)",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Foto Profil",
              "200 × 200",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Referensi Cepat: Semua Platform",
        "body": "Berikut tabel referensi cepat untuk ukuran gambar media sosial yang paling sering digunakan pada 2026:",
        "table": {
          "headers": [
            "Platform",
            "Format",
            "Dimensi",
            "Rasio"
          ],
          "rows": [
            [
              "Instagram",
              "Postingan Feed (Potret)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Instagram",
              "Story / Reel",
              "1080 × 1920",
              "9:16"
            ],
            [
              "YouTube",
              "Video",
              "1920 × 1080",
              "16:9"
            ],
            [
              "YouTube",
              "Thumbnail",
              "1280 × 720",
              "16:9"
            ],
            [
              "TikTok",
              "Video",
              "1080 × 1920",
              "9:16"
            ],
            [
              "X / Twitter",
              "Gambar Postingan",
              "1600 × 900",
              "16:9"
            ],
            [
              "LinkedIn",
              "Gambar Postingan",
              "1200 × 628",
              "1.91:1"
            ],
            [
              "Facebook",
              "Gambar Postingan",
              "1200 × 630",
              "1.91:1"
            ],
            [
              "Pinterest",
              "Pin Standar",
              "1000 × 1500",
              "2:3"
            ]
          ]
        }
      }
    ],
    "conclusion": "Simpan panduan ini di bookmark Anda dan gunakan Kalkulator Rasio Aspek gratis kami untuk memverifikasi atau mengonversi dimensi apa pun dalam hitungan detik. Masukkan ukuran gambar saat ini dan dimensi platform target untuk memeriksa kualitas, menghitung nilai CSS, dan membagikan hasilnya secara instan."
  },
  "16-9-vs-4-3-aspect-ratio": {
    "title": "Rasio Aspek 16:9 vs 4:3 — Mana yang Harus Anda Gunakan?",
    "description": "Perbandingan yang jelas antara rasio aspek 16:9 dan 4:3: kapan menggunakan masing-masing, sejarah di baliknya, perbedaan utama, dan contoh ukuran piksel.",
    "intro": "16:9 dan 4:3 adalah dua rasio aspek yang paling bersejarah dalam video dan fotografi. Jika Anda pernah melihat bilah hitam di layar — baik di samping atau atas dan bawah — Anda sudah menemukan perbedaan di antara keduanya. Berikut perbandingan lengkapnya.",
    "sections": [
      {
        "heading": "Perbedaan Utama",
        "body": "16:9 lebih lebar dan lebih persegi panjang (rasio 1,78:1), sedangkan 4:3 lebih persegi (rasio 1,33:1). Gambar 16:9 sekitar 33% lebih lebar dari gambar 4:3 dengan tinggi yang sama. Perbedaan ini mungkin tampak kecil tetapi sangat terlihat di layar."
      },
      {
        "heading": "Sejarah: Dari Mana Mereka Berasal?",
        "body": "4:3 adalah standar televisi asli, diadopsi pada tahun 1930-an karena sangat cocok dengan rasio aspek film gambar bergerak 35mm pada masa itu. 16:9 diperkenalkan pada akhir 1980-an sebagai standar layar lebar kompromi yang bisa menampilkan konten TV 4:3 (dengan bilah samping kecil) dan konten sinema 2.39:1 (dengan bilah atas/bawah kecil) dengan ruang hitam minimal. ITU mengadopsi 16:9 sebagai standar HDTV pada tahun 1987."
      },
      {
        "heading": "Kapan Menggunakan 16:9",
        "body": "Gunakan 16:9 ketika:",
        "list": [
          "Membuat konten video untuk YouTube, Netflix, atau televisi",
          "Membuat presentasi modern (Google Slides, PowerPoint 2016 dan setelahnya default ke 16:9)",
          "Mendesain untuk monitor dan laptop layar lebar",
          "Merekam video dengan smartphone atau kamera modern",
          "Membuat thumbnail YouTube"
        ]
      },
      {
        "heading": "Kapan Menggunakan 4:3",
        "body": "Gunakan 4:3 ketika:",
        "list": [
          "Mendesain untuk layar iPad (yang menggunakan 4:3)",
          "Membuat presentasi untuk proyektor lama",
          "Menyesuaikan dengan konten video lama",
          "Mencetak pada proporsi fotografi standar (beberapa kamera)",
          "Bekerja dengan rekaman CCTV atau pengawasan"
        ]
      },
      {
        "heading": "Perbandingan Ukuran Piksel",
        "body": "Berikut resolusi umum untuk kedua rasio pada hitungan megapiksel yang setara:",
        "table": {
          "headers": [
            "Kualitas",
            "Ukuran 16:9",
            "Ukuran 4:3"
          ],
          "rows": [
            [
              "720p",
              "1280 × 720",
              "960 × 720"
            ],
            [
              "1080p",
              "1920 × 1080",
              "1440 × 1080"
            ],
            [
              "4K",
              "3840 × 2160",
              "2880 × 2160"
            ]
          ]
        }
      }
    ],
    "conclusion": "Untuk sebagian besar konten video dan layar modern, 16:9 adalah pilihan yang tepat. Untuk konten yang difokuskan pada tablet atau kompatibilitas lama, 4:3 mungkin lebih sesuai. Jika ragu, gunakan Kalkulator Rasio Aspek gratis kami untuk mengonversi antara keduanya dan melihat pratinjau hasilnya secara instan."
  },
  "how-to-resize-image-without-losing-quality": {
    "title": "Cara Mengubah Ukuran Gambar Tanpa Kehilangan Kualitas",
    "description": "Pelajari teknik mengubah ukuran gambar tanpa kehilangan kualitas: downscaling vs upscaling, format file terbaik, penjelasan DPI, dan rekomendasi alat.",
    "intro": "Mengubah ukuran gambar terdengar sederhana, tetapi jika dilakukan dengan salah, hasilnya adalah foto yang buram, berpiksel, atau terdistorsi. Panduan ini menjelaskan kapan dan bagaimana Anda bisa mengubah ukuran gambar tanpa kehilangan kualitas yang terlihat.",
    "sections": [
      {
        "heading": "Downscaling vs. Upscaling",
        "body": "Ada dua arah untuk mengubah ukuran gambar, dan keduanya memiliki implikasi kualitas yang sangat berbeda. Downscaling (memperkecil gambar) hampir selalu mempertahankan kualitas — Anda hanya membuang piksel. Upscaling (memperbesar gambar) adalah di mana masalah kualitas muncul, karena perangkat lunak harus membuat data piksel yang tidak ada dalam gambar asli."
      },
      {
        "heading": "Aturan Emas: Selalu Mulai dari Resolusi Tertinggi",
        "body": "Kehilangan kualitas sebagian besar tidak dapat dipulihkan. Jika Anda memulai dengan gambar kecil dan membutuhkan yang besar, Anda akan selalu melihat degradasi kualitas. Praktik terbaik adalah:",
        "list": [
          "Selalu simpan file asli resolusi tinggi Anda",
          "Ekspor atau simpan salinan terpisah pada ukuran target",
          "Jangan pernah menyimpan ulang JPEG terkompresi berkali-kali — setiap penyimpanan menurunkan kualitas",
          "Ekspor dari file master setiap kali Anda membutuhkan ukuran baru"
        ]
      },
      {
        "heading": "Seberapa Besar Anda Bisa Melakukan Upscale?",
        "body": "Sebagai pedoman umum: upscaling hingga 110–120% umumnya tidak terlihat oleh sebagian besar penonton. Upscaling sebesar 150–200% menghasilkan kelembutan yang terlihat. Upscaling di atas 200% biasanya menghasilkan pikselisasi dan blur yang jelas. Alat upscaling berbasis AI (seperti Topaz Gigapixel, Adobe Firefly, dan sejenisnya) terkadang bisa menghasilkan hasil yang dapat diterima pada upscaling 2–4× dengan menghasilkan detail secara cerdas."
      },
      {
        "heading": "Mempertahankan Rasio Aspek Saat Mengubah Ukuran",
        "body": "Salah satu kesalahan kualitas paling umum adalah secara tidak sengaja mengubah rasio aspek saat mengubah ukuran — meregangkan atau menekan gambar. Selalu ubah ukuran secara proporsional dengan mengunci rasio aspek di alat pengeditan Anda. Kalkulator gratis kami membantu Anda menemukan tinggi target yang tepat untuk lebar baru apa pun (atau sebaliknya), memastikan perubahan ukuran Anda mempertahankan proporsi asli."
      },
      {
        "heading": "Format File Terbaik untuk Kualitas",
        "body": "Format file secara signifikan memengaruhi kualitas setelah mengubah ukuran:",
        "list": [
          "PNG — Kompresi lossless; ideal untuk grafis, ilustrasi, dan tangkapan layar di mana ketajaman penting",
          "JPEG — Kompresi lossy; ideal untuk foto; atur kualitas ke 80–90% untuk keseimbangan ukuran/kualitas terbaik",
          "WebP — Format modern yang mencapai kompresi lebih baik dari JPEG pada kualitas setara; didukung oleh semua browser modern",
          "TIFF — Tidak terkompresi atau lossless; digunakan dalam alur kerja cetak dan fotografi profesional"
        ]
      },
      {
        "heading": "DPI dan Kualitas Cetak",
        "body": "DPI (dots per inch) hanya relevan untuk cetak — layar mengabaikannya. Untuk cetak: gunakan 300 DPI untuk cetakan foto yang tajam, 150 DPI untuk kualitas yang dapat diterima, dan 72–96 DPI untuk penggunaan layar saja. Untuk menghitung dimensi piksel yang dibutuhkan untuk cetakan: kalikan ukuran cetak dalam inci dengan DPI. Untuk cetakan 8×10 inci pada 300 DPI: 2400×3000 piksel."
      }
    ],
    "conclusion": "Cara terbaik mengubah ukuran tanpa kehilangan kualitas adalah selalu melakukan downscale dari asli resolusi tinggi, mempertahankan rasio aspek, dan mengekspor dalam format yang sesuai. Gunakan Kalkulator Rasio Aspek kami untuk menemukan dimensi target yang tepat yang mempertahankan proporsi asli Anda — tanpa perlu menebak."
  }
};
