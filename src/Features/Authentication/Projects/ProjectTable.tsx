import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../../UI/Loading";
import Empty from "../../../UI/Empty";
import truncateText from "../../../utils/truancateText";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading height={50} width={50} />;
  if (!projects.length) return <Empty height={50} width={50} />;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
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
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id} className="border-t">
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{project.budget}</td>
              <td>{project.deadline}</td>
              <td>
                <div className="flex flex-wrap items-center gap-1 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">Open</span>
                ) : (
                  <span className="px-2 py-1 bg-red-200 text-red-800 rounded text-xs">Close</span>
                )}
              </td>
              <td>—</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
