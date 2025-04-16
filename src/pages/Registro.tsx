
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import RegistroForm from "@/components/registro/RegistroForm";

const Registro = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Crea tu cuenta</CardTitle>
            <CardDescription className="text-center">
              Regístrate para acceder a todas las funcionalidades
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <RegistroForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registro;
