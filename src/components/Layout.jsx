import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MbtiTestContext } from "../context/mbtiContext";
import { getUserProfile } from "../api/auth";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(MbtiTestContext);
  // console.log(user);

  const token = localStorage.getItem("accessToken");

  const getUserInfo = async () => {
    try {
      const response = await getUserProfile(token);
      setUser(response);
    } catch (error) {
      console.error(error.response);
    }
  };

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, []);

  const onLogoutHandler = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      localStorage.removeItem("accessToken");
      setIsAuthenticated(false);
      navigate("/");
    }
  };

  return (
    <div>
      <header>
        <h1>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "30px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            to="/"
          >
            홈
          </Link>
        </h1>
        <nav>
          <div className="space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/profile">마이프로필</Link>
                <Link to="/test">테스트</Link>
                <Link to="/results">결과보기</Link>
                <button onClick={onLogoutHandler}>로그아웃</button>
              </>
            ) : (
              <>
                <Link to="/login">로그인</Link>
                <Link to="/signup">회원가입</Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
