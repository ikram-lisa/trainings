import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import "./success.css";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
const SuccessAut = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    };

    getUserData();
  }, []);
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error logging out:", error.message);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="Success">
      <header className="Success-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <div className="checkmark-icon">&#10004;</div>
            <h1>Success!</h1>
            <p>Your operation was completed successfully.</p>
            <button
              className="logout-btn"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h1>User is not logged in</h1>
            <button
              className="logout-btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Go back Home !
            </button>
          </>
        )}
      </header>
    </div>
  );
};
export default SuccessAut;
