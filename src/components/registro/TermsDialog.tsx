
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TermsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsDialog = ({ open, onOpenChange }: TermsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Términos y Condiciones</DialogTitle>
          <DialogDescription>
            Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="space-y-4 text-sm">
            <p>
              <strong>1. Aceptación de los términos</strong>
            </p>
            <p>
              Al registrarte y utilizar Impulsa Talento, aceptas cumplir con estos términos y condiciones 
              y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, 
              no puedes utilizar nuestros servicios.
            </p>
            <p>
              <strong>2. Uso del servicio</strong>
            </p>
            <p>
              Te comprometes a utilizar el servicio solo para propósitos legales y de manera que no infrinja 
              los derechos de otros usuarios. No utilizarás el servicio para enviar material ilegal, difamatorio, 
              acosador, abusivo o fraudulento.
            </p>
            <p>
              <strong>3. Privacidad</strong>
            </p>
            <p>
              Tu privacidad es importante para nosotros. Nuestra Política de Privacidad describe cómo recopilamos, 
              utilizamos y protegemos tu información personal cuando utilizas nuestro servicio.
            </p>
            <p>
              <strong>4. Cuentas de usuario</strong>
            </p>
            <p>
              Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de restringir el acceso 
              a tu computadora. Aceptas la responsabilidad por todas las actividades que ocurran bajo tu cuenta.
            </p>
            <p>
              <strong>5. Modificaciones del servicio</strong>
            </p>
            <p>
              Nos reservamos el derecho de modificar o discontinuar el servicio en cualquier momento, con o sin previo aviso.
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={() => onOpenChange(false)}>Cerrar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;
