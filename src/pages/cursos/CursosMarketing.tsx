
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cursos from "../Cursos";

const CursosMarketing = () => {
  useEffect(() => {
    // Este efecto simula la navegación a la pestaña correcta
    const tabsElement = document.querySelector('[data-value="marketing"]');
    if (tabsElement) {
      (tabsElement as HTMLElement).click();
    }
  }, []);

  return <Cursos defaultTab="marketing" />;
};

export default CursosMarketing;
