
import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Only auto-collapse sidebar on initial load for mobile devices
  useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true);
    } else {
      setSidebarCollapsed(false);
    }
  }, [isMobile]); // Update when screen size changes

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileSidebarOpen(!mobileSidebarOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        mobileOpen={mobileSidebarOpen}
        toggleCollapsed={toggleSidebar}
        closeMobileSidebar={() => setMobileSidebarOpen(false)}
      />
      <div className={cn(
        "flex flex-col flex-1 transition-all duration-300 w-full",
        !isMobile && sidebarCollapsed ? "ml-16" : !isMobile ? "ml-64" : "ml-0"
      )}>
        <TopBar openMobileSidebar={() => setMobileSidebarOpen(true)} />
        <main className="flex-1 p-3 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
