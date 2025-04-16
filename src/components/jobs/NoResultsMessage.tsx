
import React from 'react';
import { Button } from '@/components/ui/button';

interface NoResultsMessageProps {
  resetFilters: () => void;
}

const NoResultsMessage: React.FC<NoResultsMessageProps> = ({ resetFilters }) => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-600">No se encontraron ofertas de empleo que coincidan con tu búsqueda.</p>
      <Button className="mt-4" onClick={resetFilters}>
        Limpiar filtros
      </Button>
    </div>
  );
};

export default NoResultsMessage;
