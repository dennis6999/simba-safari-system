
import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { LineChart, Search, Filter, Download, Calendar, AreaChart, BarChart, PieChart, RefreshCw, FilePlus, FileText, ArrowDownUp, Printer, ChevronDown, List, BarChart2, Layers, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [reportTypeFilter, setReportTypeFilter] = useState('all');
  const [dateRangeFilter, setDateRangeFilter] = useState('month');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample report data
  const reports = [
    {
      id: 'RPT-1001',
      title: 'Monthly Animal Health Summary',
      description: 'Comprehensive report on animal health metrics, treatments, and trends for April 2025.',
      date: '2025-04-15',
      type: 'health',
      status: 'published',
      author: 'Dr. Jane Wanjiku',
      views: 156,
      downloads: 42,
      timeframe: 'monthly'
    },
    {
      id: 'RPT-1002',
      title: 'Q1 2025 Conservation Achievement Report',
      description: 'Quarterly analysis of conservation efforts, successes, challenges, and KPI tracking.',
      date: '2025-04-10',
      type: 'conservation',
      status: 'published',
      author: 'Sarah Kimani',
      views: 230,
      downloads: 65,
      timeframe: 'quarterly'
    },
    {
      id: 'RPT-1003',
      title: 'Visitor Demographics Analysis',
      description: 'Detailed breakdown of visitor demographics, engagement, and satisfaction metrics.',
      date: '2025-04-08',
      type: 'visitors',
      status: 'published',
      author: 'Eunice Akinyi',
      views: 178,
      downloads: 37,
      timeframe: 'monthly'
    },
    {
      id: 'RPT-1004',
      title: 'Wildlife Population Census',
      description: 'Comprehensive census of wildlife populations, migration patterns, and habitat utilization.',
      date: '2025-04-05',
      type: 'wildlife',
      status: 'published',
      author: 'Grace Muthoni',
      views: 312,
      downloads: 98,
      timeframe: 'quarterly'
    },
    {
      id: 'RPT-1005',
      title: 'Security Incidents Monthly Report',
      description: 'Analysis of security events, response times, and threat assessment for April 2025.',
      date: '2025-04-15',
      type: 'security',
      status: 'draft',
      author: 'David Ochieng',
      views: 0,
      downloads: 0,
      timeframe: 'monthly'
    },
    {
      id: 'RPT-1006',
      title: 'Financial Performance Analysis',
      description: 'Monthly financial performance metrics, revenue streams, and budget tracking.',
      date: '2025-04-14',
      type: 'finance',
      status: 'published',
      author: 'James Kamau',
      views: 45,
      downloads: 12,
      timeframe: 'monthly'
    },
    {
      id: 'RPT-1007',
      title: 'Educational Program Impact Assessment',
      description: 'Evaluation of educational program outcomes, reach, and effectiveness.',
      date: '2025-04-12',
      type: 'education',
      status: 'published',
      author: 'Grace Muthoni',
      views: 87,
      downloads: 29,
      timeframe: 'quarterly'
    },
    {
      id: 'RPT-1008',
      title: 'Rhino Conservation Status Update',
      description: 'Focused report on rhino population health, growth, and conservation challenges.',
      date: '2025-04-07',
      type: 'wildlife',
      status: 'published',
      author: 'Sarah Kimani',
      views: 225,
      downloads: 76,
      timeframe: 'monthly'
    },
    {
      id: 'RPT-1009',
      title: 'Staff Performance Analytics',
      description: 'Assessment of staff performance metrics, training completion, and skill development.',
      date: '2025-04-15',
      type: 'staff',
      status: 'draft',
      author: 'Paul Kiprono',
      views: 0,
      downloads: 0,
      timeframe: 'quarterly'
    },
    {
      id: 'RPT-1010',
      title: 'Infrastructure Maintenance Status',
      description: 'Overview of infrastructure condition, maintenance activities, and future requirements.',
      date: '2025-04-10',
      type: 'infrastructure',
      status: 'published',
      author: 'Alex Kirui',
      views: 65,
      downloads: 18,
      timeframe: 'monthly'
    }
  ];

  // Sample analytics data for charts
  const animalHealthData = {
    animals: ['Lions', 'Elephants', 'Rhinos', 'Giraffes', 'Zebras', 'Leopards'],
    metrics: [
      { name: 'Health Index', values: [92, 88, 94, 90, 95, 87] },
      { name: 'Treatment Success Rate', values: [95, 92, 90, 94, 96, 93] }
    ]
  };

  const visitorData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    metrics: [
      { name: 'Local Visitors', values: [1200, 1350, 1400, 1450, 1600, 1800, 2000, 2100, 1900, 1700, 1500, 1300] },
      { name: 'International Visitors', values: [850, 900, 950, 1100, 1250, 1500, 1650, 1700, 1450, 1300, 1100, 950] }
    ]
  };

  const conservationStats = {
    categories: ['Habitat Restoration', 'Anti-Poaching', 'Water Management', 'Wildlife Corridors', 'Community Engagement'],
    progress: [75, 88, 65, 70, 82]
  };

  // Filter reports based on type, date range and search query
  const filteredReports = reports.filter(report => {
    // Filter by report type
    const matchesType = reportTypeFilter === 'all' || report.type === reportTypeFilter;
    
    // Filter by date range (based on the timeframe property for this example)
    const matchesDateRange = dateRangeFilter === 'all' || report.timeframe === dateRangeFilter;
    
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
                          report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          report.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          report.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesDateRange && matchesSearch;
  });
  
  const getReportTypeBadge = (type: string) => {
    const typeMap: {[key: string]: {icon: React.ReactNode, color: string}} = {
      'health': { icon: <LineChart className="h-3 w-3" />, color: 'bg-blue-100 text-blue-800' },
      'conservation': { icon: <AreaChart className="h-3 w-3" />, color: 'bg-green-100 text-green-800' },
      'visitors': { icon: <BarChart className="h-3 w-3" />, color: 'bg-purple-100 text-purple-800' },
      'wildlife': { icon: <PieChart className="h-3 w-3" />, color: 'bg-amber-100 text-amber-800' },
      'security': { icon: <LineChart className="h-3 w-3" />, color: 'bg-red-100 text-red-800' },
      'finance': { icon: <BarChart className="h-3 w-3" />, color: 'bg-emerald-100 text-emerald-800' },
      'education': { icon: <PieChart className="h-3 w-3" />, color: 'bg-indigo-100 text-indigo-800' },
      'staff': { icon: <BarChart className="h-3 w-3" />, color: 'bg-orange-100 text-orange-800' },
      'infrastructure': { icon: <LineChart className="h-3 w-3" />, color: 'bg-gray-100 text-gray-800' }
    };
    
    const typeInfo = typeMap[type] || { icon: <LineChart className="h-3 w-3" />, color: 'bg-gray-100 text-gray-800' };
    
    return (
      <Badge variant="secondary" className={`flex items-center gap-1 ${typeInfo.color}`}>
        {typeInfo.icon} {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    );
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-500 hover:bg-green-600">Published</Badge>;
      case 'draft':
        return <Badge variant="outline" className="text-amber-500 border-amber-500">Draft</Badge>;
      case 'archived':
        return <Badge variant="secondary" className="bg-gray-100 text-gray-800">Archived</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  // Sample chart placeholder components
  const ChartPlaceholder = ({ type, title, subtitle }: { type: 'bar' | 'line' | 'pie' | 'area', title: string, subtitle: string }) => {
    return (
      <div className="border rounded-md p-4 h-72 flex flex-col">
        <div className="mb-4">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex-grow flex items-center justify-center bg-muted/20 rounded-md">
          {type === 'bar' && <BarChart2 className="h-12 w-12 text-muted-foreground" />}
          {type === 'line' && <LineChart className="h-12 w-12 text-muted-foreground" />}
          {type === 'pie' && <PieChart className="h-12 w-12 text-muted-foreground" />}
          {type === 'area' && <AreaChart className="h-12 w-12 text-muted-foreground" />}
        </div>
      </div>
    );
  };
  
  return (
    <PageTemplate 
      title="Analytics & Reports" 
      description="View and generate reports and analytics"
      icon={<LineChart className="h-6 w-6" />}
    >
      <div className="space-y-6">
        {/* Action Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-1 sm:flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search reports..." 
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 sm:flex gap-2">
              <Select 
                value={reportTypeFilter} 
                onValueChange={setReportTypeFilter}
              >
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="conservation">Conservation</SelectItem>
                  <SelectItem value="visitors">Visitors</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
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
              value={dateRangeFilter} 
              onValueChange={setDateRangeFilter}
              className="w-full sm:w-auto"
            >
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reports</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full sm:w-auto">
              <FilePlus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Generate Report</span>
            </Button>
          </div>
        </div>

        {/* Reports Tabs and Content */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4 w-full sm:w-auto overflow-x-auto">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Layers className="h-4 w-4" /> Overview
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Reports
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" /> Analytics
            </TabsTrigger>
            <TabsTrigger value="dashboards" className="flex items-center gap-2">
              <AreaChart className="h-4 w-4" /> Dashboards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{reports.length}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+12%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {reports.reduce((sum, report) => sum + report.views, 0).toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+23%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    Connected and operational
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Data Freshness</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98.2%</div>
                  <p className="text-xs text-muted-foreground">
                    Data updated within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Latest published reports and analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Report Title</TableHead>
                          <TableHead className="hidden md:table-cell">Type</TableHead>
                          <TableHead className="hidden md:table-cell">Date</TableHead>
                          <TableHead className="hidden lg:table-cell">Author</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {reports
                          .filter(report => report.status === 'published')
                          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                          .slice(0, 5)
                          .map((report) => (
                            <TableRow key={report.id} className="cursor-pointer hover:bg-muted/50">
                              <TableCell>
                                <div className="font-medium">{report.title}</div>
                                <div className="text-xs text-muted-foreground">{report.id}</div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {getReportTypeBadge(report.type)}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {new Date(report.date).toLocaleDateString()}
                              </TableCell>
                              <TableCell className="hidden lg:table-cell">
                                {report.author}
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                      <span className="sr-only">Open menu</span>
                                      <ChevronDown className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                      <FileText className="mr-2 h-4 w-4" /> View Report
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Download className="mr-2 h-4 w-4" /> Download
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Printer className="mr-2 h-4 w-4" /> Print
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button variant="ghost">View All Reports</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Report Categories</CardTitle>
                  <CardDescription>Distribution by report type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['wildlife', 'health', 'conservation', 'visitors', 'security', 'finance'].map(type => {
                      const count = reports.filter(report => report.type === type).length;
                      const percentage = Math.round((count / reports.length) * 100);
                      
                      return (
                        <div key={type} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <div className="flex items-center">
                              {getReportTypeBadge(type)}
                            </div>
                            <span>{percentage}%</span>
                          </div>
                          <Progress value={percentage} className="h-2" />
                        </div>
                      );
                    })}
                    
                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        <ArrowDownUp className="mr-2 h-4 w-4" /> View Category Trends
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reports by Status</CardTitle>
                  <CardDescription>Current report status breakdown</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                  <div className="h-40 w-40 relative mb-6 flex items-center justify-center bg-muted/20 rounded-full">
                    <PieChart className="h-20 w-20 text-muted-foreground" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col items-center p-2 border rounded-md">
                      <div className="text-2xl font-bold text-green-500">{reports.filter(r => r.status === 'published').length}</div>
                      <div className="text-sm">Published</div>
                    </div>
                    <div className="flex flex-col items-center p-2 border rounded-md">
                      <div className="text-2xl font-bold text-amber-500">{reports.filter(r => r.status === 'draft').length}</div>
                      <div className="text-sm">Draft</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Report Engagement</CardTitle>
                  <CardDescription>Views and downloads per report type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {['wildlife', 'health', 'conservation'].map(type => {
                      const typeReports = reports.filter(report => report.type === type);
                      const totalViews = typeReports.reduce((sum, report) => sum + report.views, 0);
                      const totalDownloads = typeReports.reduce((sum, report) => sum + report.downloads, 0);
                      
                      return (
                        <div key={type} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              {getReportTypeBadge(type)}
                              <span className="font-medium text-sm">Reports</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{typeReports.length} reports</span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex justify-between items-center p-2 bg-blue-50 rounded-md">
                              <span className="text-xs text-muted-foreground">Views</span>
                              <span className="font-bold">{totalViews}</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-green-50 rounded-md">
                              <span className="text-xs text-muted-foreground">Downloads</span>
                              <span className="font-bold">{totalDownloads}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Reports Library</CardTitle>
                    <CardDescription>Browse all generated reports</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hidden sm:flex">
                      <RefreshCw className="h-4 w-4 mr-2" /> Refresh
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <List className="h-4 w-4 mr-2" /> View Options
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <List className="mr-2 h-4 w-4" /> List View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Layers className="mr-2 h-4 w-4" /> Grid View
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" /> Group by Author
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" /> Group by Date
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Type</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="hidden lg:table-cell">Author</TableHead>
                        <TableHead className="hidden lg:table-cell">Engagement</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredReports.length > 0 ? (
                        filteredReports.map((report) => (
                          <TableRow key={report.id} className="cursor-pointer hover:bg-muted/50">
                            <TableCell>
                              <div className="font-medium">{report.title}</div>
                              <div className="text-xs text-muted-foreground hidden sm:block">{report.description.length > 60 
                                ? `${report.description.substring(0, 60)}...` 
                                : report.description}</div>
                              <div className="text-xs text-muted-foreground sm:hidden">{report.id}</div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {getReportTypeBadge(report.type)}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {new Date(report.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="hidden lg:table-cell">
                              {report.author}
                            </TableCell>
                            <TableCell className="hidden lg:table-cell">
                              <div className="flex flex-col">
                                <div className="flex items-center gap-1 text-xs">
                                  <FileText className="h-3 w-3 text-muted-foreground" />
                                  <span>{report.views} views</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs">
                                  <Download className="h-3 w-3 text-muted-foreground" />
                                  <span>{report.downloads} downloads</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(report.status)}
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <ChevronDown className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <FileText className="mr-2 h-4 w-4" /> View Report
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Download className="mr-2 h-4 w-4" /> Download
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Printer className="mr-2 h-4 w-4" /> Print
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                            No reports found matching the current filters.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredReports.length} of {reports.length} reports
                </div>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm" disabled>Next</Button>
                </div>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Report Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { name: 'Animal Health Report', type: 'health' },
                      { name: 'Visitor Analytics', type: 'visitors' },
                      { name: 'Conservation Status', type: 'conservation' },
                      { name: 'Security Summary', type: 'security' },
                      { name: 'Financial Overview', type: 'finance' }
                    ].map((template, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 border rounded-md hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="text-sm">{template.name}</span>
                        </div>
                        <Button variant="ghost" size="sm">Use</Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">
                      <Plus className="mr-2 h-4 w-4" /> Create Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Scheduled Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { name: 'Monthly Health Summary', frequency: 'Monthly', nextRun: '2025-05-01' },
                      { name: 'Weekly Security Briefing', frequency: 'Weekly', nextRun: '2025-04-22' },
                      { name: 'Daily Visitor Count', frequency: 'Daily', nextRun: '2025-04-19' }
                    ].map((scheduled, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 border rounded-md">
                        <div>
                          <div className="text-sm font-medium">{scheduled.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {scheduled.frequency} • Next: {new Date(scheduled.nextRun).toLocaleDateString()}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">
                      <Plus className="mr-2 h-4 w-4" /> Schedule Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Report Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-md">
                      <h3 className="font-medium mb-1">Automated Reporting</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Set up automated report generation based on triggers and schedules.
                      </p>
                      <Button size="sm" variant="outline">Configure</Button>
                    </div>
                    <div className="p-3 bg-green-50 rounded-md">
                      <h3 className="font-medium mb-1">Data Integration</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Connect data sources to enable real-time reporting capabilities.
                      </p>
                      <Button size="sm" variant="outline">Manage Sources</Button>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-md">
                      <h3 className="font-medium mb-1">Distribution Rules</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Define who receives reports automatically.
                      </p>
                      <Button size="sm" variant="outline">Set Rules</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartPlaceholder
                type="bar"
                title="Animal Population Trends"
                subtitle="Population changes over the past 5 years"
              />
              <ChartPlaceholder
                type="line"
                title="Visitor Numbers"
                subtitle="Monthly visitor statistics"
              />
              <ChartPlaceholder
                type="area"
                title="Conservation Progress"
                subtitle="Progress across key conservation initiatives"
              />
              <ChartPlaceholder
                type="pie"
                title="Resource Allocation"
                subtitle="Budget distribution across departments"
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
                <CardDescription>Critical metrics across all departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {[
                    { name: 'Animal Health Index', value: 92, change: '+3%', trend: 'up', target: 95 },
                    { name: 'Visitor Satisfaction', value: 87, change: '+5%', trend: 'up', target: 90 },
                    { name: 'Conservation Coverage', value: 72, change: '+8%', trend: 'up', target: 80 },
                    { name: 'Habitat Quality Score', value: 79, change: '+2%', trend: 'up', target: 85 },
                    { name: 'Anti-Poaching Success', value: 94, change: '+6%', trend: 'up', target: 98 },
                    { name: 'Educational Impact', value: 83, change: '+4%', trend: 'up', target: 90 }
                  ].map((kpi, idx) => (
                    <div key={idx} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium">{kpi.name}</h3>
                        <Badge variant="outline" className={
                          kpi.trend === 'up' ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500'
                        }>
                          {kpi.change}
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold mb-3">{kpi.value}</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Target: {kpi.target}</span>
                          <span>{Math.round((kpi.value / kpi.target) * 100)}%</span>
                        </div>
                        <Progress value={(kpi.value / kpi.target) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Wildlife Census Analytics</CardTitle>
                    <CardDescription>Population distribution by species</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { species: 'Elephants', count: 483, change: '+3.2%', habitat: 'Multiple regions', status: 'Stable' },
                        { species: 'Lions', count: 87, change: '+5.8%', habitat: 'Eastern Savanna', status: 'Increasing' },
                        { species: 'Rhinos', count: 52, change: '+1.9%', habitat: 'Protected Sanctuary', status: 'Stable' },
                        { species: 'Giraffes', count: 197, change: '+4.2%', habitat: 'Multiple regions', status: 'Increasing' },
                        { species: 'Buffalo', count: 635, change: '+2.7%', habitat: 'Central Plains', status: 'Stable' }
                      ].map((species, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 border rounded-md">
                          <div>
                            <div className="font-medium">{species.species}</div>
                            <div className="text-xs text-muted-foreground">{species.habitat}</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold">{species.count}</div>
                            <div className="text-xs text-green-500">{species.change}</div>
                          </div>
                          <div>
                            <Badge variant="outline" className="bg-green-50 text-green-800">{species.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics Tools</CardTitle>
                    <CardDescription>Available analysis tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { name: 'Data Explorer', icon: <Layers className="h-4 w-4" /> },
                        { name: 'Trend Analysis', icon: <LineChart className="h-4 w-4" /> },
                        { name: 'Comparative Reports', icon: <BarChart className="h-4 w-4" /> },
                        { name: 'Predictive Models', icon: <AreaChart className="h-4 w-4" /> },
                        { name: 'Custom Visualizations', icon: <PieChart className="h-4 w-4" /> }
                      ].map((tool, idx) => (
                        <Button key={idx} variant="outline" className="w-full justify-start">
                          {tool.icon} <span className="ml-2">{tool.name}</span>
                        </Button>
                      ))}
                      <Button className="w-full mt-2">
                        <Plus className="mr-2 h-4 w-4" /> Create Custom Analysis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="dashboards" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Custom Dashboards</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Create Dashboard
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Executive Overview', description: 'High-level metrics for management review', updated: '2025-04-16' },
                { name: 'Conservation Dashboard', description: 'Detailed conservation metrics and KPIs', updated: '2025-04-15' },
                { name: 'Visitor Analytics', description: 'Visitor patterns, demographics, and engagement', updated: '2025-04-14' },
                { name: 'Wildlife Health', description: 'Animal health and veterinary key metrics', updated: '2025-04-12' },
                { name: 'Security Operations', description: 'Security incidents and response metrics', updated: '2025-04-10' },
                { name: 'Financial Performance', description: 'Revenue, expenses, and budget tracking', updated: '2025-04-08' }
              ].map((dashboard, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{dashboard.name}</CardTitle>
                    <CardDescription>{dashboard.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-muted/20 rounded-md flex items-center justify-center">
                      <Layers className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-xs text-muted-foreground">
                      Updated: {new Date(dashboard.updated).toLocaleDateString()}
                    </div>
                    <Button size="sm">View</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Configuration</CardTitle>
                <CardDescription>Customize your reporting dashboards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <Layers className="h-8 w-8 mb-2 text-blue-500" />
                      <h3 className="font-medium mb-1">Widgets</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Configure and customize dashboard widgets
                      </p>
                      <Button size="sm" variant="outline">Manage</Button>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <RefreshCw className="h-8 w-8 mb-2 text-green-500" />
                      <h3 className="font-medium mb-1">Data Sources</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Connect and manage dashboard data sources
                      </p>
                      <Button size="sm" variant="outline">Configure</Button>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <User className="h-8 w-8 mb-2 text-purple-500" />
                      <h3 className="font-medium mb-1">Access Control</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Manage dashboard sharing and permissions
                      </p>
                      <Button size="sm" variant="outline">Settings</Button>
                    </div>
                  </Card>
                </div>
                <div className="flex justify-center">
                  <Button variant="default">
                    <Plus className="mr-2 h-4 w-4" /> New Dashboard Component
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTemplate>
  );
};

export default Reports;
