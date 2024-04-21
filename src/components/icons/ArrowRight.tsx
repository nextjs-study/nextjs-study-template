import { FC, HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<SVGElement>;

export const ArrowRight: FC<Props> = (props) => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.16699 7.00033H12.8337M12.8337 7.00033L7.00033 1.16699M12.8337 7.00033L7.00033 12.8337'
        stroke='#475467'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
