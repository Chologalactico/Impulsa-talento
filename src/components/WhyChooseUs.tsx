import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Star, Award, Handshake, Check } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Por favor ingresa un correo válido"),
  phone: z.string().min(8, "El número debe tener al menos 8 dígitos"),
});

const WhyChooseUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success("¡Gracias por tu interés! Pronto te contactaremos.");
    form.reset();
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir Impulsa Talento?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Star className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experiencia Comprobada</h3>
            <p className="text-gray-600">Más de 1000 jóvenes profesionales colocados exitosamente en empresas líderes.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Formación de Calidad</h3>
            <p className="text-gray-600">Programas de capacitación diseñados junto a expertos de la industria.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Handshake className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Red Empresarial</h3>
            <p className="text-gray-600">Alianzas estratégicas con más de 100 empresas en diversos sectores.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Check className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Acompañamiento Integral</h3>
            <p className="text-gray-600">Seguimiento personalizado durante todo tu proceso de desarrollo profesional.</p>
          </Card>
        </div>

        <div className="max-w-xl mx-auto bg-secondary p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-center mb-6">¿Quieres saber más sobre nuestros beneficios?</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu número de teléfono" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Recibir más información
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
