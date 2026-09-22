import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";

export const RATIO_DATA: Record<string, RatioData> = {
  "16-9": {
    "label": "16:9",
    "w": 16,
    "h": 9,
    "title": "Raport de aspect 16:9 — Dimensiuni, Pixeli și Calculator Gratuit",
    "description": "Totul despre raportul de aspect 16:9: dimensiuni comune (720p, 1080p, 4K, 8K), cazuri de utilizare și un calculator gratuit. Standardul pentru video, TV și monitoare.",
    "explanation": "16:9 (șaisprezece la nouă) este raportul de aspect widescreen adoptat universal pentru video HD, streaming și ecrane moderne. Pentru fiecare 16 unități de lățime, înălțimea este de 9 unități — producând un dreptunghi lat, cinematic. A înlocuit standardul mai vechi 4:3 la începutul anilor 2000 și este acum implicit pentru practic tot conținutul video, monitoare și transmisiuni TV la nivel mondial.",
    "useCases": [
      "Videoclipuri și miniaturi YouTube",
      "Netflix, Disney+ și platforme de streaming",
      "Televiziune HD și 4K",
      "Monitoare PC și ecrane de laptop",
      "Prezentări PowerPoint și Google Slides",
      "Fundaluri pentru Zoom și conferințe video",
      "Secvențe cinematice din jocuri video"
    ],
    "dimensions": [
      {
        "name": "nHD",
        "width": 640,
        "height": 360,
        "use": "Web de rezoluție joasă, alternativă mobilă"
      },
      {
        "name": "HD (720p)",
        "width": 1280,
        "height": 720,
        "use": "Video web, dispozitive mai vechi, minim YouTube"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1920,
        "height": 1080,
        "use": "Streaming standard, YouTube, transmisii TV"
      },
      {
        "name": "QHD (1440p)",
        "width": 2560,
        "height": 1440,
        "use": "Monitoare de înaltă rezoluție, gaming"
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
        "use": "Ecrane viitoare, arhivare, mastere de transmisie"
      }
    ],
    "faq": [
      {
        "q": "Ce înseamnă 16:9 în pixeli?",
        "a": "Cele mai comune dimensiuni de pixeli 16:9 sunt 1280×720 (720p HD), 1920×1080 (1080p FHD), 2560×1440 (1440p QHD) și 3840×2160 (4K UHD). Orice lățime divizibilă care dă un raport 16:9 funcționează — de exemplu 640×360 sau 800×450."
      },
      {
        "q": "De ce este 16:9 standardul pentru video?",
        "a": "16:9 a fost ales ca standard internațional HDTV în anii 1980-90 deoarece este un compromis matematic între raportul TV mai vechi 4:3 și raportul cinematic mai lat 2.39:1. Minimizează barele negre (letterboxing) la afișarea conținutului din oricare sursă."
      },
      {
        "q": "Este 1920×1080 același lucru cu 16:9?",
        "a": "Da. 1920 ÷ 16 = 120, iar 1080 ÷ 9 = 120, deci ambele dimensiuni au același factor. 1920×1080 (Full HD / 1080p) este cea mai utilizată rezoluție 16:9."
      },
      {
        "q": "Care este raportul 16:9 pentru o rezoluție 4K?",
        "a": "4K UHD (Ultra High Definition) la 16:9 este 3840×2160 pixeli — exact de patru ori suprafața lui 1920×1080. Cinema 4K (DCI 4K) este 4096×2160, care este un raport ușor diferit (1.9:1)."
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
    "title": "Raport de aspect 9:16 — Dimensiuni TikTok, Reels și Video Vertical",
    "description": "Ghid complet pentru raportul de aspect 9:16: dimensiuni în pixeli, cazuri de utilizare pentru TikTok, Instagram Reels, YouTube Shorts și un calculator gratuit.",
    "explanation": "9:16 este echivalentul vertical (portret) al formatului widescreen 16:9. Umple perfect ecranul unui smartphone ținut vertical — făcându-l formatul dominant pentru videoclipurile scurte de pe rețelele sociale. TikTok, Instagram Reels, YouTube Shorts și Snapchat folosesc toate 9:16 ca pânză principală.",
    "useCases": [
      "Videoclipuri TikTok",
      "Instagram Reels și Stories",
      "YouTube Shorts",
      "Videoclipuri Snapchat",
      "Facebook Reels și Stories",
      "Pinuri video Pinterest",
      "Publicitate optimizată pentru mobil"
    ],
    "dimensions": [
      {
        "name": "SD Mobile",
        "width": 540,
        "height": 960,
        "use": "Mobil de rezoluție joasă, dispozitive mai vechi"
      },
      {
        "name": "HD Mobile",
        "width": 720,
        "height": 1280,
        "use": "Calitate mobilă standard"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1080,
        "height": 1920,
        "use": "TikTok, Instagram Reels, YouTube Shorts — recomandat"
      },
      {
        "name": "QHD Mobile",
        "width": 1440,
        "height": 2560,
        "use": "Înregistrare cu smartphone de top"
      }
    ],
    "faq": [
      {
        "q": "Ce rezoluție ar trebui să folosesc pentru TikTok?",
        "a": "TikTok recomandă 1080×1920 pixeli (raport 9:16) pentru cea mai bună calitate. Acesta este video vertical Full HD. Utilizarea unei rezoluții mai mici poate duce la artefacte de compresie după încărcare."
      },
      {
        "q": "Este 9:16 același lucru cu modul portret?",
        "a": "Da. 9:16 este raportul standard de video portret (vertical), echivalent cu rotirea unei cadre widescreen 16:9 pe o parte. Se potrivește cu orientarea naturală a unui smartphone ținut într-o mână."
      },
      {
        "q": "Pot posta un videoclip 9:16 pe YouTube?",
        "a": "Da — YouTube Shorts este conceput special pentru videoclipuri verticale 9:16. Încărcările obișnuite pe YouTube acceptă și 9:16, dar vor fi afișate cu bare negre (pillarboxing) pe desktop atunci când sunt încorporate într-un player 16:9."
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
    "title": "Raport de aspect 4:3 — Dimensiuni Clasice de Ecran și Calculator",
    "description": "Raportul de aspect 4:3 explicat: dimensiuni comune în pixeli, unde este încă utilizat astăzi (tablete, prezentări, film) și un calculator gratuit.",
    "explanation": "4:3 (patru la trei) a fost standardul pentru televizoare și monitoare de calculator din anii 1930 până la începutul anilor 2000. Produce un dreptunghi aproape pătrat care se potrivește cu proporțiile cadrelor de film de 35mm. Deși în mare parte înlocuit de 16:9 pentru video, rămâne relevant pentru ecranele iPad, prezentările PowerPoint și anumite formate de fotografie.",
    "useCases": [
      "Ecrane iPad și tablete",
      "Televiziune veche și CCTV",
      "Prezentări PowerPoint / Keynote (format mai vechi)",
      "Camere digitale și fotografie",
      "Broșuri tipărite și documente cu raport A4",
      "Efecte video și de film în stil retro"
    ],
    "dimensions": [
      {
        "name": "QVGA",
        "width": 320,
        "height": 240,
        "use": "Dispozitive vechi, ecrane încorporate"
      },
      {
        "name": "VGA",
        "width": 640,
        "height": 480,
        "use": "Web clasic, standard webcam"
      },
      {
        "name": "SVGA",
        "width": 800,
        "height": 600,
        "use": "Monitoare mai vechi, proiectoare"
      },
      {
        "name": "XGA",
        "width": 1024,
        "height": 768,
        "use": "iPad (generațiile 1-4), proiectoare standard"
      },
      {
        "name": "SXGA",
        "width": 1280,
        "height": 960,
        "use": "Camere digitale, fotografie"
      },
      {
        "name": "UXGA",
        "width": 1600,
        "height": 1200,
        "use": "Monitoare profesionale, imagini de calitate pentru print"
      }
    ],
    "faq": [
      {
        "q": "Ce este raportul 4:3 în pixeli?",
        "a": "Dimensiunile comune de pixeli 4:3 includ 640×480 (VGA), 800×600 (SVGA), 1024×768 (XGA) și 1280×960. Orice rezoluție unde lățime ÷ înălțime = 1.333... respectă raportul 4:3."
      },
      {
        "q": "Mai folosește cineva 4:3?",
        "a": "Da. iPad-ul folosește un ecran 4:3 (2048×1536 pe modelele Retina). Multe șabloane PowerPoint, camere DSLR și camere de supraveghere vechi folosesc, de asemenea, 4:3. Este mai puțin comun pentru video, dar încă relevant pentru imagini statice și prezentări."
      },
      {
        "q": "Care este diferența dintre 4:3 și 16:9?",
        "a": "4:3 este mai pătrat (raport de 1.33:1), în timp ce 16:9 este mai lat și mai dreptunghiular (raport de 1.78:1). 16:9 este standardul modern pentru TV și video; 4:3 este standardul vechi care l-a precedat. Când vizualizați conținut 4:3 pe un ecran 16:9, apar bare negre (pillarboxing) pe laterale."
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
    "title": "Raport de aspect 1:1 — Dimensiuni Pătrate pentru Instagram și Nu Numai",
    "description": "Raportul de aspect pătrat 1:1: dimensiuni în pixeli, cele mai bune utilizări pe Instagram și rețelele sociale, și un calculator gratuit de raport de aspect.",
    "explanation": "1:1 este un pătrat perfect — lățimea și înălțimea sunt identice. Instagram a popularizat formatul pătrat pentru fotografia de pe rețelele sociale și rămâne un element de bază pentru fotografiile de profil, copertele de album și postările din feed pe toate platformele majore.",
    "useCases": [
      "Postări în feed-ul Instagram (format original)",
      "Fotografii de profil pe toate platformele",
      "Copertă de album și coperte muzicale",
      "Icoane de aplicații și favicoane",
      "Fotografie de produs pentru e-commerce",
      "Imagini pentru postări Facebook și LinkedIn"
    ],
    "dimensions": [
      {
        "name": "Small",
        "width": 400,
        "height": 400,
        "use": "Miniaturi de profil, icoane de aplicații"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1080,
        "use": "Postare în feed-ul Instagram (recomandat)"
      },
      {
        "name": "High Res",
        "width": 2048,
        "height": 2048,
        "use": "Print, fotografie profesională"
      },
      {
        "name": "4K Square",
        "width": 4096,
        "height": 4096,
        "use": "Print de rezoluție ultra înaltă, arhivare"
      }
    ],
    "faq": [
      {
        "q": "Care este cea mai bună rezoluție 1:1 pentru Instagram?",
        "a": "Instagram recomandă 1080×1080 pixeli pentru postările pătrate din feed. Minimul este 320×320, dar 1080×1080 este standardul pentru o afișare clară pe toate dispozitivele."
      },
      {
        "q": "Este un raport 1:1 același lucru cu un pătrat?",
        "a": "Da, exact. Un raport de aspect 1:1 înseamnă că lățimea este egală cu înălțimea, producând un pătrat perfect indiferent de numărul real de pixeli."
      },
      {
        "q": "De ce folosește Instagram 1:1?",
        "a": "Instagram a fost inițial conceput în jurul fotografiei mobile și a ales formatul pătrat 1:1 pentru a standardiza grila feed-ului. Deși ulterior au adăugat formate portret (4:5) și peisaj (1.91:1), pătratul 1:1 rămâne formatul clasic Instagram."
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
    "title": "Raport de aspect 4:5 — Dimensiuni Portret Instagram și Calculator",
    "description": "Raportul de aspect 4:5 pentru postările portret Instagram: cele mai bune dimensiuni în pixeli, de ce ocupă mai mult spațiu în feed și un calculator gratuit.",
    "explanation": "4:5 este un raport portret (mai înalt decât lat) care ocupă spațiul vertical maxim permis de feed-ul Instagram — oferind imaginii tale mai mult spațiu pe ecran decât o postare pătrată sau peisaj. Cu un raport de 0.8:1, este puțin mai lat decât un ecran de telefon 9:16, făcându-l ideal pentru portrete, fotografii de produs și fotografie editorială.",
    "useCases": [
      "Postări în feed-ul Instagram (portret — înălțime maximă)",
      "Fotografie pentru rețelele sociale",
      "Fotografie portret pentru print",
      "Pinuri Pinterest (format secundar)",
      "Postări de imagini portret Facebook"
    ],
    "dimensions": [
      {
        "name": "Minimum",
        "width": 600,
        "height": 750,
        "use": "Minim pentru o calitate acceptabilă pe Instagram"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1350,
        "use": "Postare portret Instagram (recomandat)"
      },
      {
        "name": "High Res",
        "width": 2160,
        "height": 2700,
        "use": "Imagini portret de calitate pentru print"
      }
    ],
    "faq": [
      {
        "q": "De ce să folosești 4:5 în loc de 9:16 pentru postările Instagram?",
        "a": "Instagram decupează imaginile 9:16 pentru feed la 4:5 (raportul portret maxim permis pentru postările din feed). Dacă folosești 4:5, obții cea mai înaltă imagine permisă în feed fără a pierde conținut prin decupare. 9:16 este doar pentru Stories și Reels."
      },
      {
        "q": "Care sunt dimensiunile în pixeli pentru Instagram 4:5?",
        "a": "Dimensiunea recomandată este 1080×1350 pixeli. Aceasta este dimensiunea portret maximă pe care Instagram o permite pentru postările din feed și se afișează clar pe toate dispozitivele."
      },
      {
        "q": "Obține 4:5 mai multă vizibilitate pe Instagram?",
        "a": "O postare 4:5 ocupă mai mult spațiu vertical în feed decât o postare pătrată 1:1 sau peisaj 1.91:1, ceea ce poate ajuta la captarea mai multă atenție pe măsură ce utilizatorii derulează. Mulți creatori raportează rate de engagement mai mari cu postările portret, deși acest lucru depinde de conținut."
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
    "title": "Raport de aspect 3:2 — Dimensiuni pentru Fotografie, DSLR și Print",
    "description": "Raportul de aspect 3:2 pentru camerele DSLR și print: dimensiuni comune, origini ale filmului de 35mm și un calculator gratuit de raport de aspect.",
    "explanation": "3:2 provine de la cadrul de film de 35mm, care măsoară 36mm × 24mm — un raport 3:2. Rămâne raportul nativ pentru majoritatea camerelor DSLR și mirrorless și se potrivește direct cu dimensiuni comune de print, cum ar fi 4×6 inchi, 6×9 inchi și 12×18 inchi.",
    "useCases": [
      "Senzori de camere DSLR și mirrorless",
      "Fotografie pe film de 35mm",
      "Printuri de 4×6 și 6×9 inchi",
      "Layout-uri pentru cărți foto",
      "Fotografie portret profesională"
    ],
    "dimensions": [
      {
        "name": "6MP",
        "width": 3008,
        "height": 2000,
        "use": "DSLR de nivel de intrare"
      },
      {
        "name": "12MP",
        "width": 4272,
        "height": 2848,
        "use": "DSLR de gamă medie (ex. Canon 60D)"
      },
      {
        "name": "24MP",
        "width": 6000,
        "height": 4000,
        "use": "DSLR profesional (ex. Nikon D3200)"
      },
      {
        "name": "36MP",
        "width": 7360,
        "height": 4912,
        "use": "DSLR de înaltă rezoluție (ex. Nikon D800)"
      }
    ],
    "faq": [
      {
        "q": "Ce dimensiuni de print se potrivesc cu un raport 3:2?",
        "a": "Dimensiunile standard de print 3:2 includ 4×6 inchi, 6×9 inchi, 8×12 inchi, 12×18 inchi și 20×30 inchi. Aceste dimensiuni de print vor afișa imaginea completă fără decupare."
      },
      {
        "q": "Ce este raportul 3:2 în pixeli?",
        "a": "Orice rezoluție unde lățime ÷ înălțime = 1.5 este un raport 3:2. Exemple comune: 3000×2000, 4500×3000, 6000×4000. Majoritatea camerelor DSLR captează imagini nativ la 3:2."
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
    "title": "Raport de aspect 21:9 — Dimensiuni Monitor Ultrawide și Calculator",
    "description": "Raportul de aspect ultrawide 21:9: rezoluții comune (2560×1080, 3440×1440, 5120×2160), utilizări în gaming și cinema, și un calculator gratuit.",
    "explanation": "21:9 (uneori numit ultrawide) oferă un câmp vizual mult mai larg decât monitoarele standard 16:9. Este popular pentru gaming (eliminând necesitatea mai multor monitoare), producția video cinematică și fluxurile de lucru de productivitate. Multe filme cinematice filmate în 2.35:1 sau 2.39:1 apar aproape de 21:9 atunci când sunt afișate pe un ecran ultrawide.",
    "useCases": [
      "Monitoare de gaming ultrawide",
      "Stații de lucru pentru editare video și color grading",
      "Productivitate multi-aplicație",
      "Vizualizare filme cinematice (letterboxing minim)",
      "Simulatoare de zbor și jocuri de curse"
    ],
    "dimensions": [
      {
        "name": "FHD Ultrawide",
        "width": 2560,
        "height": 1080,
        "use": "Gaming ultrawide de intrare, monitoare economice"
      },
      {
        "name": "QHD Ultrawide",
        "width": 3440,
        "height": 1440,
        "use": "Ultrawide premium standard"
      },
      {
        "name": "5K Ultrawide",
        "width": 5120,
        "height": 2160,
        "use": "Stație de lucru profesională, LG 34WK95U"
      }
    ],
    "faq": [
      {
        "q": "Este 21:9 chiar 21 la 9?",
        "a": "Nu exact — numele '21:9' este o etichetă de marketing. Majoritatea monitoarelor ultrawide au un raport mai apropiat de 64:27 (2.370:1) sau 43:18 (2.388:1). Raportul real depinde de rezoluția specifică (ex. 3440×1440 = 43:18)."
      },
      {
        "q": "Toate jocurile suportă 21:9?",
        "a": "Multe jocuri moderne suportă nativ ultrawide 21:9. Unele titluri mai vechi sau anumite jocuri multiplayer restricționează câmpul vizual la 16:9 pentru a preveni avantaje competitive. Verificați setările jocului sau site-urile comunității pentru starea suportului ultrawide."
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
    "title": "Raport de aspect 2:1 — Dimensiuni Panoramice și Banner",
    "description": "Raportul de aspect 2:1: utilizări pentru fotografia panoramică, bannere web și anteturi Twitter/X, cu un calculator gratuit.",
    "explanation": "2:1 este un raport panoramic larg unde lățimea este exact de două ori înălțimea. Este utilizat pentru fotografia panoramică de peisaj, bannerele hero ale paginilor web și anumite anteturi de rețele sociale. Se situează între widescreen 16:9 și rapoartele cinematice adevărate.",
    "useCases": [
      "Fotografie panoramică de peisaj",
      "Bannere hero și anteturi de site web",
      "Decupare foto 360°",
      "Anteturi de newsletter prin email",
      "Semnalizare digitală"
    ],
    "dimensions": [
      {
        "name": "Web Banner",
        "width": 1200,
        "height": 600,
        "use": "Banner web standard, imagine OG"
      },
      {
        "name": "HD Banner",
        "width": 2000,
        "height": 1000,
        "use": "Imagine hero web de înaltă rezoluție"
      },
      {
        "name": "Panoramic",
        "width": 4000,
        "height": 2000,
        "use": "Fotografie panoramică"
      }
    ],
    "faq": [
      {
        "q": "Care este diferența dintre 2:1 și 16:9?",
        "a": "Un raport 2:1 (2.0:1) este mai lat decât 16:9 (1.78:1). O imagine 2:1 este mai panoramică — de exemplu, 2000×1000 pixeli versus 1920×1080 la 16:9. 2:1 are mai mult spațiu orizontal în raport cu înălțimea sa."
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
    "title": "Raport de aspect 5:4 — Dimensiuni pentru Print și Monitor",
    "description": "Raportul de aspect 5:4: printuri 8×10, camere de format mediu și monitoare vechi 1280×1024. Calculator gratuit inclus.",
    "explanation": "5:4 este puțin mai înalt decât raportul standard 4:3. Se potrivește cu dimensiunea de print 8×10 inchi utilizată în studiourile de fotografie portret și corespunde rezoluției 1280×1024 comună pe monitoarele CRT mai vechi și primele monitoare LCD.",
    "useCases": [
      "Printuri portret 8×10 inchi",
      "Printuri foto 10×8 inchi",
      "Conținut pentru monitoare vechi 1280×1024",
      "Fotografie de format mediu",
      "Fotografie portret de studio"
    ],
    "dimensions": [
      {
        "name": "SXGA",
        "width": 1280,
        "height": 1024,
        "use": "Monitoare și proiectoare vechi"
      },
      {
        "name": "Print 8×10",
        "width": 2400,
        "height": 3000,
        "use": "Print 8×10 inchi la 300 DPI"
      },
      {
        "name": "Print 16×20",
        "width": 4800,
        "height": 6000,
        "use": "Print 16×20 inchi la 300 DPI"
      }
    ],
    "faq": [
      {
        "q": "Ce pixeli se potrivesc cu raportul 5:4?",
        "a": "Dimensiunile comune de pixeli 5:4 includ 1280×1024, 2560×2048 și orice pereche de dimensiuni unde lățime ÷ înălțime = 1.25. Un print 8×10 scanat la 300 DPI produce 2400×3000 pixeli (în orientare portret, 3:2.4 = 5:4)."
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
    "title": "Dimensiuni și Rapoarte de Aspect Imagini Instagram 2026 — Ghid Complet",
    "description": "Toate dimensiunile de imagini și videoclipuri Instagram pentru 2026: postări în feed, Stories, Reels, poze de profil și multe altele. Dimensiuni exacte în pixeli și rapoarte de aspect.",
    "intro": "Instagram suportă multiple rapoarte de aspect în funcție de locul unde apare conținutul tău. Folosirea dimensiunilor corecte asigură că imaginile tale sunt afișate clar, fără decupări nedorite. Iată toate dimensiunile oficiale recomandate pentru 2026.",
    "formats": [
      {
        "type": "Postare în Feed — Pătrat",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Format clasic; sigur pentru toate dispozitivele"
      },
      {
        "type": "Postare în Feed — Portret (înălțime maximă)",
        "width": 1080,
        "height": 1350,
        "ratio": "4:5",
        "notes": "Ocupă cel mai mult spațiu în feed; recomandat pentru vizibilitate maximă"
      },
      {
        "type": "Postare în Feed — Peisaj",
        "width": 1080,
        "height": 566,
        "ratio": "1.91:1",
        "notes": "Imagine lată; mai puțin spațiu în feed decât portretul"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vertical pe tot ecranul; maxim 15 secunde pentru fotografii"
      },
      {
        "type": "Reel",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Videoclipul trebuie să aibă minim 3 secunde; maxim 90 de secunde"
      },
      {
        "type": "Poză de Profil",
        "width": 320,
        "height": 320,
        "ratio": "1:1",
        "notes": "Afișată ca un cerc; păstrează conținutul cheie centrat"
      },
      {
        "type": "Postare Carusel",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Fiecare card ar trebui să aibă aceleași dimensiuni"
      }
    ],
    "tips": [
      "Folosește 4:5 (1080×1350) pentru postările din feed pentru a maximiza spațiul vertical la derulare",
      "Păstrează conținutul important în centrul a 80% din Stories pentru a evita suprapunerile de interfață",
      "Exportează la lățime completă de 1080px — Instagram va comprima oricum orice este mai mare",
      "Folosește PNG pentru grafică și ilustrații; JPEG la calitate 80–90% pentru fotografii",
      "Evită textul mic lângă margini — ar putea fi decupat pe dispozitive mai vechi"
    ],
    "faq": [
      {
        "q": "Care este cea mai bună dimensiune de postare Instagram în 2026?",
        "a": "Pentru vizibilitate maximă în feed, folosește 1080×1350 pixeli (raport 4:5 — portret). Acesta este cel mai înalt format pe care Instagram îl permite pentru postările din feed și ocupă cel mai mult spațiu pe ecran pe măsură ce utilizatorii derulează."
      },
      {
        "q": "Pot posta un videoclip 16:9 pe Instagram?",
        "a": "Da, dar Instagram va decupa videoclipurile 16:9 pentru a se potrivi în feed (la 1:1 sau 4:5). Pentru Reels și Stories, videoclipurile 16:9 vor afișa bare negre (letterboxing) sus și jos. Filmați întotdeauna vertical (9:16) pentru Reels și Stories."
      },
      {
        "q": "Ce dimensiune ar trebui să aibă textul din Instagram Story?",
        "a": "Păstrează tot textul și elementele vizuale cheie în zona sigură: aproximativ 1080×1420 pixeli centrați în cadrul de 1080×1920. Partea superioară de 250px și partea inferioară de 250px sunt de obicei acoperite de elemente de interfață, cum ar fi numele de utilizator și bara de răspuns."
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
    "title": "Dimensiuni și Rapoarte de Aspect Videoclipuri YouTube 2026 — Ghid Complet",
    "description": "Toate dimensiunile de imagini și videoclipuri YouTube pentru 2026: videoclipuri, Shorts, miniaturi, bannere de canal și fotografii de profil. Dimensiuni exacte în pixeli și rapoarte.",
    "intro": "YouTube este în primul rând o platformă 16:9, dar Shorts folosește videoclipuri verticale 9:16. Alegerea dimensiunilor corecte îmbunătățește rata de clic a miniaturilor tale și asigură că conținutul tău arată clar pe toate dispozitivele.",
    "formats": [
      {
        "type": "Videoclip (HD Standard)",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Recomandat pentru majoritatea încărcărilor (1080p)"
      },
      {
        "type": "Videoclip (4K)",
        "width": 3840,
        "height": 2160,
        "ratio": "16:9",
        "notes": "Calitate maximă; necesită înregistrare 4K"
      },
      {
        "type": "Shorts",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Videoclip vertical; maxim 60 de secunde"
      },
      {
        "type": "Miniatură",
        "width": 1280,
        "height": 720,
        "ratio": "16:9",
        "notes": "Miniatură personalizată; dimensiune maximă fișier 2MB"
      },
      {
        "type": "Banner Canal (Desktop)",
        "width": 2560,
        "height": 1440,
        "ratio": "16:9",
        "notes": "Banner complet; doar centrul de 1546×423px este afișat pe toate dispozitivele"
      },
      {
        "type": "Poză de Profil",
        "width": 800,
        "height": 800,
        "ratio": "1:1",
        "notes": "Afișată ca un cerc; minim 98×98px"
      }
    ],
    "tips": [
      "Creează miniaturi la 1280×720 cu text îngroșat și culori cu contrast ridicat pentru un CTR mai bun",
      "Păstrează zona sigură a bannerului de canal la 1546×423 pixeli pentru a te asigura că este afișat pe toate dispozitivele",
      "Încarcă videoclipuri la cea mai înaltă rezoluție posibilă — YouTube transcodează în jos, nu în sus",
      "Pentru Shorts, folosește 1080×1920 (9:16) și asigură-te că niciun conținut esențial nu se află în partea superioară sau inferioară a 10%",
      "Fișierul miniaturii trebuie să fie sub 2MB — folosește JPEG pentru fotografii, PNG pentru grafică"
    ],
    "faq": [
      {
        "q": "Ce rezoluție este cea mai bună pentru videoclipurile YouTube?",
        "a": "1920×1080 (1080p Full HD) este rezoluția standard și recomandată pentru încărcările pe YouTube. Oferă videoclipuri clare pe majoritatea ecranelor fără a necesita echipament de înregistrare 4K."
      },
      {
        "q": "Ce dimensiune ar trebui să aibă o miniatură YouTube?",
        "a": "YouTube recomandă 1280×720 pixeli (raport 16:9) pentru miniaturi personalizate. Dimensiunea maximă a fișierului este 2MB. Folosește JPEG pentru fotografii sau PNG pentru grafică proiectată."
      },
      {
        "q": "Care este rezoluția YouTube Shorts?",
        "a": "YouTube Shorts folosește un raport vertical 9:16, cu rezoluția recomandată de 1080×1920 pixeli. Lungimea maximă pentru Shorts este de 60 de secunde."
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
    "title": "Dimensiuni și Rapoarte de Aspect Videoclipuri TikTok 2026 — Ghid Complet",
    "description": "Dimensiuni și rapoarte de aspect videoclipuri TikTok pentru 2026: cea mai bună rezoluție pentru videoclipuri TikTok, fotografii de profil și imagini de copertă.",
    "intro": "TikTok este o platformă video verticală, axată pe mobil. Tot conținutul ar trebui să fie conceput pentru orientarea portret 9:16. Iată specificațiile pentru a te asigura că conținutul tău arată cel mai bine.",
    "formats": [
      {
        "type": "Videoclip (Recomandat)",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Full HD vertical — folosește întotdeauna acest format"
      },
      {
        "type": "Videoclip (Minim)",
        "width": 720,
        "height": 1280,
        "ratio": "9:16",
        "notes": "Minim pentru o calitate acceptabilă"
      },
      {
        "type": "Poză de Profil",
        "width": 200,
        "height": 200,
        "ratio": "1:1",
        "notes": "Afișată ca un cerc"
      },
      {
        "type": "Imagine de Copertă",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Extrasă automat din videoclip; poate fi personalizată"
      }
    ],
    "tips": [
      "Înregistrează și încarcă întotdeauna la 1080×1920 (9:16) pentru cea mai bună calitate de afișare",
      "Păstrează conținutul cheie în centrul cadrului — partea inferioară de 20% este acoperită de subtitrări și interfață",
      "TikTok suportă formate .mp4 și .mov; codec-ul H.264 este recomandat",
      "Folosește instrumentul de suprapunere text TikTok cu moderație — acesta se află deasupra conținutului tău",
      "Iluminarea puternică și elementele vizuale cu contrast ridicat au o performanță mai bună în algoritm"
    ],
    "faq": [
      {
        "q": "Care este cea mai bună rezoluție video pentru TikTok?",
        "a": "TikTok recomandă 1080×1920 pixeli (raport 9:16, Full HD vertical). Utilizarea acestei rezoluții asigură că videoclipul tău este afișat fără bare negre sau letterboxing pe niciun dispozitiv."
      },
      {
        "q": "Pot încărca un videoclip orizontal (16:9) pe TikTok?",
        "a": "Da, TikTok acceptă videoclipuri orizontale, dar acestea vor fi afișate cu bare negre sus și jos (letterboxed). Pentru cea mai bună experiență de vizionare și performanță a algoritmului, folosește întotdeauna videoclipuri verticale (9:16)."
      },
      {
        "q": "Care este lungimea maximă a unui videoclip TikTok?",
        "a": "Începând cu 2026, TikTok permite videoclipuri de până la 10 minute pentru conturile standard. Videoclipurile mai scurte (15–60 de secunde) au de obicei o performanță mai bună în algoritmul de recomandare."
      }
    ],
    "relatedRatios": [
      "9-16",
      "1-1"
    ]
  },
  "twitter": {
    "name": "X / Twitter",
    "title": "Dimensiuni și Rapoarte de Aspect Imagini X (Twitter) 2026 — Ghid Complet",
    "description": "Toate dimensiunile de imagini X (Twitter) pentru 2026: imagini de postare, bannere de antet, fotografii de profil și dimensiuni video. Specificații exacte în pixeli.",
    "intro": "X (fostul Twitter) suportă o gamă de formate și dimensiuni de imagini. Imaginile din postări sunt decupate automat în vizualizarea cronologiei, dar sunt afișate integral la atingere. Iată toate dimensiunile recomandate.",
    "formats": [
      {
        "type": "Imagine Postare (Peisaj)",
        "width": 1600,
        "height": 900,
        "ratio": "16:9",
        "notes": "Recomandat pentru majoritatea imaginilor de postare"
      },
      {
        "type": "Imagine Postare (Pătrat)",
        "width": 1200,
        "height": 1200,
        "ratio": "1:1",
        "notes": "Sigur pentru toate contextele de afișare"
      },
      {
        "type": "Imagine Postare (Portret)",
        "width": 900,
        "height": 1350,
        "ratio": "2:3",
        "notes": "Raport portret maxim suportat"
      },
      {
        "type": "Poză de Profil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Afișată ca un cerc; minim recomandat 400×400"
      },
      {
        "type": "Antet / Banner",
        "width": 1500,
        "height": 500,
        "ratio": "3:1",
        "notes": "Partea superioară a paginii de profil; evită marginile — decupat pe mobil"
      },
      {
        "type": "Videoclip",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Durată maximă 2:20; limită dimensiune fișier 512MB"
      }
    ],
    "tips": [
      "Folosește 1600×900 pentru imaginile de postare peisaj — se afișează fără decupare în cronologie",
      "Păstrează centrul de 60% al bannerului de antet sigur pentru toate dispozitivele",
      "Pozele de profil sunt afișate ca cercuri — folosește un subiect centrat fără conținut important lângă margini",
      "X comprimă imaginile — exportă la calitate 100% JPEG pentru a minimiza compresia vizibilă",
      "Pentru cardurile Twitter (previzualizări de linkuri), folosește un raport 2:1 (ex. 1200×628) pentru formatul de card mare"
    ],
    "faq": [
      {
        "q": "Care este cea mai bună dimensiune de imagine pentru o postare X (Twitter)?",
        "a": "1600×900 pixeli (16:9) este dimensiunea recomandată pentru imaginile de postare X. Se afișează fără decupare în cronologie. Pătratul (1200×1200) este, de asemenea, sigur și arată bine în toate contextele."
      },
      {
        "q": "Ce dimensiune are bannerul de antet X (Twitter)?",
        "a": "Dimensiunea recomandată pentru antetul X este 1500×500 pixeli (raport 3:1). Reține că bannerul este decupat diferit pe desktop față de mobil — păstrează conținutul important în zona centrală."
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
    "title": "Dimensiuni și Rapoarte de Aspect Imagini LinkedIn 2026 — Ghid Complet",
    "description": "Dimensiuni imagini LinkedIn pentru 2026: imagini de postare, bannere de companie, fotografii de profil și imagini de copertă. Dimensiuni exacte în pixeli pentru conținut profesional.",
    "intro": "LinkedIn este o rețea profesională unde calitatea imaginii contează pentru credibilitate. Iată dimensiunile de imagini recomandate pentru a te asigura că profilul și postările tale arată impecabil.",
    "formats": [
      {
        "type": "Imagine Postare (Peisaj)",
        "width": 1200,
        "height": 628,
        "ratio": "1.91:1",
        "notes": "Imagine standard de postare LinkedIn"
      },
      {
        "type": "Imagine Postare (Pătrat)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Postările pătrate au o performanță bună pe LinkedIn"
      },
      {
        "type": "Poză de Profil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Minim 200×200; folosește o fotografie profesională de tip portret"
      },
      {
        "type": "Banner Personal",
        "width": 1584,
        "height": 396,
        "ratio": "4:1",
        "notes": "Afișat în spatele pozei de profil"
      },
      {
        "type": "Logo Companie",
        "width": 300,
        "height": 300,
        "ratio": "1:1",
        "notes": "Logo pătrat pentru pagina companiei"
      },
      {
        "type": "Banner Companie",
        "width": 1128,
        "height": 191,
        "ratio": "5.9:1",
        "notes": "Banner foarte lat; păstrează textul centrat"
      }
    ],
    "tips": [
      "Folosește 1200×628 pentru imaginile de previzualizare a linkurilor (format card LinkedIn)",
      "Fotografia de profil ar trebui să-ți arate clar fața — LinkedIn este un context profesional",
      "Bannerul personal poate prezenta munca, setul de abilități sau brandul tău — folosește 1584×396",
      "Postările de companie cu imagini obțin un angajament semnificativ mai mare decât postările doar cu text",
      "Exportează fotografiile de profil ca JPEG sau PNG; dimensiunea maximă a fișierului este 8MB"
    ],
    "faq": [
      {
        "q": "Care este cea mai bună dimensiune de imagine pentru o postare LinkedIn?",
        "a": "1200×628 pixeli (raport 1.91:1) este dimensiunea recomandată de LinkedIn pentru imaginile de postare. Imaginile pătrate (1080×1080) funcționează, de asemenea, bine și pot fi afișate mai bine în feed-ul mobil."
      },
      {
        "q": "Ce dimensiune are bannerul de profil LinkedIn?",
        "a": "Bannerul personal LinkedIn (fotografia de fundal) ar trebui să aibă 1584×396 pixeli (raport 4:1). Aceasta este dimensiunea care se afișează în spatele pozei tale de profil pe desktop și mobil."
      }
    ],
    "relatedRatios": [
      "1-1",
      "16-9"
    ]
  },
  "facebook": {
    "name": "Facebook",
    "title": "Dimensiuni și Rapoarte de Aspect Imagini Facebook 2026 — Ghid Complet",
    "description": "Dimensiuni imagini Facebook pentru 2026: imagini de postare, fotografii de copertă, Stories, poze de profil și multe altele. Specificații exacte în pixeli.",
    "intro": "Facebook suportă multe formate de imagini, iar specificațiile variază în funcție de plasare. Iată dimensiunile recomandate pentru 2026 pentru a te asigura că conținutul tău arată cel mai bine.",
    "formats": [
      {
        "type": "Imagine Postare",
        "width": 1200,
        "height": 630,
        "ratio": "1.91:1",
        "notes": "Imagine standard de feed; folosită și pentru previzualizări de linkuri"
      },
      {
        "type": "Imagine Postare (Pătrat)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Sigur atât pentru feed-urile desktop, cât și pentru cele mobile"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vertical pe tot ecranul; durată de 24 de ore"
      },
      {
        "type": "Poză de Profil",
        "width": 180,
        "height": 180,
        "ratio": "1:1",
        "notes": "Afișată la 170×170 pe desktop; decupare cerc"
      },
      {
        "type": "Fotografie de Copertă",
        "width": 820,
        "height": 312,
        "ratio": "2.63:1",
        "notes": "Afișată la 820×312 pe desktop, 640×360 pe mobil"
      },
      {
        "type": "Copertă Eveniment",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Imagine de antet a paginii de eveniment"
      }
    ],
    "tips": [
      "Creează fotografii de copertă cu conținutul cheie în centru — decuparea diferă pe mobil față de desktop",
      "Pentru postările cu linkuri, folosește o imagine de 1200×630 pentru a declanșa cardul mare de previzualizare al Facebook",
      "Încarcă fotografii la cea mai înaltă rezoluție posibilă — Facebook le va comprima",
      "Pozele de profil sunt afișate ca cercuri — păstrează fețele sau logo-urile centrate",
      "Zona sigură pentru Stories: păstrează conținutul la 250px de marginile superioare și inferioare"
    ],
    "faq": [
      {
        "q": "Care este cea mai bună dimensiune de imagine pentru o postare Facebook?",
        "a": "1200×630 pixeli (raport 1.91:1) este dimensiunea recomandată pentru postările Facebook. Aceasta funcționează și pentru imaginile de previzualizare a linkurilor. Pătratul (1080×1080) este o alternativă sigură care arată consistent în toate plasările."
      },
      {
        "q": "Care este dimensiunea fotografiei de copertă Facebook?",
        "a": "Dimensiunea recomandată pentru fotografia de copertă Facebook este 820×312 pixeli pentru desktop. Pe mobil, se afișează ca 640×360. Pentru a evita decuparea, păstrează conținutul important în zona centrală de 640×312."
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
    "title": "Dimensiuni și Rapoarte de Aspect Pinuri Pinterest 2026 — Ghid Complet",
    "description": "Dimensiuni imagini Pinterest pentru 2026: pinuri standard, pinuri de idee, pinuri pătrate și fotografii de profil. Obține raportul de aspect corect pentru o acoperire maximă.",
    "intro": "Pinterest este o platformă de descoperire vizuală unde imaginile mai înalte (raport 2:3) au cea mai bună performanță — ocupă mai mult spațiu în feed. Iată dimensiunile recomandate pentru toate tipurile de conținut Pinterest.",
    "formats": [
      {
        "type": "Pin Standard (Portret)",
        "width": 1000,
        "height": 1500,
        "ratio": "2:3",
        "notes": "Recomandat — cea mai bună acoperire și angajament"
      },
      {
        "type": "Pin Pătrat",
        "width": 1000,
        "height": 1000,
        "ratio": "1:1",
        "notes": "Funcționează bine; mai puțin spațiu vertical decât portretul"
      },
      {
        "type": "Pin Înalt",
        "width": 1000,
        "height": 2100,
        "ratio": "1:2.1",
        "notes": "Înălțime maximă; folosește cu atenție — poate fi decupat"
      },
      {
        "type": "Pin de Idee",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Format poveste multi-pagină; vertical pe tot ecranul"
      },
      {
        "type": "Poză de Profil",
        "width": 165,
        "height": 165,
        "ratio": "1:1",
        "notes": "Decupare cerc; păstrează subiectul centrat"
      }
    ],
    "tips": [
      "Folosește 1000×1500 (2:3) pentru pinurile standard — este punctul optim pentru vizibilitatea în feed",
      "Evită să depășești raportul 1:2.1 în înălțime — Pinterest poate decupa imaginile prea înalte",
      "Adaugă un text suprapus în partea superioară-mijlocie a pinului — evită cei 100px de jos unde este afișat domeniul sursă",
      "Salvează pinurile în JPEG pentru fotografii (max 20MB) sau PNG pentru grafică cu transparență",
      "Pinurile de Idee (9:16) funcționează diferit față de pinurile standard — sunt mai mult ca Stories"
    ],
    "faq": [
      {
        "q": "Care este cea mai bună dimensiune de pin Pinterest?",
        "a": "Dimensiunea recomandată pentru pinurile Pinterest este 1000×1500 pixeli (raport 2:3). Acest format portret ocupă mai mult spațiu vertical în feed, crescând vizibilitatea și rata de clic."
      },
      {
        "q": "Pot folosi o imagine pătrată pe Pinterest?",
        "a": "Da, pinurile pătrate 1:1 (ex. 1000×1000) sunt suportate. Totuși, pinurile portret (2:3) au de obicei o performanță mai bună, deoarece ocupă mai mult spațiu pe ecran în feed-ul de tip mozaic."
      },
      {
        "q": "Ce este un Pin de Idee Pinterest?",
        "a": "Pinurile de Idee (anterior Story Pins) sunt conținut vertical multi-pagină, pe tot ecranul (9:16, 1080×1920). Acestea nu se leagă de site-uri externe și sunt concepute pentru conținut nativ în cadrul Pinterest."
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
    "title": "Ce este Raportul de Aspect? Un Ghid pentru Începători",
    "description": "O explicație clară, prietenoasă pentru începători, a raportului de aspect: ce înseamnă, cum se scrie, de ce este important pentru ecrane și imagini și cum să-l folosești.",
    "intro": "Raportul de aspect este unul dintre acei termeni care sună tehnic, dar este de fapt destul de simplu odată ce îl înțelegi. Indiferent dacă redimensionezi o fotografie pentru Instagram, configurezi un videoclip YouTube sau cumperi un monitor nou, raportul de aspect determină forma imaginii sau a ecranului tău. Acest ghid explică tot ce trebuie să știi.",
    "sections": [
      {
        "heading": "Ce Înseamnă Raportul de Aspect?",
        "body": "Raportul de aspect este relația proporțională dintre lățimea și înălțimea unei imagini, a unui ecran sau a unui cadru video. Se scrie ca două numere separate prin două puncte, ca în 16:9 sau 4:3. Primul număr este lățimea, iar al doilea este înălțimea. Un raport 16:9 înseamnă că pentru fiecare 16 unități de lățime, înălțimea este de 9 unități. Dimensiunea reală nu contează. O imagine de 160×90 pixel și o imagine de 3840×2160 pixel sunt ambele 16:9 deoarece împărtășesc aceleași proporții."
      },
      {
        "heading": "De Ce Contează Raportul de Aspect?",
        "body": "Raportul de aspect contează ori de câte ori afișezi, printezi sau partajezi conținut vizual. Dacă raportul imaginii tale nu se potrivește cu raportul afișajului sau al containerului, se întâmplă unul dintre următoarele două lucruri:",
        "list": [
          "Letterboxing / Pillarboxing: apar bare negre pentru a umple spațiul gol",
          "Decupare (Cropping): imaginea este tăiată pentru a se potrivi, iar o parte din conținut se pierde",
          "Întindere (Stretching): imaginea este distorsionată pentru a umple cadrul (cel mai puțin de dorit)"
        ]
      },
      {
        "heading": "Raporturi de Aspect Comune și Unde Sunt Utilizate",
        "body": "Diferite industrii și platforme au standardizat diferite raporturi de aspect. Iată cele mai importante pe care trebuie să le știi:",
        "table": {
          "headers": [
            "Raport",
            "Zecimal",
            "Utilizare Comună"
          ],
          "rows": [
            [
              "16:9",
              "1.78:1",
              "YouTube, Netflix, TV, monitoare, prezentări"
            ],
            [
              "9:16",
              "0.56:1",
              "TikTok, Instagram Reels, YouTube Shorts, Stories"
            ],
            [
              "1:1",
              "1.00:1",
              "Postări Instagram feed, poze de profil, coperți de album"
            ],
            [
              "4:5",
              "0.80:1",
              "Postări portret Instagram (înălțime maximă feed)"
            ],
            [
              "4:3",
              "1.33:1",
              "iPads, TV vechi, PowerPoint, camere DSLR"
            ],
            [
              "3:2",
              "1.50:1",
              "Camere DSLR, printuri 4×6, film de 35mm"
            ],
            [
              "2.39:1",
              "2.39:1",
              "Filme cinematografice cinemascope"
            ]
          ]
        }
      },
      {
        "heading": "Cum să Calculezi un Raport de Aspect",
        "body": "Pentru a găsi raportul de aspect al oricărei imagini, împarte atât lățimea, cât și înălțimea la Cel Mai Mare Divizor Comun (CMDC). De exemplu, o imagine de 1920×1080 pixels: ambele numere sunt divizibile cu 120, rezultând 16:9. Calculatorul nostru gratuit face acest lucru automat — trebuie doar să introduci lățimea și înălțimea."
      },
      {
        "heading": "Raport de Aspect vs. Rezoluție",
        "body": "Raportul de aspect și rezoluția sunt înrudite, dar nu sunt același lucru. Rezoluția se referă la numărul total de pixeli (de exemplu, 1920×1080). Raportul de aspect se referă la formă (de exemplu, 16:9). Două imagini pot avea același raport de aspect, dar rezoluții complet diferite: 640×360 și 3840×2160 sunt ambele 16:9, dar diferă enorm în ceea ce privește numărul de pixeli și calitate."
      }
    ],
    "conclusion": "Întregul subiect se reduce la un singur obicei: decide forma înainte de a decide dimensiunea. Raportul mai întâi, pixelii pe locul doi. Respectă această ordine și restul (decuparea, letterboxing-ul, barele negre, încărcarea neclară) în mare parte nu se va mai întâmpla de la sine."
  },
  "how-to-calculate-aspect-ratio": {
    "title": "Cum să Calculezi Raportul de Aspect: Ghidul Complet",
    "description": "Învață cum să calculezi raportul de aspect pas cu pas: folosind metoda GCD, formula și calculatorul nostru online gratuit. Include exemple rezolvate.",
    "intro": "A ști cum să calculezi un raport de aspect este o abilitate fundamentală pentru oricine lucrează cu imagini, video sau design. Acest ghid acoperă matematica din spatele său, cele mai rapide metode manuale și cum să folosești calculatorul nostru gratuit pentru rezultate instantanee.",
    "sections": [
      {
        "heading": "Formula Raportului de Aspect",
        "body": "Raportul de aspect al oricărui dreptunghi este pur și simplu: Lățime ÷ Înălțime. Pentru a-l exprima ca un raport curat L:Î (de exemplu, 16:9 în loc de 1.778:1), trebuie să găsești Cel Mai Mare Divizor Comun (GCD) al lățimii și înălțimii și să le împarți pe ambele la acesta."
      },
      {
        "heading": "Pas cu Pas: Cum să Găsești Raportul de Aspect",
        "body": "Iată cum să calculezi manual raportul de aspect al oricărei imagini:",
        "list": [
          "Pasul 1: Notează lățimea și înălțimea în pixeli (de exemplu, 1920 și 1080)",
          "Pasul 2: Găsește Cel Mai Mare Divizor Comun (GCD) al ambelor numere. Pentru 1920 și 1080, GCD este 120.",
          "Pasul 3: Împarte ambele numere la GCD. 1920 ÷ 120 = 16; 1080 ÷ 120 = 9.",
          "Pasul 4: Scrie rezultatul ca L:Î — în acest caz, 16:9."
        ]
      },
      {
        "heading": "Exemple Rezolvate",
        "body": "Iată câteva dimensiuni comune și rapoartele lor de aspect:",
        "table": {
          "headers": [
            "Lățime",
            "Înălțime",
            "GCD",
            "Raport de Aspect"
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
        "heading": "Cum să Găsești GCD Fără Calculator",
        "body": "Fiecare metodă de mai sus depinde de găsirea Celui Mai Mare Divizor Comun, iar acesta este pasul pe care majoritatea ghidurilor îl omit. Metoda fiabilă este algoritmul lui Euclid, care are peste două mii de ani și necesită aproximativ patru pași pentru numere de dimensiunea ecranului: împarte numărul mai mare la cel mai mic, păstrează restul, apoi repetă cu numărul mai mic și acel rest până când restul este zero. Ultimul număr non-zero este GCD. Pentru 1920 și 1080: 1920 ÷ 1080 lasă 840; 1080 ÷ 840 lasă 240; 840 ÷ 240 lasă 120; 240 ÷ 120 lasă 0. GCD este 120."
      },
      {
        "heading": "Când Numerele Refuză să se Simplifice",
        "body": "Nu orice pereche de dimensiuni oferă un raport ordonat. 1847 × 923 are un GCD de 1, deci raportul său „simplificat” este 1847:923 — tehnic corect și inutil. Când se întâmplă asta, nu mai încerca să simplifici și fă două lucruri în schimb: ia valoarea zecimală (1847 ÷ 923 = 2.001, deci este în esență 2:1) și găsește cel mai apropiat raport standard la care poți lucra efectiv. Ecranele și platformele acceptă rapoarte standard, nu exacte, iar o diferență sub aproximativ jumătate de procent este invizibilă."
      },
      {
        "heading": "De Ce 1200 × 630 Nu Este 1.91:1",
        "body": "Dimensiunea imaginii Open Graph pe care o solicită fiecare platformă socială este 1200 × 630 și este aproape întotdeauna descrisă ca 1.91:1. Rulează GCD și vei obține 40:21, a cărui valoare zecimală este 1.9048. Cifra 1.91 este o etichetă rotunjită care a rămas, nu raportul real. Acest lucru contează atunci când scalezi: calcularea unei noi lățimi de la 1.91 în loc de 40:21 deviază cu aproximativ un pixel la o lățime de 1200px și cu patru la 4800px. Scalează întotdeauna de la raportul întreg și rotunjește o singură dată la final."
      },
      {
        "heading": "Cum să Calculezi o Dimensiune Lipsă",
        "body": "Dacă știi dimensiunile originale și vrei să găsești o nouă dimensiune la același raport, folosește această formulă: Înălțime Nouă = (Înălțime Originală ÷ Lățime Originală) × Lățime Nouă. De exemplu, pentru a găsi înălțimea unei imagini 16:9 la o lățime de 1280px: (1080 ÷ 1920) × 1280 = 720px. Calculatorul nostru face acest lucru automat în ambele direcții."
      },
      {
        "heading": "Cea Mai Rapidă Metodă: Folosește un Calculator",
        "body": "Calcularea manuală a rapoartelor de aspect este simplă pentru numere rotunde, dar devine rapid plictisitoare pentru dimensiuni neregulate precum 1847×923. Calculatorul nostru gratuit de Raport de Aspect gestionează instantaneu orice lățime și înălțime. Introdu valorile tale și obține raportul simplificat, valoarea zecimală, cea mai apropiată potrivire standard și valorile CSS într-un singur clic."
      }
    ],
    "conclusion": "Două reguli acoperă aproape fiecare caz. Simplifică cu GCD atunci când numerele permit, și revino la valoarea zecimală plus cel mai apropiat raport standard atunci când nu permit. Păstrează raportul întreg pentru orice operație aritmetică și rotunjește doar la final. Acest singur obicei previne majoritatea erorilor de un pixel care apar ca un spațiu fin într-un layout finalizat."
  },
  "aspect-ratio-social-media-guide-2026": {
    "title": "Dimensiuni și Rapoarte de Aspect ale Imaginilor pentru Social Media: Ghid Complet 2026",
    "description": "Fiecare dimensiune și raport de aspect al imaginilor pentru social media în 2026: Instagram, YouTube, TikTok, X, LinkedIn, Facebook și Pinterest. Păstrați acest ghid salvat.",
    "intro": "Platformele de social media au fiecare propriile dimensiuni recomandate pentru imagini, iar acestea se schimbă regulat. Utilizarea unei dimensiuni greșite înseamnă că imaginile dvs. vor fi decupate, neclare sau afișate incorect. Acest ghid acoperă fiecare platformă majoră pentru 2026.",
    "sections": [
      {
        "heading": "De ce contează dimensiunile imaginilor pe Social Media",
        "body": "Fiecare platformă are un aspect diferit al feed-ului, o zonă de afișare și un algoritm de compresie. O imagine optimizată pentru o platformă poate arăta neclară, decupată sau întinsă pe alta. Încărcarea la dimensiunile exacte recomandate asigură:",
        "list": [
          "Fără decupări neașteptate ale conținutului cheie",
          "Claritate maximă — fără redimensionare în sus de către platformă",
          "Timpi de încărcare mai rapizi — dimensionarea corectă reduce dimensiunea fișierului",
          "Performanță mai bună în algoritmii de recomandare"
        ]
      },
      {
        "heading": "Dimensiuni Imagini Instagram 2026",
        "body": "Instagram suportă trei rapoarte de aspect pentru feed, plus Stories și Reels. Pentru postările din feed, formatul portret 4:5 (1080×1350) vă oferă cel mai mult spațiu vertical, ceea ce este de dorit pe o suprafață pe care oamenii o derulează.",
        "table": {
          "headers": [
            "Format",
            "Dimensiuni",
            "Raport"
          ],
          "rows": [
            [
              "Postare Feed (Pătrat)",
              "1080 × 1080",
              "1:1"
            ],
            [
              "Postare Feed (Portret)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Postare Feed (Peisaj)",
              "1080 × 566",
              "1.91:1"
            ],
            [
              "Story / Reel",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Poză de Profil",
              "320 × 320",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Dimensiuni YouTube 2026",
        "body": "YouTube este o platformă 16:9. Proiectați miniaturi la 1280×720 cu text îndrăzneț, lizibil. Miniatura dvs. este adesea factorul decisiv pentru ca cineva să dea click.",
        "table": {
          "headers": [
            "Format",
            "Dimensiuni",
            "Raport"
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
              "Miniatură",
              "1280 × 720",
              "16:9"
            ],
            [
              "Banner Canal",
              "2560 × 1440",
              "16:9"
            ]
          ]
        }
      },
      {
        "heading": "Dimensiuni Video TikTok 2026",
        "body": "TikTok este în întregime vertical — utilizați întotdeauna 9:16 la 1080×1920 pentru cea mai bună calitate. Păstrați conținutul cheie în centrul cadrului și departe de partea inferioară de 20% unde apar subtitrările și elementele UI.",
        "table": {
          "headers": [
            "Format",
            "Dimensiuni",
            "Raport"
          ],
          "rows": [
            [
              "Video (Recomandat)",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Poză de Profil",
              "200 × 200",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Referință Rapidă: Toate Platformele",
        "body": "Iată un tabel de referință rapidă pentru cele mai utilizate dimensiuni de imagini pentru social media în 2026:",
        "table": {
          "headers": [
            "Platformă",
            "Format",
            "Dimensiuni",
            "Raport"
          ],
          "rows": [
            [
              "Instagram",
              "Postare Feed (Portret)",
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
              "Miniatură",
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
              "Imagine Postare",
              "1600 × 900",
              "16:9"
            ],
            [
              "LinkedIn",
              "Imagine Postare",
              "1200 × 628",
              "1.91:1"
            ],
            [
              "Facebook",
              "Imagine Postare",
              "1200 × 630",
              "1.91:1"
            ],
            [
              "Pinterest",
              "Pin Standard",
              "1000 × 1500",
              "2:3"
            ]
          ]
        }
      },
      {
        "heading": "Dimensiunile sunt corecte și totuși încadrarea este greșită",
        "body": "Încărcarea la 1080 × 1920 nu înseamnă că totul este vizibil. Fiecare format vertical suprapune elemente de interfață peste imaginea dvs.: un rând de profil și o descriere în partea de jos, o bară de progres și un buton de închidere în partea de sus, iar pe Reels și TikTok o coloană de butoane pe o parte. Imaginea este full-bleed; zona utilizabilă nu este. O marjă practică de lucru este să păstrați orice trebuie citit (text, fețe, logo-uri, prețuri) în interiorul celor 70% din mijloc pe verticală și departe de marginea inferioară, apoi să previzualizați pe un telefon înainte de publicare. Zona sigură nu este publicată ca specificație și se mișcă, așa că tratați-o ca o marjă, nu ca o măsurătoare."
      },
      {
        "heading": "Încărcați mai mare decât numărul din tabel",
        "body": "Fiecare platformă re-comprimă ceea ce trimiteți și face o treabă mai bună pornind de la mai multe date. Încărcarea unui export de 1080 × 1350 dintr-un original de 1080 lățime nu oferă nimic de lucru encoderului; încărcarea unei versiuni de 2160 × 2700 a aceleiași imagini și lăsarea platformei să o redimensioneze în jos arată de obicei vizibil mai curat la aceeași dimensiune finală, în special pe text și margini fine. Excepția este atunci când o platformă publică un maxim strict. Respectați acest lucru, apoi mergeți cât mai aproape sub el posibil."
      },
      {
        "heading": "Dacă puteți crea un singur activ",
        "body": "Creați-o în format 4:5 la 1080 × 1350. Este cea mai înaltă formă pe care o acceptă feed-ul Instagram, ceea ce înseamnă că ocupă cel mai mult ecran pe suprafața care vă oferă cel mai puțin, și se decupează curat: decupați central la 1:1 pentru o plasare pătrată, sau la 1.91:1 pentru un card de link, iar subiectul rămâne acolo unde l-ați pus. Mergând invers, pornind de la un pătrat și încercând să ajungeți la 4:5, înseamnă să inventați o imagine care nu a fost niciodată fotografiată."
      },
      {
        "heading": "O Avertizare Despre Ghiduri Ca Acesta",
        "body": "Fiecare număr de aici era corect la momentul scrierii și platformele le schimbă fără anunț. Un ghid este un punct de plecare, nu o autoritate: înainte de o campanie importantă, verificați documentația de ajutor a platformei, deoarece aceasta este singura versiune care se actualizează atunci când o fac și ele. Rapoartele din ultima coloană sunt mult mai stabile decât dimensiunile în pixeli de lângă ele. 9:16 și 4:5 au supraviețuit mai multor runde de modificări ale specificațiilor, iar construirea în funcție de raport, mai degrabă decât de numărul de pixeli, este ceea ce împiedică acest tabel să devină învechit."
      }
    ],
    "conclusion": "Construiți în funcție de raport, nu de numărul de pixeli, și exportați mai mare decât ținta. Aceste două obiceiuri supraviețuiesc schimbărilor platformelor, ceea ce numerele exacte din aceste tabele nu o vor face. Păstrați orice trebuie citit bine în interiorul cadrului și verificați documentația proprie a platformei înainte de a publica orice pentru care plătiți."
  },
  "16-9-vs-4-3-aspect-ratio": {
    "title": "16:9 vs 4:3 Raport de aspect — Pe care ar trebui să-l folosești?",
    "description": "O comparație clară a rapoartelor de aspect 16:9 și 4:3: când să-l folosești pe fiecare, istoria din spatele lor, diferențele cheie și exemple de dimensiuni în pixeli.",
    "intro": "16:9 și 4:3 sunt cele două rapoarte de aspect cele mai semnificative din punct de vedere istoric în video și fotografie. Dacă ai văzut vreodată bare negre pe ecranul tău, fie pe laterale, fie sus și jos, ai întâlnit deja diferența dintre ele. Iată o comparație completă.",
    "sections": [
      {
        "heading": "Diferența Cheie",
        "body": "16:9 este mai lat și mai dreptunghiular (raport de 1.78:1), în timp ce 4:3 este mai pătrat (raport de 1.33:1). O imagine 16:9 este cu aproximativ 33% mai lată decât o imagine 4:3 de aceeași înălțime. Această diferență poate părea mică, dar este foarte vizibilă pe ecran."
      },
      {
        "heading": "Istorie: De unde provin?",
        "body": "4:3 a apărut primul, potrivindu-se formei filmului cinematografic de 35mm timpuriu, și a rămas standardul de televiziune pentru cea mai mare parte a secolului al XX-lea. 16:9 nu a fost moștenit de la nimic. A fost proiectat. Lucrând la SMPTE la începutul anilor 1980, Kerns Powers a tăiat dreptunghiuri de suprafață egală pentru fiecare raport de aspect utilizat atunci, de la televiziunea 1.33:1 la cinematograful 2.35:1, și le-a suprapus centrat unul peste altul. Fiecare dreptunghi se potrivea într-o cutie exterioară și conținea o cutie interioară, iar ambele cutii erau aproape de 1.77:1. Această cifră este aproape exact media geometrică a extremelor: rădăcina pătrată din 1.33 × 2.35 este 1.77, iar 16 ÷ 9 este 1.778. 16:9 este forma care irosește cel mai puțin ecranul, în medie, pentru tot ceea ce ar putea dori cineva să afișeze pe el."
      },
      {
        "heading": "Când să folosești 16:9",
        "body": "Folosește 16:9 când:",
        "list": [
          "Crearea de conținut video pentru YouTube, Netflix sau televiziune",
          "Realizarea de prezentări moderne (Google Slides, PowerPoint 2016 și versiunile ulterioare folosesc implicit 16:9)",
          "Proiectarea pentru monitoare și laptopuri widescreen",
          "Înregistrarea video cu un smartphone sau o cameră modernă",
          "Crearea de miniaturi YouTube"
        ]
      },
      {
        "heading": "Când să folosești 4:3",
        "body": "Folosește 4:3 când:",
        "list": [
          "Proiectarea pentru ecrane iPad (care folosesc 4:3)",
          "Crearea de prezentări pentru proiectoare mai vechi",
          "Potrivirea conținutului video vechi",
          "Imprimarea la proporții fotografice standard (unele camere)",
          "Lucrul cu înregistrări CCTV sau de supraveghere"
        ]
      },
      {
        "heading": "Comparație Dimensiune Pixeli",
        "body": "Iată rezoluții comune pentru ambele rapoarte la număr echivalent de megapixeli:",
        "table": {
          "headers": [
            "Calitate",
            "Dimensiune 16:9",
            "Dimensiune 4:3"
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
      },
      {
        "heading": "Ce costă de fapt conversia între ele",
        "body": "Ambele conversii costă exact un sfert din imagine, ceea ce este mai mult decât se așteaptă majoritatea oamenilor. Trecerea de la 16:9 la 4:3 la aceeași înălțime înseamnă decuparea lățimii de la 16 unități la 12, deci pierzi 25% din cadru, iar aceasta se face din laterale, unde subiecții filmați sunt adesea încadrați. Mergi în sens invers, de la 4:3 la 16:9 la aceeași lățime, decupează înălțimea de la 12 unități la 9: de asemenea 25%, de data aceasta din partea de sus și de jos, unde se află capetele și subtitrările. Niciuna dintre direcții nu este o redimensionare. Dacă conținutul contează, reîncadrează-l în loc să lași un instrument de decupare să aleagă."
      },
      {
        "heading": "Ce te costă barele negre",
        "body": "Afișarea conținutului 4:3 pe un ecran 16:9 îl încadrează cu bare laterale (pillarbox), iar barele nu sunt cosmetice: imaginea ocupă 12 din cele 16 unități de lățime ale ecranului, deci un sfert din afișaj nu face nimic. Un televizor 16:9 de 55 de inchi are o lățime de 47.9 inchi, deci asta înseamnă aproximativ 12 inchi de negru. Acesta este argumentul practic pentru a filma în raportul în care vei publica, mai degrabă decât să planifici să remediezi ulterior. Nu există nicio decupare care să recupereze un sfert din ecran."
      }
    ],
    "conclusion": "Filmează și proiectează în 16:9, cu excepția cazului în care ceva specific te împinge în altă direcție: un public axat pe iPad, un proiector vechi, o arhivă de potrivit. Singurul lucru de evitat este să decizi târziu: ambele conversii costă un sfert din cadru, iar ce sfert pierzi este o decizie mai bine luată printr-un vizor decât de un instrument de decupare ulterior."
  },
  "how-to-resize-image-without-losing-quality": {
    "title": "Cum să redimensionezi o imagine fără a pierde din calitate",
    "description": "Învață tehnicile de redimensionare a imaginilor fără a pierde din calitate: downscaling vs upscaling, cele mai bune formate de fișier, explicații despre DPI și recomandări de instrumente.",
    "intro": "Redimensionarea unei imagini pare simplă, dar făcută incorect, duce la fotografii neclare, pixelate sau distorsionate. Acest ghid explică când și cum poți redimensiona imagini fără o pierdere vizibilă de calitate.",
    "sections": [
      {
        "heading": "Downscaling vs. Upscaling",
        "body": "Există două direcții în care poți redimensiona o imagine, iar acestea au implicații foarte diferite asupra calității. Downscaling-ul (micșorarea unei imagini) aproape întotdeauna păstrează calitatea, deoarece pur și simplu elimini pixeli. Upscaling-ul (mărirea unei imagini) este locul unde apar probleme de calitate, deoarece software-ul trebuie să inventeze date de pixeli care nu există în original."
      },
      {
        "heading": "Regula de Aur: Începe întotdeauna cu cea mai înaltă rezoluție",
        "body": "Pierderea calității este în mare parte ireversibilă. Dacă începi cu o imagine mică și ai nevoie de una mare, vei observa întotdeauna o degradare a calității. Cea mai bună practică este să:",
        "list": [
          "Păstrează întotdeauna fișierul original de înaltă rezoluție",
          "Exportează sau salvează o copie separată la dimensiunea țintă",
          "Nu re-salva niciodată un JPEG comprimat de mai multe ori, deoarece fiecare salvare degradează calitatea",
          "Exportează din fișierul master de fiecare dată când ai nevoie de o nouă dimensiune"
        ]
      },
      {
        "heading": "Cât de mult poți Upscala?",
        "body": "Ca o regulă generală: upscaling-ul cu până la 110–120% este, în general, imperceptibil pentru majoritatea privitorilor. Upscaling-ul cu 150–200% produce o estompare vizibilă. Upscaling-ul peste 200% produce de obicei pixelare și neclaritate evidente. Instrumentele de upscaling bazate pe AI (cum ar fi Topaz Gigapixel, Adobe Firefly și similare) pot produce uneori rezultate acceptabile la upscaling de 2–4× prin generarea inteligentă de detalii."
      },
      {
        "heading": "Menținerea Raportului de Aspect la Redimensionare",
        "body": "Una dintre cele mai comune greșeli de calitate este modificarea accidentală a raportului de aspect în timpul redimensionării, întinzând sau comprimând imaginea. Redimensionează întotdeauna proporțional, blocând raportul de aspect în instrumentul tău de editare. Calculatorul nostru gratuit te ajută să găsești înălțimea țintă corectă pentru orice lățime nouă (sau invers), asigurându-te că redimensionarea ta menține proporțiile originale."
      },
      {
        "heading": "Cele mai bune formate de fișier pentru calitate",
        "body": "Formatul fișierului afectează semnificativ calitatea după redimensionare:",
        "list": [
          "PNG: compresie fără pierderi; ideal pentru grafică, ilustrații și capturi de ecran unde claritatea contează",
          "JPEG: compresie cu pierderi; ideal pentru fotografii; setează calitatea la 80–90% pentru cel mai bun echilibru dimensiune/calitate",
          "WebP: un format modern care realizează o compresie mai bună decât JPEG la o calitate echivalentă; suportat de toate browserele moderne",
          "TIFF: necomprimat sau fără pierderi; utilizat în fluxurile de lucru profesionale de imprimare și fotografie"
        ]
      },
      {
        "heading": "DPI și Calitatea Imprimării",
        "body": "DPI (dots per inch) este relevant doar pentru imprimare. Ecranele îl ignoră complet. Pentru imprimare: utilizează 300 DPI pentru printuri foto clare, 150 DPI pentru o calitate acceptabilă și 72–96 DPI pentru utilizare doar pe ecran. Pentru a calcula dimensiunile în pixeli necesare pentru o imprimare: înmulțește dimensiunea de imprimare în inchi cu DPI-ul. Pentru o imprimare de 8×10 inchi la 300 DPI: 2400×3000 pixeli."
      }
    ],
    "conclusion": "Păstrează fișierul master. Aproape fiecare problemă de calitate din acest ghid se datorează faptului că cineva nu mai are originalul: nu poți face downscale dintr-un fișier pe care l-ai aruncat deja, și niciun upscaler nu recuperează detalii care nu au fost niciodată înregistrate. Exportează copii, arhivează originalul și redimensionează din el de fiecare dată."
  },
  "install-aspect-ratio-calculator": {
    "title": "De ce să instalezi Aspect Ratio Calculator? Acces offline, viteză și mai mult",
    "description": "Instalează Aspect Ratio Calculator ca aplicație pentru acces offline instantaneu, o scurtătură pe ecranul de pornire și o experiență fără distrageri — fără interfață de utilizator a browserului, fără reîncărcări.",
    "intro": "Poți folosi acest calculator direct din browserul tău, dar instalarea sa ca aplicație duce experiența mai departe: lansare instantanee de pe ecranul de pornire, suport offline complet și o interfață curată, fără navigarea browserului în cale. Iată tot ce trebuie să știi.",
    "sections": [
      {
        "heading": "Ce înseamnă de fapt 'Instalare'?",
        "body": "Când instalezi o aplicație web (numită și PWA, sau Progressive Web App), dispozitivul tău salvează o scurtătură pe ecranul de pornire sau pe desktop și memorează fișierele aplicației pentru utilizare offline. Nu este implicat niciun App Store și nu se descarcă gigabytes de date, deoarece fișierele sunt deja în memoria cache a browserului tău. Instalarea pur și simplu promovează site-ul la o experiență de aplicație de primă clasă pe dispozitivul tău."
      },
      {
        "heading": "Beneficiile instalării",
        "body": "Instalarea Aspect Ratio Calculator îți oferă mai multe avantaje față de utilizarea sa pur și simplu în browser:",
        "list": [
          "Acces offline: calculele funcționează chiar și fără o conexiune la internet, util pe platou, pe teren sau într-un avion",
          "Scurtătură pe ecranul de pornire: se deschide cu o singură atingere, nu este nevoie să navighezi la URL sau să deschizi o filă de browser",
          "Interfață fără distrageri: fără bară de adrese a browserului, file sau bară de instrumente; calculatorul umple ecranul curat",
          "Încărcare mai rapidă: fișierele memorate în cache se încarcă instantaneu din stocarea locală în loc să aștepte un răspuns de la rețea",
          "Întotdeauna actualizat: service worker-ul preia actualizările silențios în fundal, astfel încât să ai întotdeauna cea mai recentă versiune"
        ]
      },
      {
        "heading": "Cum se instalează pe Chrome sau Android",
        "body": "Pe Android sau Chrome desktop, un banner apare automat în partea de jos a paginii cu un buton de Instalare. Atinge sau dă clic pe Instalare și confirmă când ți se solicită. Dacă bannerul a fost închis, caută pictograma de instalare (un monitor cu o săgeată în jos ⊕) în bara de adrese a browserului pe desktop, sau atinge meniul cu trei puncte pe Android și selectează 'Adaugă pe ecranul de pornire'."
      },
      {
        "heading": "Cum se instalează pe iPhone sau iPad (Safari)",
        "body": "Safari pe iOS nu afișează un banner de instalare automat, dar procesul este simplu:",
        "list": [
          "Atinge butonul Partajare (caseta cu o săgeată îndreptată în sus) în bara de instrumente Safari din partea de jos a ecranului",
          "Derulează în jos în foaia de partajare și atinge 'Adaugă pe ecranul de pornire'",
          "Editează numele dacă dorești, apoi atinge 'Adaugă' în colțul din dreapta sus",
          "Pictograma calculatorului apare acum pe ecranul tău de pornire și se lansează în modul autonom"
        ]
      },
      {
        "heading": "Cum se instalează pe desktop (Chrome sau Edge)",
        "body": "Pe un computer desktop care rulează Chrome sau Edge, caută pictograma de instalare în bara de adrese. Arată ca un monitor cu o săgeată mică de descărcare. Dă clic pe ea și confirmă solicitarea. Pe Edge, opțiunea poate apărea și sub meniul cu trei puncte ca 'Aplicații → Instalează acest site ca aplicație'. Odată instalat, calculatorul apare în Start menu (Windows) sau în folderul Aplicații (Mac) ca orice aplicație nativă."
      },
      {
        "heading": "Cum se dezinstalează",
        "body": "Dezinstalarea este la fel de ușoară ca instalarea. Pe iOS, apasă lung pe pictogramă de pe ecranul de pornire și atinge 'Elimină aplicația'. Pe Android, apasă lung și trage în zona de dezinstalare, sau mergi la Setări → Aplicații. Pe Chrome desktop, deschide aplicația, dă clic pe meniul cu trei puncte din fereastra aplicației și selectează 'Dezinstalează Aspect Ratio Calculator'. Pe Edge, dă clic dreapta pe aplicație în bara de activități sau în Start menu și alege Dezinstalare."
      }
    ],
    "conclusion": "Instalarea Aspect Ratio Calculator durează aproximativ zece secunde și nu costă nimic. Obții acces offline, o scurtătură pe ecranul de pornire și o experiență mai rapidă, mai curată, fără a fi necesar un App Store. Dacă te trezești folosind calculatorul în mod regulat, instalarea sa este cel mai convenabil mod de a-l avea la îndemână."
  }
};
