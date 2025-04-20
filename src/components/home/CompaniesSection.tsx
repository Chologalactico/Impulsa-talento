
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CompaniesSection = () => {
  return (
    <section className="bg-secondary py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Para Empresas</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Conectamos a su empresa con jóvenes talentos llenos de potencial, energía e ideas frescas.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">¿Por qué contratar talento joven?</h3>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>Adaptabilidad y rápido aprendizaje de nuevas tecnologías y métodos</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>Entusiasmo, motivación y deseos de probar su valía</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>Menores costos de contratación y desarrollo de talentos a medida</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>Nuevas perspectivas e ideas innovadoras para su negocio</span>
            </li>
          </ul>
          
          <div className="flex justify-center">
            <Button asChild className="bg-primary hover:bg-primary-hover">
              <Link to="/empresas">Publicar oferta</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
