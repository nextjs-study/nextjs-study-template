import cn from 'classnames';
import { FC } from 'react';

type Props = {
  progress: number;
  className?: string;
};

export const ProgressBar: FC<Props> = ({ progress, className }) => {
  return (
    <div className={cn('w-full h-2 rounded-lg bg-gray-200', className)}>
      <div
        className={`h-full rounded-lg bg-primary-600 transition-[width]`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
