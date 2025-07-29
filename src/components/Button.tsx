import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  bg: string; // class name like 'bg-blue-500'
}

const Button: FC<ButtonProps> = ({ text, bg }) => {
  return (
    <button
      className={`${bg} px-1 rounded-sm hover:bg-red-600 border border-gray-600 transition transform`}
    >
      {text}
    </button>
  );
};

export default Button;
