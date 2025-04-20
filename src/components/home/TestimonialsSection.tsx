
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Historias de éxito</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <p className="italic text-gray-600 mb-4">
              "Gracias a Impulsa Talento conseguí mi primer trabajo como desarrollador junior. El proceso fue muy sencillo y recibí apoyo en cada paso."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Carlos Mendoza</h4>
                <p className="text-sm text-gray-500">Desarrollador Web</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <p className="italic text-gray-600 mb-4">
              "Como empresa, hemos encontrado increíbles talentos jóvenes a través de esta plataforma. Ahora nuestro equipo es más dinámico y creativo."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Ana Torres</h4>
                <p className="text-sm text-gray-500">Directora de RRHH en TechSolutions</p>
              </div>
            </div>
          </Card>
        </div>
        
        {showMore && (
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="p-6">
              <p className="italic text-gray-600 mb-4">
                "Los cursos me ayudaron a mejorar mi CV y a prepararme para las entrevistas. Ahora tengo un trabajo en marketing digital."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Laura Jiménez</h4>
                  <p className="text-sm text-gray-500">Asistente de Marketing</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <p className="italic text-gray-600 mb-4">
                "Nuestra startup ha crecido gracias al talento joven que hemos incorporado mediante esta plataforma. Recomendado al 100%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Miguel Sánchez</h4>
                  <p className="text-sm text-gray-500">CEO de InnovaApp</p>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => setShowMore(!showMore)}
            className="border-primary text-primary hover:bg-primary/10"
          >
            {showMore ? 'Ver menos' : 'Ver más historias'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
