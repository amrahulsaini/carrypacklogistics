'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // Listen for any internal link click and show the loader immediately
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      // Show loader only for same-origin internal navigation links that differ from current path
      if (
        href &&
        href.startsWith('/') &&
        href !== pathname &&
        !href.startsWith('/#')
      ) {
        setLoading(true);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [pathname]);

  // Hide loader once navigation is complete (pathname in sync)
  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
      <div className="mb-8">
        <span
          className="text-[#1a365d] font-bold text-xl tracking-tight"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          Carry Pack
        </span>
        <span className="text-gray-400 font-light text-xl tracking-tight ml-1">
          Logistics
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#1a365d] loading-dot"
          style={{ animationDelay: '0ms' }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#c8a951] loading-dot"
          style={{ animationDelay: '150ms' }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#1a365d] loading-dot"
          style={{ animationDelay: '300ms' }}
        />
      </div>
    </div>
  );
}
