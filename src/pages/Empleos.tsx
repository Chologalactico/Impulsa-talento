
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import JobCard from '@/components/jobs/JobCard';
import JobFilters from '@/components/jobs/JobFilters';
import NoResultsMessage from '@/components/jobs/NoResultsMessage';
import { jobsData, Job } from '@/data/jobsData';

const Empleos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [showRemote, setShowRemote] = useState(false);
  const [showFirstJob, setShowFirstJob] = useState(true);
  const [jobs] = useState<Job[]>(jobsData);
  
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

  const resetFilters = () => {
    setSearchTerm('');
    setLocation('');
    setJobType('');
    setShowRemote(false);
    setShowFirstJob(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Ofertas de empleo para jóvenes sin experiencia</h1>

          {/* Componente de filtros */}
          <JobFilters 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            location={location}
            setLocation={setLocation}
            jobType={jobType}
            setJobType={setJobType}
            showRemote={showRemote}
            setShowRemote={setShowRemote}
            showFirstJob={showFirstJob}
            setShowFirstJob={setShowFirstJob}
            resetFilters={resetFilters}
          />

          {/* Resultados */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <NoResultsMessage resetFilters={resetFilters} />
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
