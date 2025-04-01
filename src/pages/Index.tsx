
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ChevronRight, Rocket, Star, Award, Briefcase } from "lucide-react";

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
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

        {/* Features section */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¿Cómo te ayudamos?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Encuentra tu primer empleo</h3>
                <p className="text-gray-600">Ofertas laborales seleccionadas para jóvenes sin experiencia en diversos sectores.</p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Capacitación constante</h3>
                <p className="text-gray-600">Cursos y talleres para desarrollar habilidades que te harán destacar en el mercado laboral.</p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Conexión directa con empresas</h3>
                <p className="text-gray-600">Comunícate directamente con reclutadores y empresas que valoran el talento joven.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Companies section */}
        <section className="bg-secondary py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Para Empresas</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
              Conectamos a su empresa con jóvenes talentos llenos de potencial, energía e ideas frescas.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">¿Por qué contratar talento joven?</h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Adaptabilidad y rápido aprendizaje de nuevas tecnologías y métodos</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Entusiasmo, motivación y deseos de probar su valía</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Menores costos de contratación y desarrollo de talentos a medida</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Nuevas perspectivas e ideas innovadoras para su negocio</span>
                </li>
              </ul>
              
              <div className="flex justify-center">
                <Button asChild className="bg-primary hover:bg-primary-hover">
                  <Link to="/empresas">Publicar oferta</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials or Success Stories - can be expanded with actual data */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Historias de éxito</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <p className="italic text-gray-600 mb-4">
                  "Gracias a Impulsa Talento conseguí mi primer trabajo como desarrollador junior. El proceso fue muy sencillo y recibí apoyo en cada paso."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Carlos Mendoza</h4>
                    <p className="text-sm text-gray-500">Desarrollador Web</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <p className="italic text-gray-600 mb-4">
                  "Como empresa, hemos encontrado increíbles talentos jóvenes a través de esta plataforma. Ahora nuestro equipo es más dinámico y creativo."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Ana Torres</h4>
                    <p className="text-sm text-gray-500">Directora de RRHH en TechSolutions</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {showMore && (
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <Card className="p-6">
                  <p className="italic text-gray-600 mb-4">
                    "Los cursos me ayudaron a mejorar mi CV y a prepararme para las entrevistas. Ahora tengo un trabajo en marketing digital."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Laura Jiménez</h4>
                      <p className="text-sm text-gray-500">Asistente de Marketing</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <p className="italic text-gray-600 mb-4">
                    "Nuestra startup ha crecido gracias al talento joven que hemos incorporado mediante esta plataforma. Recomendado al 100%."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Miguel Sánchez</h4>
                      <p className="text-sm text-gray-500">CEO de InnovaApp</p>
                    </div>
                  </div>
                </Card>
              </div>
            )}
            
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowMore(!showMore)}
                className="border-primary text-primary hover:bg-primary/10"
              >
                {showMore ? 'Ver menos' : 'Ver más historias'}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Impulsa Talento</h3>
              <p className="text-gray-400">
                Conectando jóvenes talentos con oportunidades laborales desde 2023.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><Link to="/ofertas" className="text-gray-400 hover:text-white">Ofertas de empleo</Link></li>
                <li><Link to="/cursos" className="text-gray-400 hover:text-white">Cursos</Link></li>
                <li><Link to="/empresas" className="text-gray-400 hover:text-white">Para empresas</Link></li>
                <li><Link to="/nosotros" className="text-gray-400 hover:text-white">Sobre nosotros</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <address className="text-gray-400 not-italic">
                <p>info@impulsatalento.com</p>
                <p>+34 123 456 789</p>
                <p>Madrid, España</p>
              </address>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-5.04 10.37v3.17h1.53v-3.17h1.4l.21-1.39h-1.62V9.7c0-.8.24-.92.8-.92h.82V7.5h-1.31c-1.39 0-2.01.87-2.01 2.17v2.3h-1.12v1.39h1.12v3.17h1.18z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2023 Impulsa Talento. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
