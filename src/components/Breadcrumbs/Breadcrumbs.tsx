import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

export interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

type Props = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumbs: FC<Props> = ({ breadcrumbs }) => {
  return (
    <nav
      aria-label='Breadcrumb'
      className='mb-5 block'
    >
      <ol className={cn('flex text-lg font-medium leading-tight')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? <span className='mx-3 inline-block text-gray-300'>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};
