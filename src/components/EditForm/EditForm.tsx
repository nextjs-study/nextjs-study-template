'use client';

import Link from 'next/link';
import { Breadcrumbs, Button } from '@/components';
import { createRecord } from '@/lib/server/api/actions';
import { useFormState } from 'react-dom';
import { Input, Select, Textarea } from '@/components/inputs';
import { EPages } from '@/types/utils';

export const EditForm = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState<any, any>(createRecord, initialState);

  return (
    <form
      action={dispatch}
      className='w-full max-w-[640px] flex flex-col gap-4'
    >
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Dashboard', href: EPages.DASHBOARD },
          { label: 'Edit', href: `${EPages.RECORDS}/edit`, active: true },
        ]}
      />
      <Input
        name='title'
        label='Title'
        placeholder='What is your title?'
        required
      />
      <Input
        name='domain'
        label='Domain'
        placeholder='www.example.com'
        required
      />
      <div className='flex gap-4 '>
        <Input
          className='grow'
          name='licenseUse'
          label='License Use'
          type='number'
          placeholder='0-100'
          required
        />

        <Select
          className=''
          name='status'
          label='Status'
        />
      </div>

      <Input
        name='descriptionTitle'
        label='Description Title'
        placeholder='What is your title?'
        required
      />
      <Textarea
        name='description'
        label='Description'
        placeholder='e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints.'
        required
      />

      <div className='mt-6 flex justify-stretch gap-4'>
        <Link
          href='/dashboard'
          className='grow'
        >
          <Button
            variant='gray'
            className='w-full flex justify-center'
          >
            Cancel
          </Button>
        </Link>
        <Button
          type='submit'
          className='w-[50%] flex justify-center'
        >
          Save
        </Button>
      </div>
    </form>
  );
};
