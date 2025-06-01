import React from "react";
import Stat from "./Stat";
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";

interface IProjectsProps {
  projects: any;
}

function Stats({ projects }: IProjectsProps) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
  const totalProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );

  return (
    <div className="grid grid-cols-2 gap-8">
      <Stat
        color="primary"
        title="Total Projects"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="Accepted Projects"
        value={numOfAcceptedProjects}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="blue"
        title="Total Proposals"
        value={totalProposals}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
