import { TbBriefcase } from "react-icons/tb";
import useProjects from "../hooks/useProjects";
import ProjectCards from "./ProjectCards";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function OpenProject() {
  const { projects, isLoading } = useProjects();
  const naviate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  return projects ? (
    <div className="xl:max-w-screen-xl space-y-4">
      <h1 className="font-bold text-secondery-800 text-2xl">
        The latest projects for you
      </h1>
      <button className={`flex items-center gap-1 text-primary-900`}>
        <TbBriefcase className="w-7 h-7 " />
        <span className="font-bold">The latest projects</span>
      </button>
      <span className="w-full rounded-3xl h-0.5 bg-primary-100 block"></span>
      <span className="my-2 block text-secondery-800">
        Number of available projects: {projects.length}
      </span>

      <ProjectCards smOrder="twoSm" mdOrder="threeMd" projects={projects} />

      <div className="flex justify-center items-center">
        <button
          onClick={() => naviate("/recomended-projects")}
          className="flex items-center justify-center gap-2 border border-primary-700 text-primary-700 py-2 px-3 rounded-md font-bold hover:bg-primary-700 hover:text-white transition-all duration-200 my-5"
        >
          <span> View all</span>
          <HiArrowRight />
        </button>
      </div>
    </div>
  ) : (
    <div>
      <p>There is a problem</p>
    </div>
  );
}

export default OpenProject;
