
import React from 'react';
import { Button } from '@/components/ui/button';
import { SearchX } from 'lucide-react';

interface NoResultsMessageProps {
  resetFilters: () => void;
}

const NoResultsMessage: React.FC<NoResultsMessageProps> = ({ resetFilters }) => {
  return (
    <div className="text-center py-12 flex flex-col items-center">
      <SearchX className="h-16 w-16 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium mb-2">No se encontraron ofertas</h3>
      <p className="text-gray-600 max-w-md mx-auto mb-6">
        No se encontraron ofertas de empleo que coincidan con tu búsqueda. Intenta con otros criterios o limpia los filtros aplicados.
      </p>
      <Button onClick={resetFilters}>
        Limpiar filtros
      </Button>
    </div>
  );
};

export default NoResultsMessage;
