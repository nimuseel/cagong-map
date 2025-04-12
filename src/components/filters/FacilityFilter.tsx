import React from 'react';
import Tag from '@/components/common/Tag';

interface Facility {
  id: string;
  label: string;
}

interface Props {
  selectedFacilities: string[];
  onFacilityChange: (facilityId: string) => void;
}

const facilities: Facility[] = [
  { id: 'outlet', label: '콘센트 있음' },
  { id: 'wifi', label: '와이파이 빵빵' },
  { id: 'parking', label: '주차 가능' },
  { id: 'table', label: '넓은 테이블' },
  { id: 'quiet', label: '조용함' }
];

function FacilityFilter({
  selectedFacilities,
  onFacilityChange
}: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {facilities.map((facility) => (
        <Tag
          key={facility.id}
          label={facility.label}
          active={selectedFacilities.includes(facility.id)}
          onClick={() => onFacilityChange(facility.id)}
        />
      ))}
    </div>
  );
}

export default FacilityFilter; 