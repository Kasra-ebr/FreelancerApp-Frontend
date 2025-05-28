import React, { useState } from "react";
import truncateText from "../../../utils/truncateText"; // fixed typo
import Button from "../../UI/Button";
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../UI/Modal";
import ConfirmDelete from "../../UI/ConfirmDelete";
import useRemoveProject from "./useRempveProject";

interface ProjectRowProps {
  project: any;
  index: number;
}

function ProjectRow({ project, index }: ProjectRowProps) {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const {data,isPending,mutateAsync} = useRemoveProject()
  return (
    <>
      <tr className="border-t">
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
          {project.status === "OPEN" ? (
            <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">
              Open
            </span>
          ) : (
            <span className="px-2 py-1 bg-red-200 text-red-800 rounded text-xs">
              Close
            </span>
          )}
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
                This is Moda
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
                 onConfirm={()=> } 
                 disabled ={false}
                 onClose={()=>setIsDeleteOpen(false)} />
              </Modal>
            </>
          </div>
        </td>
      </tr>

  
    
    </>
  );
}

export default ProjectRow;
