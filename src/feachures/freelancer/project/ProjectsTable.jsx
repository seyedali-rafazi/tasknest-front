import React from "react";
import Table from "../../../ui/Table";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import useProjects from "../../../hooks/useProjects";
import ProjectRow from "./ProjectRow";

export default function ProjectsTable() {
  const { isLoading, projects } = useProjects();
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div>
        <Empty resourceName="No project found" />
      </div>
    );
  }
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Project title</th>
        <th>Budget</th>
        <th>Deadline</th>
        <th>Project status</th>
        <th>Operation</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
