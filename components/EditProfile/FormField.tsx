
import React from 'react';
import Icon from '../Icon';



interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'textarea' | 'email';
  icon?: string;
  maxLength?: number;
  placeholder?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  icon,
  maxLength,
  placeholder
}) => {
  const isTextarea = type === 'textarea';

  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-900 dark:text-white text-sm font-semibold ml-1">
        {label}
      </label>
      <div className="relative group">
        {isTextarea ? (
          <textarea
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 min-h-[120px] placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal transition-all"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal transition-all pr-12"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        )}

        {!isTextarea && icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <Icon name={icon} className="text-[20px]" />
          </div>
        )}
      </div>
      {isTextarea && maxLength && (
        <div className="flex justify-end px-1">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {value.length}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
};
