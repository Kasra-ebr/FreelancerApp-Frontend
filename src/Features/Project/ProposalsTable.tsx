import React from "react";
import Table from "../../utils/Table";
import Empty from "../../UI/Empty";
import ProposalRow from "./ProposalRow";

interface Proposal {
  id: string;
  user: {
    name: string;
  };
  description: string;
  duration: string;
  price: number;
  status: number;
}

interface ProposalsTableProps {
  proposals: Proposal[];
}

function ProposalsTable({ proposals }: ProposalsTableProps) {
  if (!proposals.length) return <Empty resourceName="requested" />;

  return (
    <Table>
      <Table.Header className="bg-gray-100">
        <th>#</th>
        <th>User</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Price</th>
        <th>Status</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal.id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
