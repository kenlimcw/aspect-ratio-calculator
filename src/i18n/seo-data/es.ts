import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";

export const RATIO_DATA: Record<string, RatioData> = {
  "16-9": {
    "label": "16:9",
    "w": 16,
    "h": 9,
    "title": "Relación de Aspecto 16:9 — Dimensiones, Píxeles y Calculadora Gratuita",
    "description": "Todo sobre la relación de aspecto 16:9: dimensiones comunes (720p, 1080p, 4K, 8K), casos de uso y una calculadora gratuita. El estándar para video, TV y monitores.",
    "explanation": "16:9 (dieciséis-a-nueve) es la relación de aspecto panorámica universalmente adoptada para video HD, streaming y pantallas modernas. Por cada 16 unidades de ancho, la altura es de 9 unidades, produciendo un rectángulo amplio y cinematográfico. Reemplazó el estándar anterior 4:3 a principios de los 2000 y ahora es el predeterminado para prácticamente todo el contenido de video, monitores y transmisiones de televisión en todo el mundo.",
    "useCases": [
      "Videos y miniaturas de YouTube",
      "Netflix, Disney+ y plataformas de streaming",
      "Televisión HD y 4K",
      "Monitores de PC y pantallas de laptop",
      "Presentaciones de PowerPoint y Google Slides",
      "Fondos para Zoom y videoconferencias",
      "Cinemáticas de videojuegos"
    ],
    "dimensions": [
      {
        "name": "nHD",
        "width": 640,
        "height": 360,
        "use": "Web de baja resolución, respaldo móvil"
      },
      {
        "name": "HD (720p)",
        "width": 1280,
        "height": 720,
        "use": "Video web, dispositivos antiguos, mínimo de YouTube"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1920,
        "height": 1080,
        "use": "Streaming estándar, YouTube, transmisión de TV"
      },
      {
        "name": "QHD (1440p)",
        "width": 2560,
        "height": 1440,
        "use": "Monitores de alta resolución, juegos"
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
        "use": "Pantallas futuras, archivo, masters de transmisión"
      }
    ],
    "faq": [
      {
        "q": "¿Qué es 16:9 en píxeles?",
        "a": "Las dimensiones de píxeles 16:9 más comunes son 1280×720 (720p HD), 1920×1080 (1080p FHD), 2560×1440 (1440p QHD) y 3840×2160 (4K UHD). Cualquier ancho divisible que dé una relación 16:9 funciona, por ejemplo 640×360 u 800×450."
      },
      {
        "q": "¿Por qué 16:9 es el estándar para video?",
        "a": "16:9 fue elegido como el estándar internacional de HDTV en los años 80-90 porque es un compromiso matemático entre la relación de TV 4:3 más antigua y la relación de cine 2.39:1 más ancha. Minimiza el 'letterboxing' al mostrar contenido de cualquiera de las dos fuentes."
      },
      {
        "q": "¿Es 1920×1080 lo mismo que 16:9?",
        "a": "Sí. 1920 ÷ 16 = 120, y 1080 ÷ 9 = 120, por lo que ambas dimensiones comparten el mismo factor. 1920×1080 (Full HD / 1080p) es la resolución 16:9 más utilizada."
      },
      {
        "q": "¿Cuál es la relación 16:9 para una resolución 4K?",
        "a": "4K UHD (Ultra High Definition) en 16:9 es de 3840×2160 píxeles, exactamente cuatro veces el área de 1920×1080. Cinema 4K (DCI 4K) es 4096×2160, que es una relación ligeramente diferente (1.9:1)."
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
    "title": "Relación de Aspecto 9:16 — TikTok, Reels y Dimensiones de Video Vertical",
    "description": "Guía completa de la relación de aspecto 9:16: dimensiones en píxeles, casos de uso para TikTok, Instagram Reels, YouTube Shorts y una calculadora gratuita.",
    "explanation": "9:16 es la contraparte vertical (retrato) del formato panorámico 16:9. Llena perfectamente la pantalla de un smartphone sostenido en posición vertical, convirtiéndolo en el formato dominante para videos sociales de formato corto. TikTok, Instagram Reels, YouTube Shorts y Snapchat utilizan 9:16 como su lienzo principal.",
    "useCases": [
      "Videos de TikTok",
      "Reels e Historias de Instagram",
      "YouTube Shorts",
      "Videos de Snapchat",
      "Reels e Historias de Facebook",
      "Pines de video de Pinterest",
      "Publicidad optimizada para móviles"
    ],
    "dimensions": [
      {
        "name": "SD Mobile",
        "width": 540,
        "height": 960,
        "use": "Móviles de baja resolución, dispositivos antiguos"
      },
      {
        "name": "HD Mobile",
        "width": 720,
        "height": 1280,
        "use": "Calidad móvil estándar"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1080,
        "height": 1920,
        "use": "TikTok, Instagram Reels, YouTube Shorts — recomendado"
      },
      {
        "name": "QHD Mobile",
        "width": 1440,
        "height": 2560,
        "use": "Grabación con smartphone de gama alta"
      }
    ],
    "faq": [
      {
        "q": "¿Qué resolución debo usar para TikTok?",
        "a": "TikTok recomienda 1080×1920 píxeles (relación 9:16) para la mejor calidad. Este es video vertical Full HD. Usar una resolución más baja puede resultar en artefactos de compresión después de la carga."
      },
      {
        "q": "¿Es 9:16 lo mismo que el modo retrato?",
        "a": "Sí. 9:16 es la relación de video estándar de retrato (vertical), equivalente a girar un fotograma panorámico 16:9 de lado. Coincide con la orientación natural de un smartphone sostenido con una mano."
      },
      {
        "q": "¿Puedo publicar un video 9:16 en YouTube?",
        "a": "Sí — YouTube Shorts está diseñado específicamente para videos verticales 9:16. Las cargas regulares de YouTube también aceptan 9:16, pero se mostrarán con barras negras (pillarboxing) en el escritorio cuando se incrusten en un reproductor 16:9."
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
    "title": "Relación de Aspecto 4:3 — Dimensiones Clásicas de Pantalla y Calculadora",
    "description": "La relación de aspecto 4:3 explicada: tamaños de píxeles comunes, dónde se sigue utilizando hoy en día (tablets, presentaciones, cine) y una calculadora gratuita.",
    "explanation": "4:3 (cuatro a tres) fue el estándar para televisores y monitores de computadora desde la década de 1930 hasta principios de la década de 2000. Produce un rectángulo casi cuadrado que coincide con las proporciones de los fotogramas de película de 35 mm. Aunque en gran parte reemplazado por 16:9 para video, sigue siendo relevante para pantallas de iPad, presentaciones de PowerPoint y ciertos formatos de fotografía.",
    "useCases": [
      "Pantallas de iPad y tablets",
      "Televisión antigua y CCTV",
      "Presentaciones de PowerPoint / Keynote (formato antiguo)",
      "Cámaras digitales y fotografía",
      "Folletos impresos y documentos con relación A4",
      "Efectos de video y cine de estilo retro"
    ],
    "dimensions": [
      {
        "name": "QVGA",
        "width": 320,
        "height": 240,
        "use": "Dispositivos antiguos, pantallas integradas"
      },
      {
        "name": "VGA",
        "width": 640,
        "height": 480,
        "use": "Web clásica, estándar de webcam"
      },
      {
        "name": "SVGA",
        "width": 800,
        "height": 600,
        "use": "Monitores antiguos, proyectores"
      },
      {
        "name": "XGA",
        "width": 1024,
        "height": 768,
        "use": "iPad (1ª-4ª generación), proyectores estándar"
      },
      {
        "name": "SXGA",
        "width": 1280,
        "height": 960,
        "use": "Cámaras digitales, fotografía"
      },
      {
        "name": "UXGA",
        "width": 1600,
        "height": 1200,
        "use": "Monitores profesionales, imágenes con calidad de impresión"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la relación 4:3 en píxeles?",
        "a": "Las dimensiones de píxeles 4:3 comunes incluyen 640×480 (VGA), 800×600 (SVGA), 1024×768 (XGA) y 1280×960. Cualquier resolución donde ancho ÷ alto = 1.333... sigue la relación 4:3."
      },
      {
        "q": "¿Alguien sigue usando 4:3?",
        "a": "Sí. El iPad utiliza una pantalla 4:3 (2048×1536 en modelos Retina). Muchas plantillas de PowerPoint, cámaras DSLR y cámaras de vigilancia antiguas también utilizan 4:3. Es menos común para video, pero sigue siendo relevante para imágenes estáticas y presentaciones."
      },
      {
        "q": "¿Cuál es la diferencia entre 4:3 y 16:9?",
        "a": "4:3 es más cuadrado (relación de 1.33:1) mientras que 16:9 es más ancho y rectangular (relación de 1.78:1). 16:9 es el estándar moderno de TV y video; 4:3 es el estándar antiguo que lo precedió. Al ver contenido 4:3 en una pantalla 16:9, aparecen barras negras (pillarboxing) a los lados."
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
    "title": "Relación de Aspecto 1:1 — Dimensiones Cuadradas para Instagram y más allá",
    "description": "La relación de aspecto cuadrada 1:1: tamaños de píxeles, mejores usos en Instagram y redes sociales, y una calculadora de relación de aspecto gratuita.",
    "explanation": "1:1 es un cuadrado perfecto: el ancho y el alto son idénticos. Instagram popularizó el formato cuadrado para la fotografía en redes sociales, y sigue siendo un elemento básico para fotos de perfil, portadas de álbumes y publicaciones en el feed en todas las plataformas principales.",
    "useCases": [
      "Publicaciones en el feed de Instagram (formato original)",
      "Fotos de perfil en todas las plataformas",
      "Arte de álbumes y portadas de música",
      "Iconos de aplicaciones y favicons",
      "Fotografía de productos para comercio electrónico",
      "Imágenes para publicaciones de Facebook y LinkedIn"
    ],
    "dimensions": [
      {
        "name": "Small",
        "width": 400,
        "height": 400,
        "use": "Miniaturas de perfil, iconos de aplicaciones"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1080,
        "use": "Publicación en el feed de Instagram (recomendado)"
      },
      {
        "name": "High Res",
        "width": 2048,
        "height": 2048,
        "use": "Impresión, fotografía profesional"
      },
      {
        "name": "4K Square",
        "width": 4096,
        "height": 4096,
        "use": "Impresión de ultra alta resolución, archivo"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la mejor resolución 1:1 para Instagram?",
        "a": "Instagram recomienda 1080×1080 píxeles para publicaciones cuadradas en el feed. El mínimo es 320×320, pero 1080×1080 es el estándar para una visualización nítida en todos los dispositivos."
      },
      {
        "q": "¿Es una relación 1:1 lo mismo que un cuadrado?",
        "a": "Sí, exactamente. Una relación de aspecto 1:1 significa que el ancho es igual al alto, produciendo un cuadrado perfecto independientemente del número real de píxeles."
      },
      {
        "q": "¿Por qué Instagram usa 1:1?",
        "a": "Instagram fue diseñado originalmente en torno a la fotografía móvil y eligió el formato cuadrado 1:1 para estandarizar la cuadrícula del feed. Aunque más tarde añadieron formatos vertical (4:5) y horizontal (1.91:1), el cuadrado 1:1 sigue siendo el formato clásico de Instagram."
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
    "title": "Relación de Aspecto 4:5 — Dimensiones de Retrato para Instagram y Calculadora",
    "description": "La relación de aspecto 4:5 para publicaciones de retrato en Instagram: los mejores tamaños de píxeles, por qué ocupa más espacio en el feed y una calculadora gratuita.",
    "explanation": "4:5 es una relación de retrato (más alta que ancha) que ocupa el máximo espacio vertical permitido por el feed de Instagram, dándole a tu imagen más espacio en pantalla que una publicación cuadrada o apaisada. Con una relación de 0.8:1, es ligeramente más ancha que una pantalla de teléfono 9:16, lo que la hace ideal para retratos, fotografías de productos y fotografía editorial.",
    "useCases": [
      "Publicaciones en el feed de Instagram (retrato — altura máxima)",
      "Fotografía para redes sociales",
      "Fotografía de retrato para impresión",
      "Pines de Pinterest (formato secundario)",
      "Publicaciones de imágenes de retrato en Facebook"
    ],
    "dimensions": [
      {
        "name": "Minimum",
        "width": 600,
        "height": 750,
        "use": "Mínimo para una calidad aceptable en Instagram"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1350,
        "use": "Publicación de retrato en Instagram (recomendado)"
      },
      {
        "name": "High Res",
        "width": 2160,
        "height": 2700,
        "use": "Imágenes de retrato con calidad de impresión"
      }
    ],
    "faq": [
      {
        "q": "¿Por qué usar 4:5 en lugar de 9:16 para publicaciones de Instagram?",
        "a": "Instagram recorta las imágenes 9:16 para el feed a 4:5 (la relación de retrato máxima permitida para publicaciones en el feed). Si usas 4:5, obtendrás la imagen más alta permitida en el feed sin perder contenido por el recorte. 9:16 es solo para Stories y Reels."
      },
      {
        "q": "¿Cuáles son las dimensiones en píxeles para 4:5 en Instagram?",
        "a": "El tamaño recomendado es 1080×1350 píxeles. Este es el tamaño de retrato máximo que Instagram permite para publicaciones en el feed y se muestra nítidamente en todos los dispositivos."
      },
      {
        "q": "¿El 4:5 consigue más alcance en Instagram?",
        "a": "Una publicación 4:5 ocupa más espacio vertical en el feed que una publicación cuadrada 1:1 o apaisada 1.91:1, lo que puede ayudar a captar más atención mientras los usuarios se desplazan. Muchos creadores reportan tasas de interacción más altas con publicaciones de retrato, aunque esto depende del contenido."
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
    "title": "Relación de Aspecto 3:2 — Fotografía, DSLR y Dimensiones de Impresión",
    "description": "La relación de aspecto 3:2 para cámaras DSLR e impresión: dimensiones comunes, orígenes del carrete de 35mm y una calculadora de relación de aspecto gratuita.",
    "explanation": "La relación 3:2 se origina en el fotograma de película de 35mm, que mide 36mm × 24mm — una relación 3:2. Sigue siendo la relación nativa para la mayoría de las cámaras DSLR y sin espejo, y se corresponde directamente con tamaños de impresión comunes como 4×6 pulgadas, 6×9 pulgadas y 12×18 pulgadas.",
    "useCases": [
      "Sensores de cámaras DSLR y sin espejo",
      "Fotografía con película de 35mm",
      "Impresiones de 4×6 y 6×9 pulgadas",
      "Diseños de álbumes de fotos",
      "Fotografía de retrato profesional"
    ],
    "dimensions": [
      {
        "name": "6MP",
        "width": 3008,
        "height": 2000,
        "use": "DSLR de nivel básico"
      },
      {
        "name": "12MP",
        "width": 4272,
        "height": 2848,
        "use": "DSLR de gama media (ej. Canon 60D)"
      },
      {
        "name": "24MP",
        "width": 6000,
        "height": 4000,
        "use": "DSLR profesional (ej. Nikon D3200)"
      },
      {
        "name": "36MP",
        "width": 7360,
        "height": 4912,
        "use": "DSLR de alta resolución (ej. Nikon D800)"
      }
    ],
    "faq": [
      {
        "q": "¿Qué tamaños de impresión coinciden con una relación 3:2?",
        "a": "Los tamaños de impresión estándar 3:2 incluyen 4×6 pulgadas, 6×9 pulgadas, 8×12 pulgadas, 12×18 pulgadas y 20×30 pulgadas. Estos tamaños de impresión mostrarán tu imagen completa sin recortes."
      },
      {
        "q": "¿Cuál es la relación 3:2 en píxeles?",
        "a": "Cualquier resolución donde ancho ÷ alto = 1.5 es una relación 3:2. Ejemplos comunes: 3000×2000, 4500×3000, 6000×4000. La mayoría de las cámaras DSLR capturan imágenes de forma nativa en 3:2."
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
    "title": "Relación de Aspecto 21:9 — Dimensiones y Calculadora de Monitores Ultrawide",
    "description": "La relación de aspecto ultrawide 21:9: resoluciones comunes (2560×1080, 3440×1440, 5120×2160), usos en juegos y cine, y una calculadora gratuita.",
    "explanation": "21:9 (a veces llamado ultrawide) proporciona un campo de visión mucho más amplio que los monitores estándar 16:9. Es popular para juegos (eliminando la necesidad de múltiples monitores), producción de video cinematográfico y flujos de trabajo de productividad. Muchas películas cinematográficas grabadas en 2.35:1 o 2.39:1 se ven cerca de 21:9 cuando se muestran en una pantalla ultrawide.",
    "useCases": [
      "Monitores de juegos ultrawide",
      "Estaciones de trabajo para edición de video y etalonaje",
      "Productividad con múltiples aplicaciones",
      "Visualización de películas cinematográficas (letterboxing mínimo)",
      "Simuladores de vuelo y juegos de carreras"
    ],
    "dimensions": [
      {
        "name": "FHD Ultrawide",
        "width": 2560,
        "height": 1080,
        "use": "Juegos ultrawide de entrada, monitores económicos"
      },
      {
        "name": "QHD Ultrawide",
        "width": 3440,
        "height": 1440,
        "use": "Ultrawide premium estándar"
      },
      {
        "name": "5K Ultrawide",
        "width": 5120,
        "height": 2160,
        "use": "Estación de trabajo profesional, LG 34WK95U"
      }
    ],
    "faq": [
      {
        "q": "¿Es 21:9 realmente 21 a 9?",
        "a": "No exactamente — el nombre '21:9' es una etiqueta de marketing. La mayoría de los monitores ultrawide tienen una relación más cercana a 64:27 (2.370:1) o 43:18 (2.388:1). La relación real depende de la resolución específica (por ejemplo, 3440×1440 = 43:18)."
      },
      {
        "q": "¿Todos los juegos son compatibles con 21:9?",
        "a": "Muchos juegos modernos son compatibles de forma nativa con el formato ultrawide 21:9. Algunos títulos más antiguos o ciertos juegos multijugador restringen el campo de visión a 16:9 para evitar ventajas competitivas. Consulta la configuración del juego o los sitios de la comunidad para conocer el estado de compatibilidad con ultrawide."
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
    "title": "Relación de Aspecto 2:1 — Dimensiones Panorámicas y de Banner",
    "description": "La relación de aspecto 2:1: usos para fotografía panorámica, banners web y encabezados de Twitter/X, con una calculadora gratuita.",
    "explanation": "2:1 es una relación panorámica ancha donde el ancho es exactamente el doble de la altura. Se utiliza para fotografía panorámica escénica, banners hero de páginas web y ciertos encabezados de redes sociales. Se sitúa entre las relaciones de pantalla ancha 16:9 y las verdaderas relaciones cinematográficas.",
    "useCases": [
      "Fotografía de paisajes panorámicos",
      "Banners hero y encabezados de sitios web",
      "Recorte de fotos 360°",
      "Encabezados de boletines por correo electrónico",
      "Cartelería digital"
    ],
    "dimensions": [
      {
        "name": "Web Banner",
        "width": 1200,
        "height": 600,
        "use": "Banner web estándar, imagen OG"
      },
      {
        "name": "HD Banner",
        "width": 2000,
        "height": 1000,
        "use": "Imagen hero web de alta resolución"
      },
      {
        "name": "Panoramic",
        "width": 4000,
        "height": 2000,
        "use": "Fotografía panorámica"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre 2:1 y 16:9?",
        "a": "Una relación 2:1 (2.0:1) es más ancha que 16:9 (1.78:1). Una imagen 2:1 es más panorámica — por ejemplo, 2000×1000 píxeles frente a 1920×1080 en 16:9. 2:1 tiene más espacio horizontal en relación con su altura."
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
    "title": "Relación de Aspecto 5:4 — Dimensiones para Impresión y Monitores",
    "description": "La relación de aspecto 5:4: impresiones de 8×10, cámaras de formato medio y monitores antiguos de 1280×1024. Calculadora gratuita incluida.",
    "explanation": "5:4 es ligeramente más alto que la relación estándar 4:3. Coincide con el tamaño de impresión de 8×10 pulgadas utilizado en estudios de fotografía de retratos y corresponde a la resolución 1280×1024 común en monitores CRT antiguos y los primeros monitores LCD.",
    "useCases": [
      "Impresiones de retrato de 8×10 pulgadas",
      "Impresiones fotográficas de 10×8 pulgadas",
      "Contenido para monitores antiguos de 1280×1024",
      "Fotografía de formato medio",
      "Fotografía de retrato de estudio"
    ],
    "dimensions": [
      {
        "name": "SXGA",
        "width": 1280,
        "height": 1024,
        "use": "Monitores y proyectores antiguos"
      },
      {
        "name": "Print 8×10",
        "width": 2400,
        "height": 3000,
        "use": "Impresión de 8×10 pulgadas a 300 DPI"
      },
      {
        "name": "Print 16×20",
        "width": 4800,
        "height": 6000,
        "use": "Impresión de 16×20 pulgadas a 300 DPI"
      }
    ],
    "faq": [
      {
        "q": "¿Qué píxeles coinciden con la relación 5:4?",
        "a": "Los tamaños de píxeles comunes para 5:4 incluyen 1280×1024, 2560×2048, y cualquier par de dimensiones donde ancho ÷ alto = 1.25. Una impresión de 8×10 escaneada a 300 DPI produce 2400×3000 píxeles (en orientación vertical, 3:2.4 = 5:4)."
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
    "title": "Tamaños de Imagen y Relaciones de Aspecto de Instagram 2026 — Guía Completa",
    "description": "Todas las dimensiones de imagen y video de Instagram para 2026: publicaciones del feed, Stories, Reels, fotos de perfil y más. Tamaños exactos en píxeles y relaciones de aspecto.",
    "intro": "Instagram admite múltiples relaciones de aspecto dependiendo de dónde aparezca tu contenido. Obtener las dimensiones correctas asegura que tus imágenes se muestren nítidas sin recortes no deseados. Aquí están todos los tamaños oficiales recomendados para 2026.",
    "formats": [
      {
        "type": "Publicación del Feed — Cuadrada",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Formato clásico; seguro para todos los dispositivos"
      },
      {
        "type": "Publicación del Feed — Retrato (altura máxima)",
        "width": 1080,
        "height": 1350,
        "ratio": "4:5",
        "notes": "Ocupa la mayor parte del espacio del feed; recomendado para máxima visibilidad"
      },
      {
        "type": "Publicación del Feed — Horizontal",
        "width": 1080,
        "height": 566,
        "ratio": "1.91:1",
        "notes": "Imagen ancha; menos espacio en el feed que el formato retrato"
      },
      {
        "type": "Historia",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vertical a pantalla completa; máximo 15 segundos para fotos"
      },
      {
        "type": "Reel",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "El video debe durar al menos 3 segundos; máximo 90 segundos"
      },
      {
        "type": "Foto de Perfil",
        "width": 320,
        "height": 320,
        "ratio": "1:1",
        "notes": "Se muestra como un círculo; mantén el contenido clave centrado"
      },
      {
        "type": "Publicación en Carrusel",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Cada tarjeta debe tener las mismas dimensiones"
      }
    ],
    "tips": [
      "Usa 4:5 (1080×1350) para las publicaciones del feed para maximizar el espacio vertical al desplazarte",
      "Mantén el contenido importante dentro del 80% central de las Stories para evitar superposiciones de la UI",
      "Exporta con un ancho completo de 1080px — Instagram comprimirá cualquier cosa más grande de todos modos",
      "Usa PNG para gráficos e ilustraciones; JPEG con una calidad del 80–90% para fotos",
      "Evita el texto pequeño cerca de los bordes — podría recortarse en dispositivos antiguos"
    ],
    "faq": [
      {
        "q": "¿Cuál es el mejor tamaño para las publicaciones de Instagram en 2026?",
        "a": "Para una máxima visibilidad en el feed, usa 1080×1350 píxeles (relación 4:5 — retrato). Este es el formato más alto que Instagram permite para las publicaciones del feed y ocupa la mayor parte de la pantalla mientras los usuarios se desplazan."
      },
      {
        "q": "¿Puedo publicar un video 16:9 en Instagram?",
        "a": "Sí, pero Instagram recortará los videos 16:9 para que se ajusten al feed (a 1:1 o 4:5). Para Reels y Stories, los videos 16:9 mostrarán barras negras (letterboxing) en la parte superior e inferior. Siempre graba en vertical (9:16) para Reels y Stories."
      },
      {
        "q": "¿Qué tamaño debe tener el texto de las Stories de Instagram?",
        "a": "Mantén todo el texto y los elementos visuales clave dentro de la zona segura: aproximadamente 1080×1420 píxeles centrados dentro del lienzo de 1080×1920. Los 250px superiores y los 250px inferiores suelen estar cubiertos por elementos de la UI como el nombre de usuario y la barra de respuesta."
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
    "title": "Dimensiones de Video y Relaciones de Aspecto de YouTube 2026 — Guía Completa",
    "description": "Todas las dimensiones de imagen y video de YouTube para 2026: videos, Shorts, miniaturas, banners de canal y fotos de perfil. Tamaños de píxeles y relaciones exactas.",
    "intro": "YouTube es principalmente una plataforma 16:9, pero Shorts utiliza video vertical 9:16. Ajustar las dimensiones correctamente mejora la tasa de clics de tus miniaturas y asegura que tu contenido se vea nítido en todos los dispositivos.",
    "formats": [
      {
        "type": "Video (HD estándar)",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Recomendado para la mayoría de las subidas (1080p)"
      },
      {
        "type": "Video (4K)",
        "width": 3840,
        "height": 2160,
        "ratio": "16:9",
        "notes": "Calidad máxima; requiere grabación 4K"
      },
      {
        "type": "Shorts",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Video vertical; máximo 60 segundos"
      },
      {
        "type": "Miniatura",
        "width": 1280,
        "height": 720,
        "ratio": "16:9",
        "notes": "Miniatura personalizada; tamaño máximo de archivo 2MB"
      },
      {
        "type": "Banner de Canal (Escritorio)",
        "width": 2560,
        "height": 1440,
        "ratio": "16:9",
        "notes": "Banner completo; solo el centro de 1546×423px se muestra en todos los dispositivos"
      },
      {
        "type": "Foto de Perfil",
        "width": 800,
        "height": 800,
        "ratio": "1:1",
        "notes": "Se muestra como un círculo; mínimo 98×98px"
      }
    ],
    "tips": [
      "Diseña miniaturas de 1280×720 con texto en negrita y colores de alto contraste para una mejor CTR",
      "Mantén la zona segura del banner del canal en 1546×423 píxeles para asegurar que se muestre en todos los dispositivos",
      "Sube videos con la resolución más alta que puedas — YouTube transcodifica hacia abajo, no hacia arriba",
      "Para Shorts, usa 1080×1920 (9:16) y asegúrate de que no haya contenido esencial en el 10% superior o inferior",
      "El archivo de la miniatura debe ser inferior a 2MB — usa JPEG para fotos, PNG para gráficos"
    ],
    "faq": [
      {
        "q": "¿Qué resolución es la mejor para los videos de YouTube?",
        "a": "1920×1080 (1080p Full HD) es la resolución estándar y recomendada para las subidas de YouTube. Proporciona video nítido en la mayoría de las pantallas sin requerir equipo de grabación 4K."
      },
      {
        "q": "¿Qué tamaño debe tener una miniatura de YouTube?",
        "a": "YouTube recomienda 1280×720 píxeles (relación 16:9) para miniaturas personalizadas. El tamaño máximo de archivo es 2MB. Usa JPEG para fotos o PNG para gráficos diseñados."
      },
      {
        "q": "¿Cuál es la resolución de los YouTube Shorts?",
        "a": "YouTube Shorts utiliza una relación vertical 9:16, con la resolución recomendada de 1080×1920 píxeles. La duración máxima para Shorts es de 60 segundos."
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
    "title": "Dimensiones y Relaciones de Aspecto de Video de TikTok 2026 — Guía Completa",
    "description": "Tamaños y relaciones de aspecto de video de TikTok para 2026: la mejor resolución para videos de TikTok, fotos de perfil e imágenes de portada.",
    "intro": "TikTok es una plataforma de video vertical diseñada para dispositivos móviles. Todo el contenido debe crearse para una orientación vertical de 9:16. Aquí están las especificaciones para asegurar que tu contenido se vea de la mejor manera.",
    "formats": [
      {
        "type": "Video (Recomendado)",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Full HD vertical — úsalo siempre"
      },
      {
        "type": "Video (Mínimo)",
        "width": 720,
        "height": 1280,
        "ratio": "9:16",
        "notes": "Mínimo para una calidad aceptable"
      },
      {
        "type": "Foto de Perfil",
        "width": 200,
        "height": 200,
        "ratio": "1:1",
        "notes": "Se muestra como un círculo"
      },
      {
        "type": "Imagen de Portada",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Extraída automáticamente del video; se puede personalizar"
      }
    ],
    "tips": [
      "Graba y sube siempre a 1080×1920 (9:16) para la mejor calidad de visualización",
      "Mantén el contenido clave en el centro del encuadre — el 20% inferior está cubierto por subtítulos y la interfaz de usuario",
      "TikTok es compatible con los formatos .mp4 y .mov; se recomienda el códec H.264",
      "Usa la herramienta de superposición de texto de TikTok con moderación — se superpone a tu contenido",
      "La iluminación brillante y los elementos visuales de alto contraste funcionan mejor en el algoritmo"
    ],
    "faq": [
      {
        "q": "¿Cuál es la mejor resolución de video para TikTok?",
        "a": "TikTok recomienda 1080×1920 píxeles (relación 9:16, Full HD vertical). Usar esta resolución asegura que tu video se muestre sin barras negras o 'letterboxing' en cualquier dispositivo."
      },
      {
        "q": "¿Puedo subir un video horizontal (16:9) a TikTok?",
        "a": "Sí, TikTok acepta videos horizontales, pero se mostrarán con barras negras arriba y abajo ('letterboxed'). Para la mejor experiencia del espectador y rendimiento del algoritmo, usa siempre video vertical (9:16)."
      },
      {
        "q": "¿Cuál es la duración máxima de un video en TikTok?",
        "a": "A partir de 2026, TikTok permite videos de hasta 10 minutos de duración para cuentas estándar. Los videos más cortos (15–60 segundos) suelen tener un mejor rendimiento en el algoritmo de recomendación."
      }
    ],
    "relatedRatios": [
      "9-16",
      "1-1"
    ]
  },
  "twitter": {
    "name": "X / Twitter",
    "title": "Tamaños de Imagen y Relaciones de Aspecto de X (Twitter) 2026 — Guía Completa",
    "description": "Todas las dimensiones de imagen de X (Twitter) para 2026: imágenes de publicaciones, banners de encabezado, fotos de perfil y tamaños de video. Especificaciones exactas en píxeles.",
    "intro": "X (anteriormente Twitter) admite una variedad de formatos y tamaños de imagen. Las imágenes en las publicaciones se recortan automáticamente en la vista de la línea de tiempo, pero se muestran completas al tocarlas. Aquí están todas las dimensiones recomendadas.",
    "formats": [
      {
        "type": "Imagen de Publicación (Horizontal)",
        "width": 1600,
        "height": 900,
        "ratio": "16:9",
        "notes": "Recomendado para la mayoría de las imágenes de publicaciones"
      },
      {
        "type": "Imagen de Publicación (Cuadrada)",
        "width": 1200,
        "height": 1200,
        "ratio": "1:1",
        "notes": "Seguro para todos los contextos de visualización"
      },
      {
        "type": "Imagen de Publicación (Vertical)",
        "width": 900,
        "height": 1350,
        "ratio": "2:3",
        "notes": "Relación vertical máxima admitida"
      },
      {
        "type": "Foto de Perfil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Se muestra como un círculo; mínimo recomendado 400×400"
      },
      {
        "type": "Encabezado / Banner",
        "width": 1500,
        "height": 500,
        "ratio": "3:1",
        "notes": "Parte superior de la página de perfil; evitar los bordes — se recorta en dispositivos móviles"
      },
      {
        "type": "Video",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Duración máxima 2:20; límite de tamaño de archivo 512MB"
      }
    ],
    "tips": [
      "Usa 1600×900 para imágenes de publicaciones horizontales — se muestra sin recortar en la línea de tiempo",
      "Mantén el 60% central del banner de encabezado seguro para todos los dispositivos",
      "Las fotos de perfil se muestran como círculos — usa un sujeto centrado sin contenido importante cerca de los bordes",
      "X comprime las imágenes — exporta con calidad JPEG al 100% para minimizar la compresión visible",
      "Para las tarjetas de Twitter (vistas previas de enlaces), usa una relación 2:1 (ej., 1200×628) para el formato de tarjeta grande"
    ],
    "faq": [
      {
        "q": "¿Cuál es el mejor tamaño de imagen para una publicación de X (Twitter)?",
        "a": "1600×900 píxeles (16:9) es el tamaño recomendado para las imágenes de publicaciones de X. Se muestra sin recortar en la línea de tiempo. El formato cuadrado (1200×1200) también es seguro y se ve bien en todos los contextos."
      },
      {
        "q": "¿Qué tamaño tiene el banner de encabezado de X (Twitter)?",
        "a": "El tamaño de encabezado de X recomendado es 1500×500 píxeles (relación 3:1). Ten en cuenta que el banner se recorta de manera diferente en escritorio y en móvil — mantén el contenido importante dentro del área central."
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
    "title": "Tamaños y Proporciones de Imagen de LinkedIn 2026 — Guía Completa",
    "description": "Dimensiones de imagen de LinkedIn para 2026: imágenes de publicaciones, banners de empresa, fotos de perfil e imágenes de portada. Tamaños exactos en píxeles para contenido profesional.",
    "intro": "LinkedIn es una red profesional donde la calidad de la imagen es crucial para la credibilidad. Aquí están los tamaños de imagen recomendados para asegurar que tu perfil y tus publicaciones luzcan impecables.",
    "formats": [
      {
        "type": "Imagen de Publicación (Horizontal)",
        "width": 1200,
        "height": 628,
        "ratio": "1.91:1",
        "notes": "Imagen estándar para publicaciones de LinkedIn"
      },
      {
        "type": "Imagen de Publicación (Cuadrada)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Las publicaciones cuadradas funcionan bien en LinkedIn"
      },
      {
        "type": "Foto de Perfil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Mínimo 200×200; usa una foto de cabeza profesional"
      },
      {
        "type": "Banner Personal",
        "width": 1584,
        "height": 396,
        "ratio": "4:1",
        "notes": "Se muestra detrás de la foto de perfil"
      },
      {
        "type": "Logotipo de Empresa",
        "width": 300,
        "height": 300,
        "ratio": "1:1",
        "notes": "Logotipo cuadrado para la página de empresa"
      },
      {
        "type": "Banner de Empresa",
        "width": 1128,
        "height": 191,
        "ratio": "5.9:1",
        "notes": "Banner muy ancho; mantén el texto centrado"
      }
    ],
    "tips": [
      "Usa 1200×628 para imágenes de vista previa de enlaces (formato de tarjeta de LinkedIn)",
      "La foto de perfil debe mostrar tu cara claramente — LinkedIn es un contexto profesional",
      "El banner personal puede mostrar tu trabajo, conjunto de habilidades o marca — usa 1584×396",
      "Las publicaciones de empresa con imágenes obtienen significativamente más interacción que las publicaciones solo de texto",
      "Exporta las fotos de perfil como JPEG o PNG; el tamaño máximo de archivo es de 8MB"
    ],
    "faq": [
      {
        "q": "¿Cuál es el mejor tamaño de imagen para publicaciones de LinkedIn?",
        "a": "1200×628 píxeles (relación 1.91:1) es el tamaño de imagen recomendado por LinkedIn para publicaciones. Las imágenes cuadradas (1080×1080) también funcionan bien y pueden mostrarse mejor en el feed móvil."
      },
      {
        "q": "¿Qué tamaño tiene el banner de perfil de LinkedIn?",
        "a": "El banner personal de LinkedIn (foto de fondo) debe ser de 1584×396 píxeles (relación 4:1). Este es el tamaño que se muestra detrás de tu foto de perfil en escritorio y móvil."
      }
    ],
    "relatedRatios": [
      "1-1",
      "16-9"
    ]
  },
  "facebook": {
    "name": "Facebook",
    "title": "Facebook Tamaños de Imagen y Relaciones de Aspecto 2026 — Guía Completa",
    "description": "Dimensiones de imagen de Facebook para 2026: imágenes de publicaciones, fotos de portada, Stories, fotos de perfil y más. Especificaciones exactas en píxeles.",
    "intro": "Facebook admite muchos formatos de imagen y las especificaciones varían según la ubicación. Aquí están las dimensiones recomendadas para 2026 para asegurar que tu contenido se vea lo mejor posible.",
    "formats": [
      {
        "type": "Imagen de Publicación",
        "width": 1200,
        "height": 630,
        "ratio": "1.91:1",
        "notes": "Imagen estándar para el feed; también utilizada para previsualizaciones de enlaces"
      },
      {
        "type": "Imagen de Publicación (Cuadrada)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Segura tanto para feeds de escritorio como móviles"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vertical a pantalla completa; duración de 24 horas"
      },
      {
        "type": "Foto de Perfil",
        "width": 180,
        "height": 180,
        "ratio": "1:1",
        "notes": "Se muestra a 170×170 en escritorio; recorte circular"
      },
      {
        "type": "Foto de Portada",
        "width": 820,
        "height": 312,
        "ratio": "2.63:1",
        "notes": "Se muestra a 820×312 en escritorio, 640×360 en móvil"
      },
      {
        "type": "Portada de Evento",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Imagen de cabecera de la página del evento"
      }
    ],
    "tips": [
      "Diseña fotos de portada con el contenido clave en el centro — el recorte difiere en móvil vs escritorio",
      "Para publicaciones con enlaces, usa una imagen de 1200×630 para activar la tarjeta de previsualización grande de Facebook",
      "Sube fotos con la mayor resolución posible — Facebook las comprimirá",
      "Las fotos de perfil se muestran como círculos — mantén las caras o logotipos centrados",
      "Stories zona segura: mantén el contenido dentro de los 250px de los bordes superior e inferior"
    ],
    "faq": [
      {
        "q": "¿Cuál es el mejor tamaño de imagen para publicaciones de Facebook?",
        "a": "1200×630 píxeles (relación 1.91:1) es el tamaño recomendado para publicaciones de Facebook. Esto también funciona para imágenes de previsualización de enlaces. Cuadrado (1080×1080) es una alternativa segura que se ve consistente en todas las ubicaciones."
      },
      {
        "q": "¿Cuál es el tamaño de la foto de portada de Facebook?",
        "a": "El tamaño recomendado para la foto de portada de Facebook es 820×312 píxeles para escritorio. En móvil, se muestra como 640×360. Para evitar recortes, mantén el contenido importante en el área central de 640×312."
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
    "title": "Tamaños y Proporciones de Pines de Pinterest 2026 — Guía Completa",
    "description": "Dimensiones de imagen de Pinterest para 2026: pines estándar, Idea Pins, pines cuadrados y fotos de perfil. Obtén la proporción de aspecto correcta para un alcance máximo.",
    "intro": "Pinterest es una plataforma de descubrimiento visual donde las imágenes más altas (proporción 2:3) funcionan mejor, ya que ocupan más espacio en el feed. Aquí están las dimensiones recomendadas para todos los tipos de contenido de Pinterest.",
    "formats": [
      {
        "type": "Pin Estándar (Vertical)",
        "width": 1000,
        "height": 1500,
        "ratio": "2:3",
        "notes": "Recomendado — mejor alcance y engagement"
      },
      {
        "type": "Pin Cuadrado",
        "width": 1000,
        "height": 1000,
        "ratio": "1:1",
        "notes": "Funciona bien; menos espacio vertical que el formato vertical"
      },
      {
        "type": "Pin Alto",
        "width": 1000,
        "height": 2100,
        "ratio": "1:2.1",
        "notes": "Altura máxima; usar con cuidado — puede ser recortado"
      },
      {
        "type": "Idea Pin",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Formato de historia de varias páginas; vertical a pantalla completa"
      },
      {
        "type": "Foto de Perfil",
        "width": 165,
        "height": 165,
        "ratio": "1:1",
        "notes": "Recorte circular; mantener el sujeto centrado"
      }
    ],
    "tips": [
      "Usa 1000×1500 (2:3) para pines estándar — es el tamaño ideal para la visibilidad en el feed",
      "Evita ir más allá de una proporción de 1:2.1 — Pinterest puede recortar imágenes excesivamente altas",
      "Añade una superposición de texto en la parte superior central del pin — evita los 100px inferiores donde se muestra el dominio de origen",
      "Guarda los pines en JPEG para fotos (máx. 20MB) o PNG para gráficos con transparencia",
      "Los Idea Pins (9:16) funcionan de manera diferente a los pines estándar — son más parecidos a las Stories"
    ],
    "faq": [
      {
        "q": "¿Cuál es el mejor tamaño de pin de Pinterest?",
        "a": "El tamaño de pin de Pinterest recomendado es de 1000×1500 píxeles (proporción 2:3). Este formato vertical ocupa más espacio vertical en el feed, aumentando la visibilidad y la tasa de clics."
      },
      {
        "q": "¿Puedo usar una imagen cuadrada en Pinterest?",
        "a": "Sí, los pines cuadrados 1:1 (por ejemplo, 1000×1000) son compatibles. Sin embargo, los pines verticales (2:3) suelen tener un mejor rendimiento, ya que ocupan más espacio en pantalla en el feed estilo mampostería."
      },
      {
        "q": "¿Qué es un Pinterest Idea Pin?",
        "a": "Los Idea Pins (anteriormente Story Pins) son contenido vertical de varias páginas y pantalla completa (9:16, 1080×1920). No enlazan a sitios web externos y están diseñados para contenido nativo dentro de Pinterest."
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
    "title": "¿Qué es la relación de aspecto? Una guía para principiantes",
    "description": "Una explicación clara y sencilla para principiantes sobre la relación de aspecto: qué significa, cómo se escribe, por qué es importante para pantallas e imágenes, y cómo usarla.",
    "intro": "La relación de aspecto es uno de esos términos que suena técnico pero que en realidad es bastante simple una vez que lo entiendes. Ya sea que estés redimensionando una foto para Instagram, configurando un video de YouTube o comprando un nuevo monitor, la relación de aspecto determina la forma de tu imagen o pantalla. Esta guía explica todo lo que necesitas saber.",
    "sections": [
      {
        "heading": "¿Qué significa la relación de aspecto?",
        "body": "La relación de aspecto es la relación proporcional entre el ancho y el alto de una imagen, pantalla o fotograma de video. Se escribe como dos números separados por dos puntos, como en 16:9 o 4:3. El primer número es el ancho y el segundo es el alto. Una relación 16:9 significa que por cada 16 unidades de ancho, la altura es de 9 unidades. El tamaño real no importa. Una imagen de 160×90 píxeles y una imagen de 3840×2160 píxeles son ambas 16:9 porque comparten las mismas proporciones."
      },
      {
        "heading": "¿Por qué es importante la relación de aspecto?",
        "body": "La relación de aspecto es importante siempre que estés mostrando, imprimiendo o compartiendo contenido visual. Si la relación de tu imagen no coincide con la relación de la pantalla o el contenedor, sucede una de estas dos cosas:",
        "list": [
          "Letterboxing / Pillarboxing: aparecen barras negras para llenar el espacio vacío",
          "Recorte: la imagen se corta para ajustarse, y se pierde parte del contenido",
          "Estiramiento: la imagen se distorsiona para llenar el encuadre (menos deseable)"
        ]
      },
      {
        "heading": "Relaciones de aspecto comunes y dónde se utilizan",
        "body": "Diferentes industrias y plataformas han estandarizado diferentes relaciones de aspecto. Aquí están las más importantes que debes conocer:",
        "table": {
          "headers": [
            "Relación",
            "Decimal",
            "Uso común"
          ],
          "rows": [
            [
              "16:9",
              "1.78:1",
              "YouTube, Netflix, TV, monitores, presentaciones"
            ],
            [
              "9:16",
              "0.56:1",
              "TikTok, Instagram Reels, YouTube Shorts, Stories"
            ],
            [
              "1:1",
              "1.00:1",
              "Publicaciones del feed de Instagram, fotos de perfil, carátulas de álbumes"
            ],
            [
              "4:5",
              "0.80:1",
              "Publicaciones verticales de Instagram (altura máxima del feed)"
            ],
            [
              "4:3",
              "1.33:1",
              "iPads, TV antigua, PowerPoint, cámaras DSLR"
            ],
            [
              "3:2",
              "1.50:1",
              "Cámaras DSLR, impresiones 4×6, película de 35mm"
            ],
            [
              "2.39:1",
              "2.39:1",
              "Películas de cine en formato Cinemascope"
            ]
          ]
        }
      },
      {
        "heading": "Cómo calcular una relación de aspecto",
        "body": "Para encontrar la relación de aspecto de cualquier imagen, divide tanto el ancho como el alto por su Máximo Común Divisor (MCD). Por ejemplo, una imagen de 1920×1080 píxeles: ambos números son divisibles por 120, lo que da 16:9. Nuestra calculadora gratuita hace esto automáticamente, solo ingresa tu ancho y alto."
      },
      {
        "heading": "Relación de aspecto vs. Resolución",
        "body": "La relación de aspecto y la resolución están relacionadas, pero no son lo mismo. La resolución se refiere al número total de píxeles (por ejemplo, 1920×1080). La relación de aspecto se refiere a la forma (por ejemplo, 16:9). Dos imágenes pueden compartir la misma relación de aspecto pero tener resoluciones completamente diferentes: 640×360 y 3840×2160 son ambas 16:9 pero difieren enormemente en el recuento de píxeles y la calidad."
      }
    ],
    "conclusion": "Todo el tema se reduce a un hábito: decide la forma antes de decidir el tamaño. Relación primero, píxeles después. Si aciertas con ese orden, el resto (el recorte, el letterboxing, las barras negras, la carga borrosa) dejará de ocurrir por sí solo."
  },
  "how-to-calculate-aspect-ratio": {
    "title": "Cómo Calcular la Relación de Aspecto: La Guía Completa",
    "description": "Aprende a calcular la relación de aspecto paso a paso: usando el método del MCD, la fórmula y nuestra calculadora en línea gratuita. Incluye ejemplos resueltos.",
    "intro": "Saber cómo calcular una relación de aspecto es una habilidad fundamental para cualquiera que trabaje con imágenes, video o diseño. Esta guía cubre las matemáticas detrás de ello, los métodos manuales más rápidos y cómo usar nuestra calculadora gratuita para obtener resultados instantáneos.",
    "sections": [
      {
        "heading": "La Fórmula de la Relación de Aspecto",
        "body": "La relación de aspecto de cualquier rectángulo es simplemente: Ancho ÷ Alto. Para expresarla como una relación W:H limpia (por ejemplo, 16:9 en lugar de 1.778:1), necesitas encontrar el Máximo Común Divisor (MCD) del ancho y el alto y dividir ambos por él."
      },
      {
        "heading": "Paso a Paso: Cómo Encontrar la Relación de Aspecto",
        "body": "Así es como se calcula manualmente la relación de aspecto de cualquier imagen:",
        "list": [
          "Paso 1: Anota el ancho y el alto en píxeles (por ejemplo, 1920 y 1080)",
          "Paso 2: Encuentra el Máximo Común Divisor (MCD) de ambos números. Para 1920 y 1080, el MCD es 120.",
          "Paso 3: Divide ambos números por el MCD. 1920 ÷ 120 = 16; 1080 ÷ 120 = 9.",
          "Paso 4: Escribe el resultado como W:H — en este caso, 16:9."
        ]
      },
      {
        "heading": "Ejemplos Resueltos",
        "body": "Aquí tienes algunas dimensiones comunes y sus relaciones de aspecto:",
        "table": {
          "headers": [
            "Ancho",
            "Alto",
            "MCD",
            "Relación de Aspecto"
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
        "heading": "Cómo Encontrar el MCD Sin Calculadora",
        "body": "Cada método anterior depende de encontrar el Máximo Común Divisor, y ese es el paso que la mayoría de las guías omiten. La forma fiable es el algoritmo de Euclides, que tiene más de dos mil años y toma aproximadamente cuatro pasos para números del tamaño de una pantalla: divide el número mayor por el menor, guarda el resto, luego repite con el número menor y ese resto hasta que el resto sea cero. El último número no cero es el MCD. Para 1920 y 1080: 1920 ÷ 1080 deja 840; 1080 ÷ 840 deja 240; 840 ÷ 240 deja 120; 240 ÷ 120 deja 0. El MCD es 120."
      },
      {
        "heading": "Cuando los Números se Resisten a Reducirse",
        "body": "No cada par de dimensiones da una relación ordenada. 1847 × 923 tiene un MCD de 1, por lo que su relación \"simplificada\" es 1847:923 — técnicamente correcta e inútil. Cuando eso sucede, deja de intentar reducir y haz dos cosas en su lugar: toma el decimal (1847 ÷ 923 = 2.001, por lo que es esencialmente 2:1), y encuentra la relación estándar más cercana con la que realmente puedas trabajar. Las pantallas y plataformas aceptan relaciones estándar, no exactas, y una diferencia inferior a aproximadamente medio por ciento es invisible."
      },
      {
        "heading": "Por Qué 1200 × 630 No Es 1.91:1",
        "body": "El tamaño de imagen de Open Graph que todas las plataformas sociales solicitan es 1200 × 630, y casi siempre se describe como 1.91:1. Ejecuta el MCD y obtendrás 40:21, cuyo decimal es 1.9048. La cifra 1.91 es una etiqueta redondeada que se popularizó, no la relación real. Esto importa cuando escalas: calcular un nuevo ancho a partir de 1.91 en lugar de 40:21 se desvía aproximadamente un píxel a 1200px de ancho y cuatro a 4800px. Siempre escala a partir de la relación de enteros y redondea solo al final."
      },
      {
        "heading": "Cómo Calcular una Dimensión Faltante",
        "body": "Si conoces las dimensiones originales y quieres encontrar un nuevo tamaño con la misma relación, usa esta fórmula: Nueva Altura = (Altura Original ÷ Ancho Original) × Nuevo Ancho. Por ejemplo, para encontrar la altura de una imagen 16:9 con 1280px de ancho: (1080 ÷ 1920) × 1280 = 720px. Nuestra calculadora hace esto automáticamente en ambas direcciones."
      },
      {
        "heading": "El Método Más Rápido: Usa una Calculadora",
        "body": "Calcular manualmente las relaciones de aspecto es sencillo para números redondos, pero rápidamente se vuelve tedioso para dimensiones irregulares como 1847×923. Nuestra Calculadora de Relación de Aspecto gratuita maneja cualquier ancho y alto al instante. Introduce tus valores y obtén la relación simplificada, el decimal, la coincidencia estándar más cercana y los valores CSS en un solo clic."
      }
    ],
    "conclusion": "Dos reglas cubren casi todos los casos. Reduce con el MCD cuando los números lo permitan, y recurre al decimal más la relación estándar más cercana cuando no lo hagan. Mantén la relación de enteros para cualquier cálculo aritmético y redondea solo al final. Ese único hábito previene la mayoría de los errores de un píxel que aparecen como un pequeño hueco en un diseño terminado."
  },
  "aspect-ratio-social-media-guide-2026": {
    "title": "Tamaños de imagen y relaciones de aspecto para redes sociales: Guía completa 2026",
    "description": "Todos los tamaños de imagen y relaciones de aspecto para redes sociales en 2026: Instagram, YouTube, TikTok, X, LinkedIn, Facebook y Pinterest. Guarda esta guía en tus favoritos.",
    "intro": "Cada plataforma de redes sociales tiene sus propias dimensiones de imagen recomendadas, y estas cambian regularmente. Usar el tamaño incorrecto significa que tus imágenes se recortarán, se verán borrosas o se mostrarán mal. Esta guía cubre todas las plataformas principales para 2026.",
    "sections": [
      {
        "heading": "¿Por qué importan los tamaños de imagen en las redes sociales?",
        "body": "Cada plataforma tiene un diseño de feed, un área de visualización y un algoritmo de compresión diferentes. Una imagen optimizada para una plataforma puede verse borrosa, recortada o estirada en otra. Subir con las dimensiones exactas recomendadas asegura:",
        "list": [
          "Sin recortes inesperados de contenido clave",
          "Máxima nitidez — sin escalado por parte de la plataforma",
          "Tiempos de carga más rápidos — el tamaño correcto reduce el tamaño del archivo",
          "Mejor rendimiento en los algoritmos de recomendación"
        ]
      },
      {
        "heading": "Tamaños de imagen de Instagram 2026",
        "body": "Instagram admite tres relaciones de aspecto para el feed, además de Stories y Reels. Para las publicaciones del feed, el formato vertical 4:5 (1080×1350) te da el mayor espacio vertical, que es lo que quieres en una superficie por la que la gente se desplaza.",
        "table": {
          "headers": [
            "Format",
            "Dimensions",
            "Ratio"
          ],
          "rows": [
            [
              "Publicación del feed (Cuadrada)",
              "1080 × 1080",
              "1:1"
            ],
            [
              "Publicación del feed (Vertical)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Publicación del feed (Horizontal)",
              "1080 × 566",
              "1.91:1"
            ],
            [
              "Historia / Reel",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Foto de perfil",
              "320 × 320",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Dimensiones de YouTube 2026",
        "body": "YouTube es una plataforma 16:9. Diseña miniaturas a 1280×720 con texto en negrita y legible. Tu miniatura es a menudo el factor decisivo para que alguien haga clic.",
        "table": {
          "headers": [
            "Format",
            "Dimensions",
            "Ratio"
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
              "Miniatura",
              "1280 × 720",
              "16:9"
            ],
            [
              "Banner del canal",
              "2560 × 1440",
              "16:9"
            ]
          ]
        }
      },
      {
        "heading": "Tamaños de video de TikTok 2026",
        "body": "TikTok es completamente vertical — usa siempre 9:16 a 1080×1920 para la mejor calidad. Mantén el contenido clave en el centro del encuadre y alejado del 20% inferior donde aparecen los subtítulos y los elementos de la interfaz de usuario.",
        "table": {
          "headers": [
            "Format",
            "Dimensions",
            "Ratio"
          ],
          "rows": [
            [
              "Video (Recomendado)",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Foto de perfil",
              "200 × 200",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Referencia rápida: Todas las plataformas",
        "body": "Aquí tienes una tabla de referencia rápida para los tamaños de imagen de redes sociales más utilizados en 2026:",
        "table": {
          "headers": [
            "Platform",
            "Format",
            "Dimensions",
            "Ratio"
          ],
          "rows": [
            [
              "Instagram",
              "Publicación del feed (Vertical)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Instagram",
              "Historia / Reel",
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
              "Miniatura",
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
              "Imagen de publicación",
              "1600 × 900",
              "16:9"
            ],
            [
              "LinkedIn",
              "Imagen de publicación",
              "1200 × 628",
              "1.91:1"
            ],
            [
              "Facebook",
              "Imagen de publicación",
              "1200 × 630",
              "1.91:1"
            ],
            [
              "Pinterest",
              "Pin estándar",
              "1000 × 1500",
              "2:3"
            ]
          ]
        }
      },
      {
        "heading": "Los tamaños son correctos y el encuadre sigue siendo incorrecto",
        "body": "Subir a 1080 × 1920 no significa que todo sea visible. Cada formato vertical superpone la interfaz sobre tu imagen: una fila de perfil y un pie de foto en la parte inferior, una barra de progreso y un botón de cerrar en la parte superior, y en Reels y TikTok una columna de botones en un lado. La imagen es a sangre completa; el área utilizable no lo es. Un margen de trabajo práctico es mantener cualquier cosa que deba leerse (texto, caras, logotipos, precios) dentro del 70% central verticalmente y lejos del borde inferior, luego previsualizarlo en un teléfono antes de publicar. El área segura no se publica como una especificación y se mueve, así que trátala como un margen en lugar de una medida."
      },
      {
        "heading": "Sube más grande que el número de la tabla",
        "body": "Cada plataforma recompresiona lo que envías, y hace un mejor trabajo partiendo de más datos. Subir una exportación de 1080 × 1350 de un original de 1080 de ancho no le da al codificador nada con lo que trabajar; subir una versión de 2160 × 2700 de la misma imagen y dejar que la plataforma la reduzca suele verse visiblemente más limpia al mismo tamaño final, particularmente en texto y bordes finos. La excepción es cuando una plataforma publica un máximo estricto. Respétalo, y luego acércate lo más posible a ese límite."
      },
      {
        "heading": "Si solo puedes crear un activo",
        "body": "Hazlo 4:5 a 1080 × 1350. Es la forma más alta que acepta el feed de Instagram, lo que significa que ocupa la mayor parte de la pantalla en la superficie que te da menos, y se recorta limpiamente: recorte central a 1:1 para una ubicación cuadrada, o a 1.91:1 para una tarjeta de enlace, y el sujeto permanece donde lo pusiste. Ir en la otra dirección, empezar cuadrado e intentar llegar a 4:5, significa inventar una imagen que nunca fue fotografiada."
      },
      {
        "heading": "Una advertencia sobre guías como esta",
        "body": "Cada número aquí era correcto cuando se escribió y las plataformas los cambian sin previo aviso. Una guía es un punto de partida, no una autoridad: antes de una campaña importante, consulta la documentación de ayuda de la propia plataforma, porque esa es la única versión que se actualiza cuando ellos lo hacen. Las relaciones de aspecto en la última columna son mucho más estables que las dimensiones en píxeles que las acompañan. 9:16 y 4:5 han sobrevivido a varias rondas de cambios de especificaciones, y construir según la relación de aspecto en lugar del recuento de píxeles es lo que evita que esta tabla se quede obsoleta."
      }
    ],
    "conclusion": "Construye según la relación de aspecto, no según el recuento de píxeles, y exporta más grande que el objetivo. Esos dos hábitos sobreviven a los cambios de plataforma, cosa que los números exactos de estas tablas no harán. Mantén cualquier cosa que deba leerse bien dentro del encuadre, y consulta la documentación de la propia plataforma antes de que salga algo por lo que estés pagando."
  },
  "16-9-vs-4-3-aspect-ratio": {
    "title": "16:9 vs 4:3 Relación de Aspecto — ¿Cuál Deberías Usar?",
    "description": "Una comparación clara de las relaciones de aspecto 16:9 y 4:3: cuándo usar cada una, su historia, diferencias clave y ejemplos de tamaño de píxeles.",
    "intro": "16:9 y 4:3 son las dos relaciones de aspecto más históricamente significativas en video y fotografía. Si alguna vez has visto barras negras en tu pantalla, ya sea a los lados o arriba y abajo, ya te has encontrado con la diferencia entre ellas. Aquí tienes una comparación completa.",
    "sections": [
      {
        "heading": "La Diferencia Clave",
        "body": "16:9 es más ancho y rectangular (relación de 1.78:1), mientras que 4:3 es más cuadrado (relación de 1.33:1). Una imagen 16:9 es aproximadamente un 33% más ancha que una imagen 4:3 de la misma altura. Esta diferencia puede parecer pequeña, pero es muy notoria en pantalla."
      },
      {
        "heading": "Historia: ¿De Dónde Vienen?",
        "body": "4:3 llegó primero, coincidiendo con la forma de las primeras películas de 35mm, y se mantuvo como el estándar de televisión durante la mayor parte del siglo XX. 16:9 no fue heredado de nada. Fue diseñado. Trabajando en SMPTE a principios de los años 80, Kerns Powers cortó rectángulos de igual área para cada relación de aspecto entonces en uso, desde la televisión 1.33:1 hasta el cine 2.35:1, y los superpuso centrados entre sí. Cada rectángulo encajaba dentro de una caja exterior y contenía una caja interior, y ambas cajas estaban cerca de 1.77:1. Esa cifra es casi exactamente la media geométrica de los extremos: la raíz cuadrada de 1.33 × 2.35 es 1.77, y 16 ÷ 9 es 1.778. 16:9 es la forma que menos pantalla desperdicia, promediado en todo lo que cualquiera podría querer mostrar en ella."
      },
      {
        "heading": "Cuándo Usar 16:9",
        "body": "Usa 16:9 cuando:",
        "list": [
          "Creando contenido de video para YouTube, Netflix o televisión",
          "Haciendo presentaciones modernas (Google Slides, PowerPoint 2016 y posteriores usan 16:9 por defecto)",
          "Diseñando para monitores y laptops de pantalla ancha",
          "Grabando video con un smartphone o cámara modernos",
          "Creando miniaturas de YouTube"
        ]
      },
      {
        "heading": "Cuándo Usar 4:3",
        "body": "Usa 4:3 cuando:",
        "list": [
          "Diseñando para pantallas de iPad (que usan 4:3)",
          "Creando presentaciones para proyectores antiguos",
          "Coincidiendo con contenido de video heredado",
          "Imprimiendo en proporciones fotográficas estándar (algunas cámaras)",
          "Trabajando con imágenes de CCTV o vigilancia"
        ]
      },
      {
        "heading": "Comparación de Tamaño de Píxeles",
        "body": "Aquí tienes resoluciones comunes para ambas relaciones con recuentos de megapíxeles equivalentes:",
        "table": {
          "headers": [
            "Calidad",
            "Tamaño 16:9",
            "Tamaño 4:3"
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
        "heading": "Lo Que Realmente Cuesta Convertir Entre Ellos",
        "body": "Ambas conversiones cuestan exactamente un cuarto de la imagen, lo cual es más de lo que la mayoría de la gente espera. Pasar de 16:9 a 4:3 con la misma altura significa recortar el ancho de 16 unidades a 12, por lo que se pierde el 25% del encuadre, y se quita de los lados, donde a menudo se encuadran los sujetos filmados. Ir en la otra dirección, de 4:3 a 16:9 con el mismo ancho, recorta la altura de 12 unidades a 9: también un 25%, esta vez de la parte superior e inferior, que es donde se encuentran las cabezas y los subtítulos. Ninguna dirección es un cambio de tamaño. Si el contenido importa, reencuádralo en lugar de dejar que una herramienta de recorte elija."
      },
      {
        "heading": "Lo Que Te Están Costando Las Barras Negras",
        "body": "Mostrar contenido 4:3 en una pantalla 16:9 lo 'pillarboxea', y las barras no son cosméticas: la imagen ocupa 12 de las 16 unidades de ancho de la pantalla, por lo que una cuarta parte de la pantalla no está haciendo nada. Un televisor 16:9 de 55 pulgadas tiene 47.9 pulgadas de ancho, lo que significa aproximadamente 12 pulgadas de negro. Este es el argumento práctico para grabar en la relación en la que publicarás, en lugar de planear arreglarlo después. No hay ningún recorte que recupere un cuarto de la pantalla."
      }
    ],
    "conclusion": "Graba y diseña en 16:9 a menos que algo específico te impulse a otro lugar: una audiencia que usa principalmente iPad, un proyector antiguo, un archivo que coincidir. Lo único que vale la pena evitar es decidir tarde: ambas conversiones cuestan un cuarto del encuadre, y qué cuarto pierdes es una decisión que se toma mejor a través de un visor que con una herramienta de recorte después."
  },
  "how-to-resize-image-without-losing-quality": {
    "title": "¿Cómo Redimensionar una Imagen Sin Perder Calidad?",
    "description": "Aprende las técnicas para redimensionar imágenes sin perder calidad: reducción vs. ampliación, los mejores formatos de archivo, explicación de DPI y recomendaciones de herramientas.",
    "intro": "Redimensionar una imagen parece sencillo, pero si se hace incorrectamente, resulta en fotos borrosas, pixeladas o distorsionadas. Esta guía explica cuándo y cómo puedes redimensionar imágenes sin una pérdida de calidad visible.",
    "sections": [
      {
        "heading": "Reducción vs. Ampliación",
        "body": "Hay dos direcciones en las que puedes redimensionar una imagen, y tienen implicaciones de calidad muy diferentes. La reducción (hacer una imagen más pequeña) casi siempre conserva la calidad, porque simplemente estás descartando píxeles. La ampliación (hacer una imagen más grande) es donde ocurren los problemas de calidad, porque el software debe inventar datos de píxeles que no existen en el original."
      },
      {
        "heading": "La Regla de Oro: Siempre Empieza con la Máxima Resolución",
        "body": "La pérdida de calidad es en su mayoría irreversible. Si empiezas con una imagen pequeña y necesitas una grande, siempre verás una degradación de la calidad. La mejor práctica es:",
        "list": [
          "Siempre guarda tu archivo original de alta resolución",
          "Exporta o guarda una copia separada con el tamaño deseado",
          "Nunca vuelvas a guardar un JPEG comprimido varias veces, porque cada guardado degrada la calidad",
          "Exporta desde el archivo maestro cada vez que necesites un nuevo tamaño"
        ]
      },
      {
        "heading": "¿Cuánto Puedes Ampliar?",
        "body": "Como pauta general: la ampliación hasta un 110–120% es generalmente imperceptible para la mayoría de los espectadores. La ampliación en un 150–200% produce una suavidad notable. La ampliación más allá del 200% típicamente produce pixelación y desenfoque obvios. Las herramientas de ampliación basadas en IA (como Topaz Gigapixel, Adobe Firefly y similares) a veces pueden producir resultados aceptables con una ampliación de 2–4× al generar detalles de forma inteligente."
      },
      {
        "heading": "Mantener la Relación de Aspecto al Redimensionar",
        "body": "Uno de los errores de calidad más comunes es cambiar accidentalmente la relación de aspecto durante el redimensionamiento, estirando o aplastando la imagen. Siempre redimensiona proporcionalmente bloqueando la relación de aspecto en tu herramienta de edición. Nuestra calculadora gratuita te ayuda a encontrar la altura objetivo correcta para cualquier nuevo ancho (o viceversa), asegurando que tu redimensionamiento mantenga las proporciones originales."
      },
      {
        "heading": "Los Mejores Formatos de Archivo para la Calidad",
        "body": "El formato de archivo afecta significativamente la calidad después de redimensionar:",
        "list": [
          "PNG: compresión sin pérdidas; ideal para gráficos, ilustraciones y capturas de pantalla donde la nitidez es importante",
          "JPEG: compresión con pérdidas; ideal para fotografías; ajusta la calidad al 80–90% para el mejor equilibrio entre tamaño y calidad",
          "WebP: un formato moderno que logra una mejor compresión que JPEG con una calidad equivalente; compatible con todos los navegadores modernos",
          "TIFF: sin comprimir o sin pérdidas; utilizado en flujos de trabajo profesionales de impresión y fotografía"
        ]
      },
      {
        "heading": "DPI y Calidad de Impresión",
        "body": "DPI (dots per inch) solo es relevante para la impresión. Las pantallas lo ignoran por completo. Para impresión: usa 300 DPI para impresiones fotográficas nítidas, 150 DPI para una calidad aceptable y 72–96 DPI para uso exclusivo en pantalla. Para calcular las dimensiones en píxeles necesarias para una impresión: multiplica el tamaño de impresión en pulgadas por el DPI. Para una impresión de 8×10 inch a 300 DPI: 2400×3000 pixels."
      }
    ],
    "conclusion": "Guarda el archivo maestro. Casi todos los problemas de calidad en esta guía se remontan a que alguien ya no tiene el original: no puedes reducir algo que ya has desechado, y ningún ampliador recupera detalles que nunca fueron registrados. Exporta copias, archiva el original y redimensiona a partir de él cada vez."
  },
  "install-aspect-ratio-calculator": {
    "title": "¿Por qué instalar la Calculadora de Relación de Aspecto? Acceso sin conexión, velocidad y más",
    "description": "Instala la Calculadora de Relación de Aspecto como una aplicación para acceso instantáneo sin conexión, un atajo en la pantalla de inicio y una experiencia sin distracciones — sin interfaz de navegador, sin recargas.",
    "intro": "Puedes usar esta calculadora directamente desde tu navegador, pero instalarla como una aplicación lleva la experiencia más allá: inicio instantáneo desde tu pantalla de inicio, soporte completo sin conexión y una interfaz limpia sin la navegación del navegador de por medio. Aquí tienes todo lo que necesitas saber.",
    "sections": [
      {
        "heading": "¿Qué significa realmente 'Instalar'?",
        "body": "Cuando instalas una aplicación web (también llamada PWA, o Progressive Web App), tu dispositivo guarda un atajo en tu pantalla de inicio o escritorio y almacena en caché los archivos de la aplicación para uso sin conexión. No hay ninguna App Store involucrada y no se descargan gigabytes de datos, porque los archivos ya están en la caché de tu navegador. Instalar simplemente eleva el sitio a una experiencia de aplicación de primera clase en tu dispositivo."
      },
      {
        "heading": "Beneficios de la instalación",
        "body": "Instalar la Calculadora de Relación de Aspecto te ofrece varias ventajas sobre usarla puramente en el navegador:",
        "list": [
          "Acceso sin conexión: los cálculos funcionan incluso sin conexión a internet, útil en el set, en el campo o en un avión",
          "Atajo en la pantalla de inicio: se abre con un solo toque, sin necesidad de navegar a la URL o abrir una pestaña del navegador",
          "Interfaz sin distracciones: sin barra de direcciones del navegador, pestañas o barra de herramientas; la calculadora llena la pantalla de forma limpia",
          "Carga más rápida: los archivos en caché se cargan instantáneamente desde el almacenamiento local en lugar de esperar una respuesta de la red",
          "Siempre actualizada: el service worker busca actualizaciones silenciosamente en segundo plano para que siempre tengas la última versión"
        ]
      },
      {
        "heading": "Cómo instalar en Chrome o Android",
        "body": "En Android o Chrome de escritorio, un banner aparece automáticamente en la parte inferior de la página con un botón de Instalar. Toca o haz clic en Instalar y confirma cuando se te solicite. Si el banner ha sido descartado, busca el icono de instalación (un monitor con una flecha hacia abajo ⊕) en la barra de direcciones del navegador en el escritorio, o toca el menú de tres puntos en Android y selecciona 'Add to Home screen'."
      },
      {
        "heading": "Cómo instalar en iPhone o iPad (Safari)",
        "body": "Safari en iOS no muestra un banner de instalación automático, pero el proceso es sencillo:",
        "list": [
          "Toca el botón Compartir (la caja con una flecha apuntando hacia arriba) en la barra de herramientas de Safari en la parte inferior de la pantalla",
          "Desplázate hacia abajo en la hoja de compartir y toca 'Add to Home Screen'",
          "Edita el nombre si lo deseas, luego toca 'Add' en la esquina superior derecha",
          "El icono de la calculadora ahora aparece en tu pantalla de inicio y se inicia en modo independiente"
        ]
      },
      {
        "heading": "Cómo instalar en escritorio (Chrome o Edge)",
        "body": "En un ordenador de escritorio con Chrome o Edge, busca el icono de instalación en la barra de direcciones. Se parece a un monitor con una pequeña flecha de descarga. Haz clic en él y confirma la solicitud. En Edge, la opción también puede aparecer bajo el menú de tres puntos como 'Apps → Install this site as an app'. Una vez instalada, la calculadora aparece en tu Start menu (Windows) o Applications folder (Mac) como cualquier aplicación nativa."
      },
      {
        "heading": "Cómo desinstalar",
        "body": "Desinstalar es tan fácil como instalar. En iOS, mantén pulsado el icono en tu pantalla de inicio y toca 'Remove App'. En Android, mantén pulsado y arrastra al área de desinstalación, o ve a Ajustes → Apps. En Chrome de escritorio, abre la aplicación, haz clic en el menú de tres puntos dentro de la ventana de la aplicación y selecciona 'Uninstall Aspect Ratio Calculator'. En Edge, haz clic derecho en la aplicación en la barra de tareas o Start menu y elige Desinstalar."
      }
    ],
    "conclusion": "Instalar la Calculadora de Relación de Aspecto toma unos diez segundos y no cuesta nada. Obtienes acceso sin conexión, un atajo en la pantalla de inicio y una experiencia más rápida y limpia, sin necesidad de App Store. Si te encuentras usando la calculadora regularmente, instalarla es la forma más conveniente de tenerla al alcance de tu mano."
  }
};
