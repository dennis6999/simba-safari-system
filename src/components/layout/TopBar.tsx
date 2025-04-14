
import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Sun, 
  Moon,
  Globe,
  User,
  HelpCircle,
  MessageSquare,
  Menu
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

interface TopBarProps {
  openMobileSidebar: () => void;
}

export const TopBar = ({ openMobileSidebar }: TopBarProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const isMobile = useIsMobile();
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center space-x-4 lg:space-x-0">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={openMobileSidebar} className="mr-2">
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <div className="relative md:w-80">
          {!isMobile && (
            <>
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8 md:w-60 lg:w-80"
              />
            </>
          )}
          {isMobile && (
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        {!isMobile && (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-80 overflow-auto">
                  <DropdownMenuItem className="cursor-pointer py-3">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-sm">Health Alert: Lion (ID: L-207)</p>
                      <p className="text-xs text-muted-foreground">Showing signs of reduced appetite. Vet check recommended.</p>
                      <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer py-3">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-sm">Perimeter Alert: Section B</p>
                      <p className="text-xs text-muted-foreground">Motion detected near outer fence. Security team dispatched.</p>
                      <p className="text-xs text-muted-foreground mt-1">20 minutes ago</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer py-3">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-sm">Low Supply: Elephant Feed</p>
                      <p className="text-xs text-muted-foreground">Inventory below 15%. Please reorder within 3 days.</p>
                      <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                    </div>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center font-medium">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">English</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Swahili</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </>
        )}

        {/* Mobile Notification Button */}
        {isMobile && (
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent">
              3
            </Badge>
          </Button>
        )}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>KWS</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
            {isMobile && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={toggleTheme}>
                  {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Language</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Help Center</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Messages</DropdownMenuItem>
              </>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
