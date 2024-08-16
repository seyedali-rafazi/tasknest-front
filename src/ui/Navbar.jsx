import React, { useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { HiOutlineX } from "react-icons/hi";

function Navbar({ open, onClose, children }) {
  const modalRef = useOutsideClick(onClose);

  // Add or remove class to prevent body scroll when the navbar is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open
          ? "opacity-100 backdrop-blur-sm pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-y-0 left-0 max-w-sm w-4/6 h-screen bg-secondery-800 bg-opacity-30 transition-transform duration-600 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div ref={modalRef} className="bg-white h-screen w-full">
          <div className="flex justify-end p-5 bg-secondery-0">
            <button onClick={onClose}>
              <HiOutlineX className="w-6 h-6 text-secondery-900" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
