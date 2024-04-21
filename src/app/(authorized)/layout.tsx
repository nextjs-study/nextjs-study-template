import { FC, HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<HTMLElement>;

const Layout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
