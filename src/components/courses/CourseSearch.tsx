
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

interface CourseSearchProps {
  onSearch?: (searchTerm: string) => void;
}

const CourseSearch: React.FC<CourseSearchProps> = ({ onSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Buscar cursos..."
              className="pl-10"
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Button variant="outline" className="flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filtros
        </Button>
      </div>
    </div>
  );
};

export default CourseSearch;
