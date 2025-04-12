import React from 'react';
import Tag from '@/components/common/Tag';

interface Props {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const regions = ['전체', '서울', '경기', '인천', '부산', '대구', '더보기'];

function RegionFilter({ 
  selectedRegion,
  onRegionChange 
}: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {regions.map((region) => (
        <Tag
          key={region}
          label={region}
          active={selectedRegion === region}
          onClick={() => onRegionChange(region)}
        />
      ))}
    </div>
  );
}

export default RegionFilter; 