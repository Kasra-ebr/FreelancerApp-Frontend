import useProposals from "../../hooks/useProposals";
import Empty from "../../UI/Empty";
import Loading from "../../UI/Loading";
import Table from "../../utils/Table";
import ProposalRow from "./ProposalRow";

 export interface IProposal {
  status: number,
  description: string;
  duration: string;
  price: string | number;
}

interface IProposalRow {
  proposal: IProposal;
  index: number;
}

function ProposalTable() {
  const {isLoading,proposals} = useProposals()
  if (isLoading) return <Loading height={50} width={50} />;
  if (!proposals?.length) return <Empty height={50} width={50} />;

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Header className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Budget</th>
            <th>Deadline</th>
            <th>Tags</th>
            <th>Freelancer</th>
            <th>Status</th>
            <th>Mission</th>
            <th>Requests</th>
          </tr>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal.id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalTable;
