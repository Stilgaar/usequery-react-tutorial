function Planet({ planet }) {
    return (
        <div className="card">
            <h3>{planet.name}</h3>
            <p> Populace : {planet.population} </p>
            <p> Type : {planet.terrain} </p>
            <p> Gravité : {planet.gravity}</p>
        </div>
    )
}

export default Planet;