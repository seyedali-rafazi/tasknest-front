import React from "react";
import { HiOutlinePencil } from "react-icons/hi";
import Logout from "../feachures/authentication/Logout";
import useOutsideClick from "../hooks/useOutsideClick";
import { TbPaperclip, TbHome, TbReportSearch } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AccounDropDown({ open, onClose, user }) {
  const modalRef = useOutsideClick(onClose);
  const navigate = useNavigate();

  let userRole;
  let accountPath;
  let proposalPath;
  let projectsPage;
  switch (user.role) {
    case "USER":
      userRole = "User";
      accountPath = "/";
      proposalPath = "/";
      projectsPage = "/recomended-projects";
      break;
    case "ADMIN":
      userRole = "Admin";
      accountPath = "/admin";
      proposalPath = "freelancer/proposals";
      projectsPage = "/recomended-projects";
      break;
    case "FREELANCER":
      userRole = "Freelancer";
      accountPath = "/freelancer";
      proposalPath = "/freelancer/proposals";
      projectsPage = "/recomended-projects";
      break;
    case "OWNER":
      userRole = "Owner";
      accountPath = "/owner";
      proposalPath = "/owner/projects";
      projectsPage = "/order-project";
      break;
    default:
      userRole = "Unknown";
      accountPath = "/";
      proposalPath = "/";
      projectsPage = "/recomended-projects";
      break;
  }

  const handelClick = () => {
    if ((user.role = "USER" && user.status == 1)) {
      toast.error(
        "Your account has not been activated yet. Thank you for your patience."
      );
    }
  };

  const handelClickEdit = () => {
    navigate("/edit-profile");
  };

  return (
    open && (
      <div className="fixed top-0 right-0 w-full h-screen  bg-opacity-30 z-50">
        <ul
          className="right-4 top-16 bg-secondery-0 py-2 px-2 z-1200 fixed flex flex-col gap-3 shadow-md
        shadow-primary-700 rounded-md w-64 transition-all duration-300 ease-in-out "
          ref={modalRef}
        >
          <li className="flex px-4  gap-3 items-center ">
            <img
              className="w-10 h-10 rounded-full object-cover object-center"
              src="/user.jpg"
              alt="user"
            />
            <div>
              <p className="font-bold text-secondery-900"> {user.name}</p>
              <div className="flex  justify-start items-center gap-1">
                <span className="text-sm text-secondery-900">{userRole} </span>
                <button onClick={handelClickEdit}>
                  <HiOutlinePencil className="icon w-5 h-5 text-secondery-900" />
                </button>
              </div>
            </div>
          </li>
          <span className="w-full bg-primary-100 h-0.5"></span>

          <DropDownButton
            path={accountPath}
            onClick={handelClick}
            icon={<TbHome className="w-6 h-6" />}
            text="User Profile"
          />
          <DropDownButton
            path={proposalPath}
            onClick={handelClick}
            icon={<TbReportSearch className="w-6 h-6" />}
            text="Your Requests"
          />
          <DropDownButton
            path={projectsPage}
            icon={<TbPaperclip className="w-6 h-6" />}
            text="Available Projects"
          />

          <Logout />
        </ul>
      </div>
    )
  );
}

export default AccounDropDown;

function DropDownButton({ path, onClick, icon, text }) {
  return (
    <Link to={path}>
      <button
        onClick={onClick}
        className={`flex w-full px-4  gap-3 items-center hover:text-white
          hover:bg-primary-700 py-3 rounded-lg transition-all duration-300 text-secondery-900
          `}>
        {icon}
        <span className="font-bold">{text} </span>
      </button>
    </Link>
  );
}
