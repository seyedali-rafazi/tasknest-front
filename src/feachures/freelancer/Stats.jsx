import React from "react";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toNumbersWithComma } from "../../utils/formatNumber";

function Stats({ proposals }) {
  const numOfPropsals = proposals?.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, cur) => cur.price + acc, 0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-8 gap-y-8">
      <Stat
        color="primary"
        title="Requests"
        value={numOfPropsals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="Approved Requests"
        value={acceptedProposals.length}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="yellow"
        title="Wallet"
        value={toNumbersWithComma(balance)}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
