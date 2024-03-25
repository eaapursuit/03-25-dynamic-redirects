import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userData from "./data/users.json";

function UserProfile() {
  let navigate = useNavigate();
  let { userId } = useParams();

  useEffect(() => {
    if (!isValidUser(userId)) {
      navigate("/not-found");
    }
  }, [userId, navigate]);

  function isValidUser(userId) {
    const isValid = userData.validUserIds.includes(userId);
    return isValid;
  }

  return (
    <div>
      <p>User Profile for {userId}</p>
    </div>
  );
}

export default UserProfile;
