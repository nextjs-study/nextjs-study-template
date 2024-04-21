import cn from 'classnames';
import { FC, HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<SVGElement>;

export const SortArrow: FC<Props> = (props) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.99967 1.33301V10.6663M5.99967 10.6663L10.6663 5.99967M5.99967 10.6663L1.33301 5.99967'
        stroke='#475467'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
