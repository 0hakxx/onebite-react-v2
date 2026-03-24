import { useState, useRef } from "react";

/*
  🔥 useState vs useRef 핵심 차이

  ✔ useState
  - 값이 변경되면 "즉시 리렌더링 발생" -> UI에 바로 반영해야 하는 값 관리

  ✔ useRef
  - 값이 변경되어도 "리렌더링 발생 안함" -> 화면에 영향을 주지 않는 값 저장용 (내부 변수 같은 역할)

  그럼 결국 useRef 는 값을 저장하고, 리렌더링이 되지 않는 용도라면 일반 변수(count) 같은 걸로 처리해도 같은 거 아난가?
  🔥 useRef vs 일반 변수 차이
  ❌ 일반 변수
  - 렌더링 될 때마다 컴포넌트 함수 재실행하므로 다시 초기화됨 -> 값 유지 안됨
  ✔ useRef
  - 렌더링이 발생해도 값 유지됨 -> current에 값이 계속 누적됨

  결론 : useRef는 "리렌더링은 안 하지만 값은 유지되는 저장소"
*/

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 🔥 useRef: 값 변경해도 리렌더링 안됨 + 값 유지됨
  const countRef = useRef(0);

  // 🔥 DOM 접근용 ref (input 포커스 제어)
  const inputRef = useRef();

  // ❌ 일반 변수 (렌더링마다 초기화됨)
  let let_count = 0;

  const onChange = (e) => {

    /*
      ⚠️ 여기 핵심 포인트
      countRef.current →useRef이므로 값 유지 (누적됨)
      let_count → 일반 변수이므로 매 렌더링마다 0으로 초기화됨
    */

    countRef.current++;
    let_count++;

    console.log("useRef count:", countRef.current);
    console.log("let count:", let_count);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    // 🔥 유효성 검사 예시
    if (input.name === "") { // 사용자 입력 값이 비어있을 경우
      /*
        inputRef.current = 실제 DOM 요소
        👉 focus() = 해당 input으로 커서 이동(어디가 비었는지 바로 알려줌)
      */
      inputRef.current.focus();
      console.log(inputRef.current);
    }
  };

  return (
      <div>
        {/* ================= 이름 ================= */}
        <div>
          <input
              ref={inputRef}
              name="name"
              value={input.name}
              onChange={onChange}
              placeholder={"이름"}
          />
        </div>
        {/* ================= 생년월일 ================= */}
        <div>
          <input
              name="birth"
              value={input.birth}
              onChange={onChange}
              type="date"
          />
        </div>
        {/* ================= 국적 ================= */}
        <div>
          <select
              name="country"
              value={input.country}
              onChange={onChange}
          >
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
          </select>
        </div>
        {/* ================= 자기소개 ================= */}
        <div>
        <textarea
            name="bio"
            value={input.bio}
            onChange={onChange}
        />
        </div>
        <button onClick={onSubmit}>제출</button>
      </div>
  );
};
export default Register;