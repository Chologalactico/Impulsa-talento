
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Star, Award, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-2">
      <div className="bg-primary p-12 md:p-16 flex flex-col justify-center min-h-[500px]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          El lugar para conseguir tu primer trabajo
        </h1>
        <p className="text-white/90 text-lg mb-8">
          Impulsa Talento te ayuda a encontrar empleo, mejorar tu
          desempeño y capacitarte para destacar en el mundo laboral, sin
          importar si eres recién egresado o tienes experiencia. ¡Impulsa
          tu futuro con nosotros! <Rocket className="inline ml-1" size={20} />
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-white text-primary hover:bg-white/90">
            <Link to="/ofertas">Ver ofertas</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-primary-hover">
            <Link to="/registro">Registrarse</Link>
          </Button>
        </div>
      </div>
      <div className="bg-secondary flex items-center justify-center p-8">
        <div className="max-w-lg p-8 text-center">
          <Star className="mx-auto h-14 w-14 text-amber-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4">¡Construyamos juntos el futuro laboral!</h2>
          <p className="text-gray-700 mb-6">
            <span className="font-semibold">Para jóvenes:</span> Da el primer paso hacia tu carrera profesional sin preocuparte por la falta de experiencia.
          </p>
          <p className="text-gray-700 mb-6">
            <span className="font-semibold">Para empresas:</span> Descubra talentos frescos, motivados y listos para crecer con su organización.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-primary">
              <Award className="h-5 w-5" />
              <span className="font-medium">Crecimiento mutuo</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Briefcase className="h-5 w-5" />
              <span className="font-medium">Compromiso</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Star className="h-5 w-5" />
              <span className="font-medium">Innovación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
