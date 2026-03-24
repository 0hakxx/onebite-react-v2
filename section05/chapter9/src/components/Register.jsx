import { useState } from "react";

// ======================= 기존 방식 vs 현재 방식 핵심 차이 =======================
/*
  🔥 기존 방식 chapter8 (state 여러 개)
  const [name, setName] = useState("")
  const [birth, setBirth] = useState("")
  const [country, setCountry] = useState("")
  const [bio, setBio] = useState("")

  각각 따로 관리
  input 많아질수록 코드 증가
  --------------------------------------------------------------------

  🔥 현재 방식 (객체 1개로 통합 state)
   모든 input을 하나의 state 객체로 관리
   유지보수 쉬움 (실무에서 자주 씀)
   대신 key 관리 실수하면 버그 발생 가능
  const [input, setInput] = useState({
    name: "",
    gender: "",
    bio: "",
  });
*/
const Register = () => {
    const [input, setInput] = useState({
        name: "",
        gender: "",
        bio: "",
    });

    const onChange = (e) => {
        /*
          e.target.name  → input의 name 속성
          e.target.value → 사용자가 입력한 값
        */
        console.log(e.target.name + " : " + e.target.value);
        setInput({
            /* spread operator(나열하기)
              기존 state 유지, 이 코드 안 쓰면 (안 쓰면 기존 값 다 날아감)
            */
            ...input,
            /* 🔥 computed property name
              [e.target.name] = 동적으로 key 지정
              예:
              name="bio" → input.bio 업데이트
            */
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>

            {/* ================= 이름 ================= */}
            <div>
                <input
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

        </div>
    );
};

export default Register;