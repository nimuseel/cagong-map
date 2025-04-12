import React from 'react';

interface Props {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function Tag({ label, active = false, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm ${
        active 
          ? 'bg-purple-500 text-white' 
          : 'bg-gray-100 text-gray-700'
      }`}
    >
      {label}
    </button>
  );
}

export default Tag; 