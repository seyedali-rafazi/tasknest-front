import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import ProjectHeader from "./ProjectHeader";
import Empty from "../../ui/Empty";
function ProjectsTabel() {
  const { projects, isLoading } = useOwnerProjects();
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
        <ProjectHeader />
      </div>
    );
  }
  return (
    <div>
      <ProjectHeader />
      <Table>
        <Table.Header>
          <th>#</th>
          <th>Project title</th>
          <th>Project category</th>
          <th>Budget</th>
          <th>Deadline</th>
          <th>tags</th>
          <th>Freelancer</th>
          <th>Project status</th>
          <th>Operation</th>
          <th> Requests</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProjectsTabel;
