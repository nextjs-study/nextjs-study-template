import { Button, Container, MetricCard, Table } from '@/components';
import { Plus, Trash } from '@/components/icons';
import { Input } from '@/components/inputs';
import { EPages } from '@/types/utils';
import Link from 'next/link';
import { FC } from 'react';

const Page = () => {
  return (
    <Container className='py-12'>
      <h2 className=''>Welcome back, Olivia</h2>
      <p className=''>Your current sales summary and activity.</p>
      <div className='w-full flex space-x-6 my-8'>
        <MetricCard
          title="Today's revenue"
          stat='$1280'
          percentage={15}
          dynamic='asc'
        />
        <MetricCard
          title="Today's order"
          stat='14'
          percentage={10}
          dynamic='desc'
        />
        <MetricCard
          title='Avg. order value'
          stat='$91.42'
          percentage={20}
          dynamic='asc'
        />
      </div>
      <div className='flex items-center space-x-4 mb-6'>
        <div>
          <Input
            name='search'
            placeholder='Search'
          />
        </div>
        <Link href={`${EPages.RECORDS}/create`}>
          <Button>
            <Plus />
            Create Record
          </Button>
        </Link>
        <Button variant='outline'>
          <Trash /> Delete Selected
        </Button>
      </div>
      <Table />
    </Container>
  );
};

export default Page;
