# PDMS (Project Design Management System)

디자인 요청/배정/공수(작업 시간)를 관리하는 사내 웹 애플리케이션입니다. React + TypeScript + Vite로 개발되었으며, 인증과 데이터 저장소로 Firebase를 사용합니다.

## 주요 기능

- **로그인 / 회원가입 / 비밀번호 재설정** — Firebase Authentication 기반, 이메일 링크를 통한 비밀번호 재설정 흐름 포함 (`LoginPage`, `SignUpPage`, `FindPasswordPage`, `ResetPasswordPage`)
- **디자인 요청 관리** — 요청 등록/상세/필터/검색, 요청 상태(대기/진행/완료/취소) 관리, 코멘트 (`RequestForm`, `RequestDetail`, `RequestFilter`, `Comment`)
- **디자이너 배정** — 요청 건에 디자이너를 배정하는 모달 및 배정 로직, 배정 대상별 요청 리스트 (`AssignDesigner`, `AssignDesignerModal`, `DesignerRequestList`, `ManagerRequestList`, `RequesterRequestList`)
- **역할(Role) 기반 화면 전환** — 요청자(Requester) / 디자이너(Designer) / 매니저(Manager) 역할에 따라 다른 뷰 제공 (`SwitchRole`, `Requester`, `Designer`, `Manager`)
- **공수(작업 시간) 관리** — 내부 공수, 외부 공수, 채널별 외부 공수를 각각 집계·필터링 (`InWorkHour`, `ChannelWorkHour`, 관련 Filter 컴포넌트)
- **대시보드 / 통계** — Chart.js 기반 차트와 데이터 라벨로 요청/공수 현황 시각화 (`DashBoard`, `DashBoardFilter`)
- **캘린더** — 일정/배정일 기준 데이터 확인 (`DateCalendar`, `react-day-picker`)
- **CSV 내보내기** — 요청/공수 데이터를 CSV로 다운로드 (`ExportCSV`)

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| 프레임워크 | React 19, TypeScript, Vite 6 |
| 라우팅 | React Router (HashRouter) |
| 스타일 | styled-components, Sass |
| 차트 | Chart.js, chartjs-plugin-datalabels |
| 백엔드/인증 | Firebase (Auth, Firestore/Functions 등) |
| 기타 | react-day-picker(캘린더), @emoji-mart(이모지) |

## 프로젝트 구조

```
src/
├── pages/          # 라우트 단위 페이지 (Login, SignUp, Main, 비밀번호 재설정 등)
├── components/      # 요청/배정/공수/대시보드 등 도메인별 컴포넌트
├── utils/           # 인증(authClient) 등 공통 유틸
├── style/           # 전역 스타일, 폰트
├── @types/          # 타입 정의
└── firebaseconfig.tsx  # Firebase 초기화 설정
```

라우팅은 `App.tsx`에서 `HashRouter`로 관리하며, Firebase 인증 상태(`onAuthStateChanged`)에 따라 `/`(로그인) ↔ `/main`(메인) 접근을 제어합니다. 비밀번호 재설정은 Firebase 이메일 링크의 쿼리 파라미터(`mode=resetPassword&oobCode=...`)를 해시 라우트로 브리지하여 처리합니다.

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev            # 기본
pnpm dev:dev         # development 모드
pnpm dev:prod        # production 모드

# 빌드
pnpm build
pnpm build:dev
pnpm build:prod

# 미리보기 / 린트
pnpm preview
pnpm lint
```

## 배포 산출물

`pdms/` 디렉토리에 빌드된 정적 파일(`index.html`, `assets/*.js`)이 포함되어 있습니다.
