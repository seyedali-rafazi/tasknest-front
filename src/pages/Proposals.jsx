import React from "react";
import ProposalTable from "../feachures/proposals/ProposalTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black text-secondery-700 text-xl mb-8">
        List of your requests
      </h1>
      <ProposalTable />
    </div>
  );
}

export default Proposals;
