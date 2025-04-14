
import React from 'react';
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
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SidebarProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  collapsed: boolean;
  active?: boolean;
  alert?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, collapsed, active, alert }: SidebarItemProps) => {
  return (
    <TooltipProvider delayDuration={collapsed ? 100 : 1000}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to={href}
            className={cn(
              "flex items-center p-3 my-1 rounded-md transition-colors relative group",
              collapsed ? "justify-center" : "px-4",
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            )}
          >
            <Icon className={cn("flex-shrink-0", collapsed ? "w-6 h-6" : "w-5 h-5 mr-3")} />
            {!collapsed && <span className="truncate">{label}</span>}
            {alert && (
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
            )}
          </Link>
        </TooltipTrigger>
        {collapsed && <TooltipContent side="right">{label}</TooltipContent>}
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

export const Sidebar = ({ collapsed, toggleCollapsed }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside
      className={cn(
        "bg-sidebar h-screen flex flex-col border-r border-sidebar-border transition-all duration-300 fixed top-0 left-0 z-40",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2 flex-1">
            <PawPrint className="h-8 w-8 text-kws-amber" />
            <span className="font-bold text-xl text-sidebar-foreground">KWS</span>
          </div>
        )}
        {collapsed && <PawPrint className="h-8 w-8 text-kws-amber mx-auto" />}
        <button
          onClick={toggleCollapsed}
          className="p-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80 transition-colors"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <div className={cn("flex-1 overflow-y-auto scrollbar-hidden", collapsed ? "px-2" : "px-3")}>
        <SidebarSection title="Overview" collapsed={collapsed}>
          <SidebarItem
            icon={Home}
            label="Dashboard"
            href="/"
            collapsed={collapsed}
            active={currentPath === "/"}
          />
          <SidebarItem 
            icon={BellRing} 
            label="Alerts" 
            href="/alerts" 
            collapsed={collapsed} 
            active={currentPath === "/alerts"}
            alert={true}
          />
        </SidebarSection>

        <SidebarSection title="Animal Management" collapsed={collapsed}>
          <SidebarItem
            icon={PawPrint}
            label="Animals"
            href="/animals"
            collapsed={collapsed}
            active={currentPath === "/animals"}
          />
          <SidebarItem
            icon={HeartPulse}
            label="Health Tracking"
            href="/health"
            collapsed={collapsed}
            active={currentPath === "/health"}
          />
          <SidebarItem
            icon={Bird}
            label="Conservation"
            href="/conservation"
            collapsed={collapsed}
            active={currentPath === "/conservation"}
          />
          <SidebarItem
            icon={Map}
            label="Tracking Map"
            href="/tracking"
            collapsed={collapsed}
            active={currentPath === "/tracking"}
          />
        </SidebarSection>

        <SidebarSection title="Visitor Experience" collapsed={collapsed}>
          <SidebarItem
            icon={Ticket}
            label="Ticketing"
            href="/tickets"
            collapsed={collapsed}
            active={currentPath === "/tickets"}
          />
          <SidebarItem
            icon={BookOpen}
            label="Education"
            href="/education"
            collapsed={collapsed}
            active={currentPath === "/education"}
          />
          <SidebarItem 
            icon={Globe} 
            label="Sustainability" 
            href="/sustainability" 
            collapsed={collapsed} 
            active={currentPath === "/sustainability"} 
          />
        </SidebarSection>

        <SidebarSection title="Operations" collapsed={collapsed}>
          <SidebarItem
            icon={Users}
            label="Staff"
            href="/staff"
            collapsed={collapsed}
            active={currentPath === "/staff"}
          />
          <SidebarItem
            icon={UserCog}
            label="Tasks"
            href="/tasks"
            collapsed={collapsed}
            active={currentPath === "/tasks"}
          />
          <SidebarItem
            icon={ShieldAlert}
            label="Security"
            href="/security"
            collapsed={collapsed}
            active={currentPath === "/security"}
          />
          <SidebarItem
            icon={Calendar}
            label="Schedule"
            href="/schedule"
            collapsed={collapsed}
            active={currentPath === "/schedule"}
          />
        </SidebarSection>

        <SidebarSection title="Analytics" collapsed={collapsed}>
          <SidebarItem
            icon={LineChart}
            label="Reports"
            href="/reports"
            collapsed={collapsed}
            active={currentPath === "/reports"}
          />
        </SidebarSection>
      </div>

      <div className="mt-auto border-t border-sidebar-border p-4">
        <SidebarItem
          icon={Settings}
          label="Settings"
          href="/settings"
          collapsed={collapsed}
          active={currentPath === "/settings"}
        />
      </div>
    </aside>
  );
};
