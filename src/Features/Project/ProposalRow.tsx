import React, { useState } from "react";
import truncateText from "../../utils/truncateText";
import Table from "../../utils/Table";
import Modal from "../../UI/Modal";
import { Button } from "@headlessui/react";

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

interface ProposalRowProps {
  proposal: Proposal;
  index: number;
}


const statusStyle = [
  {
    label: "Decline",
    className: "badge--danger",
  },
    {
    label: "Please Wait",
    className: "badge--secondary",
  },
    {
    label: "Accepted",
    className: "badge--sucess",
  }
]

function ProposalRow({ proposal, index }: ProposalRowProps) {
  const { status } = proposal;
  const color = status === 2 ? "primary" : "danger";
    const [open ,setOpen] = useState(false)
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
      </td>
      <td>
        <Modal
            title="Make a Change"
            open={open}
            onClose={()=> setopen(false)}>
                <ChangeProposalStatus
                    proposalId={proposal._id}
                    onClose={()=> setOpen(false)}/>
        </Modal>
        <Button onClick={()=> setOpen(true)}> Edit</Button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
