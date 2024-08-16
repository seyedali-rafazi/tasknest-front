import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/auth");
  };
  return (
    <div>
      <button
        onClick={handelClick}
        className="flex items-center gap-3 rounded-lg py-1 px-2.5 bg-primary-800 hover:bg-primary-600 hover:shadow-md transition-all duration-300"
      >
        <HiArrowRightOnRectangle className="icon  text-white" />
        <span className="text-white font-bold">Login</span>
      </button>
    </div>
  );
}

export default Login;
