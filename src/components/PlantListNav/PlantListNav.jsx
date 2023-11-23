import PlantNavItem from "../PlantNavItem/PlantNavItem";

function PlantListNav({ plants}) {
    return (
        <ul>
            {plants.map( (plant) => (
                <PlantNavItem name={plant.name}/>
            ))}
        </ul>
    );
}

export default PlantListNav;