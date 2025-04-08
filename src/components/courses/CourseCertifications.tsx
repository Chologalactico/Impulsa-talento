
import React from 'react';
import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';

const CourseCertifications: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-12">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Obtén certificaciones reconocidas</h2>
          <p className="text-gray-600 mb-6">
            Nuestros cursos incluyen certificaciones que podrás añadir a tu CV para demostrar tus habilidades a futuros empleadores.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-10 w-10 text-primary" />
            <div>
              <h3 className="font-semibold">Certificados digitales</h3>
              <p className="text-sm text-gray-600">Comparte tus logros en LinkedIn y otras plataformas</p>
            </div>
          </div>
          <Button asChild className="bg-primary hover:bg-primary-hover">
            <a href="/certificaciones">Ver certificaciones disponibles</a>
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNlcnRpZmljYXRlfGVufDB8fDB8fHww" 
            alt="Certificaciones profesionales" 
            className="rounded-lg shadow-md max-w-full h-auto"
            style={{ maxHeight: "250px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCertifications;
