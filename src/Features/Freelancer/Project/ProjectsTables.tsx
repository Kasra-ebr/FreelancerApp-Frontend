import React from "react";
import useOwnerProjects from "./useOwnerProjects"; // Adjust path as needed

import useProject from "../../../hooks/usePoject";
import { useProjects } from "../../../hooks/useProject";
import Table from "../../../utils/Table";
import ProjectRow from "./ProjectRow";
import Loading from "../../../UI/Loading";
import Empty from "../../../UI/Empty";

function ProjectsTables() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loading height={50} width={50} />;
  if (!projects.length) return <Empty height={50} width={50} />;

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Header className="bg-gray-100">
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Budget</th>
          <th>Deadline</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProjectsTables;
