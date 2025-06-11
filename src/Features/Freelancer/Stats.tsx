import React from "react";
import Stat from "./../Owner/Stat
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";

interface IProjectsProps {
  projects: any;
}

function Stats({ proposals }: IProjectsProps) {
  const numOfProposals = proposals.length;
  const numOfAcceptedProposals = proposals.filter((p) => p.status === 2).length;
  const balance = numOfAcceptedProposals.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <div className="grid grid-cols-2 gap-8">
      <Stat
        color="primary"
        title="proposals"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="Accepted Proposals"
        value={numOfAcceptedProposals?.length}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="blue"
        title="wallet"
        value={balance}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
