
import { useEffect } from "react";
import Cursos from "../Cursos";

const CursosAdministracion = () => {
  useEffect(() => {
    // Este efecto simula la navegación a la pestaña correcta
    const tabsElement = document.querySelector('[data-value="administracion"]');
    if (tabsElement) {
      (tabsElement as HTMLElement).click();
    }
  }, []);

  return <Cursos defaultTab="administracion" />;
};

export default CursosAdministracion;
