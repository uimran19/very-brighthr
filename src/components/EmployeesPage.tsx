import { useEffect, useState } from "react"

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

    useEffect(()=> {
        async function fetchEmployees() {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json()
            setEmployees(data.results)
        }
        fetchEmployees()
    }, [])

    return (
        <>
            <h1>Employees Page</h1>
            {employees.map((employee)=> {
                return <div className="employee-card bg-gray-800" key={employee.name}>
                    
                </div>
            })}
        </>
    )
}