'use client';

import React, { useState } from 'react';
import RegionFilter from '@/components/filters/RegionFilter';
import { Cafe } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// 예시 카페 데이터
const SAMPLE_CAFES: Cafe[] = [
  {
    id: '1',
    name: '카페 서울숲',
    address: '서울시 성동구 서울숲2길 23-1',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    facilities: ['outlet', 'wifi', 'parking'],
    operatingHours: {
      open: '10:00',
      close: '22:00',
    },
    tags: ['콘센트 있음', '와이파이 빵빵', '주차 가능'],
  },
  {
    id: '2',
    name: '스타벅스 강남역점',
    address: '서울시 강남구 강남대로 396',
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8',
    facilities: ['outlet', 'wifi', '24h'],
    operatingHours: {
      open: '00:00',
      close: '24:00',
    },
    tags: ['24시간', '콘센트 있음', '와이파이 빵빵'],
  },
  {
    id: '3',
    name: '블루보틀 삼청점',
    address: '서울시 종로구 삼청로 13',
    imageUrl: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88',
    facilities: ['wifi', 'quiet'],
    operatingHours: {
      open: '08:00',
      close: '20:00',
    },
    tags: ['조용함', '와이파이 빵빵', '넓은 테이블'],
  },
  {
    id: '4',
    name: '카페 연남',
    address: '서울시 마포구 연남동 487-8',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    facilities: ['outlet', 'table', 'quiet'],
    operatingHours: {
      open: '11:00',
      close: '23:00',
    },
    tags: ['넓은 테이블', '콘센트 있음', '조용함'],
  },
  {
    id: '5',
    name: '커피한약방',
    address: '서울시 용산구 이태원로 234',
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8',
    facilities: ['wifi', 'table', 'parking'],
    operatingHours: {
      open: '10:30',
      close: '22:00',
    },
    tags: ['주차 가능', '넓은 테이블', '와이파이 빵빵'],
  },
  {
    id: '6',
    name: '브라운핸즈 판교',
    address: '경기도 성남시 분당구 판교역로 235',
    imageUrl: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88',
    facilities: ['outlet', 'wifi', 'table'],
    operatingHours: {
      open: '09:00',
      close: '21:00',
    },
    tags: ['콘센트 있음', '와이파이 빵빵', '넓은 테이블'],
  },
];

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedHours, setSelectedHours] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedCafe, setSelectedCafe] = useState('');

  // 실제 구현에서는 API 호출 등을 통해 데이터를 가져옵니다
  const cafes = SAMPLE_CAFES.filter(cafe => cafe.name.includes(searchQuery));

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFacilityChange = (facilityId: string) => {
    setSelectedFacilities(prev =>
      prev.includes(facilityId)
        ? prev.filter(id => id !== facilityId)
        : [...prev, facilityId],
    );
  };

  const handleHourChange = (hourId: string) => {
    setSelectedHours(prev =>
      prev.includes(hourId)
        ? prev.filter(id => id !== hourId)
        : [...prev, hourId],
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex itesm-center overflow-hidden">
      <div className="flex flex-2 h-screen p-5">
        <div className="flex flex-col w-full gap-4">
          <RegionFilter
            selectedRegion={selectedRegion}
            onRegionChange={region => setSelectedRegion(region)}
          />
          <div className="grid grid-cols-3 gap-4 w-full overflow-auto">
            {Array.from({ length: 5 }).map((_, key) => (
              <div
                className="h-68 relative"
                onClick={() => setSelectedCafe(`${key}`)}
                key={key}>
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
                  alt="img"
                  fill
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-3 w-full">
        <div className="flex flex-col w-full justify-center items-center gap-6">
          <h3 className="font-bold text-xl text-gray-800">
            내가 다녀온 장소를 기록하세요.
          </h3>
          <Button variant="kakao">카카오 로그인</Button>
        </div>
      </div>
    </div>
  );
}
