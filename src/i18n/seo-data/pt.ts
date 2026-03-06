import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";

export const RATIO_DATA: Record<string, RatioData> = {
  "16-9": {
    "label": "16:9",
    "w": 16,
    "h": 9,
    "title": "Proporção de Aspecto 16:9 — Dimensões, Pixels e Calculadora Gratuita",
    "description": "Tudo sobre a proporção de aspecto 16:9: dimensões comuns (720p, 1080p, 4K, 8K), casos de uso e uma calculadora gratuita. O padrão para vídeo, TV e monitores.",
    "explanation": "16:9 (dezesseis-por-nove) é a proporção de aspecto widescreen universalmente adotada para vídeo HD, streaming e telas modernas. Para cada 16 unidades de largura, a altura é de 9 unidades, produzindo um retângulo largo e cinematográfico. Substituiu o padrão anterior 4:3 no início dos anos 2000 e agora é o padrão para praticamente todo o conteúdo de vídeo, monitores e transmissões de televisão em todo o mundo.",
    "useCases": [
      "Vídeos e miniaturas do YouTube",
      "Netflix, Disney+ e plataformas de streaming",
      "Televisão HD e 4K",
      "Monitores de PC e telas de laptop",
      "Apresentações do PowerPoint e Google Slides",
      "Fundos para Zoom e videoconferências",
      "Cinemáticas de videogames"
    ],
    "dimensions": [
      {
        "name": "nHD",
        "width": 640,
        "height": 360,
        "use": "Web de baixa resolução, fallback móvel"
      },
      {
        "name": "HD (720p)",
        "width": 1280,
        "height": 720,
        "use": "Vídeo web, dispositivos antigos, mínimo do YouTube"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1920,
        "height": 1080,
        "use": "Streaming padrão, YouTube, transmissão de TV"
      },
      {
        "name": "QHD (1440p)",
        "width": 2560,
        "height": 1440,
        "use": "Monitores de alta resolução, jogos"
      },
      {
        "name": "4K UHD",
        "width": 3840,
        "height": 2160,
        "use": "Streaming premium, vídeo profissional, TV 4K"
      },
      {
        "name": "8K UHD",
        "width": 7680,
        "height": 4320,
        "use": "Telas do futuro, arquivamento, masters de transmissão"
      }
    ],
    "faq": [
      {
        "q": "O que é 16:9 em pixels?",
        "a": "As dimensões de pixels 16:9 mais comuns são 1280×720 (720p HD), 1920×1080 (1080p FHD), 2560×1440 (1440p QHD) e 3840×2160 (4K UHD). Qualquer largura divisível que resulte em uma proporção 16:9 funciona — por exemplo, 640×360 ou 800×450."
      },
      {
        "q": "Por que 16:9 é o padrão para vídeo?",
        "a": "16:9 foi escolhido como o padrão internacional de HDTV nos anos 80-90 porque é um compromisso matemático entre a proporção de TV 4:3 mais antiga e a proporção de cinema 2.39:1 mais larga. Minimiza o 'letterboxing' ao exibir conteúdo de qualquer uma das fontes."
      },
      {
        "q": "1920×1080 é o mesmo que 16:9?",
        "a": "Sim. 1920 ÷ 16 = 120, e 1080 ÷ 9 = 120, então ambas as dimensões compartilham o mesmo fator. 1920×1080 (Full HD / 1080p) é a resolução 16:9 mais utilizada."
      },
      {
        "q": "Qual é a proporção 16:9 para uma resolução 4K?",
        "a": "4K UHD (Ultra High Definition) em 16:9 é 3840×2160 pixels — exatamente quatro vezes a área de 1920×1080. Cinema 4K (DCI 4K) é 4096×2160, que é uma proporção ligeiramente diferente (1.9:1)."
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
    "title": "Proporção de Aspecto 9:16 — TikTok, Reels e Dimensões de Vídeo Vertical",
    "description": "Guia completo da proporção de aspecto 9:16: dimensões em pixels, casos de uso para TikTok, Instagram Reels, YouTube Shorts e uma calculadora gratuita.",
    "explanation": "9:16 é a contraparte vertical (retrato) do formato widescreen 16:9. Preenche perfeitamente a tela de um smartphone segurado na posição vertical, tornando-o o formato dominante para vídeos sociais de formato curto. TikTok, Instagram Reels, YouTube Shorts e Snapchat utilizam 9:16 como sua tela principal.",
    "useCases": [
      "Vídeos do TikTok",
      "Reels e Stories do Instagram",
      "YouTube Shorts",
      "Vídeos do Snapchat",
      "Reels e Stories do Facebook",
      "Pins de vídeo do Pinterest",
      "Publicidade otimizada para dispositivos móveis"
    ],
    "dimensions": [
      {
        "name": "SD Mobile",
        "width": 540,
        "height": 960,
        "use": "Dispositivos móveis de baixa resolução, dispositivos antigos"
      },
      {
        "name": "HD Mobile",
        "width": 720,
        "height": 1280,
        "use": "Qualidade móvel padrão"
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
        "use": "Gravação com smartphone de ponta"
      }
    ],
    "faq": [
      {
        "q": "Qual resolução devo usar para o TikTok?",
        "a": "O TikTok recomenda 1080×1920 pixels (proporção 9:16) para a melhor qualidade. Este é vídeo vertical Full HD. Usar uma resolução mais baixa pode resultar em artefatos de compressão após o upload."
      },
      {
        "q": "9:16 é o mesmo que o modo retrato?",
        "a": "Sim. 9:16 é a proporção de vídeo padrão em retrato (vertical), equivalente a girar um quadro widescreen 16:9 de lado. Corresponde à orientação natural de um smartphone segurado com uma mão."
      },
      {
        "q": "Posso postar um vídeo 9:16 no YouTube?",
        "a": "Sim — o YouTube Shorts foi projetado especificamente para vídeos verticais 9:16. Uploads regulares do YouTube também aceitam 9:16, mas serão exibidos com barras pretas (pillarboxing) no desktop quando incorporados em um player 16:9."
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
    "title": "Proporção de Aspecto 4:3 — Dimensões Clássicas de Tela e Calculadora",
    "description": "A proporção de aspecto 4:3 explicada: tamanhos de pixels comuns, onde ainda é usada hoje (tablets, apresentações, cinema) e uma calculadora gratuita.",
    "explanation": "4:3 (quatro por três) foi o padrão para televisores e monitores de computador desde a década de 1930 até o início dos anos 2000. Produz um retângulo quase quadrado que corresponde às proporções dos quadros de filme de 35mm. Embora em grande parte substituído pelo 16:9 para vídeo, permanece relevante para telas de iPad, apresentações do PowerPoint e certos formatos de fotografia.",
    "useCases": [
      "Telas de iPad e tablets",
      "Televisão antiga e CFTV",
      "Apresentações do PowerPoint / Keynote (formato antigo)",
      "Câmeras digitais e fotografia",
      "Folhetos impressos e documentos com proporção A4",
      "Efeitos de vídeo e cinema em estilo retrô"
    ],
    "dimensions": [
      {
        "name": "QVGA",
        "width": 320,
        "height": 240,
        "use": "Dispositivos antigos, telas integradas"
      },
      {
        "name": "VGA",
        "width": 640,
        "height": 480,
        "use": "Web clássica, padrão de webcam"
      },
      {
        "name": "SVGA",
        "width": 800,
        "height": 600,
        "use": "Monitores antigos, projetores"
      },
      {
        "name": "XGA",
        "width": 1024,
        "height": 768,
        "use": "iPad (1ª–4ª geração), projetores padrão"
      },
      {
        "name": "SXGA",
        "width": 1280,
        "height": 960,
        "use": "Câmeras digitais, fotografia"
      },
      {
        "name": "UXGA",
        "width": 1600,
        "height": 1200,
        "use": "Monitores profissionais, imagens com qualidade de impressão"
      }
    ],
    "faq": [
      {
        "q": "Qual é a proporção 4:3 em pixels?",
        "a": "As dimensões de pixels 4:3 comuns incluem 640×480 (VGA), 800×600 (SVGA), 1024×768 (XGA) e 1280×960. Qualquer resolução onde largura ÷ altura = 1,333... segue a proporção 4:3."
      },
      {
        "q": "Alguém ainda usa 4:3?",
        "a": "Sim. O iPad utiliza uma tela 4:3 (2048×1536 nos modelos Retina). Muitos modelos de PowerPoint, câmeras DSLR e câmeras de vigilância antigas também utilizam 4:3. É menos comum para vídeo, mas ainda é relevante para imagens estáticas e apresentações."
      },
      {
        "q": "Qual é a diferença entre 4:3 e 16:9?",
        "a": "4:3 é mais quadrado (proporção de 1,33:1) enquanto 16:9 é mais largo e retangular (proporção de 1,78:1). 16:9 é o padrão moderno de TV e vídeo; 4:3 é o padrão antigo que o precedeu. Ao visualizar conteúdo 4:3 em uma tela 16:9, barras pretas (pillarboxing) aparecem nas laterais."
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
    "title": "Proporção de Aspecto 1:1 — Dimensões Quadradas para Instagram e Mais",
    "description": "A proporção de aspecto quadrada 1:1: tamanhos de pixels, melhores usos no Instagram e redes sociais, e uma calculadora de proporção de aspecto gratuita.",
    "explanation": "1:1 é um quadrado perfeito: a largura e a altura são idênticas. O Instagram popularizou o formato quadrado para a fotografia em redes sociais, e continua sendo um elemento básico para fotos de perfil, capas de álbuns e publicações no feed em todas as principais plataformas.",
    "useCases": [
      "Publicações no feed do Instagram (formato original)",
      "Fotos de perfil em todas as plataformas",
      "Arte de álbuns e capas de música",
      "Ícones de aplicativos e favicons",
      "Fotografia de produtos para e-commerce",
      "Imagens para publicações no Facebook e LinkedIn"
    ],
    "dimensions": [
      {
        "name": "Small",
        "width": 400,
        "height": 400,
        "use": "Miniaturas de perfil, ícones de aplicativos"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1080,
        "use": "Publicação no feed do Instagram (recomendado)"
      },
      {
        "name": "High Res",
        "width": 2048,
        "height": 2048,
        "use": "Impressão, fotografia profissional"
      },
      {
        "name": "4K Square",
        "width": 4096,
        "height": 4096,
        "use": "Impressão de ultra alta resolução, arquivamento"
      }
    ],
    "faq": [
      {
        "q": "Qual é a melhor resolução 1:1 para o Instagram?",
        "a": "O Instagram recomenda 1080×1080 pixels para publicações quadradas no feed. O mínimo é 320×320, mas 1080×1080 é o padrão para uma exibição nítida em todos os dispositivos."
      },
      {
        "q": "Uma proporção 1:1 é o mesmo que um quadrado?",
        "a": "Sim, exatamente. Uma proporção de aspecto 1:1 significa que a largura é igual à altura, produzindo um quadrado perfeito independentemente do número real de pixels."
      },
      {
        "q": "Por que o Instagram usa 1:1?",
        "a": "O Instagram foi originalmente projetado em torno da fotografia móvel e escolheu o formato quadrado 1:1 para padronizar a grade do feed. Embora mais tarde tenham adicionado formatos vertical (4:5) e horizontal (1.91:1), o quadrado 1:1 continua sendo o formato clássico do Instagram."
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
    "title": "Proporção de Aspecto 4:5 — Dimensões de Retrato para Instagram e Calculadora",
    "description": "A proporção de aspecto 4:5 para publicações de retrato no Instagram: os melhores tamanhos de pixels, por que ocupa mais espaço no feed e uma calculadora gratuita.",
    "explanation": "4:5 é uma proporção de retrato (mais alta que larga) que ocupa o máximo espaço vertical permitido pelo feed do Instagram, dando à sua imagem mais espaço na tela do que uma publicação quadrada ou paisagem. Com uma proporção de 0,8:1, é ligeiramente mais larga que uma tela de telefone 9:16, tornando-a ideal para retratos, fotos de produtos e fotografia editorial.",
    "useCases": [
      "Publicações no feed do Instagram (retrato — altura máxima)",
      "Fotografia para redes sociais",
      "Fotografia de retrato para impressão",
      "Pins do Pinterest (formato secundário)",
      "Publicações de imagens em retrato no Facebook"
    ],
    "dimensions": [
      {
        "name": "Minimum",
        "width": 600,
        "height": 750,
        "use": "Mínimo para qualidade aceitável no Instagram"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1350,
        "use": "Publicação de retrato no Instagram (recomendado)"
      },
      {
        "name": "High Res",
        "width": 2160,
        "height": 2700,
        "use": "Imagens de retrato com qualidade de impressão"
      }
    ],
    "faq": [
      {
        "q": "Por que usar 4:5 em vez de 9:16 para publicações no Instagram?",
        "a": "O Instagram recorta as imagens 9:16 para o feed em 4:5 (a proporção de retrato máxima permitida para publicações no feed). Se você usar 4:5, obterá a imagem mais alta permitida no feed sem perder conteúdo pelo recorte. 9:16 é apenas para Stories e Reels."
      },
      {
        "q": "Quais são as dimensões em pixels para 4:5 no Instagram?",
        "a": "O tamanho recomendado é 1080×1350 pixels. Este é o tamanho de retrato máximo que o Instagram permite para publicações no feed e é exibido de forma nítida em todos os dispositivos."
      },
      {
        "q": "O 4:5 consegue mais alcance no Instagram?",
        "a": "Uma publicação 4:5 ocupa mais espaço vertical no feed do que uma publicação quadrada 1:1 ou paisagem 1.91:1, o que pode ajudar a captar mais atenção enquanto os usuários rolam a tela. Muitos criadores relatam taxas de engajamento mais altas com publicações em retrato, embora isso dependa do conteúdo."
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
    "title": "Proporção de Aspecto 3:2 — Fotografia, DSLR e Dimensões de Impressão",
    "description": "A proporção de aspecto 3:2 para câmeras DSLR e impressão: dimensões comuns, origens do filme de 35mm e uma calculadora de proporção de aspecto gratuita.",
    "explanation": "A proporção 3:2 tem origem no quadro de filme de 35mm, que mede 36mm × 24mm — uma proporção 3:2. Continua sendo a proporção nativa para a maioria das câmeras DSLR e mirrorless, e corresponde diretamente a tamanhos de impressão comuns como 4×6 polegadas, 6×9 polegadas e 12×18 polegadas.",
    "useCases": [
      "Sensores de câmeras DSLR e mirrorless",
      "Fotografia com filme de 35mm",
      "Impressões de 4×6 e 6×9 polegadas",
      "Layouts de álbuns de fotos",
      "Fotografia de retrato profissional"
    ],
    "dimensions": [
      {
        "name": "6MP",
        "width": 3008,
        "height": 2000,
        "use": "DSLR de nível básico"
      },
      {
        "name": "12MP",
        "width": 4272,
        "height": 2848,
        "use": "DSLR de gama média (ex.: Canon 60D)"
      },
      {
        "name": "24MP",
        "width": 6000,
        "height": 4000,
        "use": "DSLR profissional (ex.: Nikon D3200)"
      },
      {
        "name": "36MP",
        "width": 7360,
        "height": 4912,
        "use": "DSLR de alta resolução (ex.: Nikon D800)"
      }
    ],
    "faq": [
      {
        "q": "Quais tamanhos de impressão correspondem à proporção 3:2?",
        "a": "Os tamanhos de impressão padrão 3:2 incluem 4×6 polegadas, 6×9 polegadas, 8×12 polegadas, 12×18 polegadas e 20×30 polegadas. Esses tamanhos de impressão exibirão sua imagem completa sem recortes."
      },
      {
        "q": "Qual é a proporção 3:2 em pixels?",
        "a": "Qualquer resolução onde largura ÷ altura = 1,5 é uma proporção 3:2. Exemplos comuns: 3000×2000, 4500×3000, 6000×4000. A maioria das câmeras DSLR captura imagens nativamente em 3:2."
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
    "title": "Proporção de Aspecto 21:9 — Dimensões e Calculadora de Monitores Ultrawide",
    "description": "A proporção de aspecto ultrawide 21:9: resoluções comuns (2560×1080, 3440×1440, 5120×2160), usos em jogos e cinema, e uma calculadora gratuita.",
    "explanation": "21:9 (às vezes chamado de ultrawide) proporciona um campo de visão muito mais amplo que os monitores padrão 16:9. É popular para jogos (eliminando a necessidade de múltiplos monitores), produção de vídeo cinematográfico e fluxos de trabalho de produtividade. Muitos filmes cinematográficos filmados em 2.35:1 ou 2.39:1 aparecem próximos de 21:9 quando exibidos em uma tela ultrawide.",
    "useCases": [
      "Monitores de jogos ultrawide",
      "Estações de trabalho para edição de vídeo e correção de cor",
      "Produtividade com múltiplas aplicações",
      "Visualização de filmes cinematográficos (letterboxing mínimo)",
      "Simuladores de voo e jogos de corrida"
    ],
    "dimensions": [
      {
        "name": "FHD Ultrawide",
        "width": 2560,
        "height": 1080,
        "use": "Jogos ultrawide de entrada, monitores econômicos"
      },
      {
        "name": "QHD Ultrawide",
        "width": 3440,
        "height": 1440,
        "use": "Ultrawide premium padrão"
      },
      {
        "name": "5K Ultrawide",
        "width": 5120,
        "height": 2160,
        "use": "Estação de trabalho profissional, LG 34WK95U"
      }
    ],
    "faq": [
      {
        "q": "21:9 é realmente 21 por 9?",
        "a": "Não exatamente — o nome '21:9' é um rótulo de marketing. A maioria dos monitores ultrawide tem uma proporção mais próxima de 64:27 (2,370:1) ou 43:18 (2,388:1). A proporção real depende da resolução específica (por exemplo, 3440×1440 = 43:18)."
      },
      {
        "q": "Todos os jogos são compatíveis com 21:9?",
        "a": "Muitos jogos modernos são compatíveis nativamente com o formato ultrawide 21:9. Alguns títulos mais antigos ou certos jogos multiplayer restringem o campo de visão para 16:9 para evitar vantagens competitivas. Verifique as configurações do jogo ou sites da comunidade para saber o status de compatibilidade com ultrawide."
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
    "title": "Proporção de Aspecto 2:1 — Dimensões Panorâmicas e de Banner",
    "description": "A proporção de aspecto 2:1: usos para fotografia panorâmica, banners web e cabeçalhos do Twitter/X, com uma calculadora gratuita.",
    "explanation": "2:1 é uma proporção panorâmica larga onde a largura é exatamente o dobro da altura. É usada para fotografia panorâmica cênica, banners hero de páginas web e certos cabeçalhos de redes sociais. Situa-se entre as proporções widescreen 16:9 e as verdadeiras proporções cinematográficas.",
    "useCases": [
      "Fotografia panorâmica de paisagens",
      "Banners hero e cabeçalhos de sites",
      "Recorte de fotos 360°",
      "Cabeçalhos de newsletters por e-mail",
      "Sinalização digital"
    ],
    "dimensions": [
      {
        "name": "Web Banner",
        "width": 1200,
        "height": 600,
        "use": "Banner web padrão, imagem OG"
      },
      {
        "name": "HD Banner",
        "width": 2000,
        "height": 1000,
        "use": "Imagem hero web de alta resolução"
      },
      {
        "name": "Panoramic",
        "width": 4000,
        "height": 2000,
        "use": "Fotografia panorâmica"
      }
    ],
    "faq": [
      {
        "q": "Qual é a diferença entre 2:1 e 16:9?",
        "a": "Uma proporção 2:1 (2,0:1) é mais larga que 16:9 (1,78:1). Uma imagem 2:1 é mais panorâmica — por exemplo, 2000×1000 pixels contra 1920×1080 em 16:9. 2:1 tem mais espaço horizontal em relação à sua altura."
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
    "title": "Proporção de Aspecto 5:4 — Dimensões para Impressão e Monitores",
    "description": "A proporção de aspecto 5:4: impressões de 8×10, câmeras de formato médio e monitores antigos de 1280×1024. Calculadora gratuita incluída.",
    "explanation": "5:4 é ligeiramente mais alta que a proporção padrão 4:3. Corresponde ao tamanho de impressão de 8×10 polegadas usado em estúdios de fotografia de retratos e à resolução 1280×1024 comum em monitores CRT antigos e nos primeiros monitores LCD.",
    "useCases": [
      "Impressões de retrato de 8×10 polegadas",
      "Impressões fotográficas de 10×8 polegadas",
      "Conteúdo para monitores antigos de 1280×1024",
      "Fotografia de formato médio",
      "Fotografia de retrato em estúdio"
    ],
    "dimensions": [
      {
        "name": "SXGA",
        "width": 1280,
        "height": 1024,
        "use": "Monitores e projetores antigos"
      },
      {
        "name": "Print 8×10",
        "width": 2400,
        "height": 3000,
        "use": "Impressão de 8×10 polegadas a 300 DPI"
      },
      {
        "name": "Print 16×20",
        "width": 4800,
        "height": 6000,
        "use": "Impressão de 16×20 polegadas a 300 DPI"
      }
    ],
    "faq": [
      {
        "q": "Quais pixels correspondem à proporção 5:4?",
        "a": "Os tamanhos de pixels comuns para 5:4 incluem 1280×1024, 2560×2048 e qualquer par de dimensões onde largura ÷ altura = 1,25. Uma impressão de 8×10 digitalizada a 300 DPI produz 2400×3000 pixels (em orientação vertical, 3:2,4 = 5:4)."
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
    "title": "Tamanhos de Imagem e Proporções de Aspecto do Instagram 2026 — Guia Completo",
    "description": "Todas as dimensões de imagem e vídeo do Instagram para 2026: publicações do feed, Stories, Reels, fotos de perfil e mais. Tamanhos exatos em pixels e proporções de aspecto.",
    "intro": "O Instagram suporta múltiplas proporções de aspecto dependendo de onde o seu conteúdo aparece. Usar as dimensões corretas garante que suas imagens sejam exibidas com nitidez sem recortes indesejados. Aqui estão todos os tamanhos oficiais recomendados para 2026.",
    "formats": [
      {
        "type": "Publicação do Feed — Quadrada",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Formato clássico; seguro para todos os dispositivos"
      },
      {
        "type": "Publicação do Feed — Retrato (altura máxima)",
        "width": 1080,
        "height": 1350,
        "ratio": "4:5",
        "notes": "Ocupa a maior parte do espaço do feed; recomendado para máxima visibilidade"
      },
      {
        "type": "Publicação do Feed — Paisagem",
        "width": 1080,
        "height": 566,
        "ratio": "1.91:1",
        "notes": "Imagem larga; menos espaço no feed que o formato retrato"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vertical em tela cheia; máximo de 15 segundos para fotos"
      },
      {
        "type": "Reel",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "O vídeo deve ter pelo menos 3 segundos; máximo de 90 segundos"
      },
      {
        "type": "Foto de Perfil",
        "width": 320,
        "height": 320,
        "ratio": "1:1",
        "notes": "Exibida como um círculo; mantenha o conteúdo principal centralizado"
      },
      {
        "type": "Publicação em Carrossel",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Cada cartão deve ter as mesmas dimensões"
      }
    ],
    "tips": [
      "Use 4:5 (1080×1350) para publicações do feed para maximizar o espaço vertical ao rolar",
      "Mantenha o conteúdo importante dentro dos 80% centrais dos Stories para evitar sobreposições da interface",
      "Exporte com largura total de 1080px — o Instagram comprimirá qualquer coisa maior de qualquer forma",
      "Use PNG para gráficos e ilustrações; JPEG com qualidade de 80–90% para fotos",
      "Evite texto pequeno perto das bordas — pode ser recortado em dispositivos antigos"
    ],
    "faq": [
      {
        "q": "Qual é o melhor tamanho para publicações no Instagram em 2026?",
        "a": "Para máxima visibilidade no feed, use 1080×1350 pixels (proporção 4:5 — retrato). Este é o formato mais alto que o Instagram permite para publicações no feed e ocupa a maior parte da tela enquanto os usuários rolam."
      },
      {
        "q": "Posso postar um vídeo 16:9 no Instagram?",
        "a": "Sim, mas o Instagram recortará os vídeos 16:9 para se ajustarem ao feed (para 1:1 ou 4:5). Para Reels e Stories, os vídeos 16:9 mostrarão barras pretas (letterboxing) na parte superior e inferior. Sempre grave em vertical (9:16) para Reels e Stories."
      },
      {
        "q": "Qual tamanho deve ter o texto dos Stories do Instagram?",
        "a": "Mantenha todo o texto e elementos visuais importantes dentro da zona segura: aproximadamente 1080×1420 pixels centralizados dentro da tela de 1080×1920. Os 250px superiores e os 250px inferiores geralmente são cobertos por elementos da interface como o nome de usuário e a barra de resposta."
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
    "title": "Dimensões de Vídeo e Proporções de Aspecto do YouTube 2026 — Guia Completo",
    "description": "Todas as dimensões de imagem e vídeo do YouTube para 2026: vídeos, Shorts, miniaturas, banners de canal e fotos de perfil. Tamanhos de pixels e proporções exatas.",
    "intro": "O YouTube é principalmente uma plataforma 16:9, mas o Shorts utiliza vídeo vertical 9:16. Ajustar as dimensões corretamente melhora a taxa de cliques das suas miniaturas e garante que seu conteúdo tenha uma aparência nítida em todos os dispositivos.",
    "formats": [
      {
        "type": "Vídeo (HD padrão)",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Recomendado para a maioria dos uploads (1080p)"
      },
      {
        "type": "Vídeo (4K)",
        "width": 3840,
        "height": 2160,
        "ratio": "16:9",
        "notes": "Qualidade máxima; requer gravação em 4K"
      },
      {
        "type": "Shorts",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vídeo vertical; máximo de 60 segundos"
      },
      {
        "type": "Miniatura",
        "width": 1280,
        "height": 720,
        "ratio": "16:9",
        "notes": "Miniatura personalizada; tamanho máximo de arquivo 2MB"
      },
      {
        "type": "Banner do Canal (Desktop)",
        "width": 2560,
        "height": 1440,
        "ratio": "16:9",
        "notes": "Banner completo; apenas o centro de 1546×423px é exibido em todos os dispositivos"
      },
      {
        "type": "Foto de Perfil",
        "width": 800,
        "height": 800,
        "ratio": "1:1",
        "notes": "Exibida como um círculo; mínimo 98×98px"
      }
    ],
    "tips": [
      "Projete miniaturas de 1280×720 com texto em negrito e cores de alto contraste para melhor CTR",
      "Mantenha a zona segura do banner do canal em 1546×423 pixels para garantir que seja exibido em todos os dispositivos",
      "Envie vídeos na resolução mais alta que puder — o YouTube transcodifica para baixo, não para cima",
      "Para Shorts, use 1080×1920 (9:16) e certifique-se de que não haja conteúdo essencial nos 10% superior ou inferior",
      "O arquivo da miniatura deve ter menos de 2MB — use JPEG para fotos, PNG para gráficos"
    ],
    "faq": [
      {
        "q": "Qual resolução é a melhor para vídeos do YouTube?",
        "a": "1920×1080 (1080p Full HD) é a resolução padrão e recomendada para uploads no YouTube. Proporciona vídeo nítido na maioria das telas sem precisar de equipamento de gravação 4K."
      },
      {
        "q": "Qual tamanho deve ter uma miniatura do YouTube?",
        "a": "O YouTube recomenda 1280×720 pixels (proporção 16:9) para miniaturas personalizadas. O tamanho máximo de arquivo é 2MB. Use JPEG para fotos ou PNG para gráficos projetados."
      },
      {
        "q": "Qual é a resolução do YouTube Shorts?",
        "a": "O YouTube Shorts utiliza uma proporção vertical 9:16, com a resolução recomendada de 1080×1920 pixels. A duração máxima para Shorts é de 60 segundos."
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
    "title": "Dimensões e Proporções de Aspecto de Vídeo do TikTok 2026 — Guia Completo",
    "description": "Tamanhos e proporções de aspecto de vídeo do TikTok para 2026: a melhor resolução para vídeos do TikTok, fotos de perfil e imagens de capa.",
    "intro": "O TikTok é uma plataforma de vídeo vertical projetada para dispositivos móveis. Todo o conteúdo deve ser criado para uma orientação vertical de 9:16. Aqui estão as especificações para garantir que seu conteúdo tenha a melhor aparência.",
    "formats": [
      {
        "type": "Vídeo (Recomendado)",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Full HD vertical — use sempre este formato"
      },
      {
        "type": "Vídeo (Mínimo)",
        "width": 720,
        "height": 1280,
        "ratio": "9:16",
        "notes": "Mínimo para qualidade aceitável"
      },
      {
        "type": "Foto de Perfil",
        "width": 200,
        "height": 200,
        "ratio": "1:1",
        "notes": "Exibida como um círculo"
      },
      {
        "type": "Imagem de Capa",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Extraída automaticamente do vídeo; pode ser personalizada"
      }
    ],
    "tips": [
      "Sempre grave e envie em 1080×1920 (9:16) para a melhor qualidade de exibição",
      "Mantenha o conteúdo principal no centro do quadro — os 20% inferiores são cobertos por legendas e interface",
      "O TikTok é compatível com os formatos .mp4 e .mov; o codec H.264 é recomendado",
      "Use a ferramenta de sobreposição de texto do TikTok com moderação — ela se sobrepõe ao seu conteúdo",
      "Iluminação brilhante e visuais de alto contraste têm melhor desempenho no algoritmo"
    ],
    "faq": [
      {
        "q": "Qual é a melhor resolução de vídeo para o TikTok?",
        "a": "O TikTok recomenda 1080×1920 pixels (proporção 9:16, Full HD vertical). Usar esta resolução garante que seu vídeo seja exibido sem barras pretas ou letterboxing em qualquer dispositivo."
      },
      {
        "q": "Posso enviar um vídeo horizontal (16:9) para o TikTok?",
        "a": "Sim, o TikTok aceita vídeos horizontais, mas eles serão exibidos com barras pretas acima e abaixo (letterboxed). Para a melhor experiência do espectador e desempenho do algoritmo, use sempre vídeo vertical (9:16)."
      },
      {
        "q": "Qual é a duração máxima de um vídeo no TikTok?",
        "a": "A partir de 2026, o TikTok permite vídeos de até 10 minutos para contas padrão. Vídeos mais curtos (15–60 segundos) geralmente têm melhor desempenho no algoritmo de recomendação."
      }
    ],
    "relatedRatios": [
      "9-16",
      "1-1"
    ]
  },
  "twitter": {
    "name": "X / Twitter",
    "title": "Tamanhos de Imagem e Proporções de Aspecto do X (Twitter) 2026 — Guia Completo",
    "description": "Todas as dimensões de imagem do X (Twitter) para 2026: imagens de publicações, banners de cabeçalho, fotos de perfil e tamanhos de vídeo. Especificações exatas em pixels.",
    "intro": "O X (anteriormente Twitter) suporta uma variedade de formatos e tamanhos de imagem. As imagens nas publicações são recortadas automaticamente na visualização da linha do tempo, mas são exibidas por completo ao tocar nelas. Aqui estão todas as dimensões recomendadas.",
    "formats": [
      {
        "type": "Imagem de Publicação (Paisagem)",
        "width": 1600,
        "height": 900,
        "ratio": "16:9",
        "notes": "Recomendado para a maioria das imagens de publicações"
      },
      {
        "type": "Imagem de Publicação (Quadrada)",
        "width": 1200,
        "height": 1200,
        "ratio": "1:1",
        "notes": "Seguro para todos os contextos de exibição"
      },
      {
        "type": "Imagem de Publicação (Retrato)",
        "width": 900,
        "height": 1350,
        "ratio": "2:3",
        "notes": "Proporção vertical máxima suportada"
      },
      {
        "type": "Foto de Perfil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Exibida como um círculo; mínimo recomendado 400×400"
      },
      {
        "type": "Cabeçalho / Banner",
        "width": 1500,
        "height": 500,
        "ratio": "3:1",
        "notes": "Topo da página de perfil; evitar as bordas — recortado em dispositivos móveis"
      },
      {
        "type": "Vídeo",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Duração máxima de 2:20; limite de tamanho de arquivo 512MB"
      }
    ],
    "tips": [
      "Use 1600×900 para imagens de publicações em paisagem — é exibida sem recorte na linha do tempo",
      "Mantenha os 60% centrais do banner de cabeçalho seguros para todos os dispositivos",
      "As fotos de perfil são exibidas como círculos — use um assunto centralizado sem conteúdo importante perto das bordas",
      "O X comprime as imagens — exporte com qualidade JPEG a 100% para minimizar a compressão visível",
      "Para os cards do Twitter (pré-visualizações de links), use uma proporção 2:1 (ex.: 1200×628) para o formato de card grande"
    ],
    "faq": [
      {
        "q": "Qual é o melhor tamanho de imagem para uma publicação no X (Twitter)?",
        "a": "1600×900 pixels (16:9) é o tamanho recomendado para imagens de publicações do X. É exibida sem recorte na linha do tempo. O formato quadrado (1200×1200) também é seguro e fica bem em todos os contextos."
      },
      {
        "q": "Qual é o tamanho do banner de cabeçalho do X (Twitter)?",
        "a": "O tamanho de cabeçalho do X recomendado é 1500×500 pixels (proporção 3:1). Note que o banner é recortado de forma diferente no desktop e no celular — mantenha o conteúdo importante dentro da área central."
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
    "title": "Tamanhos e Proporções de Imagem do LinkedIn 2026 — Guia Completo",
    "description": "Dimensões de imagem do LinkedIn para 2026: imagens de publicações, banners de empresa, fotos de perfil e imagens de capa. Tamanhos exatos em pixels para conteúdo profissional.",
    "intro": "O LinkedIn é uma rede profissional onde a qualidade da imagem é crucial para a credibilidade. Aqui estão os tamanhos de imagem recomendados para garantir que seu perfil e suas publicações tenham uma aparência impecável.",
    "formats": [
      {
        "type": "Imagem de Publicação (Paisagem)",
        "width": 1200,
        "height": 628,
        "ratio": "1.91:1",
        "notes": "Imagem padrão para publicações do LinkedIn"
      },
      {
        "type": "Imagem de Publicação (Quadrada)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Publicações quadradas funcionam bem no LinkedIn"
      },
      {
        "type": "Foto de Perfil",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Mínimo 200×200; use uma foto profissional"
      },
      {
        "type": "Banner Pessoal",
        "width": 1584,
        "height": 396,
        "ratio": "4:1",
        "notes": "Exibido atrás da foto de perfil"
      },
      {
        "type": "Logotipo da Empresa",
        "width": 300,
        "height": 300,
        "ratio": "1:1",
        "notes": "Logotipo quadrado para a página da empresa"
      },
      {
        "type": "Banner da Empresa",
        "width": 1128,
        "height": 191,
        "ratio": "5.9:1",
        "notes": "Banner muito largo; mantenha o texto centralizado"
      }
    ],
    "tips": [
      "Use 1200×628 para imagens de pré-visualização de links (formato de card do LinkedIn)",
      "A foto de perfil deve mostrar seu rosto claramente — o LinkedIn é um contexto profissional",
      "O banner pessoal pode destacar seu trabalho, conjunto de habilidades ou marca — use 1584×396",
      "Publicações de empresas com imagens obtêm significativamente mais engajamento do que publicações apenas de texto",
      "Exporte as fotos de perfil como JPEG ou PNG; o tamanho máximo de arquivo é de 8MB"
    ],
    "faq": [
      {
        "q": "Qual é o melhor tamanho de imagem para publicações no LinkedIn?",
        "a": "1200×628 pixels (proporção 1.91:1) é o tamanho de imagem recomendado pelo LinkedIn para publicações. Imagens quadradas (1080×1080) também funcionam bem e podem ser exibidas melhor no feed móvel."
      },
      {
        "q": "Qual é o tamanho do banner de perfil do LinkedIn?",
        "a": "O banner pessoal do LinkedIn (foto de fundo) deve ter 1584×396 pixels (proporção 4:1). Este é o tamanho que é exibido atrás da sua foto de perfil no desktop e no celular."
      }
    ],
    "relatedRatios": [
      "1-1",
      "16-9"
    ]
  },
  "facebook": {
    "name": "Facebook",
    "title": "Tamanhos de Imagem e Proporções de Aspecto do Facebook 2026 — Guia Completo",
    "description": "Dimensões de imagem do Facebook para 2026: imagens de publicações, fotos de capa, Stories, fotos de perfil e mais. Especificações exatas em pixels.",
    "intro": "O Facebook suporta muitos formatos de imagem e as especificações variam de acordo com o posicionamento. Aqui estão as dimensões recomendadas para 2026 para garantir que seu conteúdo tenha a melhor aparência.",
    "formats": [
      {
        "type": "Imagem de Publicação",
        "width": 1200,
        "height": 630,
        "ratio": "1.91:1",
        "notes": "Imagem padrão do feed; também usada para pré-visualizações de links"
      },
      {
        "type": "Imagem de Publicação (Quadrada)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Segura tanto para feeds de desktop quanto móveis"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Vertical em tela cheia; duração de 24 horas"
      },
      {
        "type": "Foto de Perfil",
        "width": 180,
        "height": 180,
        "ratio": "1:1",
        "notes": "Exibida a 170×170 no desktop; recorte circular"
      },
      {
        "type": "Foto de Capa",
        "width": 820,
        "height": 312,
        "ratio": "2.63:1",
        "notes": "Exibida a 820×312 no desktop, 640×360 no celular"
      },
      {
        "type": "Capa de Evento",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Imagem de cabeçalho da página do evento"
      }
    ],
    "tips": [
      "Projete fotos de capa com o conteúdo principal no centro — o recorte difere no celular vs desktop",
      "Para publicações com links, use uma imagem de 1200×630 para acionar o card de pré-visualização grande do Facebook",
      "Envie fotos na maior resolução possível — o Facebook as comprimirá",
      "As fotos de perfil são exibidas como círculos — mantenha rostos ou logotipos centralizados",
      "Zona segura dos Stories: mantenha o conteúdo dentro de 250px das bordas superior e inferior"
    ],
    "faq": [
      {
        "q": "Qual é o melhor tamanho de imagem para publicações no Facebook?",
        "a": "1200×630 pixels (proporção 1.91:1) é o tamanho recomendado para publicações no Facebook. Isso também funciona para imagens de pré-visualização de links. Quadrado (1080×1080) é uma alternativa segura que fica consistente em todos os posicionamentos."
      },
      {
        "q": "Qual é o tamanho da foto de capa do Facebook?",
        "a": "O tamanho recomendado para a foto de capa do Facebook é 820×312 pixels para desktop. No celular, é exibida como 640×360. Para evitar recortes, mantenha o conteúdo importante na área central de 640×312."
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
    "title": "Tamanhos e Proporções de Pins do Pinterest 2026 — Guia Completo",
    "description": "Dimensões de imagem do Pinterest para 2026: pins padrão, Idea Pins, pins quadrados e fotos de perfil. Obtenha a proporção de aspecto correta para alcance máximo.",
    "intro": "O Pinterest é uma plataforma de descoberta visual onde imagens mais altas (proporção 2:3) funcionam melhor — elas ocupam mais espaço no feed. Aqui estão as dimensões recomendadas para todos os tipos de conteúdo do Pinterest.",
    "formats": [
      {
        "type": "Pin Padrão (Retrato)",
        "width": 1000,
        "height": 1500,
        "ratio": "2:3",
        "notes": "Recomendado — melhor alcance e engajamento"
      },
      {
        "type": "Pin Quadrado",
        "width": 1000,
        "height": 1000,
        "ratio": "1:1",
        "notes": "Funciona bem; menos espaço vertical que o formato retrato"
      },
      {
        "type": "Pin Alto",
        "width": 1000,
        "height": 2100,
        "ratio": "1:2.1",
        "notes": "Altura máxima; use com cuidado — pode ser recortado"
      },
      {
        "type": "Idea Pin",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Formato de história de várias páginas; vertical em tela cheia"
      },
      {
        "type": "Foto de Perfil",
        "width": 165,
        "height": 165,
        "ratio": "1:1",
        "notes": "Recorte circular; mantenha o assunto centralizado"
      }
    ],
    "tips": [
      "Use 1000×1500 (2:3) para pins padrão — é o tamanho ideal para visibilidade no feed",
      "Evite ir além de uma proporção de 1:2.1 — o Pinterest pode recortar imagens excessivamente altas",
      "Adicione uma sobreposição de texto na parte superior central do pin — evite os 100px inferiores onde o domínio de origem é exibido",
      "Salve os pins em JPEG para fotos (máx. 20MB) ou PNG para gráficos com transparência",
      "Os Idea Pins (9:16) funcionam de maneira diferente dos pins padrão — são mais parecidos com Stories"
    ],
    "faq": [
      {
        "q": "Qual é o melhor tamanho de pin do Pinterest?",
        "a": "O tamanho de pin do Pinterest recomendado é 1000×1500 pixels (proporção 2:3). Este formato retrato ocupa mais espaço vertical no feed, aumentando a visibilidade e a taxa de cliques."
      },
      {
        "q": "Posso usar uma imagem quadrada no Pinterest?",
        "a": "Sim, pins quadrados 1:1 (por exemplo, 1000×1000) são suportados. No entanto, pins em retrato (2:3) geralmente têm melhor desempenho, pois ocupam mais espaço na tela no feed estilo alvenaria."
      },
      {
        "q": "O que é um Pinterest Idea Pin?",
        "a": "Os Idea Pins (anteriormente Story Pins) são conteúdo vertical de várias páginas em tela cheia (9:16, 1080×1920). Eles não direcionam para sites externos e são projetados para conteúdo nativo dentro do Pinterest."
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
    "title": "O Que é Proporção de Aspecto? Um Guia para Iniciantes",
    "description": "Uma explicação clara e acessível para iniciantes sobre proporção de aspecto: o que significa, como é escrita, por que é importante para telas e imagens, e como usá-la.",
    "intro": "Proporção de aspecto é um daqueles termos que parece técnico, mas na verdade é bastante simples quando você entende. Seja redimensionando uma foto para o Instagram, configurando um vídeo do YouTube ou comprando um novo monitor, a proporção de aspecto determina a forma da sua imagem ou tela. Este guia explica tudo o que você precisa saber.",
    "sections": [
      {
        "heading": "O Que Significa Proporção de Aspecto?",
        "body": "Proporção de aspecto é a relação proporcional entre a largura e a altura de uma imagem, tela ou quadro de vídeo. É escrita como dois números separados por dois pontos — por exemplo, 16:9 ou 4:3. O primeiro número é a largura e o segundo é a altura. Uma proporção 16:9 significa que para cada 16 unidades de largura, a altura é de 9 unidades. O tamanho real não importa — uma imagem de 160×90 pixels e uma imagem de 3840×2160 pixels são ambas 16:9 porque compartilham as mesmas proporções."
      },
      {
        "heading": "Por Que a Proporção de Aspecto é Importante?",
        "body": "A proporção de aspecto é importante sempre que você está exibindo, imprimindo ou compartilhando conteúdo visual. Se a proporção da sua imagem não corresponder à proporção da tela ou do contêiner, uma de duas coisas acontece:",
        "list": [
          "Letterboxing / Pillarboxing — Barras pretas aparecem para preencher o espaço vazio",
          "Recorte — A imagem é cortada para se ajustar, e parte do conteúdo é perdido",
          "Esticamento — A imagem é distorcida para preencher o quadro (menos desejável)"
        ]
      },
      {
        "heading": "Proporções de Aspecto Comuns e Onde São Usadas",
        "body": "Diferentes indústrias e plataformas padronizaram diferentes proporções de aspecto. Aqui estão as mais importantes que você deve conhecer:",
        "table": {
          "headers": [
            "Proporção",
            "Decimal",
            "Uso Comum"
          ],
          "rows": [
            [
              "16:9",
              "1.78:1",
              "YouTube, Netflix, TV, monitores, apresentações"
            ],
            [
              "9:16",
              "0.56:1",
              "TikTok, Instagram Reels, YouTube Shorts, Stories"
            ],
            [
              "1:1",
              "1.00:1",
              "Publicações do feed do Instagram, fotos de perfil, capas de álbuns"
            ],
            [
              "4:5",
              "0.80:1",
              "Publicações em retrato do Instagram (altura máxima do feed)"
            ],
            [
              "4:3",
              "1.33:1",
              "iPads, TV antiga, PowerPoint, câmeras DSLR"
            ],
            [
              "3:2",
              "1.50:1",
              "Câmeras DSLR, impressões 4×6, filme de 35mm"
            ],
            [
              "2.39:1",
              "2.39:1",
              "Filmes de cinema em formato cinemascope"
            ]
          ]
        }
      },
      {
        "heading": "Como Calcular uma Proporção de Aspecto",
        "body": "Para encontrar a proporção de aspecto de qualquer imagem, divida tanto a largura quanto a altura pelo seu Máximo Divisor Comum (MDC). Por exemplo, uma imagem de 1920×1080 pixels: ambos os números são divisíveis por 120, resultando em 16:9. Nossa calculadora gratuita faz isso automaticamente — basta inserir sua largura e altura."
      },
      {
        "heading": "Proporção de Aspecto vs. Resolução",
        "body": "Proporção de aspecto e resolução estão relacionadas, mas não são a mesma coisa. Resolução refere-se ao número total de pixels (por exemplo, 1920×1080). Proporção de aspecto refere-se à forma (por exemplo, 16:9). Duas imagens podem compartilhar a mesma proporção de aspecto, mas ter resoluções completamente diferentes — por exemplo, 640×360 e 3840×2160 são ambas 16:9, mas diferem vastamente na contagem de pixels e na qualidade."
      }
    ],
    "conclusion": "Compreender a proporção de aspecto ajuda você a produzir imagens e vídeos que ficam exatamente como pretendido em cada tela e plataforma. Use nossa calculadora de proporção de aspecto gratuita para converter dimensões instantaneamente, identificar proporções e redimensionar imagens mantendo as proporções corretas."
  },
  "how-to-calculate-aspect-ratio": {
    "title": "Como Calcular a Proporção de Aspecto: O Guia Completo",
    "description": "Aprenda a calcular a proporção de aspecto passo a passo: usando o método do MDC, a fórmula e nossa calculadora online gratuita. Inclui exemplos resolvidos.",
    "intro": "Saber como calcular uma proporção de aspecto é uma habilidade fundamental para qualquer pessoa que trabalhe com imagens, vídeo ou design. Este guia cobre a matemática por trás disso, os métodos manuais mais rápidos e como usar nossa calculadora gratuita para resultados instantâneos.",
    "sections": [
      {
        "heading": "A Fórmula da Proporção de Aspecto",
        "body": "A proporção de aspecto de qualquer retângulo é simplesmente: Largura ÷ Altura. Para expressá-la como uma proporção W:H limpa (por exemplo, 16:9 em vez de 1,778:1), você precisa encontrar o Máximo Divisor Comum (MDC) da largura e da altura e dividir ambos por ele."
      },
      {
        "heading": "Passo a Passo: Como Encontrar a Proporção de Aspecto",
        "body": "Veja como calcular manualmente a proporção de aspecto de qualquer imagem:",
        "list": [
          "Passo 1: Anote a largura e a altura em pixels (por exemplo, 1920 e 1080)",
          "Passo 2: Encontre o Máximo Divisor Comum (MDC) de ambos os números. Para 1920 e 1080, o MDC é 120.",
          "Passo 3: Divida ambos os números pelo MDC. 1920 ÷ 120 = 16; 1080 ÷ 120 = 9.",
          "Passo 4: Escreva o resultado como W:H — neste caso, 16:9."
        ]
      },
      {
        "heading": "Exemplos Resolvidos",
        "body": "Aqui estão algumas dimensões comuns e suas proporções de aspecto:",
        "table": {
          "headers": [
            "Largura",
            "Altura",
            "MDC",
            "Proporção de Aspecto"
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
        "heading": "Como Calcular uma Dimensão Faltante",
        "body": "Se você conhece as dimensões originais e quer encontrar um novo tamanho com a mesma proporção, use esta fórmula: Nova Altura = (Altura Original ÷ Largura Original) × Nova Largura. Por exemplo, para encontrar a altura de uma imagem 16:9 com largura de 1280px: (1080 ÷ 1920) × 1280 = 720px. Nossa calculadora faz isso automaticamente em ambas as direções."
      },
      {
        "heading": "O Método Mais Rápido: Use uma Calculadora",
        "body": "Calcular manualmente as proporções de aspecto é simples para números redondos, mas rapidamente se torna tedioso para dimensões irregulares como 1847×923. Nossa Calculadora de Proporção de Aspecto gratuita lida com qualquer largura e altura instantaneamente — insira seus valores e obtenha a proporção simplificada, o decimal, a correspondência padrão mais próxima e os valores CSS em um único clique."
      }
    ],
    "conclusion": "Calcular proporções de aspecto é fácil quando você entende o método do MDC. Para uso diário, nossa calculadora gratuita economizará seu tempo e fornecerá informações adicionais como análise de qualidade, tamanhos de impressão e exportação CSS. Experimente agora em aspect-ratio-calculator.com."
  },
  "aspect-ratio-social-media-guide-2026": {
    "title": "Tamanhos de Imagem e Proporções de Aspecto para Redes Sociais: Guia Completo 2026",
    "description": "Todos os tamanhos de imagem e proporções de aspecto para redes sociais em 2026: Instagram, YouTube, TikTok, X, LinkedIn, Facebook e Pinterest. Salve este guia nos seus favoritos.",
    "intro": "Cada plataforma de redes sociais tem suas próprias dimensões de imagem recomendadas, e elas mudam regularmente. Usar o tamanho errado significa que suas imagens serão recortadas, ficarão desfocadas ou mal exibidas. Este guia cobre todas as principais plataformas para 2026.",
    "sections": [
      {
        "heading": "Por Que os Tamanhos de Imagem Importam nas Redes Sociais",
        "body": "Cada plataforma tem um layout de feed, uma área de exibição e um algoritmo de compressão diferentes. Uma imagem otimizada para uma plataforma pode ficar desfocada, recortada ou esticada em outra. Enviar com as dimensões exatas recomendadas garante:",
        "list": [
          "Sem recortes inesperados de conteúdo importante",
          "Máxima nitidez — sem redimensionamento pela plataforma",
          "Tempos de carregamento mais rápidos — o tamanho correto reduz o tamanho do arquivo",
          "Melhor desempenho nos algoritmos de recomendação"
        ]
      },
      {
        "heading": "Tamanhos de Imagem do Instagram 2026",
        "body": "O Instagram suporta três proporções de feed, além de Stories e Reels. Para publicações do feed, o formato retrato 4:5 (1080×1350) oferece o maior espaço vertical — ideal para maximizar a visibilidade ao rolar.",
        "table": {
          "headers": [
            "Formato",
            "Dimensões",
            "Proporção"
          ],
          "rows": [
            [
              "Publicação do Feed (Quadrada)",
              "1080 × 1080",
              "1:1"
            ],
            [
              "Publicação do Feed (Retrato)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Publicação do Feed (Paisagem)",
              "1080 × 566",
              "1.91:1"
            ],
            [
              "Story / Reel",
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
        "heading": "Dimensões do YouTube 2026",
        "body": "O YouTube é uma plataforma 16:9. Projete miniaturas de 1280×720 com texto em negrito e legível — sua miniatura geralmente é o fator decisivo para alguém clicar.",
        "table": {
          "headers": [
            "Formato",
            "Dimensões",
            "Proporção"
          ],
          "rows": [
            [
              "Vídeo (1080p)",
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
              "Banner do Canal",
              "2560 × 1440",
              "16:9"
            ]
          ]
        }
      },
      {
        "heading": "Tamanhos de Vídeo do TikTok 2026",
        "body": "O TikTok é totalmente vertical — use sempre 9:16 a 1080×1920 para a melhor qualidade. Mantenha o conteúdo importante no centro do quadro e longe dos 20% inferiores, onde as legendas e elementos da interface aparecem.",
        "table": {
          "headers": [
            "Formato",
            "Dimensões",
            "Proporção"
          ],
          "rows": [
            [
              "Vídeo (Recomendado)",
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
        "heading": "Referência Rápida: Todas as Plataformas",
        "body": "Aqui está uma tabela de referência rápida para os tamanhos de imagem de redes sociais mais utilizados em 2026:",
        "table": {
          "headers": [
            "Plataforma",
            "Formato",
            "Dimensões",
            "Proporção"
          ],
          "rows": [
            [
              "Instagram",
              "Publicação do Feed (Retrato)",
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
              "Vídeo",
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
              "Vídeo",
              "1080 × 1920",
              "9:16"
            ],
            [
              "X / Twitter",
              "Imagem de Publicação",
              "1600 × 900",
              "16:9"
            ],
            [
              "LinkedIn",
              "Imagem de Publicação",
              "1200 × 628",
              "1.91:1"
            ],
            [
              "Facebook",
              "Imagem de Publicação",
              "1200 × 630",
              "1.91:1"
            ],
            [
              "Pinterest",
              "Pin Padrão",
              "1000 × 1500",
              "2:3"
            ]
          ]
        }
      }
    ],
    "conclusion": "Salve este guia nos seus favoritos e use nossa Calculadora de Proporção de Aspecto gratuita para verificar ou converter qualquer dimensão em segundos. Insira o tamanho atual da sua imagem e as dimensões da plataforma de destino para verificar a qualidade, calcular valores CSS e compartilhar resultados instantaneamente."
  },
  "16-9-vs-4-3-aspect-ratio": {
    "title": "Proporção de Aspecto 16:9 vs 4:3 — Qual Você Deve Usar?",
    "description": "Uma comparação clara das proporções de aspecto 16:9 e 4:3: quando usar cada uma, a história por trás delas, diferenças principais e exemplos de tamanho de pixel.",
    "intro": "16:9 e 4:3 são as duas proporções de aspecto mais historicamente significativas em vídeo e fotografia. Se você já viu barras pretas na sua tela — nas laterais ou na parte superior e inferior — já encontrou a diferença entre elas. Aqui está uma comparação completa.",
    "sections": [
      {
        "heading": "A Diferença Principal",
        "body": "16:9 é mais largo e retangular (proporção de 1,78:1), enquanto 4:3 é mais quadrado (proporção de 1,33:1). Uma imagem 16:9 é aproximadamente 33% mais larga que uma imagem 4:3 da mesma altura. Essa diferença pode parecer pequena, mas é muito perceptível na tela."
      },
      {
        "heading": "História: De Onde Vieram?",
        "body": "4:3 foi o padrão de televisão original, adotado na década de 1930 porque correspondia de perto à proporção de aspecto dos filmes de 35mm da época. 16:9 foi introduzido no final dos anos 80 como um padrão de tela larga de compromisso que poderia exibir tanto conteúdo de TV 4:3 (com pequenas barras laterais) quanto conteúdo de cinema 2.39:1 (com pequenas barras superiores/inferiores) com espaço preto mínimo. A UIT adotou 16:9 como o padrão HDTV em 1987."
      },
      {
        "heading": "Quando Usar 16:9",
        "body": "Use 16:9 quando:",
        "list": [
          "Criando conteúdo de vídeo para YouTube, Netflix ou televisão",
          "Fazendo apresentações modernas (Google Slides, PowerPoint 2016 e posteriores usam 16:9 como padrão)",
          "Projetando para monitores e laptops widescreen",
          "Gravando vídeo com um smartphone ou câmera modernos",
          "Criando miniaturas do YouTube"
        ]
      },
      {
        "heading": "Quando Usar 4:3",
        "body": "Use 4:3 quando:",
        "list": [
          "Projetando para telas de iPad (que usam 4:3)",
          "Criando apresentações para projetores antigos",
          "Correspondendo a conteúdo de vídeo antigo",
          "Imprimindo em proporções fotográficas padrão (algumas câmeras)",
          "Trabalhando com imagens de CFTV ou vigilância"
        ]
      },
      {
        "heading": "Comparação de Tamanho de Pixel",
        "body": "Aqui estão resoluções comuns para ambas as proporções com contagens de megapixels equivalentes:",
        "table": {
          "headers": [
            "Qualidade",
            "Tamanho 16:9",
            "Tamanho 4:3"
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
    "conclusion": "Para a maioria do conteúdo moderno de vídeo e tela, 16:9 é a escolha certa. Para conteúdo voltado para tablets ou compatibilidade com sistemas antigos, 4:3 pode ser mais apropriado. Em caso de dúvida, use nossa Calculadora de Proporção de Aspecto gratuita para converter entre ambas e pré-visualizar o resultado instantaneamente."
  },
  "how-to-resize-image-without-losing-quality": {
    "title": "Como Redimensionar uma Imagem Sem Perder Qualidade",
    "description": "Aprenda as técnicas para redimensionar imagens sem perder qualidade: redução vs. ampliação, melhores formatos de arquivo, explicação de DPI e recomendações de ferramentas.",
    "intro": "Redimensionar uma imagem parece simples, mas feito incorretamente resulta em fotos desfocadas, pixeladas ou distorcidas. Este guia explica quando e como você pode redimensionar imagens sem uma perda de qualidade visível.",
    "sections": [
      {
        "heading": "Redução (Downscaling) vs. Ampliação (Upscaling)",
        "body": "Existem duas direções em que você pode redimensionar uma imagem, e elas têm implicações de qualidade muito diferentes. A redução (tornar uma imagem menor) quase sempre preserva a qualidade — você está simplesmente descartando pixels. A ampliação (tornar uma imagem maior) é onde surgem os problemas de qualidade, porque o software precisa inventar dados de pixels que não existem no original."
      },
      {
        "heading": "A Regra de Ouro: Sempre Comece com a Máxima Resolução",
        "body": "A perda de qualidade é quase sempre irreversível. Se você começar com uma imagem pequena e precisar de uma grande, sempre verá degradação da qualidade. A melhor prática é:",
        "list": [
          "Sempre mantenha seu arquivo original de alta resolução",
          "Exporte ou salve uma cópia separada no tamanho desejado",
          "Nunca salve novamente um JPEG comprimido várias vezes — cada salvamento degrada a qualidade",
          "Exporte a partir do arquivo mestre cada vez que precisar de um novo tamanho"
        ]
      },
      {
        "heading": "Quanto Você Pode Ampliar (Upscale)?",
        "body": "Como diretriz geral: a ampliação até 110–120% é geralmente imperceptível para a maioria dos espectadores. A ampliação entre 150–200% produz uma suavidade perceptível. A ampliação além de 200% tipicamente produz pixelação e desfoque óbvios. Ferramentas de ampliação baseadas em IA (como Topaz Gigapixel, Adobe Firefly e similares) às vezes podem produzir resultados aceitáveis com ampliações de 2 a 4 vezes, gerando detalhes de forma inteligente."
      },
      {
        "heading": "Manter a Proporção de Aspecto ao Redimensionar",
        "body": "Um dos erros de qualidade mais comuns é alterar acidentalmente a proporção de aspecto durante o redimensionamento — esticando ou achatando a imagem. Sempre redimensione proporcionalmente bloqueando a proporção de aspecto na sua ferramenta de edição. Nossa calculadora gratuita ajuda você a encontrar a altura correta para qualquer nova largura (ou vice-versa), garantindo que seu redimensionamento mantenha as proporções originais."
      },
      {
        "heading": "Melhores Formatos de Arquivo para Qualidade",
        "body": "O formato de arquivo afeta significativamente a qualidade após o redimensionamento:",
        "list": [
          "PNG — Compressão sem perdas; ideal para gráficos, ilustrações e capturas de tela onde a nitidez é importante",
          "JPEG — Compressão com perdas; ideal para fotografias; defina a qualidade para 80–90% para o melhor equilíbrio entre tamanho e qualidade",
          "WebP — Formato moderno que alcança melhor compressão que JPEG com qualidade equivalente; compatível com todos os navegadores modernos",
          "TIFF — Sem compressão ou sem perdas; usado em fluxos de trabalho profissionais de impressão e fotografia"
        ]
      },
      {
        "heading": "DPI e Qualidade de Impressão",
        "body": "DPI (dots per inch) só é relevante para impressão — as telas o ignoram. Para impressão: use 300 DPI para impressões fotográficas nítidas, 150 DPI para qualidade aceitável e 72–96 DPI para uso exclusivo em tela. Para calcular as dimensões em pixels necessárias para uma impressão: multiplique o tamanho da impressão em polegadas pelo DPI. Para uma impressão de 8×10 polegadas a 300 DPI: 2400×3000 pixels."
      }
    ],
    "conclusion": "A melhor maneira de redimensionar sem perda de qualidade é sempre reduzir a partir de um original de alta resolução, manter a proporção de aspecto e exportar no formato apropriado. Use nossa Calculadora de Proporção de Aspecto para encontrar as dimensões exatas que preservem suas proporções originais — sem necessidade de adivinhação."
  }
};
