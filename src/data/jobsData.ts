
// Job data model
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  remote: boolean;
  postedAt: string;
  description: string;
  requirements: string[];
  isNew: boolean;
  forFirstJob: boolean;
}

// Datos simulados de ofertas de empleo
export const jobsData: Job[] = [
  {
    id: 1,
    title: 'Asistente de Marketing',
    company: 'Marketing Digital SL',
    location: 'Madrid',
    type: 'Tiempo completo',
    salary: '$4,500 - $5,250 USD',
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
    salary: '$5,500 - $6,250 USD',
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
    salary: '$3,000 - $3,750 USD',
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
    salary: '$4,750 - $5,500 USD',
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
    salary: '$5,750 - $6,500 USD',
    remote: true,
    postedAt: '1 día',
    description: 'Únete a nuestro equipo de analítica. Programa de formación incluido para recién graduados en estadística o matemáticas.',
    requirements: ['Conocimientos de SQL', 'Excel avanzado', 'Grado en Matemáticas, Estadística o similar'],
    isNew: true,
    forFirstJob: true,
  },
];
