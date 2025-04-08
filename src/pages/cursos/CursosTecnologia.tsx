
import { useEffect } from "react";
import Cursos from "../Cursos";

const CursosTecnologia = () => {
  useEffect(() => {
    // Este efecto simula la navegación a la pestaña correcta
    const tabsElement = document.querySelector('[data-value="tecnologia"]');
    if (tabsElement) {
      (tabsElement as HTMLElement).click();
    }
  }, []);

  return <Cursos defaultTab="tecnologia" />;
};

export default CursosTecnologia;
