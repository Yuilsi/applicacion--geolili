import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import "./Modal.css";

export function Modal() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    
    <div className="map-section">


    <section className="modal-card">
      
      

      <div className="modal__header">
      <button className="chev-back" onClick={() => handleButtonClick("/home")}>
        <FaChevronLeft />
      </button>

      <p>Destino</p>
      </div>

      <hr className="separador-titulo" />

      <div className="botones-ruta">
        <button className="rutas-btn selected-btn">Ruta sugerida</button>
        <button className="rutas-btn">Otra ruta</button>
      </div>
      <div className="ubicaciones">
      <div className="locacion-section">
        <p>Ubicación actual</p>
        <h3 className="gray-bg">Entrada principal 1</h3>
      </div>
      <div className="locacion-section">
        <p>Próximo destino</p>
        <h3 className="gray-bg">Ortopedia</h3>
      </div>
      </div>
      <h3 className="tiempo-estimado">Tiempo estimado: 1:30 min</h3>
        <button id="modal__ir" onClick={() => handleButtonClick("/video")}>Ir</button>
   
    </section>
    </div>
  );
}
