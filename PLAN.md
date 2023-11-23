TODO: State, Event Handlers, Props

List of Plants with a Selected Plant

Components:
App
    import plants.json
    state: selectedPlant -> object
    function: updateSelectedPlant(id)
        pseudocode: find plant object by id, setSelectedPlant
    psuedocode: filter plants to not include selected
    
    - PlantListNav
        prop: updateSelectedPlant
        prop: plants (all plants, not including selected)
        
        - 5x PlantNavItem
            prop = updateSelectedPlant
            event handler = call updateSelectedPlant(id)
    
    - SelectedPlant
        prop: selectedPlant
        <h1>
        <img>
        <h2>
        <p>

Functionality:
- onClick of a plant in plant list:
    1. change what the selected plant is
    2. Remove selected plant from plant list
    3. Previous selected plant goes back in the list
- home will show the first plant

State:
App:
    - selected plant
