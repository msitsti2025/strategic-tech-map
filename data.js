const TECH_DATA = {
  meta: {
    title: "국가 전략기술 분류체계 현황",
    laws: [
      { id: "strategic", name: "국가전략기술육성법", short: "전략육성법", color: "#1a56db", sub: "국가전략기술" },
      { id: "tax_strategic", name: "조세특례제한법(국가전략기술)", short: "조특법-전략", color: "#7e3af2", sub: "국가전략기술" },
      { id: "tax_growth", name: "조세특례제한법(신성장원천기술)", short: "조특법-신성장", color: "#057a55", sub: "신성장원천기술" },
      { id: "advanced", name: "국가첨단전략산업법", short: "첨단전략산업법", color: "#d03801", sub: "국가첨단전략기술" },
      { id: "protection", name: "산업기술보호법", short: "산업기술보호법", color: "#6b7280", sub: "국가핵심기술" }
    ]
  },
  sectors: [
    {
      id: 1, name: "반도체", icon: "💾",
      laws: {
        strategic: "차세대 전자정보 디바이스 / 첨단 소·부·장",
        tax_strategic: "반도체·디스플레이",
        tax_growth: "반도체",
        advanced: "반도체",
        protection: "반도체, 전기전자"
      },
      subsectors: [
        {
          name: "1-1. 메모리 반도체",
          items: [
            { name: "DRAM 설계·공정·소자", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "낸드플래시 설계·공정·소자", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "적층형 메모리(HBM 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "비휘발성·차세대 메모리(MRAM, PRAM 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: false } }
          ]
        },
        {
          name: "1-2. 시스템·AI 반도체",
          items: [
            { name: "AI 반도체(7나노 이하 고속컴퓨팅 SoC)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "화합물·전력반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true } },
            { name: "센서 반도체(MEMS, CMOS 이미지센서)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "품목별 반도체(DDI, 차량용 등)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "1-3. 반도체 공정·소재·부품·장비",
          items: [
            { name: "파운드리 공정(7nm 이하급)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "반도체 소재·부품·장비(포토레지스트, 불화수소 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "반도체 패키징·후공정(FO-WLP 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } }
          ]
        }
      ]
    },
    {
      id: 2, name: "디스플레이", icon: "🖥️",
      laws: {
        strategic: "반도체·디스플레이",
        tax_strategic: "디스플레이",
        tax_growth: "디스플레이",
        advanced: "디스플레이",
        protection: "차세대 전자정보 디바이스"
      },
      subsectors: [
        {
          name: "2-1. 유기발광 디스플레이",
          items: [
            { name: "AMOLED 패널 설계·제조·공정·구동", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: false } },
            { name: "유기발광 소재·부품·장비", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: false } }
          ]
        },
        {
          name: "2-2. 무기발광 디스플레이",
          items: [
            { name: "퀀텀닷(QD) 소재 적용 패널", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "마이크로 LED 패널(칩 크기 50㎛ 이하)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "무기발광 소재·부품·장비", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "2-3. 프리폼·공간 디스플레이",
          items: [
            { name: "프리폼 디스플레이(롤러블, 스트레처블 등)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "차세대 차량용·VR/AR 디스플레이", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 3, name: "AI·SW", icon: "🤖",
      laws: {
        strategic: "인공지능",
        tax_strategic: "인공지능",
        tax_growth: "지능정보, 차세대 SW·보안",
        advanced: "-",
        protection: "-"
      },
      subsectors: [
        {
          name: "3-1. AI 인프라 고도화",
          items: [
            { name: "AI 컴퓨팅 인프라(서버, 스토리지, 냉각 등)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "클라우드 운영·관리(SaaS/PaaS/IaaS)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "3-2. AI 모델링",
          items: [
            { name: "AI 모델 경량화·최적화", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "AGI 원천기술(멀티모달, 에이전트 AI 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "3-3. AI 산업적용",
          items: [
            { name: "산업 활용·혁신 AI(전문영역별 특화)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "3-4. AI 안전(Safety)",
          items: [
            { name: "안전·신뢰 AI(데이터 공정성, 투명성 등)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "3-5. SW·빅데이터",
          items: [
            { name: "SW 내재화·분산 병렬·CAD·CAE 기술", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "빅데이터 수집·분석·예측", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 4, name: "양자", icon: "⚛️",
      laws: {
        strategic: "양자",
        tax_strategic: "지능정보",
        tax_growth: "정보통신",
        advanced: "-",
        protection: "-"
      },
      subsectors: [
        {
          name: "4-1. 양자 컴퓨팅",
          items: [
            { name: "양자컴퓨팅 하드웨어·시스템(초전도 1,000큐비트급 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "4-2. 양자 통신",
          items: [
            { name: "양자통신(양자암호통신, 양자네트워크 등)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "4-3. 양자 센싱",
          items: [
            { name: "양자센싱(관성·시간·자기장·광기반 센싱)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "4-4. 양자 알고리즘·SW",
          items: [
            { name: "양자 알고리즘, 오류정정, 응용SW", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 5, name: "통신", icon: "📡",
      laws: {
        strategic: "차세대 통신",
        tax_strategic: "통신",
        tax_growth: "차세대 방송통신, 항공·우주",
        advanced: "-",
        protection: "-"
      },
      subsectors: [
        {
          name: "5-1. LTE·5G",
          items: [
            { name: "LTE/LTE-Adv 시스템 설계", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "5G·5G-Adv 시스템 설계(빔포밍, MIMO)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "5-2. 6G·위성통신",
          items: [
            { name: "6G 이동통신(마이크로초 지연, Tera bps급)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "오픈랜(Open-RAN)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } },
            { name: "5G·6G 위성통신(저궤도 위성통신)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "5-3. 통신 부품·장비",
          items: [
            { name: "5G·6G 고효율 통신부품(RF·안테나, 광통신)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 6, name: "사이버보안", icon: "🔐",
      laws: {
        strategic: "사이버보안",
        tax_strategic: "지능정보, 차세대 SW·보안",
        tax_growth: "-",
        advanced: "-",
        protection: "-"
      },
      subsectors: [
        {
          name: "6-1. 데이터·AI 보안",
          items: [
            { name: "데이터·AI 보안(PET, AI특화 사이버보안, 양자내성암호)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "6-2. 디지털 취약점 분석·침해대응",
          items: [
            { name: "SW 공급망 무결성 검증, 랜섬웨어 탐지·복구", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "네트워크·클라우드 보안(제로트러스트)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "6-3. 산업보안·블록체인",
          items: [
            { name: "지능형 영상보안", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "융합보안(물리-가상 융합, 모빌리티 등)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "블록체인(P2P, 합의·계약검증, 분산저장)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 7, name: "첨단바이오", icon: "🧬",
      laws: {
        strategic: "첨단바이오",
        tax_strategic: "바이오의약품, 백신",
        tax_growth: "바이오·헬스",
        advanced: "바이오",
        protection: "생명공학"
      },
      subsectors: [
        {
          name: "7-1. 의약품",
          items: [
            { name: "바이오의약품(유전자·세포치료, 항체 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "화합물의약품(혁신형 신약·개량신약)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "임상 평가(1상·2상·3상)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "바이오의약품 원료·소재·부품·장비", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: true, protection: false } }
          ]
        },
        {
          name: "7-2. 백신",
          items: [
            { name: "감염병 백신·치료(첨단 백신개발 플랫폼)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "백신 원료·원부자재·생산장비", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-3. 합성생물학",
          items: [
            { name: "합성생물학(AI기반 모델링, 유전자합성, 바이오파운드리)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-4. AI-바이오",
          items: [
            { name: "디지털 헬스데이터 분석·정밀의료 플랫폼", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-5. 바이오 농수산·식품",
          items: [
            { name: "기능성 물질, 신품종 종자, 스마트팜 등", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-6. 바이오 화학",
          items: [
            { name: "바이오플라스틱, 바이오 화장품 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-7. 의료·진단기기",
          items: [
            { name: "유전자 검사기기, 암진단 기기, 감염병 진단기기", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: true, protection: true } },
            { name: "초음파 영상, 신체기능 복원 의료기기", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        }
      ]
    },
    {
      id: 8, name: "첨단로봇·제조", icon: "🦾",
      laws: {
        strategic: "첨단로봇·제조",
        tax_strategic: "-",
        tax_growth: "로봇, 지능정보",
        advanced: "로봇",
        protection: "로봇"
      },
      subsectors: [
        {
          name: "8-1. 로봇 제품·부품",
          items: [
            { name: "휴머노이드 로봇 구동기 및 프레임", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: true } },
            { name: "로봇 부품(시촉각 센싱, 모터·감속기·드라이버)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "제조용 로봇(반도체·디스플레이 생산, 협동 로봇)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: false } },
            { name: "서비스용 로봇(수술, 재활, 생활도우미)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: true } }
          ]
        },
        {
          name: "8-2. 로봇 지능기술",
          items: [
            { name: "로봇 자율이동(LLM·VLM 기반)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: true } },
            { name: "로봇 자율조작(맥락지능, 조작동작 자율생성)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } },
            { name: "인간-로봇 상호작용(소셜행동, AI 모델)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "8-3. 로봇 시스템 통합",
          items: [
            { name: "다중로봇 운영SW, 디지털 트윈, 스마트팩토리", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 9, name: "육상 모빌리티", icon: "🚗",
      laws: {
        strategic: "첨단 모빌리티",
        tax_strategic: "미래형 자동차",
        tax_growth: "-",
        advanced: "자동차·철도",
        protection: "미래형 운송 및 이동수단"
      },
      subsectors: [
        {
          name: "9-1. 자율주행",
          items: [
            { name: "자율주행 AI·SW 플랫폼(SDV 융합)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } },
            { name: "자율주행 HW플랫폼·센서(카메라, 레이더, 라이더)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: false } }
          ]
        },
        {
          name: "9-2. 친환경차",
          items: [
            { name: "전기동력 자동차(전기차 구동·충전시스템)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } },
            { name: "수소차(연료전지·수소저장 시스템)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } }
          ]
        },
        {
          name: "9-3. 내연기관차",
          items: [
            { name: "가솔린·LPG·디젤 엔진, 자동변속기", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: true, protection: true } }
          ]
        },
        {
          name: "9-4. 고속철도 차량",
          items: [
            { name: "고속철도차량 동력시스템, 차체", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: true, protection: true } }
          ]
        }
      ]
    },
    {
      id: 10, name: "우주·항공", icon: "🚀",
      laws: {
        strategic: "우주항공·해양, 첨단 모빌리티",
        tax_strategic: "-",
        tax_growth: "항공·우주",
        advanced: "방산",
        protection: "우주"
      },
      subsectors: [
        {
          name: "10-1. 우주",
          items: [
            { name: "우주 발사체(액체엔진, 구조물, 유도항법시스템)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: true } },
            { name: "인공위성(위성본체, 탑재체, SAR, 광학위성)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: true } },
            { name: "우주탐사(달착륙·표면탐사)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "10-2. 항공",
          items: [
            { name: "첨단 항공가스터빈 엔진(15,000lbf 이상)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: false } },
            { name: "무인비행체(드론, 자율비행 제어)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } },
            { name: "미래항공교통(AAM·UAM)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 11, name: "조선·해양", icon: "🚢",
      laws: {
        strategic: "지능정보, 첨단 소부장, 탄소중립 등",
        tax_strategic: "우주항공·해양",
        tax_growth: "미래형 운송 및 이동수단",
        advanced: "-",
        protection: "조선"
      },
      subsectors: [
        {
          name: "11-1. 조선",
          items: [
            { name: "고부가가치·친환경 선박(암모니아, 연료전지, 배터리)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true } },
            { name: "핵심기자재(디젤엔진, 크랭크샤프트, 프로펠러)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true } },
            { name: "액화가스 화물창, 친환경연료 공급장치", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "11-2. 운항",
          items: [
            { name: "선박 자율운항(AI 알고리즘SW, 통합제어관리)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "11-3. 해양자원",
          items: [
            { name: "해양자원탐사(심해물리탐사, 심해채광)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 12, name: "이차전지", icon: "🔋",
      laws: {
        strategic: "이차전지",
        tax_strategic: "이차전지",
        tax_growth: "에너지·환경",
        advanced: "이차전지",
        protection: "전기전자"
      },
      subsectors: [
        {
          name: "12-1. 리튬이온전지 및 핵심소재",
          items: [
            { name: "고에너지밀도 리튬이온전지(350Wh/kg급)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "하이니켈 양극재(Ni > 80~90%)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: false } },
            { name: "실리콘계 음극재(Si > 20%)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "분리막·전해질", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "12-2. 차세대 이차전지",
          items: [
            { name: "반·전고체전지(400Wh/kg)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "리튬금속전지, 리튬황전지", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "비리튬계 이온전지(나트륨, 흐름전지)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "12-3. 모듈-팩·관리시스템",
          items: [
            { name: "고에너지밀도 모듈-팩(210Wh/kg 이상)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: false } },
            { name: "배터리 지능형 통합관리시스템", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "12-4. 재사용·재활용",
          items: [
            { name: "사용후 배터리 진단·재사용·고순도 회수", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 13, name: "차세대 원자력", icon: "☢️",
      laws: {
        strategic: "차세대 원자력",
        tax_strategic: "-",
        tax_growth: "에너지·환경",
        advanced: "-",
        protection: "원자력"
      },
      subsectors: [
        {
          name: "13-1. 대형 원전",
          items: [
            { name: "원자로 핵심 소재·부품(냉각재펌프 등)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: true } },
            { name: "신형원전 표준설계, 대형원전 제조·운영", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "13-2. 소형 원자로",
          items: [
            { name: "경수형 SMR(설계·제조·건설)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "비경수형 SMR(고온가스로, 소듐냉각 등)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } },
            { name: "연구용 원자로(U-Mo 합금핵연료 등)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "13-3. 후행 핵주기",
          items: [
            { name: "방폐물 운반·저장·처분·원전 해체", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: true } }
          ]
        },
        {
          name: "13-4. 방사선 활용",
          items: [
            { name: "방사선이용 대형 공정시스템 검사", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 14, name: "수소", icon: "💧",
      laws: {
        strategic: "수소",
        tax_strategic: "수소",
        tax_growth: "-",
        advanced: "수소",
        protection: "에너지·환경, 탄소중립"
      },
      subsectors: [
        {
          name: "14-1. 수소 생산",
          items: [
            { name: "수전해 수소생산(고효율·고내구성 소재부품)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } },
            { name: "탄소포집 청정수소(블루·청록수소)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "14-2. 수소 저장·운송",
          items: [
            { name: "기체 수소 저장·운송(700기압, 1톤급 튜브트레일러)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } },
            { name: "액화 수소 저장·운송(액화플랜트, 극저온 펌프)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "14-3. 수소 활용",
          items: [
            { name: "연료전지(SOFC, 건설기계용, 발전용 연료전지)", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } },
            { name: "수소·암모니아 발전(가스터빈, 혼소·전소)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: true } },
            { name: "수소환원제철", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 15, name: "클린에너지·환경", icon: "🌱",
      laws: {
        strategic: "-",
        tax_strategic: "-",
        tax_growth: "에너지·환경, 탄소중립",
        advanced: "-",
        protection: "전기전자, 기계"
      },
      subsectors: [
        {
          name: "15-1. 재생에너지",
          items: [
            { name: "태양광(페로브스카이트 탠덤 전지, n형 대면적)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "풍력(8MW급 블레이드, 해상풍력 해저케이블)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "기타 재생에너지(지열, 바이오매스, 폐열)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "15-2. 발전·전력망·에너지효율화",
          items: [
            { name: "대형가스터빈, 증기터빈 부품 및 시스템", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "전력케이블(500kV급), 지능형 전력계통", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "히트펌프, 에너지관리시스템(EMS)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "15-3. 온실가스 감축 기술",
          items: [
            { name: "탄소 포집·활용·저장(CCUS)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "산업공정 연·원료 대체(시멘트, 반도체 공정 등)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "15-4. 오염저감·자원순환",
          items: [
            { name: "폐플라스틱 재활용, 생분해성 플라스틱", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "산업용 디젤엔진 배기규제 대응", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true } }
          ]
        }
      ]
    },
    {
      id: 16, name: "융복합 소재·부품", icon: "⚙️",
      laws: {
        strategic: "융복합 소재",
        tax_strategic: "첨단 소·부·장",
        tax_growth: "-",
        advanced: "-",
        protection: "금속"
      },
      subsectors: [
        {
          name: "16-1. 화학·고분자·섬유 소재",
          items: [
            { name: "극한성능 섬유, 섬유기반 전기전자 소재", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } },
            { name: "하이퍼플라스틱, 기능성 탄성소재(불소계)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } },
            { name: "탄소섬유복합재, 그래핀 기반 복합소재", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "16-2. 금속·세라믹 소재",
          items: [
            { name: "희토류·타이타늄·몰리브덴 등 금속 소재", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } },
            { name: "고순도 산화알루미늄, 세라믹 핵심소재", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "16-3. 철강",
          items: [
            { name: "고강도 철강판재, 전기강판, 스테인리스강", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true } },
            { name: "AI 기반 고로 조업 자동제어, 스마트 제조", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true } }
          ]
        },
        {
          name: "16-4. 기반 부품",
          items: [
            { name: "고정밀 롤러베어링·볼베어링, 볼스크류", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } },
            { name: "고압 컨트롤밸브, 터보식 펌프", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 17, name: "기계·장비", icon: "🔧",
      laws: {
        strategic: "-",
        tax_strategic: "-",
        tax_growth: "첨단 소·부·장",
        advanced: "-",
        protection: "기계"
      },
      subsectors: [
        {
          name: "17. 기계·장비",
          items: [
            { name: "첨단 머시닝센터, 터닝센터, 연삭가공기", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "레이저 가공장비, 방전가공기", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "친환경 굴착기, 중대형 굴착기(20톤 이상)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "초고속 승강기, 고정밀 5축 머시닝센터", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        }
      ]
    },
    {
      id: 18, name: "방위산업", icon: "🛡️",
      laws: {
        strategic: "우주항공·해양",
        tax_strategic: "-",
        tax_growth: "방위산업",
        advanced: "방산",
        protection: "(방산기술보호법)"
      },
      subsectors: [
        {
          name: "18. 방위산업",
          items: [
            { name: "유·무인기용 첨단 항공엔진 핵심 소재·부품(15,000lbf+)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: false } },
            { name: "추진체계(항공기·함정 엔진, 유도무기 등)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "군사위성체계(감시정찰·통신위성)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "유무인복합체계(자율임무, 통신·보안)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        }
      ]
    },
    {
      id: 19, name: "콘텐츠 기술", icon: "🎮",
      laws: {
        strategic: "-",
        tax_strategic: "-",
        tax_growth: "-",
        advanced: "콘텐츠, 지능형 디바이스",
        protection: "-"
      },
      subsectors: [
        {
          name: "19-1. 공간컴퓨팅(실감형 콘텐츠)",
          items: [
            { name: "VR·AR 콘텐츠, 4D 오감체험, 홀로그램", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: true, protection: false } },
            { name: "AR 디바이스 제조기술", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: true, protection: false } }
          ]
        },
        {
          name: "19-2. 문화 콘텐츠",
          items: [
            { name: "게임·영화·방송·애니메이션·웹툰 콘텐츠", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: true, protection: false } }
          ]
        }
      ]
    }
  ]
};
