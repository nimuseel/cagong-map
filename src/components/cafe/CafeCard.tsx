import React from 'react';
import Image from 'next/image';
import { Cafe } from '@/types';
import Tag from '@/components/common/Tag';

interface Props {
  cafe: Cafe;
}

export default function CafeCard({ cafe }: Props) {
  const handleNaverMapClick = () => {
    const query = encodeURIComponent(`${cafe.name}`);
    window.open(`https://map.naver.com/v5/search/${query}`, '_blank');
  };

  const handleKakaoMapClick = () => {
    const query = encodeURIComponent(`${cafe.name}`);
    window.open(`https://map.kakao.com/link/search/${query}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={cafe.imageUrl}
          alt={cafe.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-gray-800">{cafe.name}</h3>
          <div className="flex gap-2">
            <button
              onClick={handleNaverMapClick}
              className="w-6 h-6 flex items-cenater justify-center hover:cursor-pointer"
              aria-label="네이버 지도에서 보기"
            >
              <Image
                src="/icons/naver-map.png"
                alt="네이버 지도"
                width={24}
                height={24}
                priority
              />
            </button>
            <button
              onClick={handleKakaoMapClick}
              className="w-6 h-6 flex items-center justify-center hover:cursor-pointer"
              aria-label="카카오맵에서 보기"
            >
              <Image
                src="/icons/kakao-map.png"
                alt="카카오맵"
                width={24}
                height={24}
                priority
              />
            </button>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">{cafe.address}</p>
        <div className="flex flex-wrap gap-2">
          {cafe.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="mt-3 text-gray-600 text-sm">
          {cafe.operatingHours.open} - {cafe.operatingHours.close}
        </div>
      </div>
    </div>
  );
} 