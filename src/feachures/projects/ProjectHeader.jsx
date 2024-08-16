import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-xl">Your projects</h1>
      <Modal title="Add New Project" open={open} onClose={() => setOpen(false)}>
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiPlus />
        <span>Add project</span>
      </button>
    </div>
  );
}

export default ProjectHeader;
