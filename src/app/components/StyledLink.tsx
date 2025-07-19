import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'

function StyledLink({href, children, className, style}: {href: string, children: React.ReactNode[] | string, className?: string, style?: React.CSSProperties}) {
  return (
    <Link 
      href={href} 
      className={clsx("border-b-2 border-black hover:text-black", className)}
    >
      {children}
    </Link>
  )
}

export default StyledLink;
