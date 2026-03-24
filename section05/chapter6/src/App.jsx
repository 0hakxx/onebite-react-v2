import "./App.css";
import { useState } from "react";

/*
  🔥 왜 일반 변수 대신 state를 사용하는가?

  일반 변수 (let, const)
  → 값이 바뀌어도 화면(UI)은 업데이트 안됨

  state (useState)
  → 값이 바뀌면 자동으로 리렌더링 발생
  → 화면(UI)이 즉시 최신 값으로 반영됨

  즉,
  "화면에 반영되는 값"은 반드시 state로 관리해야 함
*/

function App() {
    const state = useState();
    // console.log(state)
    // 출력 예: [undefined, function]

    const state1 = useState(0);
    // console.log(state1)
    // 출력 예: [0, function]

    // 구조 분해 할당 (실무에서 자주 쓰는 방식)
    const [state3, setState3] = useState(0);
    // state3 = 현재 값
    // setState3 = 값을 변경하는 함수 (호출 시 리렌더링 발생)

    // 전구 상태 (ON / OFF)
    const [light, setLight] = useState("OFF");
    // 초기값: OFF

    return (
        <>
            {/* ================= 전구 예제 ================= */}
            <div>
                {/*현재 light 값 출력*/}
                <h1>{light}</h1>
                <button
                    onClick={() => {
                        // 현재 값이 ON이면 OFF로, OFF면 ON으로 바꾸는 set 코드
                        setLight(light === "ON" ? "OFF" : "ON");
                    }}
                >
                    {/*버튼 화면도 light 가 ON이면 끄기, OFF라면 켜기로 렌더링*/}
                    {light === "ON" ? "끄기" : "켜기"}
                </button>
            </div>

            {/* ================= 숫자 증가 예제 ================= */}
            <div>
                <h1>{state3}</h1>

                <button
                    onClick={() => {
                        setState3(state3 + 1);
                    }}
                >
                    +
                </button>
            </div>
        </>
    );
}

export default App;