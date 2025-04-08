
import { useEffect } from "react";
import Cursos from "../Cursos";

const CursosDiseno = () => {
  useEffect(() => {
    // Este efecto simula la navegación a la pestaña correcta
    const tabsElement = document.querySelector('[data-value="diseno"]');
    if (tabsElement) {
      (tabsElement as HTMLElement).click();
    }
  }, []);

  return <Cursos defaultTab="diseno" />;
};

export default CursosDiseno;
