import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FaHome, FaClock } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

export default function Sidebar() {

    return (
        <aside className="bg-[rgb(6,38,59)] flex flex-col justify-center">
            <nav>
                <ul className='text-center text-2xl'>
                    <li>
                        <Link className='w-full inline-flex justify-center items-center gap-2 py-4 hover:bg-white' to="/">
                            <FaHome />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='w-full inline-flex justify-center items-center gap-2 py-4 hover:bg-white' to="/employees">
                            <IoPeopleSharp />
                            Employees
                        </Link>
                    </li>
                    <li>
                        <Link className='w-full inline-flex justify-center items-center gap-2 py-4 hover:bg-white' to="/attendance">
                            <FaClock />
                            Attendance
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}