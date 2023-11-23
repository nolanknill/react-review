import { useState } from "react"
import plants from "./data/plants.json";
import SelectedPlant from "./components/SelectedPlant/SelectedPlant";

function App() {
  const [selectedPlant, setSelectedPlant] = useState(plants[3]);

  return (
    <SelectedPlant selectedPlant={selectedPlant}/>
  )
}

export default App
