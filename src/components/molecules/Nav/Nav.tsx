import { NavLinkModel } from '@/models';
import MobileNav from '@/components/molecules/MobileNav/MobileNav';

export default function Nav() {
  const navLinks: NavLinkModel[] = [
    { label: 'home', location: '#home' },
    { label: 'expertise', location: '#expertise' },
  ];

  return (
    <>
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <MobileNav links={navLinks} />
    </>
  );
}
