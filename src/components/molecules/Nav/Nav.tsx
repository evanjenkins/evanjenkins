import NavLink from '@/components/atoms/NavLink/NavLink';
import { NavLinkModel } from '@/models';
import MobileNav from '@/components/molecules/MobileNav/MobileNav';

export default function Nav() {
  const navLinks: NavLinkModel[] = [
    { label: 'home', location: '#home' },
    { label: 'expertise', location: '#expertise' },
  ]

  return (
    <>
      {/*<div className="block lg:hidden">*/}
      <MobileNav links={navLinks} />
      {/*</div>*/}
      {/*<div className="hidden lg:block fixed max-w-7xl top-2 inset-x-0 mx-auto text-xl">*/}
      {/*  <nav className="flex gap-8 font-[family-name:--font-source-code] justify-center">*/}
      {/*    { navLinks.map((link) => (*/}
      {/*      <NavLink key={link.location} navLink={link} />*/}
      {/*    ))}*/}
      {/*  </nav>*/}
      {/*</div>*/}
    </>
  )
}
