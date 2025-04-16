
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Briefcase, Clock, ChevronRight } from 'lucide-react';
import { Job } from '@/data/jobsData';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
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
  );
};

export default JobCard;
