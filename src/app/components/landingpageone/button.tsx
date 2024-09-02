import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
}) => {
  const baseStyles = 'tw-font-semibold tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2';
  
  const variants = {
    primary: 'tw-bg-pink-500 tw-text-white hover:tw-bg-pink-600 focus:tw-ring-pink-500',
    secondary: 'tw-bg-white tw-text-pink-500 hover:tw-bg-gray-100 focus:tw-ring-pink-500',
    outline: 'tw-bg-transparent tw-text-pink-500 tw-border tw-border-pink-500 hover:tw-bg-pink-50 focus:tw-ring-pink-500',
  };

  const sizes = {
    small: 'tw-px-4 tw-py-2 tw-text-sm',
    medium: 'tw-px-6 tw-py-3 tw-text-base',
    large: 'tw-px-8 tw-py-4 tw-text-lg',
  };

  const widthClass = fullWidth ? 'tw-w-full' : '';

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;