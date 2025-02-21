import Button from "@/components/atoms/Button/Button";
import { Project } from "@/models";
import cn from 'classnames';
import * as motion from 'motion/react-client';
import Image from 'next/image';

export interface ProjectCardProps {
  project: Project;
  flip: boolean;
}

export default function ProjectCard({ project, flip }: ProjectCardProps) {
  const initial = flip ? { x: 20 } : { x: -20 }

  return (
    <div className="relative">
      <div className="card lg:card-side bg-base-100 lg:bg-transparent shadow-sm lg:shadow-none">
        <figure
          className={cn(
            'lg:absolute lg:top-0 lg:pb-4',
            { 'lg:left-0 lg:pl-4': flip },
            { 'lg:right-0 lg:pr-4': !flip }
          )}
        >
          <Image
            className="w-full relative z-1 lg:rounded-lg"
            src={project.imagePath}
            alt="Album"
            width={500}
            height={500}
          />
          <motion.div
            initial={{ y: 20, ...initial }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.75 }}
            className={cn(
              'hidden lg:block rounded-lg bg-primary absolute top-4 bottom-0 opacity-25 !h-auto',
              { 'left-0': flip },
              { 'right-0': !flip }
            )}
          ></motion.div>
        </figure>
        <div
          className={cn(
            'lg:pt-80 z-10',
            { 'lg:pl-60': flip },
            { 'lg:pr-60': !flip }
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, ...initial }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.75 }}
            className="card-body relative lg:bg-base-100 lg:shadow-sm rounded-lg"
          >
            <h2 className="card-title">{project.title}</h2>
            <p>{project.description}</p>
            <div className="card-actions justify-end items-center gap-4">
              {project.badges?.map((badge) => (
                <div className="badge badge-outline" key={badge}>
                  {badge}
                </div>
              ))}
              {project.site && (
                <Button type="button" color="accent" href={project.site}>
                  View
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}