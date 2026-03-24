const Controller = ({ onClickButton }) => {

    // 🔥 이 컴포넌트는 state를 직접 가지고 있지 않음
    // 👉 대신 App으로부터 onClcikButton 이라는 "함수"를 props로 전달받는다
    // 👉 이 함수는 App에 있는 state를 변경하는 함수
    // → 즉, Controller는 상태를 직접 바꾸지 않고
    //    "부모에게 요청"하는 구조

    return (
        <div>
            {/* 각각의 버튼은 특정 값을 전달 */}
            {/* 👉 이 값은 App의 count에 더해짐 */}
            <button onClick={() => {
                onClickButton(-1); // -1 전달
            }}>-1
            </button>

            <button onClick={() => {
                onClickButton(-10); // -10 전달
            }}>-10
            </button>

            <button onClick={() => {
                onClickButton(-100); // -100 전달
            }}>-100
            </button>

            <button onClick={() => {
                onClickButton(+100); // +100 전달
            }}>+100
            </button>

            <button onClick={() => {
                onClickButton(+10); // +10 전달
            }}>+10
            </button>

            <button onClick={() => {
                onClickButton(+1); // +1 전달
            }}>+1
            </button>
        </div>
    )
}

export default Controller