
import React from 'react';
import CourseCard from './CourseCard';

interface CourseInProgressProps {
  courses: any[];
}

const CourseInProgress: React.FC<CourseInProgressProps> = ({ courses }) => {
  const coursesInProgress = courses.filter(course => course.progress !== null);
  
  if (coursesInProgress.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Continúa aprendiendo</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesInProgress.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseInProgress;
