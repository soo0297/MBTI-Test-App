import { useContext } from "react";
import { Link } from "react-router-dom";
import { MbtiTestContext } from "../context/mbtiContext";

const Home = () => {
  const { isAuthenticated } = useContext(MbtiTestContext);
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl">MBTI 테스트</h1>
        <p className="text-lg">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
      </div>
      <div>
        {isAuthenticated ? (
          <></>
        ) : (
          <>
            <Link className="text-lg bg-sky-200 " to="/login">
              로그인하기
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
