import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './Nav.css';

export default function Nav() {
  return(
    <>
    <div className='nav-margin'>
    <Navbar 
      links={[
        <Link className='navbar' key={1} to='/'>Home</Link>,
        <Link className='navbar' key={2} to='/Portfolio'>Portfolio</Link>,
        <Link className='navbar' key={3} to='/Contact'>Contact</Link>,       
        // <Link key={4} to='/About'>About</Link>,
        <Link key={5} to='/Resume'>Resume</Link>,
      ]}
    />
    </div>
    </>
  ); 
}