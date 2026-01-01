
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'flex items-center justify-center rounded-full font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-600',
    secondary: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-100',
    outline: 'border border-gray-200 dark:border-gray-700 text-text-main dark:text-white bg-white dark:bg-transparent hover:bg-gray-50',
    ghost: 'bg-transparent text-primary hover:bg-primary/5'
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
