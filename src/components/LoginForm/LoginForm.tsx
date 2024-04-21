'use client';

import { Button } from '@/components';
import { useFormState, useFormStatus } from 'react-dom';
import { Input } from '../inputs';

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(() => {}, undefined);
  const { pending } = useFormStatus();

  return (
    <form
      action={dispatch}
      className='max-w-[360px] flex-column'
    >
      <h2 className='mb-3 text-2xl text-center'>Welcome Back</h2>
      <p className='mt-3 mb-8 text-center'>Continue using the platform</p>
      <div className='space-y-5 w-full'>
        <Input
          label='Email'
          name='email'
          className='w-full'
          required
        />
        <Input
          label='Password'
          name='password'
          className='w-full'
          required
        />
      </div>
      <Button className='mt-4 w-full'>Log in</Button>
    </form>
  );
};
