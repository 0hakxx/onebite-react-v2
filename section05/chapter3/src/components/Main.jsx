import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 {} 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. obj, true, undefined, null 등은 렌더링 불가함
// 3. 모든 태그는 닫혀있어야 한다 -> html 에서는 <img> 으로 열어두기만 해도 이상없었으나 <img></img> 닫힌 태그 명시해줘야함
// 4. 최상위 태그는 반드시 하나여야만 한다
const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  };

  if (user.isLogin) {
    // 로그아웃 스타일 적용
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // return (
  //   <>
  //     {user.isLogin ? (
  //       <div>로그아웃</div>
  //     ) : (
  //       <div>로그인</div>
  //     )}
  //   </>
  // );
};

export default Main;
