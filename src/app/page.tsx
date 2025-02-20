import Competencies from '@/components/organisms/Competencies/Competencies';
import Footer from '@/components/organisms/Footer/Footer';
import Hello from '@/components/organisms/Hello/Hello';
import MyWork from '@/components/organisms/MyWork/MyWork';
import { getProjects } from '@/utils/get-projects';

async function getProjectsProps() {
  return getProjects();
}

export default async function Home() {
  const projects = await getProjectsProps();
  return (
    <div className="min-h-screen">
      <Hello />
      <Competencies />
      <MyWork projects={projects} />
      <Footer />
    </div>
  );
}