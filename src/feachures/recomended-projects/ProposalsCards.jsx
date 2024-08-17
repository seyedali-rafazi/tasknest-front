import React from "react";
import { toNumbersWithComma } from "../../utils/formatNumber";

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

function ProposalsCards({ proposals }) {
  if (proposals.length == 0)
    return (
      <div className="flex justify-center">
        <p className="font-bold text-secondery-800">No request found.</p>{" "}
      </div>
    );
  return (
    <div>
      {proposals.map((proposal) => (
        <div
          key={proposal._id}
          className="mb-10 border border-secondery-200 rounded-lg p-5 "
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-bold block text-secondery-800 ">
                  {proposal.description}
                </span>
                <span className="text-secondery-400 text-sm">
                  Your proposed budget:{toNumbersWithComma(proposal.price)}$
                </span>
              </div>
              <div
                className={`badge ${statusStyle[proposal.status].className} `}
              >
                {statusStyle[proposal.status].label}
              </div>
            </div>
            <span className="block w-full h-1 bg-secondery-200"></span>
            <div>
              <span className="text-secondery-400 text-sm">
                Delivery time: {proposal.duration} day
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProposalsCards;
