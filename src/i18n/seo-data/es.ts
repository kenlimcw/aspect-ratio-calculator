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
        "body": "La relación de aspecto es la relación proporcional entre el ancho y el alto de una imagen, pantalla o fotograma de video. Se escribe como dos números separados por dos puntos — por ejemplo, 16:9 o 4:3. El primer número es el ancho y el segundo es el alto. Una relación 16:9 significa que por cada 16 unidades de ancho, el alto es de 9 unidades. El tamaño real no importa — una imagen de 160×90 píxeles y una imagen de 3840×2160 píxeles son ambas 16:9 porque comparten las mismas proporciones."
      },
      {
        "heading": "¿Por qué es importante la relación de aspecto?",
        "body": "La relación de aspecto es importante siempre que estés mostrando, imprimiendo o compartiendo contenido visual. Si la relación de tu imagen no coincide con la relación de la pantalla o el contenedor, ocurre una de estas dos cosas:",
        "list": [
          "Letterboxing / Pillarboxing — Aparecen barras negras para rellenar el espacio vacío",
          "Recorte — La imagen se corta para ajustarse, y se pierde parte del contenido",
          "Estiramiento — La imagen se distorsiona para llenar el encuadre (menos deseable)"
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
              "Películas de cine en formato cinemascope"
            ]
          ]
        }
      },
      {
        "heading": "Cómo calcular una relación de aspecto",
        "body": "Para encontrar la relación de aspecto de cualquier imagen, divide tanto el ancho como el alto por su Máximo Común Divisor (MCD). Por ejemplo, una imagen de 1920×1080 píxeles: ambos números son divisibles por 120, lo que da 16:9. Nuestra calculadora gratuita hace esto automáticamente — solo ingresa tu ancho y alto."
      },
      {
        "heading": "Relación de aspecto vs. Resolución",
        "body": "La relación de aspecto y la resolución están relacionadas pero no son lo mismo. La resolución se refiere al número total de píxeles (por ejemplo, 1920×1080). La relación de aspecto se refiere a la forma (por ejemplo, 16:9). Dos imágenes pueden compartir la misma relación de aspecto pero tener resoluciones completamente diferentes — por ejemplo, 640×360 y 3840×2160 son ambas 16:9 pero difieren enormemente en el recuento de píxeles y la calidad."
      }
    ],
    "conclusion": "Comprender la relación de aspecto te ayuda a producir imágenes y videos que se ven exactamente como se pretenden en cada pantalla y plataforma. Utiliza nuestra calculadora gratuita de relación de aspecto para convertir dimensiones al instante, identificar relaciones y redimensionar imágenes manteniendo las proporciones correctas."
  },
  "how-to-calculate-aspect-ratio": {
    "title": "Cómo Calcular la Relación de Aspecto: La Guía Completa",
    "description": "Aprende a calcular la relación de aspecto paso a paso: usando el método del MCD, la fórmula y nuestra calculadora online gratuita. Incluye ejemplos resueltos.",
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
        "heading": "Cómo Calcular una Dimensión Faltante",
        "body": "Si conoces las dimensiones originales y quieres encontrar un nuevo tamaño con la misma relación, usa esta fórmula: Nueva Altura = (Altura Original ÷ Ancho Original) × Nuevo Ancho. Por ejemplo, para encontrar la altura de una imagen 16:9 con un ancho de 1280px: (1080 ÷ 1920) × 1280 = 720px. Nuestra calculadora hace esto automáticamente en ambas direcciones."
      },
      {
        "heading": "El Método Más Rápido: Usa una Calculadora",
        "body": "Calcular manualmente las relaciones de aspecto es sencillo para números redondos, pero rápidamente se vuelve tedioso para dimensiones irregulares como 1847×923. Nuestra Calculadora de Relación de Aspecto gratuita maneja cualquier ancho y alto al instante — introduce tus valores y obtén la relación simplificada, el decimal, la coincidencia estándar más cercana y los valores CSS en un solo clic."
      }
    ],
    "conclusion": "Calcular las relaciones de aspecto es fácil una vez que entiendes el método del MCD. Para el uso diario, nuestra calculadora gratuita te ahorrará tiempo y te dará información adicional como análisis de calidad, tamaños de impresión y exportación CSS. Pruébala ahora en aspect-ratio-calculator.com."
  },
  "aspect-ratio-social-media-guide-2026": {
    "title": "Tamaños de Imagen y Relaciones de Aspecto para Redes Sociales: Guía Completa 2026",
    "description": "Todos los tamaños de imagen y relaciones de aspecto para redes sociales en 2026: Instagram, YouTube, TikTok, X, LinkedIn, Facebook y Pinterest. Guarda esta guía en tus favoritos.",
    "intro": "Cada plataforma de redes sociales tiene sus propias dimensiones de imagen recomendadas, y estas cambian regularmente. Usar el tamaño incorrecto significa que tus imágenes se recortarán, se verán borrosas o se mostrarán mal. Esta guía cubre todas las plataformas principales para 2026.",
    "sections": [
      {
        "heading": "Por Qué Importan los Tamaños de Imagen en Redes Sociales",
        "body": "Cada plataforma tiene un diseño de feed, un área de visualización y un algoritmo de compresión diferentes. Una imagen optimizada para una plataforma puede verse borrosa, recortada o estirada en otra. Subir con las dimensiones exactas recomendadas asegura:",
        "list": [
          "Sin recortes inesperados de contenido clave",
          "Máxima nitidez — sin escalado por parte de la plataforma",
          "Tiempos de carga más rápidos — el tamaño correcto reduce el tamaño del archivo",
          "Mejor rendimiento en los algoritmos de recomendación"
        ]
      },
      {
        "heading": "Tamaños de Imagen para Instagram 2026",
        "body": "Instagram admite tres relaciones de aspecto para el feed, además de Stories y Reels. Para las publicaciones del feed, el formato vertical 4:5 (1080×1350) te da el mayor espacio vertical, ideal para maximizar la visibilidad al desplazarse.",
        "table": {
          "headers": [
            "Formato",
            "Dimensiones",
            "Relación"
          ],
          "rows": [
            [
              "Publicación del Feed (Cuadrada)",
              "1080 × 1080",
              "1:1"
            ],
            [
              "Publicación del Feed (Vertical)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Publicación del Feed (Horizontal)",
              "1080 × 566",
              "1.91:1"
            ],
            [
              "Historia / Reel",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Foto de Perfil",
              "320 × 320",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Dimensiones para YouTube 2026",
        "body": "YouTube es una plataforma 16:9. Diseña las miniaturas a 1280×720 con texto en negrita y legible; tu miniatura suele ser el factor decisivo para que alguien haga clic.",
        "table": {
          "headers": [
            "Formato",
            "Dimensiones",
            "Relación"
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
              "Banner del Canal",
              "2560 × 1440",
              "16:9"
            ]
          ]
        }
      },
      {
        "heading": "Tamaños de Video para TikTok 2026",
        "body": "TikTok es completamente vertical; usa siempre 9:16 a 1080×1920 para la mejor calidad. Mantén el contenido clave en el centro del encuadre y alejado del 20% inferior, donde aparecen los subtítulos y los elementos de la interfaz de usuario.",
        "table": {
          "headers": [
            "Formato",
            "Dimensiones",
            "Relación"
          ],
          "rows": [
            [
              "Video (Recomendado)",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Foto de Perfil",
              "200 × 200",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Referencia Rápida: Todas las Plataformas",
        "body": "Aquí tienes una tabla de referencia rápida para los tamaños de imagen de redes sociales más utilizados en 2026:",
        "table": {
          "headers": [
            "Plataforma",
            "Formato",
            "Dimensiones",
            "Relación"
          ],
          "rows": [
            [
              "Instagram",
              "Publicación del Feed (Vertical)",
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
              "Imagen de Publicación",
              "1600 × 900",
              "16:9"
            ],
            [
              "LinkedIn",
              "Imagen de Publicación",
              "1200 × 628",
              "1.91:1"
            ],
            [
              "Facebook",
              "Imagen de Publicación",
              "1200 × 630",
              "1.91:1"
            ],
            [
              "Pinterest",
              "Pin Estándar",
              "1000 × 1500",
              "2:3"
            ]
          ]
        }
      }
    ],
    "conclusion": "Guarda esta guía en tus favoritos y usa nuestra Calculadora de Relación de Aspecto gratuita para verificar o convertir cualquier dimensión en segundos. Introduce el tamaño actual de tu imagen y las dimensiones de la plataforma de destino para comprobar la calidad, calcular los valores CSS y compartir los resultados al instante."
  },
  "16-9-vs-4-3-aspect-ratio": {
    "title": "Relación de Aspecto 16:9 vs 4:3 — ¿Cuál Deberías Usar?",
    "description": "Una comparación clara de las relaciones de aspecto 16:9 y 4:3: cuándo usar cada una, su historia, diferencias clave y ejemplos de tamaño de píxel.",
    "intro": "16:9 y 4:3 son las dos relaciones de aspecto más históricamente significativas en video y fotografía. Si alguna vez has visto barras negras en tu pantalla — ya sea a los lados o arriba y abajo — ya te has encontrado con la diferencia entre ellas. Aquí tienes una comparación completa.",
    "sections": [
      {
        "heading": "La Diferencia Clave",
        "body": "16:9 es más ancho y rectangular (relación de 1.78:1), mientras que 4:3 es más cuadrado (relación de 1.33:1). Una imagen 16:9 es aproximadamente un 33% más ancha que una imagen 4:3 de la misma altura. Esta diferencia puede parecer pequeña, pero es muy notoria en pantalla."
      },
      {
        "heading": "Historia: ¿De Dónde Vienen?",
        "body": "4:3 fue el estándar de televisión original, adoptado en la década de 1930 porque coincidía estrechamente con la relación de aspecto del cine de 35mm de la época. 16:9 se introdujo a finales de los años 80 como un estándar de pantalla ancha de compromiso que podía mostrar tanto contenido de TV 4:3 (con pequeñas barras laterales) como contenido de cine 2.39:1 (con pequeñas barras superiores/inferiores) con un espacio negro mínimo. La UIT adoptó 16:9 como el estándar HDTV en 1987."
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
          "Coincidiendo con contenido de video antiguo",
          "Imprimiendo en proporciones fotográficas estándar (algunas cámaras)",
          "Trabajando con imágenes de CCTV o vigilancia"
        ]
      },
      {
        "heading": "Comparación de Tamaño de Píxel",
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
      }
    ],
    "conclusion": "Para la mayoría del contenido moderno de video y pantalla, 16:9 es la elección correcta. Para contenido enfocado en tabletas o compatibilidad con sistemas antiguos, 4:3 puede ser más apropiado. En caso de duda, usa nuestra Calculadora de Relación de Aspecto gratuita para convertir entre ambas y previsualizar el resultado al instante."
  },
  "how-to-resize-image-without-losing-quality": {
    "title": "Cómo Redimensionar una Imagen Sin Perder Calidad",
    "description": "Aprende las técnicas para redimensionar imágenes sin perder calidad: reducción vs. ampliación, los mejores formatos de archivo, explicación de DPI y recomendaciones de herramientas.",
    "intro": "Redimensionar una imagen parece sencillo, pero si se hace incorrectamente, resulta en fotos borrosas, pixeladas o distorsionadas. Esta guía explica cuándo y cómo puedes redimensionar imágenes sin una pérdida de calidad visible.",
    "sections": [
      {
        "heading": "Reducción (Downscaling) vs. Ampliación (Upscaling)",
        "body": "Hay dos direcciones en las que puedes redimensionar una imagen, y tienen implicaciones de calidad muy diferentes. La reducción (hacer una imagen más pequeña) casi siempre conserva la calidad; simplemente estás descartando píxeles. La ampliación (hacer una imagen más grande) es donde surgen los problemas de calidad, porque el software debe inventar datos de píxeles que no existen en el original."
      },
      {
        "heading": "La Regla de Oro: Empieza Siempre con la Máxima Resolución",
        "body": "La pérdida de calidad es mayormente irreversible. Si empiezas con una imagen pequeña y necesitas una grande, siempre verás una degradación de la calidad. La mejor práctica es:",
        "list": [
          "Guarda siempre tu archivo original de alta resolución",
          "Exporta o guarda una copia separada con el tamaño deseado",
          "Nunca vuelvas a guardar un JPEG comprimido varias veces; cada guardado degrada la calidad",
          "Exporta desde el archivo maestro cada vez que necesites un nuevo tamaño"
        ]
      },
      {
        "heading": "¿Cuánto Puedes Ampliar (Upscale)?",
        "body": "Como pauta general: la ampliación (upscaling) hasta un 110–120% es generalmente imperceptible para la mayoría de los espectadores. La ampliación entre 150–200% produce una suavidad notable. La ampliación más allá del 200% típicamente produce pixelación y desenfoque obvios. Las herramientas de ampliación basadas en IA (como Topaz Gigapixel, Adobe Firefly y similares) a veces pueden producir resultados aceptables con ampliaciones de 2 a 4 veces, generando detalles de forma inteligente."
      },
      {
        "heading": "Mantener la Relación de Aspecto al Redimensionar",
        "body": "Uno de los errores de calidad más comunes es cambiar accidentalmente la relación de aspecto durante el redimensionamiento, estirando o aplastando la imagen. Redimensiona siempre proporcionalmente bloqueando la relación de aspecto en tu herramienta de edición. Nuestra calculadora gratuita te ayuda a encontrar la altura objetivo correcta para cualquier nuevo ancho (o viceversa), asegurando que tu redimensionamiento mantenga las proporciones originales."
      },
      {
        "heading": "Mejores Formatos de Archivo para la Calidad",
        "body": "El formato de archivo afecta significativamente la calidad después de redimensionar:",
        "list": [
          "PNG — Compresión sin pérdidas; ideal para gráficos, ilustraciones y capturas de pantalla donde la nitidez es importante",
          "JPEG — Compresión con pérdidas; ideal para fotografías; ajusta la calidad al 80–90% para el mejor equilibrio entre tamaño y calidad",
          "WebP — Formato moderno que logra una mejor compresión que JPEG con una calidad equivalente; compatible con todos los navegadores modernos",
          "TIFF — Sin comprimir o sin pérdidas; utilizado en flujos de trabajo profesionales de impresión y fotografía"
        ]
      },
      {
        "heading": "DPI y Calidad de Impresión",
        "body": "DPI (dots per inch) solo es relevante para la impresión; las pantallas lo ignoran. Para impresión: usa 300 DPI para impresiones fotográficas nítidas, 150 DPI para una calidad aceptable y 72–96 DPI para uso exclusivo en pantalla. Para calcular las dimensiones en píxeles necesarias para una impresión: multiplica el tamaño de impresión en pulgadas por el DPI. Para una impresión de 8×10 pulgadas a 300 DPI: 2400×3000 píxeles."
      }
    ],
    "conclusion": "La mejor manera de redimensionar sin pérdida de calidad es siempre reducir desde un original de alta resolución, mantener la relación de aspecto y exportar en el formato adecuado. Utiliza nuestra Calculadora de Relación de Aspecto para encontrar las dimensiones objetivo exactas que preserven tus proporciones originales, sin necesidad de adivinar."
  },
  "install-aspect-ratio-calculator": {
    "title": "¿Por qué instalar Aspect Ratio Calculator? Acceso sin conexión, velocidad y más",
    "description": "Instala Aspect Ratio Calculator como una aplicación para acceso instantáneo sin conexión, un atajo en la pantalla de inicio y una experiencia sin distracciones — sin interfaz de navegador, sin recargas.",
    "intro": "Puedes usar esta calculadora directamente desde tu navegador, pero instalarla como una aplicación lleva la experiencia más allá — inicio instantáneo desde tu pantalla de inicio, soporte completo sin conexión y una interfaz limpia sin la navegación del navegador de por medio. Aquí tienes todo lo que necesitas saber.",
    "sections": [
      {
        "heading": "¿Qué significa realmente 'Instalar'?",
        "body": "Cuando instalas una aplicación web (también llamada PWA — Progressive Web App), tu dispositivo guarda un atajo en tu pantalla de inicio o escritorio y almacena en caché los archivos de la aplicación para uso sin conexión. No hay ninguna App Store involucrada y no se están descargando gigabytes de datos — los archivos ya están en la caché de tu navegador. Instalar simplemente eleva el sitio a una experiencia de aplicación de primera clase en tu dispositivo."
      },
      {
        "heading": "Beneficios de la instalación",
        "body": "Instalar Aspect Ratio Calculator te ofrece varias ventajas sobre usarla puramente en el navegador:",
        "list": [
          "Acceso sin conexión — los cálculos funcionan incluso sin conexión a internet, útil en el set, en el campo o en un avión",
          "Atajo en la pantalla de inicio — se abre con un solo toque, sin necesidad de navegar a la URL o abrir una pestaña del navegador",
          "Interfaz sin distracciones — sin barra de direcciones del navegador, pestañas o barra de herramientas; la calculadora llena la pantalla de forma limpia",
          "Carga más rápida — los archivos en caché se cargan instantáneamente desde el almacenamiento local en lugar de esperar una respuesta de red",
          "Siempre actualizada — el service worker busca actualizaciones silenciosamente en segundo plano para que siempre tengas la última versión"
        ]
      },
      {
        "heading": "Cómo instalar en Chrome o Android",
        "body": "En Android o Chrome de escritorio, aparece automáticamente un banner en la parte inferior de la página con un botón de Instalar. Toca o haz clic en Instalar y confirma cuando se te solicite. Si el banner ha sido descartado, busca el icono de instalación (un monitor con una flecha hacia abajo ⊕) en la barra de direcciones del navegador en el escritorio, o toca el menú de tres puntos en Android y selecciona 'Añadir a pantalla de inicio'."
      },
      {
        "heading": "Cómo instalar en iPhone o iPad (Safari)",
        "body": "Safari en iOS no muestra un banner de instalación automático, pero el proceso es sencillo:",
        "list": [
          "Toca el botón Compartir (la caja con una flecha apuntando hacia arriba) en la barra de herramientas de Safari en la parte inferior de la pantalla",
          "Desplázate hacia abajo en la hoja de compartir y toca 'Añadir a pantalla de inicio'",
          "Edita el nombre si lo deseas, luego toca 'Añadir' en la esquina superior derecha",
          "El icono de la calculadora ahora aparece en tu pantalla de inicio y se inicia en modo independiente"
        ]
      },
      {
        "heading": "Cómo instalar en escritorio (Chrome o Edge)",
        "body": "En un ordenador de escritorio con Chrome o Edge, busca el icono de instalación en la barra de direcciones — parece un monitor con una pequeña flecha de descarga. Haz clic en él y confirma la solicitud. En Edge, la opción también puede aparecer bajo el menú de tres puntos como 'Aplicaciones → Instalar este sitio como una aplicación'. Una vez instalada, la calculadora aparece en tu Start menu (Windows) o carpeta de Aplicaciones (Mac) como cualquier aplicación nativa."
      },
      {
        "heading": "Cómo desinstalar",
        "body": "Desinstalar es tan fácil como instalar. En iOS, mantén pulsado el icono en tu pantalla de inicio y toca 'Eliminar app'. En Android, mantén pulsado y arrastra al área de desinstalación, o ve a Ajustes → Aplicaciones. En Chrome de escritorio, abre la aplicación, haz clic en el menú de tres puntos dentro de la ventana de la aplicación y selecciona 'Desinstalar Aspect Ratio Calculator'. En Edge, haz clic derecho en la aplicación en la barra de tareas o en el Start menu y elige Desinstalar."
      }
    ],
    "conclusion": "Instalar Aspect Ratio Calculator toma unos diez segundos y no cuesta nada. Obtienes acceso sin conexión, un atajo en la pantalla de inicio y una experiencia más rápida y limpia — sin necesidad de App Store. Si te encuentras usando la calculadora regularmente, instalarla es la forma más conveniente de tenerla al alcance de tu mano."
  }
};
