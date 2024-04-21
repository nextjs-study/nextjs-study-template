import cn from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import style from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'gray' | 'outline';
};

export const Button: FC<Props> = (props) => {
  const { children, className, variant = 'primary', ...rest } = props;
  return (
    <button
      className={cn('px-4.5 py-2.5 rounded-lg font-semibold text-base hover:opacity-90 active:opacity-80 flex justify-center items-center gap-2', style[`button-${variant}`], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
