import { useState } from "react";

/**
 * 🧾 간단한 회원가입 폼
 * 👉 수집 정보 4가지
 * 1. 이름
 * 2. 생년월일
 * 3. 국적
 * 4. 자기소개
 */
const Register = () => {

    const [name, setName] = useState("이름");   // 이름 State, 기본 값 : 이름
    const [birth, setBirth] = useState("");    // 생년월일 State, 기본 값 : "" 빈 문자열
    const [country, setCountry] = useState("");// 국적 State, 기본 값 : "" 빈 문자열
    const [bio, setBio] = useState("");        // 자기소개 State, 기본 값 : "" 빈 문자열

    const onChangeName = (e) => {
        console.log(e.target.value); // 콘솔로 찍어보면 target.value 에 사용자가 입력한 값이 저장됨을 알 수 있음
        setName(e.target.value);     // 사용자 입력 값으로 상태 변경
    };
    const onChangeBirth = (e) => {
        console.log(e.target.value);
        setBirth(e.target.value);
    };
    const onChangeCountry = (e) => {
        console.log(e.target.value);
        setCountry(e.target.value);
    };
    const onChangeBio = (e) => {
        console.log(e.target.value);
        setBio(e.target.value);
    };

    return (
        <div>
            {/*이름 입력*/}
            <div>
                <input
                    value={name} // state가 UI를 결정
                    onChange={onChangeName} // 입력 시 state 변경
                    placeholder="이름"
                />
            </div>
            {/*생년월일 입력*/}
            <div>
                <input
                    value={birth}
                    onChange={onChangeBirth}
                    placeholder="생년월일"
                />
            </div>
            {/*국적 입력(선택)*/}
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option value="">국가 선택</option>
                    <option value="kr">한국</option>
                    <option value="uk">영국</option>
                    <option value="us">미국</option>
                </select>
            </div>
            {/*자기소개 입력 문자열 길이가 길어 textarea 태그 사용*/}
            <div>
                <textarea 
                    value={bio} 
                    onChange={onChangeBio} 
                    placeholder="자기소개"
                />
            </div>
        </div>
    );
};

export default Register;