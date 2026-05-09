const galleryRange = (id, count) =>
  Array.from({ length: count }, (_, index) =>
    `assets/portfolio/gallery/gallery-${id}-${String(index + 1).padStart(2, '0')}.jpg`
  );

window.portfolioData = [
  {
    cat: 'commercial', displayCat: 'TVC', client: '교차로신문사', title: '교차로신문사 취업/알바 TVC',
    year: '2024', duration: '00:20', format: '16:9', bg: 'bg-1',
    thumb: 'assets/portfolio/kyocharo-tvc-thumb.png',
    videoUrl: 'https://www.youtube.com/watch?v=pJUL5xXymcs',
    desc: '교차로신문사의 취업·알바 서비스를 소개하는 20초 분량의 TVC. 신문 지면과 모바일 화면을 함께 활용해 우리 동네 일자리 정보를 직관적으로 전달합니다.',
    credits: { Client: '교차로신문사', Service: '취업 · 알바', Platform: 'YouTube', Type: 'TVC' }
  },
  {
    cat: 'brand', displayCat: 'PLATFORM FILM', client: '에코드림', title: '플라스틱뱅크 플랫폼',
    year: '2024', duration: '00:40+', format: '16:9', bg: 'bg-2',
    thumb: 'assets/portfolio/plasticbank-platform-thumb.png',
    videoUrl: 'https://www.youtube.com/watch?v=Y1LzTYCw9E0',
    desc: '플라스틱 순환 플랫폼의 이용 흐름과 브랜드 메시지를 함께 전달하는 플랫폼 소개영상. 서비스 구조를 간결한 화면 구성과 제품 이미지로 정리한 브랜디드 콘텐츠입니다.',
    credits: { Client: '에코드림', Service: '플라스틱뱅크', Platform: 'YouTube', Type: 'Platform Film' }
  },
  {
    cat: 'brand', displayCat: 'BRAND FILM', client: '(주)에코드림', title: '(주)에코드림 브랜드 홍보영상',
    year: '2022', duration: '00:46+', format: '16:9', bg: 'bg-3',
    thumb: 'assets/portfolio/ecodream-brand-thumb.png',
    videoUrl: 'https://youtu.be/yG7E40yqReg',
    desc: '폐플라스틱 순환 자원 사업을 전개하는 에코드림의 철학과 사업 구조를 시각적으로 정리한 브랜드 홍보영상. 기업의 친환경 가치와 생산 현장을 함께 담아낸 필름입니다.',
    credits: { Client: '(주)에코드림', Focus: '브랜드 소개', Platform: 'YouTube', Type: 'Brand Film' }
  },
  {
    cat: 'brand', displayCat: 'PRODUCT FILM', client: 'RYCLE', title: '친환경 리사이클 웨어, 티셔츠 RYCLE',
    year: '2022', duration: '00:54+', format: '16:9', bg: 'bg-4',
    thumb: 'assets/portfolio/rycle-tee-thumb.png',
    videoUrl: 'https://youtu.be/RXIL_WVwmQk',
    desc: '페트병 업사이클 원단으로 제작한 RYCLE 티셔츠의 소재 스토리와 착용 이미지를 중심으로 구성한 제품 홍보영상. 친환경 메시지와 제품 디테일을 동시에 전달합니다.',
    credits: { Client: 'RYCLE', Product: '티셔츠', Platform: 'YouTube', Type: 'Product Film' }
  },
  {
    cat: 'brand', displayCat: 'PRODUCT FILM', client: 'RYCLE', title: '친환경 리사이클 웨어, 카라티셔츠',
    year: '2022', duration: '00:26+', format: '16:9', bg: 'bg-5',
    thumb: 'assets/portfolio/rycle-polo-thumb.png',
    videoUrl: 'https://youtu.be/kJoJEh1V9M0',
    desc: '친환경 리사이클 웨어 카라티셔츠의 소재 특성과 실루엣을 간결하게 전달하는 제품 필름. 브랜드 톤을 유지하면서도 제품 사용 장면을 중심에 둔 구성입니다.',
    credits: { Client: 'RYCLE', Product: '카라티셔츠', Platform: 'YouTube', Type: 'Product Film' }
  },
  {
    cat: 'brand', displayCat: 'PRODUCT FILM', client: 'RYCLE', title: '친환경 리사이클 웨어, 리클 맨투맨 · 후드티',
    year: '2022', duration: '00:23+', format: '16:9', bg: 'bg-6',
    thumb: 'assets/portfolio/rycle-sweat-thumb.png',
    videoUrl: 'https://youtu.be/1LD6kN83SHc',
    desc: '리사이클 웨어 맨투맨과 후드티의 라인업을 감도 있게 보여주는 룩 중심 프로덕트 영상. 친환경 소재의 아이덴티티를 제품 비주얼과 함께 전달합니다.',
    credits: { Client: 'RYCLE', Product: '맨투맨 · 후드티', Platform: 'YouTube', Type: 'Product Film' }
  },
  {
    cat: 'commercial', displayCat: 'PRODUCT AD', client: '이숲', title: '이숲 핸드 새니타이저 미스트',
    year: '2022', duration: '01:03+', format: '16:9', bg: 'bg-7',
    thumb: 'assets/portfolio/isup-sanitizer-thumb.png',
    videoUrl: 'https://youtu.be/y_UJXt4z1S8',
    desc: '제품 사용성과 브랜드 톤을 함께 보여주는 핸드 새니타이저 미스트 광고영상. 짧은 호흡 안에서 사용 장면과 제품 컷을 선명하게 배치한 커머셜입니다.',
    credits: { Client: '이숲', Product: '핸드 새니타이저 미스트', Platform: 'YouTube', Type: 'Product Ad' }
  },
  {
    cat: 'promotion', displayCat: 'PROMOTION', client: '순천 글로벌웹툰캠퍼스', title: '순천 글로벌웹툰캠퍼스 홍보영상',
    year: '2023', duration: '03:20+', format: '16:9', bg: 'bg-8',
    thumb: 'assets/portfolio/webtooncampus-thumb.png',
    videoUrl: 'https://www.youtube.com/watch?v=uUSPt4SAzdI',
    desc: '순천 글로벌웹툰캠퍼스의 공간과 창작 지원 프로그램을 소개하는 기관 홍보영상. 시설, 교육, 창작 환경을 직관적으로 보여주는 프로모션 필름입니다.',
    credits: { Client: '순천 글로벌웹툰캠퍼스', Focus: '기관 홍보', Platform: 'YouTube', Type: 'Promotion' }
  },
  {
    cat: 'promotion', displayCat: 'REPORT FILM', client: '국립순천대학교', title: '국립순천대학교 전기 학위수여 학사보고',
    year: '2026', duration: '01:17+', format: '16:9', bg: 'bg-1',
    thumb: 'assets/portfolio/scnu-graduation-shot.png',
    videoUrl: 'https://youtu.be/vTHng2UMsIg',
    desc: '국립순천대학교 전기 학위수여식의 주요 장면을 기록한 학사보고 영상. 행사 현장과 공식 아카이브 성격을 함께 담은 리포트 필름입니다.',
    credits: { Client: '국립순천대학교', Event: '학위수여식', Platform: 'YouTube', Type: 'Report Film' }
  },
  {
    cat: 'promotion', displayCat: 'SAFETY CAMPAIGN', client: '순천시', title: '순천시 안전문화 릴레이 [심폐소생술]',
    year: '2024', duration: '03:58+', format: '16:9', bg: 'bg-2',
    thumb: 'assets/portfolio/thumb-OZC1Wzf7EkI.png',
    videoUrl: 'https://youtu.be/OZC1Wzf7EkI',
    desc: '순천시 안전문화 릴레이 시리즈 중 심폐소생술 편. 시민 대상 안전정보를 이해하기 쉽게 전달하는 공공 캠페인 영상입니다.',
    credits: { Client: '순천시', Series: '안전문화 릴레이', Platform: 'YouTube', Type: 'Campaign' }
  },
  {
    cat: 'promotion', displayCat: 'CAMPAIGN FILM', client: '순천대학교', title: '제10대 순천대학교 총장후보 허재선',
    year: '2024', duration: '00:40+', format: '16:9', bg: 'bg-3',
    thumb: 'assets/portfolio/thumb-Pe7Ly7MjGeQ.png',
    videoUrl: 'https://youtu.be/Pe7Ly7MjGeQ',
    desc: '순천대학교 총장후보 메시지를 중심으로 구성한 캠페인 필름. 인물 중심 촬영과 핵심 공약 전달에 집중한 영상입니다.',
    credits: { Client: '순천대학교', Focus: '후보 메시지', Platform: 'YouTube', Type: 'Campaign Film' }
  },
  {
    cat: 'brand', displayCat: 'PRODUCT FILM', client: '또담백', title: '재생비닐봉투 또담백',
    year: '2022', duration: '00:45+', format: '16:9', bg: 'bg-4',
    thumb: 'assets/portfolio/thumb-RXXsNhl7Gug.png',
    videoUrl: 'https://youtu.be/RXXsNhl7Gug',
    desc: '재생 비닐봉투 제품의 친환경 메시지와 사용 이미지를 함께 보여주는 브랜디드 제품 영상입니다.',
    credits: { Client: '또담백', Product: '재생비닐봉투', Platform: 'YouTube', Type: 'Product Film' }
  },
  {
    cat: 'promotion', displayCat: 'SAFETY CAMPAIGN', client: '순천시', title: '순천시 안전문화 릴레이 [여름철 집중호우 행동수칙]',
    year: '2024', duration: '00:24+', format: '16:9', bg: 'bg-5',
    thumb: 'assets/portfolio/thumb-2xPFBwuI3q0.png',
    videoUrl: 'https://youtu.be/2xPFBwuI3q0',
    desc: '집중호우 시기 시민 행동수칙을 안내하는 순천시 공공 안전 캠페인 영상입니다.',
    credits: { Client: '순천시', Series: '안전문화 릴레이', Platform: 'YouTube', Type: 'Campaign' }
  },
  {
    cat: 'brand', displayCat: 'EXPERIENCE FILM', client: '에코드림', title: '페트병 뚜껑 업사이클링 체험매장',
    year: '2023', duration: '00:30+', format: '16:9', bg: 'bg-6',
    thumb: 'assets/portfolio/thumb-R6Xno6dTGmI.png',
    videoUrl: 'https://youtu.be/R6Xno6dTGmI',
    desc: '업사이클링 체험 공간의 현장감과 브랜드 메시지를 담은 경험형 프로모션 영상입니다.',
    credits: { Client: '에코드림', Focus: '체험매장', Platform: 'YouTube', Type: 'Experience Film' }
  },
  {
    cat: 'promotion', displayCat: 'REPORT FILM', client: '순천시영상미디어센터', title: '순천시영상미디어센터 성과영상',
    year: '2024', duration: '00:26+', format: '16:9', bg: 'bg-7',
    thumb: 'assets/portfolio/thumb-mL2XCT46S5U.png',
    videoUrl: 'https://www.youtube.com/watch?v=mL2XCT46S5U&t=3s',
    desc: '센터 주요 프로그램과 운영 성과를 요약해 보여주는 공식 성과 기록영상입니다.',
    credits: { Client: '순천시영상미디어센터', Focus: '성과 기록', Platform: 'YouTube', Type: 'Report Film' }
  },
  {
    featured: true,
    cat: 'promotion', displayCat: 'CAMPAIGN', client: '두드림 영화관', title: '두드림 영화관 관람 문화 캠페인',
    year: '2024', duration: '00:11+', format: '16:9', bg: 'bg-8',
    thumb: 'assets/portfolio/thumb-8ETdLbwAP90.png',
    videoUrl: 'https://www.youtube.com/watch?v=8ETdLbwAP90',
    desc: '상영 관람 예절과 문화 메시지를 짧고 명확하게 전달하는 캠페인 영상입니다.',
    credits: { Client: '두드림 영화관', Focus: '관람 문화', Platform: 'YouTube', Type: 'Campaign' }
  },
  {
    cat: 'promotion', displayCat: 'PROMOTION', client: '순천시영상미디어센터', title: '순천시영상미디어센터 홍보영상',
    year: '2024', duration: '01:48+', format: '16:9', bg: 'bg-1',
    thumb: 'assets/portfolio/thumb-J7bLKkROA1E.png',
    videoUrl: 'https://www.youtube.com/watch?v=J7bLKkROA1E',
    desc: '공간, 장비, 교육 프로그램을 한 번에 소개하는 순천시영상미디어센터 기관 홍보영상입니다.',
    credits: { Client: '순천시영상미디어센터', Focus: '기관 홍보', Platform: 'YouTube', Type: 'Promotion' }
  },
  {
    cat: 'promotion', displayCat: 'SAFETY CAMPAIGN', client: '순천시', title: '순천시 안전문화 릴레이 – 중대재해처벌법',
    year: '2024', duration: '00:26+', format: '16:9', bg: 'bg-2',
    thumb: 'assets/portfolio/thumb-aHmyE1WDHkY.png',
    videoUrl: 'https://youtu.be/aHmyE1WDHkY',
    desc: '중대재해처벌법 핵심 내용을 시민과 현장 실무자 관점에서 전달하는 공공 안내 영상입니다.',
    credits: { Client: '순천시', Series: '안전문화 릴레이', Platform: 'YouTube', Type: 'Campaign' }
  },
  {
    cat: 'promotion', displayCat: 'INTERVIEW FILM', client: '순천글로벌웹툰캠퍼스', title: '순천글로벌웹툰캠퍼스 작가 & 시민 인터뷰',
    year: '2023', duration: '00:30+', format: '16:9', bg: 'bg-3',
    thumb: 'assets/portfolio/thumb-Quqr0323bhg.png',
    videoUrl: 'https://www.youtube.com/watch?v=Quqr0323bhg',
    desc: '캠퍼스를 경험한 작가와 시민의 목소리를 통해 공간의 의미를 전달하는 인터뷰 기반 영상입니다.',
    credits: { Client: '순천글로벌웹툰캠퍼스', Focus: '인터뷰', Platform: 'YouTube', Type: 'Interview Film' }
  },
  {
    cat: 'promotion', displayCat: 'SAFETY CAMPAIGN', client: '순천시', title: '순천시 안전문화 릴레이 [시민안전보험]',
    year: '2024', duration: '00:31+', format: '16:9', bg: 'bg-4',
    thumb: 'assets/portfolio/thumb-VBfdwhQfqhg.png',
    videoUrl: 'https://youtu.be/VBfdwhQfqhg',
    desc: '시민안전보험 제도를 쉽고 빠르게 소개하는 순천시 공공 캠페인 영상입니다.',
    credits: { Client: '순천시', Series: '안전문화 릴레이', Platform: 'YouTube', Type: 'Campaign' }
  },
  {
    cat: 'commercial', displayCat: 'VFX SPOT', client: '윌라', title: '윌라 2.0 VFX',
    year: '2025', duration: '00:15+', format: '16:9', bg: 'bg-5',
    thumb: 'assets/portfolio/thumb-willa-2-0-vfx.jpg',
    desc: '윌라 2.0 릴리즈 비주얼을 중심으로 구성한 VFX 기반 프로모션 작업입니다.',
    credits: { Client: '윌라', Focus: 'VFX', Platform: 'Archive', Type: 'VFX Spot' }
  },
  {
    cat: 'promotion', displayCat: 'SAFETY CAMPAIGN', client: '순천시', title: '순천시 안전문화 릴레이 [여름철 계곡 물놀이 안전수칙]',
    year: '2024', duration: '00:13+', format: '16:9', bg: 'bg-6',
    thumb: 'assets/portfolio/thumb-Yiud4h5LfLU.png',
    videoUrl: 'https://youtu.be/Yiud4h5LfLU',
    desc: '여름철 계곡 물놀이 안전수칙을 알기 쉽게 정리한 순천시 안전 캠페인 영상입니다.',
    credits: { Client: '순천시', Series: '안전문화 릴레이', Platform: 'YouTube', Type: 'Campaign' }
  },
  {
    cat: 'promotion', displayCat: 'PROMOTION', client: '안산조은요양병원', title: '안산조은요양병원 홍보영상',
    year: '2023', duration: '00:26+', format: '16:9', bg: 'bg-7',
    thumb: 'assets/portfolio/thumb-LbmBtl1WIn4.png',
    videoUrl: 'https://youtu.be/LbmBtl1WIn4?si=KlPbyammd6y6Zg8h',
    desc: '병원의 공간과 진료 환경, 신뢰 이미지를 전달하는 기관 홍보영상입니다.',
    credits: { Client: '안산조은요양병원', Focus: '기관 홍보', Platform: 'YouTube', Type: 'Promotion' }
  },
  {
    cat: 'promotion', displayCat: 'SAFETY CAMPAIGN', client: '순천시', title: '순천시 안전문화 릴레이 [전동킥보드 안전수칙]',
    year: '2024', duration: '00:20+', format: '16:9', bg: 'bg-8',
    thumb: 'assets/portfolio/thumb-vSkpNGOtwp4.jpg',
    videoUrl: 'https://youtu.be/vSkpNGOtwp4',
    desc: '전동킥보드 이용 시 꼭 알아야 할 안전수칙을 전달하는 공공 캠페인 영상입니다.',
    credits: { Client: '순천시', Series: '안전문화 릴레이', Platform: 'YouTube', Type: 'Campaign' }
  },
  {
    cat: 'promotion', displayCat: 'SAFETY CAMPAIGN', client: '순천시', title: '순천시 안전문화 릴레이 – 주택화재예방 소화기',
    year: '2024', duration: '00:30+', format: '16:9', bg: 'bg-1',
    thumb: 'assets/portfolio/thumb-vHPBrK4GbSg.png',
    videoUrl: 'https://youtu.be/vHPBrK4GbSg',
    desc: '주택 화재예방과 소화기 사용 메시지를 중심으로 한 순천시 안전 캠페인 영상입니다.',
    credits: { Client: '순천시', Series: '안전문화 릴레이', Platform: 'YouTube', Type: 'Campaign' }
  },
  {
    cat: 'promotion', displayCat: 'PROMOTION', client: '국립순천대학교', title: '국립순천대학교 전남국립의과대학 신설',
    year: '2024', duration: '00:33+', format: '16:9', bg: 'bg-2',
    thumb: 'assets/portfolio/thumb-w9uYif2CN9U.png',
    videoUrl: 'https://youtu.be/w9uYif2CN9U',
    desc: '전남국립의과대학 신설 비전을 알기 쉽게 정리한 대학 홍보 및 공공 메시지 영상입니다.',
    credits: { Client: '국립순천대학교', Focus: '의과대학 신설', Platform: 'YouTube', Type: 'Promotion' }
  },
  {
    cat: 'promotion', displayCat: 'SAFETY CAMPAIGN', client: '순천시', title: '순천시 안전문화 릴레이 [여름철 폭염대비 행동요령]',
    year: '2024', duration: '00:49+', format: '16:9', bg: 'bg-3',
    thumb: 'assets/portfolio/thumb-_O2NNj81hUo.png',
    videoUrl: 'https://youtu.be/_O2NNj81hUo',
    desc: '폭염 시기 시민 행동요령을 짧고 명확하게 전달하는 순천시 안전 캠페인 영상입니다.',
    credits: { Client: '순천시', Series: '안전문화 릴레이', Platform: 'YouTube', Type: 'Campaign' }
  },
  {
    cat: 'brand', displayCat: 'BRAND FILM', client: '(주)에코드림', title: '(주)에코드림 브랜드 & 의류홍보영상 (영문)',
    year: '2022', duration: '00:30+', format: '16:9', bg: 'bg-4',
    thumb: 'assets/portfolio/thumb-DzHLpPWffrY.png',
    videoUrl: 'https://youtu.be/DzHLpPWffrY',
    desc: '에코드림의 브랜드 메시지와 친환경 의류 라인업을 영문 버전으로 정리한 해외 커뮤니케이션용 브랜드 필름입니다.',
    credits: { Client: '(주)에코드림', Focus: '영문 브랜드 소개', Platform: 'YouTube', Type: 'Brand Film' }
  },
  {
    cat: 'youtube', displayCat: 'TRAVEL FILM', client: '전남영상위원회', title: '여수 반월마을 유채꽃',
    year: '2023', duration: '02:29', format: '16:9', bg: 'bg-1',
    thumb: 'assets/portfolio/thumb-L-bqcg5OpDk.png',
    videoUrl: 'https://youtu.be/L-bqcg5OpDk',
    desc: '여수 반월마을의 유채꽃 풍경을 계절감 있게 담아낸 트래블 필름. 색감과 동선 중심의 편집으로 여행의 순간을 짧고 선명하게 기록합니다.',
    credits: { Client: '전남영상위원회', Series: 'Travel Ver.', Platform: 'YouTube', Type: 'Travel Film' }
  },
  {
    cat: 'youtube', displayCat: 'PHOTO CONTENT', client: '최수종의 여행사담', title: '최수종의 여행사담 x 전남배우 콜라보 화보촬영 (해남)',
    year: '2025', duration: '06:49', format: '16:9', bg: 'bg-2',
    thumb: 'assets/portfolio/thumb-j77AZ6zknZo.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=j77AZ6zknZo',
    gallery: galleryRange('j77AZ6zknZo', 12),
    desc: '해남 로케이션과 전남배우 협업 화보 촬영 현장을 중심으로 구성한 유튜브 콘텐츠. 지역의 무드와 인물 비주얼을 함께 보여주는 시리즈형 영상입니다.',
    credits: { Client: '전남영상위원회', Series: '최수종의 여행사담', Platform: 'YouTube', Type: 'Photo Content' }
  },
  {
    cat: 'youtube', displayCat: 'PHOTO CONTENT', client: '최수종의 여행사담', title: '최수종의 여행사담 x 전남배우 콜라보 화보촬영 (진도)',
    year: '2025', duration: '07:31', format: '16:9', bg: 'bg-3',
    thumb: 'assets/portfolio/thumb-_BAFiBDot6M.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=_BAFiBDot6M',
    gallery: galleryRange('_BAFiBDot6M', 10),
    desc: '진도 지역의 풍경과 전남배우 화보 촬영을 엮어낸 유튜브 콘텐츠. 로케이션 감도와 인물 중심 연출을 함께 살린 시리즈입니다.',
    credits: { Client: '전남영상위원회', Series: '최수종의 여행사담', Platform: 'YouTube', Type: 'Photo Content' }
  },
  {
    cat: 'youtube', displayCat: 'TRAVEL FILM', client: '전남영상위원회', title: '순천만국가정원',
    year: '2023', duration: '01:00', format: '16:9', bg: 'bg-4',
    thumb: 'assets/portfolio/thumb-qYtV5fbjuYg.png',
    videoUrl: 'https://youtu.be/qYtV5fbjuYg',
    desc: '순천만국가정원의 공간과 색감을 짧은 호흡으로 압축한 트래블 필름. 장소의 인상을 중심으로 구성한 여행 아카이브 영상입니다.',
    credits: { Client: '전남영상위원회', Series: 'Travel Ver.', Platform: 'YouTube', Type: 'Travel Film' }
  },
  {
    cat: 'youtube', displayCat: 'DOCUMENTARY', client: '적당한생활', title: '적당한생활, 제로웨이스트 잡화점',
    year: '2023', duration: '11:15', format: '16:9', bg: 'bg-5',
    thumb: 'assets/portfolio/thumb-opBc2yvg-XU.png',
    videoUrl: 'https://youtu.be/opBc2yvg-XU',
    desc: '제로웨이스트 잡화점 적당한생활의 운영 철학과 공간 이야기를 기록한 다큐멘터리. 지역 상점의 태도와 일상을 차분하게 따라가는 콘텐츠입니다.',
    credits: { Client: '적당한생활', Series: '다큐멘터리', Platform: 'YouTube', Type: 'Documentary' }
  },
  {
    cat: 'youtube', displayCat: 'DOCUMENTARY', client: '문화의거리', title: '문화의거리, 리노베이션',
    year: '2023', duration: '10:31', format: '16:9', bg: 'bg-6',
    thumb: 'assets/portfolio/thumb-CZAYgK1t1Xk.png',
    videoUrl: 'https://youtu.be/CZAYgK1t1Xk',
    desc: '문화의거리 공간 변화와 지역 맥락을 기록한 다큐멘터리. 리노베이션 이후의 분위기와 현장 이야기를 중심으로 구성했습니다.',
    credits: { Client: '문화의거리', Series: '다큐멘터리', Platform: 'YouTube', Type: 'Documentary' }
  },
  {
    cat: 'youtube', displayCat: 'YOUTUBE CONTENT', client: '최수종의 여행사담', title: '최수종의 여행사담 / 유튜브 콘텐츠 (해남편)',
    year: '2024', duration: '02:13', format: '16:9', bg: 'bg-7',
    thumb: 'assets/portfolio/thumb-m7r4tq6D0nU.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=m7r4tq6D0nU',
    desc: '해남의 풍경과 이동 동선을 경쾌하게 풀어낸 여행사담 유튜브 콘텐츠. 짧은 러닝타임 안에 지역의 인상을 압축한 에피소드입니다.',
    credits: { Client: '전남영상위원회', Series: '최수종의 여행사담', Platform: 'YouTube', Type: 'YouTube Content' }
  },
  {
    cat: 'youtube', displayCat: 'TRAVEL FILM', client: '전남영상위원회', title: '순천동천 벚꽃피크닉',
    year: '2022', duration: '02:38', format: '16:9', bg: 'bg-8',
    thumb: 'assets/portfolio/thumb-xg4mGd9fjss.png',
    videoUrl: 'https://youtu.be/xg4mGd9fjss',
    desc: '순천동천의 봄 풍경과 벚꽃 시즌의 분위기를 담아낸 트래블 필름. 산책하듯 흘러가는 리듬으로 계절감을 전달합니다.',
    credits: { Client: '전남영상위원회', Series: 'Travel Ver.', Platform: 'YouTube', Type: 'Travel Film' }
  },
  {
    cat: 'youtube', displayCat: 'TRAVEL FILM', client: '전남영상위원회', title: '세계 5대 연안습지 순천만',
    year: '2023', duration: '02:39', format: '16:9', bg: 'bg-1',
    thumb: 'assets/portfolio/thumb-JspjhWnReA0.png',
    videoUrl: 'https://youtu.be/JspjhWnReA0',
    desc: '순천만의 습지 풍경과 자연 생태의 결을 시네마틱하게 담은 트래블 필름. 공간의 스케일과 분위기를 중심으로 편집한 영상입니다.',
    credits: { Client: '전남영상위원회', Series: 'Travel Ver.', Platform: 'YouTube', Type: 'Travel Film' }
  },
  {
    cat: 'youtube', displayCat: 'YOUTUBE CONTENT', client: '최수종의 여행사담', title: '최수종의 여행사담 / 유튜브 콘텐츠 (진도편)',
    year: '2024', duration: '02:37', format: '16:9', bg: 'bg-2',
    thumb: 'assets/portfolio/thumb-Pq2AJTzi7rY.jpg',
    videoUrl: 'https://youtu.be/Pq2AJTzi7rY?si=dowgAK8w64QXxKpa',
    desc: '진도의 바다와 노을, 지역 풍경을 중심으로 전개되는 여행사담 유튜브 콘텐츠. 지역의 정서를 짧은 호흡 안에 담아낸 에피소드입니다.',
    credits: { Client: '전남영상위원회', Series: '최수종의 여행사담', Platform: 'YouTube', Type: 'YouTube Content' }
  },
  {
    cat: 'youtube', displayCat: 'DOCUMENTARY', client: '친환경카페', title: 'NO플라스틱 YES친환경카페',
    year: '2023', duration: '09:59', format: '16:9', bg: 'bg-3',
    thumb: 'assets/portfolio/thumb-AM7M0Y5S4Fs.png',
    videoUrl: 'https://youtu.be/AM7M0Y5S4Fs',
    desc: '친환경 카페의 운영 방식과 가치관을 담아낸 다큐멘터리. 플라스틱 사용을 줄이는 실천과 공간의 분위기를 함께 기록했습니다.',
    credits: { Client: '친환경카페', Series: '다큐멘터리', Platform: 'YouTube', Type: 'Documentary' }
  },
  {
    cat: 'youtube', displayCat: 'TRAVEL FILM', client: '전남영상위원회', title: '순천 낙안읍성',
    year: '2023', duration: '02:12', format: '16:9', bg: 'bg-4',
    thumb: 'assets/portfolio/thumb-m3jKpl8R_ws.png',
    videoUrl: 'https://youtu.be/m3jKpl8R_ws',
    desc: '낙안읍성의 풍경과 공간 결을 짧게 기록한 트래블 필름. 전통적 장소성이 살아 있는 순간들을 감각적으로 묶어냈습니다.',
    credits: { Client: '전남영상위원회', Series: 'Travel Ver.', Platform: 'YouTube', Type: 'Travel Film' }
  },
  {
    cat: 'youtube', displayCat: 'YOUTUBE CONTENT', client: '최수종의 여행사담', title: '최수종의 여행사담 / 유튜브 콘텐츠 (장성편)',
    year: '2024', duration: '02:11', format: '16:9', bg: 'bg-5',
    thumb: 'assets/portfolio/thumb-_OrFyc5XiTk.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=_OrFyc5XiTk',
    desc: '장성의 향기와 풍경을 가볍게 풀어낸 여행사담 유튜브 콘텐츠. 지역의 장소감을 짧은 영상 문법으로 정리한 에피소드입니다.',
    credits: { Client: '전남영상위원회', Series: '최수종의 여행사담', Platform: 'YouTube', Type: 'YouTube Content' }
  },
  {
    cat: 'youtube', displayCat: 'PHOTO CONTENT', client: '최수종의 여행사담', title: '최수종의 여행사담 x 전남배우 콜라보 화보촬영 (장성)',
    year: '2025', duration: '07:26', format: '16:9', bg: 'bg-6',
    thumb: 'assets/portfolio/thumb-0tSjNRZUKHw.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=0tSjNRZUKHw&t=159s',
    gallery: galleryRange('0tSjNRZUKHw', 10),
    desc: '장성 로케이션과 전남배우 협업 화보 촬영을 중심으로 전개한 유튜브 콘텐츠. 공간의 인상과 스타일링 비주얼을 함께 보여줍니다.',
    credits: { Client: '전남영상위원회', Series: '최수종의 여행사담', Platform: 'YouTube', Type: 'Photo Content' }
  },
  {
    cat: 'youtube', displayCat: 'TRAVEL FILM', client: '전남영상위원회', title: '순천 와온해변',
    year: '2023', duration: '02:09', format: '16:9', bg: 'bg-7',
    thumb: 'assets/portfolio/thumb-U-P9s3iJ-DU.png',
    videoUrl: 'https://youtu.be/U-P9s3iJ-DU',
    desc: '순천 와온해변의 석양과 해변 풍경을 중심으로 엮은 트래블 필름. 바다의 분위기와 이동감을 시각적으로 정리한 영상입니다.',
    credits: { Client: '전남영상위원회', Series: 'Travel Ver.', Platform: 'YouTube', Type: 'Travel Film' }
  },
  {
    cat: 'youtube', displayCat: 'YOUTUBE CONTENT', client: '쉴무비', title: '영화가 있는 밤, 쉴무비',
    year: '2024', duration: '01:11', format: '16:9', bg: 'bg-8',
    thumb: 'assets/portfolio/thumb-BviaZS_zpIk.png',
    videoUrl: 'https://www.youtube.com/watch?v=BviaZS_zpIk&t=10s',
    desc: '야외 상영 프로그램 쉴무비의 분위기와 관람 경험을 짧게 소개하는 유튜브 콘텐츠. 행사 무드와 공간감을 중심에 둔 영상입니다.',
    credits: { Client: '쉴무비', Series: 'YouTube Content', Platform: 'YouTube', Type: 'YouTube Content' }
  },
  {
    cat: 'youtube', displayCat: 'TRAVEL FILM', client: '순천시', title: '전라남도 순천 미식여행',
    year: '2023', duration: '01:59', format: '16:9', bg: 'bg-1',
    thumb: 'assets/portfolio/thumb-9mkHCLEVWBw.png',
    videoUrl: 'https://youtu.be/9mkHCLEVWBw',
    desc: '순천의 음식과 지역 미식을 경쾌하게 소개하는 트래블 필름. 장소 소개와 먹거리 경험을 짧고 직관적으로 전달합니다.',
    credits: { Client: '순천시', Series: 'Travel Ver.', Platform: 'YouTube', Type: 'Travel Film' }
  },
  {
    cat: 'youtube', displayCat: 'TRAVEL FILM', client: '전남영상위원회', title: '순천 선암사 겹벚꽃',
    year: '2023', duration: '03:57', format: '16:9', bg: 'bg-2',
    thumb: 'assets/portfolio/thumb-pAGt0-GX7bc.png',
    videoUrl: 'https://youtu.be/pAGt0-GX7bc',
    desc: '선암사의 겹벚꽃 시즌을 시네마틱하게 담아낸 트래블 필름. 계절 풍경과 사찰 공간의 정서를 차분하게 기록했습니다.',
    credits: { Client: '전남영상위원회', Series: 'Travel Ver.', Platform: 'YouTube', Type: 'Travel Film' }
  }
];
