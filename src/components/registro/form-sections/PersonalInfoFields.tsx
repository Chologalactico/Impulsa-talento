
import { User } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface PersonalInfoFieldsProps {
  form: UseFormReturn<any>;
}

const PersonalInfoFields = ({ form }: PersonalInfoFieldsProps) => {
  return (
    <div className="grid gap-2">
      <div className="flex space-x-4">
        <div className="flex-1">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <FormControl>
                    <Input 
                      placeholder="Tu nombre" 
                      className="pl-10" 
                      {...field} 
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex-1">
          <FormField
            control={form.control}
            name="apellido"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <FormControl>
                    <Input 
                      placeholder="Tu apellido" 
                      className="pl-10" 
                      {...field} 
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoFields;
