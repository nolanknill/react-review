import PlantNavItem from "../PlantNavItem/PlantNavItem";

function PlantListNav({ plants, updateSelectedPlant }) {
    return (
        <ul>
            {plants.map( (plant) => (
                <PlantNavItem 
                    updateSelectedPlant={updateSelectedPlant} 
                    name={plant.name}
                    id={plant.id}
                    key={plant.id}
                />
            ))}
        </ul>
    );
}

export default PlantListNav;