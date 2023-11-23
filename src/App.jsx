import { useState } from "react"
import "./App.scss";
import plants from "./data/plants.json";
import SelectedPlant from "./components/SelectedPlant/SelectedPlant";
import PlantListNav from "./components/PlantListNav/PlantListNav";

function App() {
  const [selectedPlant, setSelectedPlant] = useState(plants[0]);

  const updateSelectedPlant = (id) => {
    const foundPlant = plants.find(( plant ) => plant.id === id);

    setSelectedPlant(foundPlant);
  }

  const nonSelectedPlants = plants.filter(( plant ) => {
    return plant.id !== selectedPlant.id
  });

  return (
    <div className="app">
      <PlantListNav 
        updateSelectedPlant={updateSelectedPlant} 
        plants={nonSelectedPlants} />
      <SelectedPlant selectedPlant={selectedPlant}/>
    </div>
  )
}

export default App
