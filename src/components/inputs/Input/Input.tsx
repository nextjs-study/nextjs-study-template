'use client';

import cn from 'classnames';
import { FC, HTMLInputTypeAttribute, ReactElement } from 'react';

type Props = {
  required?: boolean;
  className?: string;
  labelClassName?: string;
  outerClassName?: string;
  value?: string | number;
  id?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export const Input: FC<Props> = (props) => {
  const { required = false, outerClassName = '', className = '', labelClassName = '', id = '', name, type = 'text', value = '', onChange = () => {}, placeholder = '', label = '' } = props;

  return (
    <div className={cn('grow', outerClassName)}>
      {label && (
        <label
          className={cn('block mb-[6px] text-slate-700 text-sm font-medium leading-tight', labelClassName)}
          htmlFor={name}
        >
          {label}
          {required ? '*' : ''}
        </label>
      )}
      <input
        className={cn(`w-full pr-3.5 py-2.5 pl-3.5 rounded-md border border-gray-300 text-base outline-2 placeholder:text-gray-500 shadow-sm appearance-none`, className)}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};
