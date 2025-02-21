'use client';

import NavLink from '@/components/atoms/NavLink/NavLink';
import { NavLinkModel } from '@/models';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';

interface Props {
  links: NavLinkModel[];
}

export default function MobileNav({ links }: Props) {
  const [isFixed, setIsFixed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementOffsetTop = document.getElementById('app-navbar')?.offsetTop || 0;
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

  const toggle = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <input
        readOnly
        id="app-drawer"
        type="checkbox"
        checked={drawerOpen}
        className="drawer-toggle"
      />
      <div
        id="app-navbar"
        className={cn(
          'fixed top-0 left-0 right-0 p-4 flex gap-4 items-center transition-colors z-20',
          { 'bg-base-200': isFixed },
          { 'bg-transparent': !isFixed }
        )}
      >
        <label
          htmlFor="app-drawer"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
          onClick={toggle}
        >
          <GrMenu />
        </label>
        <h1 className="uppercase text-xs font-bold">Evan Jenkins</h1>
      </div>

      <div className="drawer-side z-30">
        <label
          htmlFor="app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={toggle}
        ></label>
        <div className="bg-base-200 text-base-content min-h-full w-80 p-4">
          <label
            htmlFor="app-drawer"
            aria-label="close sidebar"
            className="btn btn-square btn-ghost"
            onClick={toggle}
          >
            <GrClose />
          </label>
          <h2 className="text-xs font-bold pl-5 uppercase tracking-widest">
            Evan Jenkins | Dev
          </h2>
          <ul className="menu w-full">
            {links.map((link) => (
              <li key={link.location}>
                <NavLink onClick={toggle} navLink={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
