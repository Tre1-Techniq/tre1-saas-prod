"use client"

import React from 'react';

type DevLabLayoutProps = {
    children: React.ReactNode;
};

const DevLabLayout: React.FC<DevLabLayoutProps> = ({ children }: DevLabLayoutProps) => {

  return (
    <>
      <div className='body-active-devlab'>{children}</div>
    </>
  );
};

export default DevLabLayout;