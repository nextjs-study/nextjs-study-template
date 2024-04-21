import cn from 'classnames';
import { FC } from 'react';
import { MetricArrow, MetricChart } from '@/components/icons';

type Props = {
  title: string;
  stat: string;
  percentage: number;
  dynamic: 'desc' | 'asc';
};

export const MetricCard: FC<Props> = ({ title, stat, percentage, dynamic }) => {
  return (
    <div className='w-full max-w-96 h-44 p-6 bg-white rounded-xl shadow border border-gray-200 flex-col justify-start items-start gap-6 inline-flex'>
      <h4 className='self-stretch text-gray-900 text-base font-medium leading-normal'>{title}</h4>
      <div className='self-stretch justify-start items-end gap-4 inline-flex'>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
          <p className='self-stretch text-gray-900 text-3xl font-semibold leading-9'>{stat}</p>
          <div className='flex self-stretch justify-start items-center gap-2'>
            <div className='justify-center items-center gap-0.5 flex'>
              <MetricArrow className={cn(dynamic === 'desc' ? 'scale-y-[-1] stroke-red-500' : 'stroke-green-500')} />
              <div className={cn('text-sm font-medium font leading-tight', dynamic === 'asc' ? 'text-green-500' : 'text-red-500')}>{percentage}%</div>
            </div>
            <div className='grow basis-0 text-slate-600 text-sm font-medium font leading-tight'>last mth</div>
          </div>
        </div>
        <MetricChart
          className={cn({
            'scale-x-[-1]': dynamic === 'desc',
          })}
          strokeColor={dynamic === 'asc' ? undefined : '#F04438'}
          gradientColor={dynamic === 'asc' ? undefined : '#FEF3F2'}
        />
      </div>
    </div>
  );
};
