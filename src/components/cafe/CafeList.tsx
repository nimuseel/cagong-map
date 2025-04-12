import React from 'react';
import { Cafe } from '@/types';
import CafeCard from '@/components/cafe/CafeCard';

interface CafeListProps {
  cafes: Cafe[];
}

function CafeList({ cafes }: CafeListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cafes.map((cafe) => (
        <CafeCard key={cafe.id} cafe={cafe} />
      ))}
    </div>
  );
}

export default CafeList; 