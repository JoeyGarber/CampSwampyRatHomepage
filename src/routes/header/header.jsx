import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

export default function Header () {
  return (
    <Navbar expand='md'>
      <Navbar.Brand>
        <Link style={{ textDecoration: 'none' }} to='/'>Leaf Scouts</Link>
      </Navbar.Brand>
      <NavLink className='navLink' to='/members'>Members</NavLink>
      <NavLink className='navLink' to='/badges'>Badges</NavLink>
      <NavLink className='navLink' to='/pledge-and-values'>Pledge and Values</NavLink>
    </Navbar>
  )
  
}