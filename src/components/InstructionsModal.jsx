import "./InstructionsModal.css";

function InstructionsModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Instrucciones</h2>
        <p>Haz clic en "Start Race" para encender los semáforos y empezar la carrera.</p>
        <button className="modal-button" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
}

export default InstructionsModal;
