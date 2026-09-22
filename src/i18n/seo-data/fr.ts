import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";

export const RATIO_DATA: Record<string, RatioData> = {
  "16-9": {
    "label": "16:9",
    "w": 16,
    "h": 9,
    "title": "Format 16:9 — Dimensions, Pixels et Calculateur Gratuit",
    "description": "Tout sur le format 16:9 : dimensions courantes (720p, 1080p, 4K, 8K), cas d'utilisation et calculateur gratuit. Le standard pour la vidéo, la TV et les moniteurs.",
    "explanation": "16:9 (seize-neuvièmes) est le format d'image panoramique universellement adopté pour la vidéo HD, le streaming et les écrans modernes. Pour chaque 16 unités de largeur, la hauteur est de 9 unités, produisant un rectangle large et cinématographique. Il a remplacé l'ancien standard 4:3 au début des années 2000 et est désormais le format par défaut pour pratiquement tout le contenu vidéo, les moniteurs et les diffusions télévisées dans le monde entier.",
    "useCases": [
      "Vidéos et miniatures YouTube",
      "Netflix, Disney+ et plateformes de streaming",
      "Télévision HD et 4K",
      "Moniteurs PC et écrans d'ordinateur portable",
      "Présentations PowerPoint et Google Slides",
      "Arrière-plans Zoom et visioconférence",
      "Cinématiques de jeux vidéo"
    ],
    "dimensions": [
      {
        "name": "nHD",
        "width": 640,
        "height": 360,
        "use": "Web basse résolution, secours mobile"
      },
      {
        "name": "HD (720p)",
        "width": 1280,
        "height": 720,
        "use": "Vidéo web, appareils anciens, minimum YouTube"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1920,
        "height": 1080,
        "use": "Streaming standard, YouTube, diffusion TV"
      },
      {
        "name": "QHD (1440p)",
        "width": 2560,
        "height": 1440,
        "use": "Moniteurs haute résolution, gaming"
      },
      {
        "name": "4K UHD",
        "width": 3840,
        "height": 2160,
        "use": "Streaming premium, vidéo professionnelle, TV 4K"
      },
      {
        "name": "8K UHD",
        "width": 7680,
        "height": 4320,
        "use": "Écrans du futur, archivage, masters de diffusion"
      }
    ],
    "faq": [
      {
        "q": "Qu'est-ce que le 16:9 en pixels ?",
        "a": "Les dimensions en pixels 16:9 les plus courantes sont 1280×720 (720p HD), 1920×1080 (1080p FHD), 2560×1440 (1440p QHD) et 3840×2160 (4K UHD). Toute largeur divisible donnant un rapport 16:9 fonctionne — par exemple 640×360 ou 800×450."
      },
      {
        "q": "Pourquoi le 16:9 est-il le standard pour la vidéo ?",
        "a": "Le 16:9 a été choisi comme standard international de la TVHD dans les années 80-90 car il constitue un compromis mathématique entre l'ancien format TV 4:3 et le format cinéma plus large 2.39:1. Il minimise le letterboxing lors de l'affichage de contenu provenant de l'une ou l'autre source."
      },
      {
        "q": "Est-ce que 1920×1080 est la même chose que 16:9 ?",
        "a": "Oui. 1920 ÷ 16 = 120, et 1080 ÷ 9 = 120, donc les deux dimensions partagent le même facteur. 1920×1080 (Full HD / 1080p) est la résolution 16:9 la plus utilisée."
      },
      {
        "q": "Quel est le format 16:9 pour une résolution 4K ?",
        "a": "Le 4K UHD (Ultra High Definition) en 16:9 est de 3840×2160 pixels — exactement quatre fois la surface de 1920×1080. Le Cinema 4K (DCI 4K) est 4096×2160, ce qui correspond à un rapport légèrement différent (1.9:1)."
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
    "title": "Format 9:16 — TikTok, Reels et Dimensions Vidéo Verticale",
    "description": "Guide complet du format 9:16 : dimensions en pixels, cas d'utilisation pour TikTok, Instagram Reels, YouTube Shorts et un calculateur gratuit.",
    "explanation": "9:16 est la contrepartie verticale (portrait) du format panoramique 16:9. Il remplit parfaitement l'écran d'un smartphone tenu à la verticale, ce qui en fait le format dominant pour les vidéos courtes sur les réseaux sociaux. TikTok, Instagram Reels, YouTube Shorts et Snapchat utilisent tous le 9:16 comme canevas principal.",
    "useCases": [
      "Vidéos TikTok",
      "Reels et Stories Instagram",
      "YouTube Shorts",
      "Vidéos Snapchat",
      "Reels et Stories Facebook",
      "Épingles vidéo Pinterest",
      "Publicité optimisée pour mobile"
    ],
    "dimensions": [
      {
        "name": "SD Mobile",
        "width": 540,
        "height": 960,
        "use": "Mobiles basse résolution, appareils anciens"
      },
      {
        "name": "HD Mobile",
        "width": 720,
        "height": 1280,
        "use": "Qualité mobile standard"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1080,
        "height": 1920,
        "use": "TikTok, Instagram Reels, YouTube Shorts — recommandé"
      },
      {
        "name": "QHD Mobile",
        "width": 1440,
        "height": 2560,
        "use": "Enregistrement smartphone haut de gamme"
      }
    ],
    "faq": [
      {
        "q": "Quelle résolution dois-je utiliser pour TikTok ?",
        "a": "TikTok recommande 1080×1920 pixels (format 9:16) pour la meilleure qualité. Il s'agit de la vidéo verticale Full HD. Utiliser une résolution inférieure peut entraîner des artefacts de compression après le téléversement."
      },
      {
        "q": "Le 9:16 est-il la même chose que le mode portrait ?",
        "a": "Oui. Le 9:16 est le format vidéo portrait (vertical) standard, équivalent à tourner un cadre panoramique 16:9 sur le côté. Il correspond à l'orientation naturelle d'un smartphone tenu à une main."
      },
      {
        "q": "Puis-je publier une vidéo 9:16 sur YouTube ?",
        "a": "Oui — YouTube Shorts est spécifiquement conçu pour les vidéos verticales 9:16. Les téléversements réguliers sur YouTube acceptent également le 9:16, mais ils s'afficheront avec des bandes noires (pillarboxing) sur ordinateur lorsqu'ils sont intégrés dans un lecteur 16:9."
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
    "title": "Format 4:3 — Dimensions d'Écran Classiques et Calculateur",
    "description": "Le format 4:3 expliqué : tailles de pixels courantes, où il est encore utilisé aujourd'hui (tablettes, présentations, cinéma) et un calculateur gratuit.",
    "explanation": "4:3 (quatre-tiers) était le standard pour les téléviseurs et les moniteurs d'ordinateur des années 1930 jusqu'au début des années 2000. Il produit un rectangle presque carré qui correspond aux proportions des images du film 35mm. Bien que largement remplacé par le 16:9 pour la vidéo, il reste pertinent pour les écrans iPad, les présentations PowerPoint et certains formats photographiques.",
    "useCases": [
      "Écrans iPad et tablettes",
      "Télévision ancienne et vidéosurveillance",
      "Présentations PowerPoint / Keynote (ancien format)",
      "Appareils photo numériques et photographie",
      "Brochures imprimées et documents au format A4",
      "Effets vidéo et cinéma rétro"
    ],
    "dimensions": [
      {
        "name": "QVGA",
        "width": 320,
        "height": 240,
        "use": "Appareils anciens, écrans embarqués"
      },
      {
        "name": "VGA",
        "width": 640,
        "height": 480,
        "use": "Web classique, standard webcam"
      },
      {
        "name": "SVGA",
        "width": 800,
        "height": 600,
        "use": "Moniteurs anciens, projecteurs"
      },
      {
        "name": "XGA",
        "width": 1024,
        "height": 768,
        "use": "iPad (1re-4e génération), projecteurs standard"
      },
      {
        "name": "SXGA",
        "width": 1280,
        "height": 960,
        "use": "Appareils photo numériques, photographie"
      },
      {
        "name": "UXGA",
        "width": 1600,
        "height": 1200,
        "use": "Moniteurs professionnels, images qualité impression"
      }
    ],
    "faq": [
      {
        "q": "Quel est le format 4:3 en pixels ?",
        "a": "Les dimensions en pixels 4:3 courantes incluent 640×480 (VGA), 800×600 (SVGA), 1024×768 (XGA) et 1280×960. Toute résolution où largeur ÷ hauteur = 1,333... suit le format 4:3."
      },
      {
        "q": "Le 4:3 est-il encore utilisé ?",
        "a": "Oui. L'iPad utilise un écran 4:3 (2048×1536 sur les modèles Retina). De nombreux modèles PowerPoint, appareils DSLR et caméras de surveillance anciennes utilisent également le 4:3. Il est moins courant pour la vidéo, mais reste pertinent pour les images fixes et les présentations."
      },
      {
        "q": "Quelle est la différence entre 4:3 et 16:9 ?",
        "a": "Le 4:3 est plus carré (rapport de 1,33:1) tandis que le 16:9 est plus large et rectangulaire (rapport de 1,78:1). Le 16:9 est le standard moderne de la TV et de la vidéo ; le 4:3 est l'ancien standard qui l'a précédé. Lorsqu'on regarde du contenu 4:3 sur un écran 16:9, des bandes noires (pillarboxing) apparaissent sur les côtés."
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
    "title": "Format 1:1 — Dimensions Carrées pour Instagram et au-delà",
    "description": "Le format carré 1:1 : tailles en pixels, meilleurs usages sur Instagram et les réseaux sociaux, et un calculateur de format gratuit.",
    "explanation": "1:1 est un carré parfait : la largeur et la hauteur sont identiques. Instagram a popularisé le format carré pour la photographie sur les réseaux sociaux, et il reste un incontournable pour les photos de profil, les pochettes d'album et les publications dans le fil sur toutes les principales plateformes.",
    "useCases": [
      "Publications dans le fil Instagram (format original)",
      "Photos de profil sur toutes les plateformes",
      "Pochettes d'album et couvertures musicales",
      "Icônes d'applications et favicons",
      "Photographie de produits pour le e-commerce",
      "Images de publications Facebook et LinkedIn"
    ],
    "dimensions": [
      {
        "name": "Small",
        "width": 400,
        "height": 400,
        "use": "Miniatures de profil, icônes d'applications"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1080,
        "use": "Publication dans le fil Instagram (recommandé)"
      },
      {
        "name": "High Res",
        "width": 2048,
        "height": 2048,
        "use": "Impression, photographie professionnelle"
      },
      {
        "name": "4K Square",
        "width": 4096,
        "height": 4096,
        "use": "Impression ultra haute résolution, archivage"
      }
    ],
    "faq": [
      {
        "q": "Quelle est la meilleure résolution 1:1 pour Instagram ?",
        "a": "Instagram recommande 1080×1080 pixels pour les publications carrées dans le fil. Le minimum est 320×320, mais 1080×1080 est le standard pour un affichage net sur tous les appareils."
      },
      {
        "q": "Un format 1:1 est-il la même chose qu'un carré ?",
        "a": "Oui, exactement. Un format d'image 1:1 signifie que la largeur est égale à la hauteur, produisant un carré parfait quel que soit le nombre réel de pixels."
      },
      {
        "q": "Pourquoi Instagram utilise-t-il le 1:1 ?",
        "a": "Instagram a été conçu à l'origine autour de la photographie mobile et a choisi le format carré 1:1 pour standardiser la grille du fil. Bien qu'ils aient ensuite ajouté les formats portrait (4:5) et paysage (1.91:1), le carré 1:1 reste le format classique d'Instagram."
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
    "title": "Format 4:5 — Dimensions Portrait pour Instagram et Calculateur",
    "description": "Le format 4:5 pour les publications portrait sur Instagram : les meilleures tailles en pixels, pourquoi il occupe plus d'espace dans le fil, et un calculateur gratuit.",
    "explanation": "4:5 est un format portrait (plus haut que large) qui occupe l'espace vertical maximum autorisé par le fil Instagram, offrant à votre image plus d'espace à l'écran qu'une publication carrée ou paysage. Avec un rapport de 0,8:1, il est légèrement plus large qu'un écran de téléphone 9:16, ce qui le rend idéal pour les portraits, les photos de produits et la photographie éditoriale.",
    "useCases": [
      "Publications dans le fil Instagram (portrait — hauteur maximale)",
      "Photographie pour les réseaux sociaux",
      "Photographie de portrait pour l'impression",
      "Épingles Pinterest (format secondaire)",
      "Publications d'images portrait sur Facebook"
    ],
    "dimensions": [
      {
        "name": "Minimum",
        "width": 600,
        "height": 750,
        "use": "Minimum pour une qualité acceptable sur Instagram"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1350,
        "use": "Publication portrait sur Instagram (recommandé)"
      },
      {
        "name": "High Res",
        "width": 2160,
        "height": 2700,
        "use": "Images portrait qualité impression"
      }
    ],
    "faq": [
      {
        "q": "Pourquoi utiliser le 4:5 plutôt que le 9:16 pour les publications Instagram ?",
        "a": "Instagram recadre les images 9:16 pour le fil en 4:5 (le format portrait maximum autorisé pour les publications du fil). Si vous utilisez le 4:5, vous obtenez l'image la plus haute autorisée dans le fil sans perdre de contenu au recadrage. Le 9:16 est réservé aux Stories et aux Reels."
      },
      {
        "q": "Quelles sont les dimensions en pixels pour le 4:5 sur Instagram ?",
        "a": "La taille recommandée est 1080×1350 pixels. C'est la taille portrait maximale qu'Instagram autorise pour les publications du fil et elle s'affiche nettement sur tous les appareils."
      },
      {
        "q": "Le 4:5 obtient-il plus de portée sur Instagram ?",
        "a": "Une publication 4:5 occupe plus d'espace vertical dans le fil qu'une publication carrée 1:1 ou paysage 1.91:1, ce qui peut aider à capter davantage l'attention lorsque les utilisateurs font défiler. De nombreux créateurs rapportent des taux d'engagement plus élevés avec les publications portrait, bien que cela dépende du contenu."
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
    "title": "Format 3:2 — Photographie, DSLR et Dimensions d'Impression",
    "description": "Le format 3:2 pour les appareils DSLR et l'impression : dimensions courantes, origines du film 35mm et un calculateur de format gratuit.",
    "explanation": "Le format 3:2 provient du cadre du film 35mm, qui mesure 36mm × 24mm — un rapport 3:2. Il reste le format natif pour la plupart des appareils photo DSLR et hybrides, et correspond directement aux formats d'impression courants tels que 10×15 cm, 15×23 cm et 30×45 cm.",
    "useCases": [
      "Capteurs d'appareils photo DSLR et hybrides",
      "Photographie argentique 35mm",
      "Tirages 10×15 et 15×23 cm",
      "Mises en page d'albums photo",
      "Photographie de portrait professionnelle"
    ],
    "dimensions": [
      {
        "name": "6MP",
        "width": 3008,
        "height": 2000,
        "use": "DSLR d'entrée de gamme"
      },
      {
        "name": "12MP",
        "width": 4272,
        "height": 2848,
        "use": "DSLR milieu de gamme (ex. Canon 60D)"
      },
      {
        "name": "24MP",
        "width": 6000,
        "height": 4000,
        "use": "DSLR professionnel (ex. Nikon D3200)"
      },
      {
        "name": "36MP",
        "width": 7360,
        "height": 4912,
        "use": "DSLR haute résolution (ex. Nikon D800)"
      }
    ],
    "faq": [
      {
        "q": "Quels formats d'impression correspondent au format 3:2 ?",
        "a": "Les formats d'impression 3:2 standard incluent 10×15 cm (4×6 pouces), 15×23 cm (6×9 pouces), 20×30 cm (8×12 pouces), 30×45 cm (12×18 pouces) et 50×75 cm (20×30 pouces). Ces formats d'impression afficheront votre image complète sans recadrage."
      },
      {
        "q": "Quel est le format 3:2 en pixels ?",
        "a": "Toute résolution où largeur ÷ hauteur = 1,5 est un format 3:2. Exemples courants : 3000×2000, 4500×3000, 6000×4000. La plupart des appareils DSLR capturent les images nativement en 3:2."
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
    "title": "Format 21:9 — Dimensions et Calculateur pour Moniteurs Ultrawide",
    "description": "Le format ultrawide 21:9 : résolutions courantes (2560×1080, 3440×1440, 5120×2160), utilisations pour le gaming et le cinéma, et un calculateur gratuit.",
    "explanation": "21:9 (parfois appelé ultrawide) offre un champ de vision beaucoup plus large que les moniteurs standard 16:9. Il est populaire pour le gaming (éliminant le besoin de plusieurs moniteurs), la production vidéo cinématographique et les flux de travail de productivité. De nombreux films cinématographiques tournés en 2.35:1 ou 2.39:1 s'affichent de manière proche du 21:9 sur un écran ultrawide.",
    "useCases": [
      "Moniteurs gaming ultrawide",
      "Stations de travail pour le montage vidéo et l'étalonnage",
      "Productivité multi-applications",
      "Visionnage de films cinématographiques (letterboxing minimal)",
      "Simulateurs de vol et jeux de course"
    ],
    "dimensions": [
      {
        "name": "FHD Ultrawide",
        "width": 2560,
        "height": 1080,
        "use": "Gaming ultrawide d'entrée de gamme, moniteurs économiques"
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
        "use": "Station de travail professionnelle, LG 34WK95U"
      }
    ],
    "faq": [
      {
        "q": "Le 21:9 est-il vraiment 21 pour 9 ?",
        "a": "Pas exactement — le nom « 21:9 » est un label marketing. La plupart des moniteurs ultrawide ont un rapport plus proche de 64:27 (2,370:1) ou 43:18 (2,388:1). Le rapport réel dépend de la résolution spécifique (par exemple, 3440×1440 = 43:18)."
      },
      {
        "q": "Tous les jeux sont-ils compatibles avec le 21:9 ?",
        "a": "De nombreux jeux modernes prennent en charge nativement le format ultrawide 21:9. Certains titres plus anciens ou certains jeux multijoueurs restreignent le champ de vision au 16:9 pour éviter des avantages compétitifs. Consultez les paramètres du jeu ou les sites communautaires pour connaître l'état de la compatibilité ultrawide."
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
    "title": "Format 2:1 — Dimensions Panoramiques et Bannières",
    "description": "Le format 2:1 : utilisations pour la photographie panoramique, les bannières web et les en-têtes Twitter/X, avec un calculateur gratuit.",
    "explanation": "2:1 est un format panoramique large où la largeur est exactement le double de la hauteur. Il est utilisé pour la photographie panoramique de paysages, les bannières hero de pages web et certains en-têtes de réseaux sociaux. Il se situe entre le format 16:9 panoramique et les véritables formats cinématographiques.",
    "useCases": [
      "Photographie de paysages panoramiques",
      "Bannières hero et en-têtes de sites web",
      "Recadrage de photos 360°",
      "En-têtes de newsletters par e-mail",
      "Affichage numérique"
    ],
    "dimensions": [
      {
        "name": "Web Banner",
        "width": 1200,
        "height": 600,
        "use": "Bannière web standard, image OG"
      },
      {
        "name": "HD Banner",
        "width": 2000,
        "height": 1000,
        "use": "Image hero web haute résolution"
      },
      {
        "name": "Panoramic",
        "width": 4000,
        "height": 2000,
        "use": "Photographie panoramique"
      }
    ],
    "faq": [
      {
        "q": "Quelle est la différence entre 2:1 et 16:9 ?",
        "a": "Un format 2:1 (2,0:1) est plus large que le 16:9 (1,78:1). Une image 2:1 est plus panoramique — par exemple, 2000×1000 pixels contre 1920×1080 en 16:9. Le 2:1 a plus d'espace horizontal par rapport à sa hauteur."
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
    "title": "Format 5:4 — Dimensions pour l'Impression et les Moniteurs",
    "description": "Le format 5:4 : tirages 8×10, appareils moyen format et moniteurs anciens 1280×1024. Calculateur gratuit inclus.",
    "explanation": "5:4 est légèrement plus haut que le format standard 4:3. Il correspond au format d'impression 8×10 pouces (20×25 cm) utilisé dans les studios de photographie de portrait et correspond à la résolution 1280×1024 courante sur les anciens moniteurs CRT et les premiers écrans LCD.",
    "useCases": [
      "Tirages portrait 8×10 pouces (20×25 cm)",
      "Tirages photo 10×8 pouces",
      "Contenu pour moniteurs anciens 1280×1024",
      "Photographie moyen format",
      "Photographie de portrait en studio"
    ],
    "dimensions": [
      {
        "name": "SXGA",
        "width": 1280,
        "height": 1024,
        "use": "Moniteurs et projecteurs anciens"
      },
      {
        "name": "Print 8×10",
        "width": 2400,
        "height": 3000,
        "use": "Impression 8×10 pouces à 300 DPI"
      },
      {
        "name": "Print 16×20",
        "width": 4800,
        "height": 6000,
        "use": "Impression 16×20 pouces à 300 DPI"
      }
    ],
    "faq": [
      {
        "q": "Quels pixels correspondent au format 5:4 ?",
        "a": "Les tailles de pixels courantes pour le 5:4 incluent 1280×1024, 2560×2048, et toute paire de dimensions où largeur ÷ hauteur = 1,25. Un tirage 8×10 numérisé à 300 DPI produit 2400×3000 pixels (en orientation portrait, 3:2,4 = 5:4)."
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
    "title": "Tailles d'Images et Formats Instagram 2026 — Guide Complet",
    "description": "Toutes les dimensions d'images et de vidéos Instagram pour 2026 : publications du fil, Stories, Reels, photos de profil et plus. Tailles exactes en pixels et formats.",
    "intro": "Instagram prend en charge plusieurs formats d'image selon l'emplacement de votre contenu. Obtenir les bonnes dimensions garantit que vos images s'affichent nettement sans recadrage indésirable. Voici toutes les tailles officielles recommandées pour 2026.",
    "formats": [
      {
        "type": "Publication du Fil — Carrée",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Format classique ; compatible avec tous les appareils"
      },
      {
        "type": "Publication du Fil — Portrait (hauteur max)",
        "width": 1080,
        "height": 1350,
        "ratio": "4:5",
        "notes": "Occupe le plus d'espace dans le fil ; recommandé pour une visibilité maximale"
      },
      {
        "type": "Publication du Fil — Paysage",
        "width": 1080,
        "height": 566,
        "ratio": "1.91:1",
        "notes": "Image large ; moins d'espace dans le fil que le format portrait"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Verticale plein écran ; 15 secondes max pour les photos"
      },
      {
        "type": "Reel",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "La vidéo doit durer au moins 3 secondes ; max 90 secondes"
      },
      {
        "type": "Photo de Profil",
        "width": 320,
        "height": 320,
        "ratio": "1:1",
        "notes": "Affichée en cercle ; gardez le contenu clé centré"
      },
      {
        "type": "Publication Carrousel",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Chaque carte doit avoir les mêmes dimensions"
      }
    ],
    "tips": [
      "Utilisez le 4:5 (1080×1350) pour les publications du fil afin de maximiser l'espace vertical lors du défilement",
      "Gardez le contenu important dans les 80 % centraux des Stories pour éviter les chevauchements avec l'interface",
      "Exportez à la largeur maximale de 1080px — Instagram compresse de toute façon tout ce qui est plus grand",
      "Utilisez le PNG pour les graphiques et illustrations ; le JPEG à 80–90 % de qualité pour les photos",
      "Évitez le texte petit près des bords — il pourrait être recadré sur les appareils anciens"
    ],
    "faq": [
      {
        "q": "Quelle est la meilleure taille pour les publications Instagram en 2026 ?",
        "a": "Pour une visibilité maximale dans le fil, utilisez 1080×1350 pixels (format 4:5 — portrait). C'est le format le plus haut qu'Instagram autorise pour les publications du fil et il occupe le plus d'espace à l'écran lorsque les utilisateurs font défiler."
      },
      {
        "q": "Puis-je publier une vidéo 16:9 sur Instagram ?",
        "a": "Oui, mais Instagram recadrera les vidéos 16:9 pour les adapter au fil (en 1:1 ou 4:5). Pour les Reels et les Stories, les vidéos 16:9 afficheront des bandes noires (letterboxing) en haut et en bas. Filmez toujours en vertical (9:16) pour les Reels et les Stories."
      },
      {
        "q": "Quelle taille doit avoir le texte des Stories Instagram ?",
        "a": "Gardez tout le texte et les éléments visuels clés dans la zone de sécurité : environ 1080×1420 pixels centrés dans le canevas de 1080×1920. Les 250px supérieurs et les 250px inférieurs sont généralement couverts par les éléments d'interface comme le nom d'utilisateur et la barre de réponse."
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
    "title": "Dimensions Vidéo et Formats YouTube 2026 — Guide Complet",
    "description": "Toutes les dimensions d'images et de vidéos YouTube pour 2026 : vidéos, Shorts, miniatures, bannières de chaîne et photos de profil. Tailles et formats exacts en pixels.",
    "intro": "YouTube est principalement une plateforme 16:9, mais Shorts utilise la vidéo verticale 9:16. Obtenir les bonnes dimensions améliore le taux de clics sur vos miniatures et garantit que votre contenu s'affiche nettement sur tous les appareils.",
    "formats": [
      {
        "type": "Vidéo (HD standard)",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Recommandé pour la plupart des téléversements (1080p)"
      },
      {
        "type": "Vidéo (4K)",
        "width": 3840,
        "height": 2160,
        "ratio": "16:9",
        "notes": "Qualité maximale ; nécessite un enregistrement 4K"
      },
      {
        "type": "Shorts",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vidéo verticale ; max 60 secondes"
      },
      {
        "type": "Miniature",
        "width": 1280,
        "height": 720,
        "ratio": "16:9",
        "notes": "Miniature personnalisée ; taille maximale de fichier 2 Mo"
      },
      {
        "type": "Bannière de Chaîne (Bureau)",
        "width": 2560,
        "height": 1440,
        "ratio": "16:9",
        "notes": "Bannière complète ; seul le centre de 1546×423px s'affiche sur tous les appareils"
      },
      {
        "type": "Photo de Profil",
        "width": 800,
        "height": 800,
        "ratio": "1:1",
        "notes": "Affichée en cercle ; minimum 98×98px"
      }
    ],
    "tips": [
      "Concevez les miniatures à 1280×720 avec du texte en gras et des couleurs à fort contraste pour un meilleur taux de clics",
      "Gardez la zone de sécurité de la bannière de chaîne à 1546×423 pixels pour garantir l'affichage sur tous les appareils",
      "Téléversez les vidéos à la résolution la plus élevée possible — YouTube transcode vers le bas, pas vers le haut",
      "Pour les Shorts, utilisez 1080×1920 (9:16) et assurez-vous qu'aucun contenu essentiel ne se trouve dans les 10 % supérieurs ou inférieurs",
      "Le fichier de miniature doit faire moins de 2 Mo — utilisez le JPEG pour les photos, le PNG pour les graphiques"
    ],
    "faq": [
      {
        "q": "Quelle résolution est la meilleure pour les vidéos YouTube ?",
        "a": "1920×1080 (1080p Full HD) est la résolution standard et recommandée pour les téléversements YouTube. Elle offre une vidéo nette sur la plupart des écrans sans nécessiter d'équipement d'enregistrement 4K."
      },
      {
        "q": "Quelle taille doit avoir une miniature YouTube ?",
        "a": "YouTube recommande 1280×720 pixels (format 16:9) pour les miniatures personnalisées. La taille maximale de fichier est de 2 Mo. Utilisez le JPEG pour les photos ou le PNG pour les graphiques conçus."
      },
      {
        "q": "Quelle est la résolution des YouTube Shorts ?",
        "a": "YouTube Shorts utilise un format vertical 9:16, avec la résolution recommandée de 1080×1920 pixels. La durée maximale des Shorts est de 60 secondes."
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
    "title": "Dimensions et Formats Vidéo TikTok 2026 — Guide Complet",
    "description": "Tailles et formats vidéo TikTok pour 2026 : la meilleure résolution pour les vidéos TikTok, photos de profil et images de couverture.",
    "intro": "TikTok est une plateforme vidéo verticale conçue pour les appareils mobiles. Tout le contenu doit être créé en orientation portrait 9:16. Voici les spécifications pour garantir que votre contenu s'affiche au mieux.",
    "formats": [
      {
        "type": "Vidéo (Recommandée)",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Full HD verticale — à utiliser systématiquement"
      },
      {
        "type": "Vidéo (Minimum)",
        "width": 720,
        "height": 1280,
        "ratio": "9:16",
        "notes": "Minimum pour une qualité acceptable"
      },
      {
        "type": "Photo de Profil",
        "width": 200,
        "height": 200,
        "ratio": "1:1",
        "notes": "Affichée en cercle"
      },
      {
        "type": "Image de Couverture",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Extraite automatiquement de la vidéo ; peut être personnalisée"
      }
    ],
    "tips": [
      "Enregistrez et téléversez toujours à 1080×1920 (9:16) pour la meilleure qualité d'affichage",
      "Gardez le contenu clé au centre du cadre — les 20 % inférieurs sont couverts par les sous-titres et l'interface",
      "TikTok prend en charge les formats .mp4 et .mov ; le codec H.264 est recommandé",
      "Utilisez l'outil de superposition de texte de TikTok avec parcimonie — il se superpose à votre contenu",
      "Un éclairage lumineux et des visuels à fort contraste fonctionnent mieux avec l'algorithme"
    ],
    "faq": [
      {
        "q": "Quelle est la meilleure résolution vidéo pour TikTok ?",
        "a": "TikTok recommande 1080×1920 pixels (format 9:16, Full HD verticale). Utiliser cette résolution garantit que votre vidéo s'affiche sans bandes noires ni letterboxing sur tout appareil."
      },
      {
        "q": "Puis-je téléverser une vidéo horizontale (16:9) sur TikTok ?",
        "a": "Oui, TikTok accepte les vidéos horizontales, mais elles s'afficheront avec des bandes noires en haut et en bas (letterboxing). Pour la meilleure expérience spectateur et les meilleures performances algorithmiques, utilisez toujours la vidéo verticale (9:16)."
      },
      {
        "q": "Quelle est la durée maximale d'une vidéo sur TikTok ?",
        "a": "En 2026, TikTok autorise les vidéos jusqu'à 10 minutes pour les comptes standard. Les vidéos plus courtes (15 à 60 secondes) obtiennent généralement de meilleures performances dans l'algorithme de recommandation."
      }
    ],
    "relatedRatios": [
      "9-16",
      "1-1"
    ]
  },
  "twitter": {
    "name": "X / Twitter",
    "title": "Tailles d'Images et Formats X (Twitter) 2026 — Guide Complet",
    "description": "Toutes les dimensions d'images X (Twitter) pour 2026 : images de publications, bannières d'en-tête, photos de profil et tailles de vidéo. Spécifications exactes en pixels.",
    "intro": "X (anciennement Twitter) prend en charge une variété de formats et tailles d'images. Les images dans les publications sont automatiquement recadrées dans la vue du fil, mais s'affichent en entier lorsqu'on les touche. Voici toutes les dimensions recommandées.",
    "formats": [
      {
        "type": "Image de Publication (Paysage)",
        "width": 1600,
        "height": 900,
        "ratio": "16:9",
        "notes": "Recommandé pour la plupart des images de publications"
      },
      {
        "type": "Image de Publication (Carrée)",
        "width": 1200,
        "height": 1200,
        "ratio": "1:1",
        "notes": "Compatible avec tous les contextes d'affichage"
      },
      {
        "type": "Image de Publication (Portrait)",
        "width": 900,
        "height": 1350,
        "ratio": "2:3",
        "notes": "Format portrait maximum pris en charge"
      },
      {
        "type": "Photo de Profil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Affichée en cercle ; minimum recommandé 400×400"
      },
      {
        "type": "En-tête / Bannière",
        "width": 1500,
        "height": 500,
        "ratio": "3:1",
        "notes": "Haut de la page de profil ; évitez les bords — recadré sur mobile"
      },
      {
        "type": "Vidéo",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Durée max 2:20 ; limite de taille de fichier 512 Mo"
      }
    ],
    "tips": [
      "Utilisez 1600×900 pour les images de publications en paysage — elles s'affichent sans recadrage dans le fil",
      "Gardez les 60 % centraux de la bannière d'en-tête sûrs pour tous les appareils",
      "Les photos de profil s'affichent en cercle — utilisez un sujet centré sans contenu important près des bords",
      "X compresse les images — exportez en JPEG qualité 100 % pour minimiser la compression visible",
      "Pour les Twitter Cards (aperçus de liens), utilisez un format 2:1 (ex. 1200×628) pour le format de grande carte"
    ],
    "faq": [
      {
        "q": "Quelle est la meilleure taille d'image pour une publication X (Twitter) ?",
        "a": "1600×900 pixels (16:9) est la taille recommandée pour les images de publications X. Elle s'affiche sans recadrage dans le fil. Le format carré (1200×1200) est également sûr et s'affiche bien dans tous les contextes."
      },
      {
        "q": "Quelle est la taille de la bannière d'en-tête X (Twitter) ?",
        "a": "La taille d'en-tête X recommandée est de 1500×500 pixels (format 3:1). Notez que la bannière est recadrée différemment sur bureau et sur mobile — gardez le contenu important dans la zone centrale."
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
    "title": "Tailles et Formats d'Images LinkedIn 2026 — Guide Complet",
    "description": "Dimensions d'images LinkedIn pour 2026 : images de publications, bannières d'entreprise, photos de profil et images de couverture. Tailles exactes en pixels pour du contenu professionnel.",
    "intro": "LinkedIn est un réseau professionnel où la qualité de l'image est cruciale pour la crédibilité. Voici les tailles d'images recommandées pour garantir que votre profil et vos publications sont impeccables.",
    "formats": [
      {
        "type": "Image de Publication (Paysage)",
        "width": 1200,
        "height": 628,
        "ratio": "1.91:1",
        "notes": "Image standard pour les publications LinkedIn"
      },
      {
        "type": "Image de Publication (Carrée)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Les publications carrées fonctionnent bien sur LinkedIn"
      },
      {
        "type": "Photo de Profil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Minimum 200×200 ; utilisez une photo professionnelle"
      },
      {
        "type": "Bannière Personnelle",
        "width": 1584,
        "height": 396,
        "ratio": "4:1",
        "notes": "Affichée derrière la photo de profil"
      },
      {
        "type": "Logo d'Entreprise",
        "width": 300,
        "height": 300,
        "ratio": "1:1",
        "notes": "Logo carré pour la page entreprise"
      },
      {
        "type": "Bannière d'Entreprise",
        "width": 1128,
        "height": 191,
        "ratio": "5.9:1",
        "notes": "Bannière très large ; gardez le texte centré"
      }
    ],
    "tips": [
      "Utilisez 1200×628 pour les images d'aperçu de liens (format de carte LinkedIn)",
      "La photo de profil doit montrer clairement votre visage — LinkedIn est un contexte professionnel",
      "La bannière personnelle peut mettre en valeur votre travail, vos compétences ou votre marque — utilisez 1584×396",
      "Les publications d'entreprise avec images obtiennent significativement plus d'engagement que les publications textuelles",
      "Exportez les photos de profil en JPEG ou PNG ; la taille maximale de fichier est de 8 Mo"
    ],
    "faq": [
      {
        "q": "Quelle est la meilleure taille d'image pour les publications LinkedIn ?",
        "a": "1200×628 pixels (format 1.91:1) est la taille d'image recommandée par LinkedIn pour les publications. Les images carrées (1080×1080) fonctionnent également bien et peuvent mieux s'afficher dans le fil mobile."
      },
      {
        "q": "Quelle est la taille de la bannière de profil LinkedIn ?",
        "a": "La bannière personnelle LinkedIn (photo d'arrière-plan) doit faire 1584×396 pixels (format 4:1). C'est la taille qui s'affiche derrière votre photo de profil sur bureau et mobile."
      }
    ],
    "relatedRatios": [
      "1-1",
      "16-9"
    ]
  },
  "facebook": {
    "name": "Facebook",
    "title": "Tailles d'Images et Formats Facebook 2026 — Guide Complet",
    "description": "Dimensions d'images Facebook pour 2026 : images de publications, photos de couverture, Stories, photos de profil et plus. Spécifications exactes en pixels.",
    "intro": "Facebook prend en charge de nombreux formats d'images et les spécifications varient selon l'emplacement. Voici les dimensions recommandées pour 2026 afin de garantir que votre contenu s'affiche au mieux.",
    "formats": [
      {
        "type": "Image de Publication",
        "width": 1200,
        "height": 630,
        "ratio": "1.91:1",
        "notes": "Image standard du fil ; également utilisée pour les aperçus de liens"
      },
      {
        "type": "Image de Publication (Carrée)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Compatible avec les fils bureau et mobile"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Verticale plein écran ; durée de 24 heures"
      },
      {
        "type": "Photo de Profil",
        "width": 180,
        "height": 180,
        "ratio": "1:1",
        "notes": "Affichée à 170×170 sur bureau ; recadrage circulaire"
      },
      {
        "type": "Photo de Couverture",
        "width": 820,
        "height": 312,
        "ratio": "2.63:1",
        "notes": "Affichée à 820×312 sur bureau, 640×360 sur mobile"
      },
      {
        "type": "Couverture d'Événement",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Image d'en-tête de la page d'événement"
      }
    ],
    "tips": [
      "Concevez les photos de couverture avec le contenu clé au centre — le recadrage diffère sur mobile et bureau",
      "Pour les publications avec liens, utilisez une image de 1200×630 pour déclencher la grande carte d'aperçu de Facebook",
      "Téléversez les photos à la résolution la plus élevée possible — Facebook les compressera",
      "Les photos de profil s'affichent en cercle — gardez les visages ou logos centrés",
      "Zone de sécurité des Stories : gardez le contenu à plus de 250px des bords supérieur et inférieur"
    ],
    "faq": [
      {
        "q": "Quelle est la meilleure taille d'image pour les publications Facebook ?",
        "a": "1200×630 pixels (format 1.91:1) est la taille recommandée pour les publications Facebook. Cela fonctionne également pour les images d'aperçu de liens. Le carré (1080×1080) est une alternative sûre qui s'affiche de manière cohérente dans tous les emplacements."
      },
      {
        "q": "Quelle est la taille de la photo de couverture Facebook ?",
        "a": "La taille recommandée pour la photo de couverture Facebook est de 820×312 pixels pour le bureau. Sur mobile, elle s'affiche en 640×360. Pour éviter le recadrage, gardez le contenu important dans la zone centrale de 640×312."
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
    "title": "Tailles d'Épingles et Formats Pinterest 2026 — Guide Complet",
    "description": "Dimensions d'images Pinterest pour 2026 : épingles standard, Idea Pins, épingles carrées et photos de profil. Obtenez le bon format pour une portée maximale.",
    "intro": "Pinterest est une plateforme de découverte visuelle où les images plus hautes (format 2:3) fonctionnent le mieux — elles occupent plus d'espace dans le fil. Voici les dimensions recommandées pour tous les types de contenu Pinterest.",
    "formats": [
      {
        "type": "Épingle Standard (Portrait)",
        "width": 1000,
        "height": 1500,
        "ratio": "2:3",
        "notes": "Recommandé — meilleure portée et engagement"
      },
      {
        "type": "Épingle Carrée",
        "width": 1000,
        "height": 1000,
        "ratio": "1:1",
        "notes": "Fonctionne bien ; moins d'espace vertical que le format portrait"
      },
      {
        "type": "Épingle Haute",
        "width": 1000,
        "height": 2100,
        "ratio": "1:2.1",
        "notes": "Hauteur maximale ; à utiliser avec précaution — peut être tronqué"
      },
      {
        "type": "Idea Pin",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Format story multi-pages ; verticale plein écran"
      },
      {
        "type": "Photo de Profil",
        "width": 165,
        "height": 165,
        "ratio": "1:1",
        "notes": "Recadrage circulaire ; gardez le sujet centré"
      }
    ],
    "tips": [
      "Utilisez 1000×1500 (2:3) pour les épingles standard — c'est le format idéal pour la visibilité dans le fil",
      "Évitez de dépasser un format de 1:2.1 — Pinterest peut tronquer les images excessivement hautes",
      "Ajoutez une superposition de texte dans la partie supérieure centrale de l'épingle — évitez les 100px inférieurs où le domaine source est affiché",
      "Enregistrez les épingles en JPEG pour les photos (max 20 Mo) ou en PNG pour les graphiques avec transparence",
      "Les Idea Pins (9:16) fonctionnent différemment des épingles standard — ils ressemblent davantage aux Stories"
    ],
    "faq": [
      {
        "q": "Quelle est la meilleure taille d'épingle Pinterest ?",
        "a": "La taille d'épingle Pinterest recommandée est de 1000×1500 pixels (format 2:3). Ce format portrait occupe plus d'espace vertical dans le fil, augmentant la visibilité et le taux de clics."
      },
      {
        "q": "Puis-je utiliser une image carrée sur Pinterest ?",
        "a": "Oui, les épingles carrées 1:1 (par exemple 1000×1000) sont prises en charge. Cependant, les épingles portrait (2:3) obtiennent généralement de meilleurs résultats car elles occupent plus d'espace à l'écran dans le fil en mosaïque."
      },
      {
        "q": "Qu'est-ce qu'un Pinterest Idea Pin ?",
        "a": "Les Idea Pins (anciennement Story Pins) sont du contenu vertical multi-pages en plein écran (9:16, 1080×1920). Ils ne renvoient pas vers des sites web externes et sont conçus pour du contenu natif au sein de Pinterest."
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
    "title": "Qu'est-ce que le rapport d'aspect ? Un guide pour débutants",
    "description": "Une explication claire et conviviale pour les débutants sur le rapport d'aspect : ce que cela signifie, comment il est écrit, pourquoi il est important pour les écrans et les images, et comment l'utiliser.",
    "intro": "Le rapport d'aspect est l'un de ces termes qui semblent techniques mais qui sont en fait assez simples une fois que vous les comprenez. Que vous redimensionniez une photo pour Instagram, configuriez une vidéo YouTube ou achetiez un nouveau moniteur, le rapport d'aspect détermine la forme de votre image ou de votre écran. Ce guide explique tout ce que vous devez savoir.",
    "sections": [
      {
        "heading": "Que signifie le rapport d'aspect ?",
        "body": "Le rapport d'aspect est la relation proportionnelle entre la largeur et la hauteur d'une image, d'un écran ou d'une trame vidéo. Il est écrit sous la forme de deux nombres séparés par un deux-points, comme 16:9 ou 4:3. Le premier nombre est la largeur et le second est la hauteur. Un rapport 16:9 signifie que pour chaque 16 unités de largeur, la hauteur est de 9 unités. La taille réelle n'a pas d'importance. Une image de 160×90 pixels et une image de 3840×2160 pixels sont toutes deux en 16:9 car elles partagent les mêmes proportions."
      },
      {
        "heading": "Pourquoi le rapport d'aspect est-il important ?",
        "body": "Le rapport d'aspect est important chaque fois que vous affichez, imprimez ou partagez du contenu visuel. Si le rapport de votre image ne correspond pas au rapport de l'affichage ou du conteneur, l'une des deux choses suivantes se produit :",
        "list": [
          "Letterboxing / Pillarboxing : des barres noires apparaissent pour remplir l'espace vide",
          "Recadrage : l'image est coupée pour s'adapter, et une partie du contenu est perdue",
          "Étirement : l'image est déformée pour remplir le cadre (le moins souhaitable)"
        ]
      },
      {
        "heading": "Rapports d'aspect courants et leurs utilisations",
        "body": "Différentes industries et plateformes ont standardisé différents rapports d'aspect. Voici les plus importants à connaître :",
        "table": {
          "headers": [
            "Rapport",
            "Décimal",
            "Utilisation courante"
          ],
          "rows": [
            [
              "16:9",
              "1.78:1",
              "YouTube, Netflix, TV, moniteurs, présentations"
            ],
            [
              "9:16",
              "0.56:1",
              "TikTok, Instagram Reels, YouTube Shorts, Stories"
            ],
            [
              "1:1",
              "1.00:1",
              "Publications du fil Instagram, photos de profil, pochettes d'album"
            ],
            [
              "4:5",
              "0.80:1",
              "Publications portrait Instagram (hauteur maximale du fil)"
            ],
            [
              "4:3",
              "1.33:1",
              "iPad, téléviseurs anciens, PowerPoint, appareils photo DSLR"
            ],
            [
              "3:2",
              "1.50:1",
              "Appareils photo DSLR, tirages 4×6, film 35mm"
            ],
            [
              "2.39:1",
              "2.39:1",
              "Films cinémascope théâtraux"
            ]
          ]
        }
      },
      {
        "heading": "Comment calculer un rapport d'aspect",
        "body": "Pour trouver le rapport d'aspect de n'importe quelle image, divisez la largeur et la hauteur par leur Plus Grand Commun Diviseur (PGCD). Par exemple, une image de 1920×1080 pixels : les deux nombres sont divisibles par 120, ce qui donne 16:9. Notre calculateur gratuit le fait automatiquement — il suffit d'entrer votre largeur et votre hauteur."
      },
      {
        "heading": "Rapport d'aspect vs. Résolution",
        "body": "Le rapport d'aspect et la résolution sont liés mais ne sont pas la même chose. La résolution fait référence au nombre total de pixels (par exemple, 1920×1080). Le rapport d'aspect fait référence à la forme (par exemple, 16:9). Deux images peuvent partager le même rapport d'aspect mais avoir des résolutions complètement différentes : 640×360 et 3840×2160 sont toutes deux en 16:9 mais diffèrent considérablement en termes de nombre de pixels et de qualité."
      }
    ],
    "conclusion": "L'ensemble du sujet se résume à une seule habitude : décidez de la forme avant de décider de la taille. Le rapport d'abord, les pixels ensuite. Si vous respectez cet ordre, le reste (le recadrage, le letterboxing, les barres noires, le téléchargement flou) cesse en grande partie de se produire de lui-même."
  },
  "how-to-calculate-aspect-ratio": {
    "title": "Comment calculer le rapport d'aspect : Le guide complet",
    "description": "Apprenez à calculer le rapport d'aspect étape par étape : en utilisant la méthode du GCD, la formule et notre calculateur en ligne gratuit. Inclut des exemples concrets.",
    "intro": "Savoir comment calculer un rapport d'aspect est une compétence fondamentale pour quiconque travaille avec des images, de la vidéo ou du design. Ce guide couvre les mathématiques qui le sous-tendent, les méthodes manuelles les plus rapides et comment utiliser notre calculateur gratuit pour des résultats instantanés.",
    "sections": [
      {
        "heading": "La formule du rapport d'aspect",
        "body": "Le rapport d'aspect de tout rectangle est simplement : Largeur ÷ Hauteur. Pour l'exprimer sous forme de rapport W:H propre (par exemple, 16:9 plutôt que 1.778:1), vous devez trouver le plus grand commun diviseur (GCD) de la largeur et de la hauteur et diviser les deux par celui-ci."
      },
      {
        "heading": "Étape par étape : Comment trouver le rapport d'aspect",
        "body": "Voici comment calculer manuellement le rapport d'aspect de n'importe quelle image :",
        "list": [
          "Étape 1 : Notez la largeur et la hauteur en pixels (par exemple, 1920 et 1080)",
          "Étape 2 : Trouvez le plus grand commun diviseur (GCD) des deux nombres. Pour 1920 et 1080, le GCD est 120.",
          "Étape 3 : Divisez les deux nombres par le GCD. 1920 ÷ 120 = 16 ; 1080 ÷ 120 = 9.",
          "Étape 4 : Écrivez le résultat sous forme de W:H — dans ce cas, 16:9."
        ]
      },
      {
        "heading": "Exemples concrets",
        "body": "Voici quelques dimensions courantes et leurs rapports d'aspect :",
        "table": {
          "headers": [
            "Largeur",
            "Hauteur",
            "GCD",
            "Rapport d'aspect"
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
        "heading": "Comment trouver le GCD sans calculateur",
        "body": "Chaque méthode ci-dessus dépend de la recherche du plus grand commun diviseur (GCD), et c'est l'étape que la plupart des guides ignorent. La méthode fiable est l'algorithme d'Euclide, qui a plus de deux mille ans et prend environ quatre étapes pour des nombres de taille d'écran : divisez le plus grand nombre par le plus petit, gardez le reste, puis répétez avec le plus petit nombre et ce reste jusqu'à ce que le reste soit zéro. Le dernier nombre non nul est le GCD. Pour 1920 et 1080 : 1920 ÷ 1080 laisse 840 ; 1080 ÷ 840 laisse 240 ; 840 ÷ 240 laisse 120 ; 240 ÷ 120 laisse 0. Le GCD est 120."
      },
      {
        "heading": "Quand les nombres refusent de se réduire",
        "body": "Toutes les paires de dimensions ne donnent pas un rapport soigné. 1847 × 923 a un GCD de 1, donc son rapport « simplifié » est 1847:923 — techniquement correct et inutile. Lorsque cela se produit, arrêtez d'essayer de réduire et faites plutôt deux choses : prenez la décimale (1847 ÷ 923 = 2.001, donc c'est essentiellement 2:1), et trouvez le rapport standard le plus proche avec lequel vous pouvez réellement travailler. Les écrans et les plateformes acceptent les rapports standards, pas les exacts, et une différence inférieure à environ un demi-pour cent est invisible."
      },
      {
        "heading": "Pourquoi 1200 × 630 n'est pas 1.91:1",
        "body": "La taille d'image Open Graph que chaque plateforme sociale demande est 1200 × 630, et elle est presque toujours décrite comme 1.91:1. Exécutez le GCD et vous obtenez 40:21, dont la décimale est 1.9048. Le chiffre 1.91 est une étiquette arrondie qui est restée, pas le vrai rapport. Cela compte lorsque vous mettez à l'échelle : calculer une nouvelle largeur à partir de 1.91 plutôt que de 40:21 dérive d'environ un pixel à 1200px de large et de quatre à 4800px. Mettez toujours à l'échelle à partir du rapport entier, et arrondissez une seule fois à la fin."
      },
      {
        "heading": "Comment calculer une dimension manquante",
        "body": "Si vous connaissez les dimensions originales et souhaitez trouver une nouvelle taille avec le même rapport, utilisez cette formule : Nouvelle Hauteur = (Hauteur Originale ÷ Largeur Originale) × Nouvelle Largeur. Par exemple, pour trouver la hauteur d'une image 16:9 de 1280px de large : (1080 ÷ 1920) × 1280 = 720px. Notre calculateur le fait automatiquement dans les deux sens."
      },
      {
        "heading": "La méthode la plus rapide : Utilisez un calculateur",
        "body": "Calculer manuellement les rapports d'aspect est simple pour les nombres ronds, mais devient rapidement fastidieux pour des dimensions irrégulières comme 1847×923. Notre calculateur de rapport d'aspect gratuit gère instantanément n'importe quelle largeur et hauteur. Entrez vos valeurs et obtenez le rapport simplifié, la décimale, la correspondance standard la plus proche et les valeurs CSS en un seul clic."
      }
    ],
    "conclusion": "Deux règles couvrent presque tous les cas. Réduisez avec le GCD lorsque les nombres le permettent, et revenez à la décimale plus le rapport standard le plus proche lorsque ce n'est pas le cas. Gardez le rapport entier pour toute arithmétique et n'arrondissez qu'à la toute fin. Cette seule habitude prévient la plupart des erreurs d'un pixel qui apparaissent comme un espace minuscule sur une mise en page finale."
  },
  "aspect-ratio-social-media-guide-2026": {
    "title": "Tailles et rapports d'aspect des images pour les médias sociaux : Guide complet 2026",
    "description": "Toutes les tailles et rapports d'aspect des images pour les médias sociaux en 2026 : Instagram, YouTube, TikTok, X, LinkedIn, Facebook et Pinterest. Gardez ce guide dans vos favoris.",
    "intro": "Chaque plateforme de médias sociaux a ses propres dimensions d'image recommandées, et celles-ci changent régulièrement. Utiliser la mauvaise taille signifie que vos images seront recadrées, floues ou mal affichées. Ce guide couvre toutes les principales plateformes pour 2026.",
    "sections": [
      {
        "heading": "Pourquoi la taille des images est importante sur les médias sociaux",
        "body": "Chaque plateforme a une mise en page de flux, une zone d'affichage et un algorithme de compression différents. Une image optimisée pour une plateforme peut apparaître floue, recadrée ou étirée sur une autre. Télécharger aux dimensions exactes recommandées garantit :",
        "list": [
          "Pas de recadrage inattendu du contenu clé",
          "Netteté maximale — pas d'agrandissement par la plateforme",
          "Temps de chargement plus rapides — un dimensionnement correct réduit la taille du fichier",
          "Meilleure performance dans les algorithmes de recommandation"
        ]
      },
      {
        "heading": "Tailles d'image Instagram 2026",
        "body": "Instagram prend en charge trois rapports de flux, plus les Stories et les Reels. Pour les publications de flux, le format portrait 4:5 (1080×1350) vous offre le plus d'espace vertical, ce qui est idéal sur une surface que les gens font défiler.",
        "table": {
          "headers": [
            "Format",
            "Dimensions",
            "Rapport"
          ],
          "rows": [
            [
              "Publication de flux (Carré)",
              "1080 × 1080",
              "1:1"
            ],
            [
              "Publication de flux (Portrait)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Publication de flux (Paysage)",
              "1080 × 566",
              "1.91:1"
            ],
            [
              "Story / Reel",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Photo de profil",
              "320 × 320",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Dimensions YouTube 2026",
        "body": "YouTube est une plateforme 16:9. Concevez des miniatures de 1280×720 avec un texte gras et lisible. Votre miniature est souvent le facteur décisif pour qu'une personne clique.",
        "table": {
          "headers": [
            "Format",
            "Dimensions",
            "Rapport"
          ],
          "rows": [
            [
              "Vidéo (1080p)",
              "1920 × 1080",
              "16:9"
            ],
            [
              "Shorts",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Miniature",
              "1280 × 720",
              "16:9"
            ],
            [
              "Bannière de chaîne",
              "2560 × 1440",
              "16:9"
            ]
          ]
        }
      },
      {
        "heading": "Tailles de vidéo TikTok 2026",
        "body": "TikTok est entièrement vertical — utilisez toujours le format 9:16 à 1080×1920 pour la meilleure qualité. Gardez le contenu clé au centre du cadre et éloigné des 20% inférieurs où apparaissent les légendes et les éléments d'interface utilisateur.",
        "table": {
          "headers": [
            "Format",
            "Dimensions",
            "Rapport"
          ],
          "rows": [
            [
              "Vidéo (Recommandé)",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Photo de profil",
              "200 × 200",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Référence rapide : Toutes les plateformes",
        "body": "Voici un tableau de référence rapide pour les tailles d'image de médias sociaux les plus couramment utilisées en 2026 :",
        "table": {
          "headers": [
            "Plateforme",
            "Format",
            "Dimensions",
            "Rapport"
          ],
          "rows": [
            [
              "Instagram",
              "Publication de flux (Portrait)",
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
              "Vidéo",
              "1920 × 1080",
              "16:9"
            ],
            [
              "YouTube",
              "Miniature",
              "1280 × 720",
              "16:9"
            ],
            [
              "TikTok",
              "Vidéo",
              "1080 × 1920",
              "9:16"
            ],
            [
              "X / Twitter",
              "Image de publication",
              "1600 × 900",
              "16:9"
            ],
            [
              "LinkedIn",
              "Image de publication",
              "1200 × 628",
              "1.91:1"
            ],
            [
              "Facebook",
              "Image de publication",
              "1200 × 630",
              "1.91:1"
            ],
            [
              "Pinterest",
              "Épingle standard",
              "1000 × 1500",
              "2:3"
            ]
          ]
        }
      },
      {
        "heading": "Les tailles sont bonnes et le cadre est toujours incorrect",
        "body": "Télécharger en 1080 × 1920 ne signifie pas que tout est visible. Chaque format vertical superpose une interface à votre image : une ligne de profil et une légende en bas, une barre de progression et un bouton de fermeture en haut, et sur les Reels et TikTok, une colonne de boutons sur un côté. L'image est en plein écran ; la zone utilisable ne l'est pas. Une marge de travail pratique consiste à garder tout ce qui doit être lu (texte, visages, logos, prix) à l'intérieur des 70% centraux verticalement et loin du bord de fuite, puis à le prévisualiser sur un téléphone avant de publier. La zone de sécurité n'est pas publiée comme une spécification et elle bouge, alors traitez-la comme une marge plutôt qu'une mesure."
      },
      {
        "heading": "Téléchargez plus grand que le nombre indiqué dans le tableau",
        "body": "Chaque plateforme re-compresse ce que vous envoyez, et elle fait un meilleur travail en partant de plus de données. Télécharger une exportation de 1080 × 1350 d'un original de 1080 de large ne donne rien à l'encodeur ; télécharger une version de 2160 × 2700 de la même image et laisser la plateforme la réduire donne généralement un aspect visiblement plus net à la même taille finale, en particulier sur le texte et les bords fins. L'exception est lorsqu'une plateforme publie un maximum strict. Respectez cela, puis approchez-vous le plus possible de cette limite."
      },
      {
        "heading": "Si vous ne pouvez créer qu'un seul élément",
        "body": "Créez-le en 4:5 à 1080 × 1350. C'est la forme la plus haute acceptée par le flux d'Instagram, ce qui signifie qu'elle occupe le plus d'écran sur la surface qui vous en donne le moins, et elle se recadre proprement : recadrage central en 1:1 pour un placement carré, ou en 1.91:1 pour une carte de lien, et le sujet reste là où vous l'avez placé. Faire l'inverse, commencer par un carré et essayer d'atteindre le 4:5, signifie inventer une image qui n'a jamais été photographiée."
      },
      {
        "heading": "Un avertissement concernant les guides comme celui-ci",
        "body": "Chaque chiffre ici était correct au moment de la rédaction et les plateformes les modifient sans préavis. Un guide est un point de départ, pas une autorité : avant une campagne importante, consultez la documentation d'aide de la plateforme elle-même, car c'est la seule version qui se met à jour lorsqu'ils le font. Les rapports dans la dernière colonne sont beaucoup plus stables que les dimensions en pixels à côté d'eux. 9:16 et 4:5 ont survécu à plusieurs séries de changements de spécifications, et construire en fonction du rapport plutôt que du nombre de pixels est ce qui empêche ce tableau de devenir obsolète."
      }
    ],
    "conclusion": "Construisez en fonction du rapport, pas du nombre de pixels, et exportez plus grand que la cible. Ces deux habitudes survivent aux changements de plateforme, ce que les chiffres exacts de ces tableaux ne feront pas. Gardez tout ce qui doit être lu bien à l'intérieur du cadre, et vérifiez la documentation propre à la plateforme avant de publier quoi que ce soit pour lequel vous payez."
  },
  "16-9-vs-4-3-aspect-ratio": {
    "title": "Rapport d'aspect 16:9 vs 4:3 — Lequel devriez-vous utiliser ?",
    "description": "Une comparaison claire des rapports d'aspect 16:9 et 4:3 : quand utiliser chacun, leur histoire, les différences clés et des exemples de taille de pixels.",
    "intro": "Le 16:9 et le 4:3 sont les deux rapports d'aspect les plus historiquement significatifs en vidéo et en photographie. Si vous avez déjà vu des barres noires sur votre écran, que ce soit sur les côtés ou en haut et en bas, vous avez déjà rencontré la différence entre eux. Voici une comparaison complète.",
    "sections": [
      {
        "heading": "La différence clé",
        "body": "Le 16:9 est plus large et plus rectangulaire (rapport de 1.78:1), tandis que le 4:3 est plus carré (rapport de 1.33:1). Une image 16:9 est environ 33% plus large qu'une image 4:3 de la même hauteur. Cette différence peut sembler minime mais elle est très perceptible à l'écran."
      },
      {
        "heading": "Histoire : D'où viennent-ils ?",
        "body": "Le 4:3 est apparu en premier, correspondant à la forme des premiers films cinématographiques 35mm, et il est resté le standard de la télévision pendant la majeure partie du XXe siècle. Le 16:9 n'a été hérité de rien. Il a été conçu. Travaillant à la SMPTE au début des années 1980, Kerns Powers a découpé des rectangles de surface égale pour chaque rapport d'aspect alors en usage, de la télévision 1.33:1 au cinéma 2.35:1, et les a superposés en les centrant les uns sur les autres. Chaque rectangle s'insérait dans une boîte extérieure et contenait une boîte intérieure, et ces deux boîtes étaient proches de 1.77:1. Ce chiffre est presque exactement la moyenne géométrique des extrêmes : la racine carrée de 1.33 × 2.35 est 1.77, et 16 ÷ 9 est 1.778. Le 16:9 est la forme qui gaspille le moins d'écran, en moyenne sur tout ce que l'on pourrait vouloir y afficher."
      },
      {
        "heading": "Quand utiliser le 16:9",
        "body": "Utilisez le 16:9 lorsque :",
        "list": [
          "Créer du contenu vidéo pour YouTube, Netflix ou la télévision",
          "Réaliser des présentations modernes (Google Slides, PowerPoint 2016 et versions ultérieures utilisent le 16:9 par défaut)",
          "Concevoir pour les moniteurs et ordinateurs portables grand écran",
          "Enregistrer des vidéos avec un smartphone ou un appareil photo moderne",
          "Créer des miniatures YouTube"
        ]
      },
      {
        "heading": "Quand utiliser le 4:3",
        "body": "Utilisez le 4:3 lorsque :",
        "list": [
          "Concevoir pour les écrans iPad (qui utilisent le 4:3)",
          "Créer des présentations pour des projecteurs plus anciens",
          "Correspondre à du contenu vidéo hérité",
          "Imprimer selon des proportions photographiques standard (certains appareils photo)",
          "Travailler avec des images de vidéosurveillance ou de surveillance"
        ]
      },
      {
        "heading": "Comparaison de la taille des pixels",
        "body": "Voici les résolutions courantes pour les deux rapports à des nombres de mégapixels équivalents :",
        "table": {
          "headers": [
            "Qualité",
            "Taille 16:9",
            "Taille 4:3"
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
        "heading": "Ce que coûte réellement la conversion entre eux",
        "body": "Les deux conversions coûtent exactement un quart de l'image, ce qui est plus que ce que la plupart des gens attendent. Passer du 16:9 au 4:3 à la même hauteur signifie recadrer la largeur de 16 unités à 12, vous perdez donc 25% du cadre, et cela se fait sur les côtés, où les sujets filmés sont souvent cadrés. Dans l'autre sens, du 4:3 au 16:9 à la même largeur, recadre la hauteur de 12 unités à 9 : également 25%, cette fois en haut et en bas, là où se trouvent les têtes et les légendes. Aucune des deux directions n'est un redimensionnement. Si le contenu est important, recadrez-le plutôt que de laisser un outil de recadrage choisir."
      },
      {
        "heading": "Ce que les barres noires vous coûtent",
        "body": "Afficher du contenu 4:3 sur un écran 16:9 le 'pillarboxe', et les barres ne sont pas cosmétiques : l'image occupe 12 des 16 unités de largeur de l'écran, donc un quart de l'affichage ne fait rien. Un téléviseur 16:9 de 55 pouces mesure 47,9 pouces de large, ce qui représente environ 12 pouces de noir. C'est l'argument pratique pour filmer dans le rapport que vous publierez, plutôt que de prévoir de le corriger après coup. Il n'y a pas de recadrage qui récupère un quart de l'écran."
      }
    ],
    "conclusion": "Filmez et concevez en 16:9 à moins que quelque chose de spécifique ne vous pousse ailleurs : un public axé sur l'iPad, un projecteur hérité, une archive à laquelle correspondre. La seule chose à éviter est de décider tardivement : les deux conversions coûtent un quart du cadre, et le quart que vous perdez est une décision mieux prise à travers un viseur qu'avec un outil de recadrage après coup."
  },
  "how-to-resize-image-without-losing-quality": {
    "title": "Comment redimensionner une image sans perdre en qualité",
    "description": "Découvrez les techniques pour redimensionner des images sans perdre en qualité : réduction vs agrandissement, meilleurs formats de fichier, explication du DPI et recommandations d'outils.",
    "intro": "Redimensionner une image semble simple, mais si cela est fait incorrectement, cela entraîne des photos floues, pixélisées ou déformées. Ce guide explique quand et comment vous pouvez redimensionner des images sans perte de qualité visible.",
    "sections": [
      {
        "heading": "Réduction vs. Agrandissement",
        "body": "Il y a deux directions dans lesquelles vous pouvez redimensionner une image, et elles ont des implications très différentes en termes de qualité. La réduction (rendre une image plus petite) préserve presque toujours la qualité, car vous ne faites que jeter des pixels. L'agrandissement (rendre une image plus grande) est l'endroit où les problèmes de qualité surviennent, car le logiciel doit inventer des données de pixels qui n'existent pas dans l'original."
      },
      {
        "heading": "La Règle d'Or : Toujours Partir de la Plus Haute Résolution",
        "body": "La perte de qualité est majoritairement irréversible. Si vous partez d'une petite image et en avez besoin d'une grande, vous verrez toujours une dégradation de la qualité. La meilleure pratique est de :",
        "list": [
          "Toujours conserver votre fichier original en haute résolution",
          "Exporter ou enregistrer une copie séparée à la taille cible",
          "Ne jamais réenregistrer un JPEG compressé plusieurs fois, car chaque enregistrement dégrade la qualité",
          "Exporter depuis le fichier maître chaque fois que vous avez besoin d'une nouvelle taille"
        ]
      },
      {
        "heading": "Jusqu'où pouvez-vous agrandir ?",
        "body": "En règle générale : un agrandissement jusqu'à 110–120% est généralement imperceptible pour la plupart des spectateurs. Un agrandissement de 150–200% produit une douceur notable. Un agrandissement au-delà de 200% produit généralement une pixellisation et un flou évidents. Les outils d'agrandissement basés sur l'IA (tels que Topaz Gigapixel, Adobe Firefly et similaires) peuvent parfois produire des résultats acceptables avec un agrandissement de 2 à 4 fois en générant intelligemment des détails."
      },
      {
        "heading": "Maintenir le rapport d'aspect lors du redimensionnement",
        "body": "L'une des erreurs de qualité les plus courantes est de modifier accidentellement le rapport d'aspect lors du redimensionnement, en étirant ou en écrasant l'image. Redimensionnez toujours proportionnellement en verrouillant le rapport d'aspect dans votre outil d'édition. Notre calculateur gratuit vous aide à trouver la hauteur cible correcte pour toute nouvelle largeur (ou vice versa), garantissant que votre redimensionnement maintient les proportions originales."
      },
      {
        "heading": "Meilleurs formats de fichier pour la qualité",
        "body": "Le format de fichier affecte significativement la qualité après le redimensionnement :",
        "list": [
          "PNG : compression sans perte ; idéal pour les graphiques, les illustrations et les captures d'écran où la netteté est importante",
          "JPEG : compression avec perte ; idéal pour les photographies ; réglez la qualité à 80–90% pour le meilleur équilibre taille/qualité",
          "WebP : un format moderne qui atteint une meilleure compression que JPEG à qualité équivalente ; pris en charge par tous les navigateurs modernes",
          "TIFF : non compressé ou sans perte ; utilisé dans les flux de travail professionnels d'impression et de photographie"
        ]
      },
      {
        "heading": "DPI et qualité d'impression",
        "body": "Le DPI (dots per inch) n'est pertinent que pour l'impression. Les écrans l'ignorent entièrement. Pour l'impression : utilisez 300 DPI pour des impressions photo nettes, 150 DPI pour une qualité acceptable, et 72–96 DPI pour une utilisation uniquement à l'écran. Pour calculer les dimensions en pixels nécessaires pour une impression : multipliez la taille d'impression en pouces par le DPI. Pour une impression de 8×10 pouces à 300 DPI : 2400×3000 pixels."
      }
    ],
    "conclusion": "Conservez le fichier maître. Presque tous les problèmes de qualité dans ce guide remontent au fait que quelqu'un n'a plus l'original : vous ne pouvez pas réduire à partir de quelque chose que vous avez déjà jeté, et aucun agrandisseur ne récupère des détails qui n'ont jamais été enregistrés. Exportez des copies, archivez l'original et redimensionnez à partir de celui-ci à chaque fois."
  },
  "install-aspect-ratio-calculator": {
    "title": "Pourquoi installer Aspect Ratio Calculator ? Accès hors ligne, rapidité et plus encore",
    "description": "Installez Aspect Ratio Calculator comme une application pour un accès hors ligne instantané, un raccourci sur l'écran d'accueil et une expérience sans distraction — pas d'interface de navigateur, pas de rechargement.",
    "intro": "Vous pouvez utiliser ce calculateur directement depuis votre navigateur, mais l'installer comme une application pousse l'expérience plus loin : lancement instantané depuis votre écran d'accueil, prise en charge complète hors ligne et une interface épurée sans navigation de navigateur. Voici tout ce que vous devez savoir.",
    "sections": [
      {
        "heading": "Que signifie réellement 'Installer' ?",
        "body": "Lorsque vous installez une application web (également appelée PWA, ou Progressive Web App), votre appareil enregistre un raccourci sur votre écran d'accueil ou votre bureau et met en cache les fichiers de l'application pour une utilisation hors ligne. Il n'y a pas d'App Store impliqué et rien ne télécharge des gigaoctets de données, car les fichiers sont déjà dans le cache de votre navigateur. L'installation promeut simplement le site à une expérience d'application de première classe sur votre appareil."
      },
      {
        "heading": "Avantages de l'installation",
        "body": "L'installation d'Aspect Ratio Calculator vous offre plusieurs avantages par rapport à son utilisation purement dans le navigateur :",
        "list": [
          "Accès hors ligne : les calculs fonctionnent même sans connexion internet, utile sur un plateau, sur le terrain ou dans un avion",
          "Raccourci sur l'écran d'accueil : s'ouvre d'un simple toucher, pas besoin de naviguer vers l'URL ou d'ouvrir un onglet de navigateur",
          "Interface sans distraction : pas de barre d'adresse de navigateur, d'onglets ou de barre d'outils ; le calculateur remplit l'écran proprement",
          "Chargement plus rapide : les fichiers mis en cache se chargent instantanément depuis le stockage local au lieu d'attendre une réponse réseau",
          "Toujours à jour : le service worker récupère les mises à jour silencieusement en arrière-plan afin que vous ayez toujours la dernière version"
        ]
      },
      {
        "heading": "Comment installer sur Chrome ou Android",
        "body": "Sur Android ou Chrome desktop, une bannière apparaît automatiquement en bas de la page avec un bouton Install. Appuyez ou cliquez sur Install et confirmez lorsque vous y êtes invité. Si la bannière a été ignorée, recherchez l'icône d'installation (un moniteur avec une flèche vers le bas ⊕) dans la barre d'adresse du navigateur sur desktop, ou appuyez sur le menu à trois points sur Android et sélectionnez 'Add to Home screen'."
      },
      {
        "heading": "Comment installer sur iPhone ou iPad (Safari)",
        "body": "Safari sur iOS n'affiche pas de bannière d'installation automatique, mais le processus est simple :",
        "list": [
          "Appuyez sur le bouton Partager (la boîte avec une flèche pointant vers le haut) dans la barre d'outils de Safari en bas de l'écran",
          "Faites défiler vers le bas dans la feuille de partage et appuyez sur 'Add to Home Screen'",
          "Modifiez le nom si vous le souhaitez, puis appuyez sur 'Ajouter' dans le coin supérieur droit",
          "L'icône du calculateur apparaît maintenant sur votre écran d'accueil et se lance en mode autonome"
        ]
      },
      {
        "heading": "Comment installer sur desktop (Chrome ou Edge)",
        "body": "Sur un ordinateur desktop exécutant Chrome ou Edge, recherchez l'icône d'installation dans la barre d'adresse. Elle ressemble à un moniteur avec une petite flèche de téléchargement. Cliquez dessus et confirmez l'invite. Sur Edge, l'option peut également apparaître sous le menu à trois points comme 'Apps → Install this site as an app'. Une fois installé, le calculateur apparaît dans votre Start menu (Windows) ou votre dossier Applications (Mac) comme toute application native."
      },
      {
        "heading": "Comment désinstaller",
        "body": "La désinstallation est aussi simple que l'installation. Sur iOS, appuyez longuement sur l'icône de votre écran d'accueil et appuyez sur 'Remove App'. Sur Android, appuyez longuement et faites glisser vers la zone de désinstallation, ou allez dans Settings → Apps. Sur Chrome desktop, ouvrez l'application, cliquez sur le menu à trois points dans la fenêtre de l'application et sélectionnez 'Uninstall Aspect Ratio Calculator'. Sur Edge, faites un clic droit sur l'application dans la barre des tâches ou le Start menu et choisissez Désinstaller."
      }
    ],
    "conclusion": "L'installation d'Aspect Ratio Calculator prend environ dix secondes et ne coûte rien. Vous bénéficiez d'un accès hors ligne, d'un raccourci sur l'écran d'accueil et d'une expérience plus rapide et plus propre, sans App Store requis. Si vous utilisez régulièrement le calculateur, l'installer est le moyen le plus pratique de l'avoir à portée de main."
  }
};
