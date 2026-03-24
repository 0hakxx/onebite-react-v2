import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
    // props를 객체로 묶어서 전달하기 위한 용
    const buttonProps = {
        text: "메일",
        color: "red",
        a: 1,
        b: 2,
        c: 3,
    };

    return (
        <>
            {/* 객체를 한번에 Button.jsx에 props로 전달 */}
            <Button {...buttonProps} />

            {/* color 안 줌 → defaultProps 없으면 undefined → toUpperCase 에러 가능 */}
            <Button text={"카페"} />

            {/* children 사용: 버튼 안에 Header 컴포넌트 삽입 */}
            <Button text={"블로그"}>
                <Header />
            </Button>
        </>
    );
}

export default App;