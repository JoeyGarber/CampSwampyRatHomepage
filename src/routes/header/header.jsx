import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

export default function Header () {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <Navbar expand='md'>
      <span id='logo' className="material-symbols-outlined">spa</span>
        <Navbar.Brand>
          <Link style={{ textDecoration: 'none' }} to='/'>Leaf Scouts</Link>
        </Navbar.Brand>
        <NavLink className='navLink' to='/members'>Members</NavLink>
        <NavLink className='navLink' to='/badges'>Badges</NavLink>
        <NavLink className='navLink' to='/pledge-and-values'>Pledge and Values</NavLink>
      </Navbar>
    </>

    

  )
  
}