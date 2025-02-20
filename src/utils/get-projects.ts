import { Project } from '@/models';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), '/projects');

export function getProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects: Project[] = fileNames.map((fileName) => {
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      ...data,
      badges: data.badges?.split(',').map((i: string) => i.trim()),
    };
  });

  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
