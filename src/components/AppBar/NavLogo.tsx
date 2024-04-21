import Link from 'next/link';
import { Logo } from '@/components/icons';
import { EPages } from '@/types/utils';

export const NavLogo = () => {
  return (
    <Link href={EPages.HOME}>
      <Logo />
    </Link>
  );
};
