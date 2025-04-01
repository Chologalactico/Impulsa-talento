
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Search, Clock, Star, Users, ChevronRight, Filter, Award } from 'lucide-react';

// Datos simulados de cursos
const coursesData = [
  {
    id: 1,
    title: 'Fundamentos de Marketing Digital',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Aprende los conceptos básicos del marketing digital para impulsar tu carrera.',
    duration: '20 horas',
    level: 'Principiante',
    rating: 4.7,
    students: 1245,
    free: true,
    isNew: true,
    progress: null,
  },
  {
    id: 2,
    title: 'Desarrollo Web Frontend',
    category: 'tecnologia',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
    description: 'Domina HTML, CSS y JavaScript para crear interfaces web modernas.',
    duration: '40 horas',
    level: 'Intermedio',
    rating: 4.9,
    students: 2309,
    free: false,
    price: '49€',
    isNew: false,
    progress: null,
  },
  {
    id: 3,
    title: 'Diseño UX/UI para principiantes',
    category: 'diseno',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXglMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
    description: 'Aprende a diseñar experiencias de usuario intuitivas y atractivas.',
    duration: '25 horas',
    level: 'Principiante',
    rating: 4.6,
    students: 876,
    free: false,
    price: '39€',
    isNew: true,
    progress: null,
  },
  {
    id: 4,
    title: 'Excel para Recursos Humanos',
    category: 'administracion',
    image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhjZWx8ZW58MHx8MHx8fDA%3D',
    description: 'Optimiza tus tareas de RRHH con Excel avanzado y automatizaciones.',
    duration: '15 horas',
    level: 'Intermedio',
    rating: 4.5,
    students: 654,
    free: true,
    isNew: false,
    progress: 45,
  },
  {
    id: 5,
    title: 'Introducción a Python',
    category: 'tecnologia',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fHww',
    description: 'Aprende los fundamentos de Python, uno de los lenguajes más demandados.',
    duration: '30 horas',
    level: 'Principiante',
    rating: 4.8,
    students: 1987,
    free: false,
    price: '59€',
    isNew: false,
    progress: 78,
  },
  {
    id: 6,
    title: 'Comunicación efectiva en el trabajo',
    category: 'habilidades',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Mejora tus habilidades de comunicación para destacar en cualquier entorno laboral.',
    duration: '10 horas',
    level: 'Todos los niveles',
    rating: 4.7,
    students: 1432,
    free: true,
    isNew: false,
    progress: 20,
  },
];

const Cursos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Cursos de capacitación</h1>
          <p className="text-gray-600 mb-8">Mejora tus habilidades y aumenta tus posibilidades de empleo</p>

          {/* Buscador y filtros */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    placeholder="Buscar cursos..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          {/* Tabs de categorías */}
          <Tabs defaultValue="todos" className="mb-8">
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
          
          {/* Cursos en progreso (solo se muestra si hay cursos en progreso) */}
          {coursesData.some(course => course.progress) && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Continúa aprendiendo</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData
                  .filter((course) => course.progress !== null)
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </div>
          )}
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

// Componente para la tarjeta de curso
const CourseCard = ({ course }: { course: any }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
        {course.isNew && (
          <Badge className="absolute top-3 right-3 bg-accent">Nuevo</Badge>
        )}
        {course.free ? (
          <Badge className="absolute bottom-3 left-3 bg-green-600">Gratis</Badge>
        ) : (
          <Badge className="absolute bottom-3 left-3 bg-primary">{course.price}</Badge>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex flex-wrap gap-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500 mr-4">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500 mr-4">
            <BookOpen className="h-4 w-4 mr-1" />
            {course.level}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            {course.rating}
          </div>
        </div>
        
        {course.progress !== null ? (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">Progreso</span>
              <span className="text-sm font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        ) : (
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Users className="h-4 w-4 mr-1" />
            {course.students} estudiantes
          </div>
        )}
        
        <Button asChild className="w-full">
          <a href={`/cursos/${course.id}`}>
            {course.progress !== null ? 'Continuar' : 'Ver curso'} <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default Cursos;
