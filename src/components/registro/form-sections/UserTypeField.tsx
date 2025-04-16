
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";

interface UserTypeFieldProps {
  form: UseFormReturn<any>;
}

const UserTypeField = ({ form }: UserTypeFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="tipoUsuario"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Tipo de usuario</FormLabel>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="individual" 
                value="individual"
                checked={field.value === "individual"}
                onChange={() => field.onChange("individual")}
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="individual">Persona</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="empresa" 
                value="empresa"
                checked={field.value === "empresa"}
                onChange={() => field.onChange("empresa")}
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="empresa">Empresa</Label>
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default UserTypeField;
