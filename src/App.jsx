import F1StartLights from "./components/F1StartLights";
import InstructionsModal from "./components/InstructionsModal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Inicialmente, el modal está abierto

  const handleClose = () => {
    setIsModalOpen(false); // Al hacer clic en "Entendido", el modal se cierra
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {/* Si el modal está abierto, se muestra */}
      {isModalOpen && <InstructionsModal onClose={handleClose} />}
      
      <F1StartLights />
    </div>
  );
}

export default App;
