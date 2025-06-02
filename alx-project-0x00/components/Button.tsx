import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button
      className={`bg-blue-600 text-white px-4 py-2 font-medium ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
