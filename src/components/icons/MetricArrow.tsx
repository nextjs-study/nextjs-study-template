import cn from 'classnames';
import { FC, HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<SVGElement>;

export const MetricArrow: FC<Props> = (props) => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      stroke='black'
    >
      <path
        d='M7.00033 12.8337V1.16699M7.00033 1.16699L1.16699 7.00033M7.00033 1.16699L12.8337 7.00033'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
