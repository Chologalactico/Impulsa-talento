
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cursos from "../Cursos";

const CursosHabilidades = () => {
  useEffect(() => {
    // Este efecto simula la navegación a la pestaña correcta
    const tabsElement = document.querySelector('[data-value="habilidades"]');
    if (tabsElement) {
      (tabsElement as HTMLElement).click();
    }
  }, []);

  return <Cursos defaultTab="habilidades" />;
};

export default CursosHabilidades;
