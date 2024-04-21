import { FC, HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<SVGElement> & {
  strokeColor?: string;
  gradientColor?: string;
};

export const MetricChart: FC<Props> = (props) => {
  const { strokeColor = '#12B76A', gradientColor = '#ECFDF3', ...rest } = props;
  return (
    <svg
      width='131'
      height='66'
      viewBox='0 0 131 66'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M129.333 1C108.537 2.73299 107.249 44.2218 86.6663 49C69.6932 52.9402 61.0985 30.5738 43.9997 33C25.4534 35.6316 19.5185 58.9382 1.33301 65H129.333V1Z'
        fill={gradientColor}
      />
      <path
        d='M129.333 1C108.537 2.73299 107.249 44.2218 86.6663 49C69.6932 52.9402 61.0985 30.5738 43.9997 33C25.4534 35.6316 19.5185 58.9382 1.33301 65H129.333V1Z'
        fill='url(#paint0_linear_202_1140)'
      />
      <path
        d='M1.33301 65C19.5185 58.9382 25.4534 35.6316 43.9997 33C61.0985 30.5738 69.6932 52.9402 86.6663 49C107.249 44.2218 108.537 2.73299 129.333 1'
        stroke={strokeColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_202_1140'
          x1='65.333'
          y1='1'
          x2='65.333'
          y2='65'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset='0.641167'
            stopColor='white'
            stopOpacity='0'
          />
          <stop
            offset='1'
            stopColor='white'
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
