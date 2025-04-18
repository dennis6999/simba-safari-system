
import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { ShieldAlert, Search, Filter, Plus, Check, AlertTriangle, X, MapPin, CalendarClock, User, ArrowUpDown, Clock, FileText, Shield, Wifi, Camera, Radio, MapPinned, Lock, Footprints, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Security = () => {
  const [activeTab, setActiveTab] = useState('incidents');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample security incidents data
  const incidents = [
    {
      id: 'INC-1001',
      title: 'Perimeter Fence Breach Attempt',
      description: 'Attempted breach of the eastern perimeter fence. No entry made. Evidence of wire cutting tools found.',
      status: 'resolved',
      severity: 'medium',
      reportedDate: '2025-04-14T10:30:00',
      location: 'Eastern Perimeter',
      reportedBy: {
        name: 'David Ochieng',
        avatar: 'https://i.pravatar.cc/150?img=68',
        role: 'Senior Ranger'
      },
      assignedTo: {
        name: 'John Mwangi',
        avatar: 'https://i.pravatar.cc/150?img=53',
        role: 'Security Lead'
      },
      responseTime: 12, // minutes
      resolution: 'Increased patrols in the area. Fence repaired and reinforced.',
      type: 'perimeter',
      coordinates: { lat: -1.286389, lng: 36.817223 }
    },
    {
      id: 'INC-1002',
      title: 'Suspicious Vehicle Near Staff Entrance',
      description: 'Unidentified vehicle observed parked near staff entrance for extended period. Vehicle left when security approached.',
      status: 'resolved',
      severity: 'low',
      reportedDate: '2025-04-15T16:15:00',
      location: 'Staff Entrance',
      reportedBy: {
        name: 'Alice Kamau',
        avatar: 'https://i.pravatar.cc/150?img=32',
        role: 'Gate Officer'
      },
      assignedTo: {
        name: 'David Ochieng',
        avatar: 'https://i.pravatar.cc/150?img=68',
        role: 'Senior Ranger'
      },
      responseTime: 8, // minutes
      resolution: 'License plate recorded. Vehicle identified as local resident lost.',
      type: 'suspicious',
      coordinates: { lat: -1.292389, lng: 36.821223 }
    },
    {
      id: 'INC-1003',
      title: 'Animal Monitoring Camera Vandalized',
      description: 'Camera #47 in rhinoceros monitoring area found vandalized. Evidence suggests intentional damage.',
      status: 'in-progress',
      severity: 'high',
      reportedDate: '2025-04-16T08:45:00',
      location: 'Northern Reserve',
      reportedBy: {
        name: 'Sarah Kimani',
        avatar: 'https://i.pravatar.cc/150?img=47',
        role: 'Conservation Officer'
      },
      assignedTo: {
        name: 'John Mwangi',
        avatar: 'https://i.pravatar.cc/150?img=53',
        role: 'Security Lead'
      },
      responseTime: 15, // minutes
      type: 'equipment',
      coordinates: { lat: -1.276389, lng: 36.807223 }
    },
    {
      id: 'INC-1004',
      title: 'Unauthorized Drone Activity',
      description: 'Unauthorized drone spotted flying over the western section. Unable to locate operator.',
      status: 'in-progress',
      severity: 'medium',
      reportedDate: '2025-04-16T14:20:00',
      location: 'Western Section',
      reportedBy: {
        name: 'David Ochieng',
        avatar: 'https://i.pravatar.cc/150?img=68',
        role: 'Senior Ranger'
      },
      assignedTo: {
        name: 'Paul Kiprop',
        avatar: 'https://i.pravatar.cc/150?img=62',
        role: 'Security Officer'
      },
      responseTime: 10, // minutes
      type: 'airspace',
      coordinates: { lat: -1.296389, lng: 36.797223 }
    },
    {
      id: 'INC-1005',
      title: 'Radio Communication Outage',
      description: 'Radio communications down in southeastern sector for 35 minutes. Backup systems activated.',
      status: 'resolved',
      severity: 'high',
      reportedDate: '2025-04-15T11:10:00',
      location: 'Southeastern Sector',
      reportedBy: {
        name: 'John Mwangi',
        avatar: 'https://i.pravatar.cc/150?img=53',
        role: 'Security Lead'
      },
      assignedTo: {
        name: 'James Kamau',
        avatar: 'https://i.pravatar.cc/150?img=13',
        role: 'IT Specialist'
      },
      responseTime: 5, // minutes
      resolution: 'Faulty repeater replaced. All systems operational.',
      type: 'equipment',
      coordinates: { lat: -1.306389, lng: 36.827223 }
    },
    {
      id: 'INC-1006',
      title: 'Suspicious Tracks in Restricted Area',
      description: 'Multiple human footprints found in restricted conservation area. No authorized personnel scheduled.',
      status: 'in-progress',
      severity: 'high',
      reportedDate: '2025-04-17T06:30:00',
      location: 'Eastern Reserve',
      reportedBy: {
        name: 'Michael Ngugi',
        avatar: 'https://i.pravatar.cc/150?img=65',
        role: 'Ranger'
      },
      assignedTo: {
        name: 'John Mwangi',
        avatar: 'https://i.pravatar.cc/150?img=53',
        role: 'Security Lead'
      },
      responseTime: 18, // minutes
      type: 'intrusion',
      coordinates: { lat: -1.276389, lng: 36.837223 }
    },
    {
      id: 'INC-1007',
      title: 'Visitor Area Gate Malfunction',
      description: 'Automated gate at main visitor entrance failed to secure properly after closing hours.',
      status: 'resolved',
      severity: 'medium',
      reportedDate: '2025-04-14T19:05:00',
      location: 'Main Visitor Entrance',
      reportedBy: {
        name: 'Eunice Akinyi',
        avatar: 'https://i.pravatar.cc/150?img=24',
        role: 'Visitor Operations'
      },
      assignedTo: {
        name: 'Alex Kirui',
        avatar: 'https://i.pravatar.cc/150?img=57',
        role: 'Maintenance Technician'
      },
      responseTime: 22, // minutes
      resolution: 'Manual override engaged. Mechanical issue fixed following morning.',
      type: 'facilities',
      coordinates: { lat: -1.288389, lng: 36.815223 }
    },
    {
      id: 'INC-1008',
      title: 'Poaching Equipment Found',
      description: 'Snares and hunting equipment discovered hidden near the southern watering hole.',
      status: 'in-progress',
      severity: 'critical',
      reportedDate: '2025-04-17T07:45:00',
      location: 'Southern Watering Hole',
      reportedBy: {
        name: 'David Ochieng',
        avatar: 'https://i.pravatar.cc/150?img=68',
        role: 'Senior Ranger'
      },
      assignedTo: {
        name: 'John Mwangi',
        avatar: 'https://i.pravatar.cc/150?img=53',
        role: 'Security Lead'
      },
      responseTime: 7, // minutes
      type: 'poaching',
      coordinates: { lat: -1.316389, lng: 36.817223 }
    }
  ];

  // Sample patrol data
  const patrols = [
    {
      id: 'PAT-1001',
      name: 'Eastern Perimeter Morning Patrol',
      schedule: 'Daily, 06:00-09:00',
      status: 'active',
      team: [
        { name: 'David Ochieng', avatar: 'https://i.pravatar.cc/150?img=68' },
        { name: 'Michael Ngugi', avatar: 'https://i.pravatar.cc/150?img=65' },
        { name: 'Joseph Kiptoo', avatar: 'https://i.pravatar.cc/150?img=69' }
      ],
      vehicle: 'Vehicle #03 (4x4)',
      equipment: ['Radios', 'GPS Trackers', 'Binoculars', 'First Aid Kit'],
      lastReport: '2025-04-17T08:45:00',
      route: 'Eastern Perimeter → Northeast Corner → Eastern Gate → Return'
    },
    {
      id: 'PAT-1002',
      name: 'Rhino Sanctuary Night Patrol',
      schedule: 'Daily, 22:00-02:00',
      status: 'active',
      team: [
        { name: 'John Mwangi', avatar: 'https://i.pravatar.cc/150?img=53' },
        { name: 'Paul Kiprop', avatar: 'https://i.pravatar.cc/150?img=62' },
        { name: 'George Kipruto', avatar: 'https://i.pravatar.cc/150?img=59' }
      ],
      vehicle: 'Vehicle #08 (Silent ATV)',
      equipment: ['Night Vision', 'Thermal Cameras', 'Radios', 'GPS Trackers'],
      lastReport: '2025-04-17T01:30:00',
      route: 'Northern Gate → Rhino Sanctuary → Central Waterhole → Return'
    },
    {
      id: 'PAT-1003',
      name: 'Southern Border Afternoon Patrol',
      schedule: 'Daily, 14:00-17:00',
      status: 'active',
      team: [
        { name: 'Michael Ngugi', avatar: 'https://i.pravatar.cc/150?img=65' },
        { name: 'Alice Njeri', avatar: 'https://i.pravatar.cc/150?img=32' }
      ],
      vehicle: 'Vehicle #05 (4x4)',
      equipment: ['Radios', 'GPS Trackers', 'Drones', 'Water Testing Kit'],
      lastReport: '2025-04-16T16:50:00',
      route: 'Southern Gate → River Crossing → Southern Border → Return'
    },
    {
      id: 'PAT-1004',
      name: 'Western Zone Patrol',
      schedule: 'Mon/Wed/Fri, 10:00-14:00',
      status: 'scheduled',
      team: [
        { name: 'David Ochieng', avatar: 'https://i.pravatar.cc/150?img=68' },
        { name: 'Christine Auma', avatar: 'https://i.pravatar.cc/150?img=45' }
      ],
      vehicle: 'Vehicle #04 (4x4)',
      equipment: ['Radios', 'GPS Trackers', 'Camera Traps', 'Repair Kit'],
      nextPatrol: '2025-04-19T10:00:00',
      route: 'Western Gate → Camera Trap #12-18 → Western Boundary → Return'
    }
  ];

  // Sample security equipment data
  const equipment = [
    {
      id: 'EQ-CAM-123',
      type: 'Camera',
      model: 'Wildlife ProCam X2',
      location: 'Eastern Perimeter',
      status: 'operational',
      lastMaintenance: '2025-03-15',
      batteryStatus: 94,
      notes: 'Solar powered with 4G connectivity'
    },
    {
      id: 'EQ-CAM-124',
      type: 'Camera',
      model: 'Wildlife ProCam X2',
      location: 'Rhino Sanctuary',
      status: 'maintenance',
      lastMaintenance: '2025-04-12',
      batteryStatus: 65,
      notes: 'Lens cleaning required'
    },
    {
      id: 'EQ-DRN-056',
      type: 'Drone',
      model: 'Ranger Scout 450',
      location: 'Central Command',
      status: 'operational',
      lastMaintenance: '2025-04-05',
      batteryStatus: 100,
      notes: 'Thermal imaging enabled'
    },
    {
      id: 'EQ-SNS-089',
      type: 'Motion Sensor',
      model: 'Perimeter Guardian V3',
      location: 'Northern Boundary',
      status: 'operational',
      lastMaintenance: '2025-03-28',
      batteryStatus: 82,
      notes: 'Connected to central alarm system'
    },
    {
      id: 'EQ-RAD-034',
      type: 'Radio Tower',
      model: 'CommNet Pro Tower',
      location: 'Central Hub',
      status: 'operational',
      lastMaintenance: '2025-02-22',
      batteryStatus: 'N/A',
      notes: 'Backup generators tested weekly'
    },
    {
      id: 'EQ-CAM-125',
      type: 'Camera',
      model: 'NightWatch Infrared',
      location: 'Western Perimeter',
      status: 'fault',
      lastMaintenance: '2025-01-30',
      batteryStatus: 0,
      notes: 'Battery failure, replacement scheduled'
    }
  ];

  // Get unique locations for filter
  const locations = [...new Set(incidents.map(incident => incident.location))];
  
  // Filter incidents based on active tab, severity, location and search query
  const filteredIncidents = incidents.filter(incident => {
    // Filter by severity
    const matchesSeverity = severityFilter === 'all' || incident.severity === severityFilter;
    
    // Filter by location
    const matchesLocation = locationFilter === 'all' || incident.location === locationFilter;
    
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
                          incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          incident.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          incident.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSeverity && matchesLocation && matchesSearch;
  });
  
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'low':
        return <Badge variant="outline" className="text-blue-500 border-blue-500">Low</Badge>;
      case 'medium':
        return <Badge className="bg-amber-500 hover:bg-amber-600">Medium</Badge>;
      case 'high':
        return <Badge className="bg-orange-500 hover:bg-orange-600">High</Badge>;
      case 'critical':
        return <Badge className="bg-red-500 hover:bg-red-600">Critical</Badge>;
      default:
        return <Badge variant="outline">{severity}</Badge>;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <Badge className="bg-amber-500 hover:bg-amber-600">In Progress</Badge>;
      case 'resolved':
        return <Badge className="bg-green-500 hover:bg-green-600">Resolved</Badge>;
      case 'operational':
        return <Badge className="bg-green-500 hover:bg-green-600">Operational</Badge>;
      case 'maintenance':
        return <Badge variant="outline" className="text-amber-500 border-amber-500">Maintenance</Badge>;
      case 'fault':
        return <Badge className="bg-red-500 hover:bg-red-600">Fault</Badge>;
      case 'active':
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
      case 'scheduled':
        return <Badge variant="outline" className="text-blue-500 border-blue-500">Scheduled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const getTypeBadge = (type: string) => {
    const typeMap: {[key: string]: {icon: React.ReactNode, color: string}} = {
      'perimeter': { icon: <Shield className="h-3 w-3" />, color: 'bg-amber-100 text-amber-800' },
      'suspicious': { icon: <AlertTriangle className="h-3 w-3" />, color: 'bg-orange-100 text-orange-800' },
      'equipment': { icon: <Camera className="h-3 w-3" />, color: 'bg-blue-100 text-blue-800' },
      'airspace': { icon: <Wifi className="h-3 w-3" />, color: 'bg-purple-100 text-purple-800' },
      'intrusion': { icon: <Footprints className="h-3 w-3" />, color: 'bg-red-100 text-red-800' },
      'facilities': { icon: <Lock className="h-3 w-3" />, color: 'bg-green-100 text-green-800' },
      'poaching': { icon: <AlertTriangle className="h-3 w-3" />, color: 'bg-red-100 text-red-800' }
    };
    
    const typeInfo = typeMap[type] || { icon: <Info className="h-3 w-3" />, color: 'bg-gray-100 text-gray-800' };
    
    return (
      <Badge variant="secondary" className={`flex items-center gap-1 ${typeInfo.color}`}>
        {typeInfo.icon} {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    );
  };
  
  return (
    <PageTemplate 
      title="Security Operations" 
      description="Manage park security and anti-poaching operations"
      icon={<ShieldAlert className="h-6 w-6" />}
    >
      <div className="space-y-6">
        {/* Action Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-1 sm:flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search incidents..." 
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 sm:flex gap-2">
              <Select 
                value={severityFilter} 
                onValueChange={setSeverityFilter}
              >
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Select 
              value={locationFilter} 
              onValueChange={setLocationFilter}
              className="w-full sm:w-auto"
            >
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Report Incident</span>
            </Button>
          </div>
        </div>

        {/* Security Tabs and Content */}
        <Tabs defaultValue="incidents" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4 w-full sm:w-auto overflow-x-auto">
            <TabsTrigger value="incidents" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Incidents
            </TabsTrigger>
            <TabsTrigger value="patrols" className="flex items-center gap-2">
              <Footprints className="h-4 w-4" /> Patrols
            </TabsTrigger>
            <TabsTrigger value="equipment" className="flex items-center gap-2">
              <Camera className="h-4 w-4" /> Equipment
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center gap-2">
              <MapPinned className="h-4 w-4" /> Security Map
            </TabsTrigger>
          </TabsList>

          <TabsContent value="incidents" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5" /> Security Incidents
                    </CardTitle>
                    <CardDescription>
                      Showing {filteredIncidents.length} of {incidents.length} reported incidents
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hidden sm:flex">
                      <FileText className="h-4 w-4 mr-2" /> Generate Report
                    </Button>
                    <Button variant="ghost" size="sm" className="hidden sm:flex">
                      <Download className="h-4 w-4 mr-2" /> Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">ID</TableHead>
                          <TableHead>Incident</TableHead>
                          <TableHead className="hidden md:table-cell">Location</TableHead>
                          <TableHead className="hidden lg:table-cell">Reported</TableHead>
                          <TableHead className="hidden md:table-cell">Assigned To</TableHead>
                          <TableHead>Severity</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredIncidents.length > 0 ? (
                          filteredIncidents.map((incident) => (
                            <TableRow key={incident.id} className="cursor-pointer hover:bg-muted/50">
                              <TableCell className="font-medium">{incident.id}</TableCell>
                              <TableCell>
                                <div className="font-medium">{incident.title}</div>
                                <div className="text-xs text-muted-foreground hidden sm:block mt-1">
                                  {incident.description.length > 50 
                                    ? `${incident.description.substring(0, 50)}...` 
                                    : incident.description}
                                </div>
                                <div className="mt-1">
                                  {getTypeBadge(incident.type)}
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4 text-muted-foreground" />
                                  <span>{incident.location}</span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden lg:table-cell">
                                <div className="flex flex-col">
                                  <span>{new Date(incident.reportedDate).toLocaleDateString()}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {new Date(incident.reportedDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    By: {incident.reportedBy.name}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={incident.assignedTo.avatar} alt={incident.assignedTo.name} />
                                    <AvatarFallback>{incident.assignedTo.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div className="text-sm">{incident.assignedTo.name}</div>
                                </div>
                              </TableCell>
                              <TableCell>{getSeverityBadge(incident.severity)}</TableCell>
                              <TableCell>{getStatusBadge(incident.status)}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                      <span className="sr-only">Open menu</span>
                                      <ArrowUpDown className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      <User className="mr-2 h-4 w-4" /> Reassign
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <MapPin className="mr-2 h-4 w-4" /> View Location
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Clock className="mr-2 h-4 w-4" /> View Timeline
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    {incident.status !== 'resolved' && (
                                      <DropdownMenuItem>
                                        <Check className="mr-2 h-4 w-4" /> Mark Resolved
                                      </DropdownMenuItem>
                                    )}
                                    {incident.status === 'resolved' && (
                                      <DropdownMenuItem>
                                        <X className="mr-2 h-4 w-4" /> Reopen
                                      </DropdownMenuItem>
                                    )}
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                              No incidents found matching the current filters.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
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
          </TabsContent>
          
          <TabsContent value="patrols" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Footprints className="h-5 w-5" /> Active Patrols
                    </CardTitle>
                    <CardDescription>
                      Currently active and scheduled patrol teams
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {patrols.map((patrol) => (
                        <div key={patrol.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-medium">{patrol.name}</h3>
                              <p className="text-sm text-muted-foreground">{patrol.id} • {patrol.schedule}</p>
                            </div>
                            <div>
                              {getStatusBadge(patrol.status)}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2">Team Members</h4>
                              <div className="flex -space-x-2">
                                {patrol.team.map((member, idx) => (
                                  <Avatar key={idx} className="h-8 w-8 border-2 border-background">
                                    <AvatarImage src={member.avatar} alt={member.name} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                ))}
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground text-xs">
                                  {patrol.team.length}
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">Equipment</h4>
                              <div className="flex flex-wrap gap-1">
                                {patrol.equipment.map((item, idx) => (
                                  <Badge key={idx} variant="outline">{item}</Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row justify-between text-sm border-t pt-3">
                            <div className="flex items-center gap-1 mb-2 sm:mb-0">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{patrol.route}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CalendarClock className="h-4 w-4 text-muted-foreground" />
                              <span>{patrol.lastReport 
                                ? `Last Report: ${new Date(patrol.lastReport).toLocaleString()}` 
                                : `Next Patrol: ${new Date(patrol.nextPatrol as string).toLocaleString()}`}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-3 flex gap-2 justify-end">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button size="sm">Contact Team</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="mb-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Patrol Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Eastern Perimeter</span>
                          <span>95%</span>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Northern Perimeter</span>
                          <span>87%</span>
                        </div>
                        <Progress value={87} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Western Perimeter</span>
                          <span>82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Southern Perimeter</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Rhino Sanctuary</span>
                          <span>100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Central Areas</span>
                          <span>65%</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button className="w-full justify-start">
                        <Plus className="mr-2 h-4 w-4" /> Schedule New Patrol
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Radio className="mr-2 h-4 w-4" /> Check-in Request
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Shield className="mr-2 h-4 w-4" /> Security Protocols
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Clock className="mr-2 h-4 w-4" /> Patrol History
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Camera className="mr-2 h-4 w-4" /> Deploy Camera Trap
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="equipment" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Equipment Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 space-y-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Operational</span>
                        </div>
                        <span>{equipment.filter(e => e.status === 'operational').length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-amber-500" />
                          <span>Maintenance</span>
                        </div>
                        <span>{equipment.filter(e => e.status === 'maintenance').length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <X className="h-4 w-4 text-red-500" />
                          <span>Fault</span>
                        </div>
                        <span>{equipment.filter(e => e.status === 'fault').length}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Equipment Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 space-y-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Camera className="h-4 w-4 text-blue-500" />
                          <span>Cameras</span>
                        </div>
                        <span>{equipment.filter(e => e.type === 'Camera').length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Wifi className="h-4 w-4 text-purple-500" />
                          <span>Drones</span>
                        </div>
                        <span>{equipment.filter(e => e.type === 'Drone').length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Radio className="h-4 w-4 text-green-500" />
                          <span>Communication</span>
                        </div>
                        <span>{equipment.filter(e => e.type === 'Radio Tower').length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500" />
                          <span>Sensors</span>
                        </div>
                        <span>{equipment.filter(e => e.type === 'Motion Sensor').length}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Maintenance Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CalendarClock className="h-4 w-4 text-blue-500" />
                        <span>Today</span>
                      </div>
                      <span>0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CalendarClock className="h-4 w-4 text-green-500" />
                        <span>This Week</span>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CalendarClock className="h-4 w-4 text-amber-500" />
                        <span>Overdue</span>
                      </div>
                      <span>1</span>
                    </div>
                    <div className="mt-4">
                      <Button size="sm" className="w-full">View Schedule</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Security Equipment Inventory</CardTitle>
                <CardDescription>Status and location of security equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Model</TableHead>
                          <TableHead className="hidden md:table-cell">Location</TableHead>
                          <TableHead className="hidden lg:table-cell">Last Maintenance</TableHead>
                          <TableHead>Battery</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {equipment.map((item) => (
                          <TableRow key={item.id} className="cursor-pointer hover:bg-muted/50">
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {item.type === 'Camera' ? <Camera className="h-4 w-4" /> :
                                 item.type === 'Drone' ? <Wifi className="h-4 w-4" /> :
                                 item.type === 'Motion Sensor' ? <AlertTriangle className="h-4 w-4" /> :
                                 <Radio className="h-4 w-4" />}
                                {item.type}
                              </div>
                            </TableCell>
                            <TableCell>{item.model}</TableCell>
                            <TableCell className="hidden md:table-cell">{item.location}</TableCell>
                            <TableCell className="hidden lg:table-cell">{new Date(item.lastMaintenance).toLocaleDateString()}</TableCell>
                            <TableCell>
                              {item.batteryStatus === 'N/A' ? (
                                <span className="text-muted-foreground">N/A</span>
                              ) : (
                                <div className="w-full max-w-[60px]">
                                  <Progress 
                                    value={item.batteryStatus} 
                                    className="h-2"
                                    indicator={item.batteryStatus < 20 ? 'bg-red-500' : item.batteryStatus < 50 ? 'bg-amber-500' : 'bg-green-500'}
                                  />
                                </div>
                              )}
                            </TableCell>
                            <TableCell>{getStatusBadge(item.status)}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">Details</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="map" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Map</CardTitle>
                <CardDescription>Interactive map of security zones and incidents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center border rounded-md h-[400px] bg-muted/20">
                  <div className="text-center">
                    <MapPinned className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                    <h3 className="text-lg font-medium">Interactive Security Map</h3>
                    <p className="text-sm text-muted-foreground">Map would display security zones, incident locations, and patrol routes</p>
                    <Button className="mt-4">Load Map View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Zone Security Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Eastern Zone</span>
                        <span>87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Northern Zone</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Western Zone</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Southern Zone</span>
                        <span>81%</span>
                      </div>
                      <Progress value={81} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Central Zone</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Recent Incidents Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {incidents.slice(0, 5).map(incident => (
                      <div key={incident.id} className="flex items-start gap-2 pb-2 border-b">
                        <div className="mt-1">
                          <AlertTriangle className={
                            incident.severity === 'critical' ? "h-4 w-4 text-red-500" :
                            incident.severity === 'high' ? "h-4 w-4 text-orange-500" :
                            incident.severity === 'medium' ? "h-4 w-4 text-amber-500" :
                            "h-4 w-4 text-blue-500"
                          } />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{incident.title}</div>
                          <div className="text-xs text-muted-foreground">{incident.location}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Patrol Routes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {patrols.map(patrol => (
                      <div key={patrol.id} className="flex items-start gap-2 pb-2 border-b last:border-0">
                        <div className="mt-1">
                          <Footprints className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{patrol.name}</div>
                          <div className="text-xs text-muted-foreground">{patrol.route}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Security Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Incidents Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 resolved, 1 in progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Patrols</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">12 staff deployed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Equipment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">93%</div>
              <p className="text-xs text-muted-foreground">Operational rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">11.2 min</div>
              <p className="text-xs text-muted-foreground">Average response time</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Security;
