## 📌 목차

- [1. 프로젝트 개요](#1-프로젝트-개요)
- [2. 환경 세팅](#2-환경-세팅)
- [3. 프로젝트 구조 설계](#3-프로젝트-구조-설계)
- [4. 초기 코드 정리](#4-초기-코드-정리)
- [5. 개발 규칙 설정 (ESLint)](#5-개발-규칙-설정-eslint)
- [6. 실행 방법](#6-실행-방법)

---

## 1. 프로젝트 개요

이 프로젝트는 React 기본기를 익히기 위한 **카운터 앱**이다.

### 📦 구성 컴포넌트

- `<App />` : 부모 컴포넌트
- `<Viewer />` : 현재 카운터 값을 보여주는 컴포넌트
- `<Controller />` : 증가 / 감소 버튼을 담당하는 컴포넌트

---

## 2. 환경 세팅

### ⚙️ Vite로 프로젝트 생성

```bash
npm create vite@latest
````

### 📌 설정 값

* Project name: `section06`
* Framework: `React`
* Variant: `JavaScript`

---

### 📦 의존성 설치

```bash
npm install
```

---

### ▶️ 실행

```bash
npm run dev
```

---

## 3. 프로젝트 구조 설계

기본 구조는 다음과 같다:

```
App
 ├── Viewer (카운터 출력)
 └── Controller (버튼 UI)
```


---

## 4. 초기 코드 정리

### 📁 App.jsx 초기 세팅

```jsx
import "./App.css";

function App() {
  return <>counter app</>;
}

export default App;
```

위 코드로 초기에는 UI 구조만 확인하기 위해 최소 코드로 구성

---

### 🧹 불필요 파일 제거

다음 파일 삭제:

* `public/vite.svg`
* `src/assets/react.svg`

---

## 5. 개발 규칙 설정 (ESLint)

코드 작성 연습을 위해 ESLint 일부 규칙 비활성화

### 📁 `.eslintrc.cjs`

```js
rules: {
  "no-unused-vars": "off",
  "react-prop-types": "off"
}
```

---

## 6. 실행 방법

프로젝트 실행:

```bash
npm run dev
```

브라우저 접속:

```
http://localhost:5173
```

---
