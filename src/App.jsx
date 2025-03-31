import F1StartLights from "./components/F1StartLights";
import InstructionsModal from "./components/InstructionsModal";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <InstructionsModal/>
      <F1StartLights />
    </div>
  );
}

export default App;