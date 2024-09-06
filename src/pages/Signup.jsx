import { useState } from "react";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  // 회원가입 내용 제출 함수

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
        <label>닉네임</label>
        <input
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <button onClick={() => {}}>회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
