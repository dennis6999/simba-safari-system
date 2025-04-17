import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { PawPrint, Search, Filter, Plus, FileText, Download, MoreHorizontal, ArrowUpDown, CalendarRange, Weight, Activity, Heart, MapPin, Tag, Info } from 'lucide-react';
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
      endangered: false,
      weight: '190 kg',
      diet: 'Carnivore',
      lastMedical: '03/15/2024',
      nextVaccination: '05/20/2024',
      territory: '25 sq km',
      subspecies: 'East African Lion',
      conservationStatus: 'Vulnerable',
      family: 'Pride of 12',
      behavior: 'Dominant male, territorial',
      medicalHistory: 'Regular checkups, vaccinated against common feline diseases',
      notes: 'Excellent physical condition, showing strong leadership traits in pride',
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
      endangered: false,
      weight: '2,800 kg',
      diet: 'Herbivore',
      lastMedical: '02/28/2024',
      nextVaccination: '08/15/2024',
      territory: '100 sq km',
      subspecies: 'African Bush Elephant',
      conservationStatus: 'Vulnerable',
      family: 'Herd of 15',
      behavior: 'Matriarch, protective of calves',
      medicalHistory: 'Regular foot care, dental checkups',
      notes: 'Recently gave birth to healthy calf, shows excellent maternal behavior',
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
      endangered: true,
      weight: '1,500 kg',
      diet: 'Herbivore',
      lastMedical: '04/10/2024',
      nextVaccination: '06/15/2024',
      territory: '10 sq km',
      subspecies: 'Black Rhino',
      conservationStatus: 'Endangered',
      family: 'Group of 5',
      behavior: 'Aggressive, territorial',
      medicalHistory: 'Regular anti-poaching patrols, vaccinated against common rhino diseases',
      notes: 'Recent injury, showing signs of recovery',
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
      endangered: false,
      weight: '1,200 kg',
      diet: 'Herbivore',
      lastMedical: '01/15/2024',
      nextVaccination: '03/15/2024',
      territory: '50 sq km',
      subspecies: 'Giraffe',
      conservationStatus: 'Least Concern',
      family: 'Family of 3',
      behavior: 'Social, playful',
      medicalHistory: 'Regular foot care, dental checkups',
      notes: 'Excellent physical condition, showing good social skills',
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
      endangered: false,
      weight: '60 kg',
      diet: 'Carnivore',
      lastMedical: '05/01/2024',
      nextVaccination: '07/15/2024',
      territory: '10 sq km',
      subspecies: 'Leopard',
      conservationStatus: 'Least Concern',
      family: 'Pride of 2',
      behavior: 'Territorial, solitary',
      medicalHistory: 'Regular checkups, vaccinated against common feline diseases',
      notes: 'Excellent physical condition, showing good hunting skills',
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
      endangered: false,
      weight: '1,800 kg',
      diet: 'Herbivore',
      lastMedical: '03/15/2024',
      nextVaccination: '05/15/2024',
      territory: '20 sq km',
      subspecies: 'Hippo',
      conservationStatus: 'Least Concern',
      family: 'Group of 10',
      behavior: 'Social, protective',
      medicalHistory: 'Regular foot care, dental checkups',
      notes: 'Excellent physical condition, showing good leadership skills',
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
      endangered: true,
      weight: '50 kg',
      diet: 'Carnivore',
      lastMedical: '06/10/2024',
      nextVaccination: '08/15/2024',
      territory: '5 sq km',
      subspecies: 'Cheetah',
      conservationStatus: 'Endangered',
      family: 'Pride of 3',
      behavior: 'Territorial, solitary',
      medicalHistory: 'Regular checkups, vaccinated against common feline diseases',
      notes: 'Excellent physical condition, showing good hunting skills',
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
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-1 sm:flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search animals..." 
                className="pl-8 w-full"
              />
            </div>
            <div className="grid grid-cols-2 sm:flex gap-2">
              <Select defaultValue="all-species">
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Species" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-species">All Species</SelectItem>
                  <SelectItem value="lion">Lions</SelectItem>
                  <SelectItem value="elephant">Elephants</SelectItem>
                  <SelectItem value="rhino">Rhinos</SelectItem>
                  <SelectItem value="giraffe">Giraffes</SelectItem>
                  <SelectItem value="leopard">Leopards</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Add Animal</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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

        <div className="overflow-x-auto">
          <Tabs defaultValue="all" onValueChange={setView} className="w-full">
            <TabsList className="mb-4 w-full sm:w-auto">
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
                <div className="rounded-md border">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Species</TableHead>
                          <TableHead className="hidden md:table-cell">Age</TableHead>
                          <TableHead className="hidden md:table-cell">Gender</TableHead>
                          <TableHead className="hidden lg:table-cell">Location</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredAnimals.length > 0 ? (
                          filteredAnimals.map((animal) => (
                            <TableRow key={animal.id} className="cursor-pointer hover:bg-muted/50">
                              <TableCell className="font-medium">{animal.id}</TableCell>
                              <TableCell>{animal.name}</TableCell>
                              <TableCell>{getSpeciesBadge(animal.species, animal.endangered)}</TableCell>
                              <TableCell className="hidden md:table-cell">{animal.age}</TableCell>
                              <TableCell className="hidden md:table-cell">{animal.gender}</TableCell>
                              <TableCell className="hidden lg:table-cell">{animal.location}</TableCell>
                              <TableCell>{getStatusBadge(animal.status)}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      <Info className="mr-2 h-4 w-4" /> View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Heart className="mr-2 h-4 w-4" /> Health Records
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Activity className="mr-2 h-4 w-4" /> Behavior Tracking
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Weight className="mr-2 h-4 w-4" /> Update Measurements
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <MapPin className="mr-2 h-4 w-4" /> Location History
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <CalendarRange className="mr-2 h-4 w-4" /> Schedule Check-up
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Tag className="mr-2 h-4 w-4" /> Update Tags
                                    </DropdownMenuItem>
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
      </div>
    </PageTemplate>
  );
};

export default Animals;
