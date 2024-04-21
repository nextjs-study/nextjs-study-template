'use client';

import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';
import { Checkbox } from '@/components/inputs';
import { SortArrow } from '@/components/icons';

type SortOrder = 'desc' | 'asc';

type Props = {
  title: string;
  sort?: boolean;
  className?: string;
  checkbox?: boolean;
  onSort?: (order: 'desc' | 'asc') => void;
  onInput?: () => void;
};

export const TableHeadingItem: FC<Props> = ({ title, sort, checkbox, className, onSort, onInput }) => {
  let [order, setOrder] = useState<SortOrder>('desc');

  const handleClick = () => {
    setOrder(order === 'desc' ? 'asc' : 'desc');

    onSort && onSort(order);
  };

  const handleChange = () => {};

  return (
    <th className={cn('flex justify-start items-center space-x-2 font-medium text-slate-600 text-xs leading-[18px]', className)}>
      {checkbox && (
        <Checkbox
          value={'placeholder'}
          onChange={handleChange}
          checked
        />
      )}
      <span>{title}</span>
      {sort && (
        <SortArrow
          onClick={handleClick}
          className={cn({
            ['rotate-180']: order === 'asc',
          })}
        />
      )}
    </th>
  );
};
