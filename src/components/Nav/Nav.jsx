import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './Nav.css';
import resumeMichael from '../../assets/docs/Michael-Hellon-Resume.pdf';

export default function Nav() {
  return(
    <>
    <div className='nav-margin'>
    <Navbar 
      links={[
        <Link className='navbar' key={1} to='/'>Home</Link>,
        <Link className='navbar' key={2} to='/Portfolio'>Portfolio</Link>,
        <a className='navbar' key={3} href="mailto:mwhellon@yahoo.com" title="mwhellon@yahoo.com">Contact</a>,       
        <a className='navbar' key={5} href={resumeMichael}>Resume</a>,
        <a className='navbar' key={6} href="https://www.linkedin.com/in/michael-hellon/" title="LinkedIn">LinkedIn</a>,
      ]}
    />
    </div>
    </>
  ); 
}