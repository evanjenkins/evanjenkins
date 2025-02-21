import MobileNav from '@/components/molecules/MobileNav/MobileNav';
import { NavLinkModel } from '@/models';

export default function Nav() {
  const navLinks: NavLinkModel[] = [
    { label: 'home', location: '#home' },
    { label: 'expertise', location: '#expertise' },
    { label: 'projects', location: '#projects' },
    { label: 'about me', location: '#about-me' },
  ];

  return (
    <>
      <MobileNav links={navLinks} />
    </>
  );
}
