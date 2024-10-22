import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center">
        <div className="sm:max-w-sm  pt-10">
          <div className="space-y-4">
            <h1 className=" font-bold text-xl">
              The page you were looking for was not found.
            </h1>
            <button onClick={moveBack} className="flex items-center gap-x-2">
              <HiArrowRight />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
