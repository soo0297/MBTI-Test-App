import { useContext } from "react";
import TestResultItem from "./TestResultItem";
import { MbtiTestContext } from "../context/mbtiContext";

const TestResultList = ({ results, onUpdate, onDelete }) => {
  const { user } = useContext(MbtiTestContext);
  return (
    <div className="space-y-4">
      {results
        .filter((result) => result.visibility || result.userId === user?.id)
        .map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            user={user}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TestResultList;
