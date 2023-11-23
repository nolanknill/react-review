import { useState } from "react"
import "./App.scss";
import plants from "./data/plants.json";
import SelectedPlant from "./components/SelectedPlant/SelectedPlant";
import PlantListNav from "./components/PlantListNav/PlantListNav";

function App() {
  const [selectedPlant, setSelectedPlant] = useState(plants[2]);

  const nonSelectedPlants = plants.filter(( plant ) => {
    return plant.id !== selectedPlant.id
  });

  return (
    <div className="app">
      <PlantListNav className="hello-world" plants={nonSelectedPlants} />
      <SelectedPlant selectedPlant={selectedPlant}/>
    </div>
  )
}

export default App
