import "./PlantNavItem.scss";

function PlantNavItem({ id, name, updateSelectedPlant }) {
    return (
        <li 
            onClick={() => updateSelectedPlant(id)} 
            className="plant-nav-item"
        >
                {name}
        </li>
    )
}

export default PlantNavItem;