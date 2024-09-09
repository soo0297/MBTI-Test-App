import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  // 회원가입 내용 제출 함수
  const onSignupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ id, password, nickname });
      if (response.success) {
        alert("회원가입이 성공했습니다. 로그인 페이지로 이동하겠습니다.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed");
    }
  };

  return (
    <div>
      <form onSubmit={onSignupHandler}>
        <label>아이디</label>
        <input
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="ID"
        />
        <label>비밀번호</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="PASSWORD"
        />
        <label>닉네임</label>
        <input
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          placeholder="NICKNAME"
        />
        <button onClick={() => {}}>회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
