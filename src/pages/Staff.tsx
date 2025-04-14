
import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { Users, Search, Filter, Plus, Mail, Phone, MapPin, UserCheck, UserCog, BriefcaseMedical, Shield, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Staff = () => {
  const isMobile = useIsMobile();
  const [department, setDepartment] = useState('all');
  
  // Mock staff data
  const staffMembers = [
    {
      id: 1,
      name: 'Dr. Jane Wanjiku',
      role: 'Chief Veterinarian',
      department: 'veterinary',
      contactEmail: 'jane.wanjiku@kws.org',
      contactPhone: '+254 712 345 678',
      location: 'Main Office',
      startDate: 'Apr 2018',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
    {
      id: 2,
      name: 'David Ochieng',
      role: 'Senior Ranger',
      department: 'security',
      contactEmail: 'david.ochieng@kws.org',
      contactPhone: '+254 723 456 789',
      location: 'Eastern Section',
      startDate: 'Feb 2015',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=68',
    },
    {
      id: 3,
      name: 'Sarah Kimani',
      role: 'Conservation Officer',
      department: 'conservation',
      contactEmail: 'sarah.kimani@kws.org',
      contactPhone: '+254 734 567 890',
      location: 'Main Office',
      startDate: 'Nov 2019',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    {
      id: 4,
      name: 'Daniel Njoroge',
      role: 'Assistant Veterinarian',
      department: 'veterinary',
      contactEmail: 'daniel.njoroge@kws.org',
      contactPhone: '+254 745 678 901',
      location: 'Field Hospital',
      startDate: 'Jun 2020',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=59',
    },
    {
      id: 5,
      name: 'Grace Muthoni',
      role: 'Research Lead',
      department: 'research',
      contactEmail: 'grace.muthoni@kws.org',
      contactPhone: '+254 756 789 012',
      location: 'Main Office',
      startDate: 'Aug 2017',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    {
      id: 6,
      name: 'Paul Kiprono',
      role: 'Senior Ranger',
      department: 'security',
      contactEmail: 'paul.kiprono@kws.org',
      contactPhone: '+254 767 890 123',
      location: 'Northern Section',
      startDate: 'Apr 2016',
      status: 'leave',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 7,
      name: 'Eunice Akinyi',
      role: 'Visitor Operations',
      department: 'operations',
      contactEmail: 'eunice.akinyi@kws.org',
      contactPhone: '+254 778 901 234',
      location: 'Visitor Center',
      startDate: 'Mar 2021',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=24',
    },
    {
      id: 8,
      name: 'James Kamau',
      role: 'IT Specialist',
      department: 'operations',
      contactEmail: 'james.kamau@kws.org',
      contactPhone: '+254 789 012 345',
      location: 'Main Office',
      startDate: 'Jan 2022',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?img=13',
    },
  ];

  // Mock department data
  const departments = [
    { id: 'veterinary', name: 'Veterinary', icon: BriefcaseMedical, color: 'bg-blue-100 text-blue-800' },
    { id: 'security', name: 'Security', icon: Shield, color: 'bg-green-100 text-green-800' },
    { id: 'conservation', name: 'Conservation', icon: Users, color: 'bg-amber-100 text-amber-800' },
    { id: 'research', name: 'Research', icon: UserCog, color: 'bg-purple-100 text-purple-800' },
    { id: 'operations', name: 'Operations', icon: Calendar, color: 'bg-orange-100 text-orange-800' },
  ];

  // Filter staff by department
  const filteredStaff = department === 'all' 
    ? staffMembers 
    : staffMembers.filter(member => member.department === department);

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active':
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
      case 'leave':
        return <Badge variant="outline" className="text-amber-500 border-amber-500">On Leave</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getDepartmentBadge = (deptId: string) => {
    const dept = departments.find(d => d.id === deptId);
    if (!dept) return null;
    
    const Icon = dept.icon;
    return (
      <Badge variant="outline" className={cn("flex items-center gap-1", dept.color)}>
        <Icon className="h-3 w-3" /> {dept.name}
      </Badge>
    );
  };

  return (
    <PageTemplate 
      title="Staff Management" 
      description="Manage park staff, roles, and responsibilities"
      icon={<Users className="h-6 w-6" />}
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search staff..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Button className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" /> Add Staff Member
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Department cards */}
          {departments.map(dept => {
            const count = staffMembers.filter(s => s.department === dept.id).length;
            const Icon = dept.icon;
            return (
              <Card 
                key={dept.id} 
                className={cn(
                  "cursor-pointer hover:border-primary transition-colors",
                  department === dept.id && "border-primary bg-primary/5"
                )}
                onClick={() => setDepartment(dept.id)}
              >
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-2", dept.color)}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{count} staff</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>
                    {department === 'all' 
                      ? 'All Staff Members' 
                      : `${departments.find(d => d.id === department)?.name} Department`}
                  </span>
                </CardTitle>
                <CardDescription>
                  Showing {filteredStaff.length} of {staffMembers.length} staff members
                </CardDescription>
              </div>
              <Select 
                value={department} 
                onValueChange={setDepartment}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept.id} value={dept.id}>{dept.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredStaff.map(person => (
                <div key={person.id} className="border rounded-lg p-4 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={person.avatar} alt={person.name} />
                      <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                      <div className="mt-1">
                        {getStatusBadge(person.status)}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="break-all">{person.contactEmail}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>{person.contactPhone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>{person.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>Since {person.startDate}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t">
                    {getDepartmentBadge(person.department)}
                  </div>
                  <div className="mt-auto pt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Profile</Button>
                    <Button size="sm" className="flex-1">Schedule</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">
              Page 1 of 1
            </div>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default Staff;
