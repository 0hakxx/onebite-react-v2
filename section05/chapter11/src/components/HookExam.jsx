// React Hooks란?
// 클래스 컴포넌트에서만 이용할 수 있었던 리액트의 특수한 기능들(State, Ref 등)을
// 함수 컴포넌트에서도 사용할 수 있도록 만든 함수들을 통칭해서 React Hooks라고 부른다.
// 2017년 이전 리액트에서는 State, Ref 등을 사용하려면 반드시 클래스 컴포넌트를 사용해야 했고,
// 함수 컴포넌트는 단순히 UI를 렌더링하는 용도로만 사용할 수 있었다. [web:6][web:7]
// 하지만 클래스 컴포넌트는 문법이 복잡하고 this 바인딩 등으로 인해 사용성이 떨어지는 단점이 있었다. [web:6]
// 그래서 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 쓸 수 있도록
// 마치 기능을 낚아채듯(hook) 가져와서 사용할 수 있게 만든 것이 React Hooks이다. [web:6][web:7]

// 방금 전에서 배운 useState, useRef가 대표적인 React Hooks이다. [web:6][web:7]
// 모든 리액트 훅의 이름은 앞에 반드시 'use'가 붙는다. [web:6][web:7]

// React Hooks 사용 규칙(중요):
// 1. 리액트 훅은 함수 컴포넌트 또는 커스텀 훅 내부에서만 호출할 수 있다. [web:7]
//    - 즉, 컴포넌트 함수 바깥(전역 스코프)에서 바로 useState() 등을 호출하면 오류가 발생한다. [web:7]
//      예) 아래 코드는 잘못된 코드
//      const state = useState();  // 컴포넌트 함수 밖에서 호출 → 에러

// 2. 리액트 훅은 조건문(if), 반복문(for, while 등), 중첩 함수 안에서 호출하면 안 된다. [web:7]
//    - 항상 컴포넌트 함수의 최상위에서 호출해야 한다. [web:7]
//      예) 아래 코드는 잘못된 코드
//      if (true) {
//        const state = useState(); // 조건문 안에서 호출 → 에러
//      }

// 3. 나만의 Hook(커스텀 훅)을 만들 수 있다. [web:4][web:8]
//    - 공통 로직을 하나의 함수로 뽑아 재사용할 수 있고,
//      이 커스텀 훅 안에서는 다른 리액트 훅(useState, useRef 등)을 자유롭게 사용할 수 있다. [web:4][web:8]
//    - 커스텀 훅도 리액트 훅이므로 이름 앞에 'use'를 붙이는 것이 규칙이다. [web:4][web:8]

// 아래는 hooks/useInput.jsx에서 만든 커스텀 훅을 사용하는 예시이다. [web:1][web:8]
import useInput from "./../hooks/useInput";

const HookExam = () => {
    // 커스텀 훅 useInput을 두 번 호출하여 서로 독립적인 상태 두 개를 만든다. [web:1][web:8]
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            {/* 첫 번째 input은 첫 번째 useInput 훅에서 관리하는 상태와 onChange를 사용한다. [web:1][web:8] */}
            <input value={input} onChange={onChange} />
            {/* 두 번째 input은 두 번째 useInput 훅에서 관리하는 상태와 onChange를 사용한다. [web:1][web:8] */}
            <input value={input2} onChange={onChange2} />
        </div>
    );
};

export default HookExam;
