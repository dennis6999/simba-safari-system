import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { 
  ShieldAlert, Search, Filter, Eye, Calendar, MapPin, Camera, AlertTriangle, 
  User, ChevronDown, Plus, Activity, Lock, Siren, Bell, Users, 
  FileText, Map, CheckCircle, AlarmClockCheck, CircleCheck, BarChart,
  Shield, ArrowUpRightSquare, AlarmCheck, LayoutGrid, ListFilter, Clock
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
import { useToast } from '@/hooks/use-toast';

const Security = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('incidents');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sectorFilter, setSectorFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample incident data
  const incidents = [
    {
      id: 'INC-2025-001',
      title: 'Perimeter Breach Detected',
      description: 'Motion detected near Sector 4 fence line. Possible animal or human intrusion.',
      location: 'Sector 4',
      time: '2025-04-18T03:45:00',
      assignedTo: {
        id: 301,
        name: 'Ranger Emily',
        image: 'https://i.pravatar.cc/150?img=12'
      },
      status: 'active',
      priority: 'high',
      category: 'perimeter'
    },
    {
      id: 'INC-2025-002',
      title: 'Suspicious Vehicle Sighted',
      description: 'Unidentified vehicle observed near the park entrance after hours.',
      location: 'Park Entrance',
      time: '2025-04-19T22:12:00',
      assignedTo: {
        id: 302,
        name: 'Officer Kevin',
        image: 'https://i.pravatar.cc/150?img=13'
      },
      status: 'investigating',
      priority: 'medium',
      category: 'vehicle'
    },
    {
      id: 'INC-2025-003',
      title: 'Camera Offline',
      description: 'Camera 7 in Sector 9 is offline. Possible malfunction or tampering.',
      location: 'Sector 9',
      time: '2025-04-20T08:00:00',
      assignedTo: {
        id: 301,
        name: 'Ranger Emily',
        image: 'https://i.pravatar.cc/150?img=12'
      },
      status: 'active',
      priority: 'medium',
      category: 'camera'
    },
    {
      id: 'INC-2025-004',
      title: 'False Alarm - Animal Crossing',
      description: 'Motion sensors triggered by a herd of elephants crossing Sector 2.',
      location: 'Sector 2',
      time: '2025-04-21T01:55:00',
      assignedTo: {
        id: 302,
        name: 'Officer Kevin',
        image: 'https://i.pravatar.cc/150?img=13'
      },
      status: 'false-alarm',
      priority: 'low',
      category: 'animal'
    },
    {
      id: 'INC-2025-005',
      title: 'Gate Lock Damaged',
      description: 'Lock on the main gate to the research area is damaged. Possible attempted entry.',
      location: 'Research Area Gate',
      time: '2025-04-22T06:30:00',
      assignedTo: {
        id: 301,
        name: 'Ranger Emily',
        image: 'https://i.pravatar.cc/150?img=12'
      },
      status: 'resolved',
      priority: 'high',
      category: 'access'
    }
  ];

  // Sample alerts data  
  const alerts = [
    {
      id: 'ALRT-2025-001',
      title: 'High Activity Zone Detected',
      description: 'Unusual concentration of animal movement in Sector 6.',
      location: 'Sector 6',
      time: '2025-04-18T14:22:00',
      type: 'animal',
      severity: 'warning'
    },
    {
      id: 'ALRT-2025-002',
      title: 'Perimeter Sensor Triggered',
      description: 'Sensor 12 near the north fence line triggered. Investigate possible breach.',
      location: 'North Fence Line',
      time: '2025-04-19T01:18:00',
      type: 'perimeter',
      severity: 'critical'
    },
    {
      id: 'ALRT-2025-003',
      title: 'Vehicle Speeding',
      description: 'Vehicle exceeding speed limit on main road. License plate KWS-789.',
      location: 'Main Road',
      time: '2025-04-20T11:55:00',
      type: 'vehicle',
      severity: 'minor'
    },
    {
      id: 'ALRT-2025-004',
      title: 'Camera Tampering',
      description: 'Camera 3 in Sector 2 shows signs of physical tampering. Check for damage.',
      location: 'Sector 2',
      time: '2025-04-21T09:30:00',
      type: 'camera',
      severity: 'warning'
    },
    {
      id: 'ALRT-2025-005',
      title: 'Unusual Sound Detected',
      description: 'High-pitched sound detected near the visitor center. Source unknown.',
      location: 'Visitor Center',
      time: '2025-04-22T16:48:00',
      type: 'sound',
      severity: 'minor'
    },
    {
      id: 'ALRT-2025-006',
      title: 'Perimeter Sensor Triggered',
      description: 'Sensor 12 near the north fence line triggered. Investigate possible breach.',
      location: 'North Fence Line',
      time: '2025-04-19T01:18:00',
      type: 'perimeter',
      severity: 'critical'
    },
    {
      id: 'ALRT-2025-007',
      title: 'Vehicle Speeding',
      description: 'Vehicle exceeding speed limit on main road. License plate KWS-789.',
      location: 'Main Road',
      time: '2025-04-20T11:55:00',
      type: 'vehicle',
      severity: 'minor'
    }
  ];

  // Handler functions
  const handleFilterClick = () => {
    toast({
      title: "Advanced Filters",
      description: "Advanced filter options would appear here",
    });
  };

  const handleNewIncident = () => {
    toast({
      title: "Create New Incident",
      description: "Opening incident creation form",
    });
  };

  const handleIncidentAction = (action: string, incidentId: string) => {
    toast({
      title: `Incident Action: ${action}`,
      description: `Action '${action}' performed on incident ${incidentId}`,
    });
  };

  const handlePagination = (direction: 'prev' | 'next') => {
    toast({
      title: `Pagination: ${direction === 'prev' ? 'Previous' : 'Next'} Page`,
      description: `Navigating to ${direction === 'prev' ? 'previous' : 'next'} page of results`,
    });
  };

  const handleViewAll = (section: string) => {
    toast({
      title: `View All ${section}`,
      description: `Navigating to all ${section} view`,
    });
  };

  const handleMapView = () => {
    toast({
      title: "Map View",
      description: "Switching to map view of incidents and alerts",
    });
  };

  const handleViewLayout = (layout: string) => {
    toast({
      title: `View Layout: ${layout}`,
      description: `Switching to ${layout} layout`,
    });
  };

  // Filter incidents based on status, sector and search query
  const filteredIncidents = incidents.filter(incident => {
    const matchesStatus = statusFilter === 'all' || incident.status === statusFilter;
    const matchesSector = sectorFilter === 'all' || incident.location.includes(sectorFilter.charAt(0).toUpperCase() + sectorFilter.slice(1));
    const matchesSearch = searchQuery === '' ||
      incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSector && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="destructive">Active</Badge>;
      case 'investigating':
        return <Badge className="bg-amber-500 hover:bg-amber-600">Investigating</Badge>;
      case 'resolved':
        return <Badge className="bg-green-500 hover:bg-green-600">Resolved</Badge>;
      case 'false-alarm':
        return <Badge variant="secondary">False Alarm</Badge>;
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
      'perimeter': { label: 'Perimeter', color: 'bg-blue-100 text-blue-800' },
      'vehicle': { label: 'Vehicle', color: 'bg-green-100 text-green-800' },
      'camera': { label: 'Camera', color: 'bg-red-100 text-red-800' },
      'animal': { label: 'Animal', color: 'bg-purple-100 text-purple-800' },
      'access': { label: 'Access', color: 'bg-yellow-100 text-yellow-800' }
    };

    const categoryInfo = categoryMap[category] || { label: category, color: 'bg-gray-100 text-gray-800' };

    return (
      <Badge variant="secondary" className={categoryInfo.color}>
        {categoryInfo.label}
      </Badge>
    );
  };

  const getAlertTypeBadge = (type: string) => {
    const typeMap: {[key: string]: {label: string, color: string}} = {
      'animal': { label: 'Animal Activity', color: 'bg-blue-100 text-blue-800' },
      'perimeter': { label: 'Perimeter Breach', color: 'bg-red-100 text-red-800' },
      'vehicle': { label: 'Vehicle Alert', color: 'bg-green-100 text-green-800' },
      'camera': { label: 'Camera Issue', color: 'bg-purple-100 text-purple-800' },
      'sound': { label: 'Sound Anomaly', color: 'bg-yellow-100 text-yellow-800' }
    };

    const typeInfo = typeMap[type] || { label: type, color: 'bg-gray-100 text-gray-800' };

    return (
      <Badge variant="secondary" className={typeInfo.color}>
        {typeInfo.label}
      </Badge>
    );
  };
  
  return (
    <PageTemplate 
      title="Security Management" 
      description="Monitor and manage security operations"
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
              <div className="w-full">
                <Select 
                  value={statusFilter} 
                  onValueChange={setStatusFilter}
                >
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="investigating">Investigating</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="false-alarm">False Alarm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="w-full sm:w-auto" onClick={handleFilterClick}>
                <Filter className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-full sm:w-40">
              <Select 
                value={sectorFilter} 
                onValueChange={setSectorFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  <SelectItem value="north">North Sector</SelectItem>
                  <SelectItem value="south">South Sector</SelectItem>
                  <SelectItem value="east">East Sector</SelectItem>
                  <SelectItem value="west">West Sector</SelectItem>
                  <SelectItem value="central">Central Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full sm:w-auto" onClick={handleNewIncident}>
              <Plus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">New Incident</span>
            </Button>
          </div>
        </div>

        {/* Security Tabs and Content */}
        <Tabs defaultValue="incidents" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4 w-full overflow-x-auto flex whitespace-nowrap">
            <TabsTrigger value="incidents" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Incidents
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center gap-2">
              <Bell className="h-4 w-4" /> Alerts
            </TabsTrigger>
            <TabsTrigger value="patrols" className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Patrols
            </TabsTrigger>
            <TabsTrigger value="cameras" className="flex items-center gap-2">
              <Camera className="h-4 w-4" /> Cameras
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="incidents" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" /> Security Incidents
                    </CardTitle>
                    <CardDescription>
                      Showing {filteredIncidents.length} of {incidents.length} incidents
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hidden sm:flex" onClick={handleMapView}>
                      <Map className="h-4 w-4 mr-2" /> Map View
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="hidden sm:flex">
                          <LayoutGrid className="h-4 w-4 mr-2" /> Layout
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewLayout('List View')}>
                          <ListFilter className="mr-2 h-4 w-4" /> List View
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleViewLayout('Grid View')}>
                          <LayoutGrid className="mr-2 h-4 w-4" /> Grid View
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleViewLayout('Chronological')}>
                          <Clock className="mr-2 h-4 w-4" /> Chronological
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleViewLayout('Priority')}>
                          <AlertTriangle className="mr-2 h-4 w-4" /> By Priority
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
                          <TableHead>Description</TableHead>
                          <TableHead className="hidden md:table-cell">Location</TableHead>
                          <TableHead className="hidden md:table-cell">Time</TableHead>
                          <TableHead className="hidden lg:table-cell">Assigned To</TableHead>
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
                                  {incident.description.substring(0, 60)}...
                                </div>
                                <div className="mt-1 flex gap-1">
                                  {getPriorityBadge(incident.priority)}
                                  {getCategoryBadge(incident.category)}
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3 text-muted-foreground" />
                                  <span>{incident.location}</span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3 text-muted-foreground" />
                                  <span>{new Date(incident.time).toLocaleString()}</span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden lg:table-cell">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-7 w-7">
                                    <AvatarImage src={incident.assignedTo?.image} alt={incident.assignedTo?.name} />
                                    <AvatarFallback>{incident.assignedTo?.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm">{incident.assignedTo?.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>{getStatusBadge(incident.status)}</TableCell>
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
                                    <DropdownMenuItem onClick={() => handleIncidentAction('view', incident.id)}>
                                      <Eye className="mr-2 h-4 w-4" /> View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleIncidentAction('update', incident.id)}>
                                      <Activity className="mr-2 h-4 w-4" /> Update Status
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleIncidentAction('assign', incident.id)}>
                                      <User className="mr-2 h-4 w-4" /> Reassign
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => handleIncidentAction('resolve', incident.id)}>
                                      <CheckCircle className="mr-2 h-4 w-4" /> Mark Resolved
                                    </DropdownMenuItem>
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
                  <Button variant="outline" size="sm" disabled onClick={() => handlePagination('prev')}>Previous</Button>
                  <Button variant="outline" size="sm" disabled onClick={() => handlePagination('next')}>Next</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* ... keep existing code (for other tabs) */}

          <TabsContent value="alerts" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Alerts</CardTitle>
                  <CardDescription>Most recent security alerts from all systems</CardDescription>
                </CardHeader>
                <CardContent className="px-2">
                  <div className="space-y-4">
                    {alerts.slice(0, 5).map((alert) => (
                      <div key={alert.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            {getAlertTypeBadge(alert.type)}
                            <span className="font-medium">{alert.title}</span>
                          </div>
                          <Badge>{alert.severity}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{alert.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(alert.time).toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleIncidentAction('respond', alert.id)}>
                            Respond
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleIncidentAction('dismiss', alert.id)}>
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full" onClick={() => handleViewAll('Alerts')}>
                      View All Alerts
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* ... keep existing code (for Security Status card) */}
              <Card>
                <CardHeader>
                  <CardTitle>Security Status</CardTitle>
                  <CardDescription>Overall security health of the park</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                  <CircleCheck className="h-10 w-10 text-green-500" />
                  <div className="text-2xl font-semibold mt-2">All Systems Nominal</div>
                  <div className="text-sm text-muted-foreground">Last checked: 2025-04-22 17:30</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Detailed Status
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid grid-cols-1 md:col-span-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Metrics</CardTitle>
                    <CardDescription>Real-time security performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { title: 'Response Time', value: '4.2 min', icon: <Clock className="h-4 w-4" />, change: '-12%', positive: true },
                        { title: 'Incidents This Month', value: '24', icon: <AlertTriangle className="h-4 w-4" />, change: '+8%', positive: false },
                        { title: 'Perimeter Breaches', value: '3', icon: <Activity className="h-4 w-4" />, change: '-25%', positive: true },
                        { title: 'Active Patrols', value: '6', icon: <Users className="h-4 w-4" />, change: '+2', positive: true }
                      ].map((metric, idx) => (
                        <Card key={idx} className="bg-muted/50">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col gap-1">
                                <span className="text-sm text-muted-foreground flex items-center gap-1">
                                  {metric.icon} {metric.title}
                                </span>
                                <span className="text-2xl font-semibold">{metric.value}</span>
                              </div>
                              <div className={`text-xs ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                                {metric.change}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => handleViewAll('Metrics')}>
                      View Detailed Metrics
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageTemplate>
  );
};

export default Security;
