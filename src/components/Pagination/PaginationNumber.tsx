import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

type Props = { page: number | string; href: string; position?: 'first' | 'last' | 'middle' | 'single'; isActive: boolean };

export const PaginationNumber: FC<Props> = ({ page, href, isActive, position }) => {
  const className = cn('flex h-10 w-10 rounded-full items-center justify-center text-sm', {
    'z-10 bg-gray-50': isActive,
    'hover:bg-gray-100': !isActive && position !== 'middle',
    'text-gray-300': position === 'middle',
  });

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link
      href={href}
      className={className}
    >
      {page}
    </Link>
  );
};
