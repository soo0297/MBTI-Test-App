import { useContext } from "react";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";
import { mbtiDescriptions } from "../data/descriptions";
import { MbtiTestContext } from "../context/mbtiContext";

const TestResultItem = ({ result, onUpdate, onDelete }) => {
  const { user } = useContext(MbtiTestContext);

  const isOwner = result.userId === user.id;

  const formattedDate = new Date(result.date).toLocaleString();
  const description =
    mbtiDescriptions[result.result] || "MBTI 유형 설명을 찾을 수 없습니다.";

  const handleToggleVisibility = async () => {
    try {
      const newVisibility = !result.visibility;
      await updateTestResultVisibility(result.id, newVisibility);
      console.log("newVisibility:", newVisibility);
      onUpdate(); // 부모 컴포넌트에서 결과 목록을 다시 불러오도록 요청
    } catch (error) {
      console.error("Visibility toggle failed:", error);
      alert("Visibility toggle failed. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTestResult(result.id);
      onDelete(); // 부모 컴포넌트에서 결과 목록을 다시 불러오도록 요청
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
        <h4 className="text-xl font-semibold">{result.nickname}</h4>
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
      <p className="text-2xl font-bold text-yellow-400 mb-4">{result.result}</p>
      <p className="text-base text-gray-300 mb-4">{description}</p>
      {isOwner && (
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleToggleVisibility}
            className="bg-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition"
          >
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
