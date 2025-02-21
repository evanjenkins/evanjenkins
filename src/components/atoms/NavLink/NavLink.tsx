'use client'
import { NavLinkModel } from '@/models';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavLink({ navLink, onClick }: { navLink: NavLinkModel; onClick: () => void }) {
  const router = useRouter();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
    router.push(e.currentTarget.getAttribute('href') || '');
  };

  return (
    <Link href={navLink.location} onClick={handleClick}>
      {navLink.label}
    </Link>
  );
}
