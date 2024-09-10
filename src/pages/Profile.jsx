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
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>닉네임</label>
            <input onChange={handleNicknameChange} placeholder="NICKNAME" />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
