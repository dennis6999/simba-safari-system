import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { 
  Shield, Search, Filter, Bell, AlertTriangle, MapPin, Camera, 
  Clock, User, ChevronDown, AlertCircle, CheckCircle2, 
  FileText, Calendar, ArrowUpDown, Info
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';

const Security = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [statusFilter, setStatusFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample security incident data
  const incidents = [
    {
      id: 'INC-2025-001',
      title: 'Poaching Attempt in Sector 4',
      description: 'Rangers reported signs of a potential poaching attempt targeting rhinos in Sector 4. Footprints and discarded equipment found near the watering hole.',
      status: 'open',
      priority: 'high',
      location: 'Sector 4',
      date: '2025-04-15',
      time: '02:30',
      reporter: {
        id: 101,
        name: 'Ranger David',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      category: 'poaching',
      updates: 3,
      attachments: 2
    },
    {
      id: 'INC-2025-002',
      title: 'Suspicious Vehicle Sighted Near North Gate',
      description: 'A black SUV with unknown license plates was seen multiple times near the North Gate after hours. Driver could not be identified.',
      status: 'investigating',
      priority: 'medium',
      location: 'North Gate',
      date: '2025-04-14',
      time: '22:15',
      reporter: {
        id: 102,
        name: 'Guard James',
        avatar: 'https://i.pravatar.cc/150?img=8'
      },
      category: 'trespassing',
      updates: 5,
      attachments: 1
    },
    {
      id: 'INC-2025-003',
      title: 'Fence Breach Detected on Western Perimeter',
      description: 'Automated sensors detected a breach in the perimeter fence on the western side. Animal escape suspected.',
      status: 'resolved',
      priority: 'low',
      location: 'Western Perimeter',
      date: '2025-04-13',
      time: '06:40',
      reporter: {
        id: 103,
        name: 'Technician Sarah',
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      category: 'infrastructure',
      updates: 2,
      attachments: 0
    },
    {
      id: 'INC-2025-004',
      title: 'Unusual Animal Behavior Reported in Sector 7',
      description: 'Tourists reported unusual aggressive behavior from a pack of wild dogs in Sector 7. Possible rabies outbreak suspected.',
      status: 'open',
      priority: 'high',
      location: 'Sector 7',
      date: '2025-04-12',
      time: '14:55',
      reporter: {
        id: 104,
        name: 'Guide Peter',
        avatar: 'https://i.pravatar.cc/150?img=15'
      },
      category: 'wildlife',
      updates: 4,
      attachments: 3
    },
    {
      id: 'INC-2025-005',
      title: 'Equipment Theft from Research Station',
      description: 'Various pieces of research equipment, including cameras and GPS trackers, were stolen from the main research station.',
      status: 'investigating',
      priority: 'medium',
      location: 'Research Station',
      date: '2025-04-11',
      time: '09:20',
      reporter: {
        id: 105,
        name: 'Scientist John',
        avatar: 'https://i.pravatar.cc/150?img=18'
      },
      category: 'theft',
      updates: 1,
      attachments: 1
    },
    {
      id: 'INC-2025-006',
      title: 'Drone Sighting Over Restricted Area',
      description: 'A drone was spotted flying over a restricted breeding area. Operator unknown.',
      status: 'open',
      priority: 'medium',
      location: 'Breeding Area',
      date: '2025-04-10',
      time: '17:40',
      reporter: {
        id: 101,
        name: 'Ranger David',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      category: 'surveillance',
      updates: 2,
      attachments: 0
    },
    {
      id: 'INC-2025-007',
      title: 'Vandalism at Visitor Center',
      description: 'Graffiti and minor damage reported at the main visitor center.',
      status: 'resolved',
      priority: 'low',
      location: 'Visitor Center',
      date: '2025-04-09',
      time: '21:00',
      reporter: {
        id: 102,
        name: 'Guard James',
        avatar: 'https://i.pravatar.cc/150?img=8'
      },
      category: 'vandalism',
      updates: 3,
      attachments: 2
    },
    {
      id: 'INC-2025-008',
      title: 'Illegal Campfire Detected',
      description: 'An illegal campfire was detected in a non-designated camping area. Fire extinguished, area secured.',
      status: 'resolved',
      priority: 'low',
      location: 'Undesignated Area',
      date: '2025-04-08',
      time: '03:15',
      reporter: {
        id: 103,
        name: 'Technician Sarah',
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      category: 'fire',
      updates: 1,
      attachments: 0
    },
    {
      id: 'INC-2025-009',
      title: 'Stray Animal Found Near Housing',
      description: 'A stray domestic dog was found wandering near staff housing. Animal taken to shelter.',
      status: 'closed',
      priority: 'low',
      location: 'Staff Housing',
      date: '2025-04-07',
      time: '11:30',
      reporter: {
        id: 104,
        name: 'Guide Peter',
        avatar: 'https://i.pravatar.cc/150?img=15'
      },
      category: 'animal',
      updates: 2,
      attachments: 1
    },
    {
      id: 'INC-2025-010',
      title: 'Security Drill Conducted Successfully',
      description: 'A scheduled security drill was conducted to test response times and coordination. All objectives met.',
      status: 'closed',
      priority: 'low',
      location: 'Multiple Locations',
      date: '2025-04-06',
      time: '15:00',
      reporter: {
        id: 105,
        name: 'Scientist John',
        avatar: 'https://i.pravatar.cc/150?img=18'
      },
      category: 'training',
      updates: 0,
      attachments: 0
    }
  ];

  // Sample security objectives data
  const objectives = [
    {
      id: 'OBJ-2025-001',
      title: 'Reduce Poaching Incidents',
      description: 'Decrease the number of poaching incidents by 15% compared to the previous year.',
      current: '85',
      target: 100,
      status: 'on-track'
    },
    {
      id: 'OBJ-2025-002',
      title: 'Improve Response Time to Incidents',
      description: 'Decrease the average response time to security incidents by 20%.',
      current: '75',
      target: 100,
      status: 'at-risk'
    },
    {
      id: 'OBJ-2025-003',
      title: 'Enhance Perimeter Security',
      description: 'Upgrade perimeter security measures to cover 95% of the park boundaries.',
      current: '90',
      target: 100,
      status: 'on-track'
    },
    {
      id: 'OBJ-2025-004',
      title: 'Increase Staff Training Hours',
      description: 'Increase the total number of security staff training hours by 25%.',
      current: '60',
      target: 100,
      status: 'off-track'
    }
  ];

  // Get unique locations for filter
  const locations = [...new Set(incidents.map(incident => incident.location))];

  // Filter incidents based on active tab, status, location and search query
  const filteredIncidents = incidents.filter(incident => {
    // Filter by tab (status)
    const matchesTab = activeTab === 'all' || incident.status === activeTab;

    // Filter by status
    const matchesStatus = statusFilter === 'all' || incident.status === statusFilter;

    // Filter by location
    const matchesLocation = locationFilter === 'all' || incident.location === locationFilter;

    // Filter by search query
    const matchesSearch = searchQuery === '' ||
      incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesStatus && matchesLocation && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge variant="outline" className="text-red-500 border-red-500">Open</Badge>;
      case 'investigating':
        return <Badge className="bg-amber-500 hover:bg-amber-600">Investigating</Badge>;
      case 'resolved':
        return <Badge className="bg-green-500 hover:bg-green-600">Resolved</Badge>;
      case 'closed':
        return <Badge variant="secondary">Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge className="bg-amber-500 hover:bg-amber-600">Medium</Badge>;
      case 'low':
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    const categoryMap: {[key: string]: {label: string, color: string}} = {
      'poaching': { label: 'Poaching', color: 'bg-red-100 text-red-800' },
      'trespassing': { label: 'Trespassing', color: 'bg-amber-100 text-amber-800' },
      'infrastructure': { label: 'Infrastructure', color: 'bg-blue-100 text-blue-800' },
      'wildlife': { label: 'Wildlife', color: 'bg-green-100 text-green-800' },
      'theft': { label: 'Theft', color: 'bg-purple-100 text-purple-800' },
      'surveillance': { label: 'Surveillance', color: 'bg-indigo-100 text-indigo-800' },
      'vandalism': { label: 'Vandalism', color: 'bg-gray-100 text-gray-800' },
      'fire': { label: 'Fire', color: 'bg-orange-100 text-orange-800' },
      'animal': { label: 'Animal', color: 'bg-teal-100 text-teal-800' },
      'training': { label: 'Training', color: 'bg-pink-100 text-pink-800' }
    };

    const categoryInfo = categoryMap[category] || { label: category, color: 'bg-gray-100 text-gray-800' };

    return (
      <Badge variant="secondary" className={categoryInfo.color}>
        {categoryInfo.label}
      </Badge>
    );
  };

  // Convert string values to numbers for comparisons
  const calculateProgress = (current: number | string, target: number): number => {
    const currentValue = typeof current === 'string' ? parseFloat(current) : current;
    return Math.min(Math.round((currentValue / target) * 100), 100);
  };

  return (
    <PageTemplate
      title="Security Management"
      description="Monitor and manage security incidents and objectives"
      icon={<Shield className="h-6 w-6" />}
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
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="investigating">Investigating</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-full sm:w-48">
              <Select
                value={locationFilter}
                onValueChange={setLocationFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full sm:w-auto">
              <AlertTriangle className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">New Incident</span>
            </Button>
          </div>
        </div>

        {/* Security Tabs and Content */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4 w-full sm:w-auto overflow-x-auto">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Overview
            </TabsTrigger>
            <TabsTrigger value="all" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> All Incidents <Badge variant="secondary" className="ml-1">{incidents.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="open" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Open <Badge variant="secondary" className="ml-1">{incidents.filter(i => i.status === 'open').length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="investigating" className="flex items-center gap-2">
              <Search className="h-4 w-4" /> Investigating <Badge variant="secondary" className="ml-1">{incidents.filter(i => i.status === 'investigating').length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="resolved" className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Resolved <Badge variant="secondary" className="ml-1">{incidents.filter(i => i.status === 'resolved').length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="closed" className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Closed <Badge variant="secondary" className="ml-1">{incidents.filter(i => i.status === 'closed').length}</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      {activeTab === 'overview' ? 'Security Overview' :
                       activeTab === 'all' ? 'All Incidents' :
                       activeTab === 'open' ? 'Open Incidents' :
                       activeTab === 'investigating' ? 'Investigating Incidents' :
                       activeTab === 'resolved' ? 'Resolved Incidents' : 'Closed Incidents'}
                    </CardTitle>
                    <CardDescription>
                      Showing {filteredIncidents.length} of {incidents.length} incidents
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hidden sm:flex">
                      <Calendar className="h-4 w-4 mr-2" /> Calendar View
                    </Button>
                    <Button variant="ghost" size="sm" className="hidden sm:flex">
                      <ArrowUpDown className="h-4 w-4 mr-2" /> Sort
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
                          <TableHead className="hidden lg:table-cell">Reporter</TableHead>
                          <TableHead className="hidden sm:table-cell">Date/Time</TableHead>
                          <TableHead>Priority</TableHead>
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
                                <div className="mt-1 flex gap-1">
                                  {getStatusBadge(incident.status)}
                                  {getCategoryBadge(incident.category)}
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">{incident.location}</TableCell>
                              <TableCell className="hidden lg:table-cell">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={incident.reporter.avatar} alt={incident.reporter.name} />
                                    <AvatarFallback>{incident.reporter.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="text-sm font-medium">{incident.reporter.name}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="hidden sm:table-cell">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>{new Date(incident.date).toLocaleDateString()}</span>
                                  <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                                  <span>{incident.time}</span>
                                </div>
                              </TableCell>
                              <TableCell>{getPriorityBadge(incident.priority)}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                      <span className="sr-only">Open menu</span>
                                      <ChevronDown className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      <FileText className="mr-2 h-4 w-4" /> View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <MapPin className="mr-2 h-4 w-4" /> View on Map
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Camera className="mr-2 h-4 w-4" /> Add Media
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    {incident.status !== 'closed' && (
                                      <DropdownMenuItem>
                                        <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Resolved
                                      </DropdownMenuItem>
                                    )}
                                    {incident.status === 'resolved' && (
                                      <DropdownMenuItem>
                                        <AlertCircle className="mr-2 h-4 w-4" /> Reopen Incident
                                      </DropdownMenuItem>
                                    )}
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
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
        </Tabs>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Incident Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                      Open
                    </span>
                    <span>{incidents.filter(i => i.status === 'open').length} incidents</span>
                  </div>
                  <Progress value={incidents.filter(i => i.status === 'open').length / incidents.length * 100} className="h-2 bg-red-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-amber-500 mr-2"></span>
                      Investigating
                    </span>
                    <span>{incidents.filter(i => i.status === 'investigating').length} incidents</span>
                  </div>
                  <Progress value={incidents.filter(i => i.status === 'investigating').length / incidents.length * 100} className="h-2 bg-amber-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                      Resolved
                    </span>
                    <span>{incidents.filter(i => i.status === 'resolved').length} incidents</span>
                  </div>
                  <Progress value={incidents.filter(i => i.status === 'resolved').length / incidents.length * 100} className="h-2 bg-green-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-gray-500 mr-2"></span>
                      Closed
                    </span>
                    <span>{incidents.filter(i => i.status === 'closed').length} incidents</span>
                  </div>
                  <Progress value={incidents.filter(i => i.status === 'closed').length / incidents.length * 100} className="h-2 bg-gray-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Security Objectives</CardTitle>
              <CardDescription>Progress towards key security goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {objectives.map((objective) => {
                  const progress = calculateProgress(objective.current, objective.target);
                  return (
                    <div key={objective.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">{objective.title}</h3>
                        <Badge variant="outline" className={
                          objective.status === 'on-track' ? 'text-green-500 border-green-500' :
                          objective.status === 'at-risk' ? 'text-amber-500 border-amber-500' : 'text-red-500 border-red-500'
                        }>
                          {objective.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">{objective.description}</div>
                      <div className="flex justify-between text-sm">
                        <span>{progress}% Complete</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Recent Incidents by Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {locations.map((location, idx) => {
                  const locationIncidentCount = incidents.filter(i => i.location === location).length;
                  const locationColors = [
                    'bg-blue-500', 'bg-purple-500', 'bg-amber-500',
                    'bg-green-500', 'bg-red-500', 'bg-indigo-500'
                  ];
                  const locationBgColors = [
                    'bg-blue-100', 'bg-purple-100', 'bg-amber-100',
                    'bg-green-100', 'bg-red-100', 'bg-indigo-100'
                  ];
                  return (
                    <div key={location}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center">
                          <MapPin className={`h-3 w-3 text-muted-foreground mr-2`} />
                          {location}
                        </span>
                        <span>{locationIncidentCount} incidents</span>
                      </div>
                      <Progress
                        value={locationIncidentCount / incidents.length * 100}
                        className={`h-2 ${locationBgColors[idx % locationBgColors.length]}`}
                      />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { message: 'Perimeter breach detected in Sector 4', time: '5 minutes ago', type: 'critical' },
                  { message: 'Suspicious activity near visitor center', time: '15 minutes ago', type: 'warning' },
                  { message: 'Security drill scheduled for tomorrow', time: '30 minutes ago', type: 'info' }
                ].map((alert, idx) => {
                  let icon;
                  let colorClass;

                  switch (alert.type) {
                    case 'critical':
                      icon = <AlertTriangle className="h-4 w-4 text-red-500" />;
                      colorClass = 'text-red-500';
                      break;
                    case 'warning':
                      icon = <AlertTriangle className="h-4 w-4 text-amber-500" />;
                      colorClass = 'text-amber-500';
                      break;
                    case 'info':
                      icon = <Info className="h-4 w-4 text-blue-500" />;
                      colorClass = 'text-blue-500';
                      break;
                    default:
                      icon = <Bell className="h-4 w-4 text-gray-500" />;
                      colorClass = 'text-gray-500';
                      break;
                  }

                  return (
                    <div key={idx} className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center gap-2">
                        {icon}
                        <span className="text-sm">{alert.message}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{alert.time}</div>
                    </div>
                  );
                })}
                <Button variant="ghost" size="sm" className="w-full mt-2">
                  <Bell className="h-4 w-4 mr-2" /> View All Alerts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Security;
