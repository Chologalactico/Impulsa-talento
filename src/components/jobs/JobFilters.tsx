
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Search } from 'lucide-react';

interface JobFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  jobType: string;
  setJobType: (value: string) => void;
  showRemote: boolean;
  setShowRemote: (value: boolean) => void;
  showFirstJob: boolean;
  setShowFirstJob: (value: boolean) => void;
  resetFilters: () => void;
  showResetButton?: boolean;
}

const JobFilters: React.FC<JobFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  location,
  setLocation,
  jobType,
  setJobType,
  showRemote,
  setShowRemote,
  showFirstJob,
  setShowFirstJob,
  resetFilters,
  showResetButton = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Buscar por puesto o empresa"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="md:w-1/4">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Ubicación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las ubicaciones</SelectItem>
              <SelectItem value="Madrid">Madrid</SelectItem>
              <SelectItem value="Barcelona">Barcelona</SelectItem>
              <SelectItem value="Valencia">Valencia</SelectItem>
              <SelectItem value="Sevilla">Sevilla</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:w-1/4">
          <Select value={jobType} onValueChange={setJobType}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de contrato" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los tipos</SelectItem>
              <SelectItem value="Tiempo completo">Tiempo completo</SelectItem>
              <SelectItem value="Media jornada">Media jornada</SelectItem>
              <SelectItem value="Prácticas">Prácticas</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remote" 
            checked={showRemote}
            onCheckedChange={(checked) => setShowRemote(checked as boolean)}
          />
          <label htmlFor="remote" className="text-sm font-medium leading-none cursor-pointer">
            Solo trabajo remoto
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="firstJob" 
            checked={showFirstJob}
            onCheckedChange={(checked) => setShowFirstJob(checked as boolean)}
          />
          <label htmlFor="firstJob" className="text-sm font-medium leading-none cursor-pointer">
            Para primer empleo
          </label>
        </div>
        
        {showResetButton && (
          <Button 
            variant="outline" 
            onClick={resetFilters} 
            className="ml-auto"
          >
            Limpiar filtros
          </Button>
        )}
      </div>
    </div>
  );
};

export default JobFilters;
