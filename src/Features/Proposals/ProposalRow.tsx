import React, { useState } from "react";
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash, HiEye } from "react-icons/hi2";
import { Link } from "react-router-dom";
import truncateText from "../../utils/truncateText";
import Table from "../../utils/Table";
import type { IProposal } from "./ProposalTable";
interface IProposalRow {
  proposal: IProposal;
  index: number;
}

function ProposalRow({ proposal, index }:IProposalRow ) {
  const { status, description, duration, price } = proposal;
  const statusStyle = [
    {
      label: "denied",
      className: "badge--danger",
    },
    {
      label: "Under Review",
      className: "badge--secondary",
    },
    {
      label: "Approved",
      className: "badge--sucess ",
    },
  ];
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60)}</td>
      <td>{duration}</td>
      <td>{price}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
