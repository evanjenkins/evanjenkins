'use client';

import { NavLinkModel } from '@/models';
import { useEffect, useState } from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';
import { useAnimate } from 'framer-motion';

export default function MobileNav({ links }: { links: NavLinkModel[] }) {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const onOpenClick = () => {
    setOpen(!open);
    animate([
      ['.menu', { x: !open ? 0 : `-100%` }, { type: 'tween', duration: 0.3 }],
    ]);
  };

  useEffect(() => {
    animate([
      ['.menu', { x: `-100%` }, { duration: 0 }],
    ]);
  }, [animate]);

  return (
    <div ref={scope}>
      <div
        className={`shadow-md menu fixed top-0 w-3/4 max-w-lg bg-zinc-100 dark:bg-zinc-900 h-screen z-30 left-0 -translate-x-full`}>

      </div>
      <div className="fixed top-8 left-8 z-30">
        <button
          className={`text-3xl transition-colors ${open ? 'text-black dark:text-zinc-100' : 'text-zinc-800 dark:text-zinc-100'}`}
          aria-label="Navigation Menu"
          onClick={onOpenClick}
        >
          {!open && (<GrMenu />)}
          {open && (<GrClose />)}
        </button>
      </div>
      {open && (
        <div
          className={`transition-opacity background bg-white dark:bg-black fixed top-0 bottom-0 left-0 right-0 z-20 ${open ? 'opacity-75' : 'opacity-0'}`}
        ></div>
      )}
    </div>
  );
}
