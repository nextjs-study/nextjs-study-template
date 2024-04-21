'use client';
import { Pagination } from '../Pagination/Pagination';
import styles from './Table.module.css';
import { TableHeading } from './TableHeading';
import { TableRow } from './TableRow';

export const Table = () => {
  return (
    <>
      <table className='w-full mb-6 rounded-xl border overflow-hidden divide-y border-spacing-0 border-separate'>
        <TableHeading />
        <tbody className='divide-y'>
          <TableRow className={styles['column-spacing']} />
          <TableRow className={styles['column-spacing']} />
          <TableRow className={styles['column-spacing']} />
          <TableRow className={styles['column-spacing']} />
          <TableRow className={styles['column-spacing']} />
        </tbody>
      </table>
      <Pagination totalPages={5} />
    </>
  );
};
