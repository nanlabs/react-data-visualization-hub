import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
