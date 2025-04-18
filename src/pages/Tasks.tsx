import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { UserCog, Search, Plus, Calendar, Clock, CheckCheck, AlertCircle, MoreHorizontal, User, Filter, CheckSquare, XSquare, ArrowUpDown, List, CalendarDays, Tags, Circle } from 'lucide-react';
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

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [assigneeFilter, setAssigneeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample task data
  const tasks = [
    {
      id: 'TSK-1001',
      title: 'Conduct Monthly Health Checks for Lions',
      description: 'Perform routine health assessments for all lions in the Eastern Savanna area.',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-04-25',
      createdDate: '2025-04-10',
      assignee: {
        id: 1,
        name: 'Dr. Jane Wanjiku',
        avatar: 'https://i.pravatar.cc/150?img=32',
        department: 'Veterinary'
      },
      category: 'animal-care',
      progress: 50,
      comments: 3,
      attachments: 2
    },
    {
      id: 'TSK-1002',
      title: 'Update Conservation Zone Maps',
      description: 'Review and update digital maps of conservation zones to reflect recent boundary changes.',
      status: 'to-do',
      priority: 'medium',
      dueDate: '2025-04-28',
      createdDate: '2025-04-12',
      assignee: {
        id: 8,
        name: 'James Kamau',
        avatar: 'https://i.pravatar.cc/150?img=13',
        department: 'IT'
      },
      category: 'administrative',
      progress: 0,
      comments: 2,
      attachments: 1
    },
    {
      id: 'TSK-1003',
      title: 'Repair Northern Sector Fence',
      description: 'Fix damaged sections of the perimeter fence in the northern sector following recent storm damage.',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-04-22',
      createdDate: '2025-04-08',
      assignee: {
        id: 2,
        name: 'David Ochieng',
        avatar: 'https://i.pravatar.cc/150?img=68',
        department: 'Security'
      },
      category: 'maintenance',
      progress: 75,
      comments: 5,
      attachments: 3
    },
    {
      id: 'TSK-1004',
      title: 'Review Educational Material for School Visits',
      description: 'Update and prepare educational materials for upcoming school group visits.',
      status: 'completed',
      priority: 'medium',
      dueDate: '2025-04-15',
      createdDate: '2025-04-05',
      completedDate: '2025-04-14',
      assignee: {
        id: 5,
        name: 'Grace Muthoni',
        avatar: 'https://i.pravatar.cc/150?img=10',
        department: 'Education'
      },
      category: 'education',
      progress: 100,
      comments: 4,
      attachments: 6
    },
    {
      id: 'TSK-1005',
      title: 'Prepare Monthly Conservation Report',
      description: 'Compile and analyze data for the April conservation report to be submitted to the board.',
      status: 'to-do',
      priority: 'high',
      dueDate: '2025-04-30',
      createdDate: '2025-04-12',
      assignee: {
        id: 3,
        name: 'Sarah Kimani',
        avatar: 'https://i.pravatar.cc/150?img=47',
        department: 'Conservation'
      },
      category: 'reporting',
      progress: 10,
      comments: 1,
      attachments: 4
    },
    {
      id: 'TSK-1006',
      title: 'Conduct Anti-Poaching Patrol Training',
      description: 'Organize and lead training session for rangers on new anti-poaching protocols.',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-04-27',
      createdDate: '2025-04-11',
      assignee: {
        id: 2,
        name: 'David Ochieng',
        avatar: 'https://i.pravatar.cc/150?img=68',
        department: 'Security'
      },
      category: 'training',
      progress: 30,
      comments: 2,
      attachments: 1
    },
    {
      id: 'TSK-1007',
      title: 'Analyze Rhino Movement Patterns',
      description: 'Review tracking data and analyze recent rhino movement patterns for conservation planning.',
      status: 'to-do',
      priority: 'medium',
      dueDate: '2025-05-05',
      createdDate: '2025-04-15',
      assignee: {
        id: 3,
        name: 'Sarah Kimani',
        avatar: 'https://i.pravatar.cc/150?img=47',
        department: 'Conservation'
      },
      category: 'research',
      progress: 0,
      comments: 0,
      attachments: 2
    },
    {
      id: 'TSK-1008',
      title: 'Schedule Visitor Center Maintenance',
      description: 'Coordinate with facilities team to schedule routine maintenance for the main visitor center.',
      status: 'completed',
      priority: 'low',
      dueDate: '2025-04-20',
      createdDate: '2025-04-10',
      completedDate: '2025-04-18',
      assignee: {
        id: 7,
        name: 'Eunice Akinyi',
        avatar: 'https://i.pravatar.cc/150?img=24',
        department: 'Operations'
      },
      category: 'maintenance',
      progress: 100,
      comments: 3,
      attachments: 0
    },
    {
      id: 'TSK-1009',
      title: 'Order Medical Supplies for Veterinary Clinic',
      description: 'Review inventory and place orders for required medical supplies for the veterinary clinic.',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2025-04-24',
      createdDate: '2025-04-14',
      assignee: {
        id: 4,
        name: 'Daniel Njoroge',
        avatar: 'https://i.pravatar.cc/150?img=59',
        department: 'Veterinary'
      },
      category: 'logistics',
      progress: 60,
      comments: 2,
      attachments: 1
    },
    {
      id: 'TSK-1010',
      title: 'Prepare for Board Visit',
      description: 'Coordinate logistics and prepare presentation materials for upcoming board member visit.',
      status: 'to-do',
      priority: 'high',
      dueDate: '2025-05-02',
      createdDate: '2025-04-15',
      assignee: {
        id: 7,
        name: 'Eunice Akinyi',
        avatar: 'https://i.pravatar.cc/150?img=24',
        department: 'Operations'
      },
      category: 'administrative',
      progress: 0,
      comments: 5,
      attachments: 3
    }
  ];

  // Get unique departments for filter
  const departments = [...new Set(tasks.map(task => task.assignee.department))];
  
  // Get unique assignees for filter
  const assignees = [...new Set(tasks.map(task => JSON.stringify(task.assignee)))].map(a => JSON.parse(a));
  
  // Filter tasks based on active tab, priority, assignee and search query
  const filteredTasks = tasks.filter(task => {
    // Filter by tab (status)
    const matchesTab = activeTab === 'all' || 
                       (activeTab === 'in-progress' && task.status === 'in-progress') ||
                       (activeTab === 'to-do' && task.status === 'to-do') ||
                       (activeTab === 'completed' && task.status === 'completed');
    
    // Filter by priority
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    
    // Filter by assignee
    const matchesAssignee = assigneeFilter === 'all' || task.assignee.id.toString() === assigneeFilter;
    
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
                          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesPriority && matchesAssignee && matchesSearch;
  });
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'to-do':
        return <Badge variant="outline" className="text-blue-500 border-blue-500">To Do</Badge>;
      case 'in-progress':
        return <Badge className="bg-amber-500 hover:bg-amber-600">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return (
          <Badge variant="outline" className="text-red-500 border-red-500 flex items-center gap-1">
            <Circle className="fill-red-500 h-2 w-2" /> High
          </Badge>
        );
      case 'medium':
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500 flex items-center gap-1">
            <Circle className="fill-amber-500 h-2 w-2" /> Medium
          </Badge>
        );
      case 'low':
        return (
          <Badge variant="outline" className="text-green-500 border-green-500 flex items-center gap-1">
            <Circle className="fill-green-500 h-2 w-2" /> Low
          </Badge>
        );
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };
  
  const getCategoryBadge = (category: string) => {
    const categoryMap: {[key: string]: {label: string, color: string}} = {
      'animal-care': { label: 'Animal Care', color: 'bg-blue-100 text-blue-800' },
      'administrative': { label: 'Administrative', color: 'bg-gray-100 text-gray-800' },
      'maintenance': { label: 'Maintenance', color: 'bg-amber-100 text-amber-800' },
      'education': { label: 'Education', color: 'bg-purple-100 text-purple-800' },
      'reporting': { label: 'Reporting', color: 'bg-green-100 text-green-800' },
      'training': { label: 'Training', color: 'bg-indigo-100 text-indigo-800' },
      'research': { label: 'Research', color: 'bg-teal-100 text-teal-800' },
      'logistics': { label: 'Logistics', color: 'bg-orange-100 text-orange-800' }
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
      description="Assign and track staff tasks and responsibilities"
      icon={<UserCog className="h-6 w-6" />}
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
                value={priorityFilter} 
                onValueChange={setPriorityFilter}
              >
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Select 
              value={assigneeFilter} 
              onValueChange={setAssigneeFilter}
              className="w-full sm:w-auto"
            >
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Assignee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Assignees</SelectItem>
                {assignees.map(assignee => (
                  <SelectItem key={assignee.id} value={assignee.id.toString()}>
                    {assignee.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">New Task</span>
            </Button>
          </div>
        </div>

        {/* Task Tabs and Content */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4 w-full sm:w-auto overflow-x-auto">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <List className="h-4 w-4" /> All Tasks <Badge variant="secondary" className="ml-1">{tasks.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="to-do" className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4" /> To Do <Badge variant="secondary" className="ml-1">{tasks.filter(t => t.status === 'to-do').length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="in-progress" className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> In Progress <Badge variant="secondary" className="ml-1">{tasks.filter(t => t.status === 'in-progress').length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <CheckCheck className="h-4 w-4" /> Completed <Badge variant="secondary" className="ml-1">{tasks.filter(t => t.status === 'completed').length}</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <UserCog className="h-5 w-5" />
                      {activeTab === 'all' ? 'All Tasks' : 
                       activeTab === 'to-do' ? 'To Do Tasks' :
                       activeTab === 'in-progress' ? 'In Progress Tasks' : 'Completed Tasks'}
                    </CardTitle>
                    <CardDescription>
                      Showing {filteredTasks.length} of {tasks.length} tasks
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
                          <TableHead>Task</TableHead>
                          <TableHead className="hidden md:table-cell">Assignee</TableHead>
                          <TableHead className="hidden lg:table-cell">Progress</TableHead>
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
                                  <div className="hidden sm:block">
                                    {getCategoryBadge(task.category)}
                                  </div>
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
                                    <div className="text-xs text-muted-foreground">{task.assignee.department}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="hidden lg:table-cell">
                                <div className="w-full max-w-[120px]">
                                  <div className="flex justify-between text-xs mb-1">
                                    <span>{task.progress}%</span>
                                  </div>
                                  <Progress value={task.progress} className="h-2" />
                                </div>
                              </TableCell>
                              <TableCell className="hidden sm:table-cell">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                                </div>
                              </TableCell>
                              <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                      <span className="sr-only">Open menu</span>
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      <User className="mr-2 h-4 w-4" /> Reassign
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <CalendarDays className="mr-2 h-4 w-4" /> Change Due Date
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Tags className="mr-2 h-4 w-4" /> Edit Categories
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    {task.status !== 'completed' && (
                                      <DropdownMenuItem>
                                        <CheckCheck className="mr-2 h-4 w-4" /> Mark Complete
                                      </DropdownMenuItem>
                                    )}
                                    {task.status === 'completed' && (
                                      <DropdownMenuItem>
                                        <XSquare className="mr-2 h-4 w-4" /> Reopen Task
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Task Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                      To Do
                    </span>
                    <span>{tasks.filter(t => t.status === 'to-do').length} tasks</span>
                  </div>
                  <Progress value={tasks.filter(t => t.status === 'to-do').length / tasks.length * 100} className="h-2 bg-blue-100" />
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
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Department Task Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {departments.map((department, idx) => {
                  const deptTaskCount = tasks.filter(t => t.assignee.department === department).length;
                  const deptColors = [
                    'bg-blue-500', 'bg-purple-500', 'bg-amber-500', 
                    'bg-green-500', 'bg-red-500', 'bg-indigo-500'
                  ];
                  const deptBgColors = [
                    'bg-blue-100', 'bg-purple-100', 'bg-amber-100', 
                    'bg-green-100', 'bg-red-100', 'bg-indigo-100'
                  ];
                  return (
                    <div key={department}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center">
                          <span className={`h-3 w-3 rounded-full ${deptColors[idx % deptColors.length]} mr-2`}></span>
                          {department}
                        </span>
                        <span>{deptTaskCount} tasks</span>
                      </div>
                      <Progress 
                        value={deptTaskCount / tasks.length * 100} 
                        className={`h-2 ${deptBgColors[idx % deptBgColors.length]}`}
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
                  .filter(t => t.status !== 'completed')
                  .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                  .slice(0, 4)
                  .map(task => {
                    const today = new Date();
                    const dueDate = new Date(task.dueDate);
                    const daysDiff = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                    
                    let statusElement;
                    if (daysDiff < 0) {
                      statusElement = <Badge variant="destructive">Overdue</Badge>;
                    } else if (daysDiff === 0) {
                      statusElement = <Badge variant="destructive">Due Today</Badge>;
                    } else if (daysDiff <= 2) {
                      statusElement = <Badge className="bg-amber-500">Soon</Badge>;
                    } else {
                      statusElement = <Badge variant="outline" className="text-blue-500">{daysDiff} days</Badge>;
                    }
                    
                    return (
                      <div key={task.id} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <div className="font-medium text-sm">{task.title.length > 25 
                            ? `${task.title.substring(0, 25)}...` 
                            : task.title}</div>
                          <div className="text-xs text-muted-foreground">{task.id} • {getPriorityBadge(task.priority)}</div>
                        </div>
                        <div>
                          {statusElement}
                        </div>
                      </div>
                    );
                  })
                }
                
                <Button variant="ghost" size="sm" className="w-full mt-2">
                  <Calendar className="h-4 w-4 mr-2" /> View All Deadlines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Task Activity</CardTitle>
            <CardDescription>Latest updates and actions on tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: 'Dr. Jane Wanjiku', action: 'completed', task: 'Elephant health assessments', time: '2 hours ago' },
                { user: 'David Ochieng', action: 'updated', task: 'Repair Northern Sector Fence', time: '3 hours ago' },
                { user: 'Sarah Kimani', action: 'commented on', task: 'Rhino Movement Analysis', time: '5 hours ago' },
                { user: 'James Kamau', action: 'assigned to', task: 'Update Conservation Maps', time: '1 day ago' },
                { user: 'Eunice Akinyi', action: 'created', task: 'Prepare for Board Visit', time: '1 day ago' }
              ].map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-primary/10">
                    {activity.action === 'completed' ? (
                      <CheckCheck className="h-4 w-4 text-green-500" />
                    ) : activity.action === 'updated' ? (
                      <ArrowUpDown className="h-4 w-4 text-blue-500" />
                    ) : activity.action === 'commented on' ? (
                      <User className="h-4 w-4 text-purple-500" />
                    ) : activity.action === 'assigned to' ? (
                      <User className="h-4 w-4 text-amber-500" />
                    ) : (
                      <Plus className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                      <span className="font-medium">{activity.task}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default Tasks;
