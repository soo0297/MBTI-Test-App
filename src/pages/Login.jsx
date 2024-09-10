import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { MbtiTestContext } from "../context/mbtiContext";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { loginToken, setIsAuthenticated, setUser } =
    useContext(MbtiTestContext);
  const navigate = useNavigate();

  // 로그인 내용 제출 함수
  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        id,
        password,
      });
      if (response.success) {
        console.log(response);
        setUser({ id: response.userId, nickname: response.nickname });
        setIsAuthenticated(true);
        loginToken(response.accessToken);
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  return (
    <div>
      <form onSubmit={onLoginHandler}>
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
        <button onClick={() => {}}>로그인하기</button>
      </form>
    </div>
  );
};

export default Login;
