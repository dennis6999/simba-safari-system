import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { 
  CheckSquare, Search, Filter, Calendar, Clock, 
  AlertCircle, User, ChevronDown, PlusCircle, CheckCircle2,
  CircleX, CalendarDays, CalendarClock, ListChecks, Tags, Clipboard,
  ClipboardList, SlidersHorizontal, Users, Bell, BookOpen
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

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [assigneeFilter, setAssigneeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample task data
  const tasks = [
    {
      id: 'TASK-2025-001',
      title: 'Repair Fence in Sector 4',
      description: 'Repair damaged section of the perimeter fence in Sector 4. Suspected animal breach.',
      status: 'open',
      priority: 'high',
      assignee: {
        id: 201,
        name: 'Ranger David',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      category: 'infrastructure',
      dueDate: '2025-04-22',
      startDate: '2025-04-18',
      updates: 3,
      attachments: 2
    },
    {
      id: 'TASK-2025-002',
      title: 'Elephant Health Check',
      description: 'Conduct routine health check on elephants in Sector 7. Monitor for signs of illness.',
      status: 'in-progress',
      priority: 'medium',
      assignee: {
        id: 202,
        name: 'Vet Sarah',
        avatar: 'https://i.pravatar.cc/150?img=7'
      },
      category: 'wildlife',
      dueDate: '2025-04-25',
      startDate: '2025-04-20',
      updates: 5,
      attachments: 1
    },
    {
      id: 'TASK-2025-003',
      title: 'Clean Water Trough',
      description: 'Clean and refill the main water trough near the visitor center.',
      status: 'completed',
      priority: 'low',
      assignee: {
        id: 203,
        name: 'Technician John',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      category: 'infrastructure',
      dueDate: '2025-04-17',
      startDate: '2025-04-17',
      updates: 2,
      attachments: 0
    },
    {
      id: 'TASK-2025-004',
      title: 'Monitor Rhino Activity',
      description: 'Monitor rhino activity in Sector 9. Report any unusual behavior or signs of poaching.',
      status: 'open',
      priority: 'high',
      assignee: {
        id: 201,
        name: 'Ranger David',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      category: 'wildlife',
      dueDate: '2025-04-24',
      startDate: '2025-04-21',
      updates: 4,
      attachments: 3
    },
    {
      id: 'TASK-2025-005',
      title: 'Visitor Center Maintenance',
      description: 'Perform routine maintenance tasks at the visitor center. Check for damages and cleanliness.',
      status: 'in-progress',
      priority: 'medium',
      assignee: {
        id: 203,
        name: 'Technician John',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      category: 'infrastructure',
      dueDate: '2025-04-26',
      startDate: '2025-04-22',
      updates: 1,
      attachments: 1
    },
    {
      id: 'TASK-2025-006',
      title: 'Patrol North Sector',
      description: 'Conduct a patrol of the North Sector to check for any security breaches or unusual activity.',
      status: 'completed',
      priority: 'low',
      assignee: {
        id: 201,
        name: 'Ranger David',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      category: 'security',
      dueDate: '2025-04-19',
      startDate: '2025-04-19',
      updates: 2,
      attachments: 0
    },
    {
      id: 'TASK-2025-007',
      title: 'Check Camera Traps',
      description: 'Check and maintain camera traps in Sector 6. Replace batteries and collect data.',
      status: 'open',
      priority: 'medium',
      assignee: {
        id: 202,
        name: 'Vet Sarah',
        avatar: 'https://i.pravatar.cc/150?img=7'
      },
      category: 'wildlife',
      dueDate: '2025-04-27',
      startDate: '2025-04-23',
      updates: 3,
      attachments: 2
    },
    {
      id: 'TASK-2025-008',
      title: 'Repair Road Potholes',
      description: 'Repair potholes on the main road leading to the research station.',
      status: 'blocked',
      priority: 'high',
      assignee: {
        id: 203,
        name: 'Technician John',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      category: 'infrastructure',
      dueDate: '2025-04-28',
      startDate: '2025-04-24',
      updates: 1,
      attachments: 0
    },
    {
      id: 'TASK-2025-009',
      title: 'Update Animal Records',
      description: 'Update animal records with the latest health check information.',
      status: 'in-progress',
      priority: 'low',
      assignee: {
        id: 202,
        name: 'Vet Sarah',
        avatar: 'https://i.pravatar.cc/150?img=7'
      },
      category: 'admin',
      dueDate: '2025-04-29',
      startDate: '2025-04-25',
      updates: 2,
      attachments: 1
    },
    {
      id: 'TASK-2025-010',
      title: 'Install New Signage',
      description: 'Install new signage at the park entrance and visitor center.',
      status: 'completed',
      priority: 'medium',
      assignee: {
        id: 203,
        name: 'Technician John',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      category: 'infrastructure',
      dueDate: '2025-04-20',
      startDate: '2025-04-20',
      updates: 0,
      attachments: 0
    }
  ];

  // Get unique assignees for filter
  const assignees = [...new Set(tasks.map(task => task.assignee.name))];

  // Filter tasks based on active tab, status, assignee and search query
  const filteredTasks = tasks.filter(task => {
    // Filter by tab (status)
    const matchesTab = activeTab === 'all' || task.status === activeTab;

    // Filter by status
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;

    // Filter by assignee
    const matchesAssignee = assigneeFilter === 'all' || task.assignee.name === assigneeFilter;

    // Filter by search query
    const matchesSearch = searchQuery === '' ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesStatus && matchesAssignee && matchesSearch;
  });
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge variant="outline" className="text-red-500 border-red-500">Open</Badge>;
      case 'in-progress':
        return <Badge className="bg-amber-500 hover:bg-amber-600">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>;
      case 'blocked':
        return <Badge variant="destructive">Blocked</Badge>;
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
      'infrastructure': { label: 'Infrastructure', color: 'bg-blue-100 text-blue-800' },
      'wildlife': { label: 'Wildlife', color: 'bg-green-100 text-green-800' },
      'security': { label: 'Security', color: 'bg-red-100 text-red-800' },
      'admin': { label: 'Admin', color: 'bg-purple-100 text-purple-800' }
    };

    const categoryInfo = categoryMap[category] || { label: category, color: 'bg-gray-100 text-gray-800' };

    return (
      <Badge variant="secondary" className={categoryInfo.color}>
        {categoryInfo.label}
      </Badge>
    );
  };

  return (
    <PageTemplate 
      title="Task Management" 
      description="Track and manage park operations tasks"
      icon={<CheckSquare className="h-6 w-6" />}
    >
      <div className="space-y-6">
        {/* Action Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-1 sm:flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search tasks..." 
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
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
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
                value={assigneeFilter} 
                onValueChange={setAssigneeFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Assignee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Assignees</SelectItem>
                  {assignees.map(assignee => (
                    <SelectItem key={assignee} value={assignee}>
                      {assignee}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full sm:w-auto">
              <PlusCircle className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">New Task</span>
            </Button>
          </div>
        </div>

        {/* Task Tabs and Content */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4 w-full sm:w-auto overflow-x-auto">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <ListChecks className="h-4 w-4" /> All Tasks <Badge variant="secondary" className="ml-1">{tasks.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="open" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> Open <Badge variant="secondary" className="ml-1">{tasks.filter(t => t.status === 'open').length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="in-progress" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" /> In Progress <Badge variant="secondary" className="ml-1">{tasks.filter(t => t.status === 'in-progress').length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Completed <Badge variant="secondary" className="ml-1">{tasks.filter(t => t.status === 'completed').length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="blocked" className="flex items-center gap-2">
              <CircleX className="h-4 w-4" /> Blocked <Badge variant="secondary" className="ml-1">{tasks.filter(t => t.status === 'blocked').length}</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ListChecks className="h-5 w-5" />
                      {activeTab === 'all' ? 'All Tasks' :
                       activeTab === 'open' ? 'Open Tasks' :
                       activeTab === 'in-progress' ? 'In Progress Tasks' :
                       activeTab === 'completed' ? 'Completed Tasks' : 'Blocked Tasks'}
                    </CardTitle>
                    <CardDescription>
                      Showing {filteredTasks.length} of {tasks.length} tasks
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hidden sm:flex">
                      <CalendarDays className="h-4 w-4 mr-2" /> Calendar View
                    </Button>
                    <Button variant="ghost" size="sm" className="hidden sm:flex">
                      <ArrowDownUp className="h-4 w-4 mr-2" /> Sort
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
                          <TableHead>Task</TableHead>
                          <TableHead className="hidden md:table-cell">Assignee</TableHead>
                          <TableHead className="hidden lg:table-cell">Category</TableHead>
                          <TableHead className="hidden sm:table-cell">Due Date</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredTasks.length > 0 ? (
                          filteredTasks.map((task) => (
                            <TableRow key={task.id} className="cursor-pointer hover:bg-muted/50">
                              <TableCell className="font-medium">{task.id}</TableCell>
                              <TableCell>
                                <div className="font-medium">{task.title}</div>
                                <div className="text-xs text-muted-foreground hidden sm:block mt-1">
                                  {task.description.length > 50
                                    ? `${task.description.substring(0, 50)}...`
                                    : task.description}
                                </div>
                                <div className="mt-1 flex gap-1">
                                  {getStatusBadge(task.status)}
                                  {getCategoryBadge(task.category)}
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                                    <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="text-sm font-medium">{task.assignee.name}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="hidden lg:table-cell">{task.category}</TableCell>
                              <TableCell className="hidden sm:table-cell">
                                <div className="flex items-center gap-1">
                                  <CalendarClock className="h-4 w-4 text-muted-foreground" />
                                  <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                                </div>
                              </TableCell>
                              <TableCell>{getPriorityBadge(task.priority)}</TableCell>
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
                                      <ClipboardList className="mr-2 h-4 w-4" /> View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Tags className="mr-2 h-4 w-4" /> Edit Tags
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <CalendarDays className="mr-2 h-4 w-4" /> Change Due Date
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    {task.status !== 'completed' && (
                                      <DropdownMenuItem>
                                        <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed
                                      </DropdownMenuItem>
                                    )}
                                    {task.status === 'completed' && (
                                      <DropdownMenuItem>
                                        <AlertCircle className="mr-2 h-4 w-4" /> Reopen Task
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
                              No tasks found matching the current filters.
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
              <CardTitle className="text-sm font-medium">Task Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                      Open
                    </span>
                    <span>{tasks.filter(t => t.status === 'open').length} tasks</span>
                  </div>
                  <Progress value={tasks.filter(t => t.status === 'open').length / tasks.length * 100} className="h-2 bg-red-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-amber-500 mr-2"></span>
                      In Progress
                    </span>
                    <span>{tasks.filter(t => t.status === 'in-progress').length} tasks</span>
                  </div>
                  <Progress value={tasks.filter(t => t.status === 'in-progress').length / tasks.length * 100} className="h-2 bg-amber-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                      Completed
                    </span>
                    <span>{tasks.filter(t => t.status === 'completed').length} tasks</span>
                  </div>
                  <Progress value={tasks.filter(t => t.status === 'completed').length / tasks.length * 100} className="h-2 bg-green-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-gray-500 mr-2"></span>
                      Blocked
                    </span>
                    <span>{tasks.filter(t => t.status === 'blocked').length} tasks</span>
                  </div>
                  <Progress value={tasks.filter(t => t.status === 'blocked').length / tasks.length * 100} className="h-2 bg-gray-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Tasks by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['infrastructure', 'wildlife', 'security', 'admin'].map((category, idx) => {
                  const categoryTaskCount = tasks.filter(t => t.category === category).length;
                  const categoryColors = [
                    'bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-purple-500'
                  ];
                  const categoryBgColors = [
                    'bg-blue-100', 'bg-green-100', 'bg-red-100', 'bg-purple-100'
                  ];
                  return (
                    <div key={category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center">
                          <Clipboard className={`h-3 w-3 text-muted-foreground mr-2`} />
                          {category}
                        </span>
                        <span>{categoryTaskCount} tasks</span>
                      </div>
                      <Progress
                        value={categoryTaskCount / tasks.length * 100}
                        className={`h-2 ${categoryBgColors[idx % categoryBgColors.length]}`}
                      />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tasks
                  .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                  .slice(0, 3)
                  .map((task, idx) => (
                    <div key={task.id} className="flex items-center justify-between p-2 border rounded-md">
                      <div>
                        <div className="font-medium text-sm">{task.title}</div>
                        <div className="text-xs text-muted-foreground">
                          Due: {new Date(task.dueDate).toLocaleDateString()}
                        </div>
                      </div>
                      {getPriorityBadge(task.priority)}
                    </div>
                  ))}
                <Button variant="ghost" size="sm" className="w-full mt-2">
                  <CalendarDays className="h-4 w-4 mr-2" /> View All Deadlines
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {assignees.map((assignee, idx) => {
                  const assigneeTaskCount = tasks.filter(t => t.assignee.name === assignee).length;
                  return (
                    <div key={assignee} className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7">
                          {/* Assuming assignees are unique and can be used as key */}
                          <AvatarImage src={`https://i.pravatar.cc/150?name=${assignee}`} alt={assignee} />
                          <AvatarFallback>{assignee.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{assignee}</span>
                      </div>
                      <Badge variant="secondary">{assigneeTaskCount} tasks</Badge>
                    </div>
                  );
                })}
                <Button variant="ghost" size="sm" className="w-full mt-2">
                  <Users className="h-4 w-4 mr-2" /> View Team Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Tasks;
