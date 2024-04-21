'use client';

import cn from 'classnames';
import { FC } from 'react';

type Props = {
  required?: boolean;
  className?: string;
  outerClassName?: string;
  value?: string | number;
  id?: string;
  name: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export const Textarea: FC<Props> = (props) => {
  const { required = false, outerClassName = '', className = '', id = '', name, value = '', onChange = () => {}, placeholder = '', label = '' } = props;

  return (
    <div className={cn('w-full', outerClassName)}>
      {label && (
        <label
          className='block mb-[6px] text-slate-700 text-sm font-medium leading-tight'
          htmlFor={name}
        >
          {label}
          {required ? '*' : ''}
        </label>
      )}
      <textarea
        className={cn(`w-full min-h-[120px] pr-3.5 py-2.5 pl-3.5 rounded-md border border-gray-300 text-base outline-2 placeholder:text-gray-500 shadow-sm appearance-none`, className)}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};
