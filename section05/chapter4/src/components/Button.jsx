// Button 컴포넌트: text, color, children 을 받음(props 을 받는다 표현)
const Button = ({ text, color, children }) => {
  return (
      <button style={{ color: color }}>
        {/* text 출력 + color 대문자 출력 */}
        {text} - {color.toUpperCase()}
        {/* children: <Button>안에 넣은 JSX가 들어오는 자리 */}
        {/*children은 무조건 고정 이름 (React 규칙)*/}
        {children}
      </button>
  );
};

/*
  defaultProps
  - color가 없으면 기본값 "black"
  - undefined 방지용, 위에 undefined인데 toUppderCase() 을 사용한다면 에러 발생하므로 이를 방지
  - (요즘은 아래 방식보다 color = "black" 기본값이 더 많이 쓰임)
*/
Button.defaultProps = {
  color: "black",
};

export default Button;