
import { Mail, Lock } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface CredentialsFieldsProps {
  form: UseFormReturn<any>;
}

const CredentialsFields = ({ form }: CredentialsFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Correo electrónico</FormLabel>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <FormControl>
                <Input 
                  placeholder="tu@ejemplo.com" 
                  className="pl-10" 
                  {...field} 
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contraseña</FormLabel>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <FormControl>
                <Input 
                  type="password" 
                  placeholder="******" 
                  className="pl-10" 
                  {...field} 
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirmar contraseña</FormLabel>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <FormControl>
                <Input 
                  type="password" 
                  placeholder="******" 
                  className="pl-10" 
                  {...field} 
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default CredentialsFields;
