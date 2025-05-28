import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../UI/Loading";
import Empty from "../../UI/Empty";

import ProjectRow from "./ProjectRow";
import Table from "../../utils/Table";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

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
          <th>Tags</th>
          <th>Freelancer</th>
          <th>Status</th>
          <th>Mission</th>
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

export default ProjectTable;
