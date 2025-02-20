import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";
import { Project } from "@/models";
import cn from 'classnames';

interface MyWorkProps {
  projects: Project[];
}

export default function MyWork({ projects }: MyWorkProps) {
  return (
    <div className="bg-base-300 flex justify-center py-20" id="projects">
      <div className="container flex flex-col items-center space-y-8 px-4 overflow-hidden">
        <div className="space-y-2 text-center max-w-xl">
          <h4 className="text-3xl">Some Client Work</h4>
          <p className="text-base-content-300 font-lighter">These are just some of the projects I have worked on in my free time. Most of my professional work has been can be seen elsewhere.</p>
        </div>
        <div className="max-w-4xl w-full space-y-20">
          {projects?.map((project: Project, index) => (
            <div
              key={project.title}
              className={cn(
                { 'lg:ml-0 lg:mr-20': index % 2 === 0 },
                { 'lg:mr-0 lg:ml-20': index % 2 !== 0 }
              )}
            >
              <ProjectCard project={project} flip={index % 2 === 0} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

