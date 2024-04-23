import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar />
      <div className="flex justify-center items-center w-full p-10">{children}</div>
    </div>
  );
};

export default Layout;
