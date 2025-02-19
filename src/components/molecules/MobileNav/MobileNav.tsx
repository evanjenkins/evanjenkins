'use client';

import { NavLinkModel } from '@/models';
import Link from 'next/link';
import { GrClose, GrMenu } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import cn from 'classnames';

export default function MobileNav({ links }: { links: NavLinkModel[] }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementOffsetTop = document.getElementById('app-navbar')?.offsetTop || 0;
      console.log(scrollPosition);
      console.log(elementOffsetTop);
      if (scrollPosition > elementOffsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="app-navbar"
           className={cn('fixed top-0 left-0 right-0 p-4 flex gap-4 items-center transition-colors z-10', { 'bg-base-200': isFixed }, { 'bg-transparent': !isFixed })}>
        <label htmlFor="app-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <GrMenu />
        </label>
        <h1 className="uppercase text-xs font-bold">Evan Jenkins</h1>
      </div>

      <div className="drawer-side z-20">
        <label htmlFor="app-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="bg-base-200 text-base-content min-h-full w-80 p-4">
          <label htmlFor="app-drawer" aria-label="close sidebar" className="btn btn-square btn-ghost">
            <GrClose />
          </label>
          <ul className="menu">
            {links.map((link) => <li key={link.location}>
              <Link href={link.location}>{link.label}</Link>
            </li>)}
          </ul>
        </div>
      </div>
    </>
  );
}
