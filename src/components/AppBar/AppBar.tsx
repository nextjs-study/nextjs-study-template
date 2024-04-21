import { NavLogo } from './NavLogo';
import { NavLink } from './NavLink';
import { EPages } from '@/types/utils';
import { Button, Container } from '@/components';
import { Gear } from '@/components/icons';
import Link from 'next/link';

export const AppBar = () => {
  return (
    <header className='border-b border-gray-100'>
      <Container className='w-full h-20 flex justify-between items-center space-x-4'>
        <NavLogo />
        <nav className='flex gap-1'>
          <NavLink href={EPages.BLOG}>Blog</NavLink>
          <NavLink href={EPages.DASHBOARD}>Dashboard</NavLink>
        </nav>
        <div className='flex items-center space-x-3'>
          <Link href={EPages.LOGIN}>
            <Button variant='secondary'>Log in</Button>
          </Link>
          <Link href={EPages.SIGNUP}>
            <Button>Sign Up</Button>
          </Link>
          <Link href={EPages.PROFILE}>
            <Gear />
          </Link>
          <figure className='w-10 h-10 rounded-full flex items-center justify-center bg-slate-300'>M</figure>
        </div>
      </Container>
    </header>
  );
};
