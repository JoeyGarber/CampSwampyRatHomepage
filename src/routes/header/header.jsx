import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

export default function Header () {
  return (
    <Navbar className='header' bg='dark' variant='dark' expand='md'>
      <Navbar.Brand>
        <Link style={{ textDecoration: 'none' }} to='/'>Leaf Scouts</Link>
      </Navbar.Brand>
      <NavLink to='/pictures'>Pictures</NavLink>
      <NavLink to='/badges'>Badges</NavLink>
      <NavLink to='/values'>Pledge and Values</NavLink>
      <NavLink to='/games'>Games</NavLink>
    </Navbar>
  )
  
}