import { FC, HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<SVGElement>;

export const Gear: FC<Props> = (props) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_330_3512)'>
        <path
          d='M9.99935 12.5003C11.3801 12.5003 12.4993 11.381 12.4993 10.0003C12.4993 8.61961 11.3801 7.50033 9.99935 7.50033C8.61864 7.50033 7.49935 8.61961 7.49935 10.0003C7.49935 11.381 8.61864 12.5003 9.99935 12.5003Z'
          stroke='#667085'
          strokeWidth='1.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.6054 12.2731C15.5046 12.5016 15.4745 12.755 15.519 13.0008C15.5636 13.2465 15.6808 13.4733 15.8554 13.6518L15.9009 13.6973C16.0417 13.838 16.1535 14.0051 16.2297 14.1891C16.306 14.373 16.3452 14.5702 16.3452 14.7693C16.3452 14.9684 16.306 15.1655 16.2297 15.3495C16.1535 15.5334 16.0417 15.7005 15.9009 15.8412C15.7601 15.9821 15.593 16.0939 15.4091 16.1701C15.2252 16.2464 15.028 16.2856 14.8289 16.2856C14.6298 16.2856 14.4326 16.2464 14.2487 16.1701C14.0647 16.0939 13.8976 15.9821 13.7569 15.8412L13.7115 15.7958C13.5329 15.6211 13.3062 15.504 13.0604 15.4594C12.8146 15.4149 12.5612 15.4449 12.3327 15.5458C12.1086 15.6418 11.9175 15.8013 11.7829 16.0045C11.6483 16.2078 11.5761 16.4459 11.5751 16.6897V16.8185C11.5751 17.2204 11.4155 17.6057 11.1313 17.8899C10.8472 18.174 10.4618 18.3337 10.06 18.3337C9.65811 18.3337 9.27273 18.174 8.98858 17.8899C8.70444 17.6057 8.5448 17.2204 8.5448 16.8185V16.7503C8.53894 16.4996 8.45777 16.2564 8.31186 16.0524C8.16594 15.8484 7.96203 15.693 7.72662 15.6064C7.49813 15.5055 7.24466 15.4755 6.9989 15.52C6.75315 15.5646 6.52638 15.6817 6.34783 15.8564L6.30238 15.9018C6.16166 16.0427 5.99456 16.1545 5.81062 16.2307C5.62669 16.307 5.42952 16.3462 5.23041 16.3462C5.0313 16.3462 4.83413 16.307 4.6502 16.2307C4.46626 16.1545 4.29916 16.0427 4.15844 15.9018C4.01757 15.7611 3.90581 15.594 3.82956 15.4101C3.75331 15.2261 3.71407 15.029 3.71407 14.8299C3.71407 14.6308 3.75331 14.4336 3.82956 14.2497C3.90581 14.0657 4.01757 13.8986 4.15844 13.7579L4.20389 13.7124C4.37854 13.5339 4.4957 13.3071 4.54026 13.0614C4.58482 12.8156 4.55474 12.5622 4.45389 12.3337C4.35786 12.1096 4.19841 11.9185 3.99516 11.7839C3.79191 11.6493 3.55373 11.5771 3.30996 11.5761H3.18117C2.77932 11.5761 2.39394 11.4165 2.10979 11.1323C1.82565 10.8482 1.66602 10.4628 1.66602 10.0609C1.66602 9.65909 1.82565 9.2737 2.10979 8.98956C2.39394 8.70541 2.77932 8.54578 3.18117 8.54578H3.24935C3.5001 8.53991 3.74329 8.45875 3.9473 8.31283C4.15131 8.16692 4.30671 7.963 4.39329 7.7276C4.49413 7.4991 4.52422 7.24563 4.47966 6.99988C4.4351 6.75413 4.31794 6.52736 4.14329 6.34881L4.09783 6.30336C3.95696 6.16264 3.8452 5.99554 3.76896 5.8116C3.69271 5.62766 3.65346 5.4305 3.65346 5.23139C3.65346 5.03227 3.69271 4.83511 3.76896 4.65117C3.8452 4.46724 3.95696 4.30013 4.09783 4.15942C4.23855 4.01854 4.40565 3.90679 4.58959 3.83054C4.77353 3.75429 4.97069 3.71504 5.1698 3.71504C5.36892 3.71504 5.56608 3.75429 5.75002 3.83054C5.93395 3.90679 6.10106 4.01854 6.24177 4.15942L6.28723 4.20487C6.46577 4.37952 6.69254 4.49668 6.9383 4.54124C7.18405 4.5858 7.43752 4.55572 7.66602 4.45487H7.72662C7.95069 4.35884 8.14179 4.19938 8.27639 3.99613C8.41099 3.79288 8.48323 3.55471 8.4842 3.31093V3.18214C8.4842 2.7803 8.64383 2.39492 8.92798 2.11077C9.21212 1.82662 9.59751 1.66699 9.99935 1.66699C10.4012 1.66699 10.7866 1.82662 11.0707 2.11077C11.3549 2.39492 11.5145 2.7803 11.5145 3.18214V3.25033C11.5155 3.4941 11.5877 3.73228 11.7223 3.93553C11.8569 4.13878 12.048 4.29823 12.2721 4.39427C12.5006 4.49511 12.754 4.52519 12.9998 4.48063C13.2455 4.43607 13.4723 4.31891 13.6509 4.14427L13.6963 4.09881C13.837 3.95794 14.0041 3.84618 14.1881 3.76993C14.372 3.69368 14.5692 3.65444 14.7683 3.65444C14.9674 3.65444 15.1646 3.69368 15.3485 3.76993C15.5324 3.84618 15.6995 3.95794 15.8403 4.09881C15.9811 4.23953 16.0929 4.40663 16.1691 4.59057C16.2454 4.7745 16.2846 4.97167 16.2846 5.17078C16.2846 5.36989 16.2454 5.56706 16.1691 5.75099C16.0929 5.93493 15.9811 6.10203 15.8403 6.24275L15.7948 6.2882C15.6202 6.46675 15.503 6.69352 15.4584 6.93927C15.4139 7.18503 15.444 7.4385 15.5448 7.66699V7.7276C15.6408 7.95167 15.8003 8.14276 16.0035 8.27737C16.2068 8.41197 16.445 8.4842 16.6887 8.48517H16.8175C17.2194 8.48517 17.6048 8.64481 17.8889 8.92895C18.1731 9.2131 18.3327 9.59848 18.3327 10.0003C18.3327 10.4022 18.1731 10.7876 17.8889 11.0717C17.6048 11.3558 17.2194 11.5155 16.8175 11.5155H16.7493C16.5056 11.5164 16.2674 11.5887 16.0641 11.7233C15.8609 11.8579 15.7014 12.049 15.6054 12.2731Z'
          stroke='#667085'
          strokeWidth='1.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_330_3512'>
          <rect
            width='20'
            height='20'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
