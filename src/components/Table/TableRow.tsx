import cn from 'classnames';
import { FC, HTMLAttributes, HtmlHTMLAttributes } from 'react';
import { Chip, ProgressBar } from '@/components';
import { Edit, Trash } from '@/components/icons';
import Link from 'next/link';
import { Checkbox } from '../inputs';
import { EPages } from '@/types/utils';

type Props = HtmlHTMLAttributes<HTMLTableRowElement>;

export const TableRow: FC<Props> = ({ className }) => {
  return (
    <tr className={cn('py-4 odd:bg-[#F9FAFB]', className)}>
      <td className='flex items-center gap-2 pl-6'>
        <Checkbox
          value={'placeholder'}
          checked
        />
        Company
      </td>
      <td>
        <ProgressBar
          className='max-w-[88px]'
          progress={60}
        />
      </td>
      <td>
        <Chip text='Customer' />
      </td>
      <td>
        <p className='text-gray-900 text-sm font-normal leading-tight'>Content curating app</p>
        <div className='text-slate-600 text-sm font-normal leading-tight'>Brings all your news into one place</div>
      </td>
      <td className='space-x-1 flex '>
        <Link
          href={`${EPages.RECORDS}/edit`}
          className='p-3'
        >
          <Edit />
        </Link>

        <button className='p-3'>
          <Trash />
        </button>
      </td>
    </tr>
  );
};
