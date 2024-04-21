import cn from 'classnames';
import { FC } from 'react';

interface Props {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  title?: string;
}

export const Checkbox: FC<Props> = (props) => {
  const { label, value = '', onChange = () => {}, checked = false, disabled, className, title } = props;
  let id = '';
  if (label) {
    id = `input-checkbox-${label.replace(' ', '-')}`;
  }
  return (
    <div className={cn(className)}>
      <input
        id={id}
        className={''}
        type='checkbox'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        checked={checked}
        disabled={disabled}
        title={title}
      />
      {label && (
        <label
          htmlFor={id}
          className={''}
          title={title}
        >
          {label}
        </label>
      )}
    </div>
  );
};
