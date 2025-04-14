
import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { Settings as SettingsIcon, User, Lock, Bell, Globe, Moon, Sun, MonitorSmartphone, Save, Database, Shield, Mail, Laptop } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useIsMobile } from '@/hooks/use-mobile';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Settings = () => {
  const isMobile = useIsMobile();
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  
  const handleThemeChange = (value: string) => {
    setTheme(value as 'light' | 'dark' | 'system');
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (value === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // Handle system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  };

  return (
    <PageTemplate 
      title="System Settings" 
      description="Configure system preferences and settings"
      icon={<SettingsIcon className="h-6 w-6" />}
    >
      <div className="space-y-6">
        <Tabs defaultValue="account" className="space-y-4">
          <div className="overflow-x-auto">
            <TabsList className="mb-4">
              <TabsTrigger value="account" className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>Account</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-1.5">
                <MonitorSmartphone className="h-4 w-4" />
                <span>Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-1.5">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-1.5">
                <Shield className="h-4 w-4" />
                <span>Security</span>
              </TabsTrigger>
              <TabsTrigger value="system" className="flex items-center gap-1.5">
                <Database className="h-4 w-4" />
                <span>System</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Account Settings */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Account Settings</CardTitle>
                <CardDescription>
                  Manage your account information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" defaultValue="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Your email" defaultValue="jane.doe@kws.org" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Job Role</Label>
                      <Input id="role" placeholder="Your role" defaultValue="Park Supervisor" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-start p-4 border rounded-md">
                    <div className="mb-4 bg-muted rounded-full w-32 h-32 flex items-center justify-center overflow-hidden">
                      <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <Button variant="outline" className="mb-2">Change Photo</Button>
                    <Button variant="ghost" size="sm" className="text-destructive">Remove Photo</Button>
                  </div>
                </div>

                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Preferences</h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="sw">Swahili</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="eat">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eat">East Africa Time (UTC+3)</SelectItem>
                          <SelectItem value="gmt">Greenwich Mean Time (UTC+0)</SelectItem>
                          <SelectItem value="edt">Eastern Daylight Time (UTC-4)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button className="flex items-center gap-1.5">
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Appearance</CardTitle>
                <CardDescription>
                  Customize how the KWS system looks on your device
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Theme</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`border rounded-md p-4 cursor-pointer transition-all ${theme === 'light' ? 'border-primary' : 'border-muted'}`}
                      onClick={() => handleThemeChange('light')}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                          <Sun className="h-5 w-5" />
                          <span className="font-medium">Light</span>
                        </div>
                        {theme === 'light' && (
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        )}
                      </div>
                      <div className="h-20 bg-gray-100 rounded-md border"></div>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-4 cursor-pointer transition-all ${theme === 'dark' ? 'border-primary' : 'border-muted'}`}
                      onClick={() => handleThemeChange('dark')}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                          <Moon className="h-5 w-5" />
                          <span className="font-medium">Dark</span>
                        </div>
                        {theme === 'dark' && (
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        )}
                      </div>
                      <div className="h-20 bg-gray-800 rounded-md border border-gray-700"></div>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-4 cursor-pointer transition-all ${theme === 'system' ? 'border-primary' : 'border-muted'}`}
                      onClick={() => handleThemeChange('system')}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5" />
                          <span className="font-medium">System</span>
                        </div>
                        {theme === 'system' && (
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        )}
                      </div>
                      <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-800 rounded-md border"></div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Display Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Reduce Motion</Label>
                        <p className="text-sm text-muted-foreground">
                          Reduce the motion of interface elements
                        </p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Larger Text</Label>
                        <p className="text-sm text-muted-foreground">
                          Increase the size of text throughout the application
                        </p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">High Contrast</Label>
                        <p className="text-sm text-muted-foreground">
                          Increase contrast between elements
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button className="flex items-center gap-1.5">
                  <Save className="h-4 w-4" />
                  <span>Save Preferences</span>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Notification Preferences</CardTitle>
                <CardDescription>
                  Choose which notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">System Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Critical alerts about system status
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Animal Health Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Notifications about animal health issues
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Daily Reports</Label>
                        <p className="text-sm text-muted-foreground">
                          Daily summary of park activities
                        </p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Ticket Sales</Label>
                        <p className="text-sm text-muted-foreground">
                          Updates about ticket sales and revenue
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Push Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Security Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Urgent security notifications
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Task Assignments</Label>
                        <p className="text-sm text-muted-foreground">
                          Notifications about new assigned tasks
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Comments & Mentions</Label>
                        <p className="text-sm text-muted-foreground">
                          Notifications when you're mentioned or commented on
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button className="flex items-center gap-1.5">
                  <Save className="h-4 w-4" />
                  <span>Save Notification Settings</span>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security and authentication options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Change Password</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button>Update Password</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Enable Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <Button variant="outline">Set Up Two-Factor Authentication</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Session Management</h3>
                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">Current Session</h4>
                          <p className="text-sm text-muted-foreground">Windows 10 • Chrome • Nairobi, Kenya</p>
                          <p className="text-xs text-muted-foreground mt-1">Started 2 hours ago</p>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">iPhone 13</h4>
                          <p className="text-sm text-muted-foreground">iOS 16 • Safari • Nairobi, Kenya</p>
                          <p className="text-xs text-muted-foreground mt-1">Last active 2 days ago</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          Revoke
                        </Button>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">Sign Out of All Sessions</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">System Settings</CardTitle>
                <CardDescription>
                  Configure system-wide settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Management</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Automatic Backups</Label>
                        <p className="text-sm text-muted-foreground">
                          Schedule automatic backups of system data
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="backup-frequency">Backup Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger id="backup-frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button variant="outline">Run Manual Backup</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">API Access</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Enable External API Access</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow external applications to access the KWS API
                        </p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="border rounded-md p-4 bg-muted/20">
                      <h4 className="font-medium mb-2">API Keys</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        No API keys have been generated. Enable external API access to generate keys.
                      </p>
                      <Button variant="outline" disabled>Generate API Key</Button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">System Maintenance</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Button variant="outline" className="flex gap-1.5 items-center justify-center">
                      <Database className="h-4 w-4" />
                      <span>Clear Cache</span>
                    </Button>
                    <Button variant="outline" className="flex gap-1.5 items-center justify-center">
                      <Mail className="h-4 w-4" />
                      <span>Test Email Configuration</span>
                    </Button>
                    <Button variant="outline" className="flex gap-1.5 items-center justify-center">
                      <Lock className="h-4 w-4" />
                      <span>Reset Permissions</span>
                    </Button>
                    <Button variant="outline" className="flex gap-1.5 items-center justify-center text-destructive">
                      <Shield className="h-4 w-4" />
                      <span>Security Audit</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button className="flex items-center gap-1.5">
                  <Save className="h-4 w-4" />
                  <span>Save System Settings</span>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTemplate>
  );
};

export default Settings;
