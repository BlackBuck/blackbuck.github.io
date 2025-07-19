import clsx from 'clsx';
import React from 'react';

function Container({children, classname}: {children: React.ReactNode, classname?: string}) {
  return (
    <div className={clsx("min-h-screen flex items-center justify-center", classname)}>
      {children}
    </div>
  )
}

export default Container
