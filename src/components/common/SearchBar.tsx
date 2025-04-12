import React from 'react';
import SearchIcon from '../../../public/icons/search.svg'
import Image from 'next/image';

interface Props {
  placeholder?: string;
  onSearch: (query: string) => void;
}

function SearchBar({ 
  placeholder = "카페 이름으로 검색",
  onSearch 
}: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    onSearch(input.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="relative">
        <input
          type="text"
          name="search"
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-3 text-white rounded-r-ful transition-colors"
        >
          <Image 
            src={SearchIcon} 
            alt="검색" 
            width={15} 
            height={15} 
          />
        </button>
      </div>
    </form>
  );
}

export default SearchBar; 