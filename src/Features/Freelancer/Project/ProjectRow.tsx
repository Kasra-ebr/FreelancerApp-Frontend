import React, { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { Button } from "@headlessui/react";
import Table from "../../../utils/Table";
import truncateText from "../../../utils/truncateText";
import Modal from "../../../UI/Modal";
import CreateProposal from "./CreateProposal";

const projectStatus = {
  OPEN: {
    label: "OPEN",
    className: "badge--sucess",
  },
  CLOSED: {
    label: "CLOSE",
    className: "badge--damger",
  },
};

function ProjectRow({ project, index }) {
  const { status, title , budget, deadline } = project;
const [open, setOpen] = useState(false)
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.budget}</td>
      <td>{project.deadline}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
            open={open}
            onClose={()=>setOpen(false)}
            title={`Proeject Request` ${title}}>
                    <CreateProposal onClose={()=> setOpen(false)}/>
        </Modal>
        <Button onClick={()=> setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </Button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
