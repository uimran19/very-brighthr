import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type Employee = {
    name: string
}

// Both are ok because typeescript will infer the type
// let arr1: number[] = [1, 2, 3, 4]
// let arr1 = [1, 2, 3, 4]

// Typescript cannot infer, so it will be never[]
// let arr2 = []

export default function EmployeesPage() {
    const [employees, setEmployees] = useState<Employee[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(()=> {
        async function fetchEmployees() {
            // simulate slow load
            await new Promise(resolve => setTimeout(resolve, 1000))

            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')

            // simulate possible error
            if (Math.random() < 0.25) {  /* normally !res.ok */
                setIsError(true)
                setIsLoading(false)
                return
            }

            const data = await res.json()
            console.log(data.results)
            setEmployees(data.results)
            setIsLoading(false)
        }
        fetchEmployees()
    }, [])

    if (isLoading) return <>
        <div className="min-h-[100vh] flex items-center justify-center">
            <p className="font-bold">Loading employees...</p>
        </div>
    </>

    if(isError) return <p className="font-bold text-red min-h-[100vh] flex items-center justify-center">Failed to load employees</p>

    return (
        <>
            <h1 className="text-center">Employees List</h1>
            <div id="employee-grid" className="grid grid-cols-4 gap-2 pt-4 text-center">
                {employees.map((employee)=> {
                    return <div className="employee-card border-3 hover:bg-blue-700" key={employee.name}>
                        <Link className='text-inherit block' to={`/employee/${employee.name}`}>
                            <span className="text-black font-semibold text-xl block w-full h-full hover:text-white">{employee.name}</span>
                        </Link>
                    </div>
                })}
            </div>
        </>
    )
}