import Hello from '@/components/organisms/Hello/Hello';
import Competencies from '@/components/organisms/Competencies/Competencies';
import Footer from '@/components/organisms/Footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hello />
      <Competencies />
      <Footer />
    </div>
  );
}
