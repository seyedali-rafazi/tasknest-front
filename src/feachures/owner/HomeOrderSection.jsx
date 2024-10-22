import React from "react";
import { useNavigate } from "react-router-dom";

function HomeOrderSection() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 mt-3 justify-center items-center  sm:flex-row-reverse sm:justify-evenly">
      <div className="w-2/5 h-2/5 min-w-72">
        <img src="Ecommerce campaign-bro.svg" alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl text-center text-secondary-800">
          Your projects to Leave{" "}
          <span className="text-primary-900 font-extrabold"> TaskNest </span>!
        </p>
        <button
          onClick={() => navigate("/order-project")}
          className="border border-primary-700 rounded-xl px-4 py-3 font-bold text-primary-700 hover:bg-primary-700 hover:text-white transition-all duration-300"
        >
          Project registration
        </button>
      </div>
    </div>
  );
}

export default HomeOrderSection;
