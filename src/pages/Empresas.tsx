
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Users, 
  Briefcase, 
  CheckCircle, 
  AlertCircle, 
  PlusCircle, 
  FileText,
  Sparkles,
  BarChart3,
  ShieldCheck,
  ChevronDown,
  Upload
} from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { useToast } from "@/hooks/use-toast";

const Empresas = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('info');
  const [isOpenFaq1, setIsOpenFaq1] = useState(false);
  const [isOpenFaq2, setIsOpenFaq2] = useState(false);
  const [isOpenFaq3, setIsOpenFaq3] = useState(false);
  
  const [jobForm, setJobForm] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    salary: '',
    type: '',
    remote: 'no',
    company: '',
    contactEmail: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobForm({
      ...jobForm,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setJobForm({
      ...jobForm,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envío de formulario
    console.log('Form submitted:', jobForm);
    
    // Mostrar mensaje de éxito
    toast({
      title: "Oferta publicada",
      description: "Tu oferta de empleo ha sido publicada correctamente.",
      duration: 5000,
    });
    
    // Limpiar formulario
    setJobForm({
      title: '',
      description: '',
      requirements: '',
      location: '',
      salary: '',
      type: '',
      remote: 'no',
      company: '',
      contactEmail: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Empresas</h1>
              <p className="text-xl text-gray-600">Conectamos tu empresa con jóvenes talentos</p>
            </div>

            <Tabs defaultValue="info" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="info">Información</TabsTrigger>
                <TabsTrigger value="publicar">Publicar Oferta</TabsTrigger>
                <TabsTrigger value="beneficios">Beneficios</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="space-y-8">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Building className="h-12 w-12 text-primary" />
                    <div>
                      <h2 className="text-2xl font-semibold">¿Por qué contratar talento joven?</h2>
                      <p className="text-gray-600">Descubre las ventajas de incorporar a profesionales sin experiencia</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <Sparkles className="h-6 w-6 text-accent flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold">Potencial y adaptabilidad</h3>
                          <p className="text-gray-600">Los jóvenes se adaptan rápidamente a nuevos entornos y aprenden con facilidad.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <BarChart3 className="h-6 w-6 text-accent flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold">Reducción de costes</h3>
                          <p className="text-gray-600">Menores costes de contratación y posibilidad de formación a medida.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <ShieldCheck className="h-6 w-6 text-accent flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold">Lealtad y compromiso</h3>
                          <p className="text-gray-600">Mayor compromiso con empresas que les dan su primera oportunidad laboral.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Users className="h-6 w-6 text-accent flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold">Diversidad e innovación</h3>
                          <p className="text-gray-600">Nuevas perspectivas e ideas frescas para impulsar la innovación.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Preguntas frecuentes</h2>
                  
                  <div className="space-y-4">
                    <Collapsible open={isOpenFaq1} onOpenChange={setIsOpenFaq1}>
                      <CollapsibleTrigger className="flex justify-between items-center w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-md">
                        <span className="font-medium">¿Cómo funciona el proceso de contratación?</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${isOpenFaq1 ? 'transform rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pt-2 pb-4">
                        <p className="text-gray-600">
                          Publicar una oferta en nuestra plataforma es sencillo: crea tu perfil de empresa, redacta la oferta con los requisitos necesarios, 
                          y nosotros la haremos llegar a candidatos adecuados. Podrás filtrar perfiles, programar entrevistas y hacer seguimiento, todo desde tu panel de control.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible open={isOpenFaq2} onOpenChange={setIsOpenFaq2}>
                      <CollapsibleTrigger className="flex justify-between items-center w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-md">
                        <span className="font-medium">¿Qué tipos de perfiles puedo encontrar?</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${isOpenFaq2 ? 'transform rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pt-2 pb-4">
                        <p className="text-gray-600">
                          En Impulsa Talento encontrarás perfiles variados: desde recién graduados en áreas como tecnología, marketing, 
                          administración o diseño, hasta jóvenes que han complementado su formación con cursos especializados. Todos ellos 
                          están deseosos de demostrar su valía y comenzar su carrera profesional.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible open={isOpenFaq3} onOpenChange={setIsOpenFaq3}>
                      <CollapsibleTrigger className="flex justify-between items-center w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-md">
                        <span className="font-medium">¿Hay algún tipo de ayuda o bonificación?</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${isOpenFaq3 ? 'transform rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pt-2 pb-4">
                        <p className="text-gray-600">
                          Sí, existen diversas bonificaciones y ayudas para empresas que contratan a jóvenes sin experiencia. 
                          Te informamos sobre los programas actuales como contratos en prácticas, bonificaciones para la formación o ayudas 
                          regionales según la ubicación de tu empresa.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </Card>
                
                <div className="text-center">
                  <Button onClick={() => setActiveTab('publicar')} className="bg-primary hover:bg-primary-hover">
                    Publicar una oferta ahora
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="publicar">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <PlusCircle className="h-12 w-12 text-primary" />
                    <div>
                      <h2 className="text-2xl font-semibold">Publica una oferta de empleo</h2>
                      <p className="text-gray-600">Encuentra al candidato ideal para tu empresa</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">Título del puesto *</Label>
                          <Input 
                            id="title" 
                            name="title" 
                            placeholder="Ej. Desarrollador Web Junior" 
                            value={jobForm.title}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="company">Nombre de la empresa *</Label>
                          <Input 
                            id="company" 
                            name="company" 
                            placeholder="Ej. Tech Solutions SL" 
                            value={jobForm.company}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="contactEmail">Email de contacto *</Label>
                          <Input 
                            id="contactEmail" 
                            name="contactEmail" 
                            type="email" 
                            placeholder="rrhh@ejemplo.com" 
                            value={jobForm.contactEmail}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="location">Ubicación *</Label>
                          <Input 
                            id="location" 
                            name="location" 
                            placeholder="Ej. Madrid" 
                            value={jobForm.location}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="type">Tipo de contrato *</Label>
                          <Select 
                            value={jobForm.type} 
                            onValueChange={(value) => handleSelectChange('type', value)}
                            required
                          >
                            <SelectTrigger id="type">
                              <SelectValue placeholder="Selecciona tipo de contrato" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Tiempo completo">Tiempo completo</SelectItem>
                              <SelectItem value="Media jornada">Media jornada</SelectItem>
                              <SelectItem value="Prácticas">Prácticas</SelectItem>
                              <SelectItem value="Formación">Formación</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="remote">Trabajo remoto</Label>
                          <Select 
                            value={jobForm.remote} 
                            onValueChange={(value) => handleSelectChange('remote', value)}
                          >
                            <SelectTrigger id="remote">
                              <SelectValue placeholder="¿Es trabajo remoto?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="si">Sí</SelectItem>
                              <SelectItem value="hibrido">Híbrido</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="salary">Rango salarial</Label>
                          <Input 
                            id="salary" 
                            name="salary" 
                            placeholder="Ej. 18.000€ - 22.000€ anuales" 
                            value={jobForm.salary}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="flex items-start gap-3 mt-6">
                          <Upload className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">¿Tienes logo de empresa?</p>
                            <p className="text-sm text-gray-500">Sube tu logo para destacar tu oferta</p>
                            <Button variant="outline" size="sm" className="mt-2">
                              Subir imagen
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Descripción del puesto *</Label>
                      <Textarea 
                        id="description" 
                        name="description" 
                        placeholder="Describe las responsabilidades y el día a día del puesto..." 
                        className="min-h-[120px]"
                        value={jobForm.description}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="requirements">Requisitos</Label>
                      <Textarea 
                        id="requirements" 
                        name="requirements" 
                        placeholder="Lista los requisitos, separados por línea. Recuerda que buscamos candidatos sin experiencia." 
                        className="min-h-[120px]"
                        value={jobForm.requirements}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="py-4">
                      <Badge className="bg-accent">
                        <CheckCircle className="h-4 w-4 mr-1" /> 
                        Esta oferta aparecerá en "Para primer empleo"
                      </Badge>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-primary hover:bg-primary-hover">
                        Publicar oferta
                      </Button>
                    </div>
                  </form>
                </Card>
              </TabsContent>
              
              <TabsContent value="beneficios">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <FileText className="h-12 w-12 text-primary" />
                    <div>
                      <h2 className="text-2xl font-semibold">Planes y beneficios</h2>
                      <p className="text-gray-600">Selecciona el plan que mejor se adapte a tus necesidades de contratación</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">Plan Básico</h3>
                      <p className="text-3xl font-bold mb-4">Gratis</p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>1 oferta activa</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>7 días de visibilidad</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Acceso a candidatos</span>
                        </div>
                        <div className="flex items-start text-gray-400">
                          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>Sin destacados</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">Seleccionar</Button>
                    </div>
                    
                    <div className="border border-primary rounded-lg p-6 shadow-md relative">
                      <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 text-sm rounded-bl-lg rounded-tr-lg">
                        Popular
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Plan Empresa</h3>
                      <p className="text-3xl font-bold mb-4">49€<span className="text-base font-normal">/mes</span></p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>5 ofertas activas</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>30 días de visibilidad</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Ofertas destacadas</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Filtrado avanzado</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary-hover">Seleccionar</Button>
                    </div>
                    
                    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">Plan Premium</h3>
                      <p className="text-3xl font-bold mb-4">99€<span className="text-base font-normal">/mes</span></p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Ofertas ilimitadas</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>60 días de visibilidad</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Posición destacada</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Asesoría personalizada</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">Seleccionar</Button>
                    </div>
                  </div>
                  
                  <div className="mt-12 bg-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">¿Necesitas un plan personalizado?</h3>
                    <p className="mb-4">Si tu empresa tiene necesidades específicas o deseas contratar varios perfiles, contáctanos para crear un plan adaptado a tus necesidades.</p>
                    <Button variant="outline">Contactar con ventas</Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
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

export default Empresas;
