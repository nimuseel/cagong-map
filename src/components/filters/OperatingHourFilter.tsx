import React from 'react';
import Tag from '@/components/common/Tag';

interface OperatingHour {
  id: string;
  label: string;
}

interface Props {
  selectedHours: string[];
  onHourChange: (hourId: string) => void;
}

const operatingHours: OperatingHour[] = [
  { id: '24h', label: '24시간' },
  { id: 'after22', label: '22시 이후' },
  { id: 'weekend', label: '주말 운영' }
];

function OperatingHourFilter({
  selectedHours,
  onHourChange
}: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {operatingHours.map((hour) => (
        <Tag
          key={hour.id}
          label={hour.label}
          active={selectedHours.includes(hour.id)}
          onClick={() => onHourChange(hour.id)}
        />
      ))}
    </div>
  );
}

export default OperatingHourFilter; 