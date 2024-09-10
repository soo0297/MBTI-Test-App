import { useNavigate } from "react-router-dom";
import TestForm from "../components/TestForm";
import calculateMBTI from "../utils/mbtiCalculator";
import { useContext, useState } from "react";
import { createTestResult } from "../api/testResults";
import { MbtiTestContext } from "../context/mbtiContext";
import { mbtiDescriptions } from "../data/descriptions";

const Test = () => {
  const [isTestDone, setIsTestDone] = useState(false);
  const [data, setData] = useState({});
  const { user } = useContext(MbtiTestContext);
  const navigate = useNavigate();
  // console.log("user:", user);

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    // console.log("result:", result);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      date: new Date().toISOString(),
      visibility: true,
    };
    // console.log("resultData:", resultData);
    const testResult = await createTestResult(resultData);
    console.log("testResult:", testResult);
    setData(testResult);
    setIsTestDone(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      {isTestDone ? (
        <div>
          <h2>{data.result}</h2>
          <p>{mbtiDescriptions[data.result]}</p>
          <button
            type="button"
            onClick={() => {
              navigate("/results");
            }}
          >
            모든 결과 보러가기
          </button>
        </div>
      ) : (
        <TestForm onSubmit={handleTestSubmit} />
      )}
    </div>
  );
};

export default Test;
