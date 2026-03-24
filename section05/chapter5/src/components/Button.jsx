const Button = ({ text, color, children }) => {

  // 이벤트 핸들러 함수
  // e = 이벤트 객체 (클릭한 정보 다 들어있음)
  const onClickButton = (e) => {
    console.log(e);      // 이벤트 전체 정보 (버튼 클릭 정보)
    console.log(text);   // props로 받은 text 출력
  };

  return (
      <button
          // 클릭 이벤트 발생 시 onClickButton 실행
          onClick={onClickButton}
          // 마우스 올릴 때도 같은 함수 실행 가능
          // onMouseEnter={onClickButton}
          style={{ color: color }}
      >
        {text} - {color.toUpperCase()}
        {children}
      </button>
  );
};
Button.defaultProps = {
  color: "black",
};

export default Button;