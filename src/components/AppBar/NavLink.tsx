import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import { FC, ReactNode } from 'react';

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
};

export const NavLink: FC<Props> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Link
      className={cn('px-3 py-2 bg-white rounded-md justify-start items-center gap-2 inline-flex text-slate-700 text-base font-normal leading-normal', className)}
      {...rest}
    >
      {children}
    </Link>
  );
};
