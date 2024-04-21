import cn from 'classnames';
import { FC } from 'react';

type ChipState = 'error' | 'warning' | 'success' | 'inactive';

type Props = {
  text: string;
  type?: ChipState;
};

const variantMap: Record<ChipState, string> = {
  error: 'border-red-500 text-red-500',
  warning: 'border-yellow-500 text-yellow-500',
  success: 'border-emerald-600 text-emerald-700',
  inactive: 'border-slate-600 text-slate-600',
};

export const Chip: FC<Props> = (props) => {
  const { text, type = 'success' } = props;
  return (
    <div className={cn('h-[18px] px-2 py-2 rounded-2xl border-[2px] inline-flex justify-start items-center', variantMap[type])}>
      <div className={cn('text-center capitalize text-[12px] font-medium leading-[18px]', variantMap[type])}>{text}</div>
    </div>
  );
};
