
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  PawPrint,
  Users,
  ShieldAlert,
  LineChart,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  Ticket,
  Map,
  UserCog,
  BookOpen,
  HeartPulse,
  Bird,
  Globe,
  BellRing,
  X,
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  toggleCollapsed: () => void;
  closeMobileSidebar: () => void;
}

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  collapsed: boolean;
  onClick?: () => void;
  active?: boolean;
  alert?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, collapsed, onClick, active, alert }: SidebarItemProps) => {
  const isMobile = useIsMobile();
  const content = (
    <Link
      to={href}
      className={cn(
        "flex items-center p-3 my-1 rounded-md transition-colors relative group",
        collapsed ? "justify-center" : "px-4",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      )}
      onClick={onClick}
    >
      <Icon className={cn("flex-shrink-0", collapsed ? "w-6 h-6" : "w-5 h-5 mr-3")} />
      {!collapsed && <span className="truncate">{label}</span>}
      {alert && (
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
      )}
    </Link>
  );

  if (isMobile || !collapsed) {
    return content;
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const SidebarSection = ({ title, children, collapsed }: { title: string; children: React.ReactNode; collapsed: boolean }) => {
  if (collapsed) {
    return <div className="mt-6 mb-2 px-2">{children}</div>;
  }
  
  return (
    <div className="mt-6 mb-2">
      <div className="px-4 mb-2">
        <h3 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
};

export const Sidebar = ({ collapsed, mobileOpen, toggleCollapsed, closeMobileSidebar }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();

  // Close mobile sidebar when route changes
  useEffect(() => {
    if (isMobile && mobileOpen) {
      closeMobileSidebar();
    }
  }, [currentPath, isMobile, mobileOpen, closeMobileSidebar]);

  const sidebarContent = (
    <>
      <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2 flex-1">
            <PawPrint className="h-8 w-8 text-kws-amber" />
            <span className="font-bold text-xl text-sidebar-foreground">KWS</span>
          </div>
        )}
        {collapsed && !isMobile && <PawPrint className="h-8 w-8 text-kws-amber mx-auto" />}
        {isMobile && (
          <div className="flex items-center gap-2 flex-1">
            <PawPrint className="h-8 w-8 text-kws-amber" />
            <span className="font-bold text-xl text-sidebar-foreground">KWS</span>
          </div>
        )}
        {!isMobile && (
          <button
            onClick={toggleCollapsed}
            className="p-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80 transition-colors"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        )}
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={closeMobileSidebar}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className={cn("flex-1 overflow-y-auto scrollbar-hidden", collapsed && !isMobile ? "px-2" : "px-3")}>
        <SidebarSection title="Overview" collapsed={collapsed && !isMobile}>
          <SidebarItem
            icon={Home}
            label="Dashboard"
            href="/"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
          <SidebarItem 
            icon={BellRing} 
            label="Alerts" 
            href="/alerts" 
            collapsed={collapsed && !isMobile} 
            active={currentPath === "/alerts"}
            alert={true}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
        </SidebarSection>

        <SidebarSection title="Animal Management" collapsed={collapsed && !isMobile}>
          <SidebarItem
            icon={PawPrint}
            label="Animals"
            href="/animals"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/animals"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
          <SidebarItem
            icon={HeartPulse}
            label="Health Tracking"
            href="/health"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/health"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
          <SidebarItem
            icon={Bird}
            label="Conservation"
            href="/conservation"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/conservation"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
          <SidebarItem
            icon={Map}
            label="Tracking Map"
            href="/tracking"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/tracking"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
        </SidebarSection>

        <SidebarSection title="Visitor Experience" collapsed={collapsed && !isMobile}>
          <SidebarItem
            icon={Ticket}
            label="Ticketing"
            href="/tickets"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/tickets"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
          <SidebarItem
            icon={BookOpen}
            label="Education"
            href="/education"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/education"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
          <SidebarItem 
            icon={Globe} 
            label="Sustainability" 
            href="/sustainability" 
            collapsed={collapsed && !isMobile} 
            active={currentPath === "/sustainability"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
        </SidebarSection>

        <SidebarSection title="Operations" collapsed={collapsed && !isMobile}>
          <SidebarItem
            icon={Users}
            label="Staff"
            href="/staff"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/staff"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
          <SidebarItem
            icon={UserCog}
            label="Tasks"
            href="/tasks"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/tasks"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
          <SidebarItem
            icon={ShieldAlert}
            label="Security"
            href="/security"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/security"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
          <SidebarItem
            icon={Calendar}
            label="Schedule"
            href="/schedule"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/schedule"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
        </SidebarSection>

        <SidebarSection title="Analytics" collapsed={collapsed && !isMobile}>
          <SidebarItem
            icon={LineChart}
            label="Reports"
            href="/reports"
            collapsed={collapsed && !isMobile}
            active={currentPath === "/reports"}
            onClick={isMobile ? closeMobileSidebar : undefined}
          />
        </SidebarSection>
      </div>

      <div className="mt-auto border-t border-sidebar-border p-4">
        <SidebarItem
          icon={Settings}
          label="Settings"
          href="/settings"
          collapsed={collapsed && !isMobile}
          active={currentPath === "/settings"}
          onClick={isMobile ? closeMobileSidebar : undefined}
        />
      </div>
    </>
  );

  // For mobile devices, use a slide-out drawer
  if (isMobile) {
    return (
      <Sheet open={mobileOpen} onOpenChange={closeMobileSidebar}>
        <SheetContent side="left" className="w-[280px] p-0 bg-sidebar text-sidebar-foreground">
          {sidebarContent}
        </SheetContent>
      </Sheet>
    );
  }

  // For desktop devices, use the regular sidebar
  return (
    <aside
      className={cn(
        "bg-sidebar h-screen flex flex-col border-r border-sidebar-border transition-all duration-300 fixed top-0 left-0 z-40",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {sidebarContent}
    </aside>
  );
};
