
# 📚 목차

- [4.1 React.js 를 소개합니다](#41-reactjs-를-소개합니다)
- [4.2 첫 React App 생성하기](#42-첫-react-app-생성하기)

---

# 4.1 React.js 를 소개합니다
# ⚛️ React 핵심 개념 및 DOM 최적화

## 📌 개요

이 문서는 React의 핵심 장점과, 왜 Virtual DOM이 필요한지를 **DOM 조작 성능 문제**를 통해 설명합니다.

---

## 🚀 React의 핵심 장점

### 1. 컴포넌트 기반 구조 (Component-Based Architecture)

* UI를 재사용 가능한 단위(컴포넌트)로 분리하여 개발
* 유지보수, 확장성, 협업에 유리

### 2. 선언형 방식 (Declarative UI)

* 상태(state)가 변경되면 UI는 자동으로 업데이트됨
* 직접 DOM을 조작할 필요 없음 (명령형 → 선언형)

### 3. 빠른 업데이트 (핵심 기술)

* 실제 DOM 조작은 비용이 크고 느림
* React는 Virtual DOM을 사용하여 변경 사항을 최소화함

---

## ❌ 비효율적인 DOM 조작 방식

```javascript
const list = document.getElementById("list");

for (let i = 0; i < 3000; i++) {
  // 매 반복마다 DOM 수정 발생 → 성능 매우 안 좋음
  list.innerHTML += `<li>Item ${i}</li>`;
}
````

### 🔥 문제점

* `innerHTML +=` 는 기존 DOM을 계속 다시 파싱
* 3000번 반복 → 3000번 DOM 업데이트
* 브라우저 성능 저하

---

## ✅ DOM 최적화 방식 (버퍼 활용)

```javascript
let html = "";

for (let i = 0; i < 3000; i++) {
  // 메모리(버퍼)에 먼저 저장
  html += `<li>Item ${i}</li>`;
}

// 단 한 번만 DOM 업데이트
list.innerHTML = html;
```

### ✅ 개선 효과

* DOM 업데이트 3000번 → 1번
* 성능 크게 향상

---

## ⚛️ React의 해결 방식

위의 예시를 보면 알 수 있듯이, **DOM 업데이트를 최소화하는 것이 성능 최적화의 핵심**입니다.

하지만 이 최적화를 개발자가 매번 직접 신경 쓰는 것은 현실적으로 매우 어렵습니다.

### ❗ 왜 직접 최적화하기 어려운가?

* 어떤 DOM이 변경되는지 항상 추적해야 함
* 불필요한 렌더링을 스스로 방지해야 함
* 이벤트가 많아질수록 로직이 복잡해짐
* 서비스 규모가 커질수록 유지보수가 거의 불가능해짐

👉 즉,

> **"DOM을 최소한으로 수정해야 한다"는 것은 맞지만, 이를 매번 수동으로 처리하는 것은 비효율적이다.**

---

## 🚀 React가 해결해주는 방식 (Virtual DOM)

React는 이러한 문제를 해결하기 위해 **Virtual DOM**이라는 개념을 사용합니다.

### 💡 Virtual DOM의 역할

* 실제 DOM이 아닌, 메모리 상의 가벼운 DOM 트리
* 변경 사항을 이곳에서 먼저 계산
* 여러 업데이트를 모아서 한 번에 처리 (Batching)

---

## 🎯 결론

React는 단순한 UI 라이브러리가 아니라,

> **DOM 업데이트를 최소화하여 성능을 최적화하는 구조를 자동으로 제공하는 도구**입니다.

* 컴포넌트 구조 → 개발 생산성 향상
* 선언형 방식 → 코드 가독성 증가
* Virtual DOM → 성능 최적화 (핵심)

---

# 4.2 첫 React App 생성하기

## 📌 개요

기존 방식으로 React 프로젝트를 구성하려면
여러 설정을 수동으로 해야 하기 때문에 번거롭습니다.

이를 해결하기 위해 **Vite**라는 차세대 프론트엔드 빌드 도구를 사용합니다.

👉 참고로 React 공식 문서에서도 Vite 사용을 권장합니다.

---

## 🚀 React 프로젝트 생성 과정

### 1️⃣ Node.js 패키지 생성

프로젝트 생성을 위해 아래 명령어 실행

```bash
npm create vite@latest
```

---

2️⃣ 프로젝트 설정

* 프로젝트 이름 : `section04`
* 프레임워크 선택 : `React`
* 언어 선택 : `JavaScript`

👉 완료되면
`section04` 폴더와 기본 프로젝트 구조가 자동 생성됨

---

### 3️⃣ 의존성 설치

```bash
npm install
```

### 💡 package.json 설명

* `dependencies`
  → 실제 서비스 실행에 필요한 라이브러리

* `devDependencies`
  → 개발 환경에서만 필요한 도구 (빌드, 린트 등)

👉 `npm install` 실행 시
이 정보를 package.json 정보 기반으로 필요한 라이브러리들이 자동 설치됨

---

## 📂 프로젝트 구조 이해

### 📁 public 폴더

* 정적인 파일 저장
* 예: 폰트, 이미지, 동영상

### 📁 src 폴더

* 실제 코드 작성 공간
* JavaScript, CSS, JSX 파일 포함

### 📄 JSX

* React에서 사용하는 문법 확장자
* JavaScript 안에서 HTML처럼 UI 작성 가능

### 📁 src/assets

* public과 동일하게 정적 파일 저장 가능
* 차이점: 번들링 과정에 포함됨

---

## ⚙️ 기타 설정 파일

### 📄 .eslintrc.cjs

* 코드 스타일을 통일하기 위한 설정 파일
* 협업 시 매우 중요

---

## ▶️ 프로젝트 실행 방법

### package.json 의 scripts

package.json 파일의 script 항목에 4가지 명령어 (dev, build,lint, preview) 확인할 수 있다.

```json
"scripts": {
  "dev": "...",
  "build": "...",
  "lint": "...",
  "preview": "..."
}
```

### 주요 명령어

```bash
npm run dev
```

👉 개발 서버 실행

---

## 🌐 실행 결과

* 콘솔에 `localhost:포트번호` 출력
* 해당 주소 접속 시 React 앱 실행 확인 가능

### 💡 유용한 단축키

* `o` → 브라우저 자동 실행
* `h` → 도움말 (단축키 목록 확인)

---
