
import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { PawPrint, Search, Filter, Plus, FileText, Download, MoreHorizontal, ArrowUpDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const Animals = () => {
  const [view, setView] = useState<string>('all');
  
  const animals = [
    {
      id: 'A1001',
      name: 'Simba',
      species: 'Lion',
      age: '5 years',
      gender: 'Male',
      location: 'Eastern Savanna',
      status: 'Healthy',
      joinDate: '12/06/2018',
      chipId: 'KWS-CH-5643',
      endangered: false
    },
    {
      id: 'A1002',
      name: 'Tembo',
      species: 'Elephant',
      age: '12 years',
      gender: 'Female',
      location: 'Northern Plains',
      status: 'Healthy',
      joinDate: '03/15/2011',
      chipId: 'KWS-CH-1287',
      endangered: false
    },
    {
      id: 'A1003',
      name: 'Kifaru',
      species: 'Rhino',
      age: '8 years',
      gender: 'Male',
      location: 'Protected Reserve',
      status: 'Under Treatment',
      joinDate: '06/23/2015',
      chipId: 'KWS-CH-9823',
      endangered: true
    },
    {
      id: 'A1004',
      name: 'Twiga',
      species: 'Giraffe',
      age: '7 years',
      gender: 'Female',
      location: 'Acacia Grove',
      status: 'Healthy',
      joinDate: '09/10/2016',
      chipId: 'KWS-CH-4561',
      endangered: false
    },
    {
      id: 'A1005',
      name: 'Chui',
      species: 'Leopard',
      age: '4 years',
      gender: 'Female',
      location: 'Southern Ridge',
      status: 'Monitoring',
      joinDate: '02/14/2019',
      chipId: 'KWS-CH-7890',
      endangered: false
    },
    {
      id: 'A1006',
      name: 'Kiboko',
      species: 'Hippo',
      age: '10 years',
      gender: 'Male',
      location: 'Central Lake',
      status: 'Healthy',
      joinDate: '07/22/2013',
      chipId: 'KWS-CH-2345',
      endangered: false
    },
    {
      id: 'A1007',
      name: 'Duma',
      species: 'Cheetah',
      age: '3 years',
      gender: 'Male',
      location: 'Grassland Plains',
      status: 'Monitoring',
      joinDate: '11/05/2020',
      chipId: 'KWS-CH-6759',
      endangered: true
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'healthy':
        return <Badge className="bg-green-500 hover:bg-green-600">{status}</Badge>;
      case 'monitoring':
        return <Badge variant="outline" className="text-amber-500 border-amber-500">{status}</Badge>;
      case 'under treatment':
        return <Badge variant="secondary" className="bg-orange-100 text-orange-800">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getSpeciesBadge = (species: string, endangered: boolean) => {
    if (endangered) {
      return <Badge variant="outline" className="border-red-500 text-red-500">{species} (Endangered)</Badge>;
    }
    return <span>{species}</span>;
  };

  const filteredAnimals = view === 'all' 
    ? animals 
    : view === 'endangered' 
      ? animals.filter(a => a.endangered)
      : animals.filter(a => a.status.toLowerCase() === view.toLowerCase());

  return (
    <PageTemplate 
      title="Animals Management" 
      description="Manage and track all animals in the wildlife service"
      icon={<PawPrint className="h-6 w-6" />}
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search animals..." className="pl-8" />
            </div>
            <Select defaultValue="all-species">
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Species" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-species">All Species</SelectItem>
                <SelectItem value="lion">Lion</SelectItem>
                <SelectItem value="elephant">Elephant</SelectItem>
                <SelectItem value="rhino">Rhino</SelectItem>
                <SelectItem value="giraffe">Giraffe</SelectItem>
                <SelectItem value="leopard">Leopard</SelectItem>
                <SelectItem value="hippo">Hippo</SelectItem>
                <SelectItem value="cheetah">Cheetah</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" /> Add Animal
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" /> Export Report
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" /> Download Data
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs defaultValue="all" onValueChange={setView}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Animals</TabsTrigger>
            <TabsTrigger value="endangered">Endangered</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="healthy">Healthy</TabsTrigger>
            <TabsTrigger value="under treatment">Treatment</TabsTrigger>
          </TabsList>
          
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <PawPrint className="h-4 w-4" />
                <span>Animal Registry</span>
              </CardTitle>
              <CardDescription>
                Total: {filteredAnimals.length} animals
                {view !== 'all' && ` with status: ${view}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          Species
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>Gender</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAnimals.length > 0 ? (
                      filteredAnimals.map((animal) => (
                        <TableRow key={animal.id}>
                          <TableCell className="font-medium">{animal.id}</TableCell>
                          <TableCell>{animal.name}</TableCell>
                          <TableCell>{getSpeciesBadge(animal.species, animal.endangered)}</TableCell>
                          <TableCell>{animal.age}</TableCell>
                          <TableCell>{animal.gender}</TableCell>
                          <TableCell>{animal.location}</TableCell>
                          <TableCell>{getStatusBadge(animal.status)}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View details</DropdownMenuItem>
                                <DropdownMenuItem>Edit information</DropdownMenuItem>
                                <DropdownMenuItem>Health records</DropdownMenuItem>
                                <DropdownMenuItem>Tracking data</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                          No animals found with the selected filters.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {filteredAnimals.length} of {animals.length} animals
              </div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
              </div>
            </CardFooter>
          </Card>
        </Tabs>
      </div>
    </PageTemplate>
  );
};

export default Animals;
