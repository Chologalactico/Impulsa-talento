
// Data model for courses
export interface Course {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  free: boolean;
  price?: string;
  isNew: boolean;
  progress: number | null;
}

// Simulated courses data
export const coursesData: Course[] = [
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
    price: '$55 USD',
    isNew: false,
    progress: null,
  },
  {
    id: 3,
    title: 'Diseño UX/UI para principiantes',
    category: 'diseno',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXglMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
    description: 'Aprende a diseñar experiencias de usuario intuitivas y atractivas.',
    duration: '25 horas',
    level: 'Principiante',
    rating: 4.6,
    students: 876,
    free: false,
    price: '$43 USD',
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
    price: '$66 USD',
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
