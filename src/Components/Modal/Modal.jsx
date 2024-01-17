import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import "./Modal.css";

export function Modal() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <button onClick={() => handleButtonClick("/home")}>
        <FaChevronLeft />
      </button>
      <div>
        <button>Ruta sugerida</button>
        <button>Otra ruta</button>
      </div>
      <div>
        <p>Ubicación actual</p>
        <h3>Entrada principal 1</h3>
      </div>
      <div>
        <p>Próximo destino</p>
        <h3>Ortopedia</h3>
      </div>
      <h3>Tiempo estimado: 1:30 min</h3>
      <div>
        <button onClick={() => handleButtonClick("/video")}>Ir</button>
      </div>
    </>
  );
}
