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
    <div className="flex justify-center items-center border-solid rounded-lg bg-slate-200 py-4">
      <form onSubmit={onSignupHandler} className="flex flex-col w-60 gap-4 ">
        <div className="flex flex-col">
          <label>아이디</label>
          <input
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="ID"
          />
        </div>
        <div className="flex flex-col">
          <label>비밀번호</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="PASSWORD"
          />
        </div>
        <div className="flex flex-col">
          <label>닉네임</label>
          <input
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            placeholder="NICKNAME"
          />
        </div>
        <button onClick={() => {}} className="bg-cyan-500">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
