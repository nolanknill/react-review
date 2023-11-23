import { useState } from "react"
import plants from "./data/plants.json";
import SelectedPlant from "./components/SelectedPlant/SelectedPlant";

function App() {
  const [selectedPlant, setSelectedPlant] = useState(plants[0]);

  return (
    <SelectedPlant selectedPlant={selectedPlant}/>
  )
}

export default App
