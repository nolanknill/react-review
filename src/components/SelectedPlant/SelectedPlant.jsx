import "./SelectedPlant.scss";

function SelectedPlant({ selectedPlant }){
    const { name, type, water_frequency, image_url } = selectedPlant;

    return (
        <main className="selected-plant">
            <h1>{name}</h1>
            <img className="selected-plant__image" src={image_url} alt={name} />
            <h2>{type}</h2>
            <p>This plant should be watered every {water_frequency} day{water_frequency > 1 ? "s" : ""}.</p>
        </main>
    )
}

export default SelectedPlant;