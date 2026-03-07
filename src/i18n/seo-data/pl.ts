import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";

export const RATIO_DATA: Record<string, RatioData> = {
  "16-9": {
    "label": "16:9",
    "w": 16,
    "h": 9,
    "title": "Proporcje obrazu 16:9 — Wymiary, piksele i darmowy kalkulator",
    "description": "Wszystko o proporcjach obrazu 16:9: typowe wymiary (720p, 1080p, 4K, 8K), zastosowania i darmowy kalkulator. Standard dla wideo, telewizorów i monitorów.",
    "explanation": "16:9 (szesnaście do dziewięciu) to powszechnie przyjęte szerokoekranowe proporcje obrazu dla wideo HD, streamingu i nowoczesnych wyświetlaczy. Na każde 16 jednostek szerokości przypada 9 jednostek wysokości — tworząc szeroki, kinowy prostokąt. Zastąpiły starszy standard 4:3 na początku XXI wieku i są obecnie domyślne dla praktycznie wszystkich treści wideo, monitorów i transmisji telewizyjnych na całym świecie.",
    "useCases": [
      "Filmy i miniatury YouTube",
      "Netflix, Disney+ i platformy streamingowe",
      "Telewizja HD i 4K",
      "Monitory PC i ekrany laptopów",
      "Prezentacje PowerPoint i Google Slides",
      "Tła do Zoom i wideokonferencji",
      "Scenki przerywnikowe w grach wideo"
    ],
    "dimensions": [
      {
        "name": "nHD",
        "width": 640,
        "height": 360,
        "use": "Niska rozdzielczość dla sieci, awaryjne dla urządzeń mobilnych"
      },
      {
        "name": "HD (720p)",
        "width": 1280,
        "height": 720,
        "use": "Wideo internetowe, starsze urządzenia, minimum YouTube"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1920,
        "height": 1080,
        "use": "Standardowy streaming, YouTube, transmisje telewizyjne"
      },
      {
        "name": "QHD (1440p)",
        "width": 2560,
        "height": 1440,
        "use": "Monitory wysokiej rozdzielczości, gry"
      },
      {
        "name": "4K UHD",
        "width": 3840,
        "height": 2160,
        "use": "Streaming premium, profesjonalne wideo, telewizory 4K"
      },
      {
        "name": "8K UHD",
        "width": 7680,
        "height": 4320,
        "use": "Przyszłe wyświetlacze, archiwizacja, master transmisji"
      }
    ],
    "faq": [
      {
        "q": "Ile to 16:9 w pikselach?",
        "a": "Najczęstsze wymiary pikseli 16:9 to 1280×720 (720p HD), 1920×1080 (1080p FHD), 2560×1440 (1440p QHD) i 3840×2160 (4K UHD). Działa każda szerokość podzielna w taki sposób, aby uzyskać proporcje 16:9 — na przykład 640×360 lub 800×450."
      },
      {
        "q": "Dlaczego 16:9 to standard dla wideo?",
        "a": "16:9 zostało wybrane jako międzynarodowy standard HDTV w latach 80. i 90. XX wieku, ponieważ jest matematycznym kompromisem między starszymi proporcjami telewizyjnymi 4:3 a szerszymi proporcjami kinowymi 2.39:1. Minimalizuje to czarne pasy (letterboxing) podczas wyświetlania treści z obu źródeł."
      },
      {
        "q": "Czy 1920×1080 to to samo co 16:9?",
        "a": "Tak. 1920 ÷ 16 = 120, a 1080 ÷ 9 = 120, więc oba wymiary mają ten sam współczynnik. 1920×1080 (Full HD / 1080p) to najczęściej używana rozdzielczość 16:9."
      },
      {
        "q": "Jakie są proporcje 16:9 dla rozdzielczości 4K?",
        "a": "4K UHD (Ultra High Definition) w proporcjach 16:9 to 3840×2160 pikseli — dokładnie cztery razy większa powierzchnia niż 1920×1080. Cinema 4K (DCI 4K) to 4096×2160, co jest nieco innymi proporcjami (1.9:1)."
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
    "title": "Proporcje obrazu 9:16 — Wymiary dla TikTok, Reels i wideo pionowego",
    "description": "Kompletny przewodnik po proporcjach obrazu 9:16: wymiary w pikselach, zastosowania dla TikTok, Instagram Reels, YouTube Shorts i darmowy kalkulator.",
    "explanation": "9:16 to pionowy (portretowy) odpowiednik szerokoekranowego 16:9. Idealnie wypełnia ekran smartfona trzymanego pionowo — co czyni go dominującym formatem dla krótkich filmów społecznościowych. TikTok, Instagram Reels, YouTube Shorts i Snapchat używają 9:16 jako swojego głównego płótna.",
    "useCases": [
      "Filmy TikTok",
      "Instagram Reels i Stories",
      "YouTube Shorts",
      "Filmy Snapchat",
      "Facebook Reels i Stories",
      "Piny wideo Pinterest",
      "Reklama zorientowana na urządzenia mobilne"
    ],
    "dimensions": [
      {
        "name": "SD Mobile",
        "width": 540,
        "height": 960,
        "use": "Niska rozdzielczość mobilna, starsze urządzenia"
      },
      {
        "name": "HD Mobile",
        "width": 720,
        "height": 1280,
        "use": "Standardowa jakość mobilna"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1080,
        "height": 1920,
        "use": "TikTok, Instagram Reels, YouTube Shorts — zalecane"
      },
      {
        "name": "QHD Mobile",
        "width": 1440,
        "height": 2560,
        "use": "Nagrywanie smartfonem wysokiej klasy"
      }
    ],
    "faq": [
      {
        "q": "Jakiej rozdzielczości powinienem używać dla TikTok?",
        "a": "TikTok zaleca 1080×1920 pikseli (proporcje 9:16) dla najlepszej jakości. Jest to pionowe wideo Full HD. Użycie niższej rozdzielczości może skutkować artefaktami kompresji po przesłaniu."
      },
      {
        "q": "Czy 9:16 to to samo co tryb portretowy?",
        "a": "Tak. 9:16 to standardowe proporcje wideo portretowego (pionowego), równoważne obróceniu szerokoekranowej ramki 16:9 na bok. Odpowiada to naturalnej orientacji smartfona trzymanego w jednej ręce."
      },
      {
        "q": "Czy mogę opublikować film 9:16 na YouTube?",
        "a": "Tak — YouTube Shorts jest specjalnie zaprojektowany dla pionowych filmów 9:16. Zwykłe przesyłanie na YouTube również akceptuje 9:16, ale będą one wyświetlane z czarnymi pasami (pillarboxing) na komputerze, gdy zostaną osadzone w odtwarzaczu 16:9."
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
    "title": "Proporcje obrazu 4:3 — Klasyczne wymiary ekranu i kalkulator",
    "description": "Wyjaśnienie proporcji obrazu 4:3: typowe rozmiary pikseli, gdzie jest nadal używany (tablety, prezentacje, film) i darmowy kalkulator.",
    "explanation": "4:3 (cztery do trzech) było standardem dla telewizorów i monitorów komputerowych od lat 30. XX wieku do wczesnych lat 2000. Tworzy niemal kwadratowy prostokąt, który odpowiada proporcjom klatek filmu 35mm. Chociaż w dużej mierze zastąpione przez 16:9 dla wideo, pozostaje istotne dla wyświetlaczy iPad, prezentacji PowerPoint i niektórych formatów fotograficznych.",
    "useCases": [
      "Wyświetlacze iPad i tabletów",
      "Starsze telewizory i CCTV",
      "Prezentacje PowerPoint / Keynote (starszy format)",
      "Aparaty cyfrowe i fotografia",
      "Drukowane broszury i dokumenty o proporcjach A4",
      "Efekty wideo i filmowe w stylu retro"
    ],
    "dimensions": [
      {
        "name": "QVGA",
        "width": 320,
        "height": 240,
        "use": "Starsze urządzenia, wbudowane wyświetlacze"
      },
      {
        "name": "VGA",
        "width": 640,
        "height": 480,
        "use": "Klasyczna sieć, standard kamerek internetowych"
      },
      {
        "name": "SVGA",
        "width": 800,
        "height": 600,
        "use": "Starsze monitory, projektory"
      },
      {
        "name": "XGA",
        "width": 1024,
        "height": 768,
        "use": "iPad (1.–4. generacji), standardowe projektory"
      },
      {
        "name": "SXGA",
        "width": 1280,
        "height": 960,
        "use": "Aparaty cyfrowe, fotografia"
      },
      {
        "name": "UXGA",
        "width": 1600,
        "height": 1200,
        "use": "Profesjonalne monitory, obrazy o jakości do druku"
      }
    ],
    "faq": [
      {
        "q": "Ile to 4:3 w pikselach?",
        "a": "Typowe wymiary pikseli 4:3 to 640×480 (VGA), 800×600 (SVGA), 1024×768 (XGA) i 1280×960. Każda rozdzielczość, w której szerokość ÷ wysokość = 1.333..., odpowiada proporcjom 4:3."
      },
      {
        "q": "Czy ktoś nadal używa 4:3?",
        "a": "Tak. iPad używa wyświetlacza 4:3 (2048×1536 w modelach Retina). Wiele szablonów PowerPoint, aparatów DSLR i starszych kamer monitoringu również używa 4:3. Jest to mniej powszechne dla wideo, ale nadal istotne dla statycznych obrazów i prezentacji."
      },
      {
        "q": "Jaka jest różnica między 4:3 a 16:9?",
        "a": "4:3 jest bardziej kwadratowe (proporcje 1.33:1), podczas gdy 16:9 jest szersze i bardziej prostokątne (proporcje 1.78:1). 16:9 to nowoczesny standard telewizyjny i wideo; 4:3 to starszy standard, który go poprzedzał. Podczas oglądania treści 4:3 na ekranie 16:9, po bokach pojawiają się czarne pasy (pillarboxing)."
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
    "title": "Proporcje obrazu 1:1 — Kwadratowe wymiary dla Instagrama i nie tylko",
    "description": "Kwadratowe proporcje obrazu 1:1: rozmiary pikseli, najlepsze zastosowania na Instagramie i w mediach społecznościowych oraz darmowy kalkulator proporcji obrazu.",
    "explanation": "1:1 to idealny kwadrat — szerokość i wysokość są identyczne. Instagram spopularyzował format kwadratowy dla fotografii w mediach społecznościowych i pozostaje on podstawą dla zdjęć profilowych, okładek albumów i postów w kanałach na każdej głównej platformie.",
    "useCases": [
      "Posty w kanale Instagram (oryginalny format)",
      "Zdjęcia profilowe na wszystkich platformach",
      "Okładki albumów i muzyki",
      "Ikony aplikacji i favikony",
      "Fotografia produktowa dla e-commerce",
      "Obrazy postów na Facebooku i LinkedIn"
    ],
    "dimensions": [
      {
        "name": "Small",
        "width": 400,
        "height": 400,
        "use": "Miniatury profili, ikony aplikacji"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1080,
        "use": "Post w kanale Instagram (zalecane)"
      },
      {
        "name": "High Res",
        "width": 2048,
        "height": 2048,
        "use": "Druk, profesjonalna fotografia"
      },
      {
        "name": "4K Square",
        "width": 4096,
        "height": 4096,
        "use": "Druk ultra wysokiej rozdzielczości, archiwizacja"
      }
    ],
    "faq": [
      {
        "q": "Jaka jest najlepsza rozdzielczość 1:1 dla Instagrama?",
        "a": "Instagram zaleca 1080×1080 pikseli dla kwadratowych postów w kanale. Minimum to 320×320, ale 1080×1080 to standard dla ostrego wyświetlania na wszystkich urządzeniach."
      },
      {
        "q": "Czy proporcje 1:1 to to samo co kwadrat?",
        "a": "Tak, dokładnie. Proporcje obrazu 1:1 oznaczają, że szerokość jest równa wysokości, tworząc idealny kwadrat niezależnie od rzeczywistej liczby pikseli."
      },
      {
        "q": "Dlaczego Instagram używa 1:1?",
        "a": "Instagram został pierwotnie zaprojektowany wokół fotografii mobilnej i wybrał kwadratowy format 1:1, aby ujednolicić siatkę kanału. Chociaż później dodano formaty portretowe (4:5) i poziome (1.91:1), kwadrat 1:1 pozostaje klasycznym formatem Instagrama."
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
    "title": "Proporcje obrazu 4:5 — Wymiary portretowe Instagrama i kalkulator",
    "description": "Proporcje obrazu 4:5 dla postów portretowych na Instagramie: najlepsze rozmiary pikseli, dlaczego zajmuje więcej miejsca w kanale i darmowy kalkulator.",
    "explanation": "4:5 to proporcje portretowe (wyższe niż szerokie), które zajmują maksymalną pionową przestrzeń dozwoloną w kanale Instagrama — dając Twojemu obrazowi więcej miejsca na ekranie niż post kwadratowy lub poziomy. Przy proporcjach 0.8:1 jest nieco szersze niż ekran telefonu 9:16, co czyni go idealnym do portretów, zdjęć produktów i fotografii redakcyjnej.",
    "useCases": [
      "Posty w kanale Instagram (portretowe — maksymalna wysokość)",
      "Fotografia do mediów społecznościowych",
      "Fotografia portretowa do druku",
      "Piny Pinterest (format wtórny)",
      "Posty z obrazami portretowymi na Facebooku"
    ],
    "dimensions": [
      {
        "name": "Minimum",
        "width": 600,
        "height": 750,
        "use": "Minimum dla akceptowalnej jakości Instagrama"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1350,
        "use": "Post portretowy na Instagramie (zalecane)"
      },
      {
        "name": "High Res",
        "width": 2160,
        "height": 2700,
        "use": "Obrazy portretowe o jakości do druku"
      }
    ],
    "faq": [
      {
        "q": "Dlaczego używać 4:5 zamiast 9:16 dla postów na Instagramie?",
        "a": "Instagram przycina obrazy 9:16 dla kanału do 4:5 (maksymalne proporcje portretowe dozwolone dla postów w kanale). Jeśli użyjesz 4:5, uzyskasz najwyższy dozwolony obraz w kanale bez utraty treści z powodu przycięcia. 9:16 jest tylko dla Stories i Reels."
      },
      {
        "q": "Jakie są wymiary pikseli dla 4:5 na Instagramie?",
        "a": "Zalecany rozmiar to 1080×1350 pikseli. Jest to maksymalny rozmiar portretowy, jaki Instagram dopuszcza dla postów w kanale i wyświetla się ostro na wszystkich urządzeniach."
      },
      {
        "q": "Czy 4:5 zapewnia większy zasięg na Instagramie?",
        "a": "Post 4:5 zajmuje więcej pionowej przestrzeni w kanale niż kwadratowy 1:1 lub poziomy 1.91:1, co może pomóc przyciągnąć więcej uwagi, gdy użytkownicy przewijają. Wielu twórców zgłasza wyższe wskaźniki zaangażowania w przypadku postów portretowych, choć zależy to od treści."
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
    "title": "Proporcje obrazu 3:2 — Wymiary dla fotografii, DSLR i druku",
    "description": "Proporcje obrazu 3:2 dla aparatów DSLR i druku: typowe wymiary, pochodzenie z filmu 35mm i darmowy kalkulator proporcji obrazu.",
    "explanation": "3:2 wywodzi się z klatki filmu 35mm, która mierzy 36mm × 24mm — proporcje 3:2. Pozostaje natywnymi proporcjami dla większości aparatów DSLR i bezlusterkowych, i bezpośrednio odpowiada typowym rozmiarom wydruków, takim jak 4×6 cali, 6×9 cali i 12×18 cali.",
    "useCases": [
      "Matryce aparatów DSLR i bezlusterkowych",
      "Fotografia na filmie 35mm",
      "Wydruki 4×6 i 6×9 cali",
      "Układy albumów fotograficznych",
      "Profesjonalna fotografia portretowa"
    ],
    "dimensions": [
      {
        "name": "6MP",
        "width": 3008,
        "height": 2000,
        "use": "Podstawowy DSLR"
      },
      {
        "name": "12MP",
        "width": 4272,
        "height": 2848,
        "use": "Średniej klasy DSLR (np. Canon 60D)"
      },
      {
        "name": "24MP",
        "width": 6000,
        "height": 4000,
        "use": "Profesjonalny DSLR (np. Nikon D3200)"
      },
      {
        "name": "36MP",
        "width": 7360,
        "height": 4912,
        "use": "DSLR wysokiej rozdzielczości (np. Nikon D800)"
      }
    ],
    "faq": [
      {
        "q": "Jakie rozmiary wydruków pasują do proporcji 3:2?",
        "a": "Standardowe rozmiary wydruków 3:2 to 4×6 cali, 6×9 cali, 8×12 cali, 12×18 cali i 20×30 cali. Te rozmiary wydruków wyświetlą cały obraz bez przycinania."
      },
      {
        "q": "Ile to 3:2 w pikselach?",
        "a": "Każda rozdzielczość, w której szerokość ÷ wysokość = 1.5, to proporcje 3:2. Typowe przykłady: 3000×2000, 4500×3000, 6000×4000. Większość aparatów DSLR rejestruje obrazy natywnie w proporcjach 3:2."
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
    "title": "Proporcje obrazu 21:9 — Wymiary monitorów ultrawide i kalkulator",
    "description": "Proporcje obrazu ultrawide 21:9: typowe rozdzielczości (2560×1080, 3440×1440, 5120×2160), zastosowania w grach i kinie oraz darmowy kalkulator.",
    "explanation": "21:9 (czasami nazywane ultrawide) zapewnia znacznie szersze pole widzenia niż standardowe monitory 16:9. Jest popularne w grach (eliminując potrzebę wielu monitorów), kinowej produkcji wideo i przepływach pracy zwiększających produktywność. Wiele filmów kinowych nakręconych w proporcjach 2.35:1 lub 2.39:1 wygląda blisko 21:9, gdy są wyświetlane na ekranie ultrawide.",
    "useCases": [
      "Monitory gamingowe ultrawide",
      "Stacje robocze do edycji wideo i korekcji kolorów",
      "Produktywność z wieloma aplikacjami",
      "Oglądanie filmów kinowych (minimalne czarne pasy)",
      "Symulatory lotu i gry wyścigowe"
    ],
    "dimensions": [
      {
        "name": "FHD Ultrawide",
        "width": 2560,
        "height": 1080,
        "use": "Podstawowe gry ultrawide, monitory budżetowe"
      },
      {
        "name": "QHD Ultrawide",
        "width": 3440,
        "height": 1440,
        "use": "Standardowy ultrawide premium"
      },
      {
        "name": "5K Ultrawide",
        "width": 5120,
        "height": 2160,
        "use": "Profesjonalna stacja robocza, LG 34WK95U"
      }
    ],
    "faq": [
      {
        "q": "Czy 21:9 to faktycznie 21 do 9?",
        "a": "Niezupełnie — nazwa '21:9' to etykieta marketingowa. Większość monitorów ultrawide ma proporcje bliższe 64:27 (2.370:1) lub 43:18 (2.388:1). Rzeczywiste proporcje zależą od konkretnej rozdzielczości (np. 3440×1440 = 43:18)."
      },
      {
        "q": "Czy wszystkie gry obsługują 21:9?",
        "a": "Wiele nowoczesnych gier natywnie obsługuje ultrawide 21:9. Niektóre starsze tytuły lub pewne gry wieloosobowe ograniczają pole widzenia do 16:9, aby zapobiec przewadze konkurencyjnej. Sprawdź ustawienia gry lub strony społecznościowe pod kątem statusu obsługi ultrawide."
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
    "title": "Proporcje obrazu 2:1 — Wymiary panoramiczne i banerowe",
    "description": "Proporcje obrazu 2:1: zastosowania w fotografii panoramicznej, banerach internetowych i nagłówkach Twitter/X, z darmowym kalkulatorem.",
    "explanation": "2:1 to szerokie proporcje panoramiczne, gdzie szerokość jest dokładnie dwukrotnie większa od wysokości. Jest używane do malowniczej fotografii panoramicznej, banerów głównych stron internetowych i niektórych nagłówków mediów społecznościowych. Znajduje się między szerokoekranowym 16:9 a prawdziwymi proporcjami kinowymi.",
    "useCases": [
      "Panoramiczna fotografia krajobrazowa",
      "Banery główne i nagłówki stron internetowych",
      "Kadrowanie zdjęć 360°",
      "Nagłówki newsletterów e-mail",
      "Digital signage (cyfrowe oznakowanie)"
    ],
    "dimensions": [
      {
        "name": "Web Banner",
        "width": 1200,
        "height": 600,
        "use": "Standardowy baner internetowy, obraz OG"
      },
      {
        "name": "HD Banner",
        "width": 2000,
        "height": 1000,
        "use": "Obraz główny strony internetowej wysokiej rozdzielczości"
      },
      {
        "name": "Panoramic",
        "width": 4000,
        "height": 2000,
        "use": "Fotografia panoramiczna"
      }
    ],
    "faq": [
      {
        "q": "Jaka jest różnica między 2:1 a 16:9?",
        "a": "Proporcje 2:1 (2.0:1) są szersze niż 16:9 (1.78:1). Obraz 2:1 jest bardziej panoramiczny — na przykład 2000×1000 pikseli w porównaniu do 1920×1080 w 16:9. 2:1 ma więcej przestrzeni poziomej w stosunku do swojej wysokości."
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
    "title": "Proporcje obrazu 5:4 — Wymiary druku i monitorów",
    "description": "Proporcje obrazu 5:4: wydruki 8×10, aparaty średnioformatowe i starsze monitory 1280×1024. Darmowy kalkulator w zestawie.",
    "explanation": "5:4 jest nieco wyższe niż standardowe proporcje 4:3. Odpowiada rozmiarowi wydruku 8×10 cali używanemu w studiach fotografii portretowej i odpowiada rozdzielczości 1280×1024, powszechnej na starszych monitorach CRT i wczesnych monitorach LCD.",
    "useCases": [
      "Wydruki portretowe 8×10 cali",
      "Wydruki zdjęć 10×8 cali",
      "Treści dla starszych monitorów 1280×1024",
      "Fotografia średnioformatowa",
      "Studyjna fotografia portretowa"
    ],
    "dimensions": [
      {
        "name": "SXGA",
        "width": 1280,
        "height": 1024,
        "use": "Starsze monitory i projektory"
      },
      {
        "name": "Print 8×10",
        "width": 2400,
        "height": 3000,
        "use": "Wydruk 8×10 cali w 300 DPI"
      },
      {
        "name": "Print 16×20",
        "width": 4800,
        "height": 6000,
        "use": "Wydruk 16×20 cali w 300 DPI"
      }
    ],
    "faq": [
      {
        "q": "Jakie piksele pasują do proporcji 5:4?",
        "a": "Typowe rozmiary pikseli 5:4 to 1280×1024, 2560×2048 i każda para wymiarów, gdzie szerokość ÷ wysokość = 1.25. Wydruk 8×10 zeskanowany w 300 DPI daje 2400×3000 pikseli (w orientacji portretowej, 3:2.4 = 5:4)."
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
    "title": "Rozmiary obrazów i proporcje obrazu na Instagramie 2026 — Kompletny przewodnik",
    "description": "Wszystkie wymiary obrazów i filmów na Instagramie na rok 2026: posty w aktualnościach, Stories, Reels, zdjęcia profilowe i inne. Dokładne rozmiary w pikselach i proporcje obrazu.",
    "intro": "Instagram obsługuje wiele proporcji obrazu, w zależności od miejsca wyświetlania treści. Użycie odpowiednich wymiarów zapewnia wyraźne wyświetlanie obrazów bez niepożądanego przycinania. Oto wszystkie oficjalne zalecane rozmiary na rok 2026.",
    "formats": [
      {
        "type": "Post w aktualnościach — Kwadrat",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Klasyczny format; bezpieczny dla wszystkich urządzeń"
      },
      {
        "type": "Post w aktualnościach — Pionowy (maks. wysokość)",
        "width": 1080,
        "height": 1350,
        "ratio": "4:5",
        "notes": "Zajmuje najwięcej miejsca w aktualnościach; zalecany dla maksymalnej widoczności"
      },
      {
        "type": "Post w aktualnościach — Poziomy",
        "width": 1080,
        "height": 566,
        "ratio": "1.91:1",
        "notes": "Szeroki obraz; mniej miejsca w aktualnościach niż pionowy"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Pionowy na cały ekran; maks. 15 sekund dla zdjęć"
      },
      {
        "type": "Reel",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Wideo musi mieć co najmniej 3 sekundy; maks. 90 sekund"
      },
      {
        "type": "Zdjęcie profilowe",
        "width": 320,
        "height": 320,
        "ratio": "1:1",
        "notes": "Wyświetlane jako koło; kluczowa treść powinna być wyśrodkowana"
      },
      {
        "type": "Post karuzelowy",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Każda karta powinna mieć te same wymiary"
      }
    ],
    "tips": [
      "Użyj 4:5 (1080×1350) dla postów w aktualnościach, aby zmaksymalizować przestrzeń pionową podczas przewijania",
      "Ważne treści umieszczaj w centralnych 80% Stories, aby uniknąć nakładania się elementów interfejsu",
      "Eksportuj z pełną szerokością 1080px — Instagram i tak skompresuje wszystko, co większe",
      "Używaj PNG dla grafik i ilustracji; JPEG w jakości 80–90% dla zdjęć",
      "Unikaj małego tekstu blisko krawędzi — może zostać przycięty na starszych urządzeniach"
    ],
    "faq": [
      {
        "q": "Jaki jest najlepszy rozmiar posta na Instagramie w 2026 roku?",
        "a": "Dla maksymalnej widoczności w aktualnościach, użyj 1080×1350 pikseli (proporcje 4:5 — pionowe). Jest to najwyższy format, jaki Instagram dopuszcza dla postów w aktualnościach i zajmuje najwięcej miejsca na ekranie podczas przewijania przez użytkowników."
      },
      {
        "q": "Czy mogę opublikować wideo 16:9 na Instagramie?",
        "a": "Tak, ale Instagram przytnie filmy 16:9, aby dopasować je do aktualności (do 1:1 lub 4:5). W przypadku Reels i Stories, filmy 16:9 będą wyświetlać czarne paski (letterboxing) u góry i na dole. Zawsze nagrywaj pionowo (9:16) dla Reels i Stories."
      },
      {
        "q": "Jaki rozmiar powinien mieć tekst w Instagram Story?",
        "a": "Wszystkie teksty i kluczowe elementy wizualne umieszczaj w bezpiecznej strefie: około 1080×1420 pikseli wyśrodkowane w obszarze 1080×1920. Górne 250px i dolne 250px są zazwyczaj zakryte przez elementy interfejsu użytkownika, takie jak nazwa użytkownika i pasek odpowiedzi."
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
    "title": "Wymiary i proporcje wideo na YouTube 2026 — Kompletny przewodnik",
    "description": "Wszystkie wymiary obrazów i filmów na YouTube na rok 2026: filmy, Shorts, miniatury, banery kanałów i zdjęcia profilowe. Dokładne rozmiary w pikselach i proporcje.",
    "intro": "YouTube to przede wszystkim platforma 16:9, ale Shorts używa pionowego wideo 9:16. Prawidłowe wymiary poprawiają współczynnik klikalności miniatur i zapewniają, że Twoje treści wyglądają ostro na wszystkich urządzeniach.",
    "formats": [
      {
        "type": "Wideo (Standard HD)",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Zalecane dla większości przesyłanych plików (1080p)"
      },
      {
        "type": "Wideo (4K)",
        "width": 3840,
        "height": 2160,
        "ratio": "16:9",
        "notes": "Maksymalna jakość; wymaga nagrywania w 4K"
      },
      {
        "type": "Shorts",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Wideo pionowe; maks. 60 sekund"
      },
      {
        "type": "Miniatura",
        "width": 1280,
        "height": 720,
        "ratio": "16:9",
        "notes": "Niestandardowa miniatura; maksymalny rozmiar pliku 2MB"
      },
      {
        "type": "Baner kanału (komputer stacjonarny)",
        "width": 2560,
        "height": 1440,
        "ratio": "16:9",
        "notes": "Pełny baner; tylko centralne 1546×423px jest widoczne na wszystkich urządzeniach"
      },
      {
        "type": "Zdjęcie profilowe",
        "width": 800,
        "height": 800,
        "ratio": "1:1",
        "notes": "Wyświetlane jako koło; minimum 98×98px"
      }
    ],
    "tips": [
      "Projektuj miniatury w rozmiarze 1280×720 z pogrubionym tekstem i kontrastowymi kolorami dla lepszego CTR",
      "Zachowaj bezpieczną strefę banera kanału na 1546×423 piksele, aby zapewnić jego widoczność na wszystkich urządzeniach",
      "Przesyłaj filmy w najwyższej możliwej rozdzielczości — YouTube transkoduje w dół, nie w górę",
      "Dla Shorts użyj 1080×1920 (9:16) i upewnij się, że żadna istotna treść nie znajduje się w górnych ani dolnych 10%",
      "Plik miniatury musi mieć mniej niż 2MB — użyj JPEG dla zdjęć, PNG dla grafik"
    ],
    "faq": [
      {
        "q": "Jaka rozdzielczość jest najlepsza dla filmów na YouTube?",
        "a": "1920×1080 (1080p Full HD) to standardowa i zalecana rozdzielczość dla filmów przesyłanych na YouTube. Zapewnia ostry obraz na większości ekranów bez konieczności posiadania sprzętu do nagrywania w 4K."
      },
      {
        "q": "Jaki rozmiar powinna mieć miniatura na YouTube?",
        "a": "YouTube zaleca 1280×720 pikseli (proporcje 16:9) dla niestandardowych miniatur. Maksymalny rozmiar pliku to 2MB. Użyj JPEG dla zdjęć lub PNG dla zaprojektowanych grafik."
      },
      {
        "q": "Jaka jest rozdzielczość YouTube Shorts?",
        "a": "YouTube Shorts używa pionowych proporcji 9:16, z zalecaną rozdzielczością 1080×1920 pikseli. Maksymalna długość Shorts to 60 sekund."
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
    "title": "Wymiary i proporcje wideo na TikTok 2026 — Kompletny przewodnik",
    "description": "Rozmiary i proporcje wideo na TikTok na rok 2026: najlepsza rozdzielczość dla filmów TikTok, zdjęć profilowych i obrazów okładek.",
    "intro": "TikTok to platforma mobilna, zorientowana na wideo pionowe. Wszystkie treści powinny być projektowane w orientacji portretowej 9:16. Oto specyfikacje, aby Twoje treści wyglądały jak najlepiej.",
    "formats": [
      {
        "type": "Wideo (zalecane)",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Pionowe Full HD — zawsze tego używaj"
      },
      {
        "type": "Wideo (minimalne)",
        "width": 720,
        "height": 1280,
        "ratio": "9:16",
        "notes": "Minimum dla akceptowalnej jakości"
      },
      {
        "type": "Zdjęcie profilowe",
        "width": 200,
        "height": 200,
        "ratio": "1:1",
        "notes": "Wyświetlane jako koło"
      },
      {
        "type": "Obraz okładki",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Automatycznie wyodrębniane z wideo; można dostosować"
      }
    ],
    "tips": [
      "Zawsze nagrywaj i przesyłaj w rozdzielczości 1080×1920 (9:16) dla najlepszej jakości wyświetlania",
      "Kluczowe treści umieszczaj w centrum kadru — dolne 20% jest zakryte przez napisy i interfejs użytkownika",
      "TikTok obsługuje formaty .mp4 i .mov; zalecany jest kodek H.264",
      "Narzędzia do nakładania tekstu na TikTok używaj oszczędnie — nakłada się ono na Twoje treści",
      "Jasne oświetlenie i wizualizacje o wysokim kontraście lepiej działają w algorytmie"
    ],
    "faq": [
      {
        "q": "Jaka jest najlepsza rozdzielczość wideo dla TikTok?",
        "a": "TikTok zaleca 1080×1920 pikseli (proporcje 9:16, pionowe Full HD). Użycie tej rozdzielczości zapewnia, że Twoje wideo wyświetla się bez czarnych pasków (letterboxingu) na każdym urządzeniu."
      },
      {
        "q": "Czy mogę przesłać poziome (16:9) wideo na TikTok?",
        "a": "Tak, TikTok akceptuje filmy poziome, ale będą one wyświetlane z czarnymi paskami u góry i na dole (letterbox). Dla najlepszego doświadczenia widza i wydajności algorytmu, zawsze używaj wideo pionowego (9:16)."
      },
      {
        "q": "Jaka jest maksymalna długość wideo na TikTok?",
        "a": "Na rok 2026, TikTok pozwala na filmy o długości do 10 minut dla standardowych kont. Krótsze filmy (15–60 sekund) zazwyczaj osiągają lepsze wyniki w algorytmie rekomendacji."
      }
    ],
    "relatedRatios": [
      "9-16",
      "1-1"
    ]
  },
  "twitter": {
    "name": "X / Twitter",
    "title": "Rozmiary obrazów i proporcje obrazu na X (Twitter) 2026 — Kompletny przewodnik",
    "description": "Wszystkie wymiary obrazów na X (Twitter) na rok 2026: obrazy w postach, banery nagłówkowe, zdjęcia profilowe i rozmiary wideo. Dokładne specyfikacje w pikselach.",
    "intro": "X (dawniej Twitter) obsługuje szereg formatów i rozmiarów obrazów. Obrazy w postach są automatycznie przycinane w widoku osi czasu, ale wyświetlają się w całości po dotknięciu. Oto wszystkie zalecane wymiary.",
    "formats": [
      {
        "type": "Obraz w poście (poziomy)",
        "width": 1600,
        "height": 900,
        "ratio": "16:9",
        "notes": "Zalecane dla większości obrazów w postach"
      },
      {
        "type": "Obraz w poście (kwadratowy)",
        "width": 1200,
        "height": 1200,
        "ratio": "1:1",
        "notes": "Bezpieczny dla wszystkich kontekstów wyświetlania"
      },
      {
        "type": "Obraz w poście (pionowy)",
        "width": 900,
        "height": 1350,
        "ratio": "2:3",
        "notes": "Maksymalne obsługiwane proporcje pionowe"
      },
      {
        "type": "Zdjęcie profilowe",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Wyświetlane jako koło; zalecane min. 400×400"
      },
      {
        "type": "Nagłówek / Baner",
        "width": 1500,
        "height": 500,
        "ratio": "3:1",
        "notes": "Góra strony profilu; unikaj krawędzi — przycinane na urządzeniach mobilnych"
      },
      {
        "type": "Wideo",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Maks. 2:20 długości; limit rozmiaru pliku 512MB"
      }
    ],
    "tips": [
      "Użyj 1600×900 dla poziomych obrazów w postach — wyświetla się bez przycinania na osi czasu",
      "Zachowaj centralne 60% banera nagłówkowego jako bezpieczną strefę dla wszystkich urządzeń",
      "Zdjęcia profilowe są wyświetlane jako koła — użyj wyśrodkowanego obiektu bez ważnych treści blisko krawędzi",
      "X kompresuje obrazy — eksportuj w 100% jakości JPEG, aby zminimalizować widoczną kompresję",
      "Dla kart Twittera (podglądy linków) użyj proporcji 2:1 (np. 1200×628) dla formatu dużej karty"
    ],
    "faq": [
      {
        "q": "Jaki jest najlepszy rozmiar obrazu dla posta na X (Twitter)?",
        "a": "1600×900 pikseli (16:9) to zalecany rozmiar dla obrazów w postach na X. Wyświetla się bez przycinania na osi czasu. Kwadrat (1200×1200) jest również bezpieczny i dobrze wygląda we wszystkich kontekstach."
      },
      {
        "q": "Jaki rozmiar ma baner nagłówkowy na X (Twitter)?",
        "a": "Zalecany rozmiar nagłówka X to 1500×500 pikseli (proporcje 3:1). Zauważ, że baner jest przycinany inaczej na komputerach stacjonarnych niż na urządzeniach mobilnych — ważne treści umieszczaj w centralnym obszarze."
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
    "title": "Rozmiary obrazów i proporcje obrazu na LinkedIn 2026 — Kompletny przewodnik",
    "description": "Wymiary obrazów na LinkedIn na rok 2026: obrazy w postach, banery firmowe, zdjęcia profilowe i obrazy okładek. Dokładne rozmiary w pikselach dla profesjonalnych treści.",
    "intro": "LinkedIn to profesjonalna sieć, gdzie jakość obrazu ma znaczenie dla wiarygodności. Oto zalecane rozmiary obrazów, aby Twój profil i posty wyglądały profesjonalnie.",
    "formats": [
      {
        "type": "Obraz w poście (poziomy)",
        "width": 1200,
        "height": 628,
        "ratio": "1.91:1",
        "notes": "Standardowy obraz posta na LinkedIn"
      },
      {
        "type": "Obraz w poście (kwadratowy)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Kwadratowe posty dobrze sprawdzają się na LinkedIn"
      },
      {
        "type": "Zdjęcie profilowe",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Minimum 200×200; użyj profesjonalnego zdjęcia portretowego"
      },
      {
        "type": "Baner osobisty",
        "width": 1584,
        "height": 396,
        "ratio": "4:1",
        "notes": "Wyświetlany za zdjęciem profilowym"
      },
      {
        "type": "Logo firmy",
        "width": 300,
        "height": 300,
        "ratio": "1:1",
        "notes": "Kwadratowe logo dla strony firmowej"
      },
      {
        "type": "Baner firmowy",
        "width": 1128,
        "height": 191,
        "ratio": "5.9:1",
        "notes": "Bardzo szeroki baner; tekst powinien być wyśrodkowany"
      }
    ],
    "tips": [
      "Użyj 1200×628 dla obrazów podglądu linków (format karty LinkedIn)",
      "Zdjęcie profilowe powinno wyraźnie pokazywać Twoją twarz — LinkedIn to kontekst profesjonalny",
      "Baner osobisty może prezentować Twoją pracę, zestaw umiejętności lub markę — użyj 1584×396",
      "Posty firmowe z obrazami uzyskują znacznie większe zaangażowanie niż posty tylko tekstowe",
      "Eksportuj zdjęcia profilowe jako JPEG lub PNG; maksymalny rozmiar pliku to 8MB"
    ],
    "faq": [
      {
        "q": "Jaki jest najlepszy rozmiar obrazu posta na LinkedIn?",
        "a": "1200×628 pikseli (proporcje 1.91:1) to zalecany rozmiar obrazu posta na LinkedIn. Kwadratowe obrazy (1080×1080) również dobrze się sprawdzają i mogą lepiej wyświetlać się w mobilnych aktualnościach."
      },
      {
        "q": "Jaki rozmiar ma baner profilowy na LinkedIn?",
        "a": "Osobisty baner LinkedIn (zdjęcie w tle) powinien mieć 1584×396 pikseli (proporcje 4:1). Jest to rozmiar, który wyświetla się za Twoim zdjęciem profilowym na komputerach stacjonarnych i urządzeniach mobilnych."
      }
    ],
    "relatedRatios": [
      "1-1",
      "16-9"
    ]
  },
  "facebook": {
    "name": "Facebook",
    "title": "Rozmiary obrazów i proporcje obrazu na Facebooku 2026 — Kompletny przewodnik",
    "description": "Wymiary obrazów na Facebooku na rok 2026: obrazy w postach, zdjęcia w tle, Stories, zdjęcia profilowe i inne. Dokładne specyfikacje w pikselach.",
    "intro": "Facebook obsługuje wiele formatów obrazów, a specyfikacje różnią się w zależności od miejsca umieszczenia. Oto zalecane wymiary na rok 2026, aby Twoje treści wyglądały jak najlepiej.",
    "formats": [
      {
        "type": "Obraz w poście",
        "width": 1200,
        "height": 630,
        "ratio": "1.91:1",
        "notes": "Standardowy obraz w aktualnościach; używany również do podglądów linków"
      },
      {
        "type": "Obraz w poście (kwadratowy)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Bezpieczny zarówno dla aktualności na komputerach stacjonarnych, jak i mobilnych"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Pionowy na cały ekran; trwałość 24 godziny"
      },
      {
        "type": "Zdjęcie profilowe",
        "width": 180,
        "height": 180,
        "ratio": "1:1",
        "notes": "Wyświetlane w rozmiarze 170×170 na komputerach stacjonarnych; przycięcie do koła"
      },
      {
        "type": "Zdjęcie w tle",
        "width": 820,
        "height": 312,
        "ratio": "2.63:1",
        "notes": "Wyświetlane w rozmiarze 820×312 na komputerach stacjonarnych, 640×360 na urządzeniach mobilnych"
      },
      {
        "type": "Okładka wydarzenia",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Obraz nagłówka strony wydarzenia"
      }
    ],
    "tips": [
      "Projektuj zdjęcia w tle z kluczową treścią w centrum — przycinanie różni się na urządzeniach mobilnych i komputerach stacjonarnych",
      "Dla postów z linkami użyj obrazu 1200×630, aby aktywować dużą kartę podglądu Facebooka",
      "Przesyłaj zdjęcia w najwyższej możliwej rozdzielczości — Facebook je skompresuje",
      "Zdjęcia profilowe są wyświetlane jako koła — twarze lub loga powinny być wyśrodkowane",
      "Bezpieczna strefa Stories: treści powinny znajdować się w odległości 250px od górnej i dolnej krawędzi"
    ],
    "faq": [
      {
        "q": "Jaki jest najlepszy rozmiar obrazu posta na Facebooku?",
        "a": "1200×630 pikseli (proporcje 1.91:1) to zalecany rozmiar posta na Facebooku. Działa to również dla obrazów podglądu linków. Kwadrat (1080×1080) to bezpieczna alternatywa, która wygląda spójnie we wszystkich miejscach."
      },
      {
        "q": "Jaki jest rozmiar zdjęcia w tle na Facebooku?",
        "a": "Zalecany rozmiar zdjęcia w tle na Facebooku to 820×312 pikseli dla komputerów stacjonarnych. Na urządzeniach mobilnych wyświetla się jako 640×360. Aby uniknąć przycinania, ważne treści umieszczaj w centralnym obszarze 640×312."
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
    "title": "Rozmiary Pinów i proporcje obrazu na Pinterest 2026 — Kompletny przewodnik",
    "description": "Wymiary obrazów na Pinterest na rok 2026: standardowe piny, piny pomysłów, kwadratowe piny i zdjęcia profilowe. Uzyskaj odpowiednie proporcje obrazu dla maksymalnego zasięgu.",
    "intro": "Pinterest to platforma wizualnego odkrywania, gdzie wyższe obrazy (proporcje 2:3) działają najlepiej — zajmują więcej miejsca w aktualnościach. Oto zalecane wymiary dla wszystkich typów treści na Pinterest.",
    "formats": [
      {
        "type": "Standardowy Pin (pionowy)",
        "width": 1000,
        "height": 1500,
        "ratio": "2:3",
        "notes": "Zalecane — najlepszy zasięg i zaangażowanie"
      },
      {
        "type": "Kwadratowy Pin",
        "width": 1000,
        "height": 1000,
        "ratio": "1:1",
        "notes": "Działa dobrze; mniej miejsca pionowego niż pionowy"
      },
      {
        "type": "Wysoki Pin",
        "width": 1000,
        "height": 2100,
        "ratio": "1:2.1",
        "notes": "Maksymalna wysokość; używaj ostrożnie — może zostać przycięty"
      },
      {
        "type": "Pin pomysłu",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Format historii wielostronicowej; pionowy na cały ekran"
      },
      {
        "type": "Zdjęcie profilowe",
        "width": 165,
        "height": 165,
        "ratio": "1:1",
        "notes": "Przycięcie do koła; obiekt powinien być wyśrodkowany"
      }
    ],
    "tips": [
      "Użyj 1000×1500 (2:3) dla standardowych pinów — to idealny rozmiar dla widoczności w aktualnościach",
      "Unikaj proporcji wyższych niż 1:2.1 — Pinterest może przyciąć zbyt wysokie obrazy",
      "Dodaj nakładkę tekstową w górnej środkowej części pina — unikaj dolnych 100px, gdzie wyświetlana jest domena źródłowa",
      "Zapisuj piny w formacie JPEG dla zdjęć (maks. 20MB) lub PNG dla grafik z przezroczystością",
      "Piny pomysłów (9:16) działają inaczej niż standardowe piny — są bardziej podobne do Stories"
    ],
    "faq": [
      {
        "q": "Jaki jest najlepszy rozmiar pina na Pinterest?",
        "a": "Zalecany rozmiar pina na Pinterest to 1000×1500 pikseli (proporcje 2:3). Ten pionowy format zajmuje więcej miejsca pionowego w aktualnościach, zwiększając widoczność i współczynnik klikalności."
      },
      {
        "q": "Czy mogę użyć kwadratowego obrazu na Pinterest?",
        "a": "Tak, kwadratowe piny 1:1 (np. 1000×1000) są obsługiwane. Jednak piny pionowe (2:3) zazwyczaj działają lepiej, ponieważ zajmują więcej miejsca na ekranie w układzie mozaikowym."
      },
      {
        "q": "Czym jest Pin pomysłu na Pinterest?",
        "a": "Piny pomysłów (dawniej Piny Story) to wielostronicowe, pionowe treści na cały ekran (9:16, 1080×1920). Nie prowadzą do zewnętrznych stron internetowych i są przeznaczone do natywnych treści w ramach Pinterest."
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
    "title": "Czym są proporcje obrazu? Przewodnik dla początkujących",
    "description": "Jasne, przyjazne dla początkujących wyjaśnienie proporcji obrazu: co to oznacza, jak się ją zapisuje, dlaczego jest ważna dla ekranów i obrazów oraz jak jej używać.",
    "intro": "Proporcje obrazu to jeden z tych terminów, który brzmi technicznie, ale w rzeczywistości jest dość prosty, gdy się go zrozumie. Niezależnie od tego, czy zmieniasz rozmiar zdjęcia na Instagram, konfigurujesz wideo na YouTube, czy kupujesz nowy monitor, proporcje obrazu określają kształt Twojego obrazu lub ekranu. Ten przewodnik wyjaśnia wszystko, co musisz wiedzieć.",
    "sections": [
      {
        "heading": "Co oznaczają proporcje obrazu?",
        "body": "Proporcje obrazu to proporcjonalny związek między szerokością a wysokością obrazu, ekranu lub klatki wideo. Zapisuje się je jako dwie liczby oddzielone dwukropkiem — na przykład 16:9 lub 4:3. Pierwsza liczba to szerokość, a druga to wysokość. Proporcja 16:9 oznacza, że na każde 16 jednostek szerokości przypada 9 jednostek wysokości. Rzeczywisty rozmiar nie ma znaczenia — obraz o wymiarach 160×90 pikseli i obraz o wymiarach 3840×2160 pikseli mają proporcje 16:9, ponieważ mają te same proporcje."
      },
      {
        "heading": "Dlaczego proporcje obrazu są ważne?",
        "body": "Proporcje obrazu są ważne zawsze, gdy wyświetlasz, drukujesz lub udostępniasz treści wizualne. Jeśli proporcje Twojego obrazu nie pasują do proporcji wyświetlacza lub kontenera, dzieje się jedna z dwóch rzeczy:",
        "list": [
          "Letterboxing / Pillarboxing — Pojawiają się czarne pasy, aby wypełnić pustą przestrzeń",
          "Kadrowanie — Obraz jest przycinany, aby pasował, a część treści zostaje utracona",
          "Rozciąganie — Obraz jest zniekształcony, aby wypełnić klatkę (najmniej pożądane)"
        ]
      },
      {
        "heading": "Popularne proporcje obrazu i ich zastosowania",
        "body": "Różne branże i platformy ustandaryzowały różne proporcje obrazu. Oto najważniejsze z nich, które warto znać:",
        "table": {
          "headers": [
            "Proporcje",
            "Dziesiętne",
            "Typowe zastosowanie"
          ],
          "rows": [
            [
              "16:9",
              "1.78:1",
              "YouTube, Netflix, telewizory, monitory, prezentacje"
            ],
            [
              "9:16",
              "0.56:1",
              "TikTok, Instagram Reels, YouTube Shorts, Stories"
            ],
            [
              "1:1",
              "1.00:1",
              "Posty na Instagramie, zdjęcia profilowe, okładki albumów"
            ],
            [
              "4:5",
              "0.80:1",
              "Pionowe posty na Instagramie (maksymalna wysokość w feedzie)"
            ],
            [
              "4:3",
              "1.33:1",
              "iPady, starsze telewizory, PowerPoint, aparaty DSLR"
            ],
            [
              "3:2",
              "1.50:1",
              "Aparaty DSLR, wydruki 4×6, film 35mm"
            ],
            [
              "2.39:1",
              "2.39:1",
              "Filmy kinowe cinemascope"
            ]
          ]
        }
      },
      {
        "heading": "Jak obliczyć proporcje obrazu",
        "body": "Aby znaleźć proporcje obrazu dowolnego obrazu, podziel zarówno szerokość, jak i wysokość przez ich Największy Wspólny Dzielnik (NWD). Na przykład, obraz o wymiarach 1920×1080 pikseli: obie liczby są podzielne przez 120, co daje 16:9. Nasz darmowy kalkulator robi to automatycznie — wystarczy wprowadzić szerokość i wysokość."
      },
      {
        "heading": "Proporcje obrazu a rozdzielczość",
        "body": "Proporcje obrazu i rozdzielczość są ze sobą powiązane, ale nie są tym samym. Rozdzielczość odnosi się do całkowitej liczby pikseli (np. 1920×1080). Proporcje obrazu odnoszą się do kształtu (np. 16:9). Dwa obrazy mogą mieć te same proporcje obrazu, ale zupełnie inną rozdzielczość — na przykład 640×360 i 3840×2160 mają proporcje 16:9, ale znacznie różnią się liczbą pikseli i jakością."
      }
    ],
    "conclusion": "Zrozumienie proporcji obrazu pomaga tworzyć obrazy i filmy, które wyglądają dokładnie tak, jak zamierzono, na każdym ekranie i platformie. Skorzystaj z naszego darmowego kalkulatora proporcji obrazu, aby natychmiast konwertować wymiary, identyfikować proporcje i zmieniać rozmiar obrazów, zachowując prawidłowe proporcje."
  },
  "how-to-calculate-aspect-ratio": {
    "title": "Jak obliczyć proporcje obrazu: Kompletny przewodnik",
    "description": "Dowiedz się, jak krok po kroku obliczyć proporcje obrazu: używając metody GCD, wzoru oraz naszego darmowego kalkulatora online. Zawiera przykłady.",
    "intro": "Umiejętność obliczania proporcji obrazu to podstawowa umiejętność dla każdego, kto pracuje z obrazami, wideo lub projektowaniem. Ten przewodnik omawia matematykę stojącą za tym, najszybsze metody ręczne oraz sposób korzystania z naszego darmowego kalkulatora dla natychmiastowych wyników.",
    "sections": [
      {
        "heading": "Wzór na proporcje obrazu",
        "body": "Proporcje obrazu dowolnego prostokąta to po prostu: Szerokość ÷ Wysokość. Aby wyrazić je jako czysty stosunek W:H (np. 16:9 zamiast 1.778:1), musisz znaleźć Największy Wspólny Dzielnik (GCD) szerokości i wysokości, a następnie podzielić obie wartości przez niego."
      },
      {
        "heading": "Krok po kroku: Jak znaleźć proporcje obrazu",
        "body": "Oto jak ręcznie obliczyć proporcje obrazu dowolnego obrazu:",
        "list": [
          "Krok 1: Zapisz szerokość i wysokość w pikselach (np. 1920 i 1080)",
          "Krok 2: Znajdź Największy Wspólny Dzielnik (GCD) obu liczb. Dla 1920 i 1080, GCD wynosi 120.",
          "Krok 3: Podziel obie liczby przez GCD. 1920 ÷ 120 = 16; 1080 ÷ 120 = 9.",
          "Krok 4: Zapisz wynik jako W:H — w tym przypadku, 16:9."
        ]
      },
      {
        "heading": "Przykłady",
        "body": "Oto kilka typowych wymiarów i ich proporcji obrazu:",
        "table": {
          "headers": [
            "Szerokość",
            "Wysokość",
            "GCD",
            "Proporcje obrazu"
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
        "heading": "Jak obliczyć brakujący wymiar",
        "body": "Jeśli znasz oryginalne wymiary i chcesz znaleźć nowy rozmiar w tych samych proporcjach, użyj tego wzoru: Nowa Wysokość = (Oryginalna Wysokość ÷ Oryginalna Szerokość) × Nowa Szerokość. Na przykład, aby znaleźć wysokość obrazu 16:9 o szerokości 1280px: (1080 ÷ 1920) × 1280 = 720px. Nasz kalkulator wykonuje to automatycznie w obu kierunkach."
      },
      {
        "heading": "Najszybsza metoda: Użyj kalkulatora",
        "body": "Ręczne obliczanie proporcji obrazu jest proste dla liczb całkowitych, ale szybko staje się żmudne dla nieregularnych wymiarów, takich jak 1847×923. Nasz darmowy Kalkulator Proporcji Obrazu natychmiast obsługuje dowolną szerokość i wysokość — wprowadź swoje wartości i uzyskaj uproszczony stosunek, wartość dziesiętną, najbliższe standardowe dopasowanie oraz wartości CSS za jednym kliknięciem."
      }
    ],
    "conclusion": "Obliczanie proporcji obrazu jest łatwe, gdy zrozumiesz metodę GCD. Do codziennego użytku nasz darmowy kalkulator zaoszczędzi Twój czas i dostarczy dodatkowych informacji, takich jak analiza jakości, rozmiary wydruku i eksport CSS. Wypróbuj go teraz na aspect-ratio-calculator.com."
  },
  "aspect-ratio-social-media-guide-2026": {
    "title": "Rozmiary i proporcje obrazów w mediach społecznościowych: Kompletny przewodnik 2026",
    "description": "Wszystkie rozmiary i proporcje obrazów w mediach społecznościowych na rok 2026: Instagram, YouTube, TikTok, X, LinkedIn, Facebook i Pinterest. Zachowaj ten przewodnik w zakładkach.",
    "intro": "Platformy mediów społecznościowych mają swoje własne zalecane wymiary obrazów, które regularnie się zmieniają. Użycie niewłaściwego rozmiaru oznacza, że Twoje obrazy zostaną przycięte, rozmazane lub źle wyświetlone. Ten przewodnik obejmuje każdą główną platformę na rok 2026.",
    "sections": [
      {
        "heading": "Dlaczego rozmiary obrazów mają znaczenie w mediach społecznościowych",
        "body": "Każda platforma ma inny układ kanału, obszar wyświetlania i algorytm kompresji. Obraz zoptymalizowany dla jednej platformy może wyglądać rozmazany, przycięty lub rozciągnięty na innej. Przesyłanie obrazów w dokładnie zalecanych wymiarach zapewnia:",
        "list": [
          "Brak nieoczekiwanego przycinania kluczowej zawartości",
          "Maksymalna ostrość — brak skalowania w górę przez platformę",
          "Szybsze czasy ładowania — prawidłowe rozmiary zmniejszają rozmiar pliku",
          "Lepsza wydajność w algorytmach rekomendacji"
        ]
      },
      {
        "heading": "Rozmiary obrazów na Instagramie 2026",
        "body": "Instagram obsługuje trzy proporcje dla postów w kanale, a także Stories i Reels. W przypadku postów w kanale, pionowy format 4:5 (1080×1350) zapewnia najwięcej przestrzeni pionowej — idealny do maksymalizacji widoczności podczas przewijania.",
        "table": {
          "headers": [
            "Format",
            "Wymiary",
            "Proporcje"
          ],
          "rows": [
            [
              "Post w kanale (Kwadrat)",
              "1080 × 1080",
              "1:1"
            ],
            [
              "Post w kanale (Pionowy)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Post w kanale (Poziomy)",
              "1080 × 566",
              "1.91:1"
            ],
            [
              "Relacja / Rolka",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Zdjęcie profilowe",
              "320 × 320",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Wymiary YouTube 2026",
        "body": "YouTube to platforma 16:9. Projektuj miniatury w rozmiarze 1280×720 z pogrubionym, czytelnym tekstem — Twoja miniatura często decyduje o tym, czy ktoś kliknie.",
        "table": {
          "headers": [
            "Format",
            "Wymiary",
            "Proporcje"
          ],
          "rows": [
            [
              "Wideo (1080p)",
              "1920 × 1080",
              "16:9"
            ],
            [
              "Shortsy",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Miniatura",
              "1280 × 720",
              "16:9"
            ],
            [
              "Baner kanału",
              "2560 × 1440",
              "16:9"
            ]
          ]
        }
      },
      {
        "heading": "Rozmiary wideo na TikTok 2026",
        "body": "TikTok jest całkowicie pionowy — zawsze używaj formatu 9:16 w rozdzielczości 1080×1920 dla najlepszej jakości. Kluczową zawartość umieszczaj na środku kadru i z dala od dolnych 20%, gdzie pojawiają się napisy i elementy interfejsu użytkownika.",
        "table": {
          "headers": [
            "Format",
            "Wymiary",
            "Proporcje"
          ],
          "rows": [
            [
              "Wideo (Zalecane)",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Zdjęcie profilowe",
              "200 × 200",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Szybki przegląd: Wszystkie platformy",
        "body": "Oto tabela szybkiego przeglądu najczęściej używanych rozmiarów obrazów w mediach społecznościowych w 2026 roku:",
        "table": {
          "headers": [
            "Platforma",
            "Format",
            "Wymiary",
            "Proporcje"
          ],
          "rows": [
            [
              "Instagram",
              "Post w kanale (Pionowy)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Instagram",
              "Relacja / Rolka",
              "1080 × 1920",
              "9:16"
            ],
            [
              "YouTube",
              "Wideo",
              "1920 × 1080",
              "16:9"
            ],
            [
              "YouTube",
              "Miniatura",
              "1280 × 720",
              "16:9"
            ],
            [
              "TikTok",
              "Wideo",
              "1080 × 1920",
              "9:16"
            ],
            [
              "X / Twitter",
              "Obraz do posta",
              "1600 × 900",
              "16:9"
            ],
            [
              "LinkedIn",
              "Obraz do posta",
              "1200 × 628",
              "1.91:1"
            ],
            [
              "Facebook",
              "Obraz do posta",
              "1200 × 630",
              "1.91:1"
            ],
            [
              "Pinterest",
              "Standardowy Pin",
              "1000 × 1500",
              "2:3"
            ]
          ]
        }
      }
    ],
    "conclusion": "Dodaj ten przewodnik do zakładek i użyj naszego darmowego Kalkulatora Proporcji Obrazu, aby zweryfikować lub przekonwertować dowolne wymiary w kilka sekund. Wprowadź aktualny rozmiar obrazu i docelowe wymiary platformy, aby sprawdzić jakość, obliczyć wartości CSS i natychmiast udostępnić wyniki."
  },
  "16-9-vs-4-3-aspect-ratio": {
    "title": "16:9 vs 4:3 Aspect Ratio — Których użyć?",
    "description": "Jasne porównanie proporcji obrazu 16:9 i 4:3: kiedy używać każdej z nich, ich historia, kluczowe różnice oraz przykłady rozmiarów pikseli.",
    "intro": "16:9 i 4:3 to dwie najbardziej historycznie znaczące proporcje obrazu w wideo i fotografii. Jeśli kiedykolwiek widziałeś czarne pasy na swoim ekranie — po bokach lub na górze i na dole — to już spotkałeś się z różnicą między nimi. Oto kompletne porównanie.",
    "sections": [
      {
        "heading": "Kluczowa różnica",
        "body": "16:9 jest szerszy i bardziej prostokątny (proporcja 1.78:1), podczas gdy 4:3 jest bardziej kwadratowy (proporcja 1.33:1). Obraz 16:9 jest o około 33% szerszy niż obraz 4:3 o tej samej wysokości. Ta różnica może wydawać się niewielka, ale jest bardzo zauważalna na ekranie."
      },
      {
        "heading": "Historia: Skąd się wzięły?",
        "body": "4:3 był oryginalnym standardem telewizyjnym, przyjętym w latach 30. XX wieku, ponieważ ściśle odpowiadał proporcjom obrazu filmu kinowego 35 mm z tamtego okresu. 16:9 został wprowadzony pod koniec lat 80. jako kompromisowy standard szerokoekranowy, który mógł wyświetlać zarówno treści telewizyjne 4:3 (z małymi paskami bocznymi), jak i treści kinowe 2.39:1 (z małymi paskami na górze/na dole) z minimalną ilością czarnej przestrzeni. ITU przyjęło 16:9 jako standard HDTV w 1987 roku."
      },
      {
        "heading": "Kiedy używać 16:9",
        "body": "Używaj 16:9, gdy:",
        "list": [
          "Tworzysz treści wideo dla YouTube, Netflix lub telewizji",
          "Tworzysz nowoczesne prezentacje (Google Slides, PowerPoint 2016 i nowsze domyślnie używają 16:9)",
          "Projektujesz dla monitorów szerokoekranowych i laptopów",
          "Nagrywasz wideo nowoczesnym smartfonem lub aparatem",
          "Tworzysz miniatury YouTube"
        ]
      },
      {
        "heading": "Kiedy używać 4:3",
        "body": "Używaj 4:3, gdy:",
        "list": [
          "Projektujesz dla wyświetlaczy iPada (które używają 4:3)",
          "Tworzysz prezentacje dla starszych projektorów",
          "Dopasowujesz do starszych treści wideo",
          "Drukujesz w standardowych proporcjach fotograficznych (niektóre aparaty)",
          "Pracujesz z nagraniami z CCTV lub monitoringu"
        ]
      },
      {
        "heading": "Porównanie rozmiarów pikseli",
        "body": "Oto popularne rozdzielczości dla obu proporcji przy równoważnej liczbie megapikseli:",
        "table": {
          "headers": [
            "Jakość",
            "Rozmiar 16:9",
            "Rozmiar 4:3"
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
    "conclusion": "Dla większości nowoczesnych treści wideo i ekranowych, 16:9 jest właściwym wyborem. Dla treści skoncentrowanych na tabletach lub kompatybilności ze starszymi systemami, 4:3 może być bardziej odpowiednie. W razie wątpliwości skorzystaj z naszego darmowego kalkulatora proporcji obrazu, aby przeliczyć między nimi i natychmiast podglądnąć wynik."
  },
  "how-to-resize-image-without-losing-quality": {
    "title": "Jak zmienić rozmiar obrazu bez utraty jakości",
    "description": "Poznaj techniki zmiany rozmiaru obrazów bez utraty jakości: zmniejszanie (downscaling) vs. powiększanie (upscaling), najlepsze formaty plików, wyjaśnienie DPI i rekomendacje narzędzi.",
    "intro": "Zmiana rozmiaru obrazu brzmi prosto, ale wykonana nieprawidłowo skutkuje rozmytymi, rozpikselowanymi lub zniekształconymi zdjęciami. Ten przewodnik wyjaśnia, kiedy i jak można zmieniać rozmiar obrazów bez widocznej utraty jakości.",
    "sections": [
      {
        "heading": "Zmniejszanie (Downscaling) vs. Powiększanie (Upscaling)",
        "body": "Istnieją dwa kierunki zmiany rozmiaru obrazu, które mają bardzo różne konsekwencje dla jakości. Zmniejszanie (downscaling) (zmniejszanie obrazu) prawie zawsze zachowuje jakość — po prostu odrzucasz piksele. Powiększanie (upscaling) (zwiększanie obrazu) to miejsce, gdzie pojawiają się problemy z jakością, ponieważ oprogramowanie musi wymyślić dane pikseli, które nie istnieją w oryginale."
      },
      {
        "heading": "Złota zasada: Zawsze zaczynaj od najwyższej rozdzielczości",
        "body": "Utrata jakości jest w większości nieodwracalna. Jeśli zaczniesz od małego obrazu i potrzebujesz dużego, zawsze zauważysz pogorszenie jakości. Najlepszą praktyką jest:",
        "list": [
          "Zawsze zachowuj oryginalny plik o wysokiej rozdzielczości",
          "Eksportuj lub zapisz osobną kopię w docelowym rozmiarze",
          "Nigdy nie zapisuj ponownie skompresowanego JPEG-a wielokrotnie — każde zapisanie pogarsza jakość",
          "Eksportuj z pliku głównego za każdym razem, gdy potrzebujesz nowego rozmiaru"
        ]
      },
      {
        "heading": "O ile można powiększyć (upscale)?",
        "body": "Ogólnie rzecz biorąc: powiększanie (upscaling) do 110–120% jest zazwyczaj niezauważalne dla większości widzów. Powiększanie (upscaling) o 150–200% powoduje zauważalną miękkość. Powiększanie (upscaling) powyżej 200% zazwyczaj powoduje wyraźną pikselizację i rozmycie. Narzędzia do powiększania (upscaling) oparte na sztucznej inteligencji (takie jak Topaz Gigapixel, Adobe Firefly i podobne) mogą czasami dawać akceptowalne wyniki przy powiększeniu 2–4×, inteligentnie generując szczegóły."
      },
      {
        "heading": "Zachowanie proporcji obrazu (Aspect Ratio) podczas zmiany rozmiaru",
        "body": "Jednym z najczęstszych błędów wpływających na jakość jest przypadkowa zmiana proporcji obrazu (aspect ratio) podczas zmiany rozmiaru — rozciąganie lub ściskanie obrazu. Zawsze zmieniaj rozmiar proporcjonalnie, blokując proporcje obrazu w narzędziu do edycji. Nasz darmowy kalkulator pomaga znaleźć prawidłową docelową wysokość dla dowolnej nowej szerokości (lub odwrotnie), zapewniając, że zmiana rozmiaru zachowa oryginalne proporcje."
      },
      {
        "heading": "Najlepsze formaty plików dla jakości",
        "body": "Format pliku znacząco wpływa na jakość po zmianie rozmiaru:",
        "list": [
          "PNG — Kompresja bezstratna; idealny do grafik, ilustracji i zrzutów ekranu, gdzie ostrość ma znaczenie",
          "JPEG — Kompresja stratna; idealny do zdjęć; ustaw jakość na 80–90% dla najlepszego balansu rozmiaru/jakości",
          "WebP — Nowoczesny format, który osiąga lepszą kompresję niż JPEG przy równoważnej jakości; obsługiwany przez wszystkie nowoczesne przeglądarki",
          "TIFF — Nieskompresowany lub bezstratny; używany w profesjonalnych procesach druku i fotografii"
        ]
      },
      {
        "heading": "DPI i jakość druku",
        "body": "DPI (dots per inch) jest istotne tylko dla druku — ekrany je ignorują. Do druku: użyj 300 DPI dla ostrych wydruków zdjęć, 150 DPI dla akceptowalnej jakości i 72–96 DPI do użytku wyłącznie na ekranie. Aby obliczyć wymiary w pikselach potrzebne do wydruku: pomnóż rozmiar wydruku w calach przez DPI. Dla wydruku 8×10 cali przy 300 DPI: 2400×3000 pikseli."
      }
    ],
    "conclusion": "Najlepszym sposobem na zmianę rozmiaru bez utraty jakości jest zawsze zmniejszanie (downscaling) z oryginalnego pliku o wysokiej rozdzielczości, zachowanie proporcji obrazu (aspect ratio) i eksportowanie w odpowiednim formacie. Użyj naszego Kalkulatora Proporcji Obrazu (Aspect Ratio Calculator), aby znaleźć dokładne docelowe wymiary, które zachowają Twoje oryginalne proporcje — bez zgadywania."
  }
};
