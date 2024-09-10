import { useContext } from "react";
import { Link } from "react-router-dom";
import { MbtiTestContext } from "../context/mbtiContext";

const Home = () => {
  const { isAuthenticated } = useContext(MbtiTestContext);
  return (
    <div>
      <h1>MBTI 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <div>
        {isAuthenticated ? (
          <></>
        ) : (
          <>
            <Link to="/login">로그인하기</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
