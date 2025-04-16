
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface TermsFieldProps {
  form: UseFormReturn<any>;
  onOpenTerms: () => void;
}

const TermsField = ({ form, onOpenTerms }: TermsFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="aceptaTerminos"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-2">
          <FormControl>
            <Checkbox 
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <div className="text-sm">
              Acepto los{" "}
              <button
                type="button"
                onClick={onOpenTerms}
                className="text-primary underline hover:text-primary/80"
              >
                términos y condiciones
              </button>
            </div>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default TermsField;
