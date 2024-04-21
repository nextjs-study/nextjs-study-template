import cn from 'classnames';
import { FC, HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<HTMLDivElement>;

export const Container: FC<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={cn('px-[112px]', className)}
      {...rest}
    >
      {children}
    </div>
  );
};
