import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 내용 제출 함수

  return (
    <div>
      <form onSubmit={() => {}}>
        <label>아이디</label>
        <input
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label>비밀번호</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={() => {}}>로그인하기</button>
      </form>
    </div>
  );
};

export default Login;
