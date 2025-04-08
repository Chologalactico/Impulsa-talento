
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Clock, Building, Search, Filter, ChevronRight } from 'lucide-react';

// Datos simulados de ofertas de empleo
const jobsData = [
  {
    id: 1,
    title: 'Asistente de Marketing',
    company: 'Marketing Digital SL',
    location: 'Madrid',
    type: 'Tiempo completo',
    salary: '18.000.000 COP - 21.000.000 COP',
    remote: false,
    postedAt: '2 días',
    description: 'Buscamos un asistente de marketing para apoyar en campañas digitales. No se requiere experiencia previa, pero sí formación en marketing.',
    requirements: ['Formación en Marketing', 'Conocimientos de redes sociales', 'Nivel alto de inglés'],
    isNew: true,
    forFirstJob: true,
  },
  {
    id: 2,
    title: 'Desarrollador Junior Frontend',
    company: 'TechSolutions',
    location: 'Barcelona',
    type: 'Tiempo completo',
    salary: '22.000.000 COP - 25.000.000 COP',
    remote: true,
    postedAt: '1 semana',
    description: 'Oportunidad para desarrollador junior de unirse a nuestro equipo de frontend. Formación a cargo de la empresa.',
    requirements: ['Conocimientos básicos de HTML/CSS/JS', 'Ganas de aprender', 'Estudios en informática'],
    isNew: false,
    forFirstJob: true,
  },
  {
    id: 3,
    title: 'Auxiliar Administrativo',
    company: 'Gestión Integral',
    location: 'Valencia',
    type: 'Media jornada',
    salary: '12.000.000 COP - 15.000.000 COP',
    remote: false,
    postedAt: '3 días',
    description: 'Buscamos persona para tareas administrativas básicas. Posibilidad de combinar con estudios.',
    requirements: ['Estudios de administración', 'Conocimientos de ofimática', 'Capacidad organizativa'],
    isNew: true,
    forFirstJob: true,
  },
  {
    id: 4,
    title: 'Diseñador Gráfico Junior',
    company: 'CreativeStudio',
    location: 'Madrid',
    type: 'Tiempo completo',
    salary: '19.000.000 COP - 22.000.000 COP',
    remote: true,
    postedAt: '5 días',
    description: 'Empresa creativa busca incorporar diseñador recién graduado para proyectos de marca e identidad visual.',
    requirements: ['Estudios de Diseño Gráfico', 'Portfolio', 'Conocimientos de Adobe Creative Suite'],
    isNew: false,
    forFirstJob: true,
  },
  {
    id: 5,
    title: 'Analista de Datos Junior',
    company: 'DataInsights',
    location: 'Sevilla',
    type: 'Tiempo completo',
    salary: '23.000.000 COP - 26.000.000 COP',
    remote: true,
    postedAt: '1 día',
    description: 'Únete a nuestro equipo de analítica. Programa de formación incluido para recién graduados en estadística o matemáticas.',
    requirements: ['Conocimientos de SQL', 'Excel avanzado', 'Grado en Matemáticas, Estadística o similar'],
    isNew: true,
    forFirstJob: true,
  },
];

const Empleos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [showRemote, setShowRemote] = useState(false);
  const [showFirstJob, setShowFirstJob] = useState(true);
  const [jobs, setJobs] = useState(jobsData);
  
  // Filtrar trabajos basado en los criterios de búsqueda
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = location === '' || job.location === location;
    const matchesType = jobType === '' || job.type === jobType;
    const matchesRemote = !showRemote || job.remote;
    const matchesFirstJob = !showFirstJob || job.forFirstJob;
    
    return matchesSearch && matchesLocation && matchesType && matchesRemote && matchesFirstJob;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Ofertas de empleo para jóvenes sin experiencia</h1>

          {/* Filtros y buscador */}
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
            </div>
          </div>

          {/* Resultados */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card key={job.id} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold mr-3">{job.title}</h3>
                        {job.isNew && (
                          <Badge className="bg-accent">Nuevo</Badge>
                        )}
                      </div>
                      <div className="text-gray-600 mb-4">
                        <p className="flex items-center mb-1">
                          <Building size={16} className="mr-2" />
                          {job.company}
                        </p>
                        <p className="flex items-center mb-1">
                          <MapPin size={16} className="mr-2" />
                          {job.location} {job.remote && <span className="ml-2 text-sm text-accent">(Remoto disponible)</span>}
                        </p>
                        <p className="flex items-center mb-1">
                          <Briefcase size={16} className="mr-2" />
                          {job.type}
                        </p>
                        <p className="flex items-center mb-1">
                          <Clock size={16} className="mr-2" />
                          Publicado hace {job.postedAt}
                        </p>
                      </div>
                      <div className="my-4">
                        <p className="text-gray-700">{job.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-100">{req}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-xl font-semibold text-primary">{job.salary}</div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button asChild>
                      <a href={`/empleos/${job.id}`}>
                        Ver detalle <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No se encontraron ofertas de empleo que coincidan con tu búsqueda.</p>
                <Button className="mt-4" onClick={() => {
                  setSearchTerm('');
                  setLocation('');
                  setJobType('');
                  setShowRemote(false);
                  setShowFirstJob(true);
                }}>
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Impulsa Talento. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Empleos;
