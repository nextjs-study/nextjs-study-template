import { Container } from '@/components';
import cn from 'classnames';
import { FC, HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<HTMLElement>;

const Layout: FC<Props> = ({ children }) => {
  return <Container className={cn('h-[calc(100vh-80px)] flex flex-col justify-center items-center')}>{children}</Container>;
};

export default Layout;
