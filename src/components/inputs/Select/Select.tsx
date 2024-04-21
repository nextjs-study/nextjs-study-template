'use client';

import cn from 'classnames';
import { FC, HTMLInputTypeAttribute, ReactElement } from 'react';

type Props = {
  required?: boolean;
  className?: string;
  outerClassName?: string;
  labelClassName?: string;
  options?: Array<{ title: string; value?: string | number }>;
  id?: string;
  name: string;
  multiple?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export const Select: FC<Props> = (props) => {
  const { required = false, outerClassName = '', className = '', labelClassName = '', id = '', name, multiple = false, options = [{ title: 'Select...' }], onChange = () => {}, placeholder = '', label = '' } = props;

  const optionsList = options.map(({ title, value }) => {
    return <option value={value}>{title}</option>;
  });

  return (
    <div className={cn('grow', outerClassName)}>
      {label && (
        <label
          className={cn('mb-[6px] text-slate-700 text-sm font-medium leading-tight', labelClassName)}
          htmlFor={name}
        >
          {label}
          {required ? '*' : ''}
        </label>
      )}
      <select
        className={cn(`w-full h-[46px] pr-3.5 py-2.5 pl-3.5 rounded-md border border-gray-300 text-base outline-2 placeholder:text-gray-500 shadow-sm bg-transparent`, className)}
        id={id}
        name={name}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        multiple={multiple}
      >
        {optionsList}
      </select>
    </div>
  );
};
