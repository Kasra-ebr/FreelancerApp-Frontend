import React, { useState } from "react";

import Button from "../../UI/Button";
import { TbPencilMinus } from "react-icons/tb";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import Modal from "../../UI/Modal";
import ConfirmDelete from "../../UI/ConfirmDelete";
import useRemoveProject from "./useRempveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import truncateText from "../../utils/truncateText";
import Table from "../../utils/Table";
import { Link } from "react-router";

interface ProjectRowProps {
  project: any;
  index: number;
}


function ProjectRow({ project, index }: ProjectRowProps) {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const { removeProject } = useRemoveProject();
  return (
    <>
      <Table.Row />
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{project.budget}</td>
      <td>{project.deadline}</td>
      <td>
        <div className="flex flex-wrap items-center gap-1 max-w-[200px]">
          {project.tags.map((tag: string) => (
            <span className="px-2 py-1 bg-gray-200 rounded text-xs" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex justify-center gap-x-4">
          <>
            <Button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </Button>
            <Modal
              title={`Edit ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <Button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-primary-900" />
            </Button>
            <Modal
              title={`Delete ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <ConfirmDelete
                resourceName={project.title}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                disabled={false}
                onClose={() => setIsDeleteOpen(false)}
              />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={project.id} className="flex justify-center">
                <HiEye className="2-5 h-5 text-primary-800"/>
        </Link>
      </td>
      <Table.Row />
    </>
  );
}

export default ProjectRow;
