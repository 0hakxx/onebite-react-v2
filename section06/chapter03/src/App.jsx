import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
    // 🔥 상태(State)를 App(공통 부모)에 위치시킴
    // 이유:
    // Viewer와 Controller는 서로 직접적인 부모-자식 관계가 아니라 "형제 관계"임
    // → 따라서 서로 직접 데이터를 주고받을 수 없음
    // → 👉 React에서 컴포넌트 간 데이터 전달 방식은 "props"
    // →❗ 하지만 props는 부모 → 자식 방향으로만 전달 가능함
    // → 👉 그래서 해결 방법:
    // → 두 컴포넌트의 "공통 부모"인 App에 아래와 같이 state를 두고
    // → props를 통해 각각 전달한다
    // → 🎯 이런 패턴을 "State Lifting (State 끌어올리기)" 라고 한다
    const [count, setCount] = useState(0); // 초기값 : 0

    // Controller에서 버튼 클릭 시 호출됨
    // value 값을 받아서 count를 증가/감소시킴
    const onClickButton = (value) => {
        setCount(count + value);
    }

    return (
        <div className="App">
            <h1>Simple Counter</h1>

            <section>
                {/* 🔽 상태를 Viewer로 전달 (부모 → 자식) */}
                <Viewer count={count}/>
            </section>
            {/* 카운터를 조작하는 영역 */}
            <section>
                {/* 🔽 상태가 아닌 로직 함수(이벤트 핸들러)를 Controller로 전달 */}
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;