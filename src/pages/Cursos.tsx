
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { coursesData } from '@/data/coursesData';
import CourseCard from '@/components/courses/CourseCard';
import CourseSearch from '@/components/courses/CourseSearch';
import CourseCertifications from '@/components/courses/CourseCertifications';
import CourseInProgress from '@/components/courses/CourseInProgress';

interface CursosProps {
  defaultTab?: string;
}

const Cursos = ({ defaultTab = "todos" }: CursosProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Cursos de capacitación</h1>
          <p className="text-gray-600 mb-8">Mejora tus habilidades y aumenta tus posibilidades de empleo</p>

          {/* Buscador y filtros */}
          <CourseSearch />

          {/* Tabs de categorías */}
          <Tabs defaultValue={activeTab} className="mb-8" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="tecnologia">Tecnología</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="diseno">Diseño</TabsTrigger>
              <TabsTrigger value="administracion">Administración</TabsTrigger>
              <TabsTrigger value="habilidades">Habilidades blandas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesData.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </TabsContent>
            
            {['tecnologia', 'marketing', 'diseno', 'administracion', 'habilidades'].map((category) => (
              <TabsContent key={category} value={category} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData
                  .filter((course) => course.category === category)
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Sección de certificaciones */}
          <CourseCertifications />
          
          {/* Cursos en progreso */}
          <CourseInProgress courses={coursesData} />
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Impulsa Talento. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cursos;
