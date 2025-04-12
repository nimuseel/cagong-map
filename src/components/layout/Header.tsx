import React from 'react';
import SearchBar from '@/components/common/SearchBar';

interface Props {
  onSearch: (query: string) => void;
}

function Header({ onSearch }: Props) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className='flex items-center justify-center w-7 h-7 bg-purple-500 rounded-md text-lg'>☕️</div>
            <h1 className="text-xl font-bold text-purple-600">카공맵</h1>
          </div>
          <div className="flex-1 max-w-3xl mx-8">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;