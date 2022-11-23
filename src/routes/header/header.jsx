import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';

export default function Header () {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <Navbar expand='lg'>
        <Container>
          <span id='logo' className="material-symbols-outlined">spa</span>
          <Navbar.Brand>
            <Link style={{ textDecoration: 'none' }} to='/'>Leaf Scouts</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='navLink' to='/members'>Members</NavLink>
              <NavLink className='navLink' to='/badges'>Badges</NavLink>
              <NavLink className='navLink' to='/pledge-and-values'>Pledge and Values</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
  
}