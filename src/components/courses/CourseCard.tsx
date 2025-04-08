
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Star, Users, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  course: {
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
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
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

export default CourseCard;
