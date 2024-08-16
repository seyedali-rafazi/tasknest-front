import React from "react";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./proposalRow";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="Requests" />;
  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>Freelancer</th>
          <th>Description</th>
          <th>Delivery Time</th>
          <th>Cost</th>
          <th>Status</th>
          <th>Operation</th>
          <th></th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalsTable;
