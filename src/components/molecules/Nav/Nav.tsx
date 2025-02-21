import MobileNav from '@/components/molecules/MobileNav/MobileNav';
import { NavLinkModel } from '@/models';

export default function Nav() {
  const navLinks: NavLinkModel[] = [
    { label: 'home', location: '#home' },
    { label: 'expertise', location: '#expertise' },
    { label: 'projects', location: '#projects' },
  ];

  return (
    <>
      <MobileNav links={navLinks} />
    </>
  );
}
