import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
// npm i @tanstack/react-query

type FullPokemon = {
    name: string
    sprites: {
        front_default: string
    }
}

export default function EmployeeProfilePage() {

    const { name } = useParams()

    const query = useQuery<FullPokemon>({
        queryKey: [`employee/${name}`],
        queryFn: async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            if (!res.ok) throw new Error("Pokemon not found")
            const data = await res.json()
            console.log(data)
            return data
        }
    })

    // query.isLoading
    // query.data
    // query.error
    // query.isError
    
    if (query.isLoading) return <p>Loading...</p>
    if (query.error) return <p>Error: {query.error.message}</p>
    
    if (!query.data) return <p>Error: No data</p>

    return (
        <>      
            <h1>{query.data.name}</h1>
            <img src={query.data.sprites.front_default} alt={`picture of ${query.data.name}`} />
        </>
    )
}