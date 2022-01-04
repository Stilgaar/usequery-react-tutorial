function Peep({ peep }) {
    return (
        <div className="card">
            <h3>{peep.name}</h3>
            <p>Date de Naissance : {peep.birth_year}</p>
            <p>Couleur des Yeux : {peep.eye_color}</p>
            <p>Couleur de la peau : {peep.skin_color}</p>
            <p>Masse, parce que pourquoi pas : {peep.mass}</p>
        </div>
    )
}

export default Peep;