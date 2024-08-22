import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <>
        <nav className="navbar">
            <Link to = '/'>Home</Link>
            <Link to = '/Portfolio'>Portfolio</Link>
            <Link to = '/Contact'>Contact</Link>            
            <Link to = '/About'>About</Link>
        </nav>
        </>
    )
}