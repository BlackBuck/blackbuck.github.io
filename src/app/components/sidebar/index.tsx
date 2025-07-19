"use client";
import React, { useState } from 'react';
import useIsMobile from '@/app/hooks/IsMobile';
import StyledLink from '@/app/components/StyledLink';
import clsx from 'clsx';
import Typing from '../Typing';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
];

export default function Sidebar({ className }: { className?: string }) {
  const [open, setOpen] = useState(true);
  const isMobile = useIsMobile();

  return (
    <nav
      className={clsx(
        'z-20',
        'md:sticky md:top-6 md:left-6 md:h-[90vh] md:w-64 md:flex md:flex-col md:items-center md:justify-center md:gap-5 md:p-6 md:mr-6',
        'fixed top-2 left-3 right-3 w-[calc(100%-24px)] flex flex-row items-center justify-between p-3 gap-3 bg-white border-b-4 border-black shadow-[2px_3px_0_0_#000] md:shadow-[4px_6px_0_0_#000] font-mono md:border-b-0 md:border-r-4',
        className
      )}
      style={{ borderRadius: '0.25rem' }}
    >
      {/* Typing effect for name if not mobile */}
      {!isMobile && (
        <Typing
          text="/blackbuck"
          speed={100}
          className="text-2xl md:text-3xl font-bold text-black font-mono"
        />
      )}
      {/* Avatar and toggle for mobile */}
      <div className="flex items-center gap-2">
        <img
          src="/avatar.png"
          alt="Avatar"
          className={clsx(
            'bg-white object-cover',
            'w-10 h-10 rounded-full md:w-40 md:h-40 md:rounded-none'
          )}
        />
      {isMobile && (
        <Typing
          text="/blackbuck"
          speed={100}
          className="text-sm font-bold text-black font-mono"
        />
      )}
      </div>
      {/* Links */}
      <div
        className={clsx(
          'flex-row gap-3 items-center md:flex-col md:gap-5 md:items-center md:justify-center',
          'md:flex',
          'flex text-xs md:text-base',
          'md:!flex'
        )}
      >
        {links.map((link) => (
          <StyledLink
            key={link.href}
            href={link.href}
            className={clsx(
              "border-2 border-black shadow-[4px_2px_0_0_#000] bg-yellow-300 text-black px-4 py-2 rounded-sm",
              "transition-transform font-bold",
              "hover:translate-x-1 hover:translate-y-1",
              "hover:shadow-none"
            )}
          >
            {link.name}
          </StyledLink>
        ))}
      </div>
    </nav>
  );
}
