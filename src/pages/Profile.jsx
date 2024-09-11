import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile({ nickname }, token);
      if (response.success) {
        alert("프로필이 업데이트 되었습니다.");
      }
    } catch (error) {
      console.error("Profile Update error:", error);
      alert("Profile Update failed");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center border-solid rounded-lg bg-slate-200 w-70 gap-4">
        <h1 className="text-xl font-bold">프로필 수정</h1>
        <form onSubmit={submitHandler} className="flex flex-col w-60 gap-3 ">
          <div className="flex gap-4">
            <label>닉네임</label>
            <input onChange={handleNicknameChange} placeholder="NICKNAME" />
          </div>
          <button type="submit" className="bg-cyan-500">
            닉네임 수정하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
