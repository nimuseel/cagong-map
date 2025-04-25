'use client';

import React, { useEffect, useState } from 'react';
import RegionFilter from '@/components/filters/RegionFilter';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [selectedCafe, setSelectedCafe] = useState('');

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async event => {
        if (event === 'SIGNED_OUT') {
          setIsSignedIn(false);
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setIsSignedIn(data.session !== null);
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, []);

  const handleKakaoLogin = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'kakao',
      });
    } catch (error) {
      console.error('Kakao login error:', error);
      alert(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex itesm-center overflow-hidden p-5">
      <div className="flex flex-2 h-screen">
        <div className="flex flex-col w-full gap-4">
          {!isSignedIn ? (
            <>
              <RegionFilter
                selectedRegion="전체"
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
            </>
          ) : (
            <>
              <RegionFilter
                selectedRegion={selectedRegion}
                onRegionChange={region => setSelectedRegion(region)}
              />
              <div>내가 다녀온 장소</div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-3 w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full justify-center items-center gap-6 h-full">
            {!isSignedIn ? (
              <>
                <h3 className="font-bold text-xl text-gray-800">
                  내가 다녀온 장소를 기록하세요.
                </h3>
                <Button variant="kakao" onClick={handleKakaoLogin}>
                  카카오 로그인
                </Button>
              </>
            ) : (
              <>
                <div
                  className="flex w-full items-center justify-end"
                  onClick={() => supabase.auth.signOut()}>
                  로그아웃
                </div>
                <div>
                  아직 등록한 장소가 없네요! 다녀온 장소를 등록하고, 편하게
                  보세요!
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
