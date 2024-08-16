import React, { useState } from "react";
import Table from "../../ui/Table";
import { truncateText } from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusStyle = [
  {
    label: "Rejected",
    className: "badge--danger",
  },
  {
    label: "Awaiting approval",
    className: "badge--secondary",
  },
  {
    label: "Approved",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration} day</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[status].className} `}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="Change request status"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button
          className="hover:text-primary-600 transition-all duration-300"
          onClick={() => setOpen(true)}
        >
          Change of status
        </button>
      </td>
      <td></td>
    </Table.Row>
  );
}

export default ProposalRow;
