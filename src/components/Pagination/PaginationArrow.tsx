import Link from 'next/link';
import { ArrowLeft, ArrowRight } from '../icons';
import cn from 'classnames';

export const PaginationArrow = ({ href, direction, isDisabled }: { href: string; direction: 'left' | 'right'; isDisabled?: boolean }) => {
  const className = cn('flex gap-2 items-center text-slate-600 text-sm font-semibold leading-tight', {
    'pointer-events-none text-gray-300': isDisabled,
    'hover:bg-gray-100': !isDisabled,
    'mr-2 md:mr-4': direction === 'left',
    'flex-row-reverse': direction === 'right',
    'ml-2 md:ml-4': direction === 'right',
  });

  const icon = direction === 'left' ? <ArrowLeft className='w-4' /> : <ArrowRight className='w-4' />;
  const text = direction === 'left' ? 'Previous' : 'Next';

  return isDisabled ? (
    <div className={className}>
      {icon}
      {text}
    </div>
  ) : (
    <Link
      className={className}
      href={href}
    >
      {icon}
      {text}
    </Link>
  );
};
