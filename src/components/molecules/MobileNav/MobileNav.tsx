'use client'

import { NavLinkModel } from '@/models';
import { useEffect, useState } from 'react';
import { GrMenu, GrClose } from "react-icons/gr";
import { useAnimate } from 'framer-motion';

export default function MobileNav({ links }: { links: NavLinkModel[] }) {
  const [open, setOpen] = useState(false)
  const [scope, animate] = useAnimate()

  const onOpenClick = () => {
    setOpen(!open)
    animate([
      ['.menu', { x: !open ? 0 : `-100%` }, { type: 'tween', duration: 0.3 }]
    ])
  }

  useEffect(() => {
    animate([
      ['.menu', { x: `-100%` }, { duration: 0 }]
    ])
  }, [animate])

  return (
    <div ref={scope}>
      <div className={`shadow-md menu fixed top-0 w-3/4 bg-zinc-100 h-screen z-10 left-0 -translate-x-full`}>

      </div>
      <div className="fixed top-4 left-4 z-10">
        <button
          className={`text-3xl transition-colors ${ open ? 'text-black' : 'text-zinc-100'}`}
          aria-label="Navigation Menu"
          onClick={onOpenClick}
        >
          { !open && (<GrMenu />) }
          { open && (<GrClose />)}
        </button>
      </div>
      { open && (
        <div
          className={`transition-opacity background bg-black fixed top-0 bottom-0 left-0 right-0 z-[2] ${open ? 'opacity-75' : 'opacity-0'}`}
        ></div>
      )}
    </div>
  )
}
