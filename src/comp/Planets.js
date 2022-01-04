import { useState } from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const fetchPlanets = async (key) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${key.queryKey[1]}`)
    return res.json()
}

function Planets() {

    // la data dans usequery va êtres ce qu'on a fetch avec la fonction plus haut (dans le return)
    // le status sera l'avancée de la requête
    const [page, setPage] = useState(1)
    const { data, status } = useQuery(['planets', page], fetchPlanets)

    return (
        <div>
            <h2>Planets</h2>

            <button onClick={() => {
                setPage(prevPage => prevPage + 1)
                console.log("PAGE", page)
            }}>
                Page {page}</button>

            {
                status === "error" && (
                    <div>Erreure Sur les Données</div>
                )
            }
            {
                status === "loading" && (
                    <div>Chargement .... </div>
                )
            }
            {
                status === "success" && (
                    <div>
                        {data.results.map((planet, index) =>
                            <Planet planet={planet} key={index} />
                        )}
                    </div>
                )
            }
        </div >
    )

}

export default Planets