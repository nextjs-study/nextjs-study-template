'use client';

import { Button } from '@/components';
import { useFormState, useFormStatus } from 'react-dom';
import { Input } from '../inputs';

export const SignupForm = () => {
  const [errorMessage, dispatch] = useFormState(() => {}, undefined);
  const { pending } = useFormStatus();

  return (
    <form
      action={dispatch}
      className='max-w-[360px] flex-column'
    >
      <h2 className='mb-3 text-2xl text-center'>Create an account</h2>
      <p className='mt-3 mb-8 text-center'>Start your 30-day free trial.</p>
      <div className='w-full'>
        <div className='space-y-5'>
          <Input
            label='Name'
            name='name'
            className='w-full'
            required
            placeholder='Enter your name'
          />
          <Input
            label='Email'
            name='email'
            className='w-full'
            type='password'
            required
            placeholder='Enter your email'
          />
          <Input
            label='Password'
            name='password'
            className='w-full'
            type='password'
            required
            placeholder='Create a password'
          />
        </div>
      </div>
      <Button className='mt-4 w-full'>Get started</Button>
    </form>
  );
};
