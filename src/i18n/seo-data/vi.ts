import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";

export const RATIO_DATA: Record<string, RatioData> = {
  "16-9": {
    "label": "16:9",
    "w": 16,
    "h": 9,
    "title": "Tỷ lệ khung hình 16:9 — Kích thước, Pixel & Công cụ tính toán miễn phí",
    "description": "Mọi thứ về tỷ lệ khung hình 16:9: các kích thước phổ biến (720p, 1080p, 4K, 8K), trường hợp sử dụng và công cụ tính toán miễn phí. Tiêu chuẩn cho video, TV và màn hình.",
    "explanation": "16:9 (mười sáu chín) là tỷ lệ khung hình màn hình rộng được áp dụng phổ biến cho video HD, phát trực tuyến và màn hình hiện đại. Cứ mỗi 16 đơn vị chiều rộng, chiều cao là 9 đơn vị — tạo ra một hình chữ nhật rộng, mang tính điện ảnh. Nó đã thay thế tiêu chuẩn 4:3 cũ vào đầu những năm 2000 và hiện là mặc định cho hầu hết tất cả nội dung video, màn hình và chương trình truyền hình trên toàn thế giới.",
    "useCases": [
      "Video và hình thu nhỏ trên YouTube",
      "Netflix, Disney+ và các nền tảng phát trực tuyến",
      "Truyền hình HD và 4K",
      "Màn hình máy tính và màn hình laptop",
      "Bài thuyết trình PowerPoint và Google Slides",
      "Hình nền Zoom và hội nghị truyền hình",
      "Cảnh quay điện ảnh trong trò chơi điện tử"
    ],
    "dimensions": [
      {
        "name": "nHD",
        "width": 640,
        "height": 360,
        "use": "Web độ phân giải thấp, dự phòng cho di động"
      },
      {
        "name": "HD (720p)",
        "width": 1280,
        "height": 720,
        "use": "Video web, thiết bị cũ hơn, tối thiểu cho YouTube"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1920,
        "height": 1080,
        "use": "Phát trực tuyến tiêu chuẩn, YouTube, truyền hình"
      },
      {
        "name": "QHD (1440p)",
        "width": 2560,
        "height": 1440,
        "use": "Màn hình độ phân giải cao, chơi game"
      },
      {
        "name": "4K UHD",
        "width": 3840,
        "height": 2160,
        "use": "Phát trực tuyến cao cấp, video chuyên nghiệp, TV 4K"
      },
      {
        "name": "8K UHD",
        "width": 7680,
        "height": 4320,
        "use": "Màn hình tương lai, lưu trữ, bản gốc phát sóng"
      }
    ],
    "faq": [
      {
        "q": "16:9 tính bằng pixel là bao nhiêu?",
        "a": "Các kích thước pixel 16:9 phổ biến nhất là 1280×720 (720p HD), 1920×1080 (1080p FHD), 2560×1440 (1440p QHD) và 3840×2160 (4K UHD). Bất kỳ chiều rộng nào chia hết để cho tỷ lệ 16:9 đều hoạt động — ví dụ 640×360 hoặc 800×450."
      },
      {
        "q": "Tại sao 16:9 là tiêu chuẩn cho video?",
        "a": "16:9 được chọn làm tiêu chuẩn HDTV quốc tế vào những năm 1980–90 vì nó là một sự thỏa hiệp toán học giữa tỷ lệ TV 4:3 cũ hơn và tỷ lệ điện ảnh rộng hơn 2.39:1. Nó giảm thiểu hiện tượng letterboxing khi hiển thị nội dung từ cả hai nguồn."
      },
      {
        "q": "1920×1080 có giống 16:9 không?",
        "a": "Đúng vậy. 1920 ÷ 16 = 120, và 1080 ÷ 9 = 120, vì vậy cả hai kích thước đều có cùng một yếu tố. 1920×1080 (Full HD / 1080p) là độ phân giải 16:9 được sử dụng rộng rãi nhất."
      },
      {
        "q": "Tỷ lệ 16:9 cho độ phân giải 4K là bao nhiêu?",
        "a": "4K UHD (Ultra High Definition) ở tỷ lệ 16:9 là 3840×2160 pixel — chính xác gấp bốn lần diện tích của 1920×1080. Cinema 4K (DCI 4K) là 4096×2160, đây là một tỷ lệ hơi khác (1.9:1)."
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
    "title": "Tỷ lệ khung hình 9:16 — Kích thước video TikTok, Reels & Dọc",
    "description": "Hướng dẫn đầy đủ về tỷ lệ khung hình 9:16: kích thước pixel, trường hợp sử dụng cho TikTok, Instagram Reels, YouTube Shorts và công cụ tính toán miễn phí.",
    "explanation": "9:16 là phiên bản dọc (chân dung) của màn hình rộng 16:9. Nó lấp đầy hoàn hảo màn hình điện thoại thông minh khi cầm thẳng đứng — biến nó thành định dạng thống trị cho video xã hội dạng ngắn. TikTok, Instagram Reels, YouTube Shorts và Snapchat đều sử dụng 9:16 làm khung hình chính của họ.",
    "useCases": [
      "Video TikTok",
      "Instagram Reels và Stories",
      "YouTube Shorts",
      "Video Snapchat",
      "Facebook Reels và Stories",
      "Ghim video Pinterest",
      "Quảng cáo ưu tiên di động"
    ],
    "dimensions": [
      {
        "name": "SD Mobile",
        "width": 540,
        "height": 960,
        "use": "Di động độ phân giải thấp, thiết bị cũ hơn"
      },
      {
        "name": "HD Mobile",
        "width": 720,
        "height": 1280,
        "use": "Chất lượng di động tiêu chuẩn"
      },
      {
        "name": "Full HD (1080p)",
        "width": 1080,
        "height": 1920,
        "use": "TikTok, Instagram Reels, YouTube Shorts — khuyến nghị"
      },
      {
        "name": "QHD Mobile",
        "width": 1440,
        "height": 2560,
        "use": "Quay phim bằng điện thoại thông minh cao cấp"
      }
    ],
    "faq": [
      {
        "q": "Tôi nên sử dụng độ phân giải nào cho TikTok?",
        "a": "TikTok khuyến nghị 1080×1920 pixel (tỷ lệ 9:16) để có chất lượng tốt nhất. Đây là video dọc Full HD. Sử dụng độ phân giải thấp hơn có thể dẫn đến hiện tượng nén hình ảnh sau khi tải lên."
      },
      {
        "q": "9:16 có giống chế độ chân dung không?",
        "a": "Đúng vậy. 9:16 là tỷ lệ video chân dung (dọc) tiêu chuẩn, tương đương với việc xoay khung hình màn hình rộng 16:9 sang một bên. Nó phù hợp với hướng tự nhiên của điện thoại thông minh khi cầm bằng một tay."
      },
      {
        "q": "Tôi có thể đăng video 9:16 lên YouTube không?",
        "a": "Có — YouTube Shorts được thiết kế đặc biệt cho video dọc 9:16. Các video tải lên YouTube thông thường cũng chấp nhận 9:16, nhưng chúng sẽ hiển thị với các thanh màu đen (pillarboxing) trên máy tính để bàn khi được nhúng vào trình phát 16:9."
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
    "title": "Tỷ lệ khung hình 4:3 — Kích thước màn hình cổ điển & Công cụ tính toán",
    "description": "Giải thích tỷ lệ khung hình 4:3: kích thước pixel phổ biến, nơi nó vẫn được sử dụng ngày nay (máy tính bảng, thuyết trình, phim) và công cụ tính toán miễn phí.",
    "explanation": "4:3 (bốn ba) là tiêu chuẩn cho truyền hình và màn hình máy tính từ những năm 1930 đến đầu những năm 2000. Nó tạo ra một hình chữ nhật gần như vuông, phù hợp với tỷ lệ của khung phim 35mm. Mặc dù phần lớn đã được thay thế bằng 16:9 cho video, nó vẫn phù hợp cho màn hình iPad, bài thuyết trình PowerPoint và một số định dạng nhiếp ảnh nhất định.",
    "useCases": [
      "Màn hình iPad và máy tính bảng",
      "Truyền hình cũ và CCTV",
      "Bài thuyết trình PowerPoint / Keynote (định dạng cũ hơn)",
      "Máy ảnh kỹ thuật số và nhiếp ảnh",
      "Tài liệu quảng cáo in và tài liệu tỷ lệ A4",
      "Hiệu ứng video và phim phong cách cổ điển"
    ],
    "dimensions": [
      {
        "name": "QVGA",
        "width": 320,
        "height": 240,
        "use": "Thiết bị cũ, màn hình nhúng"
      },
      {
        "name": "VGA",
        "width": 640,
        "height": 480,
        "use": "Web cổ điển, tiêu chuẩn webcam"
      },
      {
        "name": "SVGA",
        "width": 800,
        "height": 600,
        "use": "Màn hình cũ hơn, máy chiếu"
      },
      {
        "name": "XGA",
        "width": 1024,
        "height": 768,
        "use": "iPad (thế hệ 1–4), máy chiếu tiêu chuẩn"
      },
      {
        "name": "SXGA",
        "width": 1280,
        "height": 960,
        "use": "Máy ảnh kỹ thuật số, nhiếp ảnh"
      },
      {
        "name": "UXGA",
        "width": 1600,
        "height": 1200,
        "use": "Màn hình chuyên nghiệp, hình ảnh chất lượng in"
      }
    ],
    "faq": [
      {
        "q": "Tỷ lệ 4:3 tính bằng pixel là bao nhiêu?",
        "a": "Các kích thước pixel 4:3 phổ biến bao gồm 640×480 (VGA), 800×600 (SVGA), 1024×768 (XGA) và 1280×960. Bất kỳ độ phân giải nào mà chiều rộng ÷ chiều cao = 1.333... đều tuân theo tỷ lệ 4:3."
      },
      {
        "q": "Có ai vẫn sử dụng 4:3 không?",
        "a": "Có. iPad sử dụng màn hình 4:3 (2048×1536 trên các mẫu Retina). Nhiều mẫu PowerPoint, máy ảnh DSLR và camera giám sát cũ cũng sử dụng 4:3. Nó ít phổ biến hơn cho video nhưng vẫn phù hợp cho hình ảnh tĩnh và bài thuyết trình."
      },
      {
        "q": "Sự khác biệt giữa 4:3 và 16:9 là gì?",
        "a": "4:3 vuông hơn (tỷ lệ 1.33:1) trong khi 16:9 rộng hơn và hình chữ nhật hơn (tỷ lệ 1.78:1). 16:9 là tiêu chuẩn TV và video hiện đại; 4:3 là tiêu chuẩn cũ trước đó. Khi xem nội dung 4:3 trên màn hình 16:9, các thanh màu đen (pillarboxing) sẽ xuất hiện ở hai bên."
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
    "title": "Tỷ lệ khung hình 1:1 — Kích thước vuông cho Instagram & Hơn thế nữa",
    "description": "Tỷ lệ khung hình vuông 1:1: kích thước pixel, cách sử dụng tốt nhất trên Instagram và mạng xã hội, cùng công cụ tính toán tỷ lệ khung hình miễn phí.",
    "explanation": "1:1 là một hình vuông hoàn hảo — chiều rộng và chiều cao giống hệt nhau. Instagram đã phổ biến định dạng vuông cho nhiếp ảnh trên mạng xã hội, và nó vẫn là một yếu tố chính cho ảnh đại diện, bìa album và bài đăng trên bảng tin của mọi nền tảng lớn.",
    "useCases": [
      "Bài đăng trên bảng tin Instagram (định dạng gốc)",
      "Ảnh đại diện trên tất cả các nền tảng",
      "Ảnh bìa album và bìa nhạc",
      "Biểu tượng ứng dụng và favicon",
      "Chụp ảnh sản phẩm cho thương mại điện tử",
      "Hình ảnh bài đăng trên Facebook và LinkedIn"
    ],
    "dimensions": [
      {
        "name": "Small",
        "width": 400,
        "height": 400,
        "use": "Hình thu nhỏ hồ sơ, biểu tượng ứng dụng"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1080,
        "use": "Bài đăng trên bảng tin Instagram (khuyến nghị)"
      },
      {
        "name": "High Res",
        "width": 2048,
        "height": 2048,
        "use": "In ấn, nhiếp ảnh chuyên nghiệp"
      },
      {
        "name": "4K Square",
        "width": 4096,
        "height": 4096,
        "use": "In độ phân giải cực cao, lưu trữ"
      }
    ],
    "faq": [
      {
        "q": "Độ phân giải 1:1 tốt nhất cho Instagram là gì?",
        "a": "Instagram khuyến nghị 1080×1080 pixel cho các bài đăng vuông trên bảng tin. Mức tối thiểu là 320×320, nhưng 1080×1080 là tiêu chuẩn để hiển thị sắc nét trên tất cả các thiết bị."
      },
      {
        "q": "Tỷ lệ 1:1 có giống hình vuông không?",
        "a": "Đúng vậy, chính xác. Tỷ lệ khung hình 1:1 có nghĩa là chiều rộng bằng chiều cao, tạo ra một hình vuông hoàn hảo bất kể số lượng pixel thực tế."
      },
      {
        "q": "Tại sao Instagram sử dụng 1:1?",
        "a": "Instagram ban đầu được thiết kế xoay quanh nhiếp ảnh di động và đã chọn định dạng vuông 1:1 để chuẩn hóa lưới bảng tin. Mặc dù sau đó họ đã thêm các định dạng chân dung (4:5) và ngang (1.91:1), hình vuông 1:1 vẫn là định dạng Instagram cổ điển."
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
    "title": "Tỷ lệ khung hình 4:5 — Kích thước chân dung Instagram & Công cụ tính toán",
    "description": "Tỷ lệ khung hình 4:5 cho bài đăng chân dung trên Instagram: kích thước pixel tốt nhất, lý do nó chiếm nhiều không gian bảng tin hơn và công cụ tính toán miễn phí.",
    "explanation": "4:5 là tỷ lệ chân dung (cao hơn rộng) chiếm không gian dọc tối đa được phép trên bảng tin của Instagram — mang lại cho hình ảnh của bạn nhiều không gian màn hình hơn so với bài đăng vuông hoặc ngang. Với tỷ lệ 0.8:1, nó hơi rộng hơn màn hình điện thoại 9:16, làm cho nó lý tưởng cho ảnh chân dung, ảnh sản phẩm và nhiếp ảnh biên tập.",
    "useCases": [
      "Bài đăng trên bảng tin Instagram (chân dung — chiều cao tối đa)",
      "Nhiếp ảnh mạng xã hội",
      "Nhiếp ảnh chân dung để in",
      "Ghim Pinterest (định dạng phụ)",
      "Bài đăng hình ảnh chân dung trên Facebook"
    ],
    "dimensions": [
      {
        "name": "Minimum",
        "width": 600,
        "height": 750,
        "use": "Tối thiểu để có chất lượng Instagram chấp nhận được"
      },
      {
        "name": "Standard",
        "width": 1080,
        "height": 1350,
        "use": "Bài đăng chân dung Instagram (khuyến nghị)"
      },
      {
        "name": "High Res",
        "width": 2160,
        "height": 2700,
        "use": "Hình ảnh chân dung chất lượng in"
      }
    ],
    "faq": [
      {
        "q": "Tại sao nên dùng 4:5 thay vì 9:16 cho bài đăng Instagram?",
        "a": "Instagram cắt ảnh 9:16 cho bảng tin thành 4:5 (tỷ lệ chân dung tối đa được phép cho bài đăng trên bảng tin). Nếu bạn sử dụng 4:5, bạn sẽ có được hình ảnh bảng tin cao nhất được phép mà không bị mất nội dung do cắt. 9:16 chỉ dành cho Stories và Reels."
      },
      {
        "q": "Kích thước pixel cho Instagram 4:5 là bao nhiêu?",
        "a": "Kích thước khuyến nghị là 1080×1350 pixel. Đây là kích thước chân dung tối đa mà Instagram cho phép cho các bài đăng trên bảng tin và hiển thị sắc nét trên tất cả các thiết bị."
      },
      {
        "q": "4:5 có giúp tăng phạm vi tiếp cận trên Instagram không?",
        "a": "Một bài đăng 4:5 chiếm nhiều không gian dọc hơn trên bảng tin so với bài đăng vuông 1:1 hoặc ngang 1.91:1, điều này có thể giúp thu hút nhiều sự chú ý hơn khi người dùng cuộn. Nhiều nhà sáng tạo báo cáo tỷ lệ tương tác cao hơn với các bài đăng chân dung, mặc dù điều này phụ thuộc vào nội dung."
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
    "title": "Tỷ lệ khung hình 3:2 — Kích thước nhiếp ảnh, DSLR & In ấn",
    "description": "Tỷ lệ khung hình 3:2 cho máy ảnh DSLR và in ấn: kích thước phổ biến, nguồn gốc phim 35mm và công cụ tính toán tỷ lệ khung hình miễn phí.",
    "explanation": "3:2 có nguồn gốc từ khung phim 35mm, có kích thước 36mm × 24mm — tỷ lệ 3:2. Nó vẫn là tỷ lệ gốc cho hầu hết các máy ảnh DSLR và mirrorless, và ánh xạ trực tiếp đến các kích thước in phổ biến như 4×6 inch, 6×9 inch và 12×18 inch.",
    "useCases": [
      "Cảm biến máy ảnh DSLR và mirrorless",
      "Nhiếp ảnh phim 35mm",
      "Bản in 4×6 và 6×9 inch",
      "Bố cục sách ảnh",
      "Nhiếp ảnh chân dung chuyên nghiệp"
    ],
    "dimensions": [
      {
        "name": "6MP",
        "width": 3008,
        "height": 2000,
        "use": "DSLR cấp thấp"
      },
      {
        "name": "12MP",
        "width": 4272,
        "height": 2848,
        "use": "DSLR tầm trung (ví dụ: Canon 60D)"
      },
      {
        "name": "24MP",
        "width": 6000,
        "height": 4000,
        "use": "DSLR chuyên nghiệp (ví dụ: Nikon D3200)"
      },
      {
        "name": "36MP",
        "width": 7360,
        "height": 4912,
        "use": "DSLR độ phân giải cao (ví dụ: Nikon D800)"
      }
    ],
    "faq": [
      {
        "q": "Kích thước in nào phù hợp với tỷ lệ 3:2?",
        "a": "Các kích thước in tiêu chuẩn 3:2 bao gồm 4×6 inch, 6×9 inch, 8×12 inch, 12×18 inch và 20×30 inch. Các kích thước in này sẽ hiển thị toàn bộ hình ảnh của bạn mà không bị cắt."
      },
      {
        "q": "Tỷ lệ 3:2 tính bằng pixel là bao nhiêu?",
        "a": "Bất kỳ độ phân giải nào mà chiều rộng ÷ chiều cao = 1.5 đều là tỷ lệ 3:2. Các ví dụ phổ biến: 3000×2000, 4500×3000, 6000×4000. Hầu hết các máy ảnh DSLR chụp ảnh gốc ở tỷ lệ 3:2."
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
    "title": "Tỷ lệ khung hình 21:9 — Kích thước màn hình siêu rộng & Công cụ tính toán",
    "description": "Tỷ lệ khung hình siêu rộng 21:9: các độ phân giải phổ biến (2560×1080, 3440×1440, 5120×2160), ứng dụng trong chơi game và điện ảnh, cùng công cụ tính toán miễn phí.",
    "explanation": "21:9 (đôi khi được gọi là siêu rộng) cung cấp trường nhìn rộng hơn nhiều so với màn hình 16:9 tiêu chuẩn. Nó phổ biến cho chơi game (loại bỏ nhu cầu sử dụng nhiều màn hình), sản xuất video điện ảnh và quy trình làm việc năng suất. Nhiều bộ phim điện ảnh quay ở tỷ lệ 2.35:1 hoặc 2.39:1 trông gần giống 21:9 khi hiển thị trên màn hình siêu rộng.",
    "useCases": [
      "Màn hình chơi game siêu rộng",
      "Máy trạm chỉnh sửa video và chỉnh màu",
      "Năng suất đa ứng dụng",
      "Xem phim điện ảnh (letterboxing tối thiểu)",
      "Trò chơi mô phỏng chuyến bay và đua xe"
    ],
    "dimensions": [
      {
        "name": "FHD Ultrawide",
        "width": 2560,
        "height": 1080,
        "use": "Chơi game siêu rộng cấp thấp, màn hình giá rẻ"
      },
      {
        "name": "QHD Ultrawide",
        "width": 3440,
        "height": 1440,
        "use": "Màn hình siêu rộng cao cấp tiêu chuẩn"
      },
      {
        "name": "5K Ultrawide",
        "width": 5120,
        "height": 2160,
        "use": "Máy trạm chuyên nghiệp, LG 34WK95U"
      }
    ],
    "faq": [
      {
        "q": "21:9 có thực sự là 21 trên 9 không?",
        "a": "Không hoàn toàn — tên '21:9' là một nhãn hiệu tiếp thị. Hầu hết các màn hình siêu rộng có tỷ lệ gần với 64:27 (2.370:1) hoặc 43:18 (2.388:1). Tỷ lệ thực tế phụ thuộc vào độ phân giải cụ thể (ví dụ: 3440×1440 = 43:18)."
      },
      {
        "q": "Tất cả các trò chơi có hỗ trợ 21:9 không?",
        "a": "Nhiều trò chơi hiện đại hỗ trợ gốc 21:9 siêu rộng. Một số tựa game cũ hơn hoặc một số trò chơi nhiều người chơi giới hạn trường nhìn ở 16:9 để ngăn chặn lợi thế cạnh tranh. Hãy kiểm tra cài đặt trò chơi hoặc các trang cộng đồng để biết trạng thái hỗ trợ siêu rộng."
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
    "title": "Tỷ lệ khung hình 2:1 — Kích thước toàn cảnh & Banner",
    "description": "Tỷ lệ khung hình 2:1: ứng dụng cho nhiếp ảnh toàn cảnh, banner web và tiêu đề X/Twitter, cùng công cụ tính toán miễn phí.",
    "explanation": "2:1 là tỷ lệ toàn cảnh rộng, trong đó chiều rộng chính xác gấp đôi chiều cao. Nó được sử dụng cho nhiếp ảnh toàn cảnh phong cảnh, banner hero trên trang web và một số tiêu đề mạng xã hội. Nó nằm giữa màn hình rộng 16:9 và các tỷ lệ điện ảnh thực sự.",
    "useCases": [
      "Nhiếp ảnh phong cảnh toàn cảnh",
      "Banner hero và tiêu đề trang web",
      "Cắt ảnh 360°",
      "Tiêu đề bản tin email",
      "Bảng hiệu kỹ thuật số"
    ],
    "dimensions": [
      {
        "name": "Web Banner",
        "width": 1200,
        "height": 600,
        "use": "Banner web tiêu chuẩn, hình ảnh OG"
      },
      {
        "name": "HD Banner",
        "width": 2000,
        "height": 1000,
        "use": "Hình ảnh hero web độ phân giải cao"
      },
      {
        "name": "Panoramic",
        "width": 4000,
        "height": 2000,
        "use": "Nhiếp ảnh toàn cảnh"
      }
    ],
    "faq": [
      {
        "q": "Sự khác biệt giữa 2:1 và 16:9 là gì?",
        "a": "Tỷ lệ 2:1 (2.0:1) rộng hơn 16:9 (1.78:1). Một hình ảnh 2:1 mang tính toàn cảnh hơn — ví dụ, 2000×1000 pixel so với 1920×1080 ở 16:9. 2:1 có nhiều không gian ngang hơn so với chiều cao của nó."
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
    "title": "Tỷ lệ khung hình 5:4 — Kích thước in ấn & Màn hình",
    "description": "Tỷ lệ khung hình 5:4: bản in 8×10, máy ảnh định dạng trung bình và màn hình 1280×1024 cũ. Bao gồm công cụ tính toán miễn phí.",
    "explanation": "5:4 hơi cao hơn tỷ lệ 4:3 tiêu chuẩn. Nó phù hợp với kích thước in 8×10 inch được sử dụng trong các studio nhiếp ảnh chân dung và tương ứng với độ phân giải 1280×1024 phổ biến trên các màn hình CRT cũ và LCD đời đầu.",
    "useCases": [
      "Bản in chân dung 8×10 inch",
      "Bản in ảnh 10×8 inch",
      "Nội dung màn hình 1280×1024 cũ",
      "Nhiếp ảnh định dạng trung bình",
      "Nhiếp ảnh chân dung studio"
    ],
    "dimensions": [
      {
        "name": "SXGA",
        "width": 1280,
        "height": 1024,
        "use": "Màn hình và máy chiếu cũ"
      },
      {
        "name": "Print 8×10",
        "width": 2400,
        "height": 3000,
        "use": "Bản in 8×10 inch ở 300 DPI"
      },
      {
        "name": "Print 16×20",
        "width": 4800,
        "height": 6000,
        "use": "Bản in 16×20 inch ở 300 DPI"
      }
    ],
    "faq": [
      {
        "q": "Pixel nào phù hợp với tỷ lệ 5:4?",
        "a": "Các kích thước pixel 5:4 phổ biến bao gồm 1280×1024, 2560×2048 và bất kỳ cặp kích thước nào mà chiều rộng ÷ chiều cao = 1.25. Một bản in 8×10 được quét ở 300 DPI tạo ra 2400×3000 pixel (ở hướng chân dung, 3:2.4 = 5:4)."
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
    "title": "Kích thước hình ảnh & Tỷ lệ khung hình Instagram 2026 — Hướng dẫn đầy đủ",
    "description": "Tất cả kích thước hình ảnh và video Instagram cho năm 2026: bài đăng trên bảng tin, Stories, Reels, ảnh đại diện và nhiều hơn nữa. Kích thước pixel và tỷ lệ khung hình chính xác.",
    "intro": "Instagram hỗ trợ nhiều tỷ lệ khung hình tùy thuộc vào nơi nội dung của bạn xuất hiện. Có được kích thước phù hợp đảm bảo hình ảnh của bạn hiển thị sắc nét mà không bị cắt xén không mong muốn. Dưới đây là tất cả các kích thước khuyến nghị chính thức cho năm 2026.",
    "formats": [
      {
        "type": "Bài đăng trên bảng tin — Vuông",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Định dạng cổ điển; an toàn cho mọi thiết bị"
      },
      {
        "type": "Bài đăng trên bảng tin — Dọc (chiều cao tối đa)",
        "width": 1080,
        "height": 1350,
        "ratio": "4:5",
        "notes": "Chiếm nhiều không gian bảng tin nhất; khuyến nghị để có khả năng hiển thị tối đa"
      },
      {
        "type": "Bài đăng trên bảng tin — Ngang",
        "width": 1080,
        "height": 566,
        "ratio": "1.91:1",
        "notes": "Hình ảnh rộng; ít không gian bảng tin hơn ảnh dọc"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Toàn màn hình dọc; tối đa 15 giây cho ảnh"
      },
      {
        "type": "Reel",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Video phải dài ít nhất 3 giây; tối đa 90 giây"
      },
      {
        "type": "Ảnh đại diện",
        "width": 320,
        "height": 320,
        "ratio": "1:1",
        "notes": "Hiển thị dưới dạng hình tròn; giữ nội dung chính ở giữa"
      },
      {
        "type": "Bài đăng dạng băng chuyền",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Mỗi thẻ nên có cùng kích thước"
      }
    ],
    "tips": [
      "Sử dụng 4:5 (1080×1350) cho bài đăng trên bảng tin để tối đa hóa không gian dọc khi cuộn",
      "Giữ nội dung quan trọng trong 80% trung tâm của Stories để tránh chồng chéo giao diện người dùng",
      "Xuất ở chiều rộng 1080px đầy đủ — Instagram sẽ nén bất kỳ thứ gì lớn hơn",
      "Sử dụng PNG cho đồ họa và minh họa; JPEG ở chất lượng 80–90% cho ảnh",
      "Tránh văn bản nhỏ gần các cạnh — nó có thể bị cắt trên các thiết bị cũ hơn"
    ],
    "faq": [
      {
        "q": "Kích thước bài đăng Instagram tốt nhất vào năm 2026 là gì?",
        "a": "Để có khả năng hiển thị tối đa trên bảng tin, hãy sử dụng 1080×1350 pixel (tỷ lệ 4:5 — dọc). Đây là định dạng cao nhất mà Instagram cho phép đối với bài đăng trên bảng tin và chiếm nhiều không gian màn hình nhất khi người dùng cuộn."
      },
      {
        "q": "Tôi có thể đăng video 16:9 lên Instagram không?",
        "a": "Có, nhưng Instagram sẽ cắt video 16:9 để phù hợp với bảng tin (thành 1:1 hoặc 4:5). Đối với Reels và Stories, video 16:9 sẽ hiển thị các thanh màu đen (letterboxing) ở trên và dưới. Luôn quay dọc (9:16) cho Reels và Stories."
      },
      {
        "q": "Kích thước văn bản Story Instagram nên là bao nhiêu?",
        "a": "Giữ tất cả văn bản và hình ảnh chính trong vùng an toàn: khoảng 1080×1420 pixel được căn giữa trong khung 1080×1920. 250px trên cùng và 250px dưới cùng thường bị che bởi các yếu tố giao diện người dùng như tên người dùng và thanh trả lời."
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
    "title": "Kích thước video & Tỷ lệ khung hình YouTube 2026 — Hướng dẫn đầy đủ",
    "description": "Tất cả kích thước hình ảnh và video YouTube cho năm 2026: video, Shorts, hình thu nhỏ, biểu ngữ kênh và ảnh đại diện. Kích thước pixel và tỷ lệ chính xác.",
    "intro": "YouTube chủ yếu là một nền tảng 16:9, nhưng Shorts sử dụng video dọc 9:16. Có được kích thước phù hợp sẽ cải thiện tỷ lệ nhấp vào hình thu nhỏ của bạn và đảm bảo nội dung của bạn trông sắc nét trên tất cả các thiết bị.",
    "formats": [
      {
        "type": "Video (HD tiêu chuẩn)",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Khuyến nghị cho hầu hết các video tải lên (1080p)"
      },
      {
        "type": "Video (4K)",
        "width": 3840,
        "height": 2160,
        "ratio": "16:9",
        "notes": "Chất lượng tối đa; yêu cầu quay 4K"
      },
      {
        "type": "Shorts",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Video dọc; tối đa 60 giây"
      },
      {
        "type": "Hình thu nhỏ",
        "width": 1280,
        "height": 720,
        "ratio": "16:9",
        "notes": "Hình thu nhỏ tùy chỉnh; kích thước tệp tối đa 2MB"
      },
      {
        "type": "Biểu ngữ kênh (Máy tính để bàn)",
        "width": 2560,
        "height": 1440,
        "ratio": "16:9",
        "notes": "Biểu ngữ đầy đủ; chỉ 1546×423px ở giữa hiển thị trên tất cả các thiết bị"
      },
      {
        "type": "Ảnh đại diện",
        "width": 800,
        "height": 800,
        "ratio": "1:1",
        "notes": "Hiển thị dưới dạng hình tròn; tối thiểu 98×98px"
      }
    ],
    "tips": [
      "Thiết kế hình thu nhỏ ở 1280×720 với văn bản in đậm và màu sắc tương phản cao để có CTR tốt hơn",
      "Giữ vùng an toàn của biểu ngữ kênh ở 1546×423 pixel để đảm bảo nó hiển thị trên tất cả các thiết bị",
      "Tải video lên ở độ phân giải cao nhất có thể — YouTube chuyển mã xuống, không phải lên",
      "Đối với Shorts, sử dụng 1080×1920 (9:16) và đảm bảo không có nội dung thiết yếu nào nằm trong 10% trên cùng hoặc dưới cùng",
      "Tệp hình thu nhỏ phải dưới 2MB — sử dụng JPEG cho ảnh, PNG cho đồ họa"
    ],
    "faq": [
      {
        "q": "Độ phân giải nào tốt nhất cho video YouTube?",
        "a": "1920×1080 (1080p Full HD) là độ phân giải tiêu chuẩn và được khuyến nghị cho các video tải lên YouTube. Nó cung cấp video sắc nét trên hầu hết các màn hình mà không yêu cầu thiết bị quay 4K."
      },
      {
        "q": "Kích thước hình thu nhỏ YouTube nên là bao nhiêu?",
        "a": "YouTube khuyến nghị 1280×720 pixel (tỷ lệ 16:9) cho hình thu nhỏ tùy chỉnh. Kích thước tệp tối đa là 2MB. Sử dụng JPEG cho ảnh hoặc PNG cho đồ họa được thiết kế."
      },
      {
        "q": "Độ phân giải của YouTube Shorts là bao nhiêu?",
        "a": "YouTube Shorts sử dụng tỷ lệ dọc 9:16, với độ phân giải khuyến nghị là 1080×1920 pixel. Độ dài tối đa cho Shorts là 60 giây."
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
    "title": "Kích thước video & Tỷ lệ khung hình TikTok 2026 — Hướng dẫn đầy đủ",
    "description": "Kích thước video và tỷ lệ khung hình TikTok cho năm 2026: độ phân giải tốt nhất cho video TikTok, ảnh đại diện và ảnh bìa.",
    "intro": "TikTok là một nền tảng video dọc, ưu tiên thiết bị di động. Tất cả nội dung nên được thiết kế theo hướng dọc 9:16. Dưới đây là các thông số kỹ thuật để đảm bảo nội dung của bạn trông đẹp nhất.",
    "formats": [
      {
        "type": "Video (Khuyến nghị)",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Full HD dọc — luôn sử dụng định dạng này"
      },
      {
        "type": "Video (Tối thiểu)",
        "width": 720,
        "height": 1280,
        "ratio": "9:16",
        "notes": "Tối thiểu để có chất lượng chấp nhận được"
      },
      {
        "type": "Ảnh đại diện",
        "width": 200,
        "height": 200,
        "ratio": "1:1",
        "notes": "Hiển thị dưới dạng hình tròn"
      },
      {
        "type": "Ảnh bìa",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Tự động trích xuất từ video; có thể tùy chỉnh"
      }
    ],
    "tips": [
      "Luôn quay và tải lên ở 1080×1920 (9:16) để có chất lượng hiển thị tốt nhất",
      "Giữ nội dung chính ở giữa khung hình — 20% dưới cùng bị che bởi phụ đề và giao diện người dùng",
      "TikTok hỗ trợ định dạng .mp4 và .mov; codec H.264 được khuyến nghị",
      "Sử dụng công cụ phủ văn bản của TikTok một cách tiết kiệm — nó nằm trên nội dung của bạn",
      "Ánh sáng rực rỡ và hình ảnh có độ tương phản cao hoạt động tốt hơn trên thuật toán"
    ],
    "faq": [
      {
        "q": "Độ phân giải video tốt nhất cho TikTok là gì?",
        "a": "TikTok khuyến nghị 1080×1920 pixel (tỷ lệ 9:16, Full HD dọc). Sử dụng độ phân giải này đảm bảo video của bạn hiển thị mà không có thanh màu đen hoặc letterboxing trên bất kỳ thiết bị nào."
      },
      {
        "q": "Tôi có thể tải video ngang (16:9) lên TikTok không?",
        "a": "Có, TikTok chấp nhận video ngang, nhưng chúng sẽ hiển thị với các thanh màu đen ở trên và dưới (letterboxed). Để có trải nghiệm xem tốt nhất và hiệu suất thuật toán, hãy luôn sử dụng video dọc (9:16)."
      },
      {
        "q": "Độ dài video tối đa của TikTok là bao nhiêu?",
        "a": "Tính đến năm 2026, TikTok cho phép video dài tối đa 10 phút cho các tài khoản tiêu chuẩn. Các video ngắn hơn (15–60 giây) thường hoạt động tốt hơn trong thuật toán đề xuất."
      }
    ],
    "relatedRatios": [
      "9-16",
      "1-1"
    ]
  },
  "twitter": {
    "name": "X / Twitter",
    "title": "Kích thước hình ảnh & Tỷ lệ khung hình X (Twitter) 2026 — Hướng dẫn đầy đủ",
    "description": "Tất cả kích thước hình ảnh X (Twitter) cho năm 2026: hình ảnh bài đăng, biểu ngữ đầu trang, ảnh đại diện và kích thước video. Thông số pixel chính xác.",
    "intro": "X (trước đây là Twitter) hỗ trợ nhiều định dạng và kích thước hình ảnh. Hình ảnh trong bài đăng được tự động cắt trong chế độ xem dòng thời gian nhưng hiển thị đầy đủ khi được chạm vào. Dưới đây là tất cả các kích thước khuyến nghị.",
    "formats": [
      {
        "type": "Hình ảnh bài đăng (Ngang)",
        "width": 1600,
        "height": 900,
        "ratio": "16:9",
        "notes": "Khuyến nghị cho hầu hết các hình ảnh bài đăng"
      },
      {
        "type": "Hình ảnh bài đăng (Vuông)",
        "width": 1200,
        "height": 1200,
        "ratio": "1:1",
        "notes": "An toàn cho mọi ngữ cảnh hiển thị"
      },
      {
        "type": "Hình ảnh bài đăng (Dọc)",
        "width": 900,
        "height": 1350,
        "ratio": "2:3",
        "notes": "Tỷ lệ dọc tối đa được hỗ trợ"
      },
      {
        "type": "Ảnh đại diện",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Hiển thị dưới dạng hình tròn; khuyến nghị tối thiểu 400×400"
      },
      {
        "type": "Đầu trang / Biểu ngữ",
        "width": 1500,
        "height": 500,
        "ratio": "3:1",
        "notes": "Đầu trang hồ sơ; tránh các cạnh — bị cắt trên thiết bị di động"
      },
      {
        "type": "Video",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Thời lượng tối đa 2:20; giới hạn kích thước tệp 512MB"
      }
    ],
    "tips": [
      "Sử dụng 1600×900 cho hình ảnh bài đăng ngang — nó hiển thị mà không bị cắt trong dòng thời gian",
      "Giữ 60% trung tâm của biểu ngữ đầu trang an toàn cho tất cả các thiết bị",
      "Ảnh đại diện được hiển thị dưới dạng hình tròn — sử dụng chủ thể căn giữa không có nội dung quan trọng gần các cạnh",
      "X nén hình ảnh — xuất ở chất lượng JPEG 100% để giảm thiểu nén có thể nhìn thấy",
      "Đối với thẻ Twitter (xem trước liên kết), sử dụng tỷ lệ 2:1 (ví dụ: 1200×628) cho định dạng thẻ lớn"
    ],
    "faq": [
      {
        "q": "Kích thước hình ảnh tốt nhất cho bài đăng X (Twitter) là gì?",
        "a": "1600×900 pixel (16:9) là kích thước khuyến nghị cho hình ảnh bài đăng X. Nó hiển thị mà không bị cắt trong dòng thời gian. Hình vuông (1200×1200) cũng an toàn và trông đẹp trong mọi ngữ cảnh."
      },
      {
        "q": "Kích thước biểu ngữ đầu trang X (Twitter) là bao nhiêu?",
        "a": "Kích thước đầu trang X khuyến nghị là 1500×500 pixel (tỷ lệ 3:1). Lưu ý rằng biểu ngữ bị cắt khác nhau trên máy tính để bàn so với thiết bị di động — giữ nội dung quan trọng trong khu vực trung tâm."
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
    "title": "Kích thước hình ảnh & Tỷ lệ khung hình LinkedIn 2026 — Hướng dẫn đầy đủ",
    "description": "Kích thước hình ảnh LinkedIn cho năm 2026: hình ảnh bài đăng, biểu ngữ công ty, ảnh đại diện và ảnh bìa. Kích thước pixel chính xác cho nội dung chuyên nghiệp.",
    "intro": "LinkedIn là một mạng lưới chuyên nghiệp nơi chất lượng hình ảnh quan trọng đối với uy tín. Dưới đây là các kích thước hình ảnh được khuyến nghị để đảm bảo hồ sơ và bài đăng của bạn trông chuyên nghiệp.",
    "formats": [
      {
        "type": "Hình ảnh bài đăng (Ngang)",
        "width": 1200,
        "height": 628,
        "ratio": "1.91:1",
        "notes": "Hình ảnh bài đăng LinkedIn tiêu chuẩn"
      },
      {
        "type": "Hình ảnh bài đăng (Vuông)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "Bài đăng vuông hoạt động tốt trên LinkedIn"
      },
      {
        "type": "Ảnh đại diện",
        "width": 400,
        "height": 400,
        "ratio": "1:1",
        "notes": "Tối thiểu 200×200; sử dụng ảnh chân dung chuyên nghiệp"
      },
      {
        "type": "Biểu ngữ cá nhân",
        "width": 1584,
        "height": 396,
        "ratio": "4:1",
        "notes": "Hiển thị phía sau ảnh đại diện"
      },
      {
        "type": "Logo công ty",
        "width": 300,
        "height": 300,
        "ratio": "1:1",
        "notes": "Logo vuông cho trang công ty"
      },
      {
        "type": "Biểu ngữ công ty",
        "width": 1128,
        "height": 191,
        "ratio": "5.9:1",
        "notes": "Biểu ngữ rất rộng; giữ văn bản căn giữa"
      }
    ],
    "tips": [
      "Sử dụng 1200×628 cho hình ảnh xem trước liên kết (định dạng thẻ LinkedIn)",
      "Ảnh đại diện nên hiển thị rõ khuôn mặt của bạn — LinkedIn là một môi trường chuyên nghiệp",
      "Biểu ngữ cá nhân có thể giới thiệu công việc, bộ kỹ năng hoặc thương hiệu của bạn — sử dụng 1584×396",
      "Bài đăng của công ty có hình ảnh nhận được nhiều tương tác hơn đáng kể so với bài đăng chỉ có văn bản",
      "Xuất ảnh đại diện dưới dạng JPEG hoặc PNG; kích thước tệp tối đa là 8MB"
    ],
    "faq": [
      {
        "q": "Kích thước hình ảnh bài đăng LinkedIn tốt nhất là gì?",
        "a": "1200×628 pixel (tỷ lệ 1.91:1) là kích thước hình ảnh bài đăng được LinkedIn khuyến nghị. Hình ảnh vuông (1080×1080) cũng hoạt động tốt và có thể hiển thị tốt hơn trên bảng tin di động."
      },
      {
        "q": "Kích thước biểu ngữ hồ sơ LinkedIn là bao nhiêu?",
        "a": "Biểu ngữ cá nhân LinkedIn (ảnh nền) nên có kích thước 1584×396 pixel (tỷ lệ 4:1). Đây là kích thước hiển thị phía sau ảnh đại diện của bạn trên máy tính để bàn và thiết bị di động."
      }
    ],
    "relatedRatios": [
      "1-1",
      "16-9"
    ]
  },
  "facebook": {
    "name": "Facebook",
    "title": "Kích thước hình ảnh & Tỷ lệ khung hình Facebook 2026 — Hướng dẫn đầy đủ",
    "description": "Kích thước hình ảnh Facebook cho năm 2026: hình ảnh bài đăng, ảnh bìa, Stories, ảnh đại diện và nhiều hơn nữa. Thông số pixel chính xác.",
    "intro": "Facebook hỗ trợ nhiều định dạng hình ảnh và các thông số kỹ thuật khác nhau tùy theo vị trí. Dưới đây là các kích thước được khuyến nghị cho năm 2026 để đảm bảo nội dung của bạn trông đẹp nhất.",
    "formats": [
      {
        "type": "Hình ảnh bài đăng",
        "width": 1200,
        "height": 630,
        "ratio": "1.91:1",
        "notes": "Hình ảnh bảng tin tiêu chuẩn; cũng được sử dụng cho xem trước liên kết"
      },
      {
        "type": "Hình ảnh bài đăng (Vuông)",
        "width": 1080,
        "height": 1080,
        "ratio": "1:1",
        "notes": "An toàn cho cả bảng tin máy tính để bàn và di động"
      },
      {
        "type": "Story",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Toàn màn hình dọc; thời lượng 24 giờ"
      },
      {
        "type": "Ảnh đại diện",
        "width": 180,
        "height": 180,
        "ratio": "1:1",
        "notes": "Hiển thị ở 170×170 trên máy tính để bàn; cắt hình tròn"
      },
      {
        "type": "Ảnh bìa",
        "width": 820,
        "height": 312,
        "ratio": "2.63:1",
        "notes": "Hiển thị ở 820×312 trên máy tính để bàn, 640×360 trên thiết bị di động"
      },
      {
        "type": "Ảnh bìa sự kiện",
        "width": 1920,
        "height": 1080,
        "ratio": "16:9",
        "notes": "Hình ảnh đầu trang sự kiện"
      }
    ],
    "tips": [
      "Thiết kế ảnh bìa với nội dung chính ở giữa — việc cắt xén khác nhau trên thiết bị di động so với máy tính để bàn",
      "Đối với bài đăng liên kết, sử dụng hình ảnh 1200×630 để kích hoạt thẻ xem trước lớn của Facebook",
      "Tải ảnh lên ở độ phân giải cao nhất có thể — Facebook sẽ nén chúng",
      "Ảnh đại diện được hiển thị dưới dạng hình tròn — giữ khuôn mặt hoặc logo ở giữa",
      "Vùng an toàn của Stories: giữ nội dung trong vòng 250px từ các cạnh trên và dưới"
    ],
    "faq": [
      {
        "q": "Kích thước hình ảnh bài đăng Facebook tốt nhất là gì?",
        "a": "1200×630 pixel (tỷ lệ 1.91:1) là kích thước bài đăng Facebook được khuyến nghị. Kích thước này cũng hoạt động cho hình ảnh xem trước liên kết. Hình vuông (1080×1080) là một lựa chọn thay thế an toàn trông nhất quán trên tất cả các vị trí."
      },
      {
        "q": "Kích thước ảnh bìa Facebook là bao nhiêu?",
        "a": "Kích thước ảnh bìa Facebook được khuyến nghị là 820×312 pixel cho máy tính để bàn. Trên thiết bị di động, nó hiển thị là 640×360. Để tránh bị cắt xén, hãy giữ nội dung quan trọng trong khu vực trung tâm 640×312."
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
    "title": "Kích thước Pin & Tỷ lệ khung hình Pinterest 2026 — Hướng dẫn đầy đủ",
    "description": "Kích thước hình ảnh Pinterest cho năm 2026: pin tiêu chuẩn, pin ý tưởng, pin vuông và ảnh đại diện. Có được tỷ lệ khung hình phù hợp để đạt được phạm vi tiếp cận tối đa.",
    "intro": "Pinterest là một nền tảng khám phá hình ảnh nơi các hình ảnh cao hơn (tỷ lệ 2:3) hoạt động tốt nhất — chúng chiếm nhiều không gian hơn trong bảng tin. Dưới đây là các kích thước được khuyến nghị cho tất cả các loại nội dung Pinterest.",
    "formats": [
      {
        "type": "Pin tiêu chuẩn (Dọc)",
        "width": 1000,
        "height": 1500,
        "ratio": "2:3",
        "notes": "Khuyến nghị — phạm vi tiếp cận và tương tác tốt nhất"
      },
      {
        "type": "Pin vuông",
        "width": 1000,
        "height": 1000,
        "ratio": "1:1",
        "notes": "Hoạt động tốt; ít không gian dọc hơn ảnh dọc"
      },
      {
        "type": "Pin cao",
        "width": 1000,
        "height": 2100,
        "ratio": "1:2.1",
        "notes": "Chiều cao tối đa; sử dụng cẩn thận — có thể bị cắt"
      },
      {
        "type": "Pin ý tưởng",
        "width": 1080,
        "height": 1920,
        "ratio": "9:16",
        "notes": "Định dạng câu chuyện nhiều trang; toàn màn hình dọc"
      },
      {
        "type": "Ảnh đại diện",
        "width": 165,
        "height": 165,
        "ratio": "1:1",
        "notes": "Cắt hình tròn; giữ chủ thể ở giữa"
      }
    ],
    "tips": [
      "Sử dụng 1000×1500 (2:3) cho pin tiêu chuẩn — đây là điểm tối ưu cho khả năng hiển thị trên bảng tin",
      "Tránh cao hơn tỷ lệ 1:2.1 — Pinterest có thể cắt các hình ảnh quá cao",
      "Thêm lớp phủ văn bản vào giữa phía trên của pin — tránh 100px dưới cùng nơi tên miền nguồn được hiển thị",
      "Lưu pin dưới dạng JPEG cho ảnh (tối đa 20MB) hoặc PNG cho đồ họa có độ trong suốt",
      "Pin ý tưởng (9:16) hoạt động khác với pin tiêu chuẩn — chúng giống Stories hơn"
    ],
    "faq": [
      {
        "q": "Kích thước pin Pinterest tốt nhất là gì?",
        "a": "Kích thước pin Pinterest được khuyến nghị là 1000×1500 pixel (tỷ lệ 2:3). Định dạng dọc này chiếm nhiều không gian dọc hơn trong bảng tin, tăng khả năng hiển thị và tỷ lệ nhấp."
      },
      {
        "q": "Tôi có thể sử dụng hình ảnh vuông trên Pinterest không?",
        "a": "Có, pin vuông 1:1 (ví dụ: 1000×1000) được hỗ trợ. Tuy nhiên, pin dọc (2:3) thường hoạt động tốt hơn vì chúng chiếm nhiều không gian màn hình hơn trong bảng tin kiểu masonry."
      },
      {
        "q": "Pin ý tưởng Pinterest là gì?",
        "a": "Pin ý tưởng (trước đây là Story Pins) là nội dung dọc toàn màn hình, nhiều trang (9:16, 1080×1920). Chúng không liên kết đến các trang web bên ngoài và được thiết kế cho nội dung gốc trong Pinterest."
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
    "title": "Tỷ lệ khung hình là gì? Hướng dẫn dành cho người mới bắt đầu",
    "description": "Giải thích rõ ràng, dễ hiểu về tỷ lệ khung hình: ý nghĩa của nó, cách viết, tại sao nó quan trọng đối với màn hình và hình ảnh, và cách sử dụng.",
    "intro": "Tỷ lệ khung hình là một trong những thuật ngữ nghe có vẻ kỹ thuật nhưng thực ra khá đơn giản khi bạn đã hiểu nó. Cho dù bạn đang thay đổi kích thước ảnh cho Instagram, thiết lập video YouTube hay mua một màn hình mới, tỷ lệ khung hình sẽ quyết định hình dạng của hình ảnh hoặc màn hình của bạn. Hướng dẫn này giải thích mọi thứ bạn cần biết.",
    "sections": [
      {
        "heading": "Tỷ lệ khung hình có nghĩa là gì?",
        "body": "Tỷ lệ khung hình là mối quan hệ tỷ lệ giữa chiều rộng và chiều cao của một hình ảnh, màn hình hoặc khung video. Nó được viết dưới dạng hai số được phân tách bằng dấu hai chấm — ví dụ, 16:9 hoặc 4:3. Số đầu tiên là chiều rộng và số thứ hai là chiều cao. Tỷ lệ 16:9 có nghĩa là cứ mỗi 16 đơn vị chiều rộng thì chiều cao là 9 đơn vị. Kích thước thực tế không quan trọng — một hình ảnh 160×90 pixel và một hình ảnh 3840×2160 pixel đều có tỷ lệ 16:9 vì chúng có cùng tỷ lệ."
      },
      {
        "heading": "Tại sao tỷ lệ khung hình lại quan trọng?",
        "body": "Tỷ lệ khung hình quan trọng bất cứ khi nào bạn hiển thị, in hoặc chia sẻ nội dung hình ảnh. Nếu tỷ lệ hình ảnh của bạn không khớp với tỷ lệ của màn hình hoặc vùng chứa, một trong hai điều sau sẽ xảy ra:",
        "list": [
          "Letterboxing / Pillarboxing — Các thanh màu đen xuất hiện để lấp đầy không gian trống",
          "Cắt xén — Hình ảnh bị cắt để vừa vặn, và một phần nội dung bị mất",
          "Kéo giãn — Hình ảnh bị biến dạng để lấp đầy khung hình (ít mong muốn nhất)"
        ]
      },
      {
        "heading": "Các tỷ lệ khung hình phổ biến và nơi chúng được sử dụng",
        "body": "Các ngành công nghiệp và nền tảng khác nhau đã tiêu chuẩn hóa các tỷ lệ khung hình khác nhau. Dưới đây là những tỷ lệ quan trọng nhất cần biết:",
        "table": {
          "headers": [
            "Tỷ lệ",
            "Số thập phân",
            "Sử dụng phổ biến"
          ],
          "rows": [
            [
              "16:9",
              "1.78:1",
              "YouTube, Netflix, TV, màn hình, thuyết trình"
            ],
            [
              "9:16",
              "0.56:1",
              "TikTok, Instagram Reels, YouTube Shorts, Stories"
            ],
            [
              "1:1",
              "1.00:1",
              "Bài đăng trên Instagram, ảnh đại diện, bìa album"
            ],
            [
              "4:5",
              "0.80:1",
              "Bài đăng chân dung trên Instagram (chiều cao tối đa của bảng tin)"
            ],
            [
              "4:3",
              "1.33:1",
              "iPad, TV đời cũ, PowerPoint, máy ảnh DSLR"
            ],
            [
              "3:2",
              "1.50:1",
              "Máy ảnh DSLR, ảnh in 4×6, phim 35mm"
            ],
            [
              "2.39:1",
              "2.39:1",
              "Phim điện ảnh Cinemascope"
            ]
          ]
        }
      },
      {
        "heading": "Cách tính tỷ lệ khung hình",
        "body": "Để tìm tỷ lệ khung hình của bất kỳ hình ảnh nào, hãy chia cả chiều rộng và chiều cao cho Ước số chung lớn nhất (GCD) của chúng. Ví dụ, một hình ảnh có 1920×1080 pixel: cả hai số đều chia hết cho 120, cho ra tỷ lệ 16:9. Máy tính miễn phí của chúng tôi thực hiện điều này tự động — chỉ cần nhập chiều rộng và chiều cao của bạn."
      },
      {
        "heading": "Tỷ lệ khung hình so với Độ phân giải",
        "body": "Tỷ lệ khung hình và độ phân giải có liên quan nhưng không phải là một. Độ phân giải đề cập đến tổng số pixel (ví dụ, 1920×1080). Tỷ lệ khung hình đề cập đến hình dạng (ví dụ, 16:9). Hai hình ảnh có thể có cùng tỷ lệ khung hình nhưng có độ phân giải hoàn toàn khác nhau — ví dụ, 640×360 và 3840×2160 đều có tỷ lệ 16:9 nhưng khác biệt rất lớn về số lượng pixel và chất lượng."
      }
    ],
    "conclusion": "Hiểu về tỷ lệ khung hình giúp bạn tạo ra những hình ảnh và video trông chính xác như mong muốn trên mọi màn hình và nền tảng. Sử dụng máy tính tỷ lệ khung hình miễn phí của chúng tôi để chuyển đổi kích thước, xác định tỷ lệ và thay đổi kích thước hình ảnh ngay lập tức trong khi vẫn giữ đúng tỷ lệ."
  },
  "how-to-calculate-aspect-ratio": {
    "title": "Cách tính tỷ lệ khung hình: Hướng dẫn đầy đủ",
    "description": "Học cách tính tỷ lệ khung hình từng bước: sử dụng phương pháp GCD, công thức và công cụ tính trực tuyến miễn phí của chúng tôi. Bao gồm các ví dụ minh họa.",
    "intro": "Biết cách tính tỷ lệ khung hình là một kỹ năng cơ bản cho bất kỳ ai làm việc với hình ảnh, video hoặc thiết kế. Hướng dẫn này bao gồm các phép toán đằng sau nó, các phương pháp thủ công nhanh nhất và cách sử dụng công cụ tính miễn phí của chúng tôi để có kết quả tức thì.",
    "sections": [
      {
        "heading": "Công thức tỷ lệ khung hình",
        "body": "Tỷ lệ khung hình của bất kỳ hình chữ nhật nào đơn giản là: Chiều rộng ÷ Chiều cao. Để biểu thị nó dưới dạng tỷ lệ W:H rõ ràng (ví dụ: 16:9 thay vì 1.778:1), bạn cần tìm Ước số chung lớn nhất (GCD) của chiều rộng và chiều cao, sau đó chia cả hai cho nó."
      },
      {
        "heading": "Từng bước: Cách tìm tỷ lệ khung hình",
        "body": "Dưới đây là cách tính tỷ lệ khung hình của bất kỳ hình ảnh nào theo cách thủ công:",
        "list": [
          "Bước 1: Ghi lại chiều rộng và chiều cao theo pixel (ví dụ: 1920 và 1080)",
          "Bước 2: Tìm Ước số chung lớn nhất (GCD) của cả hai số. Đối với 1920 và 1080, GCD là 120.",
          "Bước 3: Chia cả hai số cho GCD. 1920 ÷ 120 = 16; 1080 ÷ 120 = 9.",
          "Bước 4: Viết kết quả dưới dạng W:H — trong trường hợp này, 16:9."
        ]
      },
      {
        "heading": "Ví dụ minh họa",
        "body": "Dưới đây là một số kích thước phổ biến và tỷ lệ khung hình của chúng:",
        "table": {
          "headers": [
            "Chiều rộng",
            "Chiều cao",
            "GCD",
            "Tỷ lệ khung hình"
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
        "heading": "Cách tính kích thước còn thiếu",
        "body": "Nếu bạn biết kích thước gốc và muốn tìm kích thước mới với cùng tỷ lệ, hãy sử dụng công thức này: Chiều cao mới = (Chiều cao gốc ÷ Chiều rộng gốc) × Chiều rộng mới. Ví dụ, để tìm chiều cao của hình ảnh 16:9 có chiều rộng 1280px: (1080 ÷ 1920) × 1280 = 720px. Công cụ tính của chúng tôi thực hiện điều này tự động theo cả hai hướng."
      },
      {
        "heading": "Phương pháp nhanh nhất: Sử dụng công cụ tính",
        "body": "Việc tính toán tỷ lệ khung hình thủ công khá đơn giản với các số tròn, nhưng nhanh chóng trở nên tẻ nhạt đối với các kích thước không đều như 1847×923. Công cụ tính tỷ lệ khung hình miễn phí của chúng tôi xử lý mọi chiều rộng và chiều cao ngay lập tức — nhập giá trị của bạn và nhận tỷ lệ đơn giản hóa, số thập phân, kết quả khớp tiêu chuẩn gần nhất và giá trị CSS chỉ trong một cú nhấp chuột."
      }
    ],
    "conclusion": "Tính toán tỷ lệ khung hình rất dễ dàng một khi bạn hiểu phương pháp GCD. Để sử dụng hàng ngày, công cụ tính miễn phí của chúng tôi sẽ giúp bạn tiết kiệm thời gian và cung cấp thêm thông tin như phân tích chất lượng, kích thước in và xuất CSS. Hãy thử ngay tại aspect-ratio-calculator.com."
  },
  "aspect-ratio-social-media-guide-2026": {
    "title": "Kích thước hình ảnh & Tỷ lệ khung hình trên mạng xã hội: Hướng dẫn đầy đủ năm 2026",
    "description": "Mọi kích thước hình ảnh và tỷ lệ khung hình trên mạng xã hội cho năm 2026: Instagram, YouTube, TikTok, X, LinkedIn, Facebook và Pinterest. Hãy lưu lại hướng dẫn này.",
    "intro": "Mỗi nền tảng mạng xã hội đều có kích thước hình ảnh khuyến nghị riêng và chúng thay đổi thường xuyên. Sử dụng sai kích thước có nghĩa là hình ảnh của bạn sẽ bị cắt, mờ hoặc hiển thị kém. Hướng dẫn này bao gồm mọi nền tảng chính cho năm 2026.",
    "sections": [
      {
        "heading": "Tại sao kích thước hình ảnh lại quan trọng trên mạng xã hội",
        "body": "Mỗi nền tảng có bố cục nguồn cấp dữ liệu, khu vực hiển thị và thuật toán nén khác nhau. Một hình ảnh được tối ưu hóa cho nền tảng này có thể trông mờ, bị cắt hoặc bị kéo giãn trên nền tảng khác. Tải lên với kích thước khuyến nghị chính xác đảm bảo:",
        "list": [
          "Không bị cắt nội dung chính một cách bất ngờ",
          "Độ sắc nét tối đa — không bị nền tảng phóng to",
          "Thời gian tải nhanh hơn — kích thước chính xác giúp giảm dung lượng tệp",
          "Hiệu suất tốt hơn trong các thuật toán đề xuất"
        ]
      },
      {
        "heading": "Kích thước hình ảnh Instagram 2026",
        "body": "Instagram hỗ trợ ba tỷ lệ khung hình cho bài đăng trên nguồn cấp dữ liệu cùng với Stories và Reels. Đối với bài đăng trên nguồn cấp dữ liệu, ảnh chân dung 4:5 (1080×1350) mang lại cho bạn không gian dọc lớn nhất — lý tưởng để tối đa hóa khả năng hiển thị khi cuộn.",
        "table": {
          "headers": [
            "Định dạng",
            "Kích thước",
            "Tỷ lệ"
          ],
          "rows": [
            [
              "Bài đăng trên nguồn cấp dữ liệu (Vuông)",
              "1080 × 1080",
              "1:1"
            ],
            [
              "Bài đăng trên nguồn cấp dữ liệu (Chân dung)",
              "1080 × 1350",
              "4:5"
            ],
            [
              "Bài đăng trên nguồn cấp dữ liệu (Ngang)",
              "1080 × 566",
              "1.91:1"
            ],
            [
              "Story / Reel",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Ảnh đại diện",
              "320 × 320",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Kích thước YouTube 2026",
        "body": "YouTube là một nền tảng 16:9. Thiết kế hình thu nhỏ ở 1280×720 với văn bản đậm, dễ đọc — hình thu nhỏ của bạn thường là yếu tố quyết định liệu ai đó có nhấp vào hay không.",
        "table": {
          "headers": [
            "Định dạng",
            "Kích thước",
            "Tỷ lệ"
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
              "Hình thu nhỏ",
              "1280 × 720",
              "16:9"
            ],
            [
              "Ảnh bìa kênh",
              "2560 × 1440",
              "16:9"
            ]
          ]
        }
      },
      {
        "heading": "Kích thước video TikTok 2026",
        "body": "TikTok hoàn toàn là định dạng dọc — luôn sử dụng 9:16 ở 1080×1920 để có chất lượng tốt nhất. Giữ nội dung chính ở giữa khung hình và tránh xa 20% phía dưới nơi chú thích và các yếu tố giao diện người dùng xuất hiện.",
        "table": {
          "headers": [
            "Định dạng",
            "Kích thước",
            "Tỷ lệ"
          ],
          "rows": [
            [
              "Video (Khuyến nghị)",
              "1080 × 1920",
              "9:16"
            ],
            [
              "Ảnh đại diện",
              "200 × 200",
              "1:1"
            ]
          ]
        }
      },
      {
        "heading": "Tham khảo nhanh: Tất cả các nền tảng",
        "body": "Dưới đây là bảng tham khảo nhanh về các kích thước hình ảnh mạng xã hội được sử dụng phổ biến nhất vào năm 2026:",
        "table": {
          "headers": [
            "Nền tảng",
            "Định dạng",
            "Kích thước",
            "Tỷ lệ"
          ],
          "rows": [
            [
              "Instagram",
              "Bài đăng trên nguồn cấp dữ liệu (Chân dung)",
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
              "Hình thu nhỏ",
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
              "Hình ảnh bài đăng",
              "1600 × 900",
              "16:9"
            ],
            [
              "LinkedIn",
              "Hình ảnh bài đăng",
              "1200 × 628",
              "1.91:1"
            ],
            [
              "Facebook",
              "Hình ảnh bài đăng",
              "1200 × 630",
              "1.91:1"
            ],
            [
              "Pinterest",
              "Ghim tiêu chuẩn",
              "1000 × 1500",
              "2:3"
            ]
          ]
        }
      }
    ],
    "conclusion": "Hãy đánh dấu hướng dẫn này và sử dụng Công cụ tính Aspect Ratio miễn phí của chúng tôi để xác minh hoặc chuyển đổi bất kỳ kích thước nào trong vài giây. Nhập kích thước hình ảnh hiện tại của bạn và kích thước nền tảng mục tiêu để kiểm tra chất lượng, tính toán giá trị CSS và chia sẻ kết quả ngay lập tức."
  },
  "16-9-vs-4-3-aspect-ratio": {
    "title": "Tỷ lệ khung hình 16:9 so với 4:3 — Bạn nên sử dụng loại nào?",
    "description": "So sánh rõ ràng về tỷ lệ khung hình 16:9 và 4:3: khi nào nên sử dụng từng loại, lịch sử đằng sau chúng, sự khác biệt chính và ví dụ về kích thước pixel.",
    "intro": "16:9 và 4:3 là hai tỷ lệ khung hình có ý nghĩa lịch sử nhất trong video và nhiếp ảnh. Nếu bạn đã từng thấy các thanh màu đen trên màn hình của mình — ở hai bên hoặc trên và dưới — bạn đã gặp phải sự khác biệt giữa chúng. Dưới đây là một so sánh đầy đủ.",
    "sections": [
      {
        "heading": "Sự khác biệt chính",
        "body": "16:9 rộng hơn và hình chữ nhật hơn (tỷ lệ 1.78:1), trong khi 4:3 vuông hơn (tỷ lệ 1.33:1). Một hình ảnh 16:9 rộng hơn khoảng 33% so với hình ảnh 4:3 có cùng chiều cao. Sự khác biệt này có vẻ nhỏ nhưng rất dễ nhận thấy trên màn hình."
      },
      {
        "heading": "Lịch sử: Chúng đến từ đâu?",
        "body": "4:3 là tiêu chuẩn truyền hình gốc, được áp dụng vào những năm 1930 vì nó gần khớp với tỷ lệ khung hình của phim điện ảnh 35mm vào thời điểm đó. 16:9 được giới thiệu vào cuối những năm 1980 như một tiêu chuẩn màn hình rộng thỏa hiệp có thể hiển thị cả nội dung TV 4:3 (với các thanh nhỏ ở hai bên) và nội dung điện ảnh 2.39:1 (với các thanh nhỏ ở trên/dưới) với không gian đen tối thiểu. ITU đã thông qua 16:9 làm tiêu chuẩn HDTV vào năm 1987."
      },
      {
        "heading": "Khi nào nên sử dụng 16:9",
        "body": "Sử dụng 16:9 khi:",
        "list": [
          "Tạo nội dung video cho YouTube, Netflix hoặc truyền hình",
          "Tạo các bài thuyết trình hiện đại (Google Slides, PowerPoint 2016 và các phiên bản sau này mặc định là 16:9)",
          "Thiết kế cho màn hình rộng và máy tính xách tay",
          "Quay video bằng điện thoại thông minh hoặc máy ảnh hiện đại",
          "Tạo hình thu nhỏ YouTube"
        ]
      },
      {
        "heading": "Khi nào nên sử dụng 4:3",
        "body": "Sử dụng 4:3 khi:",
        "list": [
          "Thiết kế cho màn hình iPad (sử dụng 4:3)",
          "Tạo bài thuyết trình cho máy chiếu cũ",
          "Phù hợp với nội dung video cũ",
          "In theo tỷ lệ ảnh tiêu chuẩn (một số máy ảnh)",
          "Làm việc với cảnh quay CCTV hoặc giám sát"
        ]
      },
      {
        "heading": "So sánh kích thước pixel",
        "body": "Dưới đây là các độ phân giải phổ biến cho cả hai tỷ lệ với số megapixel tương đương:",
        "table": {
          "headers": [
            "Chất lượng",
            "Kích thước 16:9",
            "Kích thước 4:3"
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
    "conclusion": "Đối với hầu hết nội dung video và màn hình hiện đại, 16:9 là lựa chọn phù hợp. Đối với nội dung tập trung vào máy tính bảng hoặc khả năng tương thích với các hệ thống cũ, 4:3 có thể phù hợp hơn. Khi không chắc chắn, hãy sử dụng Công cụ tính tỷ lệ khung hình miễn phí của chúng tôi để chuyển đổi giữa hai loại và xem trước kết quả ngay lập tức."
  },
  "how-to-resize-image-without-losing-quality": {
    "title": "Cách thay đổi kích thước ảnh mà không làm giảm chất lượng",
    "description": "Tìm hiểu các kỹ thuật thay đổi kích thước ảnh mà không làm giảm chất lượng: thu nhỏ (downscaling) so với phóng to (upscaling), các định dạng tệp tốt nhất, giải thích về DPI và các đề xuất công cụ.",
    "intro": "Thay đổi kích thước ảnh nghe có vẻ đơn giản, nhưng nếu thực hiện không đúng cách sẽ dẫn đến ảnh bị mờ, vỡ hạt hoặc méo mó. Hướng dẫn này giải thích khi nào và làm thế nào bạn có thể thay đổi kích thước ảnh mà không làm giảm chất lượng một cách rõ rệt.",
    "sections": [
      {
        "heading": "Thu nhỏ (Downscaling) so với Phóng to (Upscaling)",
        "body": "Có hai hướng bạn có thể thay đổi kích thước ảnh, và chúng có những tác động rất khác nhau đến chất lượng. Thu nhỏ (downscaling) (làm ảnh nhỏ hơn) hầu như luôn giữ được chất lượng — bạn chỉ đơn giản là loại bỏ các pixel. Phóng to (upscaling) (làm ảnh lớn hơn) là nơi phát sinh các vấn đề về chất lượng, vì phần mềm phải tạo ra dữ liệu pixel không tồn tại trong ảnh gốc."
      },
      {
        "heading": "Quy tắc vàng: Luôn bắt đầu với độ phân giải cao nhất",
        "body": "Mất chất lượng hầu như không thể đảo ngược. Nếu bạn bắt đầu với một ảnh nhỏ và cần một ảnh lớn, bạn sẽ luôn thấy chất lượng bị suy giảm. Thực hành tốt nhất là:",
        "list": [
          "Luôn giữ tệp gốc có độ phân giải cao của bạn",
          "Xuất hoặc lưu một bản sao riêng biệt với kích thước mục tiêu",
          "Không bao giờ lưu lại một tệp JPEG đã nén nhiều lần — mỗi lần lưu sẽ làm giảm chất lượng",
          "Xuất từ tệp gốc mỗi khi bạn cần một kích thước mới"
        ]
      },
      {
        "heading": "Bạn có thể phóng to (upscale) bao nhiêu?",
        "body": "Theo hướng dẫn chung: phóng to (upscaling) lên đến 110–120% thường không thể nhận thấy đối với hầu hết người xem. Phóng to (upscaling) 150–200% tạo ra độ mềm mại đáng chú ý. Phóng to (upscaling) vượt quá 200% thường tạo ra hiện tượng vỡ hạt và mờ rõ rệt. Các công cụ phóng to (upscaling) dựa trên AI (như Topaz Gigapixel, Adobe Firefly và các công cụ tương tự) đôi khi có thể tạo ra kết quả chấp nhận được khi phóng to (upscaling) 2–4 lần bằng cách tạo chi tiết một cách thông minh."
      },
      {
        "heading": "Duy trì tỷ lệ khung hình khi thay đổi kích thước",
        "body": "Một trong những lỗi chất lượng phổ biến nhất là vô tình thay đổi tỷ lệ khung hình trong quá trình thay đổi kích thước — kéo giãn hoặc nén ảnh. Luôn thay đổi kích thước theo tỷ lệ bằng cách khóa tỷ lệ khung hình trong công cụ chỉnh sửa của bạn. Máy tính miễn phí của chúng tôi giúp bạn tìm chiều cao mục tiêu chính xác cho bất kỳ chiều rộng mới nào (hoặc ngược lại), đảm bảo việc thay đổi kích thước của bạn duy trì tỷ lệ gốc."
      },
      {
        "heading": "Các định dạng tệp tốt nhất cho chất lượng",
        "body": "Định dạng tệp ảnh hưởng đáng kể đến chất lượng sau khi thay đổi kích thước:",
        "list": [
          "PNG — Nén không mất dữ liệu; lý tưởng cho đồ họa, minh họa và ảnh chụp màn hình nơi độ sắc nét quan trọng",
          "JPEG — Nén mất dữ liệu; lý tưởng cho ảnh chụp; đặt chất lượng 80–90% để có sự cân bằng tốt nhất giữa kích thước/chất lượng",
          "WebP — Định dạng hiện đại đạt được khả năng nén tốt hơn JPEG ở chất lượng tương đương; được hỗ trợ bởi tất cả các trình duyệt hiện đại",
          "TIFF — Không nén hoặc không mất dữ liệu; được sử dụng trong quy trình in ấn và nhiếp ảnh chuyên nghiệp"
        ]
      },
      {
        "heading": "DPI và chất lượng in",
        "body": "DPI (dots per inch) chỉ liên quan đến in ấn — nó bị bỏ qua bởi màn hình. Đối với in ấn: sử dụng 300 DPI cho ảnh in sắc nét, 150 DPI cho chất lượng chấp nhận được và 72–96 DPI chỉ để sử dụng trên màn hình. Để tính kích thước pixel cần thiết cho bản in: nhân kích thước in theo inch với DPI. Đối với bản in 8×10 inch ở 300 DPI: 2400×3000 pixel."
      }
    ],
    "conclusion": "Cách tốt nhất để thay đổi kích thước mà không làm giảm chất lượng là luôn thu nhỏ (downscale) từ ảnh gốc có độ phân giải cao, duy trì tỷ lệ khung hình và xuất ở định dạng phù hợp. Sử dụng Công cụ tính tỷ lệ khung hình của chúng tôi để tìm kích thước mục tiêu chính xác giúp giữ nguyên tỷ lệ gốc của bạn — không cần phỏng đoán."
  },
  "install-aspect-ratio-calculator": {
    "title": "Tại sao nên cài đặt Aspect Ratio Calculator? Truy cập ngoại tuyến, tốc độ & hơn thế nữa",
    "description": "Cài đặt Aspect Ratio Calculator dưới dạng một ứng dụng để truy cập ngoại tuyến tức thì, một lối tắt trên màn hình chính và trải nghiệm không bị phân tâm — không có giao diện người dùng trình duyệt, không cần tải lại.",
    "intro": "Bạn có thể sử dụng công cụ tính này trực tiếp từ trình duyệt của mình, nhưng cài đặt nó dưới dạng một ứng dụng sẽ nâng cao trải nghiệm hơn nữa — khởi chạy tức thì từ màn hình chính của bạn, hỗ trợ ngoại tuyến đầy đủ và giao diện gọn gàng không có thanh điều hướng trình duyệt gây cản trở. Đây là tất cả những gì bạn cần biết.",
    "sections": [
      {
        "heading": "'Cài đặt' thực sự có nghĩa là gì?",
        "body": "Khi bạn cài đặt một ứng dụng web (còn gọi là PWA — Progressive Web App), thiết bị của bạn sẽ lưu một lối tắt vào màn hình chính hoặc màn hình nền của bạn và lưu vào bộ nhớ đệm các tệp ứng dụng để sử dụng ngoại tuyến. Không có App Store nào liên quan và không có gì đang tải xuống hàng gigabyte dữ liệu — các tệp đã có trong bộ nhớ đệm của trình duyệt của bạn. Việc cài đặt đơn giản là nâng cấp trang web thành trải nghiệm ứng dụng hạng nhất trên thiết bị của bạn."
      },
      {
        "heading": "Lợi ích của việc cài đặt",
        "body": "Cài đặt Aspect Ratio Calculator mang lại cho bạn một số lợi thế so với việc chỉ sử dụng nó trong trình duyệt:",
        "list": [
          "Truy cập ngoại tuyến — các phép tính hoạt động ngay cả khi không có kết nối internet, hữu ích khi ở trường quay, ngoài thực địa hoặc trên máy bay",
          "Lối tắt màn hình chính — mở bằng một lần chạm, không cần điều hướng đến URL hoặc mở tab trình duyệt",
          "Giao diện không bị phân tâm — không có thanh địa chỉ trình duyệt, tab hoặc thanh công cụ; công cụ tính lấp đầy màn hình một cách gọn gàng",
          "Tải nhanh hơn — các tệp được lưu vào bộ nhớ đệm tải tức thì từ bộ nhớ cục bộ thay vì chờ phản hồi mạng",
          "Luôn cập nhật — service worker tìm nạp các bản cập nhật một cách âm thầm trong nền để bạn luôn có phiên bản mới nhất"
        ]
      },
      {
        "heading": "Cách cài đặt trên Chrome hoặc Android",
        "body": "Trên Android hoặc Chrome dành cho máy tính để bàn, một biểu ngữ sẽ tự động xuất hiện ở cuối trang với nút Cài đặt. Chạm hoặc nhấp vào Cài đặt và xác nhận khi được nhắc. Nếu biểu ngữ đã bị loại bỏ, hãy tìm biểu tượng cài đặt (một màn hình có mũi tên xuống ⊕) trong thanh địa chỉ trình duyệt trên máy tính để bàn, hoặc chạm vào menu ba chấm trên Android và chọn 'Thêm vào màn hình chính'."
      },
      {
        "heading": "Cách cài đặt trên iPhone hoặc iPad (Safari)",
        "body": "Safari trên iOS không hiển thị biểu ngữ cài đặt tự động, nhưng quá trình này rất đơn giản:",
        "list": [
          "Chạm vào nút Chia sẻ (hộp có mũi tên chỉ lên) trong thanh công cụ Safari ở cuối màn hình",
          "Cuộn xuống trong bảng chia sẻ và chạm vào 'Thêm vào màn hình chính'",
          "Chỉnh sửa tên nếu bạn muốn, sau đó chạm vào 'Thêm' ở góc trên bên phải",
          "Biểu tượng công cụ tính giờ đây xuất hiện trên màn hình chính của bạn và khởi chạy ở chế độ độc lập"
        ]
      },
      {
        "heading": "Cách cài đặt trên máy tính để bàn (Chrome hoặc Edge)",
        "body": "Trên máy tính để bàn chạy Chrome hoặc Edge, hãy tìm biểu tượng cài đặt trong thanh địa chỉ — nó trông giống một màn hình có mũi tên tải xuống nhỏ. Nhấp vào đó và xác nhận lời nhắc. Trên Edge, tùy chọn này cũng có thể xuất hiện trong menu ba chấm dưới dạng 'Ứng dụng → Cài đặt trang web này dưới dạng ứng dụng'. Sau khi cài đặt, công cụ tính sẽ xuất hiện trong Start menu (Windows) hoặc thư mục Ứng dụng (Mac) của bạn giống như bất kỳ ứng dụng gốc nào."
      },
      {
        "heading": "Cách gỡ cài đặt",
        "body": "Việc gỡ cài đặt cũng dễ dàng như cài đặt. Trên iOS, nhấn giữ biểu tượng trên màn hình chính của bạn và chạm vào 'Xóa ứng dụng'. Trên Android, nhấn giữ và kéo đến khu vực gỡ cài đặt, hoặc vào Cài đặt → Ứng dụng. Trên Chrome dành cho máy tính để bàn, mở ứng dụng, nhấp vào menu ba chấm bên trong cửa sổ ứng dụng và chọn 'Gỡ cài đặt Aspect Ratio Calculator'. Trên Edge, nhấp chuột phải vào ứng dụng trong thanh tác vụ hoặc Start menu và chọn Gỡ cài đặt."
      }
    ],
    "conclusion": "Cài đặt Aspect Ratio Calculator mất khoảng mười giây và không tốn phí. Bạn có được quyền truy cập ngoại tuyến, một lối tắt trên màn hình chính và trải nghiệm nhanh hơn, gọn gàng hơn — không yêu cầu App Store. Nếu bạn thường xuyên sử dụng công cụ tính này, việc cài đặt nó là cách thuận tiện nhất để giữ nó trong tầm tay bạn."
  }
};
