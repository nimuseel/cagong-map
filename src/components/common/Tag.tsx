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
      className={`w-14 h-8 px-3 py-1 rounded-full box-border text-sm hover:cursor-pointer ${
        active 
          ? 'border-2 border-gray-80' 
          : 'bg-gray-100 text-gray-700'
      }`}
    >
      {label}
    </button>
  );
}

export default Tag; 