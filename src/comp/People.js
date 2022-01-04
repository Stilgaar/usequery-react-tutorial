import { useState } from 'react'
import { useQuery } from 'react-query'
import Peep from './Peep'

const fetchPlanets = async (key) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${key.queryKey[1]}`)
    return res.json()
}

function People() {
    const [page, setPage] = useState(1)
    // la data dans usequery va êtres ce qu'on a fetch avec la fonction plus haut (dans le return)
    // le status sera l'avancée de la requête
    const { data, status } = useQuery(['peep', page], fetchPlanets, {
        staleTime: 7000,
        cacheTime: Infinity,
        keepPreviousData: true,
    })
    // ya pleins d'options dans useQuery, on peut les voir par exemple dans le ReactQueryDevtools
    return (
        <div>
            <h2>People</h2>

            {data.previous !== null && <button
                onClick={() => {
                    if (data.previous !== null) {
                        setPage(old => old - 1)
                    }
                }} >
                Page Précédente</button>}
            <span>Page {page}</span>
            {data.next !== null && <button
                onClick={() => {
                    if (data.next !== null) {
                        setPage(old => old + 1)
                    }
                }
                }
            >
                Page Suivante
            </button>}

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
                        {data.results.map((peep, index) =>
                            <Peep peep={peep} key={index} />
                        )}
                    </div>
                )
            }
        </div >
    )

}

export default People;
