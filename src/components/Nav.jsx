import { Link } from 'react-router-dom'
import Navbar from './components/Navbar';

export default function Nav() {
    return(
        <Navbar
            links={[
            <Link key={1} to='/'>Home</Link>,
            <Link key={2} to='/Portfolio'>Portfolio</Link>,
            <Link key={3} to='/Contact'>Contact</Link>,       
            <Link key={4} to='/About'>About</Link>,
            ]}
        />
    );
}