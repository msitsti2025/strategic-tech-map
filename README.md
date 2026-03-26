# 국가 전략기술 분류체계 현황맵

> 19개 국가 전략기술 분야에 적용되는 5개 법령별 분류체계를 탐색·분석하는 인터랙티브 웹 플랫폼

🔗 **Live Demo**: [https://msitsti2025.github.io/strategic-tech-map/](https://msitsti2025.github.io/strategic-tech-map/)

---

## 📌 개요

우리나라 정부는 19개 국가 전략기술 분야의 세부기술에 대해 **연구개발 육성, 조세 특례, 기술유출 방지** 등 다양한 정책 수단을 법령별로 다르게 적용하고 있습니다.

이 플랫폼은 각 세부기술이 어떤 법령 체계에 포함되는지를 한눈에 파악할 수 있도록 시각화합니다.

---

## ⚖️ 5대 분류체계

| 법령 | 분류명 | 주요 목적 |
|------|--------|-----------|
| 국가전략기술육성법 | 국가전략기술 (12대 분야, 50개) | 연구개발 육성, 유망기업 지원 |
| 조세특례제한법 | 국가전략기술 (8대 분야, 81개) | 기업 R&D·시설투자 세액공제 |
| 조세특례제한법 | 신성장원천기술 (14대 구분, 284개) | 기업 R&D·시설투자 세액공제 |
| 국가첨단전략산업법 | 국가첨단전략기술 (6대 분야, 19개) | 특화단지 등 산업지원, 기술유출 방지 |
| 산업기술보호법 | 국가핵심기술 (13개 분야, 79개) | 기술유출 방지 (사전승인) |

---

## 🚀 기능

- **카드뷰**: 19개 전략기술 분야를 카드 형태로 탐색, 클릭 시 세부기술 상세보기
- **매트릭스뷰**: 분야 × 법령 교차 현황을 한눈에 파악
- **통계뷰**: 법령별/분야별 세부기술 수, 법령 간 중복 적용 현황 시각화
- **법령 필터**: 특정 법령에 해당하는 기술만 필터링
- **세부기술 검색**: 기술명으로 즉시 검색

---

## 📂 파일 구조

```
strategic-tech-map/
├── index.html    # 메인 앱 (단일 파일)
├── data.js       # 전략기술 데이터
├── map3d.html    # 2026년 정부 R&D 예산 3D 시각화
├── map3d.json    # 3D 시각화용 데이터
└── README.md
```

---

## 🛠️ GitHub Pages에 올리는 방법

### 1단계: GitHub 저장소 생성

1. [GitHub](https://github.com) 로그인
2. 우측 상단 **`+`** → **New repository** 클릭
3. Repository name: `strategic-tech-map` (원하는 이름으로 변경 가능)
4. **Public** 선택
5. **Create repository** 클릭

### 2단계: 파일 업로드

**방법 A: 웹 업로드 (가장 쉬움)**

1. 생성된 저장소 페이지에서 **Add file** → **Upload files** 클릭
2. `index.html`, `data.js`, `README.md` 파일을 드래그하여 업로드
3. **Commit changes** 클릭

**방법 B: Git 명령어**

```bash
git init
git add .
git commit -m "첫 배포: 국가 전략기술 분류체계 현황맵"
git branch -M main
git remote add origin https://github.com/[your-username]/strategic-tech-map.git
git push -u origin main
```

### 3단계: GitHub Pages 활성화

1. 저장소 페이지 → **Settings** 탭 클릭
2. 좌측 메뉴 **Pages** 클릭
3. **Source**: `Deploy from a branch` 선택
4. **Branch**: `main` / `/ (root)` 선택
5. **Save** 클릭
6. 약 1~2분 후 `https://[your-username].github.io/strategic-tech-map/` 에서 접속 가능

---

## 📊 데이터 출처

- 국가전략기술육성법 시행령
- 조세특례제한법 시행규칙
- 국가첨단전략산업법 고시
- 산업기술보호법 고시
- 범부처 기술관리체계 현황맵 (2026.03 기준)

---

## 📝 데이터 업데이트 방법

`data.js` 파일의 `TECH_DATA` 객체를 수정하면 됩니다.

각 세부기술 항목은 다음 구조를 따릅니다:

```javascript
{
  name: "기술명",
  laws: {
    strategic: true,      // 국가전략기술육성법 포함 여부
    tax_strategic: false, // 조특법-국가전략기술 포함 여부
    tax_growth: true,     // 조특법-신성장원천기술 포함 여부
    advanced: false,      // 국가첨단전략산업법 포함 여부
    protection: true      // 산업기술보호법 포함 여부
  }
}
```

---

*Built with Vibe Coding × 바이브 코딩*
