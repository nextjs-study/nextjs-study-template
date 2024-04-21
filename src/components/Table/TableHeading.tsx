import styles from './Table.module.css';
import cn from 'classnames';
import { TableHeadingItem } from './TableHeadingItem';

export const TableHeading = () => {
  return (
    <thead>
      <tr className={cn('px-6 py-3', styles['column-spacing'])}>
        <TableHeadingItem
          title='Company'
          sort
          checkbox
        />
        <TableHeadingItem title='License use' />
        <TableHeadingItem title='Status' />
        <TableHeadingItem title='About' />
        <TableHeadingItem title='' />
      </tr>
    </thead>
  );
};
