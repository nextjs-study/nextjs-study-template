'use client';

import { Button, Container, MetricCard, Table } from '@/components';
import { Plus, Trash } from '@/components/icons';
import { Input } from '@/components/inputs';
import { updateUserData } from '@/lib/server/api/actions';
import { EPages } from '@/types/utils';
import Link from 'next/link';
import { FC } from 'react';
import { useFormState } from 'react-dom';

const Page = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState<any, any>(updateUserData, initialState);
  return (
    <Container className='flex items-center justify-center py-12'>
      <form
        action={dispatch}
        className='w-full max-w-[640px] flex flex-col items-end gap-4'
      >
        <div className='w-full'>
          <h2>Personal info</h2>
          <p>Update your personal details here.</p>
        </div>
        <div className='w-full flex flex-col gap-4 '>
          <Input
            name='name'
            label='Name'
            placeholder='Your full name here'
            required
          />
          <Input
            name='email'
            label='Email address'
            type='email'
            placeholder='Your email here'
            required
          />
        </div>

        <Button
          type='submit'
          className='flex justify-center'
        >
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default Page;
