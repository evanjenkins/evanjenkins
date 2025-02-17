import Link from 'next/link';
import { NavLinkModel } from '@/models';

export default function NavLink({ navLink }: { navLink: NavLinkModel }) {
  return (
    <Link href={`${navLink.location}`} className="group transition text-zinc-100 hover:text-sky-200">
      {'<'} {navLink.label} {'/>'}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-sky-200"></span>
    </Link>
  )
}
