import React from "react";
import Table from "../../ui/Table";
import {
  toNumbersWithComma,
} from "../../utils/formatNumber";
import { truncateText } from "../../utils/truncateText";

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
  const { description, duration, price, status } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60)}</td>
      <td>{duration} day</td>
      <td>{toNumbersWithComma(price)}</td>
      <td>
        {" "}
        <span className={`badge ${statusStyle[status].className} `}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
